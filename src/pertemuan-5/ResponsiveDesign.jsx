import React from "react";

function SectionTitle({ num, title }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      {/* Badge nomor dengan aksen biru lembut */}
      <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 font-black text-sm shadow-sm">
        {num}
      </span>
      <h3 className="text-2xl font-extrabold text-slate-800 tracking-tight">
        {title}
      </h3>
    </div>
  );
}

function ResponsiveText() {
  return (
    <div className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-xl shadow-blue-100/50 mb-12">
      <p className="text-blue-600 font-bold text-sm mb-4 uppercase tracking-wider italic">Contoh Ukuran Font:</p>
      <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-lg lg:text-xl xl:text-2xl">
        Coba lakukan zoom in atau zoom out. Perhatikan bahwa ukuran teks akan menyesuaikan dengan ukuran layar secara dinamis.
      </p>
      <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-dashed border-slate-200">
        <code className="text-xs text-slate-500 font-mono">
          Tips: Hapus class breakpoint (md:, lg:) untuk melihat teks kembali statis.
        </code>
      </div>
    </div>
  );
}

function ResponsiveWidth() {
  return (
    <div className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-xl shadow-blue-100/50 mb-12">
      <div className="space-y-4 mb-8 text-slate-600 font-medium">
        <p className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          <strong>md:w-1/2</strong> — Saat layar ≥768px, lebar kolom menjadi 50%.
        </p>
        <p className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          <strong>md:flex-row</strong> — Orientasi berubah dari vertikal ke horizontal di tablet.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Perubahan di sini: py-4 (padding vertikal lebih kecil) dan px-6 (padding horizontal) */}
        <div className="bg-blue-600 text-white font-bold w-full md:w-1/2 py-4 px-6 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200 transition-transform hover:scale-[1.02] cursor-default">
          Kolom 1
        </div>
        <div className="bg-blue-400 text-white font-bold w-full md:w-1/2 py-4 px-6 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-100 transition-transform hover:scale-[1.02] cursor-default">
          Kolom 2
        </div>
      </div>
    </div>
  );
}

function ResponsiveLayout() {
  return (
    <div className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-xl shadow-blue-100/50">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {['grid-cols-1', 'sm:grid-cols-2', 'md:grid-cols-3', 'lg:grid-cols-4'].map((cls) => (
          <div key={cls} className="text-[10px] font-bold bg-blue-50 text-blue-600 p-2 rounded-lg text-center border border-blue-100">
            {cls}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="group bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:bg-blue-600 transition-all duration-300">
            <span className="text-2xl font-black text-slate-300 group-hover:text-blue-200 transition-colors">0{i}</span>
            <p className="text-slate-800 font-bold mt-2 group-hover:text-white transition-colors">Box {i}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ResponsiveDesign() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] px-6 py-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 font-bold tracking-widest uppercase text-[11px] rounded-full mb-4">
            Lab Dokumentasi
          </span>
          <h2 className="text-5xl font-black text-slate-900 tracking-tighter">
            Responsive & <span className="text-blue-600">Grid Guide</span>
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full shadow-lg shadow-blue-200"></div>
        </div>

        <div className="space-y-4">
          <SectionTitle num="01" title="Responsive Typography" />
          <ResponsiveText />

          <SectionTitle num="02" title="Flexible Columns" />
          <ResponsiveWidth />

          <SectionTitle num="03" title="Smart Grid Layout" />
          <ResponsiveLayout />
        </div>

      </div>
    </div>
  );
}