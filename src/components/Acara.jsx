import useReveal from "../hooks/useReveal";

export default function Acara() {
  useReveal();

  return (
    <section id="acara" className="acara-section">
      <div className="container">
        <h2 className="acara-title reveal">RANGKAIAN ACARA UTAMA</h2>
        <p className="acara-subtitle reveal">
          Empat acara spektakuler yang penuh dengan edukasi, hiburan, dan
          penghargaan untuk komunitas kucing Indonesia
        </p>

        <div className="acara-grid">
          {/* CARD 1 */}
          <div className="acara-card reveal">
            <span className="acara-number">1</span>

            <h3 className="acara-card-title">MUKERNAS ICA 2025</h3>

            <p className="acara-desc">
              Laporan kerja, evaluasi, dan penyusunan program 2026 untuk
              kemajuan komunitas kucing Indonesia.
            </p>

            <ul className="acara-list">
              <li>Sesi Strategi & Perencanaan</li>
            </ul>
          </div>

          {/* CARD 2 */}
          <div className="acara-card reveal">
            <span className="acara-number">2</span>

            <h3 className="acara-card-title">EXPO</h3>

            <p className="acara-desc">
              Seminar, Pameran dan Edukasi - Pameran produk untuk kucing,
              seminar, pemeriksaan kesehatan, pemberian obat kutu & obat cacing
              gratis.
            </p>

            <ul className="acara-list">
              <li>Seminar</li>
              <li>Pameran</li>
              <li>Kesehatan Gratis</li>
            </ul>
          </div>

          {/* CARD 3 */}
          <div className="acara-card reveal">
            <span className="acara-number">3</span>

            <h3 className="acara-card-title">GALA DINNER & ICA AWARDS 2025</h3>

            <p className="acara-desc">
              Malam penghargaan dan hiburan tematik "Cartopolitan Style" yang
              penuh kejutan dan kemewahan.
            </p>

            <ul className="acara-list">
              <li>Malam Penghargaan & Hiburan</li>
              <li>Tema: Cartopolitan Style</li>
            </ul>
          </div>

          {/* CARD 4 */}
          <div className="acara-card reveal">
            <span className="acara-number">4</span>

            <h3 className="acara-card-title">YEARBOOK & NETWORKING SESSION</h3>

            <p className="acara-desc">
              Profil owner & kucing berprestasi; kesempatan promosi eksklusif
              bagi sponsor dan jaringan profesional.
            </p>

            <ul className="acara-list">
              <li>Profil Eksklusif</li>
              <li>Networking Opportunity</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
