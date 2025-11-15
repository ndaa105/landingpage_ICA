import { useState, useEffect } from "react";

export default function Jadwal() {
  const [activeDay, setActiveDay] = useState(1);

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const handleScroll = () => {
      revealElements.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const schedule = {
    1: [
      ["13:00 - 14:00", "Registrasi Peserta & Check-In Hotel"],
      ["14:00 - 14:30", "Pembukaan Acara Mukernas ICA 2025"],
      ["14:30 - 14:45", "Menyanyikan Lagu Indonesia Raya & Mars ICA"],
      ["14:45 - 15:15", "Sambutan Ketua Umum ICA<br>Russy Idroes, S.KOM. M.M."],
      ["15:15 - 15:30", "Sambutan Perwakilan FIFe / Tamu Undangan"],
      ["15:30 - 16:00", "Doa & Pembukaan Resmi Mukernas"],
      ["16:00 - 16:15", "Coffee Break"],
      ["16:15 - 18:00", "Sidang Pleno 1 : Laporan Pertanggungjawaban Pengurus"],
      ["18:00 - 19:30", "Istirahat / Makan Malam"],
      ["19:30 - 21:30", "Sesi Diskusi Bebas / Networking Night"],
    ],

    2: [
      ["19:00 - 19:30", "Kedatangan Tamu & Welcome Drink"],
      ["19:30 - 19:45", "Pembukaan Gala Dinner oleh MC"],
      ["19:45 - 20:00", 'Opening Dance "Metropolitan Glamour"'],
      ["20:00 - 20:15", "Sambutan Ketua Umum ICA<br>Russy Idroes, S.KOM. M.M."],
      ["20:15 - 20:30", "Sambutan Perwakilan Sponsor"],
      ["20:30 - 21:00", "Makan Malam & Hiburan Musik"],
      ["21:00 - 22:00", "Awarding Session - Penghargaan Kucing & Owner"],
      ["22:00 - 22:15", "Doorprize Session"],
      ["22:15 - 22:30", 'Fashion Parade "Catropolitan Look"'],
      ["22:30 - 23:00", "Penutupan, Foto Bersama & Live Music"],
    ],

    3: [
      ["07:30 - 08:30", "Sarapan Pagi"],
      ["08:30 - 09:00", "Evaluasi & Penutupan Mukernas"],
      ["09:00 - 09:30", "Pembacaan Keputusan Mukernas 2025"],
      ["09:30 - 10:00", "Penutupan Resmi & Doa Bersama"],
      ["10:00 - 12:00", "Check-out Hotel & Acara Bebas / City Tour Opsional"],
    ],
  };

  return (
    <section className="jadwal-section" id="jadwal">
      <div className="container">
        <h2 className="jadwal-title reveal">JADWAL EVENT</h2>

        <p className="jadwal-sub reveal">
          Tiga hari seru untuk menambah pengetahuan tentang kucing, menjalin
          koneksi, dan merayakan komunitas pecinta kucing.
        </p>

        {/* Selector Hari */}
        <div className="day-selector reveal">
          {[1, 2, 3].map((day) => (
            <div
              key={day}
              className={`day-tab ${activeDay === day ? "active" : ""}`}
              onClick={() => setActiveDay(day)}
            >
              📅 Hari {day} – {28 + (day - 1)} Nov
            </div>
          ))}
        </div>

        {/* LIST JADWAL */}
        <div className="jadwal-list">
          {schedule[activeDay].map(([time, text], i) => (
            <div key={i} className="jadwal-card reveal">
              <div className="jadwal-time">{time}</div>
              <p
                className="jadwal-text"
                dangerouslySetInnerHTML={{ __html: text }}
              ></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
