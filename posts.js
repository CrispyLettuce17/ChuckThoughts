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
    title: "The Non-Profit Business Model is Broken — Here's How We Fix It",
    excerpt: "Let's change the way we think about changing the world.",
    date: "May 18, 2026",
    readTime: "10 min read",
    tags: ["Current", "Business"],
    emoji: "💰🌎🏫",
    link: "posts/my-first-post.html",
  },
  {
    id: 2,
    title: "Gulf Stream Orphans",
    excerpt: "A Spotfin Butterflyfish begins its unlikely 1,500-mile journey from the coral reefs of Florida to the sandy shores of Rhode Island — and what it means for ocean science.",
    date: "May 20, 2026",
    readTime: "12 min read",
    tags: ["Current", "Nature"],
    emoji: "🐟🐠🐡",
    link: "posts/GSO-post.html",
  },
  {
    id: 3,
    title: "Heavy Lies the Crown",
    excerpt: "How Jeanie and Rob Robbed the GOAT of More Rings.",
    date: "May 28, 2026",
    readTime: "15 min read",
    tags: ["Sports"],
    emoji: "🏀👑🐐🏆💍",
    link: "posts/Lakers-post.html",
  },
];