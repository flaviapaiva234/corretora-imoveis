import './Hero.css';

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay" />
      <div className="hero-content">
        <span className="hero-pretitle">Ariana Nunes | Patrimóvel</span>
        <h1>Consultora Imobiliária de Alto Padrão</h1>
        <p>Imóveis exclusivos no Rio de Janeiro com atendimento personalizado e foco em resultados.</p>
        <div className="hero-actions">
          <a className="button primary" href="#properties">Conheça os imóveis</a>
          <a className="button secondary" href="https://wa.me/5521988659172?text=Ol%C3%A1%20Ariana%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20im%C3%B3veis." target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
