import './PropertyCard.css';
import { Link } from 'react-router-dom';
import type { Property } from '../../data/properties';

type PropertyCardProps = {
  property: Property;
};

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className="property-card">
      <div className="property-image" style={{ backgroundImage: `url(${property.image})` }} />
      <div className="property-content">
        <div>
          <span>{property.location}</span>
          <h3>{property.title}</h3>
        </div>
        <p className="property-price">{property.price}</p>
        {property.summary ? <p className="property-summary">{property.summary}</p> : null}
        <div className="property-details">
          <span>{property.area}</span>
          <span>{property.bedrooms}</span>
          <span>{property.garage}</span>
        </div>
        <div className="property-actions">
          {property.video ? (
            <a className="button outline" href={property.video} target="_blank" rel="noreferrer">Assistir Tour</a>
          ) : (
            <button className="button outline button-disabled" type="button" disabled>Tour indisponível</button>
          )}
          <Link className="button outline" to={`/imovel/${property.id}`}>
            Detalhes do Imóvel
          </Link>
          <a
            className="button"
            href={`https://wa.me/5521988659172?text=${encodeURIComponent(`Olá Ariana, quero saber mais sobre o imóvel ${property.title}`)}`}
            target="_blank"
            rel="noreferrer"
          >
            Falar com Ariana
          </a>
        </div>
      </div>
    </article>
  );
}
