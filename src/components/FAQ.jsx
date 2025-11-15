import { useState } from "react";
import useReveal from "../hooks/useReveal";

const faqData = [
  {
    question: "Apa itu acara ICA 2025?",
    answer:
      "ICA 2025 adalah acara tahunan komunitas pecinta kucing yang menggabungkan edukasi, kompetisi, dan networking bagi para pecinta kucing dan pelaku usaha pet care.",
  },
  {
    question: "Kapan dan di mana acara ICA 2025 dilaksanakan?",
    answer:
      "Acara akan diselenggarakan pada 28 - 30 November 2025 di HARRIS Hotel & Residence Riverview, Bali.",
  },
  {
    question: "Siapa saja yang bisa ikut serta dalam acara ini?",
    answer:
      "Semua pecinta kucing dapat ikut serta, mulai dari pemilik kucing, breeder, komunitas, pelaku usaha di bidang pet care, hingga masyarakat umum yang tertarik untuk mengenal dunia kucing lebih dalam.",
  },
  {
    question: "Siapa saja tokoh utama yang terlibat?",
    answer:
      "• Russy Idroes, S.Kom., M.M.: Ketua Umum ICA, pendiri ICA, sekaligus juri internasional yang diakui FIFe.\n• Dr. Ir. I Wayan Koster, M.M.: Gubernur Bali, mendukung acara ini.\n• Dr. Drh. Muhammad Munawaroh, M.M.: Ketua Umum PDHI, mendukung kolaborasi ICA dan PDHI.",
  },
  {
    question: "Apakah ada biaya masuk untuk pengunjung?",
    answer:
      "Tidak. Acara ini gratis dan terbuka untuk umum, tanpa biaya pendaftaran. Namun peserta tetap disarankan mendaftar untuk informasi terbaru.",
  },
  {
    question: "Bagaimana cara registrasi?",
    answer:
      "Cukup klik tombol “Daftar Sekarang”. Setelah registrasi berhasil, peserta akan menerima kode QR untuk masuk ke area acara.",
  },
];

export default function FAQ() {
  useReveal();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="faq-section">
      <h2 className="section-title reveal">TANYA JAWAB (FAQ)</h2>
      <p className="faq-sub reveal">Informasi lengkap tentang acara ICA 2025</p>

      <div className="faq-wrapper">
        {faqData.map((item, i) => (
          <div key={i} className="faq-card reveal">
            <div className="faq-question" onClick={() => toggleAnswer(i)}>
              <span>{item.question}</span>
              <button className="faq-toggle">
                {openIndex === i ? "△" : "▽"}
              </button>
            </div>
            {openIndex === i && (
              <div className="faq-answer">
                {item.answer.split("\n").map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
