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

  const social = c.social || {};
  const candidates = [
    { label: "WhatsApp Channel", url: c.whatsappChannel, icon: "bi-whatsapp" },
    { label: "Instagram", url: social.instagram, icon: "bi-instagram" },
    { label: "Facebook", url: social.facebook, icon: "bi-facebook" },
    { label: "TikTok", url: social.tiktok, icon: "bi-tiktok" },
    { label: "YouTube", url: social.youtube, icon: "bi-youtube" }
  ];
  const socialLinks = candidates
    .filter(link => link.url && !link.url.includes("[") && !link.url.includes("]"))
    .map(link => `<a href="${link.url}" target="_blank" rel="noopener" aria-label="${link.label}"><i class="bi ${link.icon}"></i></a>`)
    .join("");
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

  if (!document.getElementById("detailsModal")) {
    const m = document.createElement("div");
    m.innerHTML = `
      <div class="modal fade" id="detailsModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header"><h5 class="modal-title" id="detailsModalLabel"></h5><button class="btn-close" data-bs-dismiss="modal"></button></div>
            <div class="modal-body" id="detailsModalBody"></div>
          </div>
        </div>
      </div>`;
    document.body.appendChild(m.firstElementChild);
  }
  if (!document.getElementById("galleryModal")) {
    const gm = document.createElement("div");
    gm.innerHTML = `
      <div class="modal fade" id="galleryModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header"><h5 class="modal-title" id="galleryModalCaption"></h5><button class="btn-close" data-bs-dismiss="modal"></button></div>
            <div class="modal-body"><img id="galleryModalImg" class="w-100" style="border-radius:8px;" alt="Gallery photo"></div>
          </div>
        </div>
      </div>`;
    document.body.appendChild(gm.firstElementChild);
  }
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

/* ---------- homepage hero slideshow ---------- */
let heroSlideshowTimer = null;
function initHeroSlideshow() {
  if (heroSlideshowTimer) {
    clearInterval(heroSlideshowTimer);
    heroSlideshowTimer = null;
  }
  const slides = Array.from(document.querySelectorAll(".hero__slide"));
  if (slides.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let activeIndex = slides.findIndex(slide => slide.classList.contains("hero__slide--active"));
  if (activeIndex < 0) activeIndex = 0;
  heroSlideshowTimer = window.setInterval(() => {
    slides[activeIndex].classList.remove("hero__slide--active");
    activeIndex = (activeIndex + 1) % slides.length;
    slides[activeIndex].classList.add("hero__slide--active");
  }, 6000);
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
  if (!src) return `<div class="package-card__no-image" aria-label="${alt} details">${alt}</div>`;
  return `<img src="${src}" alt="${alt}" loading="lazy" onerror="this.classList.add('img-missing')">`;
}

function relatedPackageImage(pkg) {
  if (pkg.image) return pkg.image;
  const text = `${pkg.category || ""} ${pkg.region || ""} ${pkg.destination || ""} ${pkg.title || pkg.name || ""}`.toLowerCase();
  if (text.includes("iran")) return TRAVEL_IMAGES.airplane;
  if (text.includes("karbala")) return TRAVEL_IMAGES.kaabaWide;
  if (text.includes("iraq") || text.includes("najaf")) return TRAVEL_IMAGES.kaabaWide;
  if (text.includes("umrah") || text.includes("makkah") || text.includes("madinah") || pkg.tier) return TRAVEL_IMAGES.kaabaCrowd;
  if (text.includes("malaysia")) return TRAVEL_IMAGES.kualaLumpur;
  if (text.includes("thailand")) return TRAVEL_IMAGES.bangkok;
  if (text.includes("international") || text.includes("tour")) return TRAVEL_IMAGES.airplane;
  if (text.includes("visa") || text.includes("flight") || text.includes("ticket") || text.includes("travel service")) return TRAVEL_IMAGES.airplane;
  return TRAVEL_IMAGES.airplane;
}

function renderUmrahCards(containerId, items) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = (items || SITE_CONFIG.umrahPackages).map(p => `
    <div class="col-12 col-md-6 col-lg-4">
      <div class="package-card h-100">
        <div class="package-card__media">
          ${packageImg(relatedPackageImage(p), p.name)}
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
            <button class="btn btn-outline-ink btn-sm" data-package-detail data-package-id="${p.id}" data-package-type="umrah">View Details</button>
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
          ${packageImg(relatedPackageImage(p), p.name)}
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
            <button class="btn btn-outline-ink btn-sm" data-package-detail data-package-id="${p.id}" data-package-type="ziyarat">View Details</button>
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
          ${packageImg(relatedPackageImage(p), p.title)}
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
            <div class="package-card__price">From ${formatPrice(p.startingPrice, p.currency || "PKR")}</div>
          </div>
          <div class="package-card__actions">
            <button class="btn btn-outline-ink btn-sm" data-package-detail data-package-id="${p.id}" data-package-type="tour">View Details</button>
            <a class="btn btn-gold btn-sm" href="${waLink('Hello, I would like to book: ' + p.title)}" target="_blank" rel="noopener">Book Now</a>
          </div>
        </div>
      </div>
    </div>`).join("");
  attachDetailModalHandlers();
}

function findPackageById(id, type) {
  const map = { umrah: SITE_CONFIG.umrahPackages, ziyarat: SITE_CONFIG.ziyaratPackages, tour: SITE_CONFIG.tourPackages };
  return (map[type] || []).find(p => p.id === id);
}

function renderPackageDetails(pkg) {
  const body = document.getElementById("detailsModalBody");
  const title = document.getElementById("detailsModalLabel");
  if (!body || !title || !pkg) return false;

  title.textContent = pkg.name || pkg.title || "Package Details";
  const category = pkg.category || (pkg.tier ? "Umrah Packages" : pkg.region) || "Travel package";
  const destination = pkg.destination || (pkg.makkahHotel ? "Makkah & Madinah" : pkg.region) || "Worldwide travel";
  const duration = pkg.duration || pkg.nights || "Flexible";
  const price = pkg.startingPrice ? formatPrice(pkg.startingPrice, pkg.currency || "PKR") : pkg.price ? formatPrice(pkg.price, pkg.currency || "PKR") : "Contact for price";
  const highlights = Array.isArray(pkg.highlights) ? pkg.highlights : Array.isArray(pkg.included) ? pkg.included : [
    pkg.makkahHotel && `Makkah hotel: ${pkg.makkahHotel}`,
    pkg.madinahHotel && `Madinah hotel: ${pkg.madinahHotel}`,
    pkg.roomSharing && `Room sharing: ${pkg.roomSharing}`,
    pkg.transport && `Transport: ${pkg.transport}`,
    pkg.meals && `Meals: ${pkg.meals}`,
    pkg.visaIncluded && "Visa included",
    pkg.flightIncluded && "Flight included",
    pkg.ziyaratIncluded && `Ziyarat: ${pkg.ziyaratIncluded}`
  ].filter(Boolean);
  const description = pkg.description || (pkg.region ? `${pkg.name || "Ziyarat package"} with guided travel arrangements.` : pkg.makkahHotel ? `${pkg.name || "Umrah package"} with visa, flight, hotel and transport arrangements.` : "Contact us for complete package information.");
  const image = packageImg(relatedPackageImage(pkg), pkg.name || pkg.title || "Package");
  body.innerHTML = `${image}
    <div class="detail-modal__lead">
      <span class="detail-modal__category">${category}</span>
      <p>${destination}</p>
    </div>
    <div class="detail-modal__summary">
      <div><span>Duration</span><strong>${duration}</strong></div>
      <div><span>Starting price</span><strong>${price}</strong></div>
    </div>
    <div class="detail-modal__section">
      <h6>Package Overview</h6>
      <p>${description}</p>
    </div>
    <div class="detail-modal__section">
      <h6>Package Details</h6>
      ${highlights.length ? `<ul class="detail-modal__list">${highlights.map(item => `<li>${item}</li>`).join("")}</ul>` : "<p>Contact us for complete package details.</p>"}
    </div>`;
  return true;
}

function attachDetailModalHandlers() {
  if (window.packageDetailsHandlerAttached) return;
  window.packageDetailsHandlerAttached = true;
  document.addEventListener("click", event => {
    const btn = event.target.closest("[data-package-detail]");
    if (!btn) return;
    const pkg = findPackageById(btn.dataset.packageId, btn.dataset.packageType);
    if (!renderPackageDetails(pkg)) return;
    event.preventDefault();
    const modalEl = document.getElementById("detailsModal");
    if (modalEl && window.bootstrap && bootstrap.Modal) {
      window.setTimeout(() => new bootstrap.Modal(modalEl).show(), 0);
    }
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
  if (form.dataset.wired) return;
  form.dataset.wired = "true";
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

/* =========================================================
   PAGE INITIALIZERS (called on direct load & fetch transitions)
   ========================================================= */
function initIndexPage() {
  renderTourCards("homeTourCards", SITE_CONFIG.tourPackages.slice(0, 3));
  renderGallery("homeGallery");
  const ctaWa = document.getElementById("ctaWhatsapp");
  if (ctaWa) ctaWa.href = waLink();
  const homeIg = document.getElementById("homeInstagramBtn");
  if (homeIg && SITE_CONFIG.company.social?.instagram) homeIg.href = SITE_CONFIG.company.social.instagram;

  const statsRow = document.getElementById("statsRow");
  if (statsRow) {
    statsRow.innerHTML = SITE_CONFIG.company.stats.map(s => `
      <div class="col-6 col-lg-3">
        <div class="stat-block ${s.isPlaceholder ? 'stat-block--placeholder' : ''}">
          <div class="stat-block__value">${s.value}</div>
          <div class="stat-block__label">${s.label}</div>
          ${s.isPlaceholder ? '<span class="placeholder-note">Sample — add real figure</span>' : ''}
        </div>
      </div>`).join("");
  }

  const reviewsRow = document.getElementById("reviewsRow");
  if (reviewsRow) {
    reviewsRow.innerHTML = SITE_CONFIG.reviews.map(r => `
      <div class="col-md-6 col-lg-4">
        <div class="review-card h-100">
          ${r.isPlaceholder ? '<span class="placeholder-tag">Sample review</span>' : ''}
          <div class="review-card__stars">${"★".repeat(r.rating)}${"☆".repeat(5-r.rating)}</div>
          <p class="review-card__text">${r.text}</p>
          <div class="review-card__footer">
            <div class="review-avatar">${r.name.replace(/[\[\]]/g,'').charAt(0)}</div>
            <div><div class="review-card__name">${r.name}</div><div class="review-card__type">${r.packageType}</div></div>
          </div>
        </div>
      </div>`).join("");
  }

  wireInquiryForm("quickInquiryForm", d => `Hello, I'd like a quote.\nName: ${d.name}\nPhone: ${d.phone}\nTravel type: ${d.travelType}\nDestination: ${d.destination||"-"}\nDate: ${d.date||"-"}\nTravelers: ${d.travelers||"-"}\nMessage: ${d.message||"-"}`);
  wireInquiryForm("reviewForm", d => `Hello, I'd like to share a customer review.\nName: ${d.name}\nTrip type: ${d.tripType}\nRating: ${d.rating}/5\nReview: ${d.review}\nPlease confirm before publishing this review.`);
  initHeroSlideshow();
}

function initUmrahPage() {
  renderUmrahCards("umrahAllCards", SITE_CONFIG.umrahPackages);
  const ctaWa = document.getElementById("ctaWhatsapp");
  if (ctaWa) ctaWa.href = waLink("Assalamu alaikum, I'd like help choosing an Umrah package.");
}

function initZiyaratPage() {
  const regions = ["All", ...new Set(SITE_CONFIG.ziyaratPackages.map(p => p.region))];
  const filterEl = document.getElementById("ziyaratFilters");
  if (filterEl) {
    filterEl.innerHTML = regions.map((r, i) => `<button class="btn ${i===0?'btn-ink':'btn-outline-ink'} btn-sm" data-region="${r}">${r}</button>`).join("");
    function apply(region) {
      const items = region === "All" ? SITE_CONFIG.ziyaratPackages : SITE_CONFIG.ziyaratPackages.filter(p => p.region === region);
      renderZiyaratCards("ziyaratAllCards", items);
    }
    filterEl.querySelectorAll("button").forEach(btn => btn.addEventListener("click", () => {
      filterEl.querySelectorAll("button").forEach(b => b.classList.replace("btn-ink","btn-outline-ink"));
      btn.classList.replace("btn-outline-ink","btn-ink");
      apply(btn.dataset.region);
    }));
    apply("All");
  }
  const ctaWa = document.getElementById("ctaWhatsapp");
  if (ctaWa) ctaWa.href = waLink("Hello, I'd like the current Iran/Iraq Ziyarat group schedule.");
}

function initPackagesPage() {
  const cats = ["All", ...new Set(SITE_CONFIG.tourPackages.map(p => p.category))];
  const filterEl = document.getElementById("categoryFilters");
  const searchEl = document.getElementById("packageSearch");
  if (filterEl) {
    filterEl.innerHTML = cats.map((c, i) => `<button class="btn ${i===0?'btn-ink':'btn-outline-ink'} btn-sm" data-cat="${c}">${c}</button>`).join("");
    let activeCat = "All";
    function apply() {
      const q = (searchEl ? searchEl.value : "").trim().toLowerCase();
      let items = activeCat === "All" ? SITE_CONFIG.tourPackages : SITE_CONFIG.tourPackages.filter(p => p.category === activeCat);
      if (q) items = items.filter(p => (p.destination + p.title).toLowerCase().includes(q));
      renderTourCards("tourAllCards", items);
    }
    filterEl.querySelectorAll("button").forEach(btn => btn.addEventListener("click", () => {
      filterEl.querySelectorAll("button").forEach(b => b.classList.replace("btn-ink","btn-outline-ink"));
      btn.classList.replace("btn-outline-ink","btn-ink");
      activeCat = btn.dataset.cat;
      apply();
    }));
    if (searchEl) {
      searchEl.addEventListener("input", apply);
    }
    apply();
  }
}

function initFlightsPage() {
  wireInquiryForm("flightForm", d => `Hello, I'd like a flight quote.\nTrip: ${d.tripType}\nFrom: ${d.from}\nTo: ${d.to}\nDepart: ${d.departDate}\nReturn: ${d.returnDate||"-"}\nPassengers: ${d.adults} adult(s), ${d.children} child(ren), ${d.infants} infant(s)\nAirline: ${d.airline||"Any"}\nName: ${d.name}\nPhone: ${d.phone}\nEmail: ${d.email||"-"}`);
}

function initAboutPage() {
  // Reveal is handled by initReveal()
}

function initContactPage() {
  const c = SITE_CONFIG.company;
  const mapEl = document.getElementById("officeMap");
  if (mapEl) mapEl.src = c.mapEmbedUrl;
  const igBtn = document.getElementById("contactInstagramBtn");
  if (igBtn && c.social?.instagram) igBtn.href = c.social.instagram;
  const fbBtn = document.getElementById("contactFacebookBtn");
  if (fbBtn && c.social?.facebook) fbBtn.href = c.social.facebook;

  const contactCards = document.getElementById("contactCards");
  if (contactCards) {
    contactCards.innerHTML = `
      <div class="col-md-6 col-lg-3"><div class="service-card text-center"><div class="service-card__icon mx-auto"><i class="bi bi-telephone-fill"></i></div><h3>Call Us</h3>${c.phoneNumbers.map(phone => `<p class="mb-1"><a href="${phone.link}">${phone.display}</a></p>`).join("")}</div></div>
      <div class="col-md-6 col-lg-3"><div class="service-card text-center"><div class="service-card__icon mx-auto"><i class="bi bi-whatsapp"></i></div><h3>WhatsApp</h3><p><a href="${waLink()}" target="_blank" rel="noopener">${c.whatsappDisplay}</a></p><p><a href="${c.whatsappChannel}" target="_blank" rel="noopener">Follow our channel</a></p></div></div>
      <div class="col-md-6 col-lg-3"><div class="service-card text-center"><div class="service-card__icon mx-auto"><i class="bi bi-envelope-fill"></i></div><h3>Email</h3><p><a href="mailto:${c.email}">${c.email}</a></p></div></div>
      <div class="col-md-6 col-lg-3"><div class="service-card text-center"><div class="service-card__icon mx-auto"><i class="bi bi-geo-alt-fill"></i></div><h3>Office</h3><p>${c.address}</p></div></div>`;
  }
  wireInquiryForm("contactForm", d => `Hello, I'd like a quote.\nName: ${d.name}\nPhone: ${d.phone}\nWhatsApp: ${d.whatsapp||"-"}\nEmail: ${d.email||"-"}\nTravel type: ${d.travelType}\nDeparture city: ${d.departureCity||"-"}\nMessage: ${d.message||"-"}`);
}

function initCurrentPage(targetPath) {
  const path = (targetPath || location.pathname).split("/").pop().split("?")[0].split("#")[0] || "index.html";
  updateActiveNav(path);
  initReveal();
  attachDetailModalHandlers();

  if (path === "index.html" || path === "") {
    initIndexPage();
  } else if (path === "umrah.html") {
    initUmrahPage();
  } else if (path === "ziyarat.html") {
    initZiyaratPage();
  } else if (path === "packages.html") {
    initPackagesPage();
  } else if (path === "flights.html") {
    initFlightsPage();
  } else if (path === "about.html") {
    initAboutPage();
  } else if (path === "contact.html") {
    initContactPage();
  }
}

/* =========================================================
   SEAMLESS FETCH NAVIGATION (SPA / PJAX)
   Removes browser tab loading spinner on link clicks by
   fetching page HTML via JavaScript fetch API in the background.
   ========================================================= */
const pageCache = new Map();

function updateActiveNav(targetPath) {
  const currentFile = (targetPath || location.pathname).split("/").pop().split("?")[0].split("#")[0] || "index.html";
  document.querySelectorAll(".site-navbar .nav-link").forEach(link => {
    const href = link.getAttribute("href") || "";
    const linkFile = href.split("#")[0].split("/").pop() || "index.html";
    link.classList.toggle("active", linkFile === currentFile);
  });
}

async function prefetchPage(url) {
  if (pageCache.has(url)) return;
  try {
    const res = await fetch(url);
    if (res.ok) {
      const html = await res.text();
      pageCache.set(url, html);
    }
  } catch (e) {}
}

async function navigateWithFetch(url, pushHistory = true) {
  const targetUrl = new URL(url, window.location.href);

  // If on file:// protocol, fall back to normal navigation to prevent CORS blocks
  if (window.location.protocol === "file:") {
    window.location.href = url;
    return;
  }

  const cleanPath = targetUrl.pathname;
  let html = pageCache.get(cleanPath);

  try {
    if (!html) {
      const res = await fetch(cleanPath);
      if (!res.ok) throw new Error("Fetch failed: " + res.status);
      html = await res.text();
      pageCache.set(cleanPath, html);
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // 1. Update title without tab loading spinner
    if (doc.title) {
      document.title = doc.title;
    }

    // 2. Update meta description
    const newMeta = doc.querySelector('meta[name="description"]');
    if (newMeta) {
      let curMeta = document.querySelector('meta[name="description"]');
      if (!curMeta) {
        curMeta = document.createElement("meta");
        curMeta.name = "description";
        document.head.appendChild(curMeta);
      }
      curMeta.content = newMeta.content;
    }

    // 3. Swap main page content
    const curContent = document.getElementById("page-content");
    const newContent = doc.getElementById("page-content");
    if (curContent && newContent) {
      curContent.innerHTML = newContent.innerHTML;
      curContent.style.animation = "none";
      void curContent.offsetHeight; // trigger reflow
      curContent.style.animation = "";
    } else {
      window.location.href = url;
      return;
    }

    // 4. Update browser history
    if (pushHistory) {
      window.history.pushState({ url: targetUrl.href }, "", targetUrl.href);
    }

    // 5. Update active navbar state
    updateActiveNav(cleanPath);

    // 6. Close mobile collapse navbar if open
    const navMain = document.getElementById("navMain");
    if (navMain && navMain.classList.contains("show") && window.bootstrap && bootstrap.Collapse) {
      const bsCollapse = bootstrap.Collapse.getInstance(navMain) || new bootstrap.Collapse(navMain);
      bsCollapse.hide();
    }

    // 7. Initialize the new page's components
    initCurrentPage(cleanPath);

    // 8. Smooth scroll to anchor or instant scroll to top
    if (targetUrl.hash) {
      const anchorEl = document.querySelector(targetUrl.hash);
      if (anchorEl) {
        anchorEl.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  } catch (err) {
    console.warn("Fetch navigation fallback to default navigation:", err);
    window.location.href = url;
  }
}

function initFetchNavigation() {
  document.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link) return;
    if (e.defaultPrevented) return;
    if (e.button !== 0) return; // left click only
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return; // allow new tab
    if (link.target === "_blank") return; // external target
    if (link.hasAttribute("download")) return;

    const href = link.getAttribute("href");
    if (!href || href === "#" || href.startsWith("javascript:") || href.startsWith("mailto:") || href.startsWith("tel:")) return;

    let targetUrl;
    try {
      targetUrl = new URL(href, window.location.href);
    } catch (err) {
      return;
    }

    if (targetUrl.origin !== window.location.origin) return; // external site

    // If anchor on the current page
    if (targetUrl.pathname === window.location.pathname && targetUrl.search === window.location.search) {
      if (targetUrl.hash) {
        e.preventDefault();
        const anchorEl = document.querySelector(targetUrl.hash);
        if (anchorEl) anchorEl.scrollIntoView({ behavior: "smooth" });
        window.history.pushState({ url: targetUrl.href }, "", targetUrl.href);
      }
      return;
    }

    // Seamless navigation using fetch!
    e.preventDefault();
    navigateWithFetch(targetUrl.href);
  });

  // Prefetch pages on link hover for instantaneous navigation
  document.addEventListener("mouseover", (e) => {
    const link = e.target.closest("a");
    if (!link) return;
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("javascript:") || href.startsWith("mailto:") || href.startsWith("tel:") || link.target === "_blank") return;
    try {
      const targetUrl = new URL(href, window.location.href);
      if (targetUrl.origin === window.location.origin) {
        prefetchPage(targetUrl.pathname);
      }
    } catch (err) {}
  });

  // Listen for browser Back and Forward buttons
  window.addEventListener("popstate", () => {
    navigateWithFetch(window.location.href, false);
  });
}

/* ---------- boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderChrome();
  renderFloatingContact();
  initScrollShrink();
  initFetchNavigation();
  initCurrentPage();
});
