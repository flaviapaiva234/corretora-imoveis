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

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [id]);

  if (!property) {
    return (
      <main className="property-details-page">
        <h1>Imóvel não encontrado</h1>
        <p>Não foi possível localizar este imóvel.</p>
        <Link className="property-details-page__back" to={`/#property-card-${id}`}>← Voltar para a home</Link>
      </main>
    );
  }

  const basePath = import.meta.env.BASE_URL;

  const getYoutubeEmbedUrl = (videoUrl: string) => {
    try {
      const url = new URL(videoUrl);
      if (url.hostname.includes('youtu.be')) {
        const id = url.pathname.slice(1);
        return `https://www.youtube.com/embed/${id}`;
      }

      if (url.hostname.includes('youtube.com')) {
        if (url.pathname.includes('/watch')) {
          return `https://www.youtube.com/embed/${url.searchParams.get('v')}`;
        }
        if (url.pathname.includes('/shorts/')) {
          const id = url.pathname.split('/shorts/')[1];
          return `https://www.youtube.com/embed/${id}`;
        }
      }
    } catch {
      return null;
    }

    return null;
  };

  const heroMedia = property.heroMedia ?? (property.cardVideo
    ? { type: 'video' as const, src: property.cardVideo, alt: property.title }
    : { type: 'image' as const, src: property.image, alt: property.title });
  const videoEmbedUrl = heroMedia.type === 'video' ? getYoutubeEmbedUrl(heroMedia.src) : null;
  const gaviGalleryImages: GalleryItem[] = Array.from({ length: 22 }, (_, index) => {
    const number = String(index + 2).padStart(2, '0');
    return {
      type: 'image',
      src: `${basePath}images/gavi-${number}.jpg`,
      label: `Gavi ${number}`,
      alt: `Gavi ${number}`,
    } as GalleryItem;
  });

  let galleryItems: GalleryItem[] = [];

  if (property.images && property.images.length > 0) {
    galleryItems = property.images.map((src, i) => ({ type: 'image' as const, src, label: `${property.title} ${i + 1}`, alt: `${property.title} ${i + 1}` }));
  } else if (property.id === 4) {
    galleryItems = Array.from({ length: 72 }, (_, index) => index)
      .filter((index) => index !== 41 && index !== 56)
      .map((index) => {
        const number = String(index).padStart(2, '0');
        return {
          type: 'image' as const,
          src: `${basePath}images/id04/iconyc-${number}.jpg`,
          label: `ICONYC ${number}`,
          alt: `ICONYC ${number}`,
        };
      });
  } else if (property.id === 1) {
    galleryItems = [
      { type: 'image' as const, src: `${basePath}images/pool-bar-rooftop.jpg`, label: 'Symphony Flamengo piscina', alt: 'Symphony Flamengo piscina' },
      { type: 'image' as const, src: `${basePath}images/QUARTO-CASAL-APTO-2Q-F24-scaled.jpg`, label: 'Symphony Flamengo quarto casal', alt: 'Symphony Flamengo quarto casal' },
      { type: 'image' as const, src: `${basePath}images/SALA-APTO-1Q-F28-scaled.jpg`, label: 'Symphony Flamengo sala', alt: 'Symphony Flamengo sala' },
      { type: 'image' as const, src: `${basePath}images/symphony-3-quartos.jpg`, label: 'Symphony Flamengo 3 quartos', alt: 'Symphony Flamengo 3 quartos' },
      { type: 'image' as const, src: `${basePath}images/symphony-2-quartos.jpg`, label: 'Symphony Flamengo 2 quartos', alt: 'Symphony Flamengo 2 quartos' },
      { type: 'image' as const, src: `${basePath}images/symphony-1-quarto.jpg`, label: 'Symphony Flamengo 1 quarto', alt: 'Symphony Flamengo 1 quarto' },
    ];
  } else if (property.id === 5) {
    galleryItems = [
      { type: 'image' as const, src: `${basePath}images/id05/arte-wood-00.jpg`, label: 'Arte Wood 01', alt: 'Arte Wood 01' },
      { type: 'image' as const, src: `${basePath}images/id05/arte-wood-01.jpg`, label: 'Arte Wood 02', alt: 'Arte Wood 02' },
      { type: 'image' as const, src: `${basePath}images/id05/arte-wood-02.jpg`, label: 'Arte Wood 03', alt: 'Arte Wood 03' },
      { type: 'image' as const, src: `${basePath}images/id05/arte-wood-03.jpg`, label: 'Arte Wood 04', alt: 'Arte Wood 04' },
      { type: 'image' as const, src: `${basePath}images/id05/arte-wood-04.jpg`, label: 'Arte Wood 05', alt: 'Arte Wood 05' },
      { type: 'image' as const, src: `${basePath}images/id05/arte-wood-05.jpg`, label: 'Arte Wood 06', alt: 'Arte Wood 06' },
      { type: 'image' as const, src: `${basePath}images/id05/arte-wood-06.jpg`, label: 'Arte Wood 07', alt: 'Arte Wood 07' },
      { type: 'image' as const, src: `${basePath}images/id05/arte-wood-07.jpg`, label: 'Arte Wood 08', alt: 'Arte Wood 08' },
      { type: 'image' as const, src: `${basePath}images/id05/arte-wood-08.jpg`, label: 'Arte Wood 09', alt: 'Arte Wood 09' },
      { type: 'image' as const, src: `${basePath}images/id05/arte-wood-09.jpg`, label: 'Arte Wood 10', alt: 'Arte Wood 10' },
      { type: 'image' as const, src: `${basePath}images/id05/arte-wood-10.jpg`, label: 'Arte Wood 11', alt: 'Arte Wood 11' },
      { type: 'image' as const, src: `${basePath}images/id05/arte-wood-11.jpg`, label: 'Arte Wood 12', alt: 'Arte Wood 12' },
      { type: 'image' as const, src: `${basePath}images/id05/arte-wood-12.jpg`, label: 'Arte Wood 13', alt: 'Arte Wood 13' },
      { type: 'image' as const, src: `${basePath}images/id05/arte-wood-13.jpg`, label: 'Arte Wood 14', alt: 'Arte Wood 14' },
      { type: 'image' as const, src: `${basePath}images/id05/arte-wood-14.jpg`, label: 'Arte Wood 15', alt: 'Arte Wood 15' },
      { type: 'image' as const, src: `${basePath}images/id05/arte-wood-15.jpg`, label: 'Arte Wood 16', alt: 'Arte Wood 16' },
      { type: 'image' as const, src: `${basePath}images/id05/arte-wood-16.jpg`, label: 'Arte Wood 17', alt: 'Arte Wood 17' },
      { type: 'image' as const, src: `${basePath}images/id05/arte-wood-17.jpg`, label: 'Arte Wood 18', alt: 'Arte Wood 18' },
      { type: 'image' as const, src: `${basePath}images/id05/arte-wood-18.jpg`, label: 'Arte Wood 19', alt: 'Arte Wood 19' },
      { type: 'image' as const, src: `${basePath}images/id05/arte-wood-19.jpg`, label: 'Arte Wood 20', alt: 'Arte Wood 20' },
      { type: 'image' as const, src: `${basePath}images/id05/arte-wood-20.jpg`, label: 'Arte Wood 21', alt: 'Arte Wood 21' },
      { type: 'image' as const, src: `${basePath}images/id05/arte-wood-21.jpg`, label: 'Arte Wood 22', alt: 'Arte Wood 22' },
      { type: 'image' as const, src: `${basePath}images/id05/arte-wood-22.jpg`, label: 'Arte Wood 23', alt: 'Arte Wood 23' },
      { type: 'image' as const, src: `${basePath}images/id05/arte-wood-23.jpg`, label: 'Arte Wood 24', alt: 'Arte Wood 24' },
      { type: 'image' as const, src: `${basePath}images/id05/arte-wood-24.jpg`, label: 'Arte Wood 25', alt: 'Arte Wood 25' },
      { type: 'image' as const, src: `${basePath}images/id05/arte-wood-25.jpg`, label: 'Arte Wood 26', alt: 'Arte Wood 26' },
      { type: 'image' as const, src: `${basePath}images/id05/arte-wood-26.jpg`, label: 'Arte Wood 27', alt: 'Arte Wood 27' },
      { type: 'image' as const, src: `${basePath}images/id05/arte-wood-27.jpg`, label: 'Arte Wood 28', alt: 'Arte Wood 28' },
      { type: 'image' as const, src: `${basePath}images/id05/arte-wood-28.jpg`, label: 'Arte Wood 29', alt: 'Arte Wood 29' },
      { type: 'image' as const, src: `${basePath}images/id05/arte-wood-29.jpg`, label: 'Arte Wood 30', alt: 'Arte Wood 30' },
      { type: 'image' as const, src: `${basePath}images/id05/arte-wood-30.jpg`, label: 'Arte Wood 31', alt: 'Arte Wood 31' },
    ];
  } else if (property.id === 6) {
    galleryItems = [
      ...gaviGalleryImages,
      ...(property.pdf ? [{ type: 'pdf' as const, src: property.pdf, label: 'Book Gavi', alt: 'Brochura Gavi' }] : []),
    ];
  } else if (property.id === 8) {
    galleryItems = [
      { type: 'image' as const, src: `${basePath}images/id08/kronos-01.jpg`, label: 'Kronos 01', alt: 'Kronos 01' },
      { type: 'image' as const, src: `${basePath}images/id08/kronos-02.jpg`, label: 'Kronos 02', alt: 'Kronos 02' },
      { type: 'image' as const, src: `${basePath}images/id08/kronos-03.jpg`, label: 'Kronos 03', alt: 'Kronos 03' },
      { type: 'image' as const, src: `${basePath}images/id08/kronos-04.jpg`, label: 'Kronos 04', alt: 'Kronos 04' },
      { type: 'image' as const, src: `${basePath}images/id08/kronos-05.jpg`, label: 'Kronos 05', alt: 'Kronos 05' },
      { type: 'image' as const, src: `${basePath}images/id08/kronos-06.jpg`, label: 'Kronos 06', alt: 'Kronos 06' },
      { type: 'image' as const, src: `${basePath}images/id08/kronos-07.jpg`, label: 'Kronos 07', alt: 'Kronos 07' },
      { type: 'image' as const, src: `${basePath}images/id08/kronos-08.jpg`, label: 'Kronos 08', alt: 'Kronos 08' },
      { type: 'image' as const, src: `${basePath}images/id08/kronos-09.jpg`, label: 'Kronos 09', alt: 'Kronos 09' },
      { type: 'image' as const, src: `${basePath}images/id08/kronos-10.jpg`, label: 'Kronos 10', alt: 'Kronos 10' },
      { type: 'image' as const, src: `${basePath}images/id08/kronos-11.jpg`, label: 'Kronos 11', alt: 'Kronos 11' },
    ];
  } else {
    galleryItems = [
      { type: 'image' as const, src: property.image, label: property.title, alt: property.title },
      { type: 'image' as const, src: property.image, label: property.title, alt: property.title },
      { type: 'image' as const, src: property.image, label: property.title, alt: property.title },
    ];
  }

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

  const defaultAmenities = [
    'Piscina com deck integrada',
    'Academia e espaço wellness',
    'Coworking e lounge gourmet',
    'Segurança 24 horas',
    'Vista privilegiada e localização premium',
  ];
  const iconycAmenities = [
    '🏊 Piscina e áreas externas de lazer',
    '🏋️ Espaço fitness e wellness',
    '💆 Espaços dedicados ao relaxamento e bem-estar',
    '🍸 Lounge gourmet e ambientes de convivência',
    '💼 Coworking e espaços de trabalho',
    '💇 Espaço de beleza',
    '📦 Central de encomendas',
    '🧺 Laundry',
    '🚗 Infraestrutura para veículos elétricos',
    '🚲 Estrutura para bicicletas elétricas',
    '🔐 Segurança e controle de acesso',
  ];
  const amenities = property.id === 4 ? iconycAmenities : property.details?.amenities || defaultAmenities;

  return (
    <main className="property-details-page">
      <Link className="property-details-page__back" to={`/#property-card-${property.id}`}>
        ← Voltar para imóveis
      </Link>

      <section className="details-hero">
        {videoEmbedUrl ? (
          <div className="details-hero__video">
            <iframe
              className="details-hero__iframe"
              src={videoEmbedUrl}
              title={heroMedia.alt || property.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <img className="details-hero__image" src={heroMedia.src} alt={heroMedia.alt || property.title} />
        )}

        <div className="details-card">
          <span className="details-card__eyebrow">{property.location}</span>
          <h1 className="details-card__title">{property.title}</h1>
          {property.id === 4 ? (
            <div className="details-card__description">
              <p>O ICONYC By Yoo reúne arquitetura contemporânea, design e uma experiência residencial completa em um dos bairros mais desejados da Zona Sul do Rio.</p>
              <p>Desenvolvido pela <strong>RJZ Cyrela em parceria com a YOO</strong>, o projeto combina apartamentos, gardens e coberturas a uma estrutura pensada para proporcionar conforto, lazer, conveniência e bem-estar.</p>
            </div>
          ) : property.id === 2 ? (
            <div className="details-card__description">
              <p><strong>Viver conectado ao que o Rio tem de melhor.</strong></p>
              <p>O Connect Square é um residencial da Patrimar pensado para quem busca <strong>praticidade, mobilidade e uma nova experiência de morar no Centro do Rio</strong>.</p>
              <p>Localizado na <strong>Av. Graça Aranha, 429</strong>, em frente ao <strong>Terminal Menezes Cortes</strong>, o empreendimento coloca importantes conexões da cidade ao seu alcance.</p>
            </div>
          ) : property.id === 3 ? (
            <div className="details-card__description">
              <p><strong>No Quadrilátero do Charme de Ipanema</strong></p>
              <p>O IPA Studios Design combina localização privilegiada, arquitetura contemporânea e uma estrutura completa para uma experiência de viver 360°.</p>
            </div>
          ) : (
            <p className="details-card__description">{property.details?.description || property.summary}</p>
          )}

          <ul className="details-card__list">
            <li><strong>Endereço:</strong> {property.id === 4 ? 'Rua Mena Barreto, 150 – Botafogo' : property.details?.address || 'Em breve'}</li>
            <li><strong>Área:</strong> {property.area}</li>
            {property.id === 4 ? (
              <>
                <li><strong>Tipologias:</strong> 2 quartos e coberturas duplex*</li>
                <li><strong>Suítes:</strong> conforme unidade</li>
                <li><strong>Garagem:</strong> conforme unidade</li>
              </>
            ) : property.id === 3 ? (
              <>
                <li><strong>Tipologias:</strong> {property.details?.typologies}</li>
                <li><strong>Suítes:</strong> {property.suites}</li>
                <li><strong>Garagem:</strong> {property.garage}</li>
              </>
            ) : property.details?.typologies && property.details.beachDistance ? (
              <>
                <li><strong>Tipologias:</strong> {property.details.typologies}</li>
                <li><strong>Distância da praia:</strong> {property.details.beachDistance}</li>
              </>
            ) : (
              <>
                <li><strong>Quartos:</strong> {property.bedrooms}</li>
                <li><strong>Suítes:</strong> {property.suites}</li>
                <li><strong>Garagem:</strong> {property.garage}</li>
              </>
            )}
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
          <h2 className="details-section__title">
            {property.id === 2 ? 'Vista Privilegiada' : property.id === 10 ? 'Bem-estar e experiências' : 'Lazer e diferenciais'}
          </h2>
          <ul className="amenities-list">
            {amenities.map((item) => (
              <li key={item}>{property.id === 4 ? <strong>{item}</strong> : item}</li>
            ))}
          </ul>
        </div>
      </section>

      {property.details?.characteristics ? (
        <section className="details-section" style={{ marginTop: '1.5rem' }}>
          <h2 className="details-section__title">Características</h2>
          <ul className="details-section__text">
            {property.details.characteristics.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="details-section" style={{ marginTop: '1.5rem' }}>
        <h2 className="details-section__title">Por que esse imóvel se destaca</h2>
        {property.id === 4 ? (
          <>
            <p className="details-section__text">
              <strong>O ICONYC By Yoo vai além de um endereço: é um projeto que combina arquitetura contemporânea, design internacional e uma experiência residencial completa. Em Botafogo, reúne diferentes tipologias, ambientes de lazer, serviços e espaços de convivência em um projeto pensado para acompanhar diferentes estilos de vida.</strong>
            </p>
            <ul className="details-section__text">
              <li>📍 <strong>Localização estratégica</strong> — Botafogo reúne gastronomia, cultura, comércio, serviços e mobilidade em uma das regiões mais completas da Zona Sul.</li>
              <li>✨ <strong>Design internacional</strong> — o projeto conta com a participação do YOO Studio, responsável pelos projetos de decoração e paisagismo.</li>
              <li>🏡 <strong>Diversidade de tipologias</strong> — o empreendimento possui apartamentos, gardens e coberturas, atendendo diferentes perfis de moradores.</li>
              <li>🌿 <strong>Experiência completa</strong> — lazer, bem-estar, conveniência e espaços de convivência integrados à proposta residencial.</li>
            </ul>
          </>
        ) : property.id === 10 ? (
          <p className="details-section__text">
            Mais do que um endereço, o ARTi Leblon é uma peça de design na quadríssima da praia. A apenas 150 metros da orla, reúne arquitetura contemporânea, interiores sofisticados e uma atmosfera de hotel boutique. Com studios, apartamentos de 1 quarto e coberturas lineares de 36 a 72 m², o projeto foi pensado para proporcionar uma experiência diferenciada de viver o Leblon.
          </p>
        ) : property.id === 9 ? (
          <>
            <p className="details-section__text">
              O <strong>Barra Home Design</strong> combina arquitetura contemporânea, espaços amplos e flexibilidade de planta em um projeto pensado para proporcionar uma experiência de moradia diferenciada na Barra da Tijuca. As casas triplex contam com piscina privativa, área gourmet com churrasqueira e integração entre cozinha e living, enquanto o condomínio oferece <strong>4.400 m² de lazer</strong> para toda a família.
            </p>
            <p className="details-section__text">
              A proposta une <strong>privacidade, conforto e lazer</strong>, criando um ambiente que valoriza tanto a rotina quanto os momentos de convivência.
            </p>
          </>
        ) : property.id === 7 ? (
          <>
            <p className="details-section__text">
              <strong>Oro Ilha Pura</strong> tem um posicionamento mais sofisticado dentro do bairro planejado Ilha Pura, na Barra Olímpica. O empreendimento oferece apartamentos de <strong>3 e 4 suítes, de 171 m² a 227 m²</strong>, e coberturas de <strong>251 m² a 461 m²</strong>.
            </p>

            <p className="details-section__text"><strong>🌿 Principais vantagens de morar no Oro Ilha Pura</strong></p>

            <ul className="details-section__text">
              <li><strong>🏡 Mais espaço e conforto:</strong> plantas grandes, com 3 e 4 suítes, pensadas para famílias que valorizam ambientes amplos.</li>
              <li><strong>✨ Alto padrão:</strong> projeto sofisticado e interiores com <strong>design by Ornare</strong>.</li>
              <li><strong>🏊 Lazer completo:</strong> piscina, academia, SPA, salão gourmet, wine bar, churrasqueira e playground.</li>
              <li><strong>💼 Coworking:</strong> espaço profissional para quem trabalha de casa.</li>
              <li><strong>🌳 72 mil m² de parque:</strong> área verde com ciclovias, espaços esportivos e áreas para atividades ao ar livre.</li>
              <li><strong>🔐 Segurança:</strong> controle de acesso, monitoramento, rondas e portaria 24h nos condomínios.</li>
              <li><strong>🌱 Sustentabilidade e urbanismo planejado:</strong> paisagismo e infraestrutura integrada.</li>
              <li><strong>📍 Localização:</strong> entre a lagoa e as montanhas, com acesso à Barra e proximidade da praia.</li>
            </ul>
          </>
        ) : property.id === 5 ? (
          <>
            <p className="details-section__text">
              O <strong>Arte Wood Residences</strong> oferece unidades studios, 2 e 3 quartos, distribuídas em diferentes tipologias. O condomínio conta com uma infraestrutura ampla e diversificada, pensada para atender às diferentes necessidades dos moradores.
            </p>

            <ul className="details-section__text" style={{ textAlign: 'left' }}>
              <li><strong>Unidades de 30 m² a 182 m²</strong> – Desde studios compactos até apartamentos espaçosos</li>
              <li><strong>Tipologias variadas:</strong> apartamentos, up gardens, coberturas duplex, townhouses e lojas</li>
              <li><strong>Áreas de lazer completas:</strong> piscina de surf indoor, academias, spa e salão de festas</li>
              <li><strong>Espaços de conveniência:</strong> coworking, pet park, minimercado e transporte exclusivo até o metrô Jardim Oceânico</li>
              <li><strong>Lojas de conveniência</strong> distribuídas pelas quadras do Cidade Arte</li>
            </ul>

            <p className="details-section__text" style={{ marginTop: '1rem', fontWeight: 'bold', fontSize: '1.1em', textAlign: 'left' }}>
              🌿 Mais de 6 mil m² de verde e lazer.
            </p>
          </>
        ) : property.id === 3 ? (
          <>
            <p className="details-section__text">
              <strong>O IPA Studios Design une a atmosfera sofisticada de Ipanema a uma estrutura completa de lazer, conveniência e tecnologia.</strong> Localizado na Rua Prudente de Morais, no Quadrilátero do Charme, o empreendimento foi pensado para quem valoriza praticidade, conforto e uma experiência contemporânea de viver.
            </p>
            <p className="details-section__text">
              🌊 <strong>Rooftop com vista panorâmica</strong> para o mar de Ipanema e a Lagoa Rodrigo de Freitas.
            </p>
            <p className="details-section__text">
              ✨ <strong>Estrutura completa de lazer e conveniência</strong>, com piscina, academia panorâmica, sauna, hidromassagem, lounges e espaços de convivência.
            </p>
            <p className="details-section__text">
              💼 <strong>Facilities para o dia a dia</strong>, incluindo coworking, meeting room, delivery e lavanderia.
            </p>
            <p className="details-section__text">
              🔐 <strong>Tecnologia e segurança</strong>, com Smart Lock, CFTV com acesso remoto, controle de acesso 24h e aplicativo de serviços.
            </p>
          </>
        ) : (
          <p className="details-section__text">
            {property.id === 6
                  ? 'O Gaví reúne sofisticação, natureza, gastronomia, cultura e bem-estar em um dos bairros mais desejados do Rio de Janeiro. Imagine morar cercado pelo verde, a poucos passos do Baixo Gávea, da PUC, do Planetário e da futura estação de metrô. Um projeto pensado para oferecer conforto, integração e qualidade de vida, com studios, apartamentos de 1, 2 e 3 quartos, UpGardens e uma área de lazer exclusiva com bosque, rooftop, coworking, espaço de estudos, sala de podcast, minimercado e área wellness. Mais do que um empreendimento, o Gaví traduz a essência da Gávea em cada detalhe. ✨ Descubra por que a Gávea vive no Gaví.'
                  : property.id === 8
                    ? 'Kronos by Tegra redefine o significado de morar bem na Zona Oeste. Projetado com sofisticação e conforto, o empreendimento integra volumetria moderna, acabamentos de altíssimo padrão e infraestrutura sustentável. Viva a apenas minutos da Praia da Barra da Tijuca, desfrutando de ciclovias modernas, gastronomia de qualidade e um estilo de vida ativo e saudável. Segurança 24h, lazer de resort, automação residencial e controle biométrico complementam essa experiência exclusiva.'
                    : property.id === 2
                      ? 'O Connect Square Centro traz conveniência urbana ao lado do Terminal Menezes Cortes, com rooftop, studios modernos e opções de 1 e 2 quartos para quem busca mobilidade e estrutura completa.'
                      : property.id === 3
                        ? 'O IPA Studios Design, em Ipanema, alia arquitetura contemporânea e lazer premium, com solarium, piscina e unidades de alto padrão para quem quer viver com estilo e conforto.'
                        : 'O Symphony Flamengo representa uma oportunidade rara na Zona Sul, reunindo localização histórica, design sofisticado e infraestrutura de alto padrão em um projeto que valoriza tanto o estilo de vida quanto o potencial de investimento.'}
          </p>
        )}
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
        {property.details?.contactMessage ? (
          <p className="details-section__text" style={{ marginTop: '0.5rem' }}>
            {property.details.contactMessage}
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
