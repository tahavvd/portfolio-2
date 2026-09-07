// ---- Data: image lists for each project gallery ----
const galleries = {
  inventory: ['images/inventory-1-dashboard.png', 'images/inventory-2-orders.png', 'images/inventory-3-stock-transactions.png', 'images/inventroy-4-create-order.png'],
  booking: ['images/booking-1-log-in.png', 'images/booking-2-services.png', 'images/booking-3-stylist-select.png', 'images/booking-4-select-slot.png']
};

// ---- Data: EN/FR text dictionary, keyed by data-i18n attributes ----
const translations = {
  en: {
    'nav.services': 'Services',
    'nav.work': 'Work',
    'nav.process': 'Process',
    'nav.contact': 'Contact',
    'nav.cta': "Let's talk",
    'hero.eyebrow': 'Custom software for everyday operations',
    'hero.title1': 'Turn manual work',
    'hero.title2': 'Into clear systems',
    'hero.copy': 'I build reliable web applications that help small businesses replace spreadsheets, paper, and avoidable mistakes with one clear way to work. With 1+ year of professional programming experience, I focus on systems people can trust.',
    'hero.primary': "Let's talk ↗",
    'hero.secondary': 'See my work',
    'hero.note': 'Available for individually scoped projects',
    'value.kicker': 'The useful part',
    'value.title': 'Software should make the day feel lighter.',
    'value.copy': 'When work lives across notebooks, messages, and disconnected spreadsheets, small errors become expensive. I turn that messy middle into a system your team can actually trust.',
    'value.link': 'Tell me where work gets stuck ↗',
    'services.kicker': 'What I build',
    'services.title': 'Tools made around your operation.',
    'services.copy': 'Focused systems for the workflows that keep a business moving.',
    'service.inventory.title': 'Inventory & operations',
    'service.inventory.copy': 'Stock, suppliers, orders, and warehouses brought into one dependable system.',
    'service.booking.title': 'Booking & scheduling',
    'service.booking.copy': 'Real-time availability and staff scheduling that prevents double-bookings.',
    'service.admin.title': 'Laravel + Filament panels',
    'service.admin.copy': 'Clean, role-based dashboards for internal tools and repeatable work.',
    'service.tall.title': 'Full-stack TALL apps',
    'service.tall.copy': 'A complete build from thoughtful interface to reliable database logic.',
    'work.kicker': 'Selected work',
    'work.title': 'Built to solve the actual problem.',
    'work.copy': 'A closer look at systems designed around real business constraints.',
    'work.completed': 'Completed',
    'work.progress': 'In progress',
    'work.live': 'Live demo ↗',
    'work.credentials': 'Demo credentials',
    'work.copyButton': 'Copy',
    'case.problem': 'Problem',
    'case.solution': 'Solution',
    'case.outcome': 'Outcome',
    'inventory.title': 'Inventory Management System',
    'inventory.tagline': 'A clean, role-based inventory system for small businesses to track stock, manage orders, and handle suppliers in one place.',
    'inventory.problem': 'Manual stock tracking made errors hard to spot and accountability difficult.',
    'inventory.solution': 'One role-based workspace with live stock, order flows, and a full transaction history.',
    'inventory.outcome': 'A clear operational source of truth, with fewer stock surprises and visible responsibility.',
    'booking.title': 'Salon Appointment Booking',
    'booking.tagline': 'A real-time booking flow replacing a paper notebook that caused double-bookings and scheduling chaos.',
    'booking.problem': 'A paper calendar made it easy to double-book clients or leave stylists idle.',
    'booking.solution': 'A phone-first flow with real availability, stylist schedules, and server-side rechecks.',
    'booking.outcome': 'The client-facing booking experience is complete; the owner dashboard remains in active development.',
    'process.kicker': 'How it works',
    'process.title': 'A clear path from problem to product.',
    'process.one.title': 'Discover',
    'process.one.copy': 'We talk through the current workflow, friction, and desired outcome.',
    'process.two.title': 'Propose',
    'process.two.copy': 'You get a focused scope, timeline, and practical approach for your project.',
    'process.three.title': 'Build',
    'process.three.copy': 'The system takes shape with regular check-ins and visible progress.',
    'process.four.title': 'Launch',
    'process.four.copy': 'Deployment, handover, and basic support to help the team get moving.',
    'about.kicker': 'A little about me',
    'about.title': 'Practical thinking. Careful software.',
    'about.copy': 'I’m Taha, a freelance software developer focused on custom business web applications. I bring 1+ year of professional programming experience and a third-year Artificial Intelligence Engineering background to projects where clarity and reliability matter.',
    'contact.kicker': 'Have a workflow in mind?',
    'contact.title': 'Let’s make it easier to run.',
    'contact.copy': 'Tell me what is taking too much time, or where mistakes keep appearing. We can scope the right system together.',
    'footer.back': 'Back to top ↑'
  },
  fr: {
    'nav.services': 'Services',
    'nav.work': 'Projets',
    'nav.process': 'Méthode',
    'nav.contact': 'Contact',
    'nav.cta': 'Parlons-en',
    'hero.eyebrow': 'Logiciels sur mesure pour vos opérations',
    'hero.title1': 'Du travail manuel',
    'hero.title2': 'À des systèmes clairs',
    'hero.copy': 'Je crée des applications web fiables qui remplacent les tableurs, le papier et les erreurs évitables par une façon de travailler plus simple. Avec plus d’un an d’expérience professionnelle en programmation, je privilégie les systèmes fiables.',
    'hero.primary': 'Parlons-en ↗',
    'hero.secondary': 'Voir mes projets',
    'hero.note': 'Disponible pour des projets définis sur mesure',
    'value.kicker': 'L’essentiel',
    'value.title': 'Un logiciel doit alléger vos journées.',
    'value.copy': 'Quand le travail se répartit entre carnets, messages et tableurs, les petites erreurs deviennent coûteuses. Je transforme ce désordre en un système fiable pour votre équipe.',
    'value.link': 'Parlons de vos difficultés ↗',
    'services.kicker': 'Ce que je construis',
    'services.title': 'Des outils adaptés à votre activité.',
    'services.copy': 'Des systèmes ciblés pour les flux de travail qui font avancer votre entreprise.',
    'service.inventory.title': 'Stocks et opérations',
    'service.inventory.copy': 'Stocks, fournisseurs, commandes et entrepôts réunis dans un système fiable.',
    'service.booking.title': 'Réservation et planning',
    'service.booking.copy': 'Disponibilités en temps réel et plannings qui évitent les doubles réservations.',
    'service.admin.title': 'Panneaux Laravel + Filament',
    'service.admin.copy': 'Des tableaux de bord clairs et basés sur les rôles pour vos outils internes.',
    'service.tall.title': 'Applications TALL complètes',
    'service.tall.copy': 'Une réalisation complète, de l’interface à la logique de base de données.',
    'work.kicker': 'Projets sélectionnés',
    'work.title': 'Conçus pour résoudre le vrai problème.',
    'work.copy': 'Un aperçu de systèmes pensés autour des contraintes réelles d’une entreprise.',
    'work.completed': 'Terminé',
    'work.progress': 'En cours',
    'work.live': 'Démo en ligne ↗',
    'work.credentials': 'Accès de démonstration',
    'work.copyButton': 'Copier',
    'case.problem': 'Problème',
    'case.solution': 'Solution',
    'case.outcome': 'Résultat',
    'inventory.title': 'Système de gestion des stocks',
    'inventory.tagline': 'Un système de stock clair et basé sur les rôles pour gérer produits, commandes et fournisseurs au même endroit.',
    'inventory.problem': 'Le suivi manuel rendait les erreurs difficiles à repérer et la responsabilité peu claire.',
    'inventory.solution': 'Un espace par rôles avec stock en direct, flux de commandes et historique complet.',
    'inventory.outcome': 'Une source de vérité opérationnelle, avec moins de surprises et une responsabilité visible.',
    'booking.title': 'Réservation pour salon',
    'booking.tagline': 'Un parcours de réservation en temps réel qui remplace un carnet papier source de doublons et de désordre.',
    'booking.problem': 'Un calendrier papier facilitait les doubles réservations et les heures creuses.',
    'booking.solution': 'Un parcours mobile avec disponibilités réelles, plannings et contrôles côté serveur.',
    'booking.outcome': 'Le parcours client est terminé ; le tableau de bord propriétaire est encore en développement actif.',
    'process.kicker': 'Comment ça marche',
    'process.title': 'Un chemin clair, du problème au produit.',
    'process.one.title': 'Découvrir',
    'process.one.copy': 'Nous parlons du fonctionnement actuel, des blocages et du résultat souhaité.',
    'process.two.title': 'Proposer',
    'process.two.copy': 'Vous recevez un périmètre, un calendrier et une approche concrète.',
    'process.three.title': 'Construire',
    'process.three.copy': 'Le système prend forme avec des points réguliers et une progression visible.',
    'process.four.title': 'Lancer',
    'process.four.copy': 'Mise en ligne, transmission et support de base pour démarrer.',
    'about.kicker': 'À propos',
    'about.title': 'Une réflexion pratique. Des logiciels soignés.',
    'about.copy': 'Je suis Taha, développeur logiciel freelance spécialisé dans les applications web métier. J’apporte plus d’un an d’expérience professionnelle en programmation et une formation d’ingénieur en intelligence artificielle.',
    'contact.kicker': 'Un flux de travail à améliorer ?',
    'contact.title': 'Rendons-le plus simple.',
    'contact.copy': 'Dites-moi ce qui prend trop de temps ou où les erreurs apparaissent. Définissons ensemble le bon système.',
    'footer.back': 'Retour en haut ↑'
  }
};

// ---- Language detection + switching ----
let language = localStorage.getItem('portfolio-language') || (/^fr/i.test(navigator.language) ? 'fr' : 'en');

function applyLanguage() {
  document.documentElement.lang = language;
  document.querySelector('.language-label').textContent = language.toUpperCase();
  document.querySelector('.language-toggle').setAttribute('aria-label', language === 'fr' ? 'Changer de langue' : 'Switch language');
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const value = translations[language][el.dataset.i18n];
    if (!value) return;
    const textNode = [...el.childNodes].find(node => node.nodeType === Node.TEXT_NODE);
    if (textNode && el.children.length) {
      textNode.textContent = value.replace(/\s*[↗→←]\s*$/, '') + ' '
    } else {
      el.textContent = value
    }
  })
}
document.querySelector('.language-toggle').addEventListener('click', () => {
  language = language === 'en' ? 'fr' : 'en';
  localStorage.setItem('portfolio-language', language);
  applyLanguage()
});

// ---- Image gallery: prev/next, dots, click-to-open lightbox ----
document.querySelectorAll('[data-gallery]').forEach(gallery => {
  const key = gallery.dataset.gallery;
  let index = 0;
  const image = gallery.querySelector('[data-gallery-image]');
  const dots = gallery.querySelector('.gallery-dots');
  galleries[key].forEach((src, i) => {
    const dot = document.createElement('button');
    dot.setAttribute('aria-label', `Show image ${i+1}`);
    dot.addEventListener('click', () => {
      index = i;
      render()
    });
    dots.append(dot)
  });

  function render() {
    image.src = galleries[key][index];
    gallery.querySelectorAll('.gallery-dots button').forEach((dot, i) => dot.classList.toggle('active', i === index))
  }
  gallery.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + galleries[key].length) % galleries[key].length;
    render()
  });
  gallery.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % galleries[key].length;
    render()
  });
  image.addEventListener('click', () => {
    const lightbox = document.querySelector('.lightbox');
    lightbox.querySelector('img').src = image.src;
    lightbox.querySelector('img').alt = image.alt;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false')
  });
  render()
});

// ---- Lightbox open/close ----
const lightbox = document.querySelector('.lightbox');

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true')
}
lightbox.addEventListener('click', event => {
  if (event.target === lightbox || event.target.closest('.lightbox-close')) closeLightbox()
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeLightbox()
});

// ---- Copy-to-clipboard helper (with legacy fallback) ----
async function copyText(value) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return
  }
  const textarea = document.createElement('textarea');
  textarea.value = value;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.append(textarea);
  textarea.select();
  const copied = document.execCommand('copy');
  textarea.remove();
  if (!copied) throw new Error('Copy failed')
}

// ---- Copy button click handlers (credentials) ----
document.querySelectorAll('.copy-button').forEach(button => button.addEventListener('click', async () => {
  const original = button.textContent;
  try {
    await copyText(button.dataset.copy);
    button.textContent = language === 'fr' ? 'Copié' : 'Copied'
  } catch {
    button.textContent = language === 'fr' ? 'Échec' : 'Failed'
  }
  setTimeout(() => button.textContent = original, 1500)
}));

// ---- Header scroll effect + mobile hamburger menu ----
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 20), {
  passive: true
});
const menu = document.querySelector('.menu-toggle');
menu.addEventListener('click', () => {
  const nav = document.querySelector('.nav');
  const open = nav.classList.toggle('menu-open');
  menu.setAttribute('aria-expanded', open);
  menu.setAttribute('aria-label', open ? (language === 'fr' ? 'Fermer le menu' : 'Close menu') : (language === 'fr' ? 'Ouvrir le menu' : 'Open menu'))
});
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => {
  document.querySelector('.nav').classList.remove('menu-open');
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', language === 'fr' ? 'Ouvrir le menu' : 'Open menu')
}));

// ---- Run once on page load ----
applyLanguage();