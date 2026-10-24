/* ═══════════════════════════════════════════
   ANIS DOUAR — PORTFOLIO — script.js
   ═══════════════════════════════════════════ */

// ── translations ──────────────────────────────────────────────────────────────
var LANG = 'en';
var TR = {
  en: {
    'nav.about':'About','nav.work':'Work','nav.contact':'Contact',
    'hero.label':'Video Editor · Content Creator · Community Manager',
    'hero.subtitle':'5+ years crafting compelling video content, building engaged communities, and bringing creative visions to life.',
    'hero.videos':'Videos','hero.views':'Total Views','hero.subs':'Subscribers',
    'hero.cta':'View My Work','hero.scroll':'Scroll',
    'about.title':'About Me',
    'about.lead':'I\'m <strong>Anis Douar</strong> — a video editor, content creator, and community manager with over <strong>5 years of experience</strong>.',
    'about.p1':'I create engaging video content that connects with audiences and drives growth. From concept to final cut, I handle every step of the production process — scripting, editing, motion graphics, and publishing — while also managing online communities and social media strategies.',
    'about.p2':'My work spans multiple YouTube channels, including <em>Movies Consigliere</em> (cinematic deep-dives into iconic films) and <em>Into The Unknown</em> (exploring science, history, and the mysteries of our world). Together, they\'ve reached millions of viewers worldwide.',
    'about.p3':'Whether you need a video editor to elevate your content, a community manager to grow your audience, or a creative partner to bring your vision to life — I\'m here to help.',
    'about.h1':'Video Editing','about.h1d':'Professional editing, motion graphics, and post-production for YouTube and social media.',
    'about.h2':'Community Management','about.h2d':'Building and nurturing engaged online communities, managing social media presence and brand voice.',
    'about.h3':'Content Strategy','about.h3d':'From research and scripting to SEO and audience growth — a complete content pipeline.',
    'about.h4':'5+ Years Experience','about.h4d':'A proven track record of creating content that resonates, with millions of views across channels.',
    'work.title':'Featured Work','work.desc':'A selection of videos from my YouTube channels.',
    'contact.title':'Get In Touch','contact.desc':'Interested in collaborating or want to discuss a project? Let\'s connect.',
    'contact.wa':'Send me a message','contact.name':'Name','contact.email':'Email','contact.message':'Message','contact.send':'Send Message',
    'footer.rights':'All rights reserved.',
    'v':'views','l':'likes','c':'comments'
  },
  fr: {
    'nav.about':'À propos','nav.work':'Réalisations','nav.contact':'Contact',
    'hero.label':'Monteur Vidéo · Créateur de Contenu · Community Manager',
    'hero.subtitle':'Plus de 5 ans d\'expérience dans la création de contenu vidéo percutant, la gestion de communautés engagées et la réalisation de projets créatifs.',
    'hero.videos':'Vidéos','hero.views':'Vues totales','hero.subs':'Abonnés',
    'hero.cta':'Voir mes réalisations','hero.scroll':'Défiler',
    'about.title':'À propos',
    'about.lead':'Je suis <strong>Anis Douar</strong> — monteur vidéo, créateur de contenu et community manager avec plus de <strong>5 ans d\'expérience</strong>.',
    'about.p1':'Je crée du contenu vidéo engageant qui connecte avec les audiences et stimule la croissance. Du concept au montage final, je gère chaque étape du processus de production — scénarisation, montage, motion design et publication — tout en gérant les communautés en ligne et les stratégies social media.',
    'about.p2':'Mon travail couvre plusieurs chaînes YouTube, dont <em>Movies Consigliere</em> (analyses cinématographiques approfondies) et <em>Into The Unknown</em> (science, histoire et mystères du monde). Ensemble, elles ont atteint des millions de spectateurs.',
    'about.p3':'Que vous ayez besoin d\'un monteur vidéo, d\'un community manager ou d\'un partenaire créatif — je suis là pour vous aider.',
    'about.h1':'Montage Vidéo','about.h1d':'Montage professionnel, motion design et post-production pour YouTube et les réseaux sociaux.',
    'about.h2':'Community Management','about.h2d':'Construction et animation de communautés en ligne engagées, gestion de la présence sur les réseaux sociaux.',
    'about.h3':'Stratégie de Contenu','about.h3d':'De la recherche à la rédaction, SEO et croissance d\'audience — un pipeline de contenu complet.',
    'about.h4':'5+ ans d\'expérience','about.h4d':'Un parcours prouvé dans la création de contenu qui résonne, avec des millions de vues sur l\'ensemble des chaînes.',
    'work.title':'Réalisations','work.desc':'Une sélection de vidéos de mes chaînes YouTube.',
    'contact.title':'Me Contacter','contact.desc':'Intéressé par une collaboration ? Contactez-moi.',
    'contact.wa':'Envoyez-moi un message','contact.name':'Nom','contact.email':'Email','contact.message':'Message','contact.send':'Envoyer le message',
    'footer.rights':'Tous droits réservés.',
    'v':'vues','l':'j\'aime','c':'commentaires'
  }
};
function tr(k){ return (TR[LANG] && TR[LANG][k]) || TR.en[k] || k; }

// ── video data ─────────────────────────────────────────────────────────────────
var MC = [
  {id:'SpICdPCqv38',title:'Why Was Tommy Really Killed in Goodfellas, and Who Set Him Up?',cat:'goodfellas'},
  {id:'zO6uanlY4Sc',title:'What Really Happened to Henry Hill After Goodfellas Ended?',cat:'goodfellas'},
  {id:'XSyvGHBL47A',title:'Goodfellas Lied — What Really Happened to Frankie Carbone?',cat:'goodfellas'},
  {id:'_fScTfw2gs0',title:"This Dinner Scene in Goodfellas Isn't What It Looks Like",cat:'goodfellas'},
  {id:'pHwE_a6IwzA',title:'Paul Vario Was Far Worse Than Goodfellas Ever Showed',cat:'goodfellas'},
  {id:'loDK7q4tGJo',title:'How Do the Corleone Men Redefine Strength in The Godfather?',cat:'godfather'},
  {id:'ZwYZB_Xq90E',title:'Was Sonny Corleone Actually a Bad Don, or Did We Misread Him?',cat:'godfather'},
  {id:'lCXqfKGcb0M',title:'What Kay and Apollonia Really Represent in The Godfather?',cat:'godfather'},
  {id:'azR4rif_2BI',title:'The Myths The Godfather Made You Believe About The Mafia',cat:'godfather'},
  {id:'JZlmAZPx1m8',title:'How Did Paulie and Carlo Seal Their Deaths in The Godfather?',cat:'godfather'},
  {id:'sbttM97-byc',title:'Did Marsellus Wallace Use Mia to Test Vincent Vega?',cat:'pulp-fiction'},
  {id:'j1XWFgg1Fq0',title:"What Butch's Gold Watch Really Means in Pulp Fiction",cat:'pulp-fiction'},
  {id:'YP9MFU2ZMwA',title:"What Jules' Bible Verse ACTUALLY Means (It's Not What You Think)",cat:'pulp-fiction'},
  {id:'4BtdR2d8FIw',title:'What Was Vincent Vega Really Doing in Amsterdam for 3 Years?',cat:'pulp-fiction'},
  {id:'DAn8CXJoZmo',title:'Who Ordered the Final Hit on Tony Soprano?',cat:'sopranos'},
  {id:'5bwXxJ23_6Q',title:"Did New York Secretly Decide Tony Soprano's Fate?",cat:'sopranos'},
  {id:'0wGudsTQKUI',title:'What Happened to the Russian in Pine Barrens? The Answer Is Clear',cat:'sopranos'},
  {id:'M09HhE4ZUOs',title:"Why Did John Doe Kill Tracy? Wasn't He Supposed to Kill Only Sinners?",cat:'other'},
  {id:'N6Ov7GMhf6I',title:"Why Did Schultz Refuse to Shake Candie's Hand in Django Unchained?",cat:'other'},
  {id:'2DGl1ViW3i0',title:'Why Did Frank Lucas Kill Tango in Front of 300 Witnesses?',cat:'other'},
  {id:'14x-dOArBT0',title:'Why Did the FBI Tell Sonny Black That Donnie Brasco Was a Fed?',cat:'other'},
  {id:'1mBFHGjv_kQ',title:'Did Someone Inside The Truman Show Secretly Help Truman Escape?',cat:'other'},
  {id:'BjK47UEE6YM',title:'The Man Who Turned Taxi Driver Into Instructions for Real Violence',cat:'other'},
  {id:'8Lgdoa4s7jo',title:'The One Clue in Shutter Island That Changes Everything',cat:'other'},
  {id:'_REQlwpAG98',title:'Why Red Failed Parole Twice, Then Won It by Giving Up?',cat:'other'},
  {id:'lO8TKbSQlYE',title:"The Iconic Oldboy Hallway Scene Isn't Just a Fight Scene",cat:'other'},
  {id:'Oeo5XQGzh_U',title:"How Much of Verbal Kint's Story Was Actually True in The Usual Suspects?",cat:'other'},
  {id:'ZCCb2py3ku4',title:'Did Cliff Booth Really Kill His Wife in Once Upon a Time in Hollywood?',cat:'other'},
  {id:'xKhjHAmWTDg',title:"What Did The Wolf of Wall Street Hide About Jordan Belfort's Real Life?",cat:'other'}
];

var ITU = [
  {id:'A_9scFwW3ns',title:'The Science Behind "Cute Aggression"',cat:'science'},
  {id:'1pIEa5sC9Cw',title:'The Biggest Nuclear Bomb The World Has Ever Seen',cat:'history'},
  {id:'pAnHRS1IqQM',title:'5 Strangest and Most Terrifying Planets in the Universe',cat:'nature'},
  {id:'Y0v9tCl9SrA',title:'What Was Life Like in the Ancient Supercontinent of Pangea?',cat:'nature'},
  {id:'FkY9vzXXzWo',title:'How Eratosthenes Proved Our Round Earth 2,200 Years Ago?',cat:'history'},
  {id:'DzrZaTE5_hY',title:'Why Time Appears Faster As We Age?',cat:'science'},
  {id:'EdTidT6NBxQ',title:'What Happens Every Second In The Universe?',cat:'nature'},
  {id:'l3nN9OZeZZE',title:'Everything You Think You Know About Nikola Tesla is a Lie!',cat:'history'},
  {id:'17fnmXgaSxY',title:'Was Werner Heisenberg A NAZI Scientist?',cat:'history'},
  {id:'9IkjRbwAS3w',title:'The Curies: The Family with the Most Nobel Prizes in History',cat:'history'},
  {id:'ckmSC-qSkkc',title:'17 Nobel Prize Winners United in One Photo — The Solvay Conference 1927',cat:'history'},
  {id:'xO1oMMOEyT8',title:"Beyond the Screen: The Human Cost of Your Tech's Cobalt",cat:'science'},
  {id:'g2gmX9nPSiM',title:'Into the Abyss: Exploring the Bizarre Creatures of the Deep Sea',cat:'nature'},
  {id:'iASYkWS5dBg',title:'When Paradise Turns to Hell: The Story of Universe 25',cat:'science'}
];

var MC_LABELS = {goodfellas:'Goodfellas',godfather:'The Godfather','pulp-fiction':'Pulp Fiction',sopranos:'The Sopranos',other:'Other Films'};
var ITU_LABELS = {science:'Science',history:'History',nature:'Nature & Space'};

var YT_KEY = 'AIzaSyCWNWc7wSVOIhAFlZPH4Ql8Q4HBemQFh6Q';
var CH_MC  = 'UCfYA2EAXkK3CLamAGGZj1eA';
var CH_ITU = 'UCfc1Sa0Gec4HdFM7Gxu5uYA';

// ── state ──────────────────────────────────────────────────────────────────────
var activeCh     = 'mc';   // 'mc' or 'itu'
var activeFilter = 'all';

// ── helpers ────────────────────────────────────────────────────────────────────
function fmt(n) {
  n = parseInt(n, 10);
  if (isNaN(n)) return '—';
  if (n >= 1e6) return (n / 1e6).toFixed(1).replace(/\.0$/, '') + 'M';
  if (n >= 1e3) return (n / 1e3).toFixed(1).replace(/\.0$/, '') + 'K';
  return n.toLocaleString();
}
function esc(s) {
  return s.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// ── render videos ──────────────────────────────────────────────────────────────
function renderVideos() {
  var grid   = document.getElementById('videoGrid');
  var videos = activeCh === 'mc' ? MC : ITU;
  var labels = activeCh === 'mc' ? MC_LABELS : ITU_LABELS;
  var list   = activeFilter === 'all' ? videos : videos.filter(function(v){ return v.cat === activeFilter; });

  grid.innerHTML = '';

  list.forEach(function(v, i) {
    var card = document.createElement('div');
    card.className = 'video-card';
    card.style.animationDelay = (i * 0.06) + 's';
    card.innerHTML =
      '<div class="video-embed" id="embed-' + esc(v.id) + '">' +
        '<img class="video-thumb" src="https://img.youtube.com/vi/' + v.id + '/hqdefault.jpg" alt="' + esc(v.title) + '" loading="lazy">' +
        '<button class="play-btn" type="button" aria-label="Play video">' +
          '<svg viewBox="0 0 68 48" width="68" height="48">' +
            '<path class="play-bg" d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.63-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="#111" fill-opacity=".85"/>' +
            '<path d="M45 24L27 14v20z" fill="#fff"/>' +
          '</svg>' +
        '</button>' +
      '</div>' +
      '<div class="video-info">' +
        '<h3 class="video-title">' + esc(v.title) + '</h3>' +
        '<div class="video-stats" id="vs-' + esc(v.id) + '">' +
          '<span class="video-stat loading">Loading stats…</span>' +
        '</div>' +
        '<span class="video-category">' + (labels[v.cat] || v.cat) + '</span>' +
      '</div>';
    grid.appendChild(card);

    // click-to-play (capture vid in closure)
    (function(vid) {
      document.getElementById('embed-' + vid).addEventListener('click', function() {
        this.innerHTML =
          '<iframe src="https://www.youtube.com/embed/' + vid + '?autoplay=1"' +
          ' allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"' +
          ' allowfullscreen></iframe>';
      });
    })(v.id);
  });

  // update CTA link
  document.getElementById('channelLink').href =
    activeCh === 'mc' ? 'https://www.youtube.com/@MoviesConsigliere' : 'https://www.youtube.com/@into_the-unknown';

  // fetch stats
  if (YT_KEY) fetchStats(list.map(function(v){ return v.id; }));
}

// ── fetch stats ────────────────────────────────────────────────────────────────
function fetchStats(ids) {
  if (!ids.length) return;
  var batches = [];
  for (var i = 0; i < ids.length; i += 50) batches.push(ids.slice(i, i + 50));

  batches.forEach(function(batch) {
    fetch('https://www.googleapis.com/youtube/v3/videos?part=statistics&id=' + batch.join(',') + '&key=' + YT_KEY)
      .then(function(r){ return r.json(); })
      .then(function(d){
        if (!d.items) return;
        d.items.forEach(function(item) {
          var el = document.getElementById('vs-' + item.id);
          if (!el) return;
          var s = item.statistics;
          el.innerHTML =
            '<span class="video-stat"><svg viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg><b>' + fmt(s.viewCount) + '</b> ' + tr('v') + '</span>' +
            '<span class="video-stat"><svg viewBox="0 0 24 24"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/></svg><b>' + fmt(s.likeCount) + '</b> ' + tr('l') + '</span>' +
            '<span class="video-stat"><svg viewBox="0 0 24 24"><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z"/></svg><b>' + fmt(s.commentCount) + '</b> ' + tr('c') + '</span>';
        });
      })
      .catch(function(e){ console.warn('Stats error:', e); });
  });
}

// ── fetch channel stats (hero numbers) ────────────────────────────────────────
function fetchChannelStats() {
  if (!YT_KEY) return;
  fetch('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=' + CH_MC + ',' + CH_ITU + '&key=' + YT_KEY)
    .then(function(r){ return r.json(); })
    .then(function(d){
      if (!d.items) return;
      var vids = 0, views = 0, subs = 0;
      d.items.forEach(function(it){
        vids  += parseInt(it.statistics.videoCount, 10)      || 0;
        views += parseInt(it.statistics.viewCount, 10)       || 0;
        subs  += parseInt(it.statistics.subscriberCount, 10) || 0;
      });
      document.getElementById('statVideos').textContent = fmt(vids);
      document.getElementById('statViews').textContent  = fmt(views);
      document.getElementById('statSubs').textContent   = fmt(subs);
    })
    .catch(function(e){ console.warn('Channel stats error:', e); });
}

// ── i18n: only translate elements NOT used by JS logic ────────────────────────
function applyI18n() {
  // Only translate safe elements (not filter buttons, not channel tabs)
  var safeKeys = [
    'nav.about','nav.work','nav.contact',
    'hero.label','hero.subtitle','hero.videos','hero.views','hero.subs','hero.cta','hero.scroll',
    'about.title','about.lead','about.p1','about.p2','about.p3',
    'about.h1','about.h1d','about.h2','about.h2d','about.h3','about.h3d','about.h4','about.h4d',
    'work.title','work.desc',
    'contact.title','contact.desc','contact.wa','contact.name','contact.email','contact.message','contact.send',
    'footer.rights'
  ];
  safeKeys.forEach(function(k) {
    document.querySelectorAll('[data-i18n="' + k + '"]').forEach(function(el) {
      el.innerHTML = tr(k);
    });
  });
  // placeholders
  var phMap = {'contact.name':'contact.name','contact.email':'contact.email','contact.message':'contact.message'};
  document.querySelectorAll('[data-ph]').forEach(function(el) {
    var k = el.getAttribute('data-ph');
    el.placeholder = tr(k) || el.placeholder;
  });
  document.documentElement.lang = LANG;
  var btn = document.getElementById('langToggle');
  if (btn) btn.textContent = LANG === 'en' ? 'FR 🇫🇷' : 'EN 🇬🇧';
}

// ── BOOT ───────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {

  // Restore saved language
  LANG = localStorage.getItem('portfolio-lang') || 'en';
  applyI18n();

  // ── channel tabs ──
  document.getElementById('tabMC').addEventListener('click', function() {
    activeCh     = 'mc';
    activeFilter = 'all';
    this.classList.add('active');
    document.getElementById('tabITU').classList.remove('active');
    document.getElementById('filtersMovies').style.display  = '';
    document.getElementById('filtersUnknown').style.display = 'none';
    // reset filter pills in MC bar
    document.querySelectorAll('#filtersMovies .filter-btn').forEach(function(b){ b.classList.remove('active'); });
    document.querySelector('#filtersMovies [data-filter="all"]').classList.add('active');
    renderVideos();
  });

  document.getElementById('tabITU').addEventListener('click', function() {
    activeCh     = 'itu';
    activeFilter = 'all';
    this.classList.add('active');
    document.getElementById('tabMC').classList.remove('active');
    document.getElementById('filtersMovies').style.display  = 'none';
    document.getElementById('filtersUnknown').style.display = '';
    // reset filter pills in ITU bar
    document.querySelectorAll('#filtersUnknown .filter-btn').forEach(function(b){ b.classList.remove('active'); });
    document.querySelector('#filtersUnknown [data-filter="all"]').classList.add('active');
    renderVideos();
  });

  // ── filter pills (each bar separately) ──
  document.getElementById('filtersMovies').addEventListener('click', function(e) {
    var btn = e.target.closest('.filter-btn');
    if (!btn) return;
    document.querySelectorAll('#filtersMovies .filter-btn').forEach(function(b){ b.classList.remove('active'); });
    btn.classList.add('active');
    activeFilter = btn.getAttribute('data-filter');
    renderVideos();
  });

  document.getElementById('filtersUnknown').addEventListener('click', function(e) {
    var btn = e.target.closest('.filter-btn');
    if (!btn) return;
    document.querySelectorAll('#filtersUnknown .filter-btn').forEach(function(b){ b.classList.remove('active'); });
    btn.classList.add('active');
    activeFilter = btn.getAttribute('data-filter');
    renderVideos();
  });

  // ── language toggle ──
  document.getElementById('langToggle').addEventListener('click', function() {
    LANG = LANG === 'en' ? 'fr' : 'en';
    localStorage.setItem('portfolio-lang', LANG);
    applyI18n();
    renderVideos(); // re-render stat labels
  });

  // ── navbar scroll ──
  window.addEventListener('scroll', function() {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // ── mobile hamburger ──
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks  = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      var open = navLinks.classList.toggle('open');
      navToggle.classList.toggle('open', open);
      navToggle.setAttribute('aria-expanded', open);
    });
    navLinks.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ── contact form ──
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var n   = document.getElementById('name').value;
      var em  = document.getElementById('email').value;
      var msg = document.getElementById('message').value;
      window.location.href = 'mailto:anisdouar@outlook.fr'
        + '?subject=' + encodeURIComponent('Portfolio Contact from ' + n)
        + '&body='    + encodeURIComponent('Name: ' + n + '\nEmail: ' + em + '\n\nMessage:\n' + msg);
    });
  }

  // ── scroll fade-in ──
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(en) {
      if (en.isIntersecting) { en.target.classList.add('visible'); obs.unobserve(en.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('section').forEach(function(s) {
    s.classList.add('fade-section');
    obs.observe(s);
  });

  // ── go ──
  renderVideos();
  fetchChannelStats();
});
