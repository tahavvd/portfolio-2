// ==== Projects page ====
// To add a project later: add one object to the `projects` array below. That's it.
//
// image : path to a screenshot, e.g. 'images/weather-app/home.png'.
//         '#' (or empty, or a file that fails to load) shows the default panel with `glyph`.
// live  : demo URL, or '' for no button.   repo : GitHub URL, or '' for no button.
// tags  : plain strings, or { en, fr } when the tag is a sentence rather than a tech name.

const projects = [
    {
        featured: true,
        glyph: '◷',
        image: '#',
        type: { en: 'Booking & scheduling system', fr: 'Système de réservation et de planning' },
        title: { en: 'Salon Appointment Booking', fr: 'Réservation pour salon' },
        desc: {
            en: 'A real-time booking flow that replaced a paper notebook and ended double-bookings.',
            fr: 'Un parcours de réservation en temps réel qui remplace le carnet papier et supprime les doubles réservations.'
        },
        tags: [
            { en: '14-day availability', fr: 'Disponibilités sur 14 jours' },
            { en: 'Service add-ons', fr: 'Options de service' },
            { en: 'Staff & owner dashboards', fr: 'Tableaux de bord équipe et propriétaire' }
        ],
        live: 'https://salon-booking-ggxo.onrender.com/login?email=admin%40test.com&password=testing-password',
        repo: 'https://github.com/tahavvd/appointment-booking-system'
    },
    {
        featured: true,
        glyph: '▦',
        image: '#',
        type: { en: 'Inventory & order management', fr: 'Gestion des stocks et des commandes' },
        title: { en: 'Inventory Management System', fr: 'Système de gestion des stocks' },
        desc: {
            en: 'One role-based workspace for stock, orders and suppliers, with every stock movement recorded.',
            fr: 'Un espace par rôles pour les stocks, les commandes et les fournisseurs, avec chaque mouvement de stock enregistré.'
        },
        tags: [
            { en: 'Live stock per warehouse', fr: 'Stock en direct par entrepôt' },
            { en: 'Low-stock alerts', fr: 'Alertes de stock bas' },
            { en: 'Admin & employee roles', fr: 'Rôles admin et employé' }
        ],
        live: 'https://inventory-app.wasmer.app/admin/login?email=admin%40gmail.com&password=passwordAaBb',
        repo: 'https://github.com/tahavvd/inventory-app'
    },
    {
        glyph: '◐',
        image: '#',
        type: { en: 'Web app', fr: 'Application web' },
        title: { en: 'Weather App', fr: 'Application météo' },
        desc: {
            en: 'Search any city or use your location for live conditions, an hourly trend and a 7-day forecast, in °C or °F.',
            fr: 'Recherchez une ville ou utilisez votre position pour la météo en direct, la tendance horaire et les prévisions sur 7 jours, en °C ou °F.'
        },
        tags: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Open-Meteo'],
        live: 'https://whether-app-five-iota.vercel.app/',
        repo: '' // private repository
    },
    {
        glyph: '⌁',
        image: '#',
        type: { en: 'REST API', fr: 'API REST' },
        title: { en: 'Event Management API', fr: 'API de gestion d’événements' },
        desc: {
            en: 'A REST API for managing events and attendees, with authentication, dynamic filtering and a Docker setup.',
            fr: 'Une API REST pour gérer événements et participants, avec authentification, filtres dynamiques et environnement Docker.'
        },
        tags: ['Laravel 12', 'REST API', 'MySQL', 'Docker'],
        live: '',
        repo: 'https://github.com/tahavvd/event-management-api'
    },
    {
        glyph: '⌘',
        image: '#',
        type: { en: 'Web app', fr: 'Application web' },
        title: { en: 'Job Board', fr: 'Plateforme d’emploi' },
        desc: {
            en: 'Employers post and manage job offers; candidates browse, filter and apply with a CV upload.',
            fr: 'Les employeurs publient et gèrent leurs offres ; les candidats parcourent, filtrent et postulent avec leur CV.'
        },
        tags: [
            'Laravel 12',
            'MySQL',
            { en: 'Role-based access', fr: 'Accès par rôles' },
            { en: 'CV upload', fr: 'Envoi de CV' }
        ],
        live: '',
        repo: 'https://github.com/tahavvd/Job-Board'
    }
];

// ---- Page text (nav + header copy), EN/FR ----
const text = {
    en: {
        'nav.services': 'Services', 'nav.work': 'Work', 'nav.process': 'Process', 'nav.contact': 'Contact',
        'nav.cta': "Let's talk",
        'page.back': '← Back to home',
        'page.kicker': 'All projects',
        'page.title': 'Everything I have built, in one place.',
        'page.copy': 'Live demos where they exist, and code on GitHub where it is public.',
        'footer.back': 'Back to top ↑',
        featured: 'Featured', live: 'Live demo', code: 'GitHub',
        docTitle: 'Projects | Taha Touil', switchLang: 'Switch language', openMenu: 'Open menu', closeMenu: 'Close menu'
    },
    fr: {
        'nav.services': 'Services', 'nav.work': 'Projets', 'nav.process': 'Méthode', 'nav.contact': 'Contact',
        'nav.cta': 'Parlons-en',
        'page.back': '← Retour à l’accueil',
        'page.kicker': 'Tous les projets',
        'page.title': 'Tout ce que j’ai construit, au même endroit.',
        'page.copy': 'Des démos en ligne quand elles existent, et le code sur GitHub quand il est public.',
        'footer.back': 'Retour en haut ↑',
        featured: 'À la une', live: 'Démo en ligne', code: 'GitHub',
        docTitle: 'Projets | Taha Touil', switchLang: 'Changer de langue', openMenu: 'Ouvrir le menu', closeMenu: 'Fermer le menu'
    }
};

// Same storage key as the home page, so the chosen language carries over.
let language = localStorage.getItem('portfolio-language') || (/^fr/i.test(navigator.language) ? 'fr' : 'en');

const pick = value => (typeof value === 'string' ? value : value[language]);

// ---- Cards ----
function placeholder(glyph) {
    const box = document.createElement('div');
    box.className = 'project-placeholder';
    box.setAttribute('aria-hidden', 'true');
    box.textContent = glyph;
    return box;
}

function buildMedia(project) {
    const media = document.createElement('div');
    media.className = 'project-media';

    const hasImage = project.image && project.image !== '#';
    if (hasImage) {
        const img = document.createElement('img');
        img.src = project.image;
        img.alt = project.title[language];
        img.loading = 'lazy';
        img.decoding = 'async';
        img.addEventListener('error', () => img.replaceWith(placeholder(project.glyph)));
        media.append(img);
    } else {
        media.append(placeholder(project.glyph));
    }

    if (project.featured) {
        const badge = document.createElement('span');
        badge.className = 'project-badge';
        badge.textContent = text[language].featured;
        media.append(badge);
    }
    return media;
}

function link(href, label, ghost) {
    const a = document.createElement('a');
    a.className = ghost ? 'button button-small button-ghost' : 'button button-small';
    a.href = href;
    a.target = '_blank';
    a.rel = 'noreferrer';
    a.append(label + ' ');
    const arrow = document.createElement('span');
    arrow.setAttribute('aria-hidden', 'true');
    arrow.textContent = '↗';
    a.append(arrow);
    return a;
}

function buildCard(project) {
    const card = document.createElement('article');
    card.className = 'project-card';

    const body = document.createElement('div');
    body.className = 'project-body';

    const type = document.createElement('p');
    type.className = 'project-type';
    type.textContent = project.type[language];

    const title = document.createElement('h2');
    title.textContent = project.title[language];

    const desc = document.createElement('p');
    desc.className = 'project-desc';
    desc.textContent = project.desc[language];

    const tags = document.createElement('ul');
    tags.className = 'project-tags';
    project.tags.forEach(tag => {
        const li = document.createElement('li');
        li.textContent = pick(tag);
        tags.append(li);
    });

    const actions = document.createElement('div');
    actions.className = 'project-actions';
    if (project.live) actions.append(link(project.live, text[language].live, false));
    if (project.repo) actions.append(link(project.repo, text[language].code, true));

    body.append(type, title, desc, tags, actions);
    card.append(buildMedia(project), body);
    return card;
}

function renderProjects() {
    document.getElementById('project-grid').replaceChildren(...projects.map(buildCard));
}

// ---- Language ----
function applyLanguage() {
    const t = text[language];
    document.documentElement.lang = language;
    document.title = t.docTitle;
    document.querySelector('.language-label').textContent = language.toUpperCase();
    document.querySelector('.language-toggle').setAttribute('aria-label', t.switchLang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
        if (t[el.dataset.i18n]) el.textContent = t[el.dataset.i18n];
    });
    const open = document.querySelector('.nav').classList.contains('menu-open');
    menu.setAttribute('aria-label', open ? t.closeMenu : t.openMenu);
    renderProjects();
}

// ---- Header: scroll effect + mobile menu (same behaviour as the home page) ----
const header = document.querySelector('.site-header');
const menu = document.querySelector('.menu-toggle');

window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 20), { passive: true });

function setMenu(open) {
    document.querySelector('.nav').classList.toggle('menu-open', open);
    menu.setAttribute('aria-expanded', open);
    menu.setAttribute('aria-label', open ? text[language].closeMenu : text[language].openMenu);
}

menu.addEventListener('click', () => setMenu(!document.querySelector('.nav').classList.contains('menu-open')));
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => setMenu(false)));

document.querySelector('.language-toggle').addEventListener('click', () => {
    language = language === 'en' ? 'fr' : 'en';
    localStorage.setItem('portfolio-language', language);
    applyLanguage();
});

applyLanguage();