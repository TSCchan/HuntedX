import styles from './NewsCard.module.css';

export default function NewsCard({ news, featured = false }) {
    const cardClass = `${styles.card} ${featured ? styles.cardFeatured : ''}`;
    const imageClass = featured ? styles.imageFeatured : styles.image;
    const contentClass = featured ? styles.contentFeatured : styles.content;
    const titleClass = featured ? styles.titleFeatured : styles.title;

    return (
        <a href={news.url || '#'} target="_blank" rel="noopener noreferrer" className={cardClass}>
            <img src={news.image} alt={news.title} className={imageClass} />

            <div className={contentClass}>
                <div className={styles.meta}>
                    <span className={styles.categoryTag}>{news.category}</span>
                    <span className={styles.source}>{news.source}</span>
                    <span className={styles.time}>{news.time}</span>
                </div>

                <h4 className={titleClass}>{news.title}</h4>

                {/* AI Enhanced Fields */}
                {news.tldr && <p className={styles.tldr}>{news.tldr}</p>}
                {news.impact && <p className={styles.impact}>Why: {news.impact}</p>}
            </div>
        </a>
    );
}
