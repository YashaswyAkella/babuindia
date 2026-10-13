# BabuIndia

Tell Babu what you need from the government — Aadhaar, PAN, passport, ration card, PF and more — in English, Hindi, Marathi, Gujarati, Punjabi, Telugu, Tamil, Kannada, Malayalam, Bengali or Odia, and it sends you straight to the right official page.

> Independent project. Not a Government of India website.

**Live site:** https://yashaswyakella.github.io/babuindia/ (hosted free on GitHub Pages from this repository's `main` branch)

## How it works

Babu is a hand-checked directory of official government pages (`data.js`). When someone types a question, the page matches it against keywords for each service — entirely in the browser, so the question is never sent anywhere — and shows the official link, what to do there, and the helpline.

There is no AI and no server. If Babu can't match a question, it says so and points to the national directories (myScheme and india.gov.in).

## Run locally

No build step — it's plain HTML, CSS and JavaScript.

```bash
python3 -m http.server 4321
```

Then open http://localhost:4321 (add `?lang=hi`, `mr`, `gu`, `pa`, `te`, `ta`, `kn`, `ml`, `bn` or `or` to pick a language).

## Files

- `index.html` — page structure
- `styles.css` — design tokens, light/dark themes, layout
- `data.js` — **the directory**: topics, services, official links, helplines, keywords
- `states.js` — portals for all 28 states and 8 union territories (certificates, land records, ration cards, birth registration, complaints, RTI), plus the names, cities and short codes that point a question at a state
- `strings.js` — interface text in English and Hindi
- `lang/` — one file per extra language (`mr`, `gu`, `pa`, `te`, `ta`, `kn`, `ml`, `bn`, `or`): interface text, topics, services, state names and keywords in that script. `lang/source.en.json` is the English source they were translated from
- `app.js` — matching, answers, language switching
- `tools/check_links.py` — checks every link in `data.js` and `states.js`
- `tools/check_lang.py` — checks a language file is complete (`python3 tools/check_lang.py te`)

## Adding or fixing a service

Edit `data.js`. Each service has an English and Hindi title and one-line instruction, its official links, and keywords. Keywords starting with `~` are "weak" everyday words (like "new" or "name") that only count when the question also matches the service's topic.

To test matching, open the site, then in the browser console run:

```js
babuRank("pan card kho gaya")
```

## Languages

English and Hindi text lives in `strings.js`, `data.js` and `states.js`. Every other language is one file in `lang/`, loaded by `index.html`. Each file holds the interface text, the topics and services, state names, and **keywords in that script**. Those keywords are always active, so a question typed in Tamil finds the right service even while the page is in English. Anything a file leaves out falls back to English.

Keyword rules are the same as in `data.js`: `~` marks a weak everyday word, and `=` makes a short word match only as a whole word (in Indian scripts a keyword otherwise matches anywhere inside the text, so endings like ఆధార్‌లో still match ఆధార్).

To add a language: translate `lang/source.en.json` into `lang/<code>.js` in the same format as the existing files, run `python3 tools/check_lang.py <code>` until it reports no errors, add a `<script>` tag for it in `index.html`, and add its fonts to `FONTS` in `app.js` and to the font rules in `styles.css`. If you change English text, rebuild the source with `osascript -l JavaScript tools/extract_source.js "$PWD" > lang/source.en.json` (macOS) and update each language.

**Translation disclaimer.** The translations into Indian languages (Hindi included) were made by AI and checked automatically for completeness, script and matching — not by native speakers. The site says so in three places: a banner at the top of every non-English page (with a one-tap switch to English), a line in the footer, and an FAQ entry. The footer also says Babu gives general information only, is not legal advice, and cannot guarantee every link or detail is current. Keep these notices in every language if you edit the text, and have native speakers review the translations when you can.

These notices lower the risk but are not legal advice themselves; if the site grows, have a lawyer review the disclaimer and consider adding a terms of use page.

## States and union territories

Pick a state in any answer (or mention it — "ration card in Patna", "UP bhulekh", "बिहार") and Babu shows that state's own portal. Each record in `states.js` lists its links by category. Cities and aliases are matched as whole words; leave out names that are also everyday words or personal names (Gaya, Puri, Anand…) or that exist in two states. Short codes like `UP` only count when typed in capitals.

To test detection in the browser console:

```js
babuState("caste certificate Jaipur")   // "rajasthan"
```

## Updating the site

The site is served by GitHub Pages from the root of the `main` branch of [YashaswyAkella/babuindia](https://github.com/YashaswyAkella/babuindia). To publish a change:

1. In the repository on GitHub, choose **Add file → Upload files** and drop in the changed files (files with the same name are replaced). Keep the folder layout — `tools/check_links.py` goes in a `tools` folder.
2. Click **Commit changes**.
3. Watch the **Actions** tab: when the "pages build and deployment" run turns green (usually a minute or two), the update is live at https://yashaswyakella.github.io/babuindia/.

Before uploading, bump the `?v=` date on the `<link>` and `<script>` tags in `index.html` whenever you change a CSS or JS file, so visitors' browsers fetch the new version instead of an old cached copy.

All links in the site are relative (`styles.css`, `app.js`, `#topics`…), so it works under the `/babuindia/` path without changes. If you later connect your own domain (repository **Settings → Pages → Custom domain**), nothing in the code needs to change either.

## Checking links

Many government sites block visitors from outside India, so run this from an Indian internet connection:

```bash
python3 tools/check_links.py
```

Update `reviewed` at the top of `data.js` after each check.
