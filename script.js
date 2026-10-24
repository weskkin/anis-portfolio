/* ═══════════════════════════════════════════════════════
   ANIS DOUAR — PORTFOLIO
   ═══════════════════════════════════════════════════════ */

/* ─── i18n ─── */
const I18N = {
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
        'work.title':'Featured Work','work.desc':'A selection of videos from my YouTube channels.','work.cta':'View All Videos on YouTube →',
        'filter.all':'All','filter.other':'Other Films','filter.science':'Science','filter.history':'History','filter.nature':'Nature & Space',
        'contact.title':'Get In Touch','contact.desc':'Interested in collaborating or want to discuss a project? Let\'s connect.',
        'contact.wa':'Send me a message','contact.name':'Name','contact.namePh':'Your name',
        'contact.email':'Email','contact.emailPh':'your@email.com',
        'contact.message':'Message','contact.messagePh':'Tell me about your project...','contact.send':'Send Message',
        'footer.rights':'All rights reserved.',
        'stats.views':'views','stats.likes':'likes','stats.comments':'comments','stats.watch':'Watch on YouTube','stats.loading':'Loading…',
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
        'about.p2':'Mon travail couvre plusieurs chaînes YouTube, dont <em>Movies Consigliere</em> (analyses cinématographiques approfondies de films iconiques) et <em>Into The Unknown</em> (exploration de la science, de l\'histoire et des mystères de notre monde). Ensemble, elles ont atteint des millions de spectateurs à travers le monde.',
        'about.p3':'Que vous ayez besoin d\'un monteur vidéo pour sublimer votre contenu, d\'un community manager pour développer votre audience, ou d\'un partenaire créatif pour donner vie à votre vision — je suis là pour vous aider.',
        'about.h1':'Montage Vidéo','about.h1d':'Montage professionnel, motion design et post-production pour YouTube et les réseaux sociaux.',
        'about.h2':'Community Management','about.h2d':'Construction et animation de communautés en ligne engagées, gestion de la présence sur les réseaux sociaux.',
        'about.h3':'Stratégie de Contenu','about.h3d':'De la recherche à la rédaction, en passant par le SEO et la croissance d\'audience — un pipeline de contenu complet.',
        'about.h4':'5+ ans d\'expérience','about.h4d':'Un parcours prouvé dans la création de contenu qui résonne, avec des millions de vues sur l\'ensemble des chaînes.',
        'work.title':'Réalisations','work.desc':'Une sélection de vidéos de mes chaînes YouTube.','work.cta':'Voir toutes les vidéos sur YouTube →',
        'filter.all':'Tout','filter.other':'Autres films','filter.science':'Science','filter.history':'Histoire','filter.nature':'Nature & Espace',
        'contact.title':'Me Contacter','contact.desc':'Intéressé par une collaboration ou vous souhaitez discuter d\'un projet ? Contactez-moi.',
        'contact.wa':'Envoyez-moi un message','contact.name':'Nom','contact.namePh':'Votre nom',
        'contact.email':'Email','contact.emailPh':'votre@email.com',
        'contact.message':'Message','contact.messagePh':'Parlez-moi de votre projet...','contact.send':'Envoyer le message',
        'footer.rights':'Tous droits réservés.',
        'stats.views':'vues','stats.likes':'j\'aime','stats.comments':'commentaires','stats.watch':'Voir sur YouTube','stats.loading':'Chargement…',
    }
};

let lang = localStorage.getItem('portfolio-lang') || 'en';
function t(k){ return (I18N[lang] && I18N[lang][k]) || I18N.en[k] || k; }

function applyI18n(){
    document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
    document.documentElement.lang = lang;
    const btn = document.getElementById('langToggle');
    if(btn) btn.textContent = lang === 'en' ? 'FR 🇫🇷' : 'EN 🇬🇧';
}

/* ─── VIDEO DATA ─── */
const VIDEOS_MC = [
    {id:'SpICdPCqv38',title:'Why Was Tommy Really Killed in Goodfellas, and Who Set Him Up?',cat:'goodfellas'},
    {id:'zO6uanlY4Sc',title:'What Really Happened to Henry Hill After Goodfellas Ended?',cat:'goodfellas'},
    {id:'XSyvGHBL47A',title:'Goodfellas Lied, What Really Happened to Frankie Carbone?',cat:'goodfellas'},
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
    {id:'xKhjHAmWTDg',title:"What Did The Wolf of Wall Street Hide About Jordan Belfort's Real Life?",cat:'other'},
];

const VIDEOS_ITU = [
    {id:'A_9scFwW3ns',title:'The Science Behind "Cute Aggression"',cat:'science'},
    {id:'1pIEa5sC9Cw',title:'The Biggest Nuclear Bomb The World Has Ever Seen',cat:'history'},
    {id:'pAnHRS1IqQM',title:'5 Strangest and Most Terrifying Planets in the Universe',cat:'nature'},
    {id:'Y0v9tCl9SrA',title:'What Was Life Like in the Ancient Supercontinent of Pangea?',cat:'nature'},
    {id:'FkY9vzXXzWo',title:'How Eratosthenes Proved Our Round Earth 2,200 Years Ago?',cat:'history'},
    {id:'DzrZaTE5_hY',title:'Why Time Appears Faster As We Age?',cat:'science'},
    {id:'-AKpzu21Jo4',title:'From Desert to Oasis: The Forgotten Eden of the Green Sahara',cat:'nature'},
    {id:'EdTidT6NBxQ',title:'What Happens Every Second In The Universe?',cat:'nature'},
    {id:'l3nN9OZeZZE',title:'Everything You Think You Know About Nikola Tesla is a Lie!',cat:'history'},
    {id:'17fnmXgaSxY',title:'Was Werner Heisenberg A NAZI Scientist?',cat:'history'},
    {id:'9IkjRbwAS3w',title:'The Curies: The Family with the Most Nobel Prizes in History',cat:'history'},
    {id:'ckmSC-qSkkc',title:'17 Nobel Prize Winners United in One Photo - The Solvay Conference 1927',cat:'history'},
    {id:'xO1oMMOEyT8',title:"Beyond the Screen: The Human Cost of Your Tech's Cobalt",cat:'science'},
    {id:'g2gmX9nPSiM',title:'Into the Abyss: Exploring the Bizarre Creatures of the Deep Sea',cat:'nature'},
    {id:'iASYkWS5dBg',title:'When Paradise Turns to Hell: The Story of Universe 25',cat:'science'},
];

const CHANNELS = {
    mc: { id:'UCfYA2EAXkK3CLamAGGZj1eA', videos:VIDEOS_MC, url:'https://www.youtube.com/@MoviesConsigliere',
          labels:{'goodfellas':'Goodfellas','godfather':'The Godfather','pulp-fiction':'Pulp Fiction','sopranos':'The Sopranos','other':'Other Films'} },
    itu:{ id:'UCfc1Sa0Gec4HdFM7Gxu5uYA', videos:VIDEOS_ITU, url:'https://www.youtube.com/@into_the-unknown',
          labels:{'science':'Science','history':'History','nature':'Nature & Space'} },
};

const YT_API_KEY = 'AIzaSyCWNWc7wSVOIhAFlZPH4Ql8Q4HBemQFh6Q';

let activeCh = 'mc';
let activeFilter = 'all';

/* ─── HELPERS ─── */
function fmt(n){ n=parseInt(n,10); if(isNaN(n))return '—'; if(n>=1e6)return (n/1e6).toFixed(1).replace(/\.0$/,'')+'M'; if(n>=1e3)return (n/1e3).toFixed(1).replace(/\.0$/,'')+'K'; return n.toLocaleString(); }
function esc(s){ const d=document.createElement('div'); d.textContent=s; return d.innerHTML; }
function ico(n){
    const m={
        eye:'<svg viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>',
        like:'<svg viewBox="0 0 24 24"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/></svg>',
        chat:'<svg viewBox="0 0 24 24"><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z"/></svg>',
    };
    return m[n]||'';
}

/* ─── RENDER ─── */
function render(){
    const grid = document.getElementById('videoGrid');
    const ch   = CHANNELS[activeCh];
    const list = activeFilter==='all' ? ch.videos : ch.videos.filter(v=>v.cat===activeFilter);

    grid.innerHTML = '';
    list.forEach((v,i) => {
        const card = document.createElement('div');
        card.className = 'video-card';
        card.style.animationDelay = i*0.06+'s';
        card.innerHTML = `
            <div class="video-embed" data-vid="${v.id}">
                <img src="https://img.youtube.com/vi/${v.id}/hqdefault.jpg" alt="${esc(v.title)}" loading="lazy" class="video-thumb">
                <button class="play-btn" aria-label="Play"><svg viewBox="0 0 68 48" width="68" height="48"><path class="play-bg" d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.63-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="#212121" fill-opacity=".8"/><path d="M45 24L27 14v20" fill="#fff"/></svg></button>
            </div>
            <div class="video-info">
                <h3 class="video-title">${esc(v.title)}</h3>
                <div class="video-stats" id="stats-${v.id}"><span class="video-stat">${ico('eye')} <span class="stat-value">${t('stats.loading')}</span></span></div>
                <span class="video-category">${ch.labels[v.cat]||v.cat}</span>
            </div>`;
        grid.appendChild(card);
    });

    // click-to-play
    grid.querySelectorAll('.video-embed[data-vid]').forEach(el=>{
        el.addEventListener('click',()=>{
            el.innerHTML=`<iframe src="https://www.youtube.com/embed/${el.dataset.vid}?autoplay=1" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe>`;
        });
    });

    // update CTA link
    document.getElementById('channelLink').href = ch.url;

    // fetch stats
    if(YT_API_KEY) fetchStats(list.map(v=>v.id));
}

/* ─── CHANNEL SWITCH ─── */
function switchCh(key){
    activeCh = key;
    activeFilter = 'all';

    // highlight active tab
    document.querySelectorAll('.channel-tab').forEach(b=>b.classList.toggle('active', b.dataset.ch===key));

    // show correct filter bar, hide other
    document.getElementById('filtersMovies').style.display = key==='mc' ? '' : 'none';
    document.getElementById('filtersUnknown').style.display = key==='itu' ? '' : 'none';

    // reset filter buttons
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    const bar = key==='mc' ? document.getElementById('filtersMovies') : document.getElementById('filtersUnknown');
    bar.querySelector('[data-filter="all"]').classList.add('active');

    render();
}

/* ─── FETCH STATS ─── */
async function fetchStats(ids){
    if(!YT_API_KEY||!ids.length) return;
    try{
        for(let i=0;i<ids.length;i+=50){
            const batch=ids.slice(i,i+50);
            const r=await fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${batch.join(',')}&key=${YT_API_KEY}`);
            const d=await r.json();
            if(d.items) d.items.forEach(it=>{
                const s=it.statistics, el=document.getElementById('stats-'+it.id);
                if(el) el.innerHTML=`
                    <span class="video-stat">${ico('eye')} <span class="stat-value">${fmt(s.viewCount)}</span> ${t('stats.views')}</span>
                    <span class="video-stat">${ico('like')} <span class="stat-value">${fmt(s.likeCount)}</span> ${t('stats.likes')}</span>
                    <span class="video-stat">${ico('chat')} <span class="stat-value">${fmt(s.commentCount)}</span> ${t('stats.comments')}</span>`;
            });
        }
    }catch(e){ console.warn('Stats error',e); }
}

async function fetchChannelStats(){
    if(!YT_API_KEY) return;
    try{
        const ids=Object.values(CHANNELS).map(c=>c.id).join(',');
        const r=await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${ids}&key=${YT_API_KEY}`);
        const d=await r.json();
        if(d.items){
            let vids=0,views=0,subs=0;
            d.items.forEach(it=>{ const s=it.statistics; vids+=parseInt(s.videoCount)||0; views+=parseInt(s.viewCount)||0; subs+=parseInt(s.subscriberCount)||0; });
            document.getElementById('statVideos').textContent=fmt(vids);
            document.getElementById('statViews').textContent=fmt(views);
            document.getElementById('statSubs').textContent=fmt(subs);
        }
    }catch(e){ console.warn('Channel stats error',e); }
}

/* ─── INIT (runs when DOM ready) ─── */
document.addEventListener('DOMContentLoaded', ()=>{
    applyI18n();

    // channel tabs
    document.querySelectorAll('.channel-tab').forEach(b=>{
        b.addEventListener('click',()=>switchCh(b.dataset.ch));
    });

    // filter buttons (event delegation on both bars)
    document.querySelectorAll('.filter-bar').forEach(bar=>{
        bar.addEventListener('click', e=>{
            const btn = e.target.closest('.filter-btn');
            if(!btn) return;
            bar.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
            btn.classList.add('active');
            activeFilter = btn.dataset.filter;
            render();
        });
    });

    // lang toggle
    document.getElementById('langToggle').addEventListener('click',()=>{
        lang = lang==='en' ? 'fr' : 'en';
        localStorage.setItem('portfolio-lang', lang);
        applyI18n();
        render();
    });

    // navbar scroll
    window.addEventListener('scroll',()=>{
        document.getElementById('navbar').classList.toggle('scrolled', scrollY>60);
    },{passive:true});

    // mobile menu
    const tog = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');
    if(tog){
        tog.addEventListener('click',()=>{
            const open = links.classList.toggle('open');
            tog.classList.toggle('open');
            tog.setAttribute('aria-expanded',open);
        });
        links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
            links.classList.remove('open'); tog.classList.remove('open'); tog.setAttribute('aria-expanded','false');
        }));
    }

    // contact form
    const form = document.getElementById('contactForm');
    if(form) form.addEventListener('submit',e=>{
        e.preventDefault();
        const n=form.querySelector('#name').value, em=form.querySelector('#email').value, msg=form.querySelector('#message').value;
        window.location.href=`mailto:anisdouar@outlook.fr?subject=${encodeURIComponent('Portfolio Contact from '+n)}&body=${encodeURIComponent('Name: '+n+'\nEmail: '+em+'\n\nMessage:\n'+msg)}`;
    });

    // fade-in observer
    const obs = new IntersectionObserver(entries=>{
        entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('visible'); obs.unobserve(en.target); }});
    },{threshold:0.1,rootMargin:'0px 0px -60px 0px'});
    document.querySelectorAll('section').forEach(s=>{ s.classList.add('fade-section'); obs.observe(s); });

    // go
    render();
    fetchChannelStats();
});
