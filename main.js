// ============================================================
//  main.js  —  Powers search, tag filters, dark mode & cards
// ============================================================

// ── Dark / Light Mode Toggle + Theme Style Selector ──────
const themeToggle = document.getElementById('themeToggle');
const themeSelect = document.getElementById('themeSelect');
const html = document.documentElement;

// Remember the user's preferences
const savedMode = localStorage.getItem('themeMode') || 'light';
const savedStyle = localStorage.getItem('themeStyle') || 'default';
html.setAttribute('data-mode', savedMode);
html.setAttribute('data-theme', savedStyle);

if (themeSelect) {
  themeSelect.value = savedStyle;
  themeSelect.addEventListener('change', () => {
    const selected = themeSelect.value;
    html.setAttribute('data-theme', selected);
    localStorage.setItem('themeStyle', selected);
  });
}

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-mode');
  const next = current === 'light' ? 'dark' : 'light';
  html.setAttribute('data-mode', next);
  localStorage.setItem('themeMode', next);
});


// ── Search ────────────────────────────────────────────────
const searchInput = document.getElementById('searchInput');
const sortSelect  = document.getElementById('sortSelect');
const postGrid    = document.getElementById('postGrid');
const noResults   = document.getElementById('noResults');
const tagFiltersEl = document.getElementById('tagFilters');

let sortOrder   = 'newest';
let activeTag   = 'All';

if (tagFiltersEl) {
  const allTags = ['All', ...new Set(posts.flatMap(p => p.tags))];

  allTags.forEach(tag => {
    const btn = document.createElement('button');
    btn.className = 'tag-btn' + (tag === 'All' ? ' active' : '');
    btn.textContent = tag;
    btn.addEventListener('click', () => {
      activeTag = tag;
      document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderPosts();
    });
    tagFiltersEl.appendChild(btn);
  });
}

if (searchInput) {
  searchInput.addEventListener('input', renderPosts);
}

if (sortSelect) {
  sortSelect.addEventListener('change', () => {
    sortOrder = sortSelect.value;
    renderPosts();
  });
}


// ── Render Post Cards ─────────────────────────────────────


function renderPosts() {
  if (!postGrid || !noResults) return;
  const query = (searchInput ? searchInput.value : '').toLowerCase().trim();

  // Filter by tag then by search query
  const filtered = posts.filter(post => {
    const matchesTag  = activeTag === 'All' || post.tags.includes(activeTag);
    const matchesSearch =
      !query ||
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.tags.some(t => t.toLowerCase().includes(query));
    return matchesTag && matchesSearch;
  });

  const sortedPosts = filtered.slice().sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });

  // Clear grid
  postGrid.innerHTML = '';

  if (filtered.length === 0) {
    noResults.hidden = false;
    return;
  }

  noResults.hidden = true;

  sortedPosts.forEach((post, index) => {
    const card = document.createElement('article');
    card.className = 'post-card';
    card.style.animationDelay = `${index * 80}ms`;

    const imageMarkup = post.image
      ? `<img class="card-image" src="${post.image}" alt="${post.title}" />`
      : `<div class="card-image-placeholder" aria-hidden="true">${post.emoji}</div>`;

    card.innerHTML = `
      ${imageMarkup}
      <div class="card-body">
        <div class="card-tags">
          ${post.tags.map(t => `<span class="card-tag">${t}</span>`).join('')}
        </div>
        <h2 class="card-title">${post.title}</h2>
        <p class="card-excerpt">${post.excerpt}</p>
        <div class="card-meta">
          <span>${post.date}</span>
          <span class="dot">·</span>
          <span>${post.readTime}</span>
        </div>
        <a class="card-link" href="${post.link}">Read post</a>
      </div>
    `;

    postGrid.appendChild(card);
  });
}

// Initial render
if (postGrid) renderPosts();
