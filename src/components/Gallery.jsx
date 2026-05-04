const Gallery = () => {
  const images = [
    { src: '/a.jpeg', alt: 'Santri Belajar Al-Quran' },
    { src: '/b.jpeg', alt: 'Pengajian Anak-anak' },
    { src: '/c.jpg', alt: 'Kegiatan Hafalan' },
    { src: '/d.jpg', alt: 'Sholat Berjamaah' },
    { src: '/e.jpg', alt: 'Belajar Tajwid' },
    { src: '/f.jpeg', alt: 'Kegiatan TPA' },
    { src: '/g.jpeg', alt: 'Masjid Walidah Dahlan' },
    { src: '/h.jpg', alt: 'Santri Bersama' },
    { src: '/i.jpeg', alt: 'Belajar Doa' },
    { src: '/j.png', alt: 'Belajar Doa' },
    { src: '/k.png', alt: 'Belajar Doa' },
    { src: '/l.JPG', alt: 'Belajar Doa' },
  ];

  return (
    <div className="font-sans text-slate-800 bg-slate-50">
      {/* HEADER */}
      <header className="bg-[#269a57] text-white py-8 px-6 text-center">
        <h1 className="text-5xl font-black tracking-tight mb-4">Galeri TPA Walidah Dahlan</h1>
        <p className="text-xl opacity-90">Koleksi momen berharga dari kegiatan kami</p>
      </header>

      {/* GALLERY GRID */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white font-bold text-lg text-center px-4">{image.alt}</p>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Gallery;