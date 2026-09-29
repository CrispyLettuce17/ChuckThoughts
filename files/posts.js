// ============================================================
//  posts.js  —  YOUR BLOG POSTS LIVE HERE
// ============================================================
//
//  To add a new post, copy one of the objects below, paste it
//  at the top of the array, and fill in your own details.
//
//  Fields:
//    id       – a unique number (just increment)
//    title    – the post title
//    excerpt  – a short preview sentence or two
//    date     – shown on the card  (any format you like)
//    readTime – e.g. "4 min read"
//    tags     – array of strings; used for the filter buttons
//    emoji    – shown as a placeholder image (pick any emoji!), e.g. 💰, 🎓, 🌍
//    image    – optional image URL displayed instead of the emoji
//    link     – path to your post HTML file, e.g. "posts/my-post.html"
//               (use "#" if the file doesn't exist yet)
// ============================================================

const posts = [
  {
    id: 1,
    title: "The Nonprofit Business Model Is Broken",
    excerpt: "Here’s how we can fix it.",
    date: "May 1, 2026",
    readTime: "2 min read",
    tags: ["Current", "Business"],
    emoji: "💰",
    link: "posts/NonProfit.html",
  },
  {
    id: 2,
    title: "Gulf Stream Orphans",
    excerpt: "A Spotfin Butterflyfish begins its unlikely 1,500-mile journey from the coral reefs of Florida to the sandy shores of Rhode Island — and what its trip means for ocean science.",
    date: "May 22, 2026",
    readTime: "14 min read",
    tags: ["Current", "Nature"],
    emoji: "🐠",
    link: "posts/GSO.html",
  },
  {
    id: 3,
    title: "Heavy Lies the Crown",
    excerpt: "How Jeanie and Rob robbed the GOAT of more rings.",
    date: "May 1, 2026",
    readTime: "1 min read",
    tags: ["Sports"],
    emoji: "👑",
    link: "posts/Lakers.html",
  },
  {
    id: 4,
    title: "Make America Green Again",
    excerpt: "How the U.S. should be using renewable energy to protect our national security.",
    date: "July 20, 2026",
    readTime: "10 min read",
    tags: ["Current", "Politics"],
    emoji: "🔋",
    link: "posts/Energy.html",
  },
  {
    id: 5,
    title: "Building a Championship Team in Today’s NBA",
    excerpt: "A closer look at the traits that separated the Knicks from the Spurs, and the same ones that have shaped the modern NBA.",
    date: "June 25, 2026",
    readTime: "15 min read",
    tags: ["Current", "Sports"],
    emoji: "🏀",
    link: "posts/NBA.html",
  },
  {
    id: 6,
    title: "The American Revolution: A History",
    excerpt: "A chronological timeline of key moments from the end of the Seven Years’ War to the adoption of the Bill of Rights.",
    date: "July 20, 2026",
    readTime: "15 min read",
    tags: ["History"],
    emoji: "🦅",
    link: "posts/AR.html",
  },
  {
    id: 7,
    title: "The March to Equilibrium",
    excerpt: "A few paragraphs from Helen Czerski’s Storm in a Teacup got me thinking about the Second Law of Thermodynamics, and my compulsive need for order.",
    date: "September 29, 2026",
    readTime: "6 min read",
    tags: ["Personal", "Nature"],
    emoji: "⚖️",
    link: "posts/Equilibrium.html",
  },
];
