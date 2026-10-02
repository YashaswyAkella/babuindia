(() => {
  "use strict";

  const { TOPICS, SERVICES, reviewed } = window.BABU_DATA;

  /* ---------- UI strings ---------- */
  const T = {
    en: {
      skip: "Skip to content",
      notice: "Independent project · Not a Government of India website",
      "nav.topics": "What to ask", "nav.how": "How it works", "nav.sources": "Sources", "nav.faq": "FAQ",
      cta: "Ask Babu", menu: "Menu",
      "stamp.ring": "NO QUEUE • NO TOKEN • NO ‘COME TOMORROW’ •",
      "stamp.center": "APPROVED",
      "hero.eyebrow": "No queue. No token. No ‘come back tomorrow’.",
      "hero.title": "Namaste, India.",
      "hero.lede": "Tell Babu what you need from the sarkar. It sends you straight to the right official page — no agents, no lookalike sites.",
      "ask.label": "Describe what you need",
      "ask.try": "Try",
      "ask.voice": "Voice input coming soon",
      "ask.send": "Ask",
      "promise.free": "Free, no ads", "promise.login": "No login",
      "promise.store": "Your question stays on your device", "promise.cite": "Only official links",
      "topics.title": "What you can ask Babu",
      "topics.sub": "Tap a topic to see its official pages.",
      "topics.ask": "See official pages →",
      "example.title": "What Babu gives you",
      "example.sub": "The right official page, what to do once you’re there, and the helpline — no guesswork.",
      "example.q": "I moved to Pune for work. How do I update the address on my Aadhaar?",
      "how.title": "How Babu works",
      "can.title": "What Babu can do", "cant.title": "What Babu can’t do",
      "sources.title": "Only official sources",
      "sources.sub": "Babu links only to websites run by the Government of India and state governments — almost all on .gov.in and .nic.in. If Babu doesn’t know, it says so.",
      "sources.count": "{p} services, linking to {s} official websites",
      "sources.agency": "PAN cards are handled by two agencies authorised by the Income Tax Department, Protean and UTIITSL, so Babu links to them too.",
      "sources.state": "Ration cards, certificates and land records are run by states. Babu tells you when that’s the case and points you to the official list of state portals.",
      "sources.reviewed": "Links last reviewed: {d}",
      "next.title": "Coming next", "next.tag": "Soon",
      "faq.title": "Questions",
      "closing.title": "Got a sarkari kaam? Ask Babu.",
      "footer.disclaimer": "BabuIndia.in is an independent project. It is not affiliated with, endorsed by or run by the Government of India or any state government. For official information, visit india.gov.in.",
      "chat.who": "Babu",
      "chat.close": "Clear",
      "chat.empty": "Type your question first — for example, how to update your Aadhaar address.",
      "res.lead": "Here’s the official page for that:",
      "res.open": "Open {n}",
      "res.help": "Helpline",
      "res.state": "Run by your state — steps and portals differ from state to state.",
      "res.related": "Not quite? Try:",
      "res.safety": "Babu never asks for your Aadhaar number, OTP or bank details.",
      "res.none": "I couldn’t match that to a service yet.",
      "res.noneTry": "Try a few simple words, like “PAN card lost” or “PF withdraw” — or search these official directories:",
      "res.popular": "People often ask:",
      "res.topicLead": "Official pages for {t}:",
    },
    hi: {
      skip: "मुख्य सामग्री पर जाएँ",
      notice: "स्वतंत्र प्रोजेक्ट · यह भारत सरकार की वेबसाइट नहीं है",
      "nav.topics": "क्या पूछें", "nav.how": "कैसे काम करता है", "nav.sources": "स्रोत", "nav.faq": "सवाल-जवाब",
      cta: "बाबू से पूछें", menu: "मेनू",
      "stamp.ring": "न लाइन • न टोकन • न ‘कल आना’ • न लाइन • न टोकन • न ‘कल आना’ •",
      "stamp.center": "स्वीकृत",
      "hero.eyebrow": "न लाइन, न टोकन, न ‘कल आना’।",
      "hero.title": "नमस्ते, भारत।",
      "hero.lede": "बाबू को बताइए कि सरकार से आपको क्या काम है। वह आपको सीधे सही सरकारी पेज पर ले जाएगा — न एजेंट, न नकली वेबसाइट।",
      "ask.label": "बताइए, आपको क्या चाहिए",
      "ask.try": "पूछकर देखें:",
      "ask.voice": "बोलकर पूछने की सुविधा जल्द आ रही है",
      "ask.send": "पूछें",
      "promise.free": "मुफ़्त, कोई विज्ञापन नहीं", "promise.login": "लॉगिन की ज़रूरत नहीं",
      "promise.store": "आपका सवाल आपके डिवाइस पर ही रहता है", "promise.cite": "सिर्फ़ सरकारी लिंक",
      "topics.title": "बाबू से क्या पूछ सकते हैं",
      "topics.sub": "किसी विषय पर टैप करें और उसके सरकारी पेज देखें।",
      "topics.ask": "सरकारी पेज देखें →",
      "example.title": "बाबू आपको क्या देता है",
      "example.sub": "सही सरकारी पेज, वहाँ जाकर क्या करना है, और हेल्पलाइन — कोई अंदाज़ा नहीं।",
      "example.q": "मैं नौकरी के लिए पुणे आ गया हूँ। आधार में पता कैसे बदलूँ?",
      "how.title": "बाबू कैसे काम करता है",
      "can.title": "बाबू क्या कर सकता है", "cant.title": "बाबू क्या नहीं कर सकता",
      "sources.title": "सिर्फ़ सरकारी स्रोत",
      "sources.sub": "बाबू सिर्फ़ भारत सरकार और राज्य सरकारों की वेबसाइटों के लिंक देता है — लगभग सभी .gov.in और .nic.in पर। अगर बाबू को जवाब नहीं पता, तो वह साफ़ बता देता है।",
      "sources.count": "{p} सेवाएँ, {s} सरकारी वेबसाइटों के लिंक",
      "sources.agency": "पैन कार्ड का काम आयकर विभाग से अधिकृत दो एजेंसियाँ — Protean और UTIITSL — करती हैं, इसलिए बाबू उनके लिंक भी देता है।",
      "sources.state": "राशन कार्ड, प्रमाण पत्र और ज़मीन के रिकॉर्ड राज्य चलाते हैं। ऐसे में बाबू आपको बताता है और राज्य पोर्टलों की आधिकारिक सूची तक पहुँचाता है।",
      "sources.reviewed": "लिंक की आख़िरी जाँच: {d}",
      "next.title": "आगे क्या आ रहा है", "next.tag": "जल्द",
      "faq.title": "सवाल-जवाब",
      "closing.title": "कोई सरकारी काम है? बाबू से पूछिए।",
      "footer.disclaimer": "BabuIndia.in एक स्वतंत्र प्रोजेक्ट है। इसका भारत सरकार या किसी राज्य सरकार से कोई संबंध नहीं है, और न ही यह उनके द्वारा चलाया या समर्थित है। आधिकारिक जानकारी के लिए india.gov.in देखें।",
      "chat.who": "बाबू",
      "chat.close": "हटाएँ",
      "chat.empty": "पहले अपना सवाल लिखें — जैसे, आधार में पता कैसे बदलें।",
      "res.lead": "इसके लिए सरकारी पेज यह है:",
      "res.open": "{n} खोलें",
      "res.help": "हेल्पलाइन",
      "res.state": "यह सेवा राज्य चलाते हैं — हर राज्य में प्रक्रिया और पोर्टल अलग हो सकते हैं।",
      "res.related": "यह नहीं? इन्हें देखें:",
      "res.safety": "बाबू कभी आपका आधार नंबर, OTP या बैंक जानकारी नहीं माँगता।",
      "res.none": "मैं इसे अभी किसी सेवा से नहीं मिला पाया।",
      "res.noneTry": "आसान शब्दों में लिखकर देखें, जैसे “पैन कार्ड खो गया” या “पीएफ निकालना” — या इन सरकारी निर्देशिकाओं में खोजें:",
      "res.popular": "लोग अक्सर पूछते हैं:",
      "res.topicLead": "{t} के सरकारी पेज:",
    },
  };

  /* ---------- Icons ---------- */
  const I = {
    id: '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2"/><path d="M6 16.2c.7-1.3 1.8-2 3-2s2.3.7 3 2M14.5 10h4M14.5 13.5h3"/>',
    card: '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18M7 14.5h4"/>',
    passport: '<rect x="5" y="3" width="14" height="18" rx="2"/><circle cx="12" cy="10.5" r="3.2"/><path d="M8.8 10.5h6.4M12 7.3c1.2 1.6 1.2 4.8 0 6.4M12 7.3c-1.2 1.6-1.2 4.8 0 6.4M9 17.5h6"/>',
    ballot: '<path d="M4 13h16v7H4zM8 13V5h8v8"/><path d="M10 9l1.5 1.5L14.5 7.5"/>',
    wheel: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="2.2"/><path d="M3.6 11h6.2M14.2 11h6.2M12 14.2v6.2"/>',
    car: '<path d="M3 16v-3l2.2-5A2 2 0 0 1 7 7h10a2 2 0 0 1 1.8 1L21 13v3H3z"/><path d="M3 13h18"/><circle cx="7.5" cy="16.5" r="1.6"/><circle cx="16.5" cy="16.5" r="1.6"/>',
    bag: '<path d="M6 8h12l1.2 12H4.8z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8M9 13c1 1.5 5 1.5 6 0"/>',
    rupee: '<path d="M7 5h10M7 9h10M7 5h3a4 4 0 0 1 0 8H7l7 7"/>',
    store: '<path d="M4 9l1.5-5h13L20 9z"/><path d="M5 9v11h14V9M10 20v-5h4v5"/>',
    doc: '<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4M10 12h5M10 15.5h5M10 9h2"/>',
    health: '<path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z"/><path d="M12 10.5v4.5M9.75 12.75h4.5"/>',
    coins: '<ellipse cx="12" cy="6.5" rx="7" ry="2.5"/><path d="M5 6.5v5c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-5M5 11.5v5c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-5"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.4-4.4M11 8.3v5.4M8.3 11h5.4"/>',
    shield: '<path d="M12 3l7.5 3v5.5c0 4.6-3.2 8.3-7.5 9.5-4.3-1.2-7.5-4.9-7.5-9.5V6z"/><path d="M12 8v4.5M12 15.5h.01"/>',
    folder: '<path d="M3.5 7.5a2 2 0 0 1 2-2h4l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z"/><path d="M8 13h8"/>',
    globe: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.5 2.6 3.5 5.5 3.5 8.5s-1 5.9-3.5 8.5c-2.5-2.6-3.5-5.5-3.5-8.5s1-5.9 3.5-8.5z"/>',
    lang: '<path d="M4 6h9M8.5 4v2M6 6c.6 3 2.6 5.5 5.5 7M11 6c-.6 3-2.8 5.6-6 7.2"/><path d="M13 20l3.5-8 3.5 8M14.2 17.3h4.6"/>',
    mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"/>',
    chat: '<path d="M20 12a8 8 0 0 1-11.8 7L4 20l1-4.2A8 8 0 1 1 20 12z"/><path d="M8.5 12h.01M12 12h.01M15.5 12h.01"/>',
    pin: '<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.4"/>',
    phone: '<path d="M5 4h3.5l1.5 4-2 1.5a11 11 0 0 0 6.5 6.5L16 14l4 1.5V19a1.5 1.5 0 0 1-1.6 1.5C10.6 20 4 13.4 3.5 5.6A1.5 1.5 0 0 1 5 4z"/>',
    out: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
  };
  const icon = (name, size = 22) =>
    `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I[name]}</svg>`;

  const CHIP_TOPICS = ["aadhaar", "passport", "health", "complaints"];
  const POPULAR = ["aadhaar-update", "pan-reprint", "pf-withdraw", "cyber-fraud"];
  const DIRECTORIES = ["https://www.myscheme.gov.in/find-scheme", "https://www.india.gov.in/services"];

  /* ---------- Section content ---------- */
  const STEPS = {
    en: [
      ["Say what you need", "Type in English or Hindi, the way you’d ask a friend. No forms, no login."],
      ["Babu finds the right service", "It matches your question against a hand-checked list of official government pages."],
      ["Go straight to the official page", "Apply, check a status or download a document there — no agents, no lookalike sites."],
    ],
    hi: [
      ["जो चाहिए, लिखिए", "अंग्रेज़ी या हिंदी में वैसे ही लिखें जैसे किसी दोस्त से पूछते। न फ़ॉर्म, न लॉगिन।"],
      ["बाबू सही सेवा खोजता है", "वह आपके सवाल को जाँचे-परखे सरकारी पेजों की सूची से मिलाता है।"],
      ["सीधे सरकारी पेज पर जाएँ", "आवेदन, स्टेटस या डाउनलोड वहीं करें — न एजेंट, न नकली वेबसाइट।"],
    ],
  };

  const CAN = {
    en: ["Point you to the exact official page", "Tell you what to do once you’re there", "Give you the official helpline number", "Tell you when a service is run by your state"],
    hi: ["सही सरकारी पेज बताना", "वहाँ जाकर क्या करना है, यह बताना", "आधिकारिक हेल्पलाइन नंबर देना", "बताना कि कोई सेवा राज्य चलाता है"],
  };
  const CANT = {
    en: ["Fill in or submit forms for you", "See your application status or personal records", "Pull strings or skip the queue — there’s no ‘setting’ with Babu", "Give legal or financial advice"],
    hi: ["आपके लिए फ़ॉर्म भरना या जमा करना", "आपके आवेदन का स्टेटस या निजी रिकॉर्ड देखना", "जुगाड़ लगाना या लाइन तोड़ना — बाबू के यहाँ कोई ‘सेटिंग’ नहीं चलती", "कानूनी या वित्तीय सलाह देना"],
  };

  const NEXT = {
    en: [
      ["lang", "More Indian languages", "Tamil, Telugu, Bengali, Marathi and more."],
      ["mic", "Speak your question", "Voice input for people who’d rather talk than type."],
      ["chat", "Babu on WhatsApp", "Ask from the app you already use every day."],
      ["pin", "Answers for your state", "Rules and portals specific to where you live."],
    ],
    hi: [
      ["lang", "और भारतीय भाषाएँ", "तमिल, तेलुगु, बांग्ला, मराठी और भी।"],
      ["mic", "बोलकर पूछें", "उनके लिए जो लिखने से ज़्यादा बोलना पसंद करते हैं।"],
      ["chat", "व्हाट्सऐप पर बाबू", "उसी ऐप से पूछें जो आप रोज़ इस्तेमाल करते हैं।"],
      ["pin", "आपके राज्य के हिसाब से जवाब", "जहाँ आप रहते हैं, वहाँ के नियम और पोर्टल।"],
    ],
  };

  const FAQ = {
    en: [
      ["Is Babu a government website?", "No. BabuIndia.in is an independent project. It is not run, funded or endorsed by the Government of India or any state government. For official services, always use the linked government portal."],
      ["Why the name ‘Babu’?", "In India, ‘babu’ is the everyday word for a government clerk. Our Babu is the helpful kind — no queue, no token, no ‘come back tomorrow’."],
      ["Is it free?", "Yes. No ads, no paid listings, no agents or middlemen."],
      ["Will Babu ask for my Aadhaar number or OTP?", "Never. Babu doesn’t need your Aadhaar, PAN, OTP, passwords or bank details. If anyone claiming to be Babu asks for them, it’s a scam."],
      ["Where does my question go?", "Nowhere. Babu matches your question to a service right here in your browser. It isn’t sent to us or stored."],
      ["How do I spot a fake government website?", "Check the address bar. Real government sites end in .gov.in or .nic.in. Fakes often tack extra words on the end — like dc.crsorgi.gov.in.something.in. Babu only links to the real addresses."],
      ["Can Babu send me to the wrong page?", "It can pick the wrong service, and government sites change. Check that the page you land on is what you need. Links were last reviewed in {d}."],
      ["Which languages does Babu speak?", "English and Hindi for now, with more Indian languages on the way."],
      ["My state does things differently.", "Many services — ration cards, certificates, land records — are run by states. Babu tells you when that’s the case and points you to the official list of state portals."],
    ],
    hi: [
      ["क्या बाबू सरकारी वेबसाइट है?", "नहीं। BabuIndia.in एक स्वतंत्र प्रोजेक्ट है। इसे भारत सरकार या कोई राज्य सरकार न चलाती है, न इसका खर्च उठाती है और न इसका समर्थन करती है। आधिकारिक सेवाओं के लिए हमेशा लिंक किए गए सरकारी पोर्टल का ही इस्तेमाल करें।"],
      ["नाम ‘बाबू’ क्यों?", "भारत में सरकारी दफ़्तर के क्लर्क को आम तौर पर ‘बाबू’ कहते हैं। हमारा बाबू मददगार है — न लाइन, न टोकन, न ‘कल आना’।"],
      ["क्या यह मुफ़्त है?", "हाँ। कोई विज्ञापन नहीं, कोई पेड लिस्टिंग नहीं, कोई एजेंट या बिचौलिया नहीं।"],
      ["क्या बाबू मेरा आधार नंबर या OTP माँगेगा?", "कभी नहीं। बाबू को आपका आधार, पैन, OTP, पासवर्ड या बैंक जानकारी नहीं चाहिए। अगर बाबू के नाम पर कोई इन्हें माँगे, तो वह धोखाधड़ी है।"],
      ["मेरा सवाल कहाँ जाता है?", "कहीं नहीं। बाबू आपके सवाल को आपके ब्राउज़र में ही किसी सेवा से मिलाता है। यह न हमें भेजा जाता है, न सेव होता है।"],
      ["नकली सरकारी वेबसाइट कैसे पहचानें?", "ब्राउज़र में पता देखें। असली सरकारी साइटें .gov.in या .nic.in पर ख़त्म होती हैं। नकली साइटें अक्सर आख़िर में अतिरिक्त शब्द जोड़ देती हैं — जैसे dc.crsorgi.gov.in.something.in। बाबू सिर्फ़ असली पतों के लिंक देता है।"],
      ["क्या बाबू मुझे ग़लत पेज पर भेज सकता है?", "वह ग़लत सेवा चुन सकता है, और सरकारी साइटें बदलती रहती हैं। देख लें कि जिस पेज पर पहुँचे हैं, वही आपको चाहिए। लिंक की आख़िरी जाँच {d} में हुई थी।"],
      ["बाबू कौन-सी भाषाएँ बोलता है?", "अभी अंग्रेज़ी और हिंदी, जल्द ही और भारतीय भाषाएँ।"],
      ["मेरे राज्य में नियम अलग हैं।", "राशन कार्ड, प्रमाण पत्र और ज़मीन के रिकॉर्ड जैसी कई सेवाएँ राज्य चलाते हैं। ऐसे में बाबू आपको बताता है और राज्य पोर्टलों की आधिकारिक सूची तक पहुँचाता है।"],
    ],
  };

  /* ---------- Helpers ---------- */
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const host = (u) => new URL(u).hostname.replace(/^www\./, "");
  const fill = (s, vars) => s.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? "");
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch { /* ignore */ } },
  };
  const topicById = Object.fromEntries(TOPICS.map((tp) => [tp.id, tp]));
  const serviceById = Object.fromEntries(SERVICES.map((s) => [s.id, s]));

  let lang = "en";
  const t = (k) => T[lang][k] ?? T.en[k] ?? k;

  /* ---------- Matching ----------
     Everything runs in the browser; the question is never sent anywhere. */
  const norm = (s) => s.toLowerCase()
    .normalize("NFD")
    .replace(/़/g, "")         // Devanagari nukta: फ़ = फ
    .replace(/ँ/g, "ं")   // chandrabindu ≈ anusvara
    .replace(/[^\p{L}\p{N}\p{M}]+/gu, " ")
    .trim();
  const escRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  function matcher(kw) {
    const weak = kw.startsWith("~");
    const k = norm(weak ? kw.slice(1) : kw);
    const points = weak ? 1 : 3 + (k.includes(" ") ? 1 : 0);
    if (/[ऀ-ॿ]/.test(k)) return { weak, points, test: (text) => text.includes(k) };
    // Short Latin words must match a whole word; longer ones match the start of a word.
    const re = new RegExp(`(^| )${escRe(k)}${k.length <= 3 ? "( |$)" : ""}`);
    return { weak, points, test: (text) => re.test(text) };
  }
  const topicMatchers = Object.fromEntries(TOPICS.map((tp) => [tp.id, tp.kw.map(matcher)]));
  const serviceMatchers = SERVICES.map((s) => ({ s, m: s.kw.map(matcher) }));

  function rank(q) {
    const text = norm(q);
    const topicHit = {};
    for (const tp of TOPICS) topicHit[tp.id] = topicMatchers[tp.id].some((m) => m.test(text)) ? 2 : 0;
    return serviceMatchers
      .map(({ s, m }, order) => {
        const inTopic = topicHit[s.topic] > 0;
        // Weak (everyday) words only help pick between services inside a matched topic.
        const own = m.reduce((sum, x) => sum + ((!x.weak || inTopic) && x.test(text) ? x.points : 0), 0);
        return { s, score: own + topicHit[s.topic], own, order };
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score || b.own - a.own || a.order - b.order);
  }

  /* ---------- Answer rendering ---------- */
  const linkName = (l) => (lang === "hi" && l.nh) || l.n;
  const outLink = (u, inner, cls = "") =>
    `<a${cls ? ` class="${cls}"` : ""} href="${esc(u)}" target="_blank" rel="noopener noreferrer">${inner}</a>`;

  function serviceCard(svc) {
    const L = svc[lang];
    const [first, ...rest] = svc.links;
    return `
      <div class="svc">
        <div class="svc-topic">${icon(topicById[svc.topic].icon, 16)}<span>${esc(topicById[svc.topic][lang].t)}</span></div>
        <h4>${esc(L.t)}</h4>
        <p>${esc(L.s)}</p>
        <div class="svc-links">
          ${outLink(first.u, `<span>${esc(fill(t("res.open"), { n: linkName(first) }))}</span><small>${esc(host(first.u))}</small>${icon("out", 16)}`, "go")}
          ${rest.map((l) => outLink(l.u, `<span>${esc(linkName(l))}</span><small>${esc(host(l.u))}</small>${icon("out", 14)}`, "go go-2")).join("")}
        </div>
        ${svc.help ? `<p class="svc-help">${icon("phone", 16)}<span>${esc(t("res.help"))}: <a href="tel:${esc(svc.help.replace(/\s/g, ""))}">${esc(svc.help)}</a></span></p>` : ""}
        ${svc.state ? `<p class="svc-state">${icon("pin", 16)}<span>${esc(t("res.state"))}</span></p>` : ""}
      </div>`;
  }

  const svcChip = (s) => `<button type="button" class="chip" data-svc="${esc(s.id)}">${esc(s[lang].t)}</button>`;

  function relatedFor(best, ranked) {
    // Other likely matches: same topic, or a strong match elsewhere. Then fill with siblings.
    const out = ranked.filter((r) => r.s !== best && (r.s.topic === best.topic || r.score >= 4)).slice(0, 2).map((r) => r.s);
    for (const s of SERVICES) {
      if (out.length >= 3) break;
      if (s.topic === best.topic && s !== best && !out.includes(s)) out.push(s);
    }
    return out;
  }

  function answerHTML(best, related) {
    return `
      <span class="who">${esc(t("chat.who"))}</span>
      <p class="res-lead">${esc(t("res.lead"))}</p>
      ${serviceCard(best)}
      ${related.length ? `<p class="res-related">${esc(t("res.related"))}</p><div class="chips chips-left">${related.map(svcChip).join("")}</div>` : ""}
      <p class="res-safety">${esc(t("res.safety"))}</p>`;
  }

  function noMatchHTML() {
    return `
      <span class="who">${esc(t("chat.who"))}</span>
      <p>${esc(t("res.none"))}</p>
      <p>${esc(t("res.noneTry"))}</p>
      <div class="svc-links">${DIRECTORIES.map((u) => outLink(u, `<span>${esc(host(u))}</span>${icon("out", 14)}`, "go go-2")).join("")}</div>
      <p class="res-related">${esc(t("res.popular"))}</p>
      <div class="chips chips-left">${POPULAR.map((id) => svcChip(serviceById[id])).join("")}</div>`;
  }

  function topicHTML(tp) {
    const list = SERVICES.filter((s) => s.topic === tp.id);
    return `
      <span class="who">${esc(t("chat.who"))}</span>
      <p class="res-lead">${esc(fill(t("res.topicLead"), { t: tp[lang].t }))}</p>
      <div class="svc-list">${list.map(serviceCard).join("")}</div>
      <p class="res-safety">${esc(t("res.safety"))}</p>`;
  }

  /* ---------- Chat ---------- */
  const chat = $("#chat");
  const textarea = $("#q");
  let lastView = null; // re-render the open answer when the language changes

  function showChat(userText, babuHTML, view) {
    lastView = view;
    chat.hidden = false;
    chat.innerHTML = `
      ${userText ? `<div class="bubble me">${esc(userText)}</div>` : ""}
      <div class="bubble babu"><span class="who">${esc(t("chat.who"))}</span><span class="typing" aria-label="…"><i></i><i></i><i></i></span></div>`;
    const reveal = () => {
      chat.lastElementChild.innerHTML = babuHTML();
      chat.insertAdjacentHTML("beforeend", `<button type="button" class="chat-close">${esc(t("chat.close"))}</button>`);
      if (chat.getBoundingClientRect().top > window.innerHeight * 0.6) chat.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    view.instant ? reveal() : setTimeout(reveal, 450);
  }

  function ask(q) {
    q = q.trim();
    if (!q) {
      showChat("", () => `<span class="who">${esc(t("chat.who"))}</span><p>${esc(t("chat.empty"))}</p>`, { type: "empty", instant: true });
      textarea.focus();
      return;
    }
    const ranked = rank(q);
    const best = ranked[0]?.s;
    showChat(q, () => (best ? answerHTML(best, relatedFor(best, ranked)) : noMatchHTML()), { type: "ask", q });
    textarea.value = ""; autoGrow();
  }

  function showService(id) {
    const s = serviceById[id];
    showChat(s[lang].t, () => answerHTML(s, relatedFor(s, [])), { type: "service", id });
  }

  function showTopic(id) {
    const tp = topicById[id];
    showChat(tp[lang].t, () => topicHTML(tp), { type: "topic", id });
  }

  function rerenderChat() {
    if (!lastView || chat.hidden) return;
    const v = { ...lastView, instant: true };
    if (v.type === "ask") {
      const ranked = rank(v.q);
      const best = ranked[0]?.s;
      showChat(v.q, () => (best ? answerHTML(best, relatedFor(best, ranked)) : noMatchHTML()), v);
    } else if (v.type === "service") {
      const s = serviceById[v.id];
      showChat(s[lang].t, () => answerHTML(s, relatedFor(s, [])), v);
    } else if (v.type === "topic") {
      const tp = topicById[v.id];
      showChat(tp[lang].t, () => topicHTML(tp), v);
    } else {
      chat.hidden = true; chat.innerHTML = ""; lastView = null;
    }
  }

  /* ---------- Page sections ---------- */
  function renderStatic() {
    document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      el.dataset.i18nAttr.split(",").forEach((pair) => {
        const [attr, key] = pair.split(":");
        el.setAttribute(attr, t(key));
      });
    });
  }

  function renderChips() {
    $("#chips").innerHTML = CHIP_TOPICS.map((id) => {
      const q = topicById[id][lang].q;
      return `<button type="button" class="chip" data-q="${esc(q)}">${esc(q)}</button>`;
    }).join("");
  }

  function renderTopics() {
    $("#topic-grid").innerHTML = TOPICS.map((tp) => `
      <button type="button" class="topic" data-topic="${esc(tp.id)}">
        <span class="topic-icon">${icon(tp.icon)}</span>
        <h3>${esc(tp[lang].t)}</h3>
        <p>${esc(tp[lang].d)}</p>
        <span class="ask-link">${esc(t("topics.ask"))}</span>
      </button>`).join("");
  }

  function renderExample() {
    const s = serviceById["aadhaar-update"];
    $("#answer-card").innerHTML = `
      <div class="bubble me">${esc(t("example.q"))}</div>
      <div class="bubble babu">${answerHTML(s, [])}</div>`;
  }

  function renderHow() {
    $("#steps").innerHTML = STEPS[lang].map(([h, p], i) => `
      <li class="step"><div class="num">${i + 1}</div><h3>${esc(h)}</h3><p>${esc(p)}</p></li>`).join("");
    $("#can-list").innerHTML = CAN[lang].map((x) => `<li>${esc(x)}</li>`).join("");
    $("#cant-list").innerHTML = CANT[lang].map((x) => `<li>${esc(x)}</li>`).join("");
  }

  function renderSources() {
    const hosts = [...new Set(SERVICES.flatMap((s) => s.links.map((l) => host(l.u))))].sort();
    $("#source-groups").innerHTML = `
      <p class="source-count">${esc(fill(t("sources.count"), { p: SERVICES.length, s: hosts.length }))}</p>
      <ul class="source-cloud">${hosts.map((h) => `<li>${outLink(`https://${h}/`, esc(h))}</li>`).join("")}</ul>
      <div class="source-notes">
        <p>${esc(t("sources.agency"))}</p>
        <p>${esc(t("sources.state"))}</p>
        <p class="reviewed">${esc(fill(t("sources.reviewed"), { d: reviewed[lang] }))}</p>
      </div>`;
  }

  function renderNext() {
    $("#next-grid").innerHTML = NEXT[lang].map(([ic, h, p]) => `
      <div class="next-card">
        <div class="next-top"><span class="topic-icon">${icon(ic)}</span><span class="tag">${esc(t("next.tag"))}</span></div>
        <h3>${esc(h)}</h3><p>${esc(p)}</p>
      </div>`).join("");
  }

  function renderFaq() {
    $("#faq-list").innerHTML = FAQ[lang].map(([q, a]) =>
      `<details><summary>${esc(q)}</summary><p>${esc(fill(a, { d: reviewed[lang] }))}</p></details>`).join("");
  }

  /* Scale the stamp's ring text so it wraps the circle exactly once */
  function fitStamp() {
    const ring = $(".stamp-ring");
    if (!ring || !ring.getComputedTextLength) return;
    ring.setAttribute("font-size", "13");
    const len = ring.getComputedTextLength();
    if (len > 0) ring.setAttribute("font-size", String(Math.max(9, Math.min(16, 13 * 418 / len)).toFixed(2)));
  }
  if (document.fonts) document.fonts.ready.then(fitStamp);

  function setLang(next, persist = true) {
    lang = T[next] ? next : "en";
    document.documentElement.lang = lang;
    document.querySelectorAll(".lang-toggle button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    renderStatic(); renderChips(); renderTopics(); renderExample(); renderHow(); renderSources(); renderNext(); renderFaq();
    resetPlaceholder();
    fitStamp();
    rerenderChat();
    if (persist) store.set("babu.lang", lang);
  }

  /* ---------- Rotating placeholder ---------- */
  let phIndex = 0, phTimer = null;
  function resetPlaceholder() {
    phIndex = 0; showPlaceholder();
    clearInterval(phTimer);
    phTimer = setInterval(() => { if (!textarea.value && document.activeElement !== textarea) { phIndex = (phIndex + 1) % TOPICS.length; showPlaceholder(); } }, 3200);
  }
  function showPlaceholder() { textarea.placeholder = `${t("ask.try")} ‘${TOPICS[phIndex][lang].q}’`; autoGrow(); }

  function autoGrow() {
    textarea.style.height = "auto";
    textarea.style.height = Math.min(textarea.scrollHeight, 180) + "px";
    textarea.style.overflowY = textarea.scrollHeight > 180 ? "auto" : "hidden";
  }
  textarea.addEventListener("input", autoGrow);
  textarea.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey && !e.isComposing) { e.preventDefault(); $("#ask-form").requestSubmit(); }
  });

  $("#ask-form").addEventListener("submit", (e) => { e.preventDefault(); ask(textarea.value); });

  const toAsk = () => $("#ask").scrollIntoView({ behavior: "smooth", block: "start" });

  document.addEventListener("click", (e) => {
    const topicBtn = e.target.closest("[data-topic]");
    if (topicBtn) { showTopic(topicBtn.dataset.topic); toAsk(); return; }
    const svcBtn = e.target.closest("[data-svc]");
    if (svcBtn) { showService(svcBtn.dataset.svc); return; }
    const qBtn = e.target.closest("[data-q]");
    if (qBtn) { ask(qBtn.dataset.q); return; }
    if (e.target.closest(".chat-close")) { chat.hidden = true; chat.innerHTML = ""; lastView = null; textarea.focus(); return; }
    const langBtn = e.target.closest(".lang-toggle button");
    if (langBtn) { setLang(langBtn.dataset.lang); return; }
    const menuBtn = e.target.closest(".menu-btn");
    if (menuBtn) {
      const open = $("#nav").classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
      return;
    }
    if (e.target.closest("#nav a")) { $("#nav").classList.remove("open"); $(".menu-btn").setAttribute("aria-expanded", "false"); }
  });

  /* ---------- Header border on scroll ---------- */
  const header = $(".site-header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  /* ---------- Init ---------- */
  const params = new URLSearchParams(location.search);
  const urlLang = params.get("lang");
  const saved = store.get("babu.lang");
  const browserHi = (navigator.language || "").toLowerCase().startsWith("hi");
  setLang(urlLang || saved || (browserHi ? "hi" : "en"), Boolean(urlLang));

  // Expose the matcher for quick checks in the console: babuRank("pan card lost")
  window.babuRank = (q) => rank(q).slice(0, 3).map((r) => `${r.s.id} (${r.score})`);
})();
