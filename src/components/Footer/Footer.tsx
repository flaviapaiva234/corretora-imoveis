import './Footer.css';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div>
          <h3>Ariana Nunes</h3>
          <p>Consultora Imobiliária | Patrimóvel</p>
          <p style={{marginTop: '0.5rem'}}><strong>WhatsApp: </strong><a href="https://wa.me/5521988659172" style={{color: '#d8d7d3', textDecoration: 'none'}}>(21) 98865-9172</a></p>
          <p style={{margin: 0}}><strong>E-mail: </strong><a href="mailto:ariana.nsb@gmail.com" style={{color: '#d8d7d3', textDecoration: 'none'}}>ariana.nsb@gmail.com</a></p>
        </div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#properties">Imóveis</a>
          <a href="#contact">Contato</a>
        </div>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} Ariana Nunes - Todos os direitos reservados</p>
    </footer>
  );
}
