import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          {/* Logo */}
          <div className="nav-logo">
            <img src="/landingpage_ICA/logo-ICA.png" alt="ICA Logo" className="logo-glow" />
            <h4>Indonesian Cat Association</h4>
          </div>

          {/* Desktop Menu */}
          <div className="nav-menu">
            <Link to="hero" smooth duration={400}>
              Beranda
            </Link>
            <Link to="about" smooth duration={400}>
              Tentang
            </Link>
            <Link to="pembicara" smooth duration={400}>
              Pembicara
            </Link>
            <Link to="jadwal" smooth duration={400}>
              Jadwal
            </Link>
            <Link to="lokasi" smooth duration={400}>
              Lokasi
            </Link>
            <Link to="sponsor" smooth duration={400}>
              Sponsor
            </Link>
            <Link to="faq" smooth duration={400}>
              FAQ
            </Link>
          </div>

          {/* Hamburger Button */}
          <div className="hamburger" onClick={() => setOpen(!open)}>
            <span className={open ? "h-line open" : "h-line"}></span>
            <span className={open ? "h-line open" : "h-line"}></span>
            <span className={open ? "h-line open" : "h-line"}></span>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <Link onClick={() => setOpen(false)} to="hero" smooth duration={400}>
          Beranda
        </Link>
        <Link onClick={() => setOpen(false)} to="about" smooth duration={400}>
          Tentang
        </Link>
        <Link
          onClick={() => setOpen(false)}
          to="pembicara"
          smooth
          duration={400}
        >
          Pembicara
        </Link>
        <Link onClick={() => setOpen(false)} to="jadwal" smooth duration={400}>
          Jadwal
        </Link>
        <Link onClick={() => setOpen(false)} to="lokasi" smooth duration={400}>
          Lokasi
        </Link>
        <Link onClick={() => setOpen(false)} to="sponsor" smooth duration={400}>
          Sponsor
        </Link>
        <Link onClick={() => setOpen(false)} to="faq" smooth duration={400}>
          FAQ
        </Link>
      </div>
    </>
  );
}
