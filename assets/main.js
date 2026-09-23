'use strict';

// Spanish stays in HTML: the content is also accessible without JavaScript.
const english = {
  skip: 'Skip to content', navAbout: 'About', navExperience: 'Experience', navContact: 'Contact', talk: 'Let’s talk',
  heroTitle: 'Solid software.<br>Limitless <em>possibilities.</em>',
  heroIntro: 'I’m <strong>Wilmar Fernando Pineda Rojas.</strong><br>I connect software development, cloud infrastructure and geospatial data to build solutions that work in the real world.',
  seeExperience: 'View experience', download: 'Download CV', location: 'Bogotá, Colombia · Remote work', portraitLabel: 'ENGINEERING WITH PURPOSE',
  aboutIndex: '01 / ABOUT', aboutTitle: 'From data to product.<br>From idea to production.',
  aboutLead: 'Over 10 years building software and more than 6 in backend and full stack roles. My work brings together engineering, data and the impact of a well-built product.',
  aboutText: 'I’m a cadastral and geodesy engineer, GIS specialist and MSc in Information and Communications Sciences. I design Python APIs and microservices, integrate React and TypeScript interfaces, and support their deployment on AWS. I work with product, QA and infrastructure teams, with code reviews and mentoring as part of the process.',
  factYears: 'years in software', factMentoring: 'engineers mentored', factDomains: 'fields: software, cloud & GIS',
  experienceIndex: '02 / EXPERIENCE', experienceTitle: 'Experience that<br>connects disciplines.',
  experienceIntro: 'Public sector, technology, logistics and geospatial analytics. A career built on solving different kinds of problems.', fullCv: 'Full experience in my CV', contract: 'COLOMBIA · CONTRACT',
  ministryRole: 'Software Engineer', ministry: 'Ministry of Commerce, Industry and Tourism',
  ministryText: 'Deployment and operational readiness of the VUI Transaccional platform on AWS. Environment configuration, service validation and collaboration with development and infrastructure teams to prepare for production.',
  imagemakerDate: 'MAY 2022 — JUL 2025', remote: 'REMOTE',
  imagemakerText: 'Python and FastAPI services, serverless architectures and AWS deployments. Design and implementation of PKI services (RA, CA and administration). Technical reference in a team of 10, directly mentoring 6 engineers.',
  esriDate: 'AUG 2019 — JUN 2022',
  esriText: 'Analytics team leadership, geospatial automation and API integration. YOLO models to detect machinery in jungle imagery and image classification to estimate deforestation in Chiribiquete National Park.',
  earlier: 'Earlier experience · 2013–2019',
  liftitText: 'APIs and services for logistics optimization with Django and Flask; components using Elixir, Phoenix, Ecto and PostgreSQL.',
  qgisRole: 'Python Developer for QGIS', qgisText: 'A PyQGIS, Qt and PyQt plugin for forms and geoprocessing, integrated with PostgreSQL/PostGIS.',
  earlyText: 'Automation of agricultural planning outputs, Django applications, territorial analytics and data processing with Python, ArcPy, PostGIS and Linux.',
  skillsIndex: '03 / TOOLS & APPROACH', skillsTitle: 'A stack for building end to end.',
  engineering: 'Quality built into the process: automated testing, TDD, code reviews, Git, Linux and technical mentoring.',
  educationIndex: '04 / EDUCATION', educationTitle: 'Learning to<br>go further.', masters: 'MSc in Information and Communications Sciences', specialization: 'Specialization in Geographic Information Systems', degree: 'Cadastral and Geodesy Engineering',
  certificates: 'Additional training', ds4a: 'Correlation One · Graduated with honors · 2020', languages: 'Native Spanish <span>/</span> English B2 working proficiency',
  contactIndex: '05 / NEXT STEP', contactTitle: 'Let’s build<br>something that <em>matters.</em>',
  contactText: 'A product, a technical challenge or an opportunity?<br>Let’s talk about what I can bring to your team.', contactLocation: 'FROM BOGOTÁ, TO THE WORLD.', backTop: 'Back to top'
};

const translatedElements = [...document.querySelectorAll('[data-i18n]')];
const spanish = Object.fromEntries(translatedElements.map(element => [element.dataset.i18n, element.innerHTML]));
const languageToggle = document.getElementById('language-toggle');
const menuToggle = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
let currentLanguage = 'es';

function closeMenu() {
  mobileNav.hidden = true;
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', currentLanguage === 'es' ? 'Abrir menú' : 'Open menu');
}

function setLanguage(language) {
  currentLanguage = language === 'en' ? 'en' : 'es';
  const content = currentLanguage === 'en' ? english : spanish;
  translatedElements.forEach(element => {
    const translation = content[element.dataset.i18n];
    // All translated markup is trusted local content, never user input.
    if (translation !== undefined) element.innerHTML = translation;
  });
  document.documentElement.lang = currentLanguage;
  languageToggle.innerHTML = currentLanguage === 'es' ? 'ES <span>/ EN</span>' : '<span>ES /</span> EN';
  languageToggle.setAttribute('aria-label', currentLanguage === 'es' ? 'Read this résumé in English' : 'Leer esta hoja de vida en español');
  document.querySelectorAll('.cv-link').forEach(link => {
    link.href = `assets/docs/Wilmar_Pineda_Fullstack_${currentLanguage.toUpperCase()}.pdf`;
  });
  document.querySelector('meta[name="description"]').content = currentLanguage === 'es'
    ? 'Wilmar Fernando Pineda Rojas. Desarrollador Full Stack Senior especializado en Python, AWS y soluciones geoespaciales. Más de 10 años construyendo software.'
    : 'Wilmar Fernando Pineda Rojas. Senior Full Stack Developer specializing in Python, AWS and geospatial solutions. Over 10 years building software.';
  document.querySelector('.brand').setAttribute('aria-label', currentLanguage === 'es' ? 'Wilmar Pineda — inicio' : 'Wilmar Pineda — home');
  document.querySelector('.portrait-arrow').setAttribute('aria-label', currentLanguage === 'es' ? 'Contactar a Wilmar' : 'Contact Wilmar');
  document.querySelector('.desktop-nav').setAttribute('aria-label', currentLanguage === 'es' ? 'Principal' : 'Main navigation');
  mobileNav.setAttribute('aria-label', currentLanguage === 'es' ? 'Navegación móvil' : 'Mobile navigation');
  closeMenu();
  try { localStorage.setItem('portfolio-language', currentLanguage); } catch { /* Optional storage. */ }
}

languageToggle.addEventListener('click', () => setLanguage(currentLanguage === 'es' ? 'en' : 'es'));
menuToggle.addEventListener('click', () => {
  const opening = mobileNav.hidden;
  mobileNav.hidden = !opening;
  menuToggle.setAttribute('aria-expanded', String(opening));
  menuToggle.setAttribute('aria-label', currentLanguage === 'es' ? (opening ? 'Cerrar menú' : 'Abrir menú') : (opening ? 'Close menu' : 'Open menu'));
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !mobileNav.hidden) { closeMenu(); menuToggle.focus(); }
});
document.addEventListener('click', event => {
  if (!mobileNav.hidden && !event.target.closest('.site-header')) closeMenu();
});
window.matchMedia('(min-width: 851px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
document.getElementById('year').textContent = new Date().getFullYear();
try { if (localStorage.getItem('portfolio-language') === 'en') setLanguage('en'); } catch { /* Spanish is the default. */ }

if ('IntersectionObserver' in window) {
  const navigationLinks = [...document.querySelectorAll('.desktop-nav a')];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navigationLinks.forEach(link => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -60% 0px', threshold: 0 });
  document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
}
