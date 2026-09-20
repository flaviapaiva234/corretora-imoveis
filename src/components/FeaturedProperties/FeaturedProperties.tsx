import './FeaturedProperties.css';
import { useEffect } from 'react';
import { PropertyCard } from '../PropertyCard/PropertyCard';
import { properties } from '../../data/properties';

export function FeaturedProperties() {
  useEffect(() => {
    const targetId = window.location.hash.slice(1);

    if (!targetId) {
      return;
    }

    requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ block: 'start', behavior: 'auto' });
    });
  }, []);

  return (
    <section className="featured" id="properties">
      <div className="section-header">
        <span>Imóveis em Destaque</span>
        <h2>Catálogo de alto padrão para clientes exigentes</h2>
      </div>
      <div className="property-grid">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
}
