import { launches, featuredProducts } from '../../../lib/data';
import styles from './page.module.css';
import Link from 'next/link';

// Helper to find product
function getProduct(id) {
    const all = [...launches, ...featuredProducts];
    return all.find(p => String(p.id) === String(id));
}

export default async function ProductPage({ params }) {
    const { id } = await params;
    const product = getProduct(id);

    if (!product) {
        return <div className={styles.container}>Product not found: {id}</div>;
    }

    // Badge Logic
    const isNew = product.launchDate && new Date(product.launchDate).toDateString() === new Date().toDateString();
    const isTrending = product.trending || product.votes > 500;

    return (
        <div className={styles.container}>
            <Link href="/" style={{ color: '#666', textDecoration: 'none', marginBottom: '1rem', display: 'inline-block' }}>
                ← Back to Launches
            </Link>

            {/* Header */}
            <header className={styles.header}>
                <img src={product.logo} alt={product.name} className={styles.logo} />
                <div className={styles.headerContent}>
                    <div className={styles.titleRow}>
                        <h1 className={styles.title}>{product.name}</h1>
                        {isTrending && <span className={`${styles.badge} ${styles.badgeTrending}`}>🔥 Trending</span>}
                        {isNew && <span className={`${styles.badge} ${styles.badgeNew}`}>🚀 New</span>}
                        {product.editorsPick && <span className={`${styles.badge} ${styles.badgeEditor}`}>⭐ Pick</span>}
                    </div>
                    <h2 className={styles.tagline}>{product.tagline}</h2>
                </div>
            </header>

            <div className={styles.grid}>
                {/* Main Content */}
                <div className={styles.main}>
                    {/* Hero Media */}
                    {product.media?.hero && (
                        <img src={product.media.hero} className={styles.heroMedia} alt="Hero" />
                    )}

                    {/* Description */}
                    <div>
                        <div className={styles.sectionTitle}>About</div>
                        <div className={styles.description} dangerouslySetInnerHTML={{
                            __html: product.description
                                ? product.description.replace(/\n/g, '<br/>').replace(/### (.*)/g, '<h3>$1</h3>').replace(/\*\*(.*)\*\*/g, '<strong>$1</strong>')
                                : 'No description available.'
                        }} />
                    </div>

                    {/* Gallery */}
                    {product.media?.gallery && product.media.gallery.length > 0 && (
                        <div>
                            <div className={styles.sectionTitle}>Gallery</div>
                            <div className={styles.gallery}>
                                {product.media.gallery.map((img, i) => (
                                    <img key={i} src={img} className={styles.galleryImg} alt={`Gallery ${i}`} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Tech Stack */}
                    {product.tech_stack && (
                        <div>
                            <div className={styles.sectionTitle}>Built With</div>
                            <div className={styles.techStack}>
                                {product.tech_stack.map(tech => (
                                    <span key={tech} className={styles.techBadge}>{tech}</span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Sidebar */}
                <aside className={styles.sidebar}>
                    <div className={styles.ctaCard}>
                        <a href={product.website_url || '#'} target="_blank" className={styles.visitButton}>
                            Visit Website ↗
                        </a>

                        {product.pricing && (
                            <div className={styles.pricing}>
                                <div className={styles.priceModel}>{product.pricing.model}</div>
                                <div className={styles.priceTag}>{product.pricing.price} <span style={{ fontSize: '0.6em', fontWeight: 400 }}>/{product.pricing.period}</span></div>
                            </div>
                        )}

                        <div className={styles.stats}>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>▲ {product.votes}</span>
                                <span className={styles.statLabel}>Upvotes</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>💬 {product.comments}</span>
                                <span className={styles.statLabel}>Comments</span>
                            </div>
                        </div>

                        {product.maker && (
                            <div className={styles.maker}>
                                <img src={product.maker.avatar} className={styles.makerAvatar} alt="Maker" />
                                <div className={styles.makerInfo}>
                                    <h4>{product.maker.name}</h4>
                                    <span>Maker</span>
                                </div>
                            </div>
                        )}
                    </div>
                </aside>
            </div>
            {/* SEO: JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'SoftwareApplication',
                        name: product.name,
                        applicationCategory: 'BusinessApplication',
                        operatingSystem: 'Web',
                        description: product.description || product.tagline,
                        offers: product.pricing ? {
                            '@type': 'Offer',
                            price: product.pricing.price.replace(/[^0-9.]/g, ''),
                            priceCurrency: 'USD'
                        } : undefined,
                        aggregateRating: {
                            '@type': 'AggregateRating',
                            ratingValue: '4.8',
                            ratingCount: product.votes
                        }
                    })
                }}
            />
        </div>
    );
}
