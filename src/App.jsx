import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Acara from "./components/Acara";
import Pembicara from "./components/Pembicara";
import Jadwal from "./components/Jadwal";
import Lokasi from "./components/Lokasi";
import Sponsor from "./components/Sponsor";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Daftar from "./components/Daftar";

export default function App() {
  const [showDaftar, setShowDaftar] = useState(false);

  return (
    <>
      <Navbar />
      <Hero openDaftar={() => setShowDaftar(true)} />

      <About />
      <Acara />
      <Pembicara />
      <Jadwal />
      <Lokasi />
      <Sponsor />
      <FAQ />
      <Footer />

      {showDaftar && <Daftar close={() => setShowDaftar(false)} />}
    </>
  );
}
