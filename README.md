# DripAdvisor v1 — Turin

First working version of the app: a mobile web app built on the FindCare mock-up design.

- `index.html`: the whole app (screens, styles, logic). No build step, no dependencies.
- `data/providers.js`: 12 real Turin places (3 per category) from Google Maps listings as of 20 Oct 2026.
- `data/ed-snapshot.js`: a dated copy of the ED feed. It appears first, labelled "Not live", and is replaced by live data once loaded.

## Data sources

- **Emergency departments:** `https://api.prontosoccorso.live/api/piemonte/torino`, loaded live in the browser. It shows how many people are waiting or in treatment at each triage colour. These are counts, not waiting times.
- **Places:** names, addresses, phone numbers and ratings come from Google Maps. Buttons open Google Maps using place IDs. Prices, languages and SSN agreements haven't been collected, and the app says so.

## Run locally

```bash
python3 -m http.server 8765
```

Then open http://localhost:8765. On an iPhone, open the GitHub Pages link in Safari and use Share → Add to Home Screen.
