# BabuIndia.in

Tell Babu what you need from the government — Aadhaar, PAN, passport, ration card, PF and more — in plain English or Hindi, and it sends you straight to the right official page.

> Independent project. Not a Government of India website.

## How it works

Babu is a hand-checked directory of official government pages (`data.js`). When someone types a question, the page matches it against keywords for each service — entirely in the browser, so the question is never sent anywhere — and shows the official link, what to do there, and the helpline.

There is no AI and no server. If Babu can't match a question, it says so and points to the national directories (myScheme and india.gov.in).

## Run locally

No build step — it's plain HTML, CSS and JavaScript.

```bash
python3 -m http.server 4321
```

Then open http://localhost:4321 (add `?lang=hi` for Hindi).

## Files

- `index.html` — page structure
- `styles.css` — design tokens, light/dark themes, layout
- `data.js` — **the directory**: topics, services, official links, helplines, keywords
- `states.js` — portals for all 28 states and 8 union territories (certificates, land records, ration cards, birth registration, complaints, RTI), plus the names, cities and short codes that point a question at a state
- `app.js` — matching, answers, English/Hindi page text
- `tools/check_links.py` — checks every link in `data.js` and `states.js`

## Adding or fixing a service

Edit `data.js`. Each service has an English and Hindi title and one-line instruction, its official links, and keywords. Keywords starting with `~` are "weak" everyday words (like "new" or "name") that only count when the question also matches the service's topic.

To test matching, open the site, then in the browser console run:

```js
babuRank("pan card kho gaya")
```

## States and union territories

Pick a state in any answer (or mention it — "ration card in Patna", "UP bhulekh", "बिहार") and Babu shows that state's own portal. Each record in `states.js` lists its links by category. Cities and aliases are matched as whole words; leave out names that are also everyday words or personal names (Gaya, Puri, Anand…) or that exist in two states. Short codes like `UP` only count when typed in capitals.

To test detection in the browser console:

```js
babuState("caste certificate Jaipur")   // "rajasthan"
```

## Updating the site

After changing any CSS or JS file, bump the `?v=` date on the `<link>` and `<script>` tags in `index.html` so visitors get the new version straight away.

## Checking links

Many government sites block visitors from outside India, so run this from an Indian internet connection:

```bash
python3 tools/check_links.py
```

Update `reviewed` at the top of `data.js` after each check.
