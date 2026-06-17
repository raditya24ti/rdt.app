import { useState, useEffect } from "react";
import { notesAPI } from "../services/notesAPI";
import { AiFillDelete } from "react-icons/ai";
import PageHeader from "../components/PageHeader";

// KOMPONEN BANTUAN
const AlertBox = ({ type, children }) => {
  const isError = type === "error";

  return (
    <div
      className={`mb-4 p-3 text-sm rounded-xl ${
        isError
          ? "bg-red-100 text-red-700"
          : "bg-emerald-100 text-emerald-700"
      }`}
    >
      {children}
    </div>
  );
};

const LoadingSpinner = ({ text }) => (
  <div className="p-8 text-center text-gray-500 font-medium animate-pulse">
    {text}
  </div>
);

const EmptyState = ({ text }) => (
  <div className="p-8 text-center text-gray-500 italic">{text}</div>
);

const GenericTable = ({ columns, data, renderRow }) => (
  <div className="w-full overflow-x-auto">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="bg-gray-50 border-b border-gray-200">
          {columns.map((col, idx) => (
            <th
              key={idx}
              className="px-6 py-3 text-sm font-semibold text-gray-600"
            >
              {col}
            </th>
          ))}
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-100">
        {data.map((item, index) => (
          <tr
            key={item.id || index}
            className="hover:bg-gray-50 transition-colors"
          >
            {renderRow(item, index)}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);


export default function Notes() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [dataForm, setDataForm] = useState({
    title: "",
    content: "",
    status: "",
  });

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await notesAPI.fetchNotes();
      setNotes(data);
    } catch (err) {
      setError("Gagal memuat catatan");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      await notesAPI.createNote(dataForm);

      setSuccess("Catatan berhasil ditambahkan!");
      setDataForm({
        title: "",
        content: "",
        status: "",
      });

      setTimeout(() => setSuccess(""), 3000);

      await loadNotes();
    } catch (err) {
      // PERBAIKAN: Ditambahkan tanda backtick (`)
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const konfirmasi = window.confirm(
      "Yakin ingin menghapus catatan ini?"
    );

    if (!konfirmasi) return;

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      await notesAPI.deleteNote(id);

      setSuccess("Catatan berhasil dihapus!");

      setTimeout(() => setSuccess(""), 3000);

      await loadNotes();
    } catch (err) {
      // PERBAIKAN: Ditambahkan tanda backtick (`)
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      {/* HEADER */}
      <PageHeader
        title="Notes"
        breadcrumb={["Dashboard", "Notes"]}
      >
        <button
          type="submit"
          form="notesForm"
          disabled={loading}
          className="bg-emerald-500 hover:bg-emerald-600 transition text-white px-4 py-2 rounded-lg shadow-sm"
        >
          {loading ? "Loading..." : "+ Add Note"}
        </button>
      </PageHeader>

      {/* FORM */}
      <div className="mt-6 bg-white rounded-2xl shadow-sm border p-6">

        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Tambah Catatan Baru
        </h3>

        {error && <AlertBox type="error">{error}</AlertBox>}
        {success && <AlertBox type="success">{success}</AlertBox>}

        <form
          id="notesForm"
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            name="title"
            value={dataForm.title}
            placeholder="Judul catatan"
            onChange={handleChange}
            required
            disabled={loading}
            className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 disabled:opacity-50"
          />

          <textarea
            name="content"
            value={dataForm.content}
            placeholder="Isi catatan"
            onChange={handleChange}
            required
            rows="3"
            disabled={loading}
            className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none transition-all duration-200 disabled:opacity-50"
          />

          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-2xl transition-all duration-200 disabled:opacity-50"
          >
            {loading ? "Mohon Tunggu..." : "Tambah Data"}
          </button>
        </form>
      </div>

      {/* TABLE */}
      <div className="mt-6 bg-white rounded-2xl shadow-sm border overflow-hidden">

        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800">
            Daftar Catatan ({notes.length})
          </h3>
        </div>

        {loading && (
          <LoadingSpinner text="Memuat catatan..." />
        )}

        {!loading && notes.length === 0 && !error && (
          <EmptyState text="Belum ada catatan. Tambah catatan pertama!" />
        )}

        {!loading && notes.length === 0 && error && (
          <EmptyState text="Terjadi Kesalahan. Coba lagi nanti." />
        )}

        {!loading && notes.length > 0 && (
          <GenericTable
            columns={["#", "Judul", "Isi Catatan", "Aksi"]}
            data={notes}
            renderRow={(note, index) => (
              <>
                <td className="px-6 py-4 font-medium text-gray-700">
                  {index + 1}
                </td>

                <td className="px-6 py-4">
                  <div className="font-semibold text-emerald-600">
                    {note.title}
                  </div>
                </td>

                <td className="px-6 py-4 max-w-xs">
                  <div className="truncate text-gray-600">
                    {note.content}
                  </div>
                </td>

                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDelete(note.id)}
                    disabled={loading}
                    className="p-2 rounded-full hover:bg-red-50 transition-colors disabled:opacity-50"
                    title="Hapus Catatan"
                  >
                    <AiFillDelete className="text-red-500 text-xl hover:text-red-700" />
                  </button>
                </td>
              </>
            )}
          />
        )}
      </div>

    </div>
  );
}