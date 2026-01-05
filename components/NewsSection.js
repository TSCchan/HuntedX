'use client';

import { useState, useEffect } from 'react';
import Section from './Section';
import NewsCard from './NewsCard';
import styles from './NewsSection.module.css';

export default function NewsSection({ newsItems: initialNews }) {
    const [newsData, setNewsData] = useState(initialNews);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        async function fetchNews() {
            try {
                const res = await fetch('/api/news');
                const data = await res.json();
                if (data.articles && data.articles.length > 0) {
                    // Only override if we got real data
                    // Filter out the "Missing API Key" mock if strictly production, but here we show it
                    setNewsData(data.articles);
                }
            } catch (err) {
                console.error("News fetch failed, using fallback", err);
            } finally {
                setLoading(false);
            }
        }
        fetchNews();
    }, []);

    const categories = ['All', 'AI', 'Crypto', 'Startups', 'SaaS'];

    const filteredNews = filter === 'All'
        ? newsData
        : newsData.filter(item => item.category === filter);

    const featuredNews = filteredNews.length > 0 ? filteredNews[0] : null;
    const listNews = filteredNews.length > 1 ? filteredNews.slice(1) : [];

    return (
        <Section
            title="Industry News"
            actions={
                <div className={styles.tabs}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`${styles.tab} ${filter === cat ? styles.active : ''}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            }
        >
            <div className={styles.container}>
                {loading && <div style={{ padding: '1rem', color: '#666' }}>Updating feed...</div>}

                {!loading && (
                    <>
                        {featuredNews && (
                            <div className={styles.featuredSlot}>
                                <NewsCard news={featuredNews} featured={true} />
                            </div>
                        )}

                        <div className={styles.list}>
                            {listNews.map(news => (
                                <NewsCard key={news.id} news={news} featured={false} />
                            ))}
                        </div>

                        {filteredNews.length === 0 && (
                            <div className={styles.empty}>No news in this category.</div>
                        )}
                    </>
                )}
            </div>
        </Section>
    );
}
