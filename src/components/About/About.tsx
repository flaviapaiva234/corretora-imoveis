import './About.css';

export function About() {
  return (
    <section className="about" id="about">
      <div className="about-grid">
        <div className="about-text">
          <span>Quem é Ariana</span>
          <h2>Atendimento personalizado para seu imóvel de alto padrão</h2>
          <p>Consultora imobiliária na Patrimóvel, especializada em imóveis de alto padrão. O objetivo é encontrar o imóvel ideal com experiência, segurança e muito cuidado em cada detalhe.</p>
          <ul>
            <li>Atendimento exclusivo e consultivo</li>
            <li>Negócios de alto padrão e alto valor agregado</li>
            <li>Foco em resultados e qualidade de atendimento</li>
          </ul>
          <a className="button" href="#contact">Agende uma consultoria</a>
        </div>
        <div className="about-media">
          <div className="about-image" />
        </div>
      </div>
    </section>
  );
}
