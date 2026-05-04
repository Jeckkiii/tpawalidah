const Footer = () => {
  return (
    <footer id="contact" className="bg-[#269a57] text-slate-100 pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-3">
        <div className="space-y-4">
          <h3 className="text-2xl font-black text-white">TPA Walidah Dahlan</h3>
          <p className="text-emerald-100 leading-relaxed">
            Menyediakan pendidikan Qur’an yang hangat dan profesional untuk anak-anak, dengan fokus pembentukan akhlak, hafalan, dan pemahaman agama.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://wa.me/6282376881385" className="px-4 py-2 rounded-full bg-white text-[#269a57] font-bold text-xs uppercase tracking-widest hover:bg-slate-100 transition">
              WhatsApp
            </a>
            <a href="https://instagram.com/tpawalidahdahlan" className="px-4 py-2 rounded-full border border-emerald-300 text-white font-bold text-xs uppercase tracking-widest hover:border-emerald-200 transition">
              Instagram
            </a>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
          <div>
            {/* <h4 className="text-sm uppercase tracking-[0.35em] text-emerald-200 mb-4">Produk</h4> */}
            {/* <ul className="space-y-3 text-emerald-100">
              <li>Program Hafalan</li>
              <li>Pengajian Anak</li>
              <li>Kajian Orang Tua</li>
              <li>Pelatihan Tajwid</li>
            </ul> */}
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-[0.35em] text-emerald-200 mb-4">Informasi</h4>
            <ul className="space-y-3 text-emerald-100">
  <li>
    Alamat: 
    <a 
      href="https://maps.app.goo.gl/PbJLQABVhYwBBuNT9" 
      target="_blank" 
      rel="noopener noreferrer"
      className="ml-1 underline hover:text-white transition-colors"
    >
      Masjid Walidah Dahlan
    </a>
  </li>
  <li>Hari: Senin, Rabu, Jumat</li>
  <li>Jam: 16.00 - 17.15 WIB</li>
  <li>Email: tpaqalidahdahlan@gmail.com</li>
</ul>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-emerald-300/20 pt-8 text-center text-emerald-100 text-sm">
        <p>© {new Date().getFullYear()} TPA Masjid Walidah Dahlan. Semua hak cipta dilindungi.</p>
      </div>
    </footer>
  );
};

export default Footer;
