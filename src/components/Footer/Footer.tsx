import './Footer.css';
import { SocialIcon } from '../SocialIcon';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div>
          <h3>Ariana Nunes</h3>
          <p>Consultora Imobiliária | Somma</p>
          <p className="footer-contact"><SocialIcon name="whatsapp" /><strong>WhatsApp:</strong> <a href="https://wa.me/5521988659172">(21) 98865-9172</a></p>
          <p className="footer-contact"><SocialIcon name="instagram" /><strong>Instagram:</strong> <a href="https://www.instagram.com/ariana_nsb/" target="_blank" rel="noreferrer">@ariana_nsb</a></p>
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
