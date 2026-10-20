// DripAdvisor v1 — Turin seed data
// Real places, taken from Google Maps listings on 20 Oct 2026 (sponsored results skipped).
// Ratings are a dated snapshot from Google Maps, not our own reviews.
// Prices, languages, SSN coverage and stock have NOT been collected yet — the app
// shows them as "not yet known" rather than inventing values.
//
// placeId: Google place ID, used to build https://www.google.com/maps/search/?api=1 links.
// edKey:   key in the prontosoccorso.live feed, links a hospital to its live ED counts.

window.DA_SOURCE_DATE = "20 Oct 2026";

window.DA_CATEGORIES = [
  { id: "hospitals", label: "Hospitals & clinics", short: "Hospitals", icon: "hospital", tone: "a" },
  { id: "doctors", label: "Doctors & dentists", short: "Doctors & dentists", icon: "tooth", tone: "b" },
  { id: "pharmacies", label: "Pharmacies", short: "Pharmacies", icon: "pill", tone: "c" },
  { id: "equipment", label: "Medical equipment", short: "Equipment", icon: "equipment", tone: "d" }
];

window.DA_PROVIDERS = [
  // Hospitals & clinics — public hospitals with an emergency department in the live feed
  {
    id: "molinette", category: "hospitals", edKey: "molinette",
    name: "Ospedale Molinette",
    type: "Public university hospital · Città della Salute",
    address: "Corso Bramante, 88, 10126 Torino",
    phone: "+39 011 633 1633",
    web: "https://www.cittadellasalute.to.it/",
    lat: 45.041608, lng: 7.6741324,
    ssn: "public",
    tags: ["Emergency dept.", "SSN public hospital"]
  },
  {
    id: "mauriziano", category: "hospitals", edKey: "mauriziano",
    name: "Ospedale Mauriziano Umberto I",
    type: "Public hospital",
    address: "Corso Carlo e Nello Rosselli, 2, 10128 Torino",
    phone: "+39 011 508 2370",
    web: "https://www.mauriziano.it/",
    lat: 45.050979, lng: 7.6651525,
    ssn: "public",
    tags: ["Emergency dept.", "SSN public hospital"]
  },
  {
    id: "maria_vittoria", category: "hospitals", edKey: "maria_vittoria",
    name: "Ospedale Maria Vittoria",
    type: "Public hospital · ASL Città di Torino",
    address: "Via Cibrario, 72, 10144 Torino",
    phone: "+39 011 439 3111",
    web: "https://www.aslcittaditorino.it/strutture_sanitarie/ospedale-maria-vittoria/",
    lat: 45.0819272, lng: 7.6566328,
    ssn: "public",
    tags: ["Emergency dept.", "SSN public hospital"]
  },

  // Doctors & dentists
  {
    id: "priotti", category: "doctors",
    name: "Studio Odontoiatrico Priotti",
    type: "Dental clinic",
    address: "Corso Vittorio Emanuele II, 52, Torino",
    phone: "+39 011 546876",
    lat: 45.0621303, lng: 7.6813832,
    placeId: "ChIJ4doqp2ltiEcRQmwtddwaxnU",
    rating: 4.8, reviews: 72,
    ssn: "unknown",
    tags: ["Dentist"]
  },
  {
    id: "sabione_dibella", category: "doctors",
    name: "Sabione & Di Bella Dentisti Associati",
    type: "Dental practice",
    address: "Via Giuseppe Luigi Passalacqua, 3, Torino",
    phone: "+39 011 046 4049",
    lat: 45.0753106, lng: 7.6707245,
    placeId: "ChIJAzFFqf9tiEcR85xbLT7Ppq0",
    rating: 4.9, reviews: 422,
    ssn: "unknown",
    tags: ["Dentist"]
  },
  {
    id: "centro_duchessa", category: "doctors",
    name: "Centro Duchessa",
    type: "Poliambulatorio · Medical clinic",
    address: "Via Duchessa Jolanda, 27, Torino",
    phone: "+39 011 434 7237",
    lat: 45.0750809, lng: 7.6587911,
    placeId: "ChIJjQoF2wNtiEcRLobdQ-CvPDg",
    rating: 4.7, reviews: 74,
    ssn: "unknown",
    tags: ["Specialist visits"]
  },

  // Pharmacies
  {
    id: "comunale_42", category: "pharmacies",
    name: "Farmacia Comunale 42",
    type: "Pharmacy · night service",
    address: "Via XX Settembre, 5, Torino",
    phone: "+39 011 543287",
    lat: 45.0643131, lng: 7.6784137,
    placeId: "ChIJt7iDM31tiEcRnzqUBUtakwc",
    rating: 3.5, reviews: 230,
    hoursNote: "Listed as open 24 hours on Google Maps",
    tags: ["Night service", "Near Porta Nuova"]
  },
  {
    id: "anedda", category: "pharmacies",
    name: "Farmacia Anedda",
    type: "Pharmacy",
    address: "Corso Vittorio Emanuele II, 34/B, Torino",
    phone: "+39 011 889677",
    lat: 45.0608074, lng: 7.684965,
    placeId: "ChIJA7HHdGhtiEcRMVXah3NI3M0",
    rating: 4.1, reviews: 237,
    tags: ["San Salvario"]
  },
  {
    id: "masino", category: "pharmacies",
    name: "Farmacia Masino",
    type: "Pharmacy",
    address: "Via Maria Vittoria, 3, Torino",
    phone: "+39 011 563 1569",
    lat: 45.0682182, lng: 7.683621,
    placeId: "ChIJBW_Kym9tiEcR1gzHs5Xpe2o",
    rating: 4.4, reviews: 86,
    tags: ["Centro"]
  },

  // Medical equipment
  {
    id: "ortopedia_cibrario", category: "equipment",
    name: "Ortopedia Sanitaria Cibrario",
    type: "Orthopaedic supplies",
    address: "Via Luigi Cibrario, 48/C, Torino",
    phone: "+39 011 427 6565",
    lat: 45.0802313, lng: 7.6598573,
    placeId: "ChIJCwZ7Nd5tiEcREMdyJ-b8cjo",
    rating: 4.8, reviews: 42,
    tags: ["Orthopaedic supplies"]
  },
  {
    id: "orthosanit", category: "equipment",
    name: "Officina Ortopedica Orthosanit",
    type: "Orthopaedic workshop & shop",
    address: "Corso Monte Grappa, 50/C, Torino",
    phone: "+39 011 776 1668",
    lat: 45.078775, lng: 7.637466,
    placeId: "ChIJtxzJT_RsiEcRA8bmQ2WpgIo",
    rating: 4.3, reviews: 92,
    tags: ["Orthopaedic workshop"]
  },
  {
    id: "ortopedia_san_paolo", category: "equipment",
    name: "Ortopedia San Paolo",
    type: "Orthotics & prosthetics",
    address: "Via San Paolo, 47, Torino",
    phone: "+39 011 264 7440",
    lat: 45.0629822, lng: 7.6507668,
    placeId: "ChIJET4wWY9tiEcR1vLDwate9_U",
    rating: 5.0, reviews: 65,
    tags: ["Orthotics"]
  }
];
