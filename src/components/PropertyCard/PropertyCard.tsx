import './PropertyCard.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Property } from '../../data/properties';

type PropertyCardProps = {
  property: Property;
};

function getYoutubeEmbedUrl(videoUrl: string): string | null {
  try {
    const url = new URL(videoUrl);
    let videoId: string | null = null;

    if (url.hostname === 'youtu.be') {
      videoId = url.pathname.split('/').filter(Boolean)[0] ?? null;
    } else if (url.hostname.endsWith('youtube.com')) {
      if (url.pathname === '/watch') {
        videoId = url.searchParams.get('v');
      } else if (url.pathname.startsWith('/shorts/')) {
        videoId = url.pathname.split('/').filter(Boolean)[1] ?? null;
      }
    }

    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  } catch {
    return null;
  }
}

export function PropertyCard({ property }: PropertyCardProps) {
  const coverImage = property.images && property.images.length > 0 ? property.images[0] : property.image;
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [isPreviewing, setIsPreviewing] = useState(false);
  const tourEmbedUrl = property.cardVideo ? getYoutubeEmbedUrl(property.cardVideo) : null;
  const videoId = tourEmbedUrl?.split('/').at(-1);
  const isPortraitVideo = property.cardVideo?.includes('/shorts/') ?? false;
  const videoParameters = new URLSearchParams({
    autoplay: '1',
    mute: isTourOpen ? '0' : '1',
    controls: isTourOpen ? '1' : '0',
    playsinline: '1',
    loop: '1',
    playlist: videoId ?? '',
    enablejsapi: '1',
    origin: window.location.origin,
  });

  useEffect(() => {
    const handleTourPlay = (event: Event) => {
      const activePropertyId = (event as CustomEvent<number>).detail;
      if (activePropertyId !== property.id) {
        setIsTourOpen(false);
        setIsPreviewing(false);
      }
    };

    window.addEventListener('property-tour-play', handleTourPlay);
    return () => window.removeEventListener('property-tour-play', handleTourPlay);
  }, [property.id]);

  const playTour = () => {
    setIsPreviewing(false);
    setIsTourOpen(true);
    window.dispatchEvent(new CustomEvent<number>('property-tour-play', { detail: property.id }));
  };

  return (
    <article className="property-card" id={`property-card-${property.id}`}>
      <div
        className={`property-media${isPortraitVideo ? ' property-media--portrait' : ''}`}
        onMouseEnter={() => {
          if (tourEmbedUrl && !isTourOpen) setIsPreviewing(true);
        }}
        onMouseLeave={() => setIsPreviewing(false)}
      >
        {tourEmbedUrl && (isPreviewing || isTourOpen) ? (
          <iframe
            className="property-video-frame"
            src={`${tourEmbedUrl}?${videoParameters}`}
            title={`Tour em vídeo: ${property.title}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <div className="property-image" style={{ backgroundImage: `url("${coverImage}")` }} />
        )}
        {tourEmbedUrl && !isTourOpen ? (
          <button
            className="property-media__activate"
            type="button"
            aria-label={isPreviewing ? 'Ativar áudio do tour' : `Reproduzir tour de ${property.title} com áudio`}
            onClick={playTour}
          />
        ) : null}
      </div>
      <div className="property-tour-controls">
        {tourEmbedUrl ? (
          <button
            className="button outline property-tour-toggle"
            type="button"
            aria-expanded={isTourOpen}
            onClick={() => {
              if (isTourOpen) {
                setIsTourOpen(false);
              } else {
                playTour();
              }
            }}
          >
            {isTourOpen ? 'Fechar tour' : 'Assistir tour'}
          </button>
        ) : null}
        <Link className="button outline property-details-button" to={`/imovel/${property.id}`}>
          Detalhes do Imóvel
        </Link>
      </div>
      <div className="property-content">
        <div>
          <span className="property-location-line">{property.location}</span>
          {property.subtitle ? <span className="property-location-line">{property.subtitle}</span> : null}
          <h3>{property.title}</h3>
        </div>
        {property.summary ? <p className="property-summary">{property.summary}</p> : null}
        <div className="property-details">
          <span>{property.area}</span>
          <span>{property.bedrooms}</span>
          <span>{property.garage}</span>
        </div>
        <div className="property-actions">
          <a
            className="button"
            href={`https://wa.me/5521988659172?text=${encodeURIComponent(`Olá Ariana, quero saber mais sobre o imóvel que vi no site ${property.title}.`)}`}
            target="_blank"
            rel="noreferrer"
          >
            QUERO MAIS INFORMAÇÕES
          </a>
        </div>
      </div>
    </article>
  );
}
