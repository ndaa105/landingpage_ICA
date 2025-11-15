import useReveal from "../hooks/useReveal";

export default function Sponsor() {
  useReveal();

  return (
    <section id="sponsor" className="sponsor-section reveal">
      <h2 className="section-title">Para Sponsor</h2>
      <p className="sponsor-sub">
        Didukung dengan penuh semangat oleh para pemimpin industri dalam
        perawatan dan inovasi dunia kucing
      </p>

      {/* Platinum */}
      <h3 className="tier-title">Sponsor Platinum</h3>
      <div className="sponsor-cards">
        <div className="sponsor-card platinum">Royal Canin</div>
        <div className="sponsor-card platinum">Whiskas</div>
      </div>

      {/* Gold */}
      <h3 className="tier-title">Sponsor Gold</h3>
      <div className="sponsor-cards">
        <div className="sponsor-card gold">Purina Pro Plan</div>
        <div className="sponsor-card gold">Hill's Science Diet</div>
        <div className="sponsor-card gold">IAMS</div>
      </div>

      {/* Silver */}
      <h3 className="tier-title">Sponsor Silver</h3>
      <div className="sponsor-cards">
        <div className="sponsor-card silver">Friskies</div>
        <div className="sponsor-card silver">Sheba</div>
        <div className="sponsor-card silver">Fancy Feast</div>
      </div>

      {/* Bronze */}
      <h3 className="tier-title">Sponsor Bronze</h3>
      <div className="sponsor-cards">
        <div className="sponsor-card bronze">Temptations</div>
        <div className="sponsor-card bronze">Greenies</div>
        <div className="sponsor-card bronze">Meow Mix</div>
      </div>
    </section>
  );
}
