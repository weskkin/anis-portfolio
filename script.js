// ── VIDEO DATA ────────────────────────────────────────────────────────────────

var MC_VIDEOS = [
  {id:'SpICdPCqv38', title:'Why Was Tommy Really Killed in Goodfellas, and Who Set Him Up?',    cat:'goodfellas'},
  {id:'zO6uanlY4Sc', title:'What Really Happened to Henry Hill After Goodfellas Ended?',         cat:'goodfellas'},
  {id:'XSyvGHBL47A', title:'Goodfellas Lied — What Really Happened to Frankie Carbone?',        cat:'goodfellas'},
  {id:'_fScTfw2gs0', title:"This Dinner Scene in Goodfellas Isn't What It Looks Like",           cat:'goodfellas'},
  {id:'pHwE_a6IwzA', title:'Paul Vario Was Far Worse Than Goodfellas Ever Showed',              cat:'goodfellas'},
  {id:'loDK7q4tGJo', title:'How Do the Corleone Men Redefine Strength in The Godfather?',       cat:'godfather'},
  {id:'ZwYZB_Xq90E', title:'Was Sonny Corleone Actually a Bad Don, or Did We Misread Him?',     cat:'godfather'},
  {id:'lCXqfKGcb0M', title:'What Kay and Apollonia Really Represent in The Godfather?',         cat:'godfather'},
  {id:'azR4rif_2BI', title:'The Myths The Godfather Made You Believe About The Mafia',          cat:'godfather'},
  {id:'JZlmAZPx1m8', title:'How Did Paulie and Carlo Seal Their Deaths in The Godfather?',      cat:'godfather'},
  {id:'sbttM97-byc', title:'Did Marsellus Wallace Use Mia to Test Vincent Vega?',               cat:'pulp-fiction'},
  {id:'j1XWFgg1Fq0', title:"What Butch's Gold Watch Really Means in Pulp Fiction",              cat:'pulp-fiction'},
  {id:'YP9MFU2ZMwA', title:"What Jules' Bible Verse ACTUALLY Means (It's Not What You Think)",  cat:'pulp-fiction'},
  {id:'4BtdR2d8FIw', title:'What Was Vincent Vega Really Doing in Amsterdam for 3 Years?',      cat:'pulp-fiction'},
  {id:'DAn8CXJoZmo', title:'Who Ordered the Final Hit on Tony Soprano?',                        cat:'sopranos'},
  {id:'5bwXxJ23_6Q', title:"Did New York Secretly Decide Tony Soprano's Fate?",                 cat:'sopranos'},
  {id:'0wGudsTQKUI', title:'What Happened to the Russian in Pine Barrens? The Answer Is Clear', cat:'sopranos'},
  {id:'M09HhE4ZUOs', title:"Why Did John Doe Kill Tracy? Wasn't He Supposed to Kill Only Sinners?", cat:'other'},
  {id:'N6Ov7GMhf6I', title:"Why Did Schultz Refuse to Shake Candie's Hand in Django Unchained?",cat:'other'},
  {id:'2DGl1ViW3i0', title:'Why Did Frank Lucas Kill Tango in Front of 300 Witnesses?',         cat:'other'},
  {id:'14x-dOArBT0', title:'Why Did the FBI Tell Sonny Black That Donnie Brasco Was a Fed?',    cat:'other'},
  {id:'1mBFHGjv_kQ', title:'Did Someone Inside The Truman Show Secretly Help Truman Escape?',   cat:'other'},
  {id:'BjK47UEE6YM', title:'The Man Who Turned Taxi Driver Into Instructions for Real Violence', cat:'other'},
  {id:'8Lgdoa4s7jo', title:'The One Clue in Shutter Island That Changes Everything',            cat:'other'},
  {id:'_REQlwpAG98', title:'Why Red Failed Parole Twice, Then Won It by Giving Up?',            cat:'other'},
  {id:'lO8TKbSQlYE', title:"The Iconic Oldboy Hallway Scene Isn't Just a Fight Scene",          cat:'other'},
  {id:'Oeo5XQGzh_U', title:"How Much of Verbal Kint's Story Was Actually True in The Usual Suspects?", cat:'other'},
  {id:'ZCCb2py3ku4', title:'Did Cliff Booth Really Kill His Wife in Once Upon a Time in Hollywood?', cat:'other'},
  {id:'xKhjHAmWTDg', title:"What Did The Wolf of Wall Street Hide About Jordan Belfort's Real Life?", cat:'other'}
];

var MC_LABELS = {
  goodfellas:   'Goodfellas',
  godfather:    'The Godfather',
  'pulp-fiction': 'Pulp Fiction',
  sopranos:     'The Sopranos',
  other:        'Other Films'
};

var ITU_VIDEOS = [
  {id:'A_9scFwW3ns', title:'The Science Behind "Cute Aggression"',                               cat:'science'},
  {id:'1pIEa5sC9Cw', title:'The Biggest Nuclear Bomb The World Has Ever Seen',                   cat:'history'},
  {id:'pAnHRS1IqQM', title:'5 Strangest and Most Terrifying Planets in the Universe',            cat:'nature'},
  {id:'Y0v9tCl9SrA', title:'What Was Life Like in the Ancient Supercontinent of Pangea?',        cat:'nature'},
  {id:'FkY9vzXXzWo', title:'How Eratosthenes Proved Our Round Earth 2,200 Years Ago?',           cat:'history'},
  {id:'DzrZaTE5_hY', title:'Why Time Appears Faster As We Age?',                                 cat:'science'},
  {id:'EdTidT6NBxQ', title:'What Happens Every Second In The Universe?',                         cat:'nature'},
  {id:'l3nN9OZeZZE', title:'Everything You Think You Know About Nikola Tesla is a Lie!',         cat:'history'},
  {id:'17fnmXgaSxY', title:'Was Werner Heisenberg A NAZI Scientist?',                            cat:'history'},
  {id:'9IkjRbwAS3w', title:'The Curies: The Family with the Most Nobel Prizes in History',       cat:'history'},
  {id:'ckmSC-qSkkc', title:'17 Nobel Prize Winners United in One Photo — The Solvay Conference 1927', cat:'history'},
  {id:'xO1oMMOEyT8', title:"Beyond the Screen: The Human Cost of Your Tech's Cobalt",            cat:'science'},
  {id:'g2gmX9nPSiM', title:'Into the Abyss: Exploring the Bizarre Creatures of the Deep Sea',   cat:'nature'},
  {id:'iASYkWS5dBg', title:'When Paradise Turns to Hell: The Story of Universe 25',              cat:'science'}
];

var ITU_LABELS = {
  science: 'Science',
  history: 'History',
  nature:  'Nature & Space'
};

// ── CONFIG ────────────────────────────────────────────────────────────────────
var YT_KEY   = 'AIzaSyCWNWc7wSVOIhAFlZPH4Ql8Q4HBemQFh6Q';
var CH_MC    = 'UCfYA2EAXkK3CLamAGGZj1eA';
var CH_ITU   = 'UCfc1Sa0Gec4HdFM7Gxu5uYA';

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
    'c1-other':   'Other Films',
    'c2-science': 'Science', 'c2-history': 'History', 'c2-nature': 'Nature & Space',
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
    'c1-other':   'Autres films',
    'c2-science': 'Science', 'c2-history': 'Histoire', 'c2-nature': 'Nature & Espace',
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
  document.getElementById('langBtn').textContent = LANG === 'en' ? 'FR 🇫🇷' : 'EN 🇬🇧';
}

// ── BUILD A CARD ──────────────────────────────────────────────────────────────
function makeCard(v, label) {
  var card = document.createElement('div');
  card.className = 'video-card';
  card.dataset.cat = v.cat;

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
      '<span class="video-tag">' + (label || v.cat) + '</span>' +
    '</div>';

  // click thumbnail → load iframe
  card.querySelector('.thumb-wrap').addEventListener('click', function() {
    this.innerHTML =
      '<iframe src="https://www.youtube.com/embed/' + v.id + '?autoplay=1"' +
      ' allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"' +
      ' allowfullscreen></iframe>';
  });

  return card;
}

// ── FILL A GRID ───────────────────────────────────────────────────────────────
function fillGrid(gridId, videos, labels) {
  var grid = document.getElementById(gridId);
  grid.innerHTML = '';
  videos.forEach(function(v) {
    grid.appendChild(makeCard(v, labels[v.cat]));
  });
  if (YT_KEY) fetchStats(videos.map(function(v){ return v.id; }));
}

// ── FILTER pills ──────────────────────────────────────────────────────────────
function setupFilters(filtersId, gridId) {
  var bar = document.getElementById(filtersId);
  var grid = document.getElementById(gridId);
  bar.addEventListener('click', function(e) {
    var btn = e.target.closest('.pill');
    if (!btn || btn.dataset.grid !== gridId) return;
    // update active pill
    bar.querySelectorAll('.pill').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    // show/hide cards
    var cat = btn.dataset.cat;
    grid.querySelectorAll('.video-card').forEach(function(card) {
      card.classList.toggle('hidden', cat !== 'all' && card.dataset.cat !== cat);
    });
  });
}

// ── FETCH STATS ───────────────────────────────────────────────────────────────
function fetchStats(ids) {
  if (!YT_KEY || !ids.length) return;
  // batch 50 at a time
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

// ── BOOT ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {

  // apply language
  applyLang();

  // fill both grids
  fillGrid('grid1', MC_VIDEOS,  MC_LABELS);
  fillGrid('grid2', ITU_VIDEOS, ITU_LABELS);

  // set up filters (show/hide cards — no re-render)
  setupFilters('filters1', 'grid1');
  setupFilters('filters2', 'grid2');

  // fetch combined channel stats for hero
  fetchChannelStats();

  // language toggle
  document.getElementById('langBtn').addEventListener('click', function() {
    LANG = LANG === 'en' ? 'fr' : 'en';
    localStorage.setItem('lang', LANG);
    applyLang();
    // refresh stats labels
    fetchStats(MC_VIDEOS.map(function(v){ return v.id; }));
    fetchStats(ITU_VIDEOS.map(function(v){ return v.id; }));
  });

  // navbar scroll
  window.addEventListener('scroll', function() {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // mobile hamburger
  var ham   = document.getElementById('hamburger');
  var links = document.getElementById('navLinks');
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

  // contact form
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
