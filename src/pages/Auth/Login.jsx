import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setDataForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const API_URL =
        "https://vdrwidshwlktwbknnwmp.supabase.co/rest/v1/admin";

      const API_KEY =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkcndpZHNod2xrdHdia25ud21wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2MzYwNjYsImV4cCI6MjA5NzIxMjA2Nn0.3_LyZ84vbuz7eYQ2hvWkuW75wY7iBfAsXamb5ULUTGA";

      const headers = {
        apikey: API_KEY,
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      };

      const response = await axios.get(
        `${API_URL}?email=eq.${dataForm.email}&password=eq.${dataForm.password}`,
        { headers }
      );

      if (response.data.length === 0) {
        throw new Error("Email atau password salah");
      }

      const admin = response.data[0];

      localStorage.setItem("admin", JSON.stringify(admin));

      navigate("/");
    } catch (err) {
      console.error(err);

      setError(
        err.response?.data?.message ||
          err.message ||
          "Login gagal"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        Welcome Back 👋
      </h2>

      {error && (
        <div className="flex items-center gap-2 bg-red-100 text-red-600 p-3 rounded-lg mb-4">
          <BsFillExclamationDiamondFill />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Email */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={dataForm.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm"
            placeholder="Masukkan email"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>

          <input
            type="password"
            name="password"
            value={dataForm.password}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm"
            placeholder="********"
            required
          />
        </div>

        <div className="flex justify-end mb-5">
          <Link
            to="/forgot"
            className="text-sm text-green-600 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 flex justify-center items-center"
        >
          {loading ? (
            <ImSpinner2 className="animate-spin text-xl" />
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
}