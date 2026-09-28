import './Contact.css';
import { SocialIcon } from '../SocialIcon';

export function Contact() {
  return (
    <section className="contact" id="contact">
        <div className="contact-inner">
        <div>
          <span>Contato</span>
          <h2>Fale com a Ariana e agende sua consultoria</h2>
          <p>WhatsApp, Instagram ou Facebook — atendimento rápido para quem busca imóveis de alto padrão no Rio de Janeiro.</p>
        </div>
        <div className="contact-actions">
          <a className="contact-card" href="https://wa.me/5521988659172" target="_blank" rel="noreferrer">
            <strong><SocialIcon name="whatsapp" />WhatsApp</strong>
            <span>(21) 98865-9172</span>
          </a>
          <a className="contact-card" href="https://www.instagram.com/ariana_nsb/" target="_blank" rel="noreferrer">
            <strong><SocialIcon name="instagram" />Instagram</strong>
            <span>@ariana_nsb</span>
          </a>
          <a className="contact-card" href="https://www.facebook.com/sommarioimoveis" target="_blank" rel="noreferrer">
            <strong><SocialIcon name="facebook" />Facebook</strong>
            <span>Somma Imóveis</span>
          </a>
        </div>
      </div>
    </section>
  );
}
