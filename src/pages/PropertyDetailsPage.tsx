import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { properties } from '../data/properties';
import './PropertyDetailsPage.css';

export function PropertyDetailsPage() {
  const { id } = useParams();
  const property = properties.find((item) => item.id === Number(id));
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

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
    property.id === 4
      ? [
          `${basePath}images/iconyc-1-perfil-inteiro.jpg`,
          `${basePath}images/iconyc-3-predios.jpg`,
          `${basePath}images/iconyc-4-cobertura-duplex.jpg`,
          `${basePath}images/iconyc-5-cobertura-2-quartos.jpg`,
          `${basePath}images/iconyc-6-botafogo.jpg`,
          `${basePath}images/iconyc-7-interiores.jpg`,
          `${basePath}images/iconyc-8-interiores.jpg`,
          `${basePath}images/iconyc-9-interiores.jpg`,
          `${basePath}images/iconyc-10-interiores.jpg`,
          `${basePath}images/iconyc-11-interiores.jpg`,
        ]
      : property.id === 1
        ? [
            `${basePath}images/pool-bar-rooftop.jpg`,
            `${basePath}images/QUARTO-CASAL-APTO-2Q-F24-scaled.jpg`,
            `${basePath}images/SALA-APTO-1Q-F28-scaled.jpg`,
            `${basePath}images/symphony-3-quartos.jpg`,
            `${basePath}images/symphony-2-quartos.jpg`,
            `${basePath}images/symphony-1-quarto.jpg`,
          ]
        : [property.image, property.image, property.image];

  useEffect(() => {
    if (selectedImageIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImageIndex(null);
        setZoomLevel(1);
      }

      if (event.key === 'ArrowRight') {
        setSelectedImageIndex((currentIndex) =>
          currentIndex === null
            ? 0
            : currentIndex === galleryImages.length - 1
              ? 0
              : currentIndex + 1,
        );
        setZoomLevel(1);
      }

      if (event.key === 'ArrowLeft') {
        setSelectedImageIndex((currentIndex) =>
          currentIndex === null
            ? 0
            : currentIndex === 0
              ? galleryImages.length - 1
              : currentIndex - 1,
        );
        setZoomLevel(1);
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [galleryImages.length, selectedImageIndex]);

  const openImage = (index: number) => {
    setSelectedImageIndex(index);
    setZoomLevel(1);
  };

  const closeImage = () => {
    setSelectedImageIndex(null);
    setZoomLevel(1);
  };

  const goToPreviousImage = () => {
    setSelectedImageIndex((currentIndex) =>
      currentIndex === null
        ? 0
        : currentIndex === 0
          ? galleryImages.length - 1
          : currentIndex - 1,
    );
    setZoomLevel(1);
  };

  const goToNextImage = () => {
    setSelectedImageIndex((currentIndex) =>
      currentIndex === null
        ? 0
        : currentIndex === galleryImages.length - 1
          ? 0
          : currentIndex + 1,
    );
    setZoomLevel(1);
  };

  const amenities = [
    'Piscina com deck integrada',
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
              <button
                key={`${image}-${index}`}
                className="gallery-item"
                type="button"
                onClick={() => openImage(index)}
                aria-label={`Abrir imagem ${index + 1} da galeria`}
              >
                <img src={image} alt={`${property.title} ${index + 1}`} />
              </button>
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
          {property.id === 4
            ? 'O ICONYC oferece uma experiência exclusiva em Botafogo, com plantas flexíveis para duplex e suítes, três vagas por unidade e acabamento premium em uma localização estratégica do Rio de Janeiro.'
            : property.id === 2
              ? 'O Connect Square Centro traz conveniência urbana ao lado do Terminal Menezes Cortes, com rooftop, studios modernos e opções de 1 e 2 quartos para quem busca mobilidade e estrutura completa.'
              : property.id === 3
                ? 'O IPA Studios Design, em Ipanema, alia arquitetura contemporânea e lazer premium, com solarium, piscina e unidades de alto padrão para quem quer viver com estilo e conforto.'
                : 'O Symphony Flamengo representa uma oportunidade rara na Zona Sul, reunindo localização histórica, design sofisticado e infraestrutura de alto padrão em um projeto que valoriza tanto o estilo de vida quanto o potencial de investimento.'}
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

      {selectedImageIndex !== null ? (
        <div className="gallery-modal" role="dialog" aria-modal="true" aria-label="Visualização da galeria do imóvel">
          <div className="gallery-modal__backdrop" onClick={closeImage} />
          <div className="gallery-modal__content">
            <button className="gallery-modal__close" type="button" onClick={closeImage} aria-label="Fechar galeria">
              ✕
            </button>

            <div className="gallery-modal__main">
              <button className="gallery-modal__nav" type="button" onClick={goToPreviousImage} aria-label="Imagem anterior">
                ←
              </button>

              <div className="gallery-modal__frame">
                <img
                  className="gallery-modal__image"
                  src={galleryImages[selectedImageIndex]}
                  alt={`${property.title} ${selectedImageIndex + 1}`}
                  style={{ transform: `scale(${zoomLevel})` }}
                />
              </div>

              <button className="gallery-modal__nav" type="button" onClick={goToNextImage} aria-label="Próxima imagem">
                →
              </button>
            </div>

            <div className="gallery-modal__controls">
              <button type="button" onClick={() => setZoomLevel((current) => Math.max(1, Number((current - 0.25).toFixed(2))))}>
                − Zoom
              </button>
              <button type="button" onClick={() => setZoomLevel(1)}>
                Resetar
              </button>
              <button type="button" onClick={() => setZoomLevel((current) => Math.min(3, Number((current + 0.25).toFixed(2))))}>
                + Zoom
              </button>
            </div>

            <div className="gallery-modal__thumbnails">
              {galleryImages.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  className={`gallery-modal__thumbnail ${selectedImageIndex === index ? 'is-active' : ''}`}
                  type="button"
                  onClick={() => {
                    setSelectedImageIndex(index);
                    setZoomLevel(1);
                  }}
                  aria-label={`Ir para a imagem ${index + 1}`}
                >
                  <img src={image} alt={`${property.title} ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
