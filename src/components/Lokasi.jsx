import useReveal from "../hooks/useReveal";

export default function Lokasi() {
  useReveal();

  return (
    <section id="lokasi" className="lokasi-section">
      <h2 className="section-title reveal">LOKASI EVENT</h2>
      <div className="lokasi-wrapper">
        <div className="lokasi-card lokasi-main reveal">
          <div className="lokasi-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.7230977394047!2d115.17832017413689!3d-8.7178228888791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd246b0d51711e9%3A0x3037c24b5e7fb3cd!2sHotel%20Harris!5e0!3m2!1sid!2sid!4v1763227399717!5m2!1sid!2sid"
              width="100%"
              height="240"
              loading="lazy"
            ></iframe>
          </div>
          <div className="lokasi-info">
            <h3>Alamat</h3>
            <p>
              Ballroom Hotel XYZ Jakarta
              <br />
              12–13 Mei 2025
            </p>
            <a
              href="https://maps.app.goo.gl/JHjbVo6SGfLo1And8"
              target="_blank"
              className="btn-gold"
            >
              Lihat Lokasi
            </a>
          </div>
        </div>

        {/* CARD KANAN: 2 GAMBAR */}
        <div className="lokasi-side">
          <div className="lokasi-card reveal">
            <img src="/landingpage_ICA/harris1.jpg" alt="Harris 1" />
          </div>
          <div className="lokasi-card reveal">
            <img src="/landingpage_ICA/harris2.webp" alt="Harris 2" />
          </div>
        </div>
      </div>
    </section>
  );
}
