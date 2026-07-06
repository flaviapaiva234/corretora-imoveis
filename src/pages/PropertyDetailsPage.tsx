import { useParams, Link } from 'react-router-dom';
import { properties } from '../data/properties';
import './PropertyDetailsPage.css';

export function PropertyDetailsPage() {
  const { id } = useParams();
  const property = properties.find((item) => item.id === Number(id));

  if (!property) {
    return (
      <main className="property-details-page">
        <h1>Imóvel não encontrado</h1>
        <p>Não foi possível localizar este imóvel.</p>
        <Link className="property-details-page__back" to="/">← Voltar para a home</Link>
      </main>
    );
  }

  const basePath = import.meta.env.BASE_URL;
  const galleryImages =
    property.id === 1
      ? [
          `${basePath}images/pool-bar-rooftop.jpg`,
          `${basePath}images/QUARTO-CASAL-APTO-2Q-F24-scaled.jpg`,
          `${basePath}images/SALA-APTO-1Q-F28-scaled.jpg`,
        ]
      : [property.image, property.image, property.image];

  const amenities = [
    'Piscina com deck integrado',
    'Academia e espaço wellness',
    'Coworking e lounge gourmet',
    'Segurança 24 horas',
    'Vista privilegiada e localização premium',
  ];

  return (
    <main className="property-details-page">
      <Link className="property-details-page__back" to="/">
        ← Voltar para imóveis
      </Link>

      <section className="details-hero">
        <img className="details-hero__image" src={property.image} alt={property.title} />

        <div className="details-card">
          <span className="details-card__eyebrow">{property.location}</span>
          <h1 className="details-card__title">{property.title}</h1>
          <p className="details-card__description">{property.details?.description || property.summary}</p>
          <p className="details-card__price">{property.price}</p>

          <ul className="details-card__list">
            <li><strong>Endereço:</strong> {property.details?.address || 'Em breve'}</li>
            <li><strong>Área:</strong> {property.area}</li>
            <li><strong>Quartos:</strong> {property.bedrooms}</li>
            <li><strong>Suítes:</strong> {property.suites}</li>
            <li><strong>Garagem:</strong> {property.garage}</li>
          </ul>

          <div className="details-actions">
            <a
              className="details-actions__button details-actions__button--primary"
              href={`https://wa.me/5521988659172?text=${encodeURIComponent(`Olá Ariana, quero saber mais sobre o imóvel ${property.title}`)}`}
              target="_blank"
              rel="noreferrer"
            >
              Falar com Ariana no WhatsApp
            </a>
            <a className="details-actions__button details-actions__button--secondary" href="https://wa.me/5521988659172" target="_blank" rel="noreferrer">
              Agendar visita
            </a>
          </div>
        </div>
      </section>

      <section className="details-grid">
        <div className="details-section">
          <h2 className="details-section__title">Galeria do imóvel</h2>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <img key={`${image}-${index}`} src={image} alt={`${property.title} ${index + 1}`} />
            ))}
          </div>
        </div>

        <div className="details-section">
          <h2 className="details-section__title">Amenidades</h2>
          <ul className="amenities-list">
            {amenities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="details-section" style={{ marginTop: '1.5rem' }}>
        <h2 className="details-section__title">Por que esse imóvel se destaca</h2>
        <p className="details-section__text">
          O Symphony Flamengo representa uma oportunidade rara na Zona Sul, reunindo localização histórica, design sofisticado e infraestrutura de alto padrão em um projeto que valoriza tanto o estilo de vida quanto o potencial de investimento.
        </p>
        {property.details?.condominiumEstimate ? (
          <p className="details-section__text" style={{ marginTop: '0.8rem' }}>
            <strong>Estimativa de condomínio:</strong> {property.details.condominiumEstimate}
          </p>
        ) : null}
        {property.details?.valuesValid ? (
          <p className="details-section__text" style={{ marginTop: '0.5rem' }}>
            <strong>Vigência:</strong> {property.details.valuesValid}
          </p>
        ) : null}
      </section>
    </main>
  );
}
