import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() {
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((f) => {
    const matchesSearch = f.name.toLowerCase().includes(_searchTerm) || f.description.toLowerCase().includes(_searchTerm);
    const matchesTag = dataForm.selectedTag ? f.tags.includes(dataForm.selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  const allTags = [...new Set(frameworkData.flatMap((f) => f.tags))];

  return (
    <div className="min-h-screen bg-[#F8FAFC] px-6 pt-16 pb-20">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="mb-12 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <div className="p-3 bg-blue-600 rounded-2xl shadow-lg shadow-blue-200">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
              Framework <span className="text-blue-600">Directory</span>
            </h1>
          </div>
          <p className="text-slate-500 text-lg max-w-2xl font-medium">
            Temukan teknologi terbaik untuk membangun proyek impianmu dengan ekosistem modern.
          </p>
        </header>

        {/* Modern Filter Bar - Glassmorphism Light Version */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 p-3 bg-white border border-slate-200 shadow-xl shadow-blue-100/50 rounded-2xl">
          <div className="flex-1 flex items-center px-4 gap-3 bg-slate-50 rounded-xl border border-slate-100 focus-within:border-blue-300 focus-within:ring-4 focus-within:ring-blue-50 transition-all">
            <span className="text-slate-400 font-bold">🔍</span>
            <input
              type="text"
              name="searchTerm"
              placeholder="Cari framework..."
              className="w-full py-3 bg-transparent text-slate-700 outline-none placeholder-slate-400 font-medium"
              value={dataForm.searchTerm}
              onChange={handleChange}
            />
          </div>
          <select
            name="selectedTag"
            className="md:w-64 px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-600 font-semibold outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50 transition-all cursor-pointer"
            value={dataForm.selectedTag}
            onChange={handleChange}
          >
            <option value="">Semua Kategori</option>
            {allTags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFrameworks.map((item) => (
            <div
              key={item.id}
              className="group bg-white border border-slate-100 p-8 rounded-[2rem] hover:shadow-2xl hover:shadow-blue-200/50 hover:-translate-y-1 transition-all duration-300 flex flex-col relative overflow-hidden"
            >
              {/* Decorative Blue Gradient Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-[5rem] -mr-10 -mt-10 group-hover:bg-blue-100 transition-colors" />

              <div className="flex justify-between items-start mb-6 relative z-10">
                <h2 className="text-2xl font-bold text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors">
                  {item.name}
                </h2>
                <span className="text-[11px] font-bold bg-blue-50 text-blue-600 px-3 py-1 rounded-lg border border-blue-100">
                  {item.details.releaseYear}
                </span>
              </div>

              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-bold text-blue-500 bg-blue-50/50 px-3 py-1.5 rounded-md border border-blue-100/50"
                  >
                    {tag.toUpperCase()}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-50">
                <div>
                  <span className="block text-slate-400 uppercase font-bold text-[9px] tracking-widest mb-1">
                    Developer
                  </span>
                  <span className="text-slate-700 font-bold text-sm">
                    {item.details.developer}
                  </span>
                </div>
                <a
                  href={item.details.officialWebsite}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all shadow-lg shadow-blue-200"
                >
                  Visit Site
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredFrameworks.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 font-medium text-lg">Tidak ada framework yang sesuai dengan pencarianmu.</p>
          </div>
        )}
      </div>
    </div>
  );
}