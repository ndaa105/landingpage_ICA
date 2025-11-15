export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Logo & Info */}
        <div className="footer-logo-info">
          <img src="/logo-ICA.png" alt="ICA Logo" className="footer-logo" />
          <p className="footer-about">
            Organisasi penyayang kucing di Indonesia yang dibentuk pada tanggal
            1 April 2003.
          </p>
        </div>

        {/* Akses Cepat */}
        <div className="footer-links">
          <h4>Akses Cepat</h4>
          <ul>
            <li>
              <a href="#hero">Beranda</a>
            </li>
            <li>
              <a href="#about">Tentang Kami</a>
            </li>
            <li>
              <a href="#pembicara">Pembicara</a>
            </li>
            <li>
              <a href="#jadwal">Jadwal</a>
            </li>
          </ul>
        </div>

        {/* Info Lengkap */}
        <div className="footer-links">
          <h4>Info Lengkap</h4>
          <ul>
            <li>
              <a href="#lokasi">Lokasi</a>
            </li>
            <li>
              <a href="#sponsor">Sponsor</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Contact Info</h4>
          <p>+62 812 8054 3524</p>
          <p>pp@ica.or.id (Pengurus Pusat)</p>
          <p>sekretariat@ica.or.id (Sekretariat)</p>
          <p>
            Grand ITC Permata Hijau 1st Floor Block B.6 Unit 6-7 <br />
            Jl. Arteri Permata Hijau - Jakarta Selatan 12210
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Bintang Kreasi Multivision</p>
      </div>
    </footer>
  );
}
