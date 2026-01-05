export const launches = [
    {
        id: 1,
        name: "BuzzBear",
        tagline: "Monitor Reddit with semantic AI matching",
        tags: ["SaaS", "AI", "Marketing"],
        votes: 452,
        comments: 24,
        logo: "https://placehold.co/80x80/ff4500/ffffff?text=B",
        launchDate: new Date().toISOString(), // New today
        trending: true,
        // Detailed Fields
        description: "BuzzBear allows you to monitor Reddit conversations in real-time using semantic AI search. Instead of just matching keywords, we understand the *intent* behind the post.\n\n### Key Features\n- **Semantic Matching**: find leads even if they don't use your exact keywords.\n- **Auto-Reply Drafts**: AI suggests helpful, non-spammy replies.\n- **Slack Alerts**: Get notified instantly when a high-intent lead posts.",
        media: {
            hero: "https://placehold.co/1200x675/1a1a1a/ffffff?text=BuzzBear+Demo+Video",
            gallery: [
                "https://placehold.co/600x400/222/fff?text=Dashboard",
                "https://placehold.co/600x400/222/fff?text=Analytics"
            ]
        },
        pricing: {
            model: "Freemium",
            price: "$29",
            period: "mo"
        },
        tech_stack: ["Next.js", "Supabase", "OpenAI", "Stripe"],
        maker: {
            name: "Sarah Dev",
            avatar: "https://placehold.co/60x60/444/fff?text=SD"
        },
        website_url: "https://example.com/buzzbear"
    },
    {
        id: 2,
        name: "Lovable",
        tagline: "Build full-stack apps with natural language",
        tags: ["DevTool", "AI", "NoCode"],
        votes: 890,
        comments: 112,
        logo: "https://placehold.co/80x80/2e66db/ffffff?text=L",
        launchDate: new Date(Date.now() - 86400000 * 2).toISOString(), // 2 days ago
        editorsPick: true,
        description: "Lovable is the next generation functionality for GPT-engineer. It allows anyone to build complex web applications just by chatting. \n\nNo more struggling with git commits or terminal commands. Lovable handles the full stack, from database schema to UI components.",
        media: {
            hero: "https://placehold.co/1200x675/1a1a1a/ffffff?text=Lovable+Interface",
            gallery: [
                "https://placehold.co/600x400/222/fff?text=Chat+UI",
                "https://placehold.co/600x400/222/fff?text=Deployment"
            ]
        },
        pricing: {
            model: "Pro",
            price: "$20",
            period: "mo"
        },
        tech_stack: ["React", "Node.js", "Postgres", "Vercel"],
        maker: {
            name: "Anton Osika",
            avatar: "https://placehold.co/60x60/444/fff?text=AO"
        },
        website_url: "https://lovable.dev"
    },
    {
        id: 3,
        name: "Paid",
        tagline: "Monetization infrastructure for AI agents",
        tags: ["Fintech", "AI", "API"],
        votes: 325,
        comments: 45,
        logo: "https://placehold.co/80x80/10b981/ffffff?text=P",
        launchDate: new Date().toISOString(),
        description: "Paid provides the payment rails for the agentic economy. Allow your AI agents to send and receive payments autonomously, with built-in spending limits and approval workflows.",
        media: {
            hero: "https://placehold.co/1200x675/1a1a1a/ffffff?text=Paid+API+Demo",
            gallery: []
        },
        pricing: {
            model: "Transaction Fee",
            price: "1%",
            period: "tx"
        },
        tech_stack: ["Go", "gRPC", "Postgres"],
        maker: {
            name: "Fin Tech",
            avatar: "https://placehold.co/60x60/444/fff?text=FT"
        },
        website_url: "https://usepaid.com"
    },
    {
        id: 4,
        name: "AgentOrch",
        tagline: "Orchestrate multi-agent workflows visually",
        tags: ["AI", "Workflow"],
        votes: 210,
        comments: 15,
        logo: "https://placehold.co/80x80/8b5cf6/ffffff?text=A",
        launchDate: new Date(Date.now() - 86400000 * 5).toISOString(),
    },
    {
        id: 5,
        name: "SecureTrace",
        tagline: "Disclaimer & audit trails for AI actions",
        tags: ["Security", "Compliance"],
        votes: 180,
        comments: 8,
        logo: "https://placehold.co/80x80/334155/ffffff?text=S",
        launchDate: new Date(Date.now() - 86400000 * 1).toISOString(),
    }
];

export const featuredProducts = [
    {
        id: 101,
        name: "Linear",
        tagline: "Issue tracking built for speed",
        tags: ["Productivity"],
        votes: 12050,
        comments: 400,
        logo: "https://placehold.co/80x80/5e6ad2/ffffff?text=L",
    },
    {
        id: 102,
        name: "Raycast",
        tagline: "Supercharged productivity",
        tags: ["Mac", "Tool"],
        votes: 9800,
        comments: 320,
        logo: "https://placehold.co/80x80/ff6363/ffffff?text=R",
    },
    {
        id: 103,
        name: "Notion",
        tagline: "All-in-one workspace",
        tags: ["Workspace", "Docs"],
        votes: 25000,
        comments: 1500,
        logo: "https://placehold.co/80x80/000000/ffffff?text=N",
    }
];

export const newsItems = [
    {
        id: 201,
        title: "AI moves to 'Agentic' phase in 2026 enterprise software",
        source: "ScaleVise",
        time: "2h ago",
        image: "https://placehold.co/600x400/1e293b/ffffff?text=Agentic+AI",
        category: "AI",
        url: "https://example.com/agentic-ai-2026"
    },
    {
        id: 202,
        title: "Bitcoin breaks 4-year cycle, hits historic $88k high",
        source: "Bitwise",
        time: "4h ago",
        image: "https://placehold.co/300x150/f7931a/ffffff?text=Bitcoin+All+Time+High",
        category: "Crypto",
        url: "https://example.com/bitcoin-high"
    },
    {
        id: 203,
        title: "Gartner projects 40% of apps will have AI agents by year end",
        source: "Gartner",
        time: "6h ago",
        image: "https://placehold.co/300x150/003366/ffffff?text=Gartner+Report",
        category: "AI",
        url: "https://example.com/gartner-ai-agents"
    },
    {
        id: 204,
        title: "India's startup ecosystem eyes massive IPO year in 2026",
        source: "YourStory",
        time: "8h ago",
        image: "https://placehold.co/300x150/ff9933/ffffff?text=India+IPO",
        category: "Startups",
        url: "https://example.com/india-ipo-2026"
    },
    {
        id: 205,
        title: "Ethereum projected to reach $9,000 as tokenization grows",
        source: "CoinMarketCap",
        time: "10h ago",
        image: "https://placehold.co/300x150/627eea/ffffff?text=ETH+Growth",
        category: "Crypto",
        url: "https://example.com/eth-9000"
    },
    {
        id: 206,
        title: "CES 2026: 'AI Forward' theme dominates product launches",
        source: "DigiTimes",
        time: "12h ago",
        image: "https://placehold.co/300x150/000000/ffffff?text=CES+2026",
        category: "AI",
        url: "https://example.com/ces-2026-ai"
    },
    {
        id: 207,
        title: "BuzzBear launches to bring semantic AI search to Reddit",
        source: "ProductHunt",
        time: "1d ago",
        image: "https://placehold.co/300x150/ff4500/ffffff?text=BuzzBear",
        category: "SaaS",
        url: "https://example.com/buzzbear-launch"
    }
];
