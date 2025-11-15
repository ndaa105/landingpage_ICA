import { useRef, useEffect } from "react";
import gsap from "gsap";
import emailjs from "emailjs-com";

export default function Daftar({ close }) {
  const overlayRef = useRef(null);
  const boxRef = useRef(null);
  const formRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4 }
    );
    gsap.fromTo(
      boxRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_amxvbjs",
        "template_7rjnutb",
        formRef.current,
        "76th2bY_DUK35CE22"
      )
      .then(() => {
        alert("Pendaftaran terkirim!");
        close();
        formRef.current.reset();
      })
      .catch(() => {
        alert("Gagal mengirim. Silakan coba lagi.");
      });
  };

  return (
    <div className="modal-overlay" ref={overlayRef} onClick={close}>
      <div
        className="modal-box"
        ref={boxRef}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="modal-title">Form Pendaftaran</h2>

        <form ref={formRef} onSubmit={handleSubmit} className="modal-form">
          <label>Nama Lengkap</label>
          <input
            type="text"
            name="name"
            placeholder="Masukkan nama lengkap"
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Masukkan email"
            required
          />

          <label>No. Telepon</label>
          <input type="text" name="phone" placeholder="08xxxxxxxxxx" required />

          <label>Asal Komunitas / Instansi</label>
          <input
            type="text"
            name="instansi"
            placeholder="Contoh: ICA Jakarta"
          />

          <label>Keterangan Tambahan</label>
          <textarea name="note" placeholder="Opsional" />

          <button type="submit" className="modal-submit">
            Kirim Pendaftaran
          </button>
        </form>

        <button className="modal-close" onClick={close}>
          ✕
        </button>
      </div>
    </div>
  );
}
