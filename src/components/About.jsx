import { useEffect, useRef } from "react";
import gsap from "gsap";
import useReveal from "../hooks/useReveal";

export default function About() {
  useReveal();
  const pawRef = useRef(null);

  useEffect(() => {
    // Infinite paw movement
    gsap.to(pawRef.current, {
      backgroundPositionX: "-200px",
      backgroundPositionY: "-150px",
      duration: 15,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <section id="about" className="about-section" ref={pawRef}>
      <div className="overlay-dimmer"></div>
      <div className="about-container">
        <div className="about-text reveal">
          <h2 className="section-title">TENTANG ICA</h2>

          <p>
            Kucing bukan sekadar hewan peliharaan, melainkan bagian dari gaya
            hidup dan komunitas yang berkembang pesat di Indonesia. Melalui
            Indonesian Cat Association (ICA) bekerjasama dengan Persatuan Dokter
            Hewan Indonesia (PDHI), kami berupaya mempertemukan para pecinta
            kucing, breeder profesional, pelaku industri pet care, serta
            masyarakat umum dalam satu ajang prestisius tingkat nasional.
          </p>

          <p>
            Dengan bangga, ICA menyelenggarakan Mukernas ICA 2025 serta perayaan
            tahunan bergengsi “Gala Dinner, Expo & ICA Awards 2025”. Selama tiga
            hari, acara ini menjadi ajang mempererat jejaring breeder,
            komunitas, dan mitra industri pet care dalam membangun ekosistem
            pecinta kucing di Indonesia, sekaligus menghadirkan pengalaman
            berkelas dan berkesan bagi seluruh peserta.
          </p>
        </div>

        <div className="about-image reveal">
          <img src="/landingpage_ICA/ab-ICA.png" alt="ICA event" />
        </div>
      </div>
    </section>
  );
}
