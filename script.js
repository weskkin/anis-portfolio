/* ═══════════════════════════════════════════════════════
   ANIS DOUAR — PORTFOLIO
   Main JavaScript: Video data, YouTube API stats, filters
   ═══════════════════════════════════════════════════════ */

// ─── VIDEO DATA ───
// Each video has an id, title, and category for filtering.
const VIDEOS = [
    { id: 'SpICdPCqv38', title: 'Why Was Tommy Really Killed in Goodfellas, and Who Set Him Up?', category: 'goodfellas' },
    { id: 'zO6uanlY4Sc', title: 'What Really Happened to Henry Hill After Goodfellas Ended?', category: 'goodfellas' },
    { id: 'XSyvGHBL47A', title: "Goodfellas Lied, What Really Happened to Frankie Carbone?", category: 'goodfellas' },
    { id: '_fScTfw2gs0', title: "This Dinner Scene in Goodfellas Isn't What It Looks Like", category: 'goodfellas' },
    { id: 'pHwE_a6IwzA', title: 'Paul Vario Was Far Worse Than Goodfellas Ever Showed', category: 'goodfellas' },
    { id: 'loDK7q4tGJo', title: 'How Do the Corleone Men Redefine Strength in The Godfather?', category: 'godfather' },
    { id: 'ZwYZB_Xq90E', title: 'Was Sonny Corleone Actually a Bad Don, or Did We Misread Him?', category: 'godfather' },
    { id: 'lCXqfKGcb0M', title: 'What Kay and Apollonia Really Represent in The Godfather?', category: 'godfather' },
    { id: 'azR4rif_2BI', title: 'The Myths The Godfather Made You Believe About The Mafia', category: 'godfather' },
    { id: 'JZlmAZPx1m8', title: 'How Did Paulie and Carlo Seal Their Deaths in The Godfather?', category: 'godfather' },
    { id: 'sbttM97-byc', title: 'Did Marsellus Wallace Use Mia to Test Vincent Vega?', category: 'pulp-fiction' },
    { id: 'j1XWFgg1Fq0', title: "What Butch's Gold Watch Really Means in Pulp Fiction", category: 'pulp-fiction' },
    { id: 'YP9MFU2ZMwA', title: "What Jules' Bible Verse ACTUALLY Means (It's Not What You Think)", category: 'pulp-fiction' },
    { id: '4BtdR2d8FIw', title: 'What Was Vincent Vega Really Doing in Amsterdam for 3 Years?', category: 'pulp-fiction' },
    { id: 'DAn8CXJoZmo', title: 'Who Ordered the Final Hit on Tony Soprano?', category: 'sopranos' },
    { id: '5bwXxJ23_6Q', title: "Did New York Secretly Decide Tony Soprano's Fate?", category: 'sopranos' },
    { id: '0wGudsTQKUI', title: 'What Happened to the Russian in Pine Barrens? The Answer Is Clear', category: 'sopranos' },
    { id: 'M09HhE4ZUOs', title: "Why Did John Doe Kill Tracy? Wasn't He Supposed to Kill Only Sinners?", category: 'other' },
    { id: 'N6Ov7GMhf6I', title: "Why Did Schultz Refuse to Shake Candie's Hand in Django Unchained?", category: 'other' },
    { id: '2DGl1ViW3i0', title: 'Why Did Frank Lucas Kill Tango in Front of 300 Witnesses?', category: 'other' },
    { id: '14x-dOArBT0', title: 'Why Did the FBI Tell Sonny Black That Donnie Brasco Was a Fed?', category: 'other' },
    { id: '1mBFHGjv_kQ', title: 'Did Someone Inside The Truman Show Secretly Help Truman Escape?', category: 'other' },
    { id: 'BjK47UEE6YM', title: 'The Man Who Turned Taxi Driver Into Instructions for Real Violence', category: 'other' },
    { id: '8Lgdoa4s7jo', title: 'The One Clue in Shutter Island That Changes Everything', category: 'other' },
    { id: '_REQlwpAG98', title: 'Why Red Failed Parole Twice, Then Won It by Giving Up?', category: 'other' },
    { id: 'lO8TKbSQlYE', title: "The Iconic Oldboy Hallway Scene Isn't Just a Fight Scene", category: 'other' },
    { id: 'Oeo5XQGzh_U', title: "How Much of Verbal Kint's Story Was Actually True in The Usual Suspects?", category: 'other' },
    { id: 'ZCCb2py3ku4', title: 'Did Cliff Booth Really Kill His Wife in Once Upon a Time in Hollywood?', category: 'other' },
    { id: 'xKhjHAmWTDg', title: "What Did The Wolf of Wall Street Hide About Jordan Belfort's Real Life?", category: 'other' },
];

const CHANNEL_ID = 'UCfYA2EAXkK3CLamAGGZj1eA';

// YouTube Data API key — A free, restricted key is used here.
// For production, replace with your own key from https://console.cloud.google.com/
// and restrict it to YouTube Data API v3 + your domain.
const YT_API_KEY = 'AIzaSyCWNWc7wSVOIhAFlZPH4Ql8Q4HBemQFh6Q';

// Category display names
const CATEGORY_LABELS = {
    'goodfellas': 'Goodfellas',
    'godfather': 'The Godfather',
    'pulp-fiction': 'Pulp Fiction',
    'sopranos': 'The Sopranos',
    'other': 'Other Films',
};


// ─── DOM ELEMENTS ───
const videoGrid = document.getElementById('videoGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const navbar = document.getElementById('navbar');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.getElementById('contactForm');


// ─── RENDER VIDEOS ───
function renderVideos(filter = 'all') {
    videoGrid.innerHTML = '';

    const filtered = filter === 'all'
        ? VIDEOS
        : VIDEOS.filter(v => v.category === filter);

    filtered.forEach((video, i) => {
        const card = document.createElement('div');
        card.className = 'video-card';
        card.dataset.category = video.category;
        card.style.animationDelay = `${i * 0.08}s`;

        card.innerHTML = `
            <div class="video-embed" data-id="${video.id}">
                <img
                    src="https://img.youtube.com/vi/${video.id}/hqdefault.jpg"
                    alt="${escapeHtml(video.title)}"
                    loading="lazy"
                    class="video-thumb"
                >
                <button class="play-btn" aria-label="Play ${escapeHtml(video.title)}">
                    <svg viewBox="0 0 68 48" width="68" height="48">
                        <path class="play-bg" d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.63-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="#212121" fill-opacity="0.8"/>
                        <path d="M45 24L27 14v20" fill="#fff"/>
                    </svg>
                </button>
            </div>
            <div class="video-info">
                <h3 class="video-title">${escapeHtml(video.title)}</h3>
                <div class="video-stats" id="stats-${video.id}">
                    <div class="video-stat">
                        ${svgIcon('eye')}
                        <span class="stat-value">Loading…</span>
                    </div>
                </div>
                <span class="video-category">${CATEGORY_LABELS[video.category]}</span>
            </div>
        `;

        videoGrid.appendChild(card);
    });

    // Attach click-to-play handlers
    videoGrid.querySelectorAll('.video-embed[data-id]').forEach(embed => {
        embed.addEventListener('click', () => {
            const id = embed.dataset.id;
            embed.innerHTML = `
                <iframe
                    src="https://www.youtube.com/embed/${id}?autoplay=1"
                    title="Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            `;
        });
    });

    // Fetch stats if we have an API key
    if (YT_API_KEY) {
        fetchVideoStats(filtered.map(v => v.id));
    } else {
        // No API key — try noembed fallback or show placeholder
        filtered.forEach(v => {
            const statsEl = document.getElementById(`stats-${v.id}`);
            if (statsEl) {
                statsEl.innerHTML = `
                    <a href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener"
                       class="video-stat" style="color:var(--accent);cursor:pointer;">
                        ${svgIcon('play')}
                        <span class="stat-value">Watch on YouTube</span>
                    </a>
                `;
            }
        });
    }
}


// ─── FETCH VIDEO STATS (YouTube Data API v3) ───
async function fetchVideoStats(ids) {
    if (!YT_API_KEY || ids.length === 0) return;

    try {
        // Batch in groups of 50 (API limit)
        for (let i = 0; i < ids.length; i += 50) {
            const batch = ids.slice(i, i + 50);
            const url = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${batch.join(',')}&key=${YT_API_KEY}`;
            const res = await fetch(url);
            const data = await res.json();

            if (data.items) {
                data.items.forEach(item => {
                    const stats = item.statistics;
                    const statsEl = document.getElementById(`stats-${item.id}`);
                    if (statsEl) {
                        statsEl.innerHTML = `
                            <div class="video-stat">
                                ${svgIcon('eye')}
                                <span class="stat-value">${formatNumber(stats.viewCount)}</span> views
                            </div>
                            <div class="video-stat">
                                ${svgIcon('thumbsup')}
                                <span class="stat-value">${formatNumber(stats.likeCount)}</span> likes
                            </div>
                            <div class="video-stat">
                                ${svgIcon('comment')}
                                <span class="stat-value">${formatNumber(stats.commentCount)}</span> comments
                            </div>
                        `;
                    }
                });
            }
        }
    } catch (err) {
        console.warn('Could not fetch video stats:', err);
    }
}


// ─── FETCH CHANNEL STATS ───
async function fetchChannelStats() {
    if (!YT_API_KEY) return;

    try {
        const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${YT_API_KEY}`;
        const res = await fetch(url);
        const data = await res.json();

        if (data.items && data.items[0]) {
            const stats = data.items[0].statistics;
            document.getElementById('statVideos').textContent = formatNumber(stats.videoCount);
            document.getElementById('statViews').textContent = formatNumber(stats.viewCount);
            document.getElementById('statSubs').textContent = formatNumber(stats.subscriberCount);
        }
    } catch (err) {
        console.warn('Could not fetch channel stats:', err);
    }
}


// ─── FILTER LOGIC ───
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderVideos(btn.dataset.filter);
    });
});


// ─── NAVBAR SCROLL ───
let lastScroll = 0;
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });


// ─── MOBILE MENU ───
if (navToggle) {
    navToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        navToggle.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', isOpen);
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            navToggle.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}


// ─── CONTACT FORM ───
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = contactForm.querySelector('#name').value;
        const email = contactForm.querySelector('#email').value;
        const message = contactForm.querySelector('#message').value;

        // Mailto fallback (no backend needed for free hosting)
        const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:anisdouar@gmail.com?subject=${subject}&body=${body}`;
    });
}


// ─── UTILITIES ───
function formatNumber(num) {
    const n = parseInt(num, 10);
    if (isNaN(n)) return '—';
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
    return n.toLocaleString();
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function svgIcon(name) {
    const icons = {
        eye: '<svg viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>',
        thumbsup: '<svg viewBox="0 0 24 24"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/></svg>',
        comment: '<svg viewBox="0 0 24 24"><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z"/></svg>',
        play: '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>',
    };
    return icons[name] || '';
}


// ─── INTERSECTION OBSERVER (fade-in sections) ───
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px',
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            sectionObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    sectionObserver.observe(section);
});

// CSS for .visible
const style = document.createElement('style');
style.textContent = `section.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(style);


// ─── INIT ───
document.addEventListener('DOMContentLoaded', () => {
    renderVideos();
    fetchChannelStats();
});
