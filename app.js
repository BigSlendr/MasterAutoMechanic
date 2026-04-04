import { faqs, services, siteConfig, testimonials } from './data/siteConfig.js';

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const stars = (count) => '★'.repeat(count);

function buildHeader() {
  const headerTarget = $('#site-header');
  if (!headerTarget) return;

  const links = [
    { href: 'index.html', label: 'Home' },
    { href: 'services.html', label: 'Services' },
    { href: 'about.html', label: 'About' },
    { href: 'contact.html', label: 'Contact' }
  ];

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  headerTarget.innerHTML = `
    <a class="brand" href="index.html" aria-label="${siteConfig.businessName} home">
      <span class="brand-dot" aria-hidden="true"></span>
      <span>${siteConfig.businessName}</span>
    </a>
    <button class="menu-toggle" aria-expanded="false" aria-controls="primary-nav">Menu</button>
    <nav id="primary-nav" class="nav-links" aria-label="Main navigation">
      ${links
        .map(
          (link) =>
            `<a href="${link.href}" ${
              currentPath === link.href ? 'aria-current="page"' : ''
            }>${link.label}</a>`
        )
        .join('')}
      <a class="btn btn-primary" href="tel:${siteConfig.phoneRaw}">${siteConfig.primaryCtaLabel}</a>
    </nav>
  `;

  const toggle = $('.menu-toggle');
  const nav = $('#primary-nav');

  toggle?.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    nav?.classList.toggle('is-open');
  });
}

function fillGlobalPlaceholders() {
  $$('[data-business-name]').forEach((el) => (el.textContent = siteConfig.businessName));
  $$('[data-alt-business-name]').forEach((el) => (el.textContent = siteConfig.alternateBusinessName));
  $$('[data-phone-display]').forEach((el) => (el.textContent = siteConfig.phoneDisplay));
  $$('[data-email]').forEach((el) => (el.textContent = siteConfig.email));
  $$('[data-address-line1]').forEach((el) => (el.textContent = siteConfig.addressLine1));
  $$('[data-city-state-zip]').forEach((el) => (el.textContent = siteConfig.cityStateZip));

  $$('[data-phone-link]').forEach((el) => {
    el.setAttribute('href', `tel:${siteConfig.phoneRaw}`);
    if (!el.textContent.trim()) el.textContent = siteConfig.phoneDisplay;
  });

  $$('[data-email-link]').forEach((el) => {
    el.setAttribute('href', `mailto:${siteConfig.email}`);
    if (!el.textContent.trim()) el.textContent = siteConfig.email;
  });

  $$('[data-map-link]').forEach((el) => {
    el.setAttribute('href', siteConfig.mapUrl);
  });
}

function renderQuickInfo() {
  const target = $('#quick-info-grid');
  if (!target) return;

  target.innerHTML = `
    <article>
      <h3>Visit Us</h3>
      <p>${siteConfig.addressLine1}<br/>${siteConfig.cityStateZip}</p>
    </article>
    <article>
      <h3>Shop Hours</h3>
      <p>${siteConfig.hours[0].day}: ${siteConfig.hours[0].time}<br/>${siteConfig.hours[1].day}: ${siteConfig.hours[1].time}</p>
    </article>
    <article>
      <h3>Call Today</h3>
      <p><a href="tel:${siteConfig.phoneRaw}">${siteConfig.phoneDisplay}</a></p>
    </article>
  `;
}

function renderServices(targetSelector, limit) {
  const target = $(targetSelector);
  if (!target) return;

  const data = limit ? services.slice(0, limit) : services;

  target.innerHTML = data
    .map(
      (service, index) => `
      <article class="service-card reveal" style="--reveal-delay:${index * 50}ms">
        <span class="service-icon" aria-hidden="true">${service.icon}</span>
        <h3>${service.name}</h3>
        <p>${service.description}</p>
      </article>
    `
    )
    .join('');
}

function renderTestimonials() {
  const target = $('#testimonial-grid');
  if (!target) return;

  target.innerHTML = testimonials
    .map(
      (item) => `
      <article class="testimonial-card reveal">
        <div class="rating" aria-label="${item.rating} out of 5 stars">${stars(item.rating)}</div>
        <p>“${item.quote}”</p>
        <h3>${item.name}</h3>
      </article>
    `
    )
    .join('');
}

function renderHours(selector = '#hours-list') {
  const target = $(selector);
  if (!target) return;
  target.innerHTML = siteConfig.hours
    .map(
      (entry) => `<li><span>${entry.day}</span><strong>${entry.time}</strong></li>`
    )
    .join('');
}

function renderFaqs() {
  const target = $('#faq-list');
  if (!target) return;
  target.innerHTML = faqs
    .map(
      (faq) => `
      <details class="faq-item reveal">
        <summary>${faq.question}</summary>
        <p>${faq.answer}</p>
      </details>
    `
    )
    .join('');
}

function renderFooter() {
  const target = $('#site-footer');
  if (!target) return;

  target.innerHTML = `
    <div>
      <h3>${siteConfig.businessName}</h3>
      <p>Trusted auto repair in Staten Island for diagnostics, maintenance, and dependable repairs.</p>
    </div>
    <div>
      <h4>Contact</h4>
      <p>${siteConfig.addressLine1}<br/>${siteConfig.cityStateZip}</p>
      <p><a href="tel:${siteConfig.phoneRaw}">${siteConfig.phoneDisplay}</a><br/>
      <a href="mailto:${siteConfig.email}">${siteConfig.email}</a></p>
    </div>
    <div>
      <h4>Hours</h4>
      <ul class="footer-hours">
        ${siteConfig.hours.map((h) => `<li>${h.day}: ${h.time}</li>`).join('')}
      </ul>
    </div>
    <div>
      <h4>Quick Links</h4>
      <ul class="footer-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
    <p class="copyright">© ${new Date().getFullYear()} ${siteConfig.businessName}. All rights reserved.</p>
  `;
}

function renderMobileCta() {
  const target = $('#mobile-cta');
  if (!target) return;

  target.innerHTML = `
    <a class="btn btn-primary" href="tel:${siteConfig.phoneRaw}">${siteConfig.primaryCtaLabel}</a>
    <a class="btn btn-outline" href="${siteConfig.mapUrl}" target="_blank" rel="noopener noreferrer">Get Directions</a>
  `;
}

function wireForm() {
  const form = $('#request-form');
  if (!form) return;

  const serviceSelect = $('#service-needed');
  if (serviceSelect) {
    serviceSelect.innerHTML += services
      .map((service) => `<option value="${service.name}">${service.name}</option>`)
      .join('');
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const notice = $('#form-notice');
    if (notice) {
      notice.textContent = 'Thanks! Your request has been received. We will contact you shortly to confirm details.';
    }
    form.reset();
  });
}

function setupRevealAnimations() {
  const revealElements = $$('.reveal');
  if (!revealElements.length || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealElements.forEach((el) => observer.observe(el));
}

function setMeta() {
  const pageTitle = document.body.dataset.pageTitle;
  if (pageTitle) document.title = `${pageTitle} | ${siteConfig.businessName}`;

  const descriptionTag = document.querySelector('meta[name="description"]');
  if (descriptionTag && !descriptionTag.content.includes(siteConfig.businessName)) {
    descriptionTag.content = `${siteConfig.businessName} provides expert auto repair in Staten Island, including diagnostics, inspections, brake service, and routine maintenance.`;
  }

  const schemaTag = $('#local-business-schema');
  if (!schemaTag) return;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: siteConfig.businessName,
    alternateName: siteConfig.alternateBusinessName,
    image: siteConfig.socialPreview,
    telephone: siteConfig.phoneRaw,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.addressLine1,
      addressLocality: 'Staten Island',
      addressRegion: 'NY',
      postalCode: '10308',
      addressCountry: 'US'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '15:00'
      }
    ],
    areaServed: 'Staten Island, New York',
    url: window.location.origin
  };

  schemaTag.textContent = JSON.stringify(schema);
}

function init() {
  setMeta();
  buildHeader();
  fillGlobalPlaceholders();
  renderQuickInfo();
  renderServices('#services-preview-grid', 6);
  renderServices('#services-page-grid');
  renderTestimonials();
  renderHours();
  renderFaqs();
  renderFooter();
  renderMobileCta();
  wireForm();
  setupRevealAnimations();
}

document.addEventListener('DOMContentLoaded', init);
