import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Section from '../components/Section';
import NewsSection from '../components/NewsSection';
import ProductCard from '../components/ProductCard';
import { launches, featuredProducts, newsItems } from '../lib/data';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--background)' }}>
      <Header />

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '60px 20px 0',
        height: '100vh',
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr) minmax(0, 0.8fr)',
        gap: '2rem',
        overflow: 'hidden'
      }} className="responsive-grid">

        {/* Column 1: New Launches */}
        <Section title="New Launches">
          <ProductList products={launches} />
        </Section>

        {/* Column 2: Featured Products */}
        <Section title="Featured Tools">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Section>

        {/* Column 3: News (Interactive) */}
        <NewsSection newsItems={newsItems} />

      </div>
    </main>
  );
}
