/**
 * SITE_CONFIG — single source of truth for the whole website.
 * ------------------------------------------------------------
 * Every page reads from this file. To relaunch this site for real:
 *   1. Replace every value wrapped in [BRACKETS] below.
 *   2. Replace placeholder images (see /assets/images/README.txt).
 *   3. Replace the placeholder reviews once you have real ones.
 * Do not hardcode phone numbers, WhatsApp links, or package data
 * anywhere else in the codebase — always read from this object.
 */
const TRAVEL_IMAGES = {
  kaabaCrowd: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&q=80",
  makkahClock: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=1200&q=80",
  kaabaWide: "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&w=1200&q=80",
  madinah: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80",
  quran: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=1200&q=80",
  cappadocia: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1200&q=80",
  kualaLumpur: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80",
  maldives: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
  northernPakistan: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
  bangkok: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80",
  resort: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
  airplane: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80"
};

const SITE_CONFIG = {

  company: {
    name: "Moon Mohsin Travels and Tours",
    shortName: "MM",
    tagline: "Your journey, planned with care",
    foundedYear: 2007,
    phoneNumbers: [
      { display: "03189653208", link: "tel:03189653208" },
      { display: "03285000951", link: "tel:03285000951" }
    ],
    whatsappChannel: "https://whatsapp.com/channel/0029Vb8j6IeGzzKTntS4fG3f",
    whatsappDisplay: "03189653208",
    whatsappNumber: "923189653208", // digits only, country code, no + or spaces
    email: "itx123faizan@gmail.com",
    address: "Office #01 Saddique E Akbar Market Main Bazaar Gurmani City District Kotaddu Multan Panjab Pakistan",
    mapEmbedUrl: "https://maps.google.com/maps?q=30.269232602963186,70.95651623116441&output=embed",
    registration: {
      govRegistrationNumber: "873210",
      licenseNumber: "[LICENSE NUMBER]",
      authorityName: "[REGISTRATION AUTHORITY NAME]",
      additionalDetails: "[ADDITIONAL REGISTRATION / APPROVAL DETAILS]"
    },
    social: {
      facebook: "[FACEBOOK URL]",
      instagram: "[INSTAGRAM URL]",
      youtube: "[YOUTUBE URL]",
      tiktok: "https://tiktok.com/@moon.mohsin.travel.tours"
    },
    stats: [
      { value: "19+", label: "Years of experience", isPlaceholder: false },
      { value: "2,500+", label: "Travelers served", isPlaceholder: false },
      { value: "20+", label: "Destinations covered", isPlaceholder: false },
      { value: "24/7", label: "Customer support", isPlaceholder: false }
    ]
  },

  nav: [
    { label: "Home", href: "index.html" },
    { label: "Umrah", href: "umrah.html" },
    { label: "Ziyarat", href: "ziyarat.html" },
    { label: "Packages", href: "packages.html" },
    { label: "Flights", href: "flights.html" },
    { label: "About Us", href: "about.html" },
    { label: "Contact Us", href: "contact.html" }
  ],

  // ---------------- UMRAH PACKAGES ----------------
  umrahPackages: [
    {
      id: "umrah-overview-section", tier: "Custom", name: "Umrah Packages Overview", nights: "10, 15 or 21 days", makkahHotel: "Trusted accommodation", madinahHotel: "Trusted accommodation", roomSharing: "Multiple room options", transport: "Transfers included", meals: "Contact for meal plan", visaIncluded: true, flightIncluded: true, ziyaratIncluded: "Available by package", price: 0, currency: "PKR", availability: "Available", image: null, icon: "moon-stars"
    },
    {
      id: "umrah-sasta-section", tier: "Economy", name: "Sasta Umrah Package", nights: "15, 21 or 28 days", makkahHotel: "Clean A/C hotels near Haram", madinahHotel: "Clean A/C hotels near Haram", roomSharing: "Sharing options available", transport: "A/C Jeddah, Makkah and Madina transport", meals: "Contact for meal plan", visaIncluded: true, flightIncluded: true, ziyaratIncluded: "Complete Makkah & Madina Ziyarats", price: 0, currency: "PKR", availability: "Available", image: null, icon: "moon-stars"
    },
    {
      id: "umrah-20-days-section", tier: "Executive", name: "20 Days Umrah Package", nights: "20 days: 11 Makkah + 8 Madinah nights", makkahHotel: "Manasik Al Hijra, 700m", madinahHotel: "Juhaina Al Masi, 400m", roomSharing: "Sharing / Quad / Triple / Double", transport: "Transport by bus", meals: "Contact for meal plan", visaIncluded: true, flightIncluded: true, ziyaratIncluded: "Included", price: 258000, currency: "PKR", availability: "Available", image: null, icon: "building-mosque"
    },
    {
      id: "umrah-21-days-section", tier: "Economy", name: "21 Days Economy Umrah Group", nights: "21 days: 12 Makkah + 8 Madinah nights", makkahHotel: "Ajwa Ziyafa, shuttle service", madinahHotel: "Kinan Madinah, 900m", roomSharing: "Sharing / Quad / Triple / Double", transport: "Transport by bus", meals: "Contact for meal plan", visaIncluded: true, flightIncluded: true, ziyaratIncluded: "Available by package", price: 257000, currency: "PKR", availability: "Available", image: null, icon: "moon-stars"
    },
    {
      id: "umrah-october-section", tier: "Group", name: "Your October Umrah Group", nights: "20 days", makkahHotel: "Jaddat Al Khalil or Snood Mawten", madinahHotel: "Kunooz Al Taqwa, 400m", roomSharing: "Two hotel options", transport: "Contact for transport plan", meals: "No extra food BRN charges", visaIncluded: true, flightIncluded: true, ziyaratIncluded: "Available by package", price: 239500, currency: "PKR", availability: "Available", image: null, icon: "moon-stars"
    },
    {
      id: "umrah-3-4-5-star-section", tier: "Premium", name: "3, 4, 5 Star & Economy Umrah", nights: "Customizable", makkahHotel: "3, 4 or 5 star options", madinahHotel: "3, 4 or 5 star options", roomSharing: "Contact for room plan", transport: "Transportation included", meals: "Contact for meal plan", visaIncluded: true, flightIncluded: true, ziyaratIncluded: "Available by package", price: 265000, currency: "PKR", availability: "Available", image: null, icon: "crown"
    },
    {
      id: "umrah-15-days-section", tier: "Standard", name: "15 Days Umrah Package", nights: "15 days", makkahHotel: "Mukaram Al Hijra", madinahHotel: "Elaf Quba", roomSharing: "Sharing / Quad / Triple / Double", transport: "Transportation included", meals: "Contact for meal plan", visaIncluded: true, flightIncluded: true, ziyaratIncluded: "Available by package", price: 230000, currency: "PKR", availability: "Available", image: null, icon: "building-mosque"
    },
    {
      id: "umrah-azadi-section", tier: "Seasonal", name: "Happy Azadi Month Umrah", nights: "Customizable", makkahHotel: "Premium hotel options", madinahHotel: "Premium hotel options", roomSharing: "Contact for room plan", transport: "Comfortable transport", meals: "Contact for meal plan", visaIncluded: true, flightIncluded: true, ziyaratIncluded: "Contact for details", price: 0, currency: "PKR", availability: "Available", image: null, icon: "moon-stars"
    }
  ],

  // ---------------- ZIYARAT PACKAGES ----------------
  ziyaratPackages: [
    {
      id: "eid-karbala-ziyarat-section", region: "Iraq", name: "Eid-ul-Fitr Karbala Group Ziarat", duration: "11 days", departure: "19 March 2026", hotel: "Hotels included", transport: "Transport included", included: ["Karbala", "Najaf", "Kazmain", "Samarra", "Balad", "All Ziyaraat", "Air ticket", "Visa", "Meals", "Religious guide"], price: 235000, image: null
    },
    {
      id: "iran-ziyarat-section", region: "Iran", name: "Iran Ziarat Group Package", duration: "15 days: Mashhad 8 nights + Qom 6 nights", departure: "October 2026", hotel: "Mashhad and Qom accommodation", transport: "Contact for transport plan", included: ["Mashhad", "Qom", "Base PKR 160,000 / USD 570", "Services fee PKR 20,000", "IATA Certified 27343993", "ZGO Registered No. 25212"], price: 160000, image: null
    },
    {
      id: "arbaeen-iraq-section", region: "Iraq", name: "Arbaeen 2026 In Iraq Ziarat", duration: "Classic 14 days / Shuttle 10 days", departure: "Arbaeen 2026", hotel: "Accommodation included", transport: "Transport included", included: ["Najaf to Karbala walk", "Karbala", "Najaf", "Kazmain", "Samarra", "Balad", "Air ticket", "Visa", "Meals", "Religious guide"], price: 1390, image: null
    }
  ],

  // ---------------- GENERAL TOUR PACKAGES ----------------
  tourPackages: [
    {
      id: "eid-karbala-ziyarat", category: "Ziyarat", destination: "Karbala, Najaf, Kazmain, Samarra & Balad", title: "Eid-ul-Fitr Karbala Group Ziarat", duration: "11 days", startingPrice: 235000, currency: "PKR",
      description: "Only Iraq Eid-ul-Fitr Ziarat package including all listed services and Ziyaraat.", highlights: ["PKR 235,000 per person", "Punjab departure: +USD 130", "Iran extension, 8 days: +USD 400", "Departure: 19 March 2026", "Air ticket, visa, transport, hotels, meals and religious guide", "Karbala, Najaf, Kazmain, Samarra, Balad and all Ziyaraat"], image: null
    },
    {
      id: "umrah-overview", category: "Umrah Packages", destination: "Makkah & Madinah", title: "Umrah Packages Overview", duration: "10, 15 or 21 days", startingPrice: 0, currency: "PKR",
      description: "Umrah packages with trusted accommodation for Hajj and Umrah pilgrims.", highlights: ["10, 15 and 21 day options", "Visa", "Ticket", "Hotel", "Transfer", "Insurance", "Etihad, SereneAir, AirSial, Emirates, Qatar, Airblue, PIA and Saudi Arabian Airlines", "Approved by Nusuk"], image: null
    },
    {
      id: "thailand-visa-new", category: "Visa Services", destination: "Thailand", title: "Thailand Visa Service", duration: "Visa processing service", startingPrice: 0, currency: "PKR",
      description: "Thailand visa processing at the best price.", highlights: ["Best-price processing", "Primary contact: 0345-5000-951"], image: null
    },
    {
      id: "qatar-independence-campaign-new", category: "Flight Tickets", destination: "Pakistan to worldwide destinations", title: "Qatar Airways Pakistan Independence Day Campaign", duration: "Travel: 7 Aug 2026 - 31 Mar 2027", startingPrice: 0, currency: "PKR",
      description: "Qatar Airways economy and premium campaign from Pakistan, excluding Doha and Medina.", highlights: ["Origin: PK", "One way and return", "GDS discount up to 15%", "NDC discount up to 25%", "Sales: 5 Aug - 14 Aug 2026", "Limited RBDs"], image: null
    },
    {
      id: "azerbaijan-eid-package", category: "International Tours", destination: "Baku, Azerbaijan", title: "Eid-ul-Fitr Azerbaijan Package", duration: "4 nights / 5 days", startingPrice: 239000, currency: "PKR",
      description: "Special Eid package for Baku, Azerbaijan.", highlights: ["Travel date: 23 March", "Special Eid package price: PKR 239,000"], image: null
    },
    {
      id: "four-countries-tour-new", category: "International Tours", destination: "Malaysia, Singapore, Thailand & Sri Lanka", title: "4 Countries In One Go", duration: "11 days / 10 nights", startingPrice: 499000, currency: "PKR",
      description: "Four-country package with all taxes and service charges included.", highlights: ["Travel date: 7 April 2026", "Twin sharing", "Visa, hotel, ticket, transfer, tours and breakfast", "Special offer: Rs. 499,000"], image: null
    },
    {
      id: "europe-student-visa-new", category: "Visa Services", destination: "Europe", title: "Student Visa for Europe", duration: "Admissions open 2026", startingPrice: 0, currency: "PKR",
      description: "Study in Europe admissions and student visa support.", highlights: ["Student visa assistance", "University admission support", "Complete documentation guidance", "Visa file preparation", "Interview guidance", "Valid passport", "Educational documents", "IELTS / language requirement", "Financial documents"], image: null
    },
    {
      id: "happy-azadi-brand", category: "Travel Services", destination: "Pakistan", title: "Happy Azadi Month", duration: "Seasonal campaign", startingPrice: 0, currency: "PKR",
      description: "Proud to be Pakistani and proud of our freedom.", highlights: ["Flights", "Hotels", "Visas", "Tour packages"], image: null
    },
    {
      id: "sasta-umrah", category: "Umrah Packages", destination: "Makkah & Madinah", title: "Sasta Umrah Package", duration: "15, 21 or 28 days", startingPrice: 0, currency: "PKR",
      description: "Economy Umrah package with complete Makkah and Madina Ziyarats.", highlights: ["AC transport: Jeddah, Makkah and Madina", "Major airline tickets available", "Clean AC hotels near Haram", "Direct Multan to Jeddah flights", "Emirates, Saudia, PIA, Airblue and AirSial"], image: null
    },
    {
      id: "uae-done-base-new", category: "Visa Services", destination: "United Arab Emirates", title: "UAE Done Base Visa", duration: "Processing service", startingPrice: 0, currency: "PKR",
      description: "UAE Done Base Visa for single male or female applicants below 45 years.", highlights: ["Passport: 1st and 2nd page", "NIC front and back", "White background picture", "6 months bank statement"], image: null
    },
    {
      id: "riyadh-air-ticketing", category: "Flight Tickets", destination: "Riyadh to Islamabad / Lahore", title: "Riyadh Air Ticketing Facility", duration: "From August 2026", startingPrice: 0, currency: "PKR",
      description: "Ticketing facility available for Riyadh Air.", highlights: ["Riyadh to Islamabad: daily from August 14", "Riyadh to Lahore: three weekly from August 18", "Boeing 787 Dreamliner", "Spacious cabin", "Advanced entertainment", "Premium dining"], image: null
    },
    {
      id: "umrah-20-days-new", category: "Umrah Packages", destination: "Makkah & Madinah", title: "20 Days Umrah Package", duration: "20 days", startingPrice: 258000, currency: "PKR",
      description: "20-day package with Ziyarat, guide, visa, direct airline, hotel and bus transport.", highlights: ["Makkah: Manasik Al Hijra, 700m, 11 nights", "Madinah: Juhaina Al Masi, 400m, 8 nights", "Sharing: PKR 258,000", "Quad: PKR 267,500", "Triple: PKR 288,000", "Double: PKR 323,500"], image: null
    },
    {
      id: "japan-visit-visa-new", category: "Visa Services", destination: "Japan", title: "Japan Visit Visa Consultancy", duration: "Appointment required", startingPrice: 50000, currency: "PKR",
      description: "Japan visit visa consultancy with appointment support.", highlights: ["Original price: PKR 70,000", "Discount price: PKR 50,000"], image: null
    },
    {
      id: "umrah-21-days-economy-new", category: "Umrah Packages", destination: "Makkah & Madinah", title: "21 Days Economy Umrah Group", duration: "21 days: Makkah 12 nights + Madinah 8 nights", startingPrice: 257000, currency: "PKR",
      description: "Economy group package partnered with Pakistan International Airlines.", highlights: ["Makkah: Ajwa Ziyafa, shuttle service", "Madinah: Kinan Madinah, 900m", "Sharing: PKR 257,000", "Quad: PKR 263,000", "Triple: PKR 272,000", "Double: PKR 290,000", "September travel date blocks", "Visa, accommodation, bus transport and airline ticket"], image: null
    },
    {
      id: "october-umrah-20-days-new", category: "Umrah Packages", destination: "Makkah & Madinah", title: "Your October Umrah Group", duration: "20 days", startingPrice: 239500, currency: "PKR",
      description: "October Umrah group with two hotel options, no extra food BRN charges and direct airline ticket.", highlights: ["Option 1: PKR 244,500 — Jaddat Al Khalil 1200m / Kunooz Al Taqwa 400m", "Option 2: PKR 239,500 — Snood Mawten shuttle / Kunooz Al Taqwa 400m", "No extra food BRN charges", "Direct airline ticket"], image: null
    },
    {
      id: "uae-visit-visa-new", category: "Visa Services", destination: "United Arab Emirates", title: "UAE Visit Visa — 30 / 60 Days", duration: "30 or 60 days", startingPrice: 0, currency: "PKR",
      description: "Family visit visa service from Pakistan.", highlights: ["30-day visit visa", "60-day visit visa", "Family visit visa", "Limited visa availability — DM today"], image: null
    },
    {
      id: "iran-ziyarat-october-2026", category: "Ziyarat", destination: "Iran — Mashhad & Qom", title: "Iran Ziarat Group Package", duration: "15 days: Mashhad 8 nights + Qom 6 nights", startingPrice: 160000, currency: "PKR",
      description: "October 2026 Iran Ziarat group package with Mashhad and Qom stays.", highlights: ["Base: PKR 160,000 / USD 570", "Standard services fee: PKR 20,000", "Lahore / Islamabad: +USD 120", "IATA 27343993", "ZGO Registered No. 25212", "Contacts: 0345-2203077, 0328-2626526, 0328-5000951, 0345-5000951", "Landline: 021-32236800"], image: null
    },
    {
      id: "umrah-3-4-5-star-overview", category: "Umrah Packages", destination: "Makkah & Madinah", title: "3, 4, 5 Star & Economy Umrah", duration: "2026 / 1448H", startingPrice: 270000, currency: "PKR",
      description: "Customizable Umrah packages with direct flight, visa, hotel and transportation.", highlights: ["Starting from PKR 270,000", "Direct flight", "Visa", "Hotel", "Transportation", "Agent: Mohsin Aslam", "Contacts: 0328-5000951, 0345-5000951"], image: null
    },
    {
      id: "umrah-september-group-2026", category: "Umrah Packages", destination: "Makkah & Madinah", title: "Umrah Group Package — September 2026", duration: "11 days; quad sharing per adult", startingPrice: 290000, currency: "PKR",
      description: "September 2026 group Umrah departing from Karachi on 25 September 2026.", highlights: ["Makkah: 6 nights — Hotel Olayan Palace or similar", "Madina: 4 nights — Hotel Gulnar Taiba", "Extra USD 160 from Punjab", "Contacts: 0328-2626526, 0345-2203077, 0328-5000951", "Office #01, Main Bazar Karmani Shah, Kot Addu, Muzaffargarh"], image: null
    },
    {
      id: "umrah-3-4-5-star-second", category: "Umrah Packages", destination: "Makkah & Madinah", title: "3, 4, 5 Star & Economy Umrah Package", duration: "2026 / 1448H", startingPrice: 265000, currency: "PKR",
      description: "Umrah package with flight, visa, hotels and transfers.", highlights: ["Starting from PKR 265,000", "Flight", "Visa", "Hotels", "Transfers", "Contacts: 0318-9653208, 0332-9750868"], image: null
    },
    {
      id: "three-countries-tour", category: "International Tours", destination: "Thailand, Malaysia & Sri Lanka", title: "3 Countries — 1 Amazing Journey", duration: "8 nights / 9 days", startingPrice: 390000, currency: "PKR",
      description: "Bangkok, Kuala Lumpur and Colombo international tour package.", highlights: ["Thailand / Bangkok: 3 nights, Oct 12-15", "Malaysia / Kuala Lumpur: 3 nights, Oct 15-18", "Sri Lanka / Colombo: 2 nights, Oct 18-20", "Airport-to-hotel transport", "Tours and excursions", "3/4 star hotel with breakfast"], image: null
    },
    {
      id: "umrah-15-day-overview", category: "Umrah Packages", destination: "Makkah & Madinah", title: "15 Days Umrah Package", duration: "15 days", startingPrice: 230000, currency: "PKR",
      description: "Umrah package with Makkah and Madina accommodation, transport, insurance, return ticket and visa.", highlights: ["Makkah: Mukaram Al Hijra", "Madina: Elaf Quba", "Sharing: PKR 230,000", "Quad: PKR 245,000", "Triple: PKR 255,000", "Double: PKR 285,000"], image: null
    },
    {
      id: "travel-services-overview-new", category: "Travel Services", destination: "Worldwide", title: "Travel Services Overview", duration: "Year-round service", startingPrice: 0, currency: "PKR",
      description: "Core travel services available from Moon Mohsin Travels & Tours.", highlights: ["Flight booking", "Umrah packages", "Hotel booking", "Visa services", "Travel insurance"], image: null
    },
    {
      id: "happy-azadi-umrah-new", category: "Umrah Packages", destination: "Makkah & Madinah", title: "Happy Azadi Month Umrah", duration: "Customizable", startingPrice: 0, currency: "PKR",
      description: "Pakistan Azadi Month Umrah service focused on a comfortable and trusted journey.", highlights: ["Best packages", "Premium hotels", "Air ticket assistance", "Comfortable transport", "Pakistan Zindabad"], image: null
    },
    {
      id: "saudi-multiple-visa-new", category: "Visa Services", destination: "Saudi Arabia", title: "1 Year Multiple Saudi Visa", duration: "1 year validity", startingPrice: 0, currency: "PKR",
      description: "Multiple-entry Saudi visa for business, tourism and family visits.", highlights: ["1 year validity", "Multiple entry", "Safe and reliable", "Quick processing", "Expert support", "Document assistance", "Hassle-free service"], image: null
    },
    {
      id: "arbaeen-iraq-2026-new", category: "Ziyarat", destination: "Najaf → Karbala, Iraq", title: "Arbaeen 2026 In Iraq Ziarat", duration: "Classic 14 days / Shuttle 10 days", startingPrice: 1390, currency: "USD",
      description: "Arbaeen 2026 Azadari in Karbala with a walk from Najaf to Karbala.", highlights: ["Classic: DBL $1,790; TRP $1,590; QUAD $1,390", "Shuttle: TRP $1,450; QUAD $1,190", "Approximately +$150 from Lahore / Islamabad", "Air-ticket, visa, accommodation, meals and transport", "Molana Syed Asif Abbas Shah and Noha Khown accompany group"], image: null
    }
  ],

  // ---------------- CUSTOMER REVIEWS (sample copy) ----------------
  // Keep isPlaceholder:true until these examples are replaced by real,
  // consented customer reviews.
  reviews: [
    {
      name: "Sample Umrah Traveler",
      rating: 5,
      packageType: "Umrah — Executive",
      text: "The itinerary was easy to follow, and having our travel details organized in advance made planning feel much simpler.",
      isPlaceholder: true
    },
    {
      name: "Sample Ziyarat Traveler",
      rating: 5,
      packageType: "Ziyarat — Iran",
      text: "The visit schedule and transport information were clear. It was helpful to have the main arrangements gathered in one place.",
      isPlaceholder: true
    },
    {
      name: "Sample Tour Traveler",
      rating: 4,
      packageType: "Tour — Maldives",
      text: "The destination options were presented clearly, which made it easier to compare the trip details and decide what suited us.",
      isPlaceholder: true
    }
  ],

  // ---------------- GALLERY ----------------
  gallery: [
    { category: "Umrah", caption: "Pilgrims at the Kaaba", image: TRAVEL_IMAGES.kaabaCrowd },
    { category: "Ziyarat", caption: "Masjid an-Nabawi in Madinah", image: TRAVEL_IMAGES.madinah },
    { category: "Hotels", caption: "Tropical resort accommodation", image: TRAVEL_IMAGES.resort },
    { category: "Groups", caption: "Pilgrims gathered in Makkah", image: TRAVEL_IMAGES.kaabaWide },
    { category: "Tours", caption: "Hot-air balloons over Cappadocia", image: TRAVEL_IMAGES.cappadocia },
    { category: "Destinations", caption: "Alpine lake and mountain scenery", image: TRAVEL_IMAGES.northernPakistan },
    { category: "Umrah", caption: "Makkah's Abraj Al Bait towers", image: TRAVEL_IMAGES.makkahClock },
    { category: "Groups", caption: "Pilgrims visiting Masjid an-Nabawi", image: TRAVEL_IMAGES.madinah }
  ],

  travelTypes: ["Umrah", "Ziyarat", "Tour Package", "Flight / Ticket", "Visa Services", "Custom Tour", "Other"]
};
