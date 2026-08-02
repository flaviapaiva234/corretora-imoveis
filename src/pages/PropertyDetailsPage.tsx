import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { properties } from '../data/properties';
import './PropertyDetailsPage.css';

type GalleryItem = {
  type: 'image' | 'pdf';
  src: string;
  label: string;
  alt: string;
};

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
  const gaviGalleryImages: GalleryItem[] = Array.from({ length: 22 }, (_, index) => {
    const number = String(index + 2).padStart(2, '0');
    return {
      type: 'image',
      src: `${basePath}images/gavi-${number}.jpg`,
      label: `Gavi ${number}`,
      alt: `Gavi ${number}`,
    } as GalleryItem;
  });

  const galleryItems = (
    property.id === 4
      ? [
        { type: 'image', src: `${basePath}images/iconyc-1-perfil-inteiro.jpg`, label: 'ICONYC fachada', alt: 'ICONYC fachada' },
        { type: 'image', src: `${basePath}images/iconyc-3-predios.jpg`, label: 'ICONYC prédios', alt: 'ICONYC prédios' },
        { type: 'image', src: `${basePath}images/iconyc-4-cobertura-duplex.jpg`, label: 'ICONYC coberturas duplex', alt: 'ICONYC coberturas duplex' },
        { type: 'image', src: `${basePath}images/iconyc-5-cobertura-2-quartos.jpg`, label: 'ICONYC interiores', alt: 'ICONYC interiores' },
      ]
      : property.id === 1
        ? [
          { type: 'image', src: `${basePath}images/pool-bar-rooftop.jpg`, label: 'Symphony Flamengo piscina', alt: 'Symphony Flamengo piscina' },
          { type: 'image', src: `${basePath}images/QUARTO-CASAL-APTO-2Q-F24-scaled.jpg`, label: 'Symphony Flamengo quarto casal', alt: 'Symphony Flamengo quarto casal' },
          { type: 'image', src: `${basePath}images/SALA-APTO-1Q-F28-scaled.jpg`, label: 'Symphony Flamengo sala', alt: 'Symphony Flamengo sala' },
          { type: 'image', src: `${basePath}images/symphony-3-quartos.jpg`, label: 'Symphony Flamengo 3 quartos', alt: 'Symphony Flamengo 3 quartos' },
          { type: 'image', src: `${basePath}images/symphony-2-quartos.jpg`, label: 'Symphony Flamengo 2 quartos', alt: 'Symphony Flamengo 2 quartos' },
          { type: 'image', src: `${basePath}images/symphony-1-quarto.jpg`, label: 'Symphony Flamengo 1 quarto', alt: 'Symphony Flamengo 1 quarto' },
        ]
        : property.id === 5
          ? [
            { type: 'image', src: property.image, label: 'Jazz apartamento', alt: 'Jazz apartamento' },
            { type: 'image', src: `${basePath}images/jazz-02.jpg`, label: 'Jazz 02', alt: 'Jazz 02' },
            { type: 'image', src: `${basePath}images/jazz-03.jpg`, label: 'Jazz 03', alt: 'Jazz 03' },
            { type: 'image', src: `${basePath}images/jazz-04.jpg`, label: 'Jazz 04', alt: 'Jazz 04' },
            { type: 'image', src: `${basePath}images/jazz-05.jpg`, label: 'Jazz 05', alt: 'Jazz 05' },
            { type: 'image', src: `${basePath}images/jazz-06.jpg`, label: 'Jazz 06', alt: 'Jazz 06' },
            { type: 'image', src: `${basePath}images/jazz-07.jpg`, label: 'Jazz 07', alt: 'Jazz 07' },
            { type: 'image', src: `${basePath}images/jazz-08.jpg`, label: 'Jazz 08', alt: 'Jazz 08' },
            { type: 'image', src: `${basePath}images/jazz-10.jpg`, label: 'Jazz 10', alt: 'Jazz 10' },
            { type: 'image', src: `${basePath}images/jazz-11.jpg`, label: 'Jazz 11', alt: 'Jazz 11' },
            { type: 'image', src: `${basePath}images/jazz-12.jpg`, label: 'Jazz 12', alt: 'Jazz 12' },
            { type: 'image', src: `${basePath}images/jazz-13.jpg`, label: 'Jazz 13', alt: 'Jazz 13' },
            { type: 'image', src: `${basePath}images/jazz-14.jpg`, label: 'Jazz 14', alt: 'Jazz 14' },
            { type: 'image', src: `${basePath}images/jazz-15.jpg`, label: 'Jazz 15', alt: 'Jazz 15' },
            { type: 'image', src: `${basePath}images/jazz-16.jpg`, label: 'Jazz 16', alt: 'Jazz 16' },
            { type: 'image', src: `${basePath}images/jazz-17.jpg`, label: 'Jazz 17', alt: 'Jazz 17' },
            { type: 'image', src: `${basePath}images/jazz-18.jpg`, label: 'Jazz 18', alt: 'Jazz 18' },
            { type: 'image', src: `${basePath}images/jazz-19.jpg`, label: 'Jazz 19', alt: 'Jazz 19' },
            { type: 'image', src: `${basePath}images/jazz-20.jpg`, label: 'Jazz 20', alt: 'Jazz 20' },
            { type: 'image', src: `${basePath}images/jazz-21.jpg`, label: 'Jazz 21', alt: 'Jazz 21' },
            { type: 'image', src: `${basePath}images/jazz-22.jpg`, label: 'Jazz 22', alt: 'Jazz 22' },
            { type: 'image', src: `${basePath}images/jazz-23.jpg`, label: 'Jazz 23', alt: 'Jazz 23' },
            { type: 'image', src: `${basePath}images/jazz-24.jpg`, label: 'Jazz 24', alt: 'Jazz 24' },
            { type: 'pdf', src: property.pdf ?? '', label: 'Book Jazz', alt: 'Brochura Jazz' },
          ]
          : property.id === 6
            ? [
              ...gaviGalleryImages,
              ...(property.pdf
                ? [{ type: 'pdf', src: property.pdf, label: 'Book Gavi', alt: 'Brochura Gavi' }]
                : []),
            ]
            : [
              { type: 'image', src: property.image, label: property.title, alt: property.title },
              { type: 'image', src: property.image, label: property.title, alt: property.title },
              { type: 'image', src: property.image, label: property.title, alt: property.title },
            ]
  ) as GalleryItem[];

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
            : currentIndex === galleryItems.length - 1
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
              ? galleryItems.length - 1
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
  }, [galleryItems.length, selectedImageIndex]);

  const openGalleryItem = (index: number) => {
    const item = galleryItems[index];

    if (item.type === 'pdf') {
      window.open(item.src, '_blank', 'noopener,noreferrer');
      return;
    }

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
          ? galleryItems.length - 1
          : currentIndex - 1,
    );
    setZoomLevel(1);
  };

  const goToNextImage = () => {
    setSelectedImageIndex((currentIndex) =>
      currentIndex === null
        ? 0
        : currentIndex === galleryItems.length - 1
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
              href={`https://wa.me/5521988659172?text=${encodeURIComponent(`Olá Ariana, quero saber mais sobre o imóvel que vi no site ${property.title}.`)}`}
              target="_blank"
              rel="noreferrer"
            >
              Falar com Ariana no WhatsApp
            </a>
            <a
              className="details-actions__button details-actions__button--secondary"
              href={`https://wa.me/5521988659172?text=${encodeURIComponent('Olá Ariana, quero saber mais sobre o imóvel que vi no site.')}`}
              target="_blank"
              rel="noreferrer"
            >
              Agendar visita
            </a>
          </div>
        </div>
      </section>

      <section className="details-grid">
        <div className="details-section">
          <h2 className="details-section__title">Galeria do imóvel</h2>
          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <button
                key={`${item.src}-${index}`}
                className={`gallery-item ${item.type === 'pdf' ? 'gallery-item--pdf' : ''}`}
                type="button"
                onClick={() => openGalleryItem(index)}
                aria-label={item.type === 'pdf' ? `Abrir PDF ${item.label}` : `Abrir imagem ${index + 1} da galeria`}
              >
                {item.type === 'image' ? (
                  <img src={item.src} alt={item.alt} />
                ) : (
                  <div className="gallery-item__pdf">
                    <span>PDF</span>
                    <p>{item.label}</p>
                  </div>
                )}
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
            ? 'Mais do que um endereço, o Iconyc é uma nova forma de viver. Arquitetura marcante, design exclusivo e apartamentos de 2 a 4 quartos, além de gardens e coberturas, em um dos bairros mais desejados do Rio de Janeiro. Viva cercado por cultura, gastronomia, mobilidade e uma vista privilegiada, com toda a sofisticação que você e sua família merecem.'
            : property.id === 5
              ? 'O Jazz nasce em Nova Iguaçu com uma proposta contemporânea de morar, unindo diversidade de tipologias, lazer completo e uma experiência urbana integrada. O projeto conta com 220 unidades, distribuídas entre studios, up gardens, apartamentos de 1 dormitório + office e opções de 2 quartos, com e sem suíte, atendendo diferentes estilos de vida e necessidades. O lazer é um dos grandes destaques, com estrutura completa, incluindo área de lazer no rooftop, piscina, academia, sky bar, coworking, espaços gourmet, churrasqueira, quadra, sauna, espaço pet, lavanderia, minimercado, entre outros ambientes pensados para convivência, bem-estar e funcionalidade.'
              : property.id === 6
                ? 'O Gaví reúne sofisticação, natureza, gastronomia, cultura e bem-estar em um dos bairros mais desejados do Rio de Janeiro. Imagine morar cercado pelo verde, a poucos passos do Baixo Gávea, da PUC, do Planetário e da futura estação de metrô. Um projeto pensado para oferecer conforto, integração e qualidade de vida, com studios, apartamentos de 1, 2 e 3 quartos, UpGardens e uma área de lazer exclusiva com bosque, rooftop, coworking, espaço de estudos, sala de podcast, minimercado e área wellness. Mais do que um empreendimento, o Gaví traduz a essência da Gávea em cada detalhe. ✨ Descubra por que a Gávea vive no Gaví.'
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
                  src={galleryItems[selectedImageIndex].src}
                  alt={galleryItems[selectedImageIndex].alt}
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
              {galleryItems.map((item, index) =>
                item.type === 'image' ? (
                  <button
                    key={`${item.src}-${index}`}
                    className={`gallery-modal__thumbnail ${selectedImageIndex === index ? 'is-active' : ''}`}
                    type="button"
                    onClick={() => {
                      setSelectedImageIndex(index);
                      setZoomLevel(1);
                    }}
                    aria-label={`Ir para a imagem ${index + 1}`}
                  >
                    <img src={item.src} alt={item.alt} />
                  </button>
                ) : null,
              )}
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
