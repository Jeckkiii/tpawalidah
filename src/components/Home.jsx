const Home = () => {

  const misi = [
    "Mampu Membaca dan menghafal Al-Qur’an dengan baik",
    "Menghafal do’a-doa sehari-hari dan do’a Kesehatan",
    "Mengajarkan tata cara sholat yang sesuai dengan syariat",
    "Menerapkan adab dalam kehidupan sehari-hari"
  ];

  return (
    <div className="font-sans text-slate-800 bg-slate-50 selection:bg-[#269a57] selection:text-white">
      {/* HERO SECTION */}
      <section id="home" className="relative pt-16 md:pt-24 pb-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8 z-10 text-center md:text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-green-50 text-[#269a57] text-[10px] font-black uppercase tracking-widest border border-green-100">
              Melahirkan Generasi Qur'ani
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight">
              Pondasi Terbaik Untuk <span className="text-[#269a57]">Masa Kecil</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed font-medium italic">
              "Melahirkan Generasi Qur’ani Yang Berakhlak Mulia"
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#about" className="bg-[#269a57] text-white px-8 py-4 rounded-xl font-black shadow-xl shadow-green-100 hover:scale-105 transition-transform">Profil TPA</a>
              <a href="https://wa.me/6282376881385" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-black shadow-xl hover:scale-105 transition-transform">Hubungi Admin</a>
            </div>
          </div>
          <div className="flex-1 relative w-full min-h-[320px]">
            <div className="absolute inset-0 bg-green-100 rounded-[40px] rotate-3 translate-x-4 translate-y-4"></div>
            <img src="/profil.png" alt="Santri Belajar" className="relative w-full h-full max-h-[360px] object-cover rounded-[40px] shadow-2xl border-4 border-white" />
          </div>
        </div>
      </section>

      {/* PENDAHULUAN (ABOUT) */}
      <section id="about" className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto space-y-12 text-center">
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-widest flex items-center justify-center gap-4">
            <span className="w-12 h-px bg-slate-300"></span>
            Pendahuluan
            <span className="w-12 h-px bg-slate-300"></span>
          </h2>
          <div className="prose prose-slate max-w-none text-slate-600 leading-[2] text-justify space-y-8 font-medium">
            <p>
              Mendidik anak pada masa kecil berarti meletakkan pondasi dan kepribadian, sebab pada masa kecil merupakan masa pembentukan dasar kepribadian seseorang. Perkembangan anak disebabkan oleh faktor dalam diri anak dan faktor lingkungan di mana anak itu berada.
            </p>
            <p>
              Taman Pendidikan al-Qur’an (TPA) Walidah Dahlan hadir sebagai lembaga yang membantu meletakkan dasar santri ke arah perkembangan sikap, perilaku, pengetahuan tajwid, maupun tauhid agar menjadi muslim yang berkualitas demi menghadapi era globalisasi.
            </p>
          </div>
        </div>
      </section>

      {/* VISI MISI SECTION */}
      <section id="vision" className="py-24 px-6 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
            <img
              src="/misi.jpeg"
              alt="Santri Belajar" 
              className="w-full h-full object-cover min-h-[420px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <p className="text-sm uppercase tracking-[0.4em] text-green-200 mb-3">Nilai Utama</p>
              <h3 className="text-3xl font-black leading-tight">Belajar dengan penuh semangat, doa, dan akhlak mulia.</h3>
            </div>
          </div>

          <div className="space-y-8">
            <div className="p-10 rounded-[32px] bg-[#f5fdf4] border border-emerald-100 shadow-sm">
              <p className="text-[#269a57] font-black text-xs uppercase tracking-widest mb-4">Visi Kami</p>
              <h3 className="text-4xl font-black text-slate-900 leading-tight">
                Melahirkan generasi Qur’ani yang berakhlak mulia.
              </h3>
              {/* <p className="mt-4 text-slate-600 leading-relaxed">
                Menjadi TPA pilihan keluarga dalam membentuk anak yang cerdas Al-Qur'an, berakhlak, dan siap berkontribusi di masyarakat.
              </p> */}
            </div>

            <div className="grid gap-4">
              <div className="p-8 rounded-[32px] bg-slate-950 text-white shadow-xl">
                <p className="text-sm uppercase tracking-[0.35em] text-emerald-300 mb-4">Misi Utama</p>
                <div className="space-y-4">
                  {misi.map((text, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-sm font-black">{i + 1}</span>
                      <p className="text-slate-100 leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WAKTU & TEMPAT */}
      <section id="schedule" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-600 font-black">Waktu & Tempat</p>
            <h2 className="text-5xl font-black text-slate-900 leading-tight">Belajar nyaman bersama di lokasi yang bersahabat.</h2>
            <p className="text-slate-600 leading-relaxed max-w-xl">
              Kegiatan TPA Walidah Dahlan diselenggarakan di lingkungan Masjid yang aman dan mendukung, dengan jadwal yang dirancang untuk memudahkan anak-anak dan keluarga.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[32px] bg-white p-8 shadow-xl border border-slate-200">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-3">Hari Pelaksanaan</p>
              <h3 className="text-3xl font-black text-slate-900">Senin, Rabu, Jumat</h3>
              {/* <p className="mt-3 text-slate-600">Kegiatan rutin setiap minggu dengan suasana belajar yang menyenangkan.</p> */}
            </div>
            <div className="rounded-[32px] bg-white p-8 shadow-xl border border-slate-200">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-3">Jam Belajar</p>
              <h3 className="text-3xl font-black text-slate-900">16.00 - 17.15 WIB</h3>
              {/* <p className="mt-3 text-slate-600">Waktu yang ideal untuk anak pulang sekolah dan tetap segar untuk belajar Al-Qur’an.</p> */}
            </div>
            <div className="rounded-[32px] bg-[#269a57] p-8 shadow-xl border border-emerald-600 text-white">
              <p className="text-xs uppercase tracking-[0.35em] text-emerald-200 mb-3">Lokasi</p>
              <h3 className="text-3xl font-black">Masjid Walidah Dahlan</h3>
              {/* <p className="mt-3 text-emerald-100">Tempat belajar yang nyaman, bersih, dan terang untuk mendukung kegiatan keagamaan.</p> */}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;