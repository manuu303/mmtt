/**
 * Shared site behaviour. Loaded on every page after config.js.
 * Keeps header/nav/footer/WhatsApp logic in one place so no markup
 * or phone numbers are duplicated across pages.
 */

/* ---------- small helpers ---------- */
function waLink(prefilledText) {
  const msg = encodeURIComponent(prefilledText || "Hello, I'd like to enquire about your travel packages.");
  return `https://wa.me/${SITE_CONFIG.company.whatsappNumber}?text=${msg}`;
}
function formatPrice(amount, currency) {
  if (!amount || amount === 0) return "Contact for price";
  return `${currency} ${amount.toLocaleString()}`;
}
function iconMoonStars() {
  return `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20 13.5A8 8 0 1 1 10.5 4 6.3 6.3 0 0 0 20 13.5Z"/></svg>`;
}
function iconMosque() {
  return `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3v3M4 21v-7l3-3 2 2 3-3 3 3 2-2 3 3v7H4Z"/><path d="M9 21v-4a3 3 0 0 1 6 0v4"/></svg>`;
}
function iconCrown() {
  return `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 18h18M4 18l1.5-9L9 13l3-7 3 7 3.5-4L20 18"/></svg>`;
}
const ICONS = { "moon-stars": iconMoonStars, "building-mosque": iconMosque, "crown": iconCrown };

/* ---------- header / nav / footer injection ---------- */
function renderChrome() {
  const c = SITE_CONFIG.company;
  const currentFile = (location.pathname.split("/").pop() || "index.html");

  const navLinks = SITE_CONFIG.nav.map(n =>
    `<li class="nav-item"><a class="nav-link ${n.href === currentFile ? "active" : ""}" href="${n.href}">${n.label}</a></li>`
  ).join("");

  const navbarHTML = `
    <nav class="navbar navbar-expand-xxl site-navbar" id="siteNavbar">
      <div class="container">
        <a class="navbar-brand" href="index.html">
          <img src="assets/images/ChatGPT%20Image%20Sep%2026,%202026,%2011_28_20%20PM.png" class="brand-logo" alt="">
          <span class="brand-full">${c.name}</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMain" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navMain">
          <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-1">
            ${navLinks}
            <li class="nav-item ms-lg-3 mt-2 mt-lg-0">
              <a class="btn btn-gold" href="contact.html#quote">Book Now</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>`;

  const navEl = document.getElementById("chrome-navbar");
  if (navEl) navEl.innerHTML = navbarHTML;

  const social = c.social;
  const socialLinks = [
    { label: "TikTok", url: social.tiktok, icon: "bi-tiktok" },
    { label: "WhatsApp Channel", url: c.whatsappChannel, icon: "bi-whatsapp" }
  ].map(link => `<a href="${link.url}" target="_blank" rel="noopener" aria-label="${link.label}"><i class="bi ${link.icon}"></i></a>`).join("");
  const footerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="row gy-4">
          <div class="col-12 col-lg-4">
            <div class="footer-brand">${c.name}</div>
            <p class="footer-about">${c.tagline}. Trusted travel planning for Umrah, Ziyarat and tours worldwide.</p>
            <div class="footer-social">
              ${socialLinks}
            </div>
          </div>
          <div class="col-6 col-lg-2">
            <div class="footer-heading">Quick Links</div>
            <ul class="footer-list">
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="packages.html">Packages</a></li>
              <li><a href="umrah.html">Umrah</a></li>
              <li><a href="ziyarat.html">Ziyarat</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div class="col-6 col-lg-3">
            <div class="footer-heading">Services</div>
            <ul class="footer-list">
              <li><a href="umrah.html">Umrah Packages</a></li>
              <li><a href="ziyarat.html">Ziyarat Packages</a></li>
              <li><a href="packages.html">Tours</a></li>
              <li><a href="flights.html">Flight Ticketing</a></li>
              <li><a href="contact.html">Visa Assistance</a></li>
              <li><a href="contact.html">Hotel Booking</a></li>
            </ul>
          </div>
          <div class="col-12 col-lg-3">
            <div class="footer-heading">Contact</div>
            <ul class="footer-list">
              <li><i class="bi bi-geo-alt-fill me-2"></i>${c.address}</li>
              ${c.phoneNumbers.map(phone => `<li><a href="${phone.link}"><i class="bi bi-telephone-fill me-2"></i>${phone.display}</a></li>`).join("")}
              <li><a href="${waLink()}" target="_blank" rel="noopener"><i class="bi bi-whatsapp me-2"></i>${c.whatsappDisplay}</a></li>
              <li><a href="${c.whatsappChannel}" target="_blank" rel="noopener"><i class="bi bi-whatsapp me-2"></i>WhatsApp Channel</a></li>
              <li><a href="mailto:${c.email}"><i class="bi bi-envelope-fill me-2"></i>${c.email}</a></li>
            </ul>
          </div>
        </div>
        <hr>
        <div class="footer-bottom">
          <span>&copy; <span id="year"></span> ${c.name}. All Rights Reserved.</span>
          <span class="footer-legal"><a href="#">Privacy Policy</a> &middot; <a href="#">Terms &amp; Conditions</a></span>
        </div>
      </div>
    </footer>`;
  const footEl = document.getElementById("chrome-footer");
  if (footEl) footEl.innerHTML = footerHTML;
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/* ---------- floating WhatsApp + mobile bottom bar ---------- */
function renderFloatingContact() {
  const c = SITE_CONFIG.company;
  const html = `
    <a class="whatsapp-float" href="${waLink()}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
      <i class="bi bi-whatsapp"></i>
    </a>
    <div class="mobile-bottom-bar d-lg-none">
      <a href="${c.phoneNumbers[0].link}"><i class="bi bi-telephone-fill"></i><span>Call</span></a>
      <a href="${waLink()}" target="_blank" rel="noopener"><i class="bi bi-whatsapp"></i><span>WhatsApp</span></a>
      <a href="contact.html#quote"><i class="bi bi-calendar-check-fill"></i><span>Book Now</span></a>
    </div>`;
  const el = document.createElement("div");
  el.innerHTML = html;
  document.body.appendChild(el);
}

/* ---------- navbar shrink on scroll ---------- */
function initScrollShrink() {
  const nav = document.getElementById("siteNavbar");
  if (!nav) return;
  window.addEventListener("scroll", () => {
    nav.classList.toggle("is-scrolled", window.scrollY > 40);
  });
}

/* ---------- reveal on scroll (used sparingly, section headers only) ---------- */
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || !items.length) {
    items.forEach(i => i.classList.add("is-visible"));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-visible"); obs.unobserve(e.target); } });
  }, { threshold: 0.15 });
  items.forEach(i => obs.observe(i));
}

/* ---------- generic package card renderer (data-driven, reusable) ---------- */
function packageImg(src, alt) {
  return `<img src="${src}" alt="${alt}" loading="lazy" onerror="this.classList.add('img-missing')">`;
}

function renderUmrahCards(containerId, items) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = (items || SITE_CONFIG.umrahPackages).map(p => `
    <div class="col-12 col-md-6 col-lg-4">
      <div class="package-card h-100">
        <div class="package-card__media">
          ${packageImg(p.image, p.name)}
          <span class="tier-badge tier-badge--${p.tier.toLowerCase()}">${p.tier}</span>
        </div>
        <div class="package-card__body">
          <div class="package-card__icon">${ICONS[p.icon] ? ICONS[p.icon]() : ""}</div>
          <h3 class="package-card__title">${p.name}</h3>
          <ul class="package-card__facts">
            <li><i class="bi bi-moon-stars"></i> ${p.nights}</li>
            <li><i class="bi bi-building"></i> Makkah: ${p.makkahHotel}</li>
            <li><i class="bi bi-building"></i> Madinah: ${p.madinahHotel}</li>
            <li><i class="bi bi-people"></i> ${p.roomSharing}</li>
            <li><i class="bi bi-bus-front"></i> ${p.transport}</li>
            <li><i class="bi bi-egg-fried"></i> ${p.meals}</li>
          </ul>
          <div class="package-card__footer">
            <div class="package-card__price">${formatPrice(p.price, p.currency)}</div>
            <span class="availability availability--${p.availability === "Available" ? "ok" : "limited"}">${p.availability}</span>
          </div>
          <div class="package-card__actions">
            <button class="btn btn-outline-ink btn-sm" data-bs-toggle="modal" data-bs-target="#detailsModal" data-package-id="${p.id}" data-package-type="umrah">View Details</button>
            <a class="btn btn-gold btn-sm" href="${waLink('Assalamu alaikum, I would like to book the ' + p.name + '.')}" target="_blank" rel="noopener">Book Now</a>
          </div>
          <a class="whatsapp-inline" href="${waLink('Hello, I have a question about the ' + p.name + '.')}" target="_blank" rel="noopener"><i class="bi bi-whatsapp"></i> WhatsApp Inquiry</a>
        </div>
      </div>
    </div>`).join("");
  attachDetailModalHandlers();
}

function renderZiyaratCards(containerId, items) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = (items || SITE_CONFIG.ziyaratPackages).map(p => `
    <div class="col-12 col-md-6 col-lg-3">
      <div class="package-card package-card--compact h-100">
        <div class="package-card__media">
          ${packageImg(p.image, p.name)}
          <span class="tier-badge">${p.region}</span>
        </div>
        <div class="package-card__body">
          <h3 class="package-card__title">${p.name}</h3>
          <ul class="package-card__facts">
            <li><i class="bi bi-clock"></i> ${p.duration}</li>
            <li><i class="bi bi-signpost-2"></i> ${p.departure}</li>
            <li><i class="bi bi-bus-front"></i> ${p.transport}</li>
          </ul>
          <div class="package-card__tags">
            ${p.included.map(x => `<span class="tag">${x}</span>`).join("")}
          </div>
          <div class="package-card__footer">
            <div class="package-card__price">${formatPrice(p.price, "USD")}</div>
          </div>
          <div class="package-card__actions">
            <button class="btn btn-outline-ink btn-sm" data-bs-toggle="modal" data-bs-target="#detailsModal" data-package-id="${p.id}" data-package-type="ziyarat">View Details</button>
            <a class="btn btn-gold btn-sm" href="${waLink('Hello, I would like to book the ' + p.name + '.')}" target="_blank" rel="noopener">Book Now</a>
          </div>
        </div>
      </div>
    </div>`).join("");
  attachDetailModalHandlers();
}

function renderTourCards(containerId, items) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const list = items || SITE_CONFIG.tourPackages;
  if (!list.length) { el.innerHTML = `<div class="col-12"><p class="empty-state">No packages match this filter yet — try another category or <a href="contact.html#quote">request a custom itinerary</a>.</p></div>`; return; }
  el.innerHTML = list.map(p => `
    <div class="col-12 col-md-6 col-lg-4 tour-item" data-category="${p.category}">
      <div class="package-card h-100">
        <div class="package-card__media">
          ${packageImg(p.image, p.title)}
          <span class="tier-badge">${p.category}</span>
        </div>
        <div class="package-card__body">
          <div class="text-muted small mb-1">${p.destination} &middot; ${p.duration}</div>
          <h3 class="package-card__title">${p.title}</h3>
          <p class="package-card__desc">${p.description}</p>
          <ul class="package-card__facts">
            ${p.highlights.map(h => `<li><i class="bi bi-check2"></i> ${h}</li>`).join("")}
          </ul>
          <div class="package-card__footer">
            <div class="package-card__price">From ${formatPrice(p.startingPrice, "USD")}</div>
          </div>
          <div class="package-card__actions">
            <button class="btn btn-outline-ink btn-sm" data-bs-toggle="modal" data-bs-target="#detailsModal" data-package-id="${p.id}" data-package-type="tour">View Details</button>
            <a class="btn btn-gold btn-sm" href="${waLink('Hello, I would like to book: ' + p.title)}" target="_blank" rel="noopener">Book Now</a>
          </div>
        </div>
      </div>
    </div>`).join("");
}

function findPackageById(id, type) {
  const map = { umrah: SITE_CONFIG.umrahPackages, ziyarat: SITE_CONFIG.ziyaratPackages, tour: SITE_CONFIG.tourPackages };
  return (map[type] || []).find(p => p.id === id);
}

function attachDetailModalHandlers() {
  document.querySelectorAll('[data-bs-target="#detailsModal"]').forEach(btn => {
    btn.addEventListener("click", () => {
      const pkg = findPackageById(btn.dataset.packageId, btn.dataset.packageType);
      if (!pkg) return;
      const body = document.getElementById("detailsModalBody");
      const title = document.getElementById("detailsModalLabel");
      if (title) title.textContent = pkg.name || pkg.title;
      if (body) {
        const rows = Object.entries(pkg)
          .filter(([k]) => !["id", "image", "icon"].includes(k))
          .map(([k, v]) => `<div class="detail-row"><span>${k.replace(/([A-Z])/g, " $1")}</span><strong>${Array.isArray(v) ? v.join(", ") : v}</strong></div>`)
          .join("");
        body.innerHTML = `${packageImg(pkg.image, pkg.name || pkg.title)}<div class="mt-3">${rows}</div>`;
      }
    });
  });
}

/* ---------- gallery lightbox ---------- */
function renderGallery(containerId, filterCategory) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const items = SITE_CONFIG.gallery.filter(g => !filterCategory || filterCategory === "All" || g.category === filterCategory);
  el.innerHTML = items.map((g, i) => `
    <div class="col-6 col-md-4 col-lg-3">
      <button class="gallery-thumb" data-bs-toggle="modal" data-bs-target="#galleryModal" data-index="${i}">
        ${packageImg(g.image, g.caption)}
        <span class="gallery-thumb__cat">${g.category}</span>
      </button>
    </div>`).join("");
  el.querySelectorAll(".gallery-thumb").forEach((btn, i) => {
    btn.addEventListener("click", () => {
      const img = document.getElementById("galleryModalImg");
      const cap = document.getElementById("galleryModalCaption");
      if (img) { img.src = items[i].image; img.onerror = () => img.classList.add("img-missing"); }
      if (cap) cap.textContent = items[i].caption;
    });
  });
}

/* ---------- forms: validate + route through WhatsApp (no backend required) ---------- */
function wireInquiryForm(formId, buildMessage) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!form.checkValidity()) { form.classList.add("was-validated"); return; }
    const data = Object.fromEntries(new FormData(form).entries());
    window.open(waLink(buildMessage(data)), "_blank", "noopener");
    const successEl = form.querySelector(".form-success");
    if (successEl) successEl.classList.remove("d-none");
    form.reset();
    form.classList.remove("was-validated");
  });
}

/* ---------- boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderChrome();
  renderFloatingContact();
  initScrollShrink();
  initReveal();
});
