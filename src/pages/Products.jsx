import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";

export default function Products() {
  const breadcrumb = ["Dashboard", "Product List"];
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false); // State tambahan untuk indikator loading

  useEffect(() => {
    // 1. Buat timer untuk menunda eksekusi API
    const delayDebounceFn = setTimeout(async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/search?q=${query}`,
        );
        setProducts(response.data.products);
        setError(null);
      } catch (err) {
        setError(err.message || "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    }, 500); // Tunggu 500ms setelah user berhenti mengetik

    // 2. Cleanup function: Menghapus timer jika user mengetik lagi sebelum 500ms
    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const errorInfo = error ? (
    <div className="bg-red-200 mb-5 p-5 text-sm font-light text-gray-600 rounded flex items-center">
      <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
      {error}
    </div>
  ) : null;

  return (
    <div>
      <PageHeader title="Products" breadcrumb={breadcrumb} />

      {errorInfo}

      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari produk..."
          className="mb-4 p-3 w-full bg-white rounded-2xl shadow-lg border-none focus:ring-2 focus:ring-emerald-500 outline-none"
        />
        {/* Indikator loading kecil saat debouncing/fetching */}
        {loading && (
          <span className="absolute right-4 top-3 text-emerald-500 text-sm animate-pulse">
            Searching...
          </span>
        )}
      </div>

      <div className="overflow-x-auto shadow-lg rounded-2xl">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-emerald-600 text-white text-left text-sm font-semibold">
              <th className="px-6 py-4">#</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Price</th>
              <th className="px-6 py-4">Vendor</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100 text-sm text-gray-800">
            {products.length > 0 ? (
              products.map((item, index) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4 font-medium text-gray-700">
                    {index + 1}.
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      to={`/products/${item.id}`}
                      className="text-emerald-400 hover:text-emerald-500"
                    >
                      {item.title}
                    </Link>
                  </td>
                  <td className="px-6 py-4 capitalize">{item.category}</td>
                  <td className="px-6 py-4">${item.price}</td>
                  <td className="px-6 py-4">{item.brand || "N/A"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="px-6 py-10 text-center text-gray-400"
                >
                  {loading
                    ? "Tunggu sebentar..."
                    : query
                      ? `Produk "${query}" tidak ditemukan.`
                      : "Tidak ada data."}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
