import { NextResponse } from 'next/server';

export async function GET() {
    const apiKey = process.env.GNEWS_API_KEY;

    // Security: Fallback for development if no key is present (Graceful degradation)
    if (!apiKey) {
        console.warn('GNEWS_API_KEY not found, returning mock data.');
        return NextResponse.json({
            articles: [
                {
                    id: 'mock-1',
                    title: 'System: Please add GNEWS_API_KEY to .env.local',
                    source: 'Local System',
                    time: 'Now',
                    image: 'https://placehold.co/600x400/000000/ffffff?text=Missing+API+Key',
                    category: 'System',
                    url: '#'
                }
            ]
        });
    }

    try {
        // Fetch data from GNews
        // Security: API Key is server-side only, never exposed to client.
        // Optimization: Revalidate every 3600s (1 hour) to respect rate limits.
        const res = await fetch(
            `https://gnews.io/api/v4/search?q=AI OR Crypto OR SaaS OR Startup&lang=en&max=10&token=${apiKey}`,
            { next: { revalidate: 3600 } }
        );

        if (!res.ok) {
            throw new Error(`News API Error: ${res.status}`);
        }

        const data = await res.json();

        // 1. Scoring & Normalization Logic
        // We calculate a custom score to surface the most relevant "Industry" news.
        const calculateScore = (article) => {
            let score = 0;
            const text = (article.title + ' ' + article.description).toLowerCase();
            const sourceName = article.source.name || '';
            const publishedAt = new Date(article.publishedAt);

            // Keywords Priority
            if (text.includes('agentic')) score += 10;
            if (text.includes('agent') || text.includes('autonomous')) score += 5;
            if (text.includes('startup') || text.includes('funding')) score += 5;
            if (text.includes('ai') || text.includes('llm')) score += 3;
            if (text.includes('saas')) score += 2;

            // Recency Boost
            const hoursAgo = (Date.now() - publishedAt.getTime()) / (1000 * 60 * 60);
            if (hoursAgo < 4) score += 8;
            else if (hoursAgo < 12) score += 5;
            else if (hoursAgo < 24) score += 2;

            // Source Authority
            const authorities = ['TechCrunch', 'Wired', 'VentureBeat', 'The Verge', 'Bloomberg', 'Reuters', 'Y Combinator'];
            if (authorities.some(auth => sourceName.includes(auth))) score += 4;

            // Noise Reduction
            if (text.includes('deal') || text.includes('game') || text.includes('movie')) score -= 5;

            return score;
        };

        // 2. Transform Response
        const articles = data.articles
            .map((article, index) => {
                // Auto-categorize for UI
                let category = 'Tech';
                const text = (article.title + ' ' + article.description).toLowerCase();
                if (text.includes('ai') || text.includes('gpt')) category = 'AI';
                else if (text.includes('crypto') || text.includes('bitcoin')) category = 'Crypto';
                else if (text.includes('saas')) category = 'SaaS';
                else if (text.includes('startup') || text.includes('ipo')) category = 'Startups';

                return {
                    id: `news-${index}-${Date.now()}`,
                    title: article.title,
                    source: article.source.name,
                    time: new Date(article.publishedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
                    image: article.image || 'https://placehold.co/600x400/222/fff?text=No+Image',
                    category,
                    url: article.url,
                    _score: calculateScore(article) // Internal Use Only
                };
            })
            // 3. Sort by computed relevance, then simple index fallback
            .sort((a, b) => b._score - a._score);

        return NextResponse.json({ articles });

    } catch (error) {
        console.error('Failed to fetch news:', error);
        return NextResponse.json({ articles: [], error: 'Failed to fetch news' }, { status: 500 });
    }
}
