// ── SHORTS DATA (Top Viewed - 6 per channel) ──────────────────────────────────

var MC_SHORTS = [
  {id:'v5SGM43YwuQ', title:'You Missed This in The Sopranos Finale'},
  {id:'Pi8d0fnE4Y8', title:"Inside Paul Vario's $150,000 Day Criminal Empire"},
  {id:'fAF8pgcq3vk', title:'The Hidden Meaning Behind The Hammer'},
  {id:'g59TLt4XIeM', title:"Vario's Temper — Brutal Restaurant Beating"},
  {id:'riLj9mb7PoU', title:'The Movie Never Lied To You'},
  {id:'GpPvujk1ipg', title:'Why The System Demands Surrender, Not Change'}
];

var ITU_SHORTS = [
  {id:'sqZ-0uWNyM8', title:'The Solvay Conference: A Gathering of Physics Giants'},
  {id:'sYar_O3d3FY', title:"Oppenheimer's Tragic Brilliance"},
  {id:'c9YLXvg6ja4', title:'How Did Pigeons Send Messages?'},
  {id:'hi7RR2HdzWo', title:'Did You Know That Wolves Can Alter Rivers?'},
  {id:'HBLwTaEWgmM', title:'The Immortal Cells of Henrietta Lacks'},
  {id:'De4zHo3YYlo', title:'Eratosthenes Proved That Earth Is Round By Using A Camel'}
];

// ── VIDEO DATA (5 per channel) ────────────────────────────────────────────────

var MC_VIDEOS = [
  {id:'DBQVqLDBZgY', title:"Why The Four Bosses Failed To Predict Michael Corleone's Rise To Power?"},
  {id:'oAwilIiHJnk', title:'How It All Went Wrong for Tony Montana'},
  {id:'B1mDQLAJklE', title:"Vincent's Death Is More Complicated Than You Think"},
  {id:'ABpuI27FuJI', title:"What You Didn't Know from Watching Goodfellas"},
  {id:'pHwE_a6IwzA', title:'Paul Vario Was Far Worse Than Goodfellas Ever Showed'}
];

var ITU_VIDEOS = [
  {id:'ckmSC-qSkkc', title:'17 Nobel Prize Winners United in One Photo — The Solvay Conference 1927'},
  {id:'A_9scFwW3ns', title:'The Science Behind "Cute Aggression"'},
  {id:'9IkjRbwAS3w', title:'The Curies: The Family with the Most Nobel Prizes in History'},
  {id:'FkY9vzXXzWo', title:'How Eratosthenes Proved Our Round Earth 2,200 Years Ago?'},
  {id:'Y0v9tCl9SrA', title:'What Was Life Like in the Ancient Supercontinent of Pangea?'}
];

// ── CONFIG ────────────────────────────────────────────────────────────────────
var YT_KEY = 'AIzaSyCWNWc7wSVOIhAFlZPH4Ql8Q4HBemQFh6Q';
var CH_MC  = 'UCfYA2EAXkK3CLamAGGZj1eA';
var CH_ITU = 'UCfc1Sa0Gec4HdFM7Gxu5uYA';

// ── LANGUAGE ──────────────────────────────────────────────────────────────────
var LANG = localStorage.getItem('lang') || 'en';

var TEXT = {
  en: {
    'h-label':   'Video Editor · Content Creator · Community Manager',
    'h-sub':     '5+ years crafting compelling video content, building engaged communities, and bringing creative visions to life.',
    'h-videos':  'Videos', 'h-views': 'Total Views', 'h-subs': 'Subscribers',
    'h-cta':     'View My Work',
    'a-title':   'About Me',
    'a-lead':    'I\'m <strong>Anis Douar</strong> — a video editor, content creator, and community manager with over <strong>5 years of experience</strong>.',
    'a-p1':      'I create engaging video content that connects with audiences and drives growth. From concept to final cut, I handle every step of the production process — scripting, editing, motion graphics, and publishing — while also managing online communities and social media strategies.',
    'a-p2':      'My work spans two YouTube channels: <em>Movies Consigliere</em> (cinematic deep-dives into iconic films) and <em>Into The Unknown</em> (science, history, and the mysteries of our world). Together they\'ve reached millions of viewers worldwide.',
    'a-p3':      'Whether you need a video editor, a community manager, or a creative partner — I\'m here to help.',
    's1-t': 'Video Editing',       's1-d': 'Professional editing, motion graphics, and post-production for YouTube and social media.',
    's2-t': 'Community Management','s2-d': 'Building and nurturing engaged online communities, managing social media presence and brand voice.',
    's3-t': 'Content Strategy',    's3-d': 'From research and scripting to SEO and audience growth — a complete content pipeline.',
    's4-t': '5+ Years Experience', 's4-d': 'A proven track record of creating content that resonates, with millions of views across channels.',
    'c1-desc': 'Cinematic deep-dives into the greatest films ever made.',
    'c2-desc': 'Exploring science, history, and the mysteries of our world.',
    'ct-title': 'Get In Touch',    'ct-desc': 'Interested in collaborating? Let\'s connect.',
    'ct-wa':    'Send me a message',
    'ct-send':  'Send Message',
    'lbl-name': 'Name', 'lbl-email': 'Email', 'lbl-msg': 'Message',
    'ft-rights': 'All rights reserved.',
    'views': 'views', 'likes': 'likes', 'comments': 'comments'
  },
  fr: {
    'h-label':   'Monteur Vidéo · Créateur de Contenu · Community Manager',
    'h-sub':     'Plus de 5 ans d\'expérience dans la création de contenu vidéo percutant, la gestion de communautés engagées et la réalisation de projets créatifs.',
    'h-videos':  'Vidéos', 'h-views': 'Vues totales', 'h-subs': 'Abonnés',
    'h-cta':     'Voir mes réalisations',
    'a-title':   'À propos',
    'a-lead':    'Je suis <strong>Anis Douar</strong> — monteur vidéo, créateur de contenu et community manager avec plus de <strong>5 ans d\'expérience</strong>.',
    'a-p1':      'Je crée du contenu vidéo engageant qui connecte avec les audiences et stimule la croissance. Du concept au montage final, je gère chaque étape du processus de production — scénarisation, montage, motion design et publication — tout en gérant les communautés en ligne et les stratégies social media.',
    'a-p2':      'Mon travail couvre deux chaînes YouTube : <em>Movies Consigliere</em> (analyses cinématographiques de films iconiques) et <em>Into The Unknown</em> (science, histoire et mystères du monde). Ensemble, elles ont atteint des millions de spectateurs.',
    'a-p3':      'Que vous ayez besoin d\'un monteur vidéo, d\'un community manager ou d\'un partenaire créatif — je suis là pour vous aider.',
    's1-t': 'Montage Vidéo',         's1-d': 'Montage professionnel, motion design et post-production pour YouTube et les réseaux sociaux.',
    's2-t': 'Community Management',  's2-d': 'Construction et animation de communautés en ligne engagées, gestion de la présence sur les réseaux sociaux.',
    's3-t': 'Stratégie de Contenu',  's3-d': 'De la recherche à la rédaction, SEO et croissance d\'audience — un pipeline de contenu complet.',
    's4-t': '5+ ans d\'expérience',  's4-d': 'Un parcours prouvé dans la création de contenu qui résonne, avec des millions de vues sur l\'ensemble des chaînes.',
    'c1-desc': 'Analyses cinématographiques approfondies des plus grands films.',
    'c2-desc': 'Explorer la science, l\'histoire et les mystères de notre monde.',
    'ct-title': 'Me Contacter',      'ct-desc': 'Intéressé par une collaboration ? Contactez-moi.',
    'ct-wa':    'Envoyez-moi un message',
    'ct-send':  'Envoyer le message',
    'lbl-name': 'Nom', 'lbl-email': 'Email', 'lbl-msg': 'Message',
    'ft-rights': 'Tous droits réservés.',
    'views': 'vues', 'likes': 'j\'aime', 'comments': 'commentaires'
  }
};

function applyLang() {
  var t = TEXT[LANG] || TEXT.en;
  Object.keys(t).forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = t[id];
  });
  document.documentElement.lang = LANG;
  var langBtn = document.getElementById('langBtn');
  if (langBtn) langBtn.textContent = LANG === 'en' ? 'FR 🇫🇷' : 'EN 🇬🇧';
}

// ── BUILD A VIDEO CARD ─────────────────────────────────────────────────────────
function makeCard(v) {
  var card = document.createElement('div');
  card.className = 'video-card';

  card.innerHTML =
    '<div class="thumb-wrap" id="tw-' + v.id + '">' +
      '<img src="https://img.youtube.com/vi/' + v.id + '/hqdefault.jpg" alt="' + v.title.replace(/"/g,'&quot;') + '" loading="lazy">' +
      '<button class="play-btn" type="button" aria-label="Play">' +
        '<svg viewBox="0 0 68 48" width="68" height="48">' +
          '<path class="pbg" d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.63-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="#111" fill-opacity=".85"/>' +
          '<path d="M45 24L27 14v20z" fill="#fff"/>' +
        '</svg>' +
      '</button>' +
    '</div>' +
    '<div class="video-info">' +
      '<h3 class="video-title">' + v.title + '</h3>' +
      '<div class="video-stats" id="st-' + v.id + '"><span class="vstat" style="color:var(--text3)">Loading stats…</span></div>' +
    '</div>';

  card.querySelector('.thumb-wrap').addEventListener('click', function() {
    this.innerHTML =
      '<iframe src="https://www.youtube.com/embed/' + v.id + '?autoplay=1"' +
      ' allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"' +
      ' allowfullscreen></iframe>';
  });

  return card;
}

// ── FILL VIDEO GRID ───────────────────────────────────────────────────────────
function fillGrid(gridId, videos) {
  var grid = document.getElementById(gridId);
  if (!grid) return;
  grid.innerHTML = '';
  videos.forEach(function(v) {
    grid.appendChild(makeCard(v));
  });
  if (YT_KEY) fetchStats(videos.map(function(v){ return v.id; }));
}

// ── FILL SHORTS GRID ──────────────────────────────────────────────────────────
function fillShorts(gridId, shorts) {
  var grid = document.getElementById(gridId);
  if (!grid) return;
  grid.innerHTML = '';
  shorts.forEach(function(s) {
    var card = document.createElement('div');
    card.className = 'short-card';
    card.innerHTML =
      '<div class="short-thumb" id="sth-' + s.id + '">' +
        '<img src="https://img.youtube.com/vi/' + s.id + '/hqdefault.jpg" alt="' + s.title.replace(/"/g, '&quot;') + '" loading="lazy">' +
        '<button class="play-btn" type="button" aria-label="Play short">' +
          '<svg viewBox="0 0 68 48" width="56" height="40">' +
            '<path class="pbg" d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.63-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="#111" fill-opacity=".85"/>' +
            '<path d="M45 24L27 14v20z" fill="#fff"/>' +
          '</svg>' +
        '</button>' +
        '<div class="short-badge">SHORT</div>' +
      '</div>' +
      '<div class="short-info">' +
        '<p class="short-title">' + s.title + '</p>' +
        '<div class="video-stats" id="st-' + s.id + '"><span class="vstat" style="color:var(--text3)">Loading…</span></div>' +
      '</div>';

    card.querySelector('.short-thumb').addEventListener('click', function() {
      this.innerHTML =
        '<iframe src="https://www.youtube.com/embed/' + s.id + '?autoplay=1"' +
        ' allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"' +
        ' allowfullscreen></iframe>';
    });

    grid.appendChild(card);
  });
  if (YT_KEY) fetchStats(shorts.map(function(s){ return s.id; }));
}

// ── FETCH STATS ───────────────────────────────────────────────────────────────
function fetchStats(ids) {
  if (!YT_KEY || !ids.length) return;
  for (var i = 0; i < ids.length; i += 50) {
    (function(batch) {
      fetch('https://www.googleapis.com/youtube/v3/videos?part=statistics&id=' + batch.join(',') + '&key=' + YT_KEY)
        .then(function(r) { return r.json(); })
        .then(function(data) {
          if (!data.items) return;
          var t = TEXT[LANG] || TEXT.en;
          data.items.forEach(function(item) {
            var el = document.getElementById('st-' + item.id);
            if (!el) return;
            var s = item.statistics;
            el.innerHTML =
              '<span class="vstat"><svg viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg> <b>' + fmt(s.viewCount)    + '</b> ' + t['views']    + '</span>' +
              '<span class="vstat"><svg viewBox="0 0 24 24"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/></svg> <b>' + fmt(s.likeCount)    + '</b> ' + t['likes']    + '</span>' +
              '<span class="vstat"><svg viewBox="0 0 24 24"><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z"/></svg> <b>' + fmt(s.commentCount) + '</b> ' + t['comments'] + '</span>';
          });
        })
        .catch(function(e) { console.warn('Stats fetch failed', e); });
    })(ids.slice(i, i + 50));
  }
}

// ── FETCH CHANNEL STATS (hero) ────────────────────────────────────────────────
function fetchChannelStats() {
  if (!YT_KEY) return;
  fetch('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=' + CH_MC + ',' + CH_ITU + '&key=' + YT_KEY)
    .then(function(r) { return r.json(); })
    .then(function(data) {
      if (!data.items) return;
      var vids = 0, views = 0, subs = 0;
      data.items.forEach(function(it) {
        vids  += parseInt(it.statistics.videoCount,      10) || 0;
        views += parseInt(it.statistics.viewCount,       10) || 0;
        subs  += parseInt(it.statistics.subscriberCount, 10) || 0;
      });
      document.getElementById('statVideos').textContent = fmt(vids);
      document.getElementById('statViews').textContent  = fmt(views);
      document.getElementById('statSubs').textContent   = fmt(subs);
    })
    .catch(function(e) { console.warn('Channel stats failed', e); });
}

function fmt(n) {
  n = parseInt(n, 10);
  if (isNaN(n)) return '—';
  if (n >= 1e6) return (n / 1e6).toFixed(1).replace(/\.0$/, '') + 'M';
  if (n >= 1e3) return (n / 1e3).toFixed(1).replace(/\.0$/, '') + 'K';
  return n.toLocaleString();
}

function refreshAllStats() {
  fetchStats(MC_VIDEOS.map(function(v){ return v.id; }));
  fetchStats(ITU_VIDEOS.map(function(v){ return v.id; }));
  fetchStats(MC_SHORTS.map(function(s){ return s.id; }));
  fetchStats(ITU_SHORTS.map(function(s){ return s.id; }));
}

// ── BOOT ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  applyLang();

  // Fill video grids (5 per channel)
  fillGrid('grid1', MC_VIDEOS);
  fillGrid('grid2', ITU_VIDEOS);

  // Fill shorts grids (6 per channel)
  fillShorts('shorts1', MC_SHORTS);
  fillShorts('shorts2', ITU_SHORTS);

  // Fetch combined hero stats
  fetchChannelStats();

  // Language toggle
  document.getElementById('langBtn').addEventListener('click', function() {
    LANG = LANG === 'en' ? 'fr' : 'en';
    localStorage.setItem('lang', LANG);
    applyLang();
    refreshAllStats();
  });

  // Navbar scroll
  window.addEventListener('scroll', function() {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // Mobile hamburger
  var ham   = document.getElementById('hamburger');
  var links = document.getElementById('navLinks');
  if (ham && links) {
    ham.addEventListener('click', function() {
      var open = links.classList.toggle('open');
      ham.classList.toggle('open', open);
      ham.setAttribute('aria-expanded', open);
    });
    links.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() {
        links.classList.remove('open');
        ham.classList.remove('open');
      });
    });
  }

  // Contact form
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var n   = document.getElementById('name').value;
    var em  = document.getElementById('email').value;
    var msg = document.getElementById('msg').value;
    window.location.href =
      'mailto:anisdouar@outlook.fr' +
      '?subject=' + encodeURIComponent('Portfolio Contact from ' + n) +
      '&body='    + encodeURIComponent('Name: ' + n + '\nEmail: ' + em + '\n\nMessage:\n' + msg);
  });
});
