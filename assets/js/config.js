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
    mapEmbedUrl: "", // paste a Google Maps embed src URL here when available
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
    // Only real, confirmed figures should replace these — shown clearly as
    // "placeholder" styling until real data is supplied.
    stats: [
      { value: "[N]+", label: "Years of experience", isPlaceholder: true },
      { value: "[N]+", label: "Travelers served", isPlaceholder: true },
      { value: "[N]+", label: "Destinations covered", isPlaceholder: true },
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
      id: "umrah-economy",
      tier: "Economy",
      name: "Barakah Economy Umrah",
      nights: "10 nights",
      makkahHotel: "3-star hotel, 700m from Haram",
      madinahHotel: "3-star hotel, 600m from Masjid Nabawi",
      roomSharing: "Quad sharing",
      transport: "Shared A/C coach, airport & inter-city transfers",
      visaIncluded: true,
      flightIncluded: true,
      ziyaratIncluded: "Makkah & Madinah Ziyarat included",
      meals: "Breakfast & dinner",
      price: 0, // 0 = "Contact for price" until real pricing supplied
      currency: "USD",
      availability: "Available",
      image: TRAVEL_IMAGES.kaabaCrowd,
      icon: "moon-stars"
    },
    {
      id: "umrah-executive",
      tier: "Executive",
      name: "Rihla Executive Umrah",
      nights: "12 nights",
      makkahHotel: "4-star hotel, 250m from Haram",
      madinahHotel: "4-star hotel, 200m from Masjid Nabawi",
      roomSharing: "Triple sharing",
      transport: "Private A/C coach, airport & inter-city transfers",
      visaIncluded: true,
      flightIncluded: true,
      ziyaratIncluded: "Makkah & Madinah Ziyarat + guided orientation",
      meals: "Full board (breakfast, lunch, dinner)",
      price: 0,
      currency: "USD",
      availability: "Available",
      image: TRAVEL_IMAGES.makkahClock,
      icon: "building-mosque"
    },
    {
      id: "umrah-premium",
      tier: "Premium",
      name: "Noor Premium Umrah (VIP)",
      nights: "14 nights",
      makkahHotel: "5-star hotel, Haram view, 100m walk",
      madinahHotel: "5-star hotel, 50m from Masjid Nabawi",
      roomSharing: "Double / private sharing",
      transport: "Private vehicle with dedicated driver",
      visaIncluded: true,
      flightIncluded: true,
      ziyaratIncluded: "Full guided Ziyarat with private scholar-led group",
      meals: "Full board, premium dining",
      price: 0,
      currency: "USD",
      availability: "Limited seats",
      image: TRAVEL_IMAGES.kaabaWide,
      icon: "crown"
    }
  ],

  // ---------------- ZIYARAT PACKAGES ----------------
  ziyaratPackages: [
    {
      id: "ziyarat-makkah",
      region: "Makkah",
      name: "Makkah Ziyarat Tour",
      duration: "1 day",
      departure: "Daily departures from Makkah hotels",
      hotel: "Included with Umrah stay",
      transport: "A/C coach with guide",
      included: ["Jabal al-Noor", "Jabal Thawr (viewpoint)", "Mina, Muzdalifah, Arafat", "Masjid al-Jinn"],
      price: 0,
      image: TRAVEL_IMAGES.makkahClock
    },
    {
      id: "ziyarat-madinah",
      region: "Madinah",
      name: "Madinah Ziyarat Tour",
      duration: "1 day",
      departure: "Daily departures from Madinah hotels",
      hotel: "Included with Umrah stay",
      transport: "A/C coach with guide",
      included: ["Quba Mosque", "Masjid Qiblatain", "Uhud Mountain", "Baqi Cemetery (exterior)"],
      price: 0,
      image: TRAVEL_IMAGES.madinah
    },
    {
      id: "ziyarat-iran",
      region: "Iran",
      name: "Iran Ziyarat Tour",
      duration: "8 days / 7 nights",
      departure: "Monthly group departures",
      hotel: "3–4 star hotels, twin sharing",
      transport: "Domestic flights + A/C coach",
      included: ["Qom", "Mashhad — Imam Reza (A.S.) shrine", "Shiraz", "Tehran city tour"],
      price: 0,
      image: TRAVEL_IMAGES.quran
    },
    {
      id: "ziyarat-iraq",
      region: "Iraq",
      name: "Iraq Ziyarat Tour",
      duration: "7 days / 6 nights",
      departure: "Monthly group departures",
      hotel: "3–4 star hotels, twin sharing",
      transport: "Domestic transfers + A/C coach",
      included: ["Najaf", "Karbala", "Kadhimiya (Baghdad)", "Samarra"],
      price: 0,
      image: TRAVEL_IMAGES.kaabaWide
    }
  ],

  // ---------------- GENERAL TOUR PACKAGES ----------------
  tourPackages: [
    {
      id: "tour-turkiye",
      category: "International Tours",
      destination: "Türkiye",
      title: "Istanbul & Cappadocia Explorer",
      duration: "7 days / 6 nights",
      startingPrice: 0,
      description: "Ottoman palaces, Bosphorus cruises and hot-air balloons over Cappadocia's valleys.",
      highlights: ["Blue Mosque & Hagia Sophia", "Bosphorus dinner cruise", "Cappadocia balloon ride"],
      image: TRAVEL_IMAGES.cappadocia
    },
    {
      id: "tour-malaysia",
      category: "Family Tours",
      destination: "Malaysia",
      title: "Kuala Lumpur & Genting Family Escape",
      duration: "6 days / 5 nights",
      startingPrice: 0,
      description: "Theme parks, cable cars and city sightseeing built around family pacing.",
      highlights: ["Petronas Towers", "Genting Highlands", "Batu Caves"],
      image: TRAVEL_IMAGES.kualaLumpur
    },
    {
      id: "tour-maldives",
      category: "Honeymoon Tours",
      destination: "Maldives",
      title: "Overwater Villa Honeymoon",
      duration: "5 days / 4 nights",
      startingPrice: 0,
      description: "Private overwater villas, sunset cruises and reef snorkelling for two.",
      highlights: ["Overwater villa stay", "Sunset dolphin cruise", "Private candlelit dinner"],
      image: TRAVEL_IMAGES.maldives
    },
    {
      id: "tour-northern-pk",
      category: "Domestic Tours",
      destination: "Northern Pakistan",
      title: "Hunza & Skardu Valley Tour",
      duration: "8 days / 7 nights",
      startingPrice: 0,
      description: "Snow-capped peaks, glacial lakes and valley culture across the north.",
      highlights: ["Attabad Lake", "Passu Cones", "Skardu Valley"],
      image: TRAVEL_IMAGES.northernPakistan
    },
    {
      id: "tour-thailand-group",
      category: "Group Tours",
      destination: "Thailand",
      title: "Bangkok & Phuket Group Tour",
      duration: "6 days / 5 nights",
      startingPrice: 0,
      description: "A guided group itinerary through city temples and island beaches.",
      highlights: ["Grand Palace", "Phi Phi Islands cruise", "Local market tour"],
      image: TRAVEL_IMAGES.bangkok
    },
    {
      id: "tour-custom",
      category: "Customized Tours",
      destination: "Anywhere",
      title: "Build Your Own Itinerary",
      duration: "Flexible",
      startingPrice: 0,
      description: "Tell us your dates, budget and interests — we design the rest around you.",
      highlights: ["Flexible dates", "Tailored hotels & transport", "Dedicated travel consultant"],
      image: TRAVEL_IMAGES.airplane
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
