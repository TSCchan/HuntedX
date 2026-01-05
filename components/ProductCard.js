'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
    // Bookmark Logic
    const [isBookmarked, setIsBookmarked] = useState(false);

    useEffect(() => {
        // Load state from localStorage on mount
        const bookmarks = JSON.parse(localStorage.getItem('huntedx_bookmarks') || '[]');
        setIsBookmarked(bookmarks.includes(product.id));
    }, [product.id]);

    const toggleBookmark = (e) => {
        e.preventDefault(); // Stop Link navigation
        e.stopPropagation();

        const bookmarks = JSON.parse(localStorage.getItem('huntedx_bookmarks') || '[]');
        let newBookmarks;

        if (isBookmarked) {
            newBookmarks = bookmarks.filter(id => id !== product.id);
        } else {
            newBookmarks = [...bookmarks, product.id];
        }

        localStorage.setItem('huntedx_bookmarks', JSON.stringify(newBookmarks));
        setIsBookmarked(!isBookmarked);
    };

    // Logic for "New Today"
    const isNew = product.launchDate && new Date(product.launchDate).toDateString() === new Date().toDateString();

    // Logic for Trending
    const isTrending = product.trending || product.votes > 500;

    return (
        <Link href={`/product/${product.id}`} className={styles.card} style={{ textDecoration: 'none' }}>
            {/* Bookmark Button */}
            <button
                onClick={toggleBookmark}
                className={styles.bookmarkBtn}
                title={isBookmarked ? "Remove from bookmarks" : "Bookmark this tool"}
            >
                {isBookmarked ? '★' : '☆'}
            </button>

            <div className={styles.content}>
                <img src={product.logo} alt={product.name} className={styles.logo} />
                <div className={styles.details}>
                    <div className={styles.headerRow}>
                        <h3 className={styles.name}>{product.name}</h3>

                        {/* Badges */}
                        {isTrending && (
                            <span className={`${styles.badge} ${styles.badgeTrending}`}>
                                🔥 Hot
                            </span>
                        )}
                        {isNew && !isTrending && (
                            <span className={`${styles.badge} ${styles.badgeNew}`}>
                                🚀 New
                            </span>
                        )}
                        {product.editorsPick && (
                            <span className={`${styles.badge} ${styles.badgeEditor}`}>
                                ⭐ Pick
                            </span>
                        )}
                    </div>

                    <p className={styles.tagline}>{product.tagline}</p>
                    <div className={styles.tags}>
                        {product.tags.map(tag => (
                            <span key={tag} className={styles.tag}>{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
}
