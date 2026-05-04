import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Galeri', path: '/gallery' },
    { name: 'Kegiatan', path: '/activities' },
  ];

  return (
    <nav className="fixed w-full bg-[#269a57] z-50 shadow-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-white p-1 shadow-inner overflow-hidden border border-white">
            <img src="/logo.png" alt="Logo TPA" className="w-full h-full object-contain" onError={(e) => e.target.src = "https://via.placeholder.com/40?text=W"} />
          </div>
          <div className="text-white leading-tight">
            <p className="font-black text-lg tracking-tight">MASJID WALIDAH DAHLAN</p>
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-75">Taman Pendidikan Al-Qur'an</p>
          </div>
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-white/80 hover:text-white font-bold text-xs uppercase tracking-widest transition-colors ${
                location.pathname === link.path ? 'text-white' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a href="https://wa.me/6282376881385" className="bg-white text-[#269a57] px-5 py-2 rounded-full font-black text-xs uppercase tracking-widest hover:bg-slate-100 transition-all shadow-lg">Daftar</a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="text-2xl">{isMenuOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#269a57] border-t border-white/10">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block text-white/80 hover:text-white font-bold text-xs uppercase tracking-widest transition-colors ${
                  location.pathname === link.path ? 'text-white' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a href="#contact" className="block bg-white text-[#269a57] px-5 py-2 rounded-full font-black text-xs uppercase tracking-widest hover:bg-slate-100 transition-all shadow-lg text-center">Daftar</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;