import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
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
  const [isGalleryDragging, setIsGalleryDragging] = useState(false);
  const [swipeOffset, setSwipeOffset] = useState(0);
  const [isSwipeSettling, setIsSwipeSettling] = useState(false);
  const galleryFrameRef = useRef<HTMLDivElement>(null);
  const galleryThumbnailsRef = useRef<HTMLDivElement>(null);
  const zoomAnchorRef = useRef<{ x: number; y: number; imageX: number; imageY: number } | null>(null);
  const galleryWheelHandlerRef = useRef<((event: WheelEvent) => void) | null>(null);
  const activePointersRef = useRef(new Map<number, { x: number; y: number }>());
  const pinchStartRef = useRef<{ distance: number; zoom: number } | null>(null);
  const touchStartRef = useRef<{ pointerId: number; x: number; y: number } | null>(null);
  const swipeAnimationRef = useRef<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [id]);

  useEffect(() => {
    const frame = galleryFrameRef.current;
    if (!frame) return;

    const anchor = zoomAnchorRef.current;
    if (!anchor) {
      if (zoomLevel === 1) frame.scrollTo({ left: 0, top: 0 });
      return;
    }

    frame.scrollLeft = anchor.imageX * frame.clientWidth * zoomLevel - anchor.x;
    frame.scrollTop = anchor.imageY * frame.clientHeight * zoomLevel - anchor.y;
    zoomAnchorRef.current = null;
  }, [zoomLevel]);

  useEffect(() => {
    if (selectedImageIndex !== null) {
      galleryFrameRef.current?.scrollTo({ left: 0, top: 0 });
      galleryThumbnailsRef.current?.querySelector<HTMLElement>('.gallery-modal__thumbnail.is-active')?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [selectedImageIndex]);

  useEffect(() => {
    const frame = galleryFrameRef.current;
    if (!frame || selectedImageIndex === null) return;

    const handleWheel = (event: WheelEvent) => galleryWheelHandlerRef.current?.(event);
    frame.addEventListener('wheel', handleWheel, { passive: false });
    return () => frame.removeEventListener('wheel', handleWheel);
  }, [selectedImageIndex]);

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
  const isPortraitVideo = heroMedia.type === 'video' && heroMedia.src.includes('/shorts/');
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
    setSwipeOffset(0);
    setIsSwipeSettling(false);
  };

  const closeImage = () => {
    setSelectedImageIndex(null);
    setZoomLevel(1);
    setSwipeOffset(0);
    setIsSwipeSettling(false);
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
    setSwipeOffset(0);
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
    setSwipeOffset(0);
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

  const zoomGalleryAtPoint = (
    requestedZoom: number,
    frame: HTMLDivElement,
    x = frame.clientWidth / 2,
    y = frame.clientHeight / 2,
  ) => {
    if (frame.clientWidth === 0 || frame.clientHeight === 0) return;

    const nextZoom = Math.max(1, Math.min(6, Number(requestedZoom.toFixed(2))));
    if (nextZoom === zoomLevel) return;

    const localX = Math.max(0, Math.min(frame.clientWidth, x));
    const localY = Math.max(0, Math.min(frame.clientHeight, y));
    zoomAnchorRef.current = {
      x: localX,
      y: localY,
      imageX: (frame.scrollLeft + localX) / (frame.clientWidth * zoomLevel),
      imageY: (frame.scrollTop + localY) / (frame.clientHeight * zoomLevel),
    };
    setZoomLevel(nextZoom);
  };

  galleryWheelHandlerRef.current = (event: WheelEvent) => {
    event.preventDefault();
    const frame = galleryFrameRef.current;
    if (!frame) return;

    const bounds = frame.getBoundingClientRect();
    const nextZoom = zoomLevel * Math.exp(-event.deltaY * 0.0012);
    zoomGalleryAtPoint(nextZoom, frame, event.clientX - bounds.left, event.clientY - bounds.top);
  };

  const handleGalleryPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse') {
      event.preventDefault();
      event.currentTarget.setPointerCapture(event.pointerId);
      activePointersRef.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
      if (zoomLevel > 1) {
        setIsGalleryDragging(true);
      } else {
        touchStartRef.current = { pointerId: event.pointerId, x: event.clientX, y: event.clientY };
      }
      return;
    }

    if (event.pointerType !== 'touch') return;

    event.currentTarget.setPointerCapture(event.pointerId);
    const pointers = activePointersRef.current;
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (pointers.size === 1) {
      touchStartRef.current = { pointerId: event.pointerId, x: event.clientX, y: event.clientY };
    } else if (pointers.size === 2) {
      touchStartRef.current = null;
      const [first, second] = Array.from(pointers.values());
      pinchStartRef.current = {
        distance: Math.hypot(second.x - first.x, second.y - first.y),
        zoom: zoomLevel,
      };
    }
  };

  const handleGalleryPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const pointers = activePointersRef.current;
    const previous = pointers.get(event.pointerId);
    if (!previous) return;

    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (pointers.size >= 2 && pinchStartRef.current) {
      const [first, second] = Array.from(pointers.values());
      const bounds = event.currentTarget.getBoundingClientRect();
      const centerX = (first.x + second.x) / 2 - bounds.left;
      const centerY = (first.y + second.y) / 2 - bounds.top;
      const distance = Math.hypot(second.x - first.x, second.y - first.y);
      zoomGalleryAtPoint(
        pinchStartRef.current.zoom * distance / pinchStartRef.current.distance,
        event.currentTarget,
        centerX,
        centerY,
      );
    } else if (zoomLevel > 1) {
      event.currentTarget.scrollLeft += previous.x - event.clientX;
      event.currentTarget.scrollTop += previous.y - event.clientY;
    } else if ((event.pointerType === 'touch' || event.pointerType === 'mouse') && touchStartRef.current?.pointerId === event.pointerId) {
      const deltaX = event.clientX - touchStartRef.current.x;
      const deltaY = event.clientY - touchStartRef.current.y;
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        setIsSwipeSettling(false);
        setSwipeOffset(deltaX);
      }
    }
  };

  const handleGalleryPointerEnd = (event: ReactPointerEvent<HTMLDivElement>) => {
    const pointers = activePointersRef.current;
    const touchStart = touchStartRef.current;
    if (event.type === 'pointerup' && (event.pointerType === 'touch' || event.pointerType === 'mouse') && pointers.size === 1 && touchStart?.pointerId === event.pointerId && !pinchStartRef.current && zoomLevel <= 1) {
      const deltaX = event.clientX - touchStart.x;
      const deltaY = event.clientY - touchStart.y;
      const isHorizontalSwipe = Math.abs(deltaX) >= 48 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2;

      if (isHorizontalSwipe) {
        const frameWidth = event.currentTarget.clientWidth;
        setIsSwipeSettling(true);
        setSwipeOffset(deltaX > 0 ? frameWidth : -frameWidth);
        swipeAnimationRef.current = window.setTimeout(() => {
          if (deltaX > 0) {
            goToPreviousImage();
          } else {
            goToNextImage();
          }
          setSwipeOffset(0);
          setIsSwipeSettling(false);
          swipeAnimationRef.current = null;
        }, 220);
      } else {
        setIsSwipeSettling(true);
        setSwipeOffset(0);
        window.setTimeout(() => setIsSwipeSettling(false), 180);
      }
    } else if ((event.pointerType === 'touch' || event.pointerType === 'mouse') && !pinchStartRef.current && zoomLevel <= 1) {
      setIsSwipeSettling(true);
      setSwipeOffset(0);
      window.setTimeout(() => setIsSwipeSettling(false), 180);
    }

    pointers.delete(event.pointerId);
    if (event.pointerType === 'mouse') setIsGalleryDragging(false);
    if (pointers.size < 2) pinchStartRef.current = null;
    if (touchStart?.pointerId === event.pointerId) touchStartRef.current = null;
  };

  const resetGalleryZoom = () => {
    zoomAnchorRef.current = null;
    setZoomLevel(1);
    galleryFrameRef.current?.scrollTo({ left: 0, top: 0 });
  };

  const currentGalleryItem = selectedImageIndex === null ? null : galleryItems[selectedImageIndex];
  const getAdjacentImage = (offset: number) => {
    if (selectedImageIndex === null || galleryItems.length === 0) return currentGalleryItem;

    const index = (selectedImageIndex + offset + galleryItems.length) % galleryItems.length;
    const item = galleryItems[index];
    return item.type === 'image' ? item : currentGalleryItem;
  };
  const previousGalleryItem = getAdjacentImage(-1);
  const nextGalleryItem = getAdjacentImage(1);

  return (
    <main className="property-details-page">
      <Link className="property-details-page__back" to={`/#property-card-${property.id}`}>
        ← Voltar para imóveis
      </Link>

      <section className="details-hero">
        {videoEmbedUrl ? (
          <div className={`details-hero__video ${isPortraitVideo ? 'details-hero__video--portrait' : ''}`}>
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
      </section>

      <section className="details-card">
        <div className="details-card__content">
          <span className="details-card__eyebrow">{property.location}</span>
          {property.subtitle ? <span className="details-card__eyebrow details-card__eyebrow--subline">{property.subtitle}</span> : null}
          <h1 className="details-card__title">{property.title}</h1>
          {property.id === 19 ? (
            <div className="details-card__description">
              <p><strong>Um novo jeito de viver o Centro do Rio</strong></p>
              <p>Localizado na Rua da Quitanda, 23, esquina com a Rua 7 de Setembro, o Q Studios foi pensado para quem valoriza mobilidade, praticidade e uma experiência contemporânea de morar.</p>
              <p>O projeto combina arquitetura contemporânea e interiores inspirados na personalidade urbana do Centro, criando ambientes funcionais e acolhedores. As unidades contam com varanda e o empreendimento oferece uma estrutura completa de lazer, bem-estar, trabalho e serviços.</p>
            </div>
          ) : property.id === 18 ? (
            <div className="details-card__description">
              <p>O ALL Jardim Oceânico foi pensado para quem busca uma experiência residencial que combine conforto, natureza, lazer e praticidade em um dos endereços mais desejados da Barra da Tijuca.</p>
              <p>Localizado no Jardim Oceânico, o empreendimento está a aproximadamente <strong>5 minutos da estação Jardim Oceânico do metrô</strong> e a cerca de <strong>15 minutos da praia</strong>, conectando mobilidade e qualidade de vida.</p>
              <p>O projeto reúne apartamentos de <strong>2 e 3 quartos e coberturas duplex</strong>, além de um masterplan de lazer de aproximadamente <strong>3.500 m²</strong>, com espaços pensados para diferentes momentos do dia e para toda a família.</p>
            </div>
          ) : property.id === 14 ? (
            <div className="details-card__description">
              <p><strong>Viva o novo Recreio.</strong></p>
              <p>O Lanai Pontal Oceânico foi pensado para quem busca uma experiência de moradia que combine conforto, praticidade e contato com a natureza. Localizado no Pontal Oceânico, no Recreio dos Bandeirantes, o projeto reúne apartamentos de 2 e 3 quartos e gardens, com ambientes integrados e varandas com cortina de vidro.</p>
              <p>Com 272 unidades distribuídas em três blocos, o empreendimento oferece uma estrutura completa de lazer e convivência, além de recursos de segurança e soluções sustentáveis.</p>
              <p><strong>Um projeto para quem quer viver o Recreio com mais conforto, natureza e qualidade de vida.</strong></p>
            </div>
          ) : property.id === 15 || property.id === 16 ? (
            <div className="details-card__description">
              <p><strong>{property.id === 16 ? 'Uma vida mais leve e conectada à natureza.' : 'Um espaço para sentir.'}</strong></p>
              <p><strong>{property.id === 16 ? 'O FEEL NATURE Pontal Oceânico foi pensado para quem busca uma vida mais leve, conectada à natureza e com praticidade no dia a dia.' : 'O FEEL SUN Pontal Oceânico foi pensado para quem deseja viver com mais leveza, conexão com a natureza e praticidade no dia a dia.'}</strong></p>
              <p>Localizado no Pontal Oceânico, {property.id === 16 ? 'um bairro planejado do Recreio dos Bandeirantes, o empreendimento combina a proximidade com praias, áreas naturais e a infraestrutura da Avenida das Américas.' : 'o projeto combina a tranquilidade de um bairro planejado com a proximidade da natureza e a infraestrutura da Avenida das Américas.'}</p>
              <p>O empreendimento reúne <strong>Studios Design de 30 a 36 m², Garden Studios de 39 a 83 m² e Studios Dúplex de 55 a 70 m²</strong>, criando diferentes possibilidades para morar, descansar ou aproveitar o imóvel.</p>
              <p>{property.id === 16 ? 'Com arquitetura contemporânea, lazer completo, espaços compartilhados e soluções pensadas para facilitar a rotina, o FEEL NATURE traduz uma proposta de viver com menos excessos e mais conexão.' : 'Com arquitetura contemporânea, lazer completo, espaços compartilhados e soluções de tecnologia, o FEEL foi concebido para acompanhar uma nova maneira de viver o Rio.'}</p>
              <p><strong>Endereço:</strong> {property.id === 16 ? 'Rua Teixeira Heizer, 1.700 – Pontal Oceânico' : 'Luiz Carlos Sarolli, 1600 – Pontal Oceânico'}</p>
              <p><strong>Tipologias:</strong> Studios Design, Garden Studios e Studios Dúplex</p>
              <p><strong>Área:</strong> 30–83 m²</p>
              <p><strong>Lazer:</strong> Completo</p>
              <p><strong>Localização:</strong> Pontal Oceânico – Recreio dos Bandeirantes</p>
            </div>
          ) : property.id === 1 ? (
            <div className="details-card__description">
              <p><strong>Um novo jeito de viver o Flamengo</strong></p>
              <p>O Symphony Residences foi concebido para integrar arquitetura contemporânea, história e bem-estar em um dos endereços mais tradicionais da Zona Sul do Rio.</p>
              <p>Localizado na <strong>Rua Marquês de Abrantes, 55</strong>, o empreendimento reúne duas torres residenciais e o histórico <strong>Casarão São Clemente</strong>, preservado e integrado ao projeto.</p>
              <p>São apartamentos de <strong>1, 2 e 3 quartos</strong>, além de coberturas duplex, com plantas pensadas para diferentes estilos de vida. As áreas comuns combinam lazer, esporte, relaxamento e convivência, incluindo piscina com raia, spa, academia, sauna, coworking e espaços de convivência.</p>
              <p>A localização também é um dos grandes atributos do projeto: o Symphony está próximo à Praia do Flamengo, ao Aterro do Flamengo e às estações de metrô Flamengo e Largo do Machado, conectando o morador ao comércio, serviços, gastronomia e cultura da região.</p>
              <p><strong>Ficha técnica</strong></p>
            </div>
          ) : property.id === 4 ? (
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
          ) : property.id === 12 ? (
            <div className="details-card__description">
              <p><strong>O Mariano by Breton está localizado na Avenida Sobral Pinto, 4225, no Posto 6 da Barra da Tijuca, na quadra da praia e em frente ao Canal de Marapendi. O projeto reúne 47 residências em uma torre única, com apenas três apartamentos por pavimento, proporcionando uma proposta residencial marcada por privacidade, design e exclusividade.</strong></p>
              <p>📍 <strong>Endereço:</strong> Avenida Sobral Pinto, 4225 – Posto 6, Barra da Tijuca</p>
              <p>📐 <strong>Área:</strong> 135,76–289,26 m²</p>
              <p>🏡 <strong>Tipologias:</strong> 3 suítes, 4 suítes e coberturas lineares</p>
              <p>🚗 <strong>Vagas:</strong> 2–4 vagas</p>
              <p>🌊 <strong>Localização:</strong> Quadra da praia</p>
              <p>✨ <strong>Residências:</strong> 47 unidades</p>
            </div>
          ) : property.id === 13 ? (
            <div className="details-card__description">
              <p><strong>O KAUAI Pontal Oceânico foi concebido para quem busca uma vida mais próxima da natureza, sem abrir mão de praticidade e infraestrutura. Localizado em um bairro planejado e cercado por montanhas, praias e áreas verdes, o empreendimento oferece diferentes opções de apartamentos e coberturas, além de uma ampla estrutura de lazer para toda a família.</strong></p>
              <p>📍 <strong>Localização:</strong> Pontal Oceânico – Recreio dos Bandeirantes</p>
              <p>📐 <strong>Área:</strong> 58–155 m²</p>
              <p>🏡 <strong>Tipologias:</strong> 2, 3 e 4 quartos</p>
              <p>✨ <strong>Coberturas:</strong> Duplex</p>
              <p>🌿 <strong>Lazer:</strong> Mais de 20 itens</p>
              <p>🏢 <strong>Unidades:</strong> 204 unidades, sendo 200 residenciais e 4 comerciais</p>
            </div>
          ) : property.id === 11 ? (
            <div className="details-card__description">
              <p><strong>Entre Ipanema e Leblon, o Parque Studios combina localização privilegiada, arquitetura contemporânea e praticidade em um dos endereços mais desejados do Rio.</strong></p>
              <p>Um projeto pensado para quem valoriza mobilidade, lazer e a experiência de viver perto do mar, da Lagoa e do Jardim de Alah.</p>
              <p>📍 <strong>Endereço:</strong> Rua Visconde de Pirajá, 640 – Ipanema</p>
              <p>📐 <strong>Área:</strong> 35–66 m²</p>
              <p>🏡 <strong>Tipologias:</strong> Studios, Lofts, Double Studios e Coberturas</p>
              <p>✨ <strong>Lazer:</strong> Completo</p>
              <p>🕐 <strong>Conveniência:</strong> 24 horas</p>
            </div>
          ) : (
            <p className="details-card__description">{property.details?.description || property.summary}</p>
          )}

          <ul className="details-card__list">
            <li><strong>Endereço:</strong> {property.id === 4 ? 'Rua Mena Barreto, 150 – Botafogo' : property.details?.address || 'Em breve'}</li>
            <li><strong>Área:</strong> {property.area}</li>
            {property.id === 19 ? (
              <>
                <li><strong>Tipologia:</strong> Studios</li>
                <li><strong>Unidades:</strong> 344 residenciais + 2 lojas</li>
                <li><strong>Pavimentos:</strong> 24</li>
                <li><strong>Elevadores:</strong> 4</li>
                <li><strong>Vagas para bicicletas:</strong> 344</li>
              </>
            ) : property.id === 1 ? (
              <>
                <li><strong>Tipologias:</strong> {property.details?.typologies}</li>
                <li><strong>Suítes:</strong> conforme unidade</li>
                <li><strong>Vagas:</strong> conforme unidade</li>
                <li><strong>Unidades:</strong> sob consulta</li>
              </>
            ) : property.id === 4 ? (
              <>
                <li><strong>Tipologias:</strong> 2 quartos e coberturas duplex*</li>
                <li><strong>Suítes:</strong> conforme unidade</li>
                <li><strong>Garagem:</strong> conforme unidade</li>
              </>
            ) : property.id === 3 || property.id === 11 || property.id === 12 || property.id === 18 ? (
              <>
                <li><strong>Tipologias:</strong> {property.details?.typologies}</li>
                <li><strong>Suítes:</strong> {property.suites}</li>
                {property.id === 18 ? (
                  <>
                    <li><strong>Vagas:</strong> 2 vagas nas coberturas duplex</li>
                    <li><strong>Lazer:</strong> Masterplan de aproximadamente 3.500 m²</li>
                  </>
                ) : <li><strong>Garagem:</strong> {property.garage}</li>}
              </>
            ) : property.id === 14 ? (
              <>
                <li><strong>Tipologias:</strong> {property.details?.typologies}</li>
                <li><strong>Suítes:</strong> {property.suites}</li>
                <li><strong>Vagas:</strong> {property.garage}</li>
                <li><strong>Unidades:</strong> 272</li>
              </>
            ) : property.id === 15 || property.id === 16 ? (
              <>
                <li><strong>Tipologias:</strong> {property.details?.typologies}</li>
                <li><strong>Lazer:</strong> Completo</li>
                <li><strong>Localização:</strong> Pontal Oceânico – Recreio dos Bandeirantes</li>
              </>
            ) : property.id === 13 ? (
              <>
                <li><strong>Tipologias:</strong> {property.details?.typologies}</li>
                <li><strong>Coberturas:</strong> {property.suites}</li>
                <li><strong>Lazer:</strong> {property.garage}</li>
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

      <section className="details-section details-section--amenities">
        <div className="details-section__content">
          <h2 className="details-section__title">
            {property.id === 1 ? 'Lazer e bem-estar' : property.id === 2 ? 'Vista Privilegiada' : property.id === 10 ? 'Bem-estar e experiências' : 'Lazer e diferenciais'}
          </h2>
          {property.id === 1 ? (
            <>
              <ul className="amenities-list amenities-list--icon-led">
                <li>🏊 <strong>Piscina com raia de 25 m:</strong> Piscina adulto, piscina infantil e estrutura para momentos de lazer.</li>
                <li>🧖 <strong>Spa e wellness:</strong> Spa, sauna e área de repouso.</li>
                <li>🏋️ <strong>Academia Bodytech:</strong> Espaço fitness com consultoria especializada.</li>
                <li>🍽️ <strong>Espaço Gourmet:</strong> Ambiente pensado para receber e aproveitar bons momentos.</li>
                <li>🎉 <strong>Salão de festas:</strong> Espaço para celebrações e encontros.</li>
                <li>💼 <strong>Coworking:</strong> Ambiente dedicado à rotina profissional.</li>
                <li>🎮 <strong>Sala Gamer:</strong> Espaço de entretenimento.</li>
                <li>🧸 <strong>Brinquedoteca e Playground:</strong> Ambientes destinados às crianças.</li>
                <li>🐾 <strong>Pet Care:</strong> Espaço pensado para os cuidados com os pets.</li>
                <li>🍹 <strong>Bar da piscina:</strong> Mais comodidade para aproveitar a área externa.</li>
              </ul>
              <h3 className="details-section__subtitle">Tecnologia e comodidade</h3>
              <ul className="amenities-list amenities-list--icon-led">
                <li>🚗 <strong>Carregador para carro elétrico</strong></li>
                <li>🚲 <strong>Carregador para bike elétrica</strong></li>
                <li>🛒 <strong>Fast Market</strong></li>
                <li>📦 <strong>Espaço Delivery</strong></li>
                <li>📶 <strong>Wi-Fi nas áreas comuns</strong></li>
                <li>📱 <strong>Aplicativo do condomínio</strong></li>
                <li>⚡ <strong>Gerador de energia</strong></li>
              </ul>
            </>
          ) : (
            <ul className="amenities-list">
              {amenities.map((item) => (
                <li key={item}>{property.id === 4 ? <strong>{item}</strong> : item}</li>
              ))}
            </ul>
          )}
          {property.details?.characteristics ? (
            <div className="details-section__characteristics">
              <h3 className="details-section__subtitle">Características</h3>
              <ul className="details-section__text">
                {property.details.characteristics.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>

      <section className="details-section details-section--highlights">
        <div className="details-section__content">
          <h2 className="details-section__title">Por que {property.id === 11 || property.id === 12 || property.id === 14 || property.id === 15 || property.id === 16 || property.id === 17 || property.id === 18 || property.id === 19 ? 'este' : 'esse'} imóvel se destaca?</h2>
          {property.id === 19 ? (
            <>
              <p className="details-section__text">O Q Studios se destaca pela combinação entre <strong>localização, mobilidade, arquitetura contemporânea e uma estrutura completa para o dia a dia</strong>. Na Rua da Quitanda, o projeto coloca o morador próximo a metrô, VLT, Praça XV, Barcas, comércio, restaurantes, cultura e serviços, permitindo aproveitar muito do Centro a pé ou de bicicleta.</p>
              <p className="details-section__text">O empreendimento também traz uma proposta contemporânea de viver o Centro, com ambientes de convivência, espaços de trabalho, lazer no rooftop e uma arquitetura que dialoga com a história e a identidade da região.</p>
              <ul className="details-section__text">
                <li>📍 <strong>Localização estratégica</strong> — próximo ao metrô, VLT, Praça XV, Barcas, Santos Dumont, comércio, restaurantes, museus e importantes pontos culturais do Centro.</li>
                <li>🏙️ <strong>Um novo jeito de viver o Centro</strong> — studios com varanda e uma estrutura pensada para integrar moradia, trabalho, lazer e praticidade.</li>
                <li>🌊 <strong>Rooftop com vista</strong> — piscina, solário e ambientes de convivência com a Baía de Guanabara como horizonte.</li>
                <li>🚲 <strong>Mobilidade e praticidade</strong> — bicicletário, Bike Wash e uma localização que facilita deslocamentos pelo Centro do Rio.</li>
              </ul>
            </>
          ) : property.id === 1 ? (
          <>
            <p className="details-section__text">O Symphony Residences se destaca por unir <strong>história, arquitetura contemporânea e bem-estar</strong> em um dos endereços mais tradicionais do Flamengo. O projeto integra duas torres residenciais ao histórico Casarão São Clemente, preservando sua identidade e incorporando-o à experiência de lazer e convivência. Com diferentes opções de apartamentos e coberturas duplex, lazer completo e uma localização próxima ao metrô, à Praia do Flamengo e ao Aterro, o Symphony foi pensado para oferecer uma experiência residencial contemporânea sem abrir mão da história e da atmosfera do bairro.</p>
            <p className="details-section__text details-section__text--location-heading"><strong>📍 Localização e conveniência</strong></p>
            <p className="details-section__text">Entre os principais pontos próximos ao Symphony Residences Flamengo estão:</p>
            <ul className="details-section__text details-section__text--plain-list">
              <li>✓ Praia do Flamengo</li>
              <li>✓ Aterro do Flamengo</li>
              <li>✓ Metrô do Flamengo</li>
              <li>✓ Largo do Machado</li>
              <li>✓ Supermercado Zona Sul</li>
              <li>✓ Hortifruti</li>
              <li>✓ Smart Fit</li>
              <li>✓ Museu da República</li>
              <li>✓ Parque Guinle</li>
              <li>✓ Praia de Botafogo</li>
            </ul>
          </>
        ) : property.id === 18 ? (
          <>
            <p className="details-section__text"><strong>O ALL Jardim Oceânico se destaca por reunir localização, mobilidade, lazer e qualidade de vida em um projeto pensado para acompanhar diferentes estilos de vida.</strong></p>
            <p className="details-section__text">Estar no Jardim Oceânico significa ter uma rotina conectada ao melhor da Barra, com acesso ao metrô, à praia, ao comércio e aos serviços da região. O empreendimento ainda conta com um masterplan de lazer de aproximadamente <strong>3.500 m²</strong>, criando diferentes possibilidades de convivência, bem-estar e entretenimento.</p>
            <p className="details-section__text">O projeto também valoriza a praticidade no dia a dia, com soluções como bicicletário equipado, Espaço Delivery, Pet Place, oficina compartilhada, coworking e infraestrutura para conectividade nas áreas comuns.</p>
            <p className="details-section__text"><strong>Um novo endereço para viver o Jardim Oceânico com mais conforto, praticidade e experiências para aproveitar todos os dias.</strong></p>
            <ul className="details-section__text">
              <li>📍 <strong>Localização privilegiada</strong> — a aproximadamente 5 minutos do metrô Jardim Oceânico e 15 minutos da praia.</li>
              <li>🌿 <strong>Lazer completo</strong> — masterplan de aproximadamente 3.500 m² com espaços para esporte, bem-estar, convivência e entretenimento.</li>
              <li>🏡 <strong>Diferentes possibilidades de morar</strong> — apartamentos de 2 e 3 quartos e coberturas duplex de 129 a 172 m².</li>
            </ul>
          </>
        ) : property.id === 17 ? (
          <>
            <p className="details-section__text"><strong>O Green Park Barra se destaca por transformar a relação entre cidade e natureza em uma experiência de morar.</strong></p>
            <p className="details-section__text">Localizado no início da Barra da Tijuca, o empreendimento reúne mobilidade, conveniência e uma ampla estrutura de lazer em um projeto pensado para proporcionar mais qualidade de vida.</p>
            <p className="details-section__text">Seu paisagismo valoriza a vegetação tropical e cria caminhos, jardins e espaços de convivência que aproximam os moradores da natureza. Ao mesmo tempo, a localização oferece acesso ao metrô, aos principais shoppings, hipermercados e centros empresariais da região, além da proximidade com o mar.</p>
            <p className="details-section__text">A arquitetura também valoriza as paisagens da Barra, com vistas para a Pedra da Gávea e as montanhas da região. O rooftop de uso comum completa a proposta com uma perspectiva privilegiada da Barra da Tijuca.</p>
            <p className="details-section__text"><strong>Um projeto que reúne espaço, natureza, lazer e praticidade para viver a Barra de uma forma diferente.</strong></p>
            <ul className="details-section__text">
              <li>🌳 <strong>Natureza integrada</strong> — paisagismo inspirado na Mata Atlântica, jardins e áreas de convivência.</li>
              <li>📍 <strong>Localização estratégica</strong> — no início da Barra, com acesso ao metrô, shoppings, serviços e proximidade do mar.</li>
              <li>🏡 <strong>Experiência de condomínio-clube</strong> — ampla estrutura de lazer, bem-estar, esportes, gastronomia e convivência.</li>
            </ul>
          </>
        ) : property.id === 16 ? (
          <>
            <p className="details-section__text"><strong>O FEEL NATURE se destaca por transformar a proximidade com a natureza em parte da experiência de viver.</strong></p>
            <p className="details-section__text">No Pontal Oceânico, o projeto combina a tranquilidade de um bairro planejado com a proximidade das praias, áreas naturais, comércio, serviços e da Avenida das Américas.</p>
            <p className="details-section__text">Mais do que oferecer diferentes tipologias, o empreendimento propõe uma forma de viver mais leve, com ambientes compartilhados, lazer completo e soluções que facilitam a rotina.</p>
            <p className="details-section__text">A localização também coloca algumas das praias e paisagens mais marcantes da região ao alcance do dia a dia: Praia do Pontal, Praia do Secreto, Praia da Macumba, Prainha e Grumari.</p>
            <p className="details-section__text"><strong>Um projeto para quem valoriza natureza, praticidade e a liberdade de viver o Rio de uma maneira diferente.</strong></p>
            <ul className="details-section__text">
              <li>🌿 <strong>Natureza como parte da rotina</strong> — Pontal Oceânico, áreas verdes e proximidade das praias.</li>
              <li>🏡 <strong>Diferentes formas de viver</strong> — Studios Design, Garden Studios e Studios Dúplex.</li>
              <li>✨ <strong>Uma experiência completa</strong> — lazer, espaços compartilhados, tecnologia e facilidades para o dia a dia.</li>
            </ul>
          </>
        ) : property.id === 15 ? (
          <>
            <p className="details-section__text"><strong>O FEEL SUN Pontal Oceânico se destaca por unir natureza, praticidade e uma proposta contemporânea de viver.</strong></p>
            <p className="details-section__text">Localizado em um bairro planejado do Recreio dos Bandeirantes, o empreendimento está próximo de áreas naturais e das praias da região, enquanto mantém fácil conexão com a Avenida das Américas e toda a infraestrutura necessária para o dia a dia.</p>
            <p className="details-section__text">A variedade de tipologias — <strong>Studios Design, Garden Studios e Studios Dúplex</strong> — permite diferentes formas de aproveitar o imóvel, seja para morar, ter um refúgio próximo à natureza ou buscar uma alternativa de investimento.</p>
            <p className="details-section__text">O projeto também combina <strong>lazer completo, espaços compartilhados, tecnologia, segurança e soluções voltadas à praticidade</strong>, criando uma experiência residencial conectada às novas formas de viver.</p>
            <p className="details-section__text"><strong>Um lugar para sentir, desacelerar e aproveitar o melhor do Pontal Oceânico.</strong></p>
            <ul className="details-section__text">
              <li>🌿 <strong>Natureza e cidade em equilíbrio</strong> — localização no Pontal Oceânico, próxima à natureza e conectada à Avenida das Américas.</li>
              <li>🏡 <strong>Diferentes possibilidades de viver</strong> — Studios Design, Garden Studios e Studios Dúplex, com diferentes metragens e configurações.</li>
              <li>✨ <strong>Tecnologia e praticidade</strong> — App FEEL, fechadura Smart, reconhecimento facial, monitoramento e facilidades para o dia a dia.</li>
            </ul>
          </>
        ) : property.id === 12 ? (
          <>
            <p className="details-section__text">
              O Mariano by Breton se destaca pela combinação entre localização, exclusividade e design. Na quadra da praia do Posto 6, o empreendimento reúne apenas 47 residências em uma torre com três unidades por pavimento, criando uma experiência mais reservada de morar na Barra da Tijuca. A arquitetura autoral da FEU e a curadoria de design da Breton elevam a proposta do projeto, enquanto as diferentes tipologias e a estrutura completa de lazer tornam o Mariano uma experiência residencial pensada para viver com conforto, privacidade e proximidade com o mar.
            </p>
            <ul className="details-section__text">
              <li>🌊 <strong>Na quadra da praia</strong> — localizado no Posto 6 da Barra da Tijuca, próximo ao mar e em frente ao Canal de Marapendi.</li>
              <li>✨ <strong>Design Breton</strong> — curadoria e mobiliário Breton nas áreas comuns, no hall e nos espaços de convivência.</li>
              <li>🏡 <strong>Exclusividade</strong> — apenas 47 residências, com três apartamentos por pavimento e duas coberturas lineares exclusivas.</li>
            </ul>
          </>
        ) : property.id === 14 ? (
          <>
            <p className="details-section__text"><strong>O Lanai Pontal Oceânico se destaca por unir a tranquilidade de um bairro planejado à praticidade de estar no Recreio dos Bandeirantes.</strong></p>
            <p className="details-section__text">O projeto combina arquitetura contemporânea, ambientes pensados para o dia a dia e uma ampla estrutura de lazer, criando uma experiência residencial completa para diferentes momentos da vida.</p>
            <p className="details-section__text">A localização no Pontal Oceânico aproxima os moradores das praias do Pontal e da Macumba, além de oferecer acesso à Avenida das Américas e à Transoeste. A região também conta com comércio, supermercados, colégios e o Recreio Shopping, trazendo praticidade para a rotina.</p>
            <ul className="details-section__text">
              <li><strong>🌿 Pontal Oceânico</strong> — bairro planejado, cercado por áreas verdes e próximo às praias.</li>
              <li><strong>🏡 Estrutura completa</strong> — mais de 30 opções de lazer distribuídas em 3.500 m².</li>
              <li><strong>📍 Localização estratégica</strong> — próximo às praias, Avenida das Américas, Transoeste, comércio e serviços.</li>
            </ul>
          </>
        ) : property.id === 13 ? (
          <>
            <p className="details-section__text"><strong>O KAUAI Pontal Oceânico se destaca por unir a tranquilidade de viver cercado pela natureza à praticidade de estar em um bairro planejado, com praias, comércio, serviços e opções de lazer ao redor. O projeto foi pensado para valorizar a convivência, a qualidade de vida e o contato com a paisagem, criando uma experiência residencial completa para diferentes momentos da vida.</strong></p>
            <p className="details-section__text"><strong>Entre montanhas, praias e áreas verdes, o KAUAI convida você a desacelerar, aproveitar mais o tempo com quem ama e viver seu lado oceânico todos os dias.</strong></p>
            <ul className="details-section__text">
              <li>🌊 <strong>Vida perto do mar</strong> — o Pontal Oceânico está próximo às praias do Recreio, Pontal, Prainha e Grumari.</li>
              <li>🌿 <strong>Bairro planejado</strong> — um ambiente com áreas verdes, ciclovia, praças e infraestrutura de comércio e serviços.</li>
              <li>🏡 <strong>Uma verdadeira ilha de lazer</strong> — mais de 20 espaços para esporte, bem-estar, convivência e diversão para toda a família.</li>
            </ul>
          </>
        ) : property.id === 11 ? (
          <>
            <p className="details-section__text"><strong>O Parque Studios se destaca pela combinação de localização, praticidade e uma proposta contemporânea de viver Ipanema. Entre Ipanema e Leblon, o empreendimento coloca o morador próximo ao mar, à Lagoa, ao Jardim de Alah, à gastronomia, à cultura e à mobilidade da Zona Sul.</strong></p>
            <p className="details-section__text"><strong>Com studios, lofts, double studios e coberturas, o projeto oferece diferentes possibilidades de moradia em uma estrutura que valoriza conforto, tecnologia e conveniência. O rooftop com vista para a Lagoa e o Cristo Redentor, aliado aos espaços de lazer e às soluções para o dia a dia, completa a experiência.</strong></p>
            <ul className="details-section__text">
              <li>📍 <strong>Localização privilegiada</strong> — entre Ipanema e Leblon, na Rua Visconde de Pirajá, próximo ao mar, à Lagoa e ao Jardim de Alah.</li>
              <li>🌇 <strong>Rooftop com vista</strong> — um dos diferenciais do projeto é o rooftop com vista para a Lagoa e o Cristo Redentor.</li>
              <li>🏡 <strong>Diferentes possibilidades</strong> — studios, lofts, double studios e coberturas, com metragens de 35 a 66 m².</li>
            </ul>
          </>
        ) : property.id === 4 ? (
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
        </div>
      </section>

      <section className="details-section details-section--gallery">
        <div className="details-section__content">
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

              <div
                className={`gallery-modal__frame ${zoomLevel > 1 ? 'is-zoomed' : ''} ${isGalleryDragging ? 'is-dragging' : ''}`}
                ref={galleryFrameRef}
                onPointerDown={handleGalleryPointerDown}
                onPointerMove={handleGalleryPointerMove}
                onPointerUp={handleGalleryPointerEnd}
                onPointerCancel={handleGalleryPointerEnd}
              >
                <div className="gallery-modal__stage" style={{ width: `${zoomLevel * 100}%`, height: `${zoomLevel * 100}%` }}>
                  {zoomLevel > 1 ? (
                    <img
                      className="gallery-modal__image"
                      src={galleryItems[selectedImageIndex].src}
                      alt={galleryItems[selectedImageIndex].alt}
                      draggable={false}
                    />
                  ) : (
                    <div
                      className={`gallery-modal__swipe-track ${isSwipeSettling ? 'is-settling' : ''}`}
                      style={{ transform: `translateX(${swipeOffset}px)` }}
                    >
                      {[previousGalleryItem, currentGalleryItem, nextGalleryItem].map((item, index) => (
                        <img
                          key={`${item?.src ?? 'gallery-item'}-${index}`}
                          className={`gallery-modal__image ${index === 0 ? 'is-previous' : index === 2 ? 'is-next' : 'is-current'}`}
                          src={item?.src}
                          alt={item?.alt || ''}
                          draggable={false}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <button className="gallery-modal__nav" type="button" onClick={goToNextImage} aria-label="Próxima imagem">
                →
              </button>
            </div>

            <div className="gallery-modal__controls">
              <button type="button" onClick={() => galleryFrameRef.current && zoomGalleryAtPoint(zoomLevel - 0.25, galleryFrameRef.current)}>
                − Zoom
              </button>
              <button type="button" onClick={resetGalleryZoom}>
                Resetar
              </button>
              <button type="button" onClick={() => galleryFrameRef.current && zoomGalleryAtPoint(zoomLevel + 0.25, galleryFrameRef.current)}>
                + Zoom
              </button>
            </div>

            <div className="gallery-modal__thumbnails" ref={galleryThumbnailsRef}>
              {galleryItems.map((item, index) =>
                item.type === 'image' ? (
                  <button
                    key={`${item.src}-${index}`}
                    className={`gallery-modal__thumbnail ${selectedImageIndex === index ? 'is-active' : ''}`}
                    type="button"
                    onClick={() => {
                      setSelectedImageIndex(index);
                      setZoomLevel(1);
                      setSwipeOffset(0);
                      setIsSwipeSettling(false);
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
