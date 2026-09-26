# [COMPANY NAME] — Travel Agency Website

A production-ready, Bootstrap 5 travel agency website: Umrah, Ziyarat,
tour packages and flight-ticket inquiries, all data-driven from one
config file, with WhatsApp built into every CTA.

## 1. Before you go live — replace these

Open **`assets/js/config.js`** and replace every `[BRACKETED]` value:
company name, phone, WhatsApp number, email, office address, social
links, government registration number, license number, and the
placeholder statistics. This one file feeds the whole site — nothing
else needs editing for these details.

Then replace placeholder reviews in the same file's `reviews` array,
and add real photography — see `assets/images/README.txt` for the
exact filenames the site expects (drop a file in, it appears; nothing
to add is missing, it just shows a clean "Add photo" placeholder).

## 2. File structure

```
index.html          Homepage
umrah.html           Umrah packages
ziyarat.html          Ziyarat tours (Makkah/Madinah/Iran/Iraq)
packages.html         General tour packages (filter + search)
flights.html          Flight/ticket inquiry form
about.html            Company info, mission, registration/license
contact.html          Contact details + quote form
assets/css/style.css  All design/theme styling
assets/js/config.js   ALL editable content lives here
assets/js/main.js     Shared header/footer/nav + card rendering + forms
```

Every page shares the same header, navigation, footer and WhatsApp
button — they're rendered once in `main.js` from `config.js`, so
updating the phone number or a nav link in one place updates all 7
pages.

## 3. How the forms work (no backend required)

The quick inquiry, contact, and flight forms validate the required
fields, then open WhatsApp with a pre-filled message containing
everything the visitor typed. There's nothing to host or configure —
if you later want form submissions emailed or saved to a database
instead, swap the `wireInquiryForm(...)` calls in each page's inline
script for a real form-handling endpoint.

## 4. Adding or editing packages

Every package card (Umrah, Ziyarat, tours) renders from the arrays in
`config.js`. To add a new package, copy an existing object in the
relevant array (`umrahPackages`, `ziyaratPackages`, or `tourPackages`),
give it a unique `id`, and it will appear on the site automatically —
no HTML editing required.

## 5. Deploying

This is a static site — no build step, no server required. Upload the
whole folder to any static host (your own web server via FTP, Netlify,
Vercel, GitHub Pages, cPanel, etc.) and it works as-is. `index.html` is
the homepage.

## 6. What's still a placeholder

- Government registration number, license number, regulating authority
- Statistics (years of experience, travelers served, destinations)
- Customer reviews
- All photography
- Social media URLs
- Google Maps embed on the Contact page (`company.mapEmbedUrl` in config.js)

None of these were invented — replace them with your real information
before the site goes live.
