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
    'service.admin.title': 'Admin panels & dashboards',
    'service.admin.copy': 'Clean, role-based dashboards for internal tools and repeatable work.',
    'service.tall.title': 'Custom web apps',
    'service.tall.copy': 'Built to your exact request, from the first idea to a reliable working system.',
    'work.kicker': 'Selected work',
    'work.title': 'Built to solve the actual problem.',
    'work.copy': 'A closer look at systems designed around real business constraints.',
    'work.live': 'Live demo ↗',
    'case.problem': 'Problem',
    'case.solution': 'Solution',
    'case.outcome': 'Outcome',
    'inventory.title': 'Inventory Management System',
    'inventory.tagline': 'A clean, role-based inventory system for small businesses to track stock, manage orders, and handle suppliers in one place.',
    'inventory.problem': 'Manual stock tracking made errors hard to spot and accountability difficult.',
    'inventory.type': 'Inventory & order management system',
    'inventory.solution': 'One role-based workspace with live stock per warehouse, a guided order flow, and an automatic transaction history. Orders are checked against real stock on the server, and cancellations restore it.',
    'inventory.outcome': 'A single source of truth: every stock movement is recorded, low-stock alerts fire before items run out, and each order shows who changed its status and when.',
    'inventory.note': "Heads up: this demo runs on free hosting that sleeps when idle, so the first load can take up to a minute. That's the hosting, not the app.",
    'inventory.f1': 'Live stock per warehouse',
    'inventory.f2': 'Low-stock alerts',
    'inventory.f3': 'Order status tracking',
    'inventory.f4': 'Admin & employee roles',
    'inventory.access.hint': 'Admins see everything, including employee management. Employee accounts only get the day-to-day operations.',
    'booking.title': 'Salon Appointment Booking',
    'booking.tagline': 'A real-time booking flow replacing a paper notebook that caused double-bookings and scheduling chaos.',
    'booking.problem': 'A paper calendar made it easy to double-book clients or leave stylists idle.',
    'booking.solution': 'A phone-first booking flow with real availability, plus separate staff and owner workspaces. Availability is rechecked on the server.',
    'booking.outcome': 'A complete system: clients book online, staff run their day, and the owner manages services, schedules, and revenue from one dashboard.',
    'booking.type': 'Booking & scheduling system',
    'booking.f1': '14-day availability',
    'booking.f2': 'Service add-ons',
    'booking.f3': 'Safe booking commit',
    'booking.f4': 'Staff & owner dashboards',
    'booking.note': "Heads up: this demo runs on free hosting that sleeps when idle, so the first load can take up to a minute. That's the hosting, not the app.",
    'access.title': 'Demo logins · tap to copy',
    'access.admin': 'Admin',
    'access.staff': 'Staff',
    'access.client': 'Clients need no login: enter any name and phone number on the booking page.',
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
    'service.admin.title': 'Panneaux d’administration et tableaux de bord',
    'service.admin.copy': 'Des tableaux de bord clairs et basés sur les rôles pour vos outils internes.',
    'service.tall.title': 'Applications web sur mesure',
    'service.tall.copy': 'Conçues selon votre besoin précis, de la première idée à un système fiable.',
    'work.kicker': 'Projets sélectionnés',
    'work.title': 'Conçus pour résoudre le vrai problème.',
    'work.copy': 'Un aperçu de systèmes pensés autour des contraintes réelles d’une entreprise.',
    'work.live': 'Démo en ligne ↗',
    'case.problem': 'Problème',
    'case.solution': 'Solution',
    'case.outcome': 'Résultat',
    'inventory.title': 'Système de gestion des stocks',
    'inventory.tagline': 'Un système de stock clair et basé sur les rôles pour gérer produits, commandes et fournisseurs au même endroit.',
    'inventory.problem': 'Le suivi manuel rendait les erreurs difficiles à repérer et la responsabilité peu claire.',
    'inventory.type': 'Système de gestion des stocks et des commandes',
    'inventory.solution': 'Un espace par rôles avec stock en direct par entrepôt, un parcours de commande guidé et un historique des mouvements automatique. Les commandes sont vérifiées côté serveur par rapport au stock réel, et une annulation le restitue.',
    'inventory.outcome': 'Une source de vérité unique : chaque mouvement de stock est enregistré, les alertes de stock bas préviennent avant la rupture, et chaque commande indique qui a changé son statut et quand.',
    'inventory.note': 'À savoir : cette démo tourne sur un hébergement gratuit qui se met en veille, donc le premier chargement peut prendre jusqu’à une minute. Cela vient de l’hébergement, pas de l’application.',
    'inventory.f1': 'Stock en direct par entrepôt',
    'inventory.f2': 'Alertes de stock bas',
    'inventory.f3': 'Suivi du statut des commandes',
    'inventory.f4': 'Rôles admin et employé',
    'inventory.access.hint': 'L’admin voit tout, y compris la gestion des employés. Les comptes employés n’ont accès qu’aux opérations quotidiennes.',
    'booking.title': 'Réservation pour salon',
    'booking.tagline': 'Un parcours de réservation en temps réel qui remplace un carnet papier source de doublons et de désordre.',
    'booking.problem': 'Un calendrier papier facilitait les doubles réservations et les heures creuses.',
    'booking.solution': 'Un parcours de réservation mobile avec disponibilités réelles, plus des espaces séparés pour le personnel et le propriétaire. Les disponibilités sont revérifiées côté serveur.',
    'booking.outcome': 'Un système complet : les clients réservent en ligne, le personnel gère sa journée et le propriétaire pilote services, plannings et chiffres depuis un seul tableau de bord.',
    'booking.type': 'Système de réservation et de planning',
    'booking.f1': 'Disponibilités sur 14 jours',
    'booking.f2': 'Options de service',
    'booking.f3': 'Réservation sécurisée',
    'booking.f4': 'Tableaux de bord équipe et propriétaire',
    'booking.note': 'À savoir : cette démo tourne sur un hébergement gratuit qui se met en veille, donc le premier chargement peut prendre jusqu’à une minute. Cela vient de l’hébergement, pas de l’application.',
    'access.title': 'Accès démo · touchez pour copier',
    'access.admin': 'Admin',
    'access.staff': 'Équipe',
    'access.client': 'Aucune connexion pour les clients : entrez un nom et un numéro quelconques sur la page de réservation.',
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

// ---- Case-study galleries: swipe strip, dots, arrows, tap to enlarge ----
function openLightbox(src, alt) {
  lightbox.querySelector('img').src = src;
  lightbox.querySelector('img').alt = alt;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false')
}

document.querySelectorAll('[data-case-gallery]').forEach(gallery => {
  const track = gallery.querySelector('.case-track');
  const slides = [...track.children];
  const dotsBox = gallery.querySelector('.case-dots');
  const prev = gallery.querySelector('.case-arrow.prev');
  const next = gallery.querySelector('.case-arrow.next');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let index = 0;

  const dots = slides.map((slide, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.setAttribute('aria-label', `Show image ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsBox.append(dot);
    return dot
  });

  function setActive(i) {
    index = i;
    dots.forEach((dot, n) => dot.classList.toggle('active', n === i));
    prev.disabled = i === 0;
    next.disabled = i === slides.length - 1
  }

  function goTo(i) {
    const target = Math.max(0, Math.min(slides.length - 1, i));
    const pad = parseFloat(getComputedStyle(track).paddingLeft) || 0;
    track.scrollTo({
      left: slides[target].offsetLeft - pad,
      behavior: reduceMotion.matches ? 'auto' : 'smooth'
    });
    setActive(target)
  }

  prev.addEventListener('click', () => goTo(index - 1));
  next.addEventListener('click', () => goTo(index + 1));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(slides.indexOf(entry.target))
    })
  }, { root: track, threshold: 0.6 });
  slides.forEach(slide => observer.observe(slide));

  slides.forEach(slide => {
    const img = slide.querySelector('img');
    img.addEventListener('click', () => openLightbox(img.currentSrc || img.src, img.alt))
  });
  setActive(0)
});

// ---- Tap-to-copy chips (demo logins) ----
document.querySelectorAll('.copy-chip').forEach(chip => chip.addEventListener('click', async () => {
  if (chip.classList.contains('copied')) return;
  const original = chip.textContent;
  try {
    await copyText(chip.dataset.copy);
    chip.textContent = language === 'fr' ? 'Copié ✓' : 'Copied ✓';
    chip.classList.add('copied')
  } catch {
    chip.textContent = language === 'fr' ? 'Échec' : 'Failed'
  }
  setTimeout(() => {
    chip.textContent = original;
    chip.classList.remove('copied')
  }, 1400)
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