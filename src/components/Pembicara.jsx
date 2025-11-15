import useReveal from "../hooks/useReveal";

export default function Pembicara() {
  useReveal();

  return (
    <section id="pembicara" className="speaker-section">
      <div className="container">
        <h2 className="section-title reveal">PARA PEMBICARA VISIONER</h2>

        <div className="speaker-grid">
          {/* 1 */}
          <div className="speaker-card reveal">
            <div className="speaker-img-wrapper">
              <img src="/wayan.jpg" alt="Wayan" />
            </div>
            <h3>DR. IR. I WAYAN KOSTER, M.M</h3>
            <p className="speaker-role">GUBERNUR BALI</p>
            <div className="speaker-divider"></div>
            <p className="speaker-desc">
              I Wayan Koster, Gubernur Bali, dikenal karena komitmennya menjaga
              budaya, lingkungan, dan pembangunan berkelanjutan berbasis
              kearifan lokal. Di bawah kepemimpinannya, Bali menyeimbangkan
              kemajuan ekonomi, kelestarian alam, dan nilai tradisi,
              menjadikannya model pembangunan berakar pada identitas lokal.
            </p>
          </div>

          {/* 2 */}
          <div className="speaker-card reveal">
            <div className="speaker-img-wrapper">
              <img src="/russy.jpg" alt="Russy" />
            </div>
            <h3>RUSSY IDROES, S.KOM. M.M.</h3>
            <p className="speaker-role">KETUA UMUM ICA</p>
            <div className="speaker-divider"></div>
            <p className="speaker-desc">
              Russy Idroes, pendiri Indonesian Cat Association (ICA) dan Ketua
              Umum periode 2024 - 2027, merupakan tokoh penting dalam
              perkembangan dunia perkucingan Indonesia. Sebagai juri kucing
              non-Eropa yang diakui Fédération Internationale Féline (FIFe), ia
              berperan besar membawa ICA menuju pengakuan internasional dan
              memperkuat komunitas pecinta kucing Indonesia di kancah global.
            </p>
          </div>

          {/* 3 */}
          <div className="speaker-card reveal">
            <div className="speaker-img-wrapper">
              <img src="/munawaroh.jpg" alt="Munawaroh" />
            </div>
            <h3>DR. DRH. MUHAMMAD MUNAWAROH, M.M.</h3>
            <p className="speaker-role">KETUA UMUM PDHI</p>
            <div className="speaker-divider"></div>
            <p className="speaker-desc">
              Munawaroh, dokter hewan dan akademisi, dikenal atas
              kepemimpinannya dalam memperkuat profesi veteriner di Indonesia.
              Sebagai Ketua Umum PDHI, ia berperan aktif meningkatkan kompetensi
              dokter hewan serta mendorong kolaborasi antara akademisi,
              pemerintah, dan komunitas untuk mewujudkan kesejahteraan hewan
              berkelanjutan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
