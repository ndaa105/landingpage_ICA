import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ openDaftar }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;

    const animate = () => {
      gsap.fromTo(
        ".hero-content",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
        }
      );
    };

    ScrollTrigger.create({
      trigger: el,
      start: "top 80%",
      onEnter: animate,
      onEnterBack: animate, // ← animasi ulang saat scroll balik ke atas
      onLeave: () => gsap.set(".hero-content", { opacity: 0 }),
      onLeaveBack: () => gsap.set(".hero-content", { opacity: 0 }),
    });

    return () => ScrollTrigger.killAll();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="hero"
      style={{ backgroundImage: "url('/landingpage_ICA/ica1.jpg')" }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-top">GALA DINNER, EXPO & ICA AWARDS 2025</p>

        <h1 className="hero-title">
          Indonesian <br />
          <span className="highlight">Cat Association</span>
        </h1>

        <p className="hero-sub">Catropolitan Style</p>

        <div className="hero-buttons">
          <button className="hero-btn" onClick={openDaftar}>
            Daftar Sekarang
          </button>

          <a href="#jadwal" className="hero-btn">
            Lihat Jadwal
          </a>
        </div>
      </div>
    </section>
  );
}
