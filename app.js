(() => {
  "use strict";

  const { TOPICS, SERVICES, reviewed } = window.BABU_DATA;
  const STATES = window.BABU_STATES || [];

  /* ---------- UI strings ---------- */
  const T = {
    en: {
      skip: "Skip to content",
      notice: "Independent project · Not a Government of India website",
      "nav.topics": "What to ask", "nav.states": "States", "nav.how": "How it works", "nav.sources": "Sources", "nav.faq": "FAQ",
      cta: "Ask Babu", menu: "Menu",
      "states.title": "Your state or union territory",
      "states.sub": "All 28 states and 8 union territories. Pick yours to see its official portals for certificates, land records, ration cards and complaints.",
      "states.all": "All states and union territories",
      "st.pickLabel": "Your state or UT",
      "st.choose": "Choose…",
      "st.states": "States", "st.uts": "Union territories",
      "st.state": "State", "st.ut": "Union territory",
      "st.portalsFor": "Official portals for {s}:",
      "st.none": "We don’t have a checked {s} portal for this yet — use the national link below.",
      "st.chip": "{s}: official portals",
      "st.change": "Another state or UT:",
      "cat.portal": "State government", "cat.portalUt": "UT administration", "cat.services": "Certificates & services", "cat.land": "Land records",
      "cat.ration": "Ration card", "cat.birth": "Birth & death registration", "cat.grievance": "Complaints", "cat.rti": "RTI",
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
      "sources.count": "{p} services and {n} states & UTs, linking to {s} official websites",
      "sources.statesNote": "State and UT portals are listed under ‘Your state or union territory’.",
      "sources.agency": "PAN cards are handled by two agencies authorised by the Income Tax Department, Protean and UTIITSL, so Babu links to them too.",
      "sources.state": "Ration cards, certificates and land records are run by states. Pick your state and Babu shows its own portals.",
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
      "res.state": "Run by your state — choose yours to get its own portal.",
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
      "nav.topics": "क्या पूछें", "nav.states": "राज्य", "nav.how": "कैसे काम करता है", "nav.sources": "स्रोत", "nav.faq": "सवाल-जवाब",
      cta: "बाबू से पूछें", menu: "मेनू",
      "states.title": "आपका राज्य या केंद्र शासित प्रदेश",
      "states.sub": "सभी 28 राज्य और 8 केंद्र शासित प्रदेश। अपना चुनें और प्रमाण पत्र, ज़मीन के रिकॉर्ड, राशन कार्ड और शिकायतों के सरकारी पोर्टल देखें।",
      "states.all": "सभी राज्य और केंद्र शासित प्रदेश",
      "st.pickLabel": "आपका राज्य या केंद्र शासित प्रदेश",
      "st.choose": "चुनें…",
      "st.states": "राज्य", "st.uts": "केंद्र शासित प्रदेश",
      "st.state": "राज्य", "st.ut": "केंद्र शासित प्रदेश",
      "st.portalsFor": "{s} के सरकारी पोर्टल:",
      "st.none": "इसके लिए {s} का जाँचा हुआ पोर्टल अभी हमारे पास नहीं है — नीचे दिया राष्ट्रीय लिंक इस्तेमाल करें।",
      "st.chip": "{s}: सरकारी पोर्टल",
      "st.change": "कोई और राज्य या केंद्र शासित प्रदेश:",
      "cat.portal": "राज्य सरकार", "cat.portalUt": "केंद्र शासित प्रदेश प्रशासन", "cat.services": "प्रमाण पत्र और सेवाएँ", "cat.land": "ज़मीन के रिकॉर्ड",
      "cat.ration": "राशन कार्ड", "cat.birth": "जन्म और मृत्यु पंजीकरण", "cat.grievance": "शिकायतें", "cat.rti": "आरटीआई",
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
      "sources.count": "{p} सेवाएँ और {n} राज्य व केंद्र शासित प्रदेश, {s} सरकारी वेबसाइटों के लिंक",
      "sources.statesNote": "राज्यों और केंद्र शासित प्रदेशों के पोर्टल ‘आपका राज्य या केंद्र शासित प्रदेश’ हिस्से में हैं।",
      "sources.agency": "पैन कार्ड का काम आयकर विभाग से अधिकृत दो एजेंसियाँ — Protean और UTIITSL — करती हैं, इसलिए बाबू उनके लिंक भी देता है।",
      "sources.state": "राशन कार्ड, प्रमाण पत्र और ज़मीन के रिकॉर्ड राज्य चलाते हैं। अपना राज्य चुनें और बाबू उसी के पोर्टल दिखाएगा।",
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
      "res.state": "यह सेवा राज्य चलाते हैं — अपना राज्य चुनें और उसका पोर्टल पाएँ।",
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
    en: ["Point you to the exact official page", "Tell you what to do once you’re there", "Give you the official helpline number", "Show your own state’s portals"],
    hi: ["सही सरकारी पेज बताना", "वहाँ जाकर क्या करना है, यह बताना", "आधिकारिक हेल्पलाइन नंबर देना", "आपके राज्य के अपने पोर्टल दिखाना"],
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
      ["pin", "Help centres near you", "Find the nearest Common Service Centre or government office."],
    ],
    hi: [
      ["lang", "और भारतीय भाषाएँ", "तमिल, तेलुगु, बांग्ला, मराठी और भी।"],
      ["mic", "बोलकर पूछें", "उनके लिए जो लिखने से ज़्यादा बोलना पसंद करते हैं।"],
      ["chat", "व्हाट्सऐप पर बाबू", "उसी ऐप से पूछें जो आप रोज़ इस्तेमाल करते हैं।"],
      ["pin", "आपके पास सहायता केंद्र", "नज़दीकी कॉमन सर्विस सेंटर या सरकारी दफ़्तर खोजें।"],
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
      ["My state does things differently.", "Many services — ration cards, certificates, land records — are run by states. Pick your state (or just mention it, like “ration card in Bihar”) and Babu shows that state’s own portals."],
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
      ["मेरे राज्य में नियम अलग हैं।", "राशन कार्ड, प्रमाण पत्र और ज़मीन के रिकॉर्ड जैसी कई सेवाएँ राज्य चलाते हैं। अपना राज्य चुनें (या सवाल में लिखें, जैसे “बिहार में राशन कार्ड”) और बाबू उसी राज्य के पोर्टल दिखाएगा।"],
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
  const has = (o, k) => k != null && Object.prototype.hasOwnProperty.call(o, k); // ignores "__proto__", "constructor"…
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
    if (weak) kw = kw.slice(1);
    const whole = kw.startsWith("="); // "=कार": whole word only, so it doesn't match inside "कार्ड"
    const k = norm(whole ? kw.slice(1) : kw);
    const points = weak ? 1 : 3 + (k.includes(" ") ? 1 : 0);
    if (/[ऀ-ॿ]/.test(k) && !whole) return { weak, points, test: (text) => text.includes(k) };
    // Short Latin words must match a whole word; longer ones match the start of a word.
    const re = new RegExp(`(^| )${escRe(k)}${whole || k.length <= 3 ? "( |$)" : ""}`);
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

  /* ---------- States & UTs ---------- */
  const stateById = Object.fromEntries(STATES.map((st) => [st.id, st]));
  const STATE_CATS = ["services", "land", "ration", "birth", "grievance", "rti", "portal"];
  const CRS_LINK = { u: "https://dc.crsorgi.gov.in/", n: "Civil Registration System", nh: "नागरिक पंजीकरण प्रणाली" };
  const LAND = ["land", "khasra", "khatauni", "jamabandi", "bhulekh", "7 12", "satbara", "record of rights", "patta", "chitta",
    "ज़मीन", "जमीन", "भूलेख", "खसरा", "खतौनी", "जमाबंदी", "सातबारा"].map(matcher);
  // Services whose answer depends on the state, and which state portal categories to show (best first).
  const STATE_SERVICE = {
    "ration-card": () => ["ration"],
    "state-certificates": (text) => (LAND.some((m) => m.test(text)) ? ["land", "services"] : ["services", "land"]),
    "birth-death": () => ["birth"],
    "cpgrams": () => ["grievance"],
    "rti": () => ["rti"],
  };

  // Names, Hindi names, aliases and major cities point a question at a state. They must match whole
  // words ("Bengal" is not "Bengaluru"). Short codes like "UP" or "MP" only count in capitals, so
  // "sign up" doesn't mean Uttar Pradesh.
  const wholeWord = (w) => {
    const re = new RegExp(`(^| )${escRe(norm(w))}( |$)`);
    return (text) => re.test(text);
  };
  // "Margao (Madgaon)" counts as both "Margao" and "Madgaon".
  const splitWords = (ws) => ws.flatMap((w) => (w || "").split(/[()]/).map((x) => x.trim())).filter(Boolean).map(wholeWord);
  const CODE_NOT = { HP: "[Gg][Aa][Ss]" }; // "HP gas" is a cooking-gas company, not Himachal Pradesh
  const stateMatchers = STATES.map((st) => ({
    st,
    names: splitWords([st.en, st.hi, ...st.aliases]),
    cities: splitWords(st.cities.flatMap((c) => [c.en, c.hi])),
    codes: (st.codes || []).map((c) =>
      new RegExp(`(^|[^A-Za-z])${escRe(c)}(?![A-Za-z])${CODE_NOT[c] ? `(?!\\s*${CODE_NOT[c]}(?![A-Za-z]))` : ""}`)),
  }));

  // Which state a question names: a state's own name or alias first, then a capital-letter code, then
  // a city. Two different states at the same level means we can't tell, so none is picked.
  function detectState(raw) {
    const text = norm(raw);
    const levels = [
      ["name", (m) => m.names.some((test) => test(text))],
      ["code", (m) => m.codes.some((re) => re.test(raw))],
      ["city", (m) => m.cities.some((test) => test(text))],
    ];
    for (const [how, hit] of levels) {
      const found = stateMatchers.filter(hit);
      if (found.length === 1) return { st: found[0].st, how };
      if (found.length > 1) return null;
    }
    return null;
  }

  let selectedState = null;
  function setSelectedState(id) {
    selectedState = has(stateById, id) ? id : null;
    store.set("babu.state", selectedState || "");
  }

  const stateName = (st) => st[lang] || st.en;
  const byName = (a, b) => stateName(a).localeCompare(stateName(b), lang);
  function stateLink(st, c) {
    const l = st.links.find((x) => x.c === c);
    if (l) return l;
    return c === "birth" && st.crs ? { ...CRS_LINK, c } : null;
  }
  // Every picker sits inside a <label> with visible text, which gives it its accessible name.
  function stateSelect(selId) {
    const opt = (st) => `<option value="${esc(st.id)}"${st.id === selId ? " selected" : ""}>${esc(stateName(st))}</option>`;
    const group = (type, label) =>
      `<optgroup label="${esc(t(label))}">${STATES.filter((s) => s.type === type).sort(byName).map(opt).join("")}</optgroup>`;
    return `<select class="state-select" data-state-select>
      <option value="">${esc(t("st.choose"))}</option>${group("state", "st.states")}${group("ut", "st.uts")}</select>`;
  }

  /* ---------- Answer rendering ---------- */
  const linkName = (l) => (lang === "hi" && l.nh) || l.n;
  const outLink = (u, inner, cls = "") =>
    `<a${cls ? ` class="${cls}"` : ""} href="${esc(u)}" target="_blank" rel="noopener noreferrer">${inner}</a>`;
  // Long hostnames may break before a dot, so ".gov.in" stays visible on narrow phones.
  const hostHTML = (h) => esc(h).replace(/\./g, "<wbr>.");
  const linkBtn = (l, primary) => outLink(l.u,
    `<span>${esc(primary ? fill(t("res.open"), { n: linkName(l) }) : linkName(l))}</span><small>${hostHTML(host(l.u))}</small>${icon("out", primary ? 16 : 14)}`,
    primary ? "go" : "go go-2");
  const helpLine = (label, num, wa) => {
    const digits = num.replace(/[^\d+]/g, "");
    const href = wa ? `https://wa.me/91${digits.replace(/^\+?91/, "")}` : `tel:${digits}`;
    return `<p class="svc-help">${icon(wa ? "chat" : "phone", 16)}<span>${esc(label)}: <a href="${esc(href)}"${wa ? ' target="_blank" rel="noopener noreferrer"' : ""}>${esc(num)}</a></span></p>`;
  };

  // The state part of an answer: a picker, then that state's own portal(s) for this service.
  function stateBlock(svc, ctx) {
    const cats = STATE_SERVICE[svc.id]?.(ctx.text || "");
    const st = ctx.state;
    // Complaints and RTI are national services: they get a state part once a state is known or being picked.
    if (!cats || (!svc.state && !st && !ctx.picked)) return { html: "", links: [] };
    const seen = new Set();
    const links = st ? cats.map((c) => stateLink(st, c)).filter((l) => l && !seen.has(l.u) && seen.add(l.u)) : [];
    let body;
    if (!st) body = `<p class="state-hint">${esc(t("res.state"))}</p>`;
    else if (links.length) body = `
        <p class="state-lead">${esc(fill(t("st.portalsFor"), { s: stateName(st) }))}</p>
        <div class="svc-links">${links.map((l, i) => linkBtn(l, i === 0)).join("")}</div>`;
    else body = `<p class="state-hint">${esc(fill(t("st.none"), { s: stateName(st) }))}</p>`;
    return {
      links,
      html: `<div class="svc-stateblock" data-for="${esc(svc.id)}">
        <label class="state-pick">${icon("pin", 16)}<span>${esc(t("st.pickLabel"))}</span>${stateSelect(st?.id)}</label>
        ${body}
      </div>`,
    };
  }

  function serviceCard(svc, ctx = {}) {
    const L = svc[lang];
    const sb = stateBlock(svc, ctx);
    const shown = new Set(sb.links.map((l) => l.u));
    let national = svc.links.filter((l) => !shown.has(l.u));
    // A state with its own birth registration but no checked link: CRS's page for other states comes first.
    if (svc.id === "birth-death" && ctx.state && !ctx.state.crs && !sb.links.length) {
      national = [...national].sort((a, b) => !!b.other - !!a.other);
    }
    return `
      <div class="svc">
        <div class="svc-topic">${icon(topicById[svc.topic].icon, 16)}<span>${esc(topicById[svc.topic][lang].t)}</span></div>
        <h4>${esc(L.t)}</h4>
        <p>${esc(L.s)}</p>
        ${sb.html}
        ${national.length ? `<div class="svc-links">${national.map((l, i) => linkBtn(l, i === 0 && !sb.links.length)).join("")}</div>` : ""}
        ${svc.help ? helpLine(t("res.help"), svc.help) : ""}
      </div>`;
  }

  function stateCard(st) {
    const rows = STATE_CATS.map((c) => stateLink(st, c)).filter(Boolean);
    const label = (l) => t(l.c === "portal" && st.type === "ut" ? "cat.portalUt" : "cat." + l.c);
    return `
      <div class="svc state-card">
        <div class="svc-topic">${icon("pin", 16)}<span>${esc(t(st.type === "ut" ? "st.ut" : "st.state"))}</span></div>
        <h4>${esc(stateName(st))}</h4>
        <ul class="state-rows">${rows.map((l) => `<li><span class="state-cat">${esc(label(l))}</span>${linkBtn(l, false)}</li>`).join("")}</ul>
        ${st.help.map((h) => helpLine(h[lang] || h.en, h.num, h.wa)).join("")}
      </div>`;
  }

  const svcChip = (s) => `<button type="button" class="chip" data-svc="${esc(s.id)}">${esc(s[lang].t)}</button>`;
  const stateChip = (st) => `<button type="button" class="chip" data-state="${esc(st.id)}">${esc(fill(t("st.chip"), { s: stateName(st) }))}</button>`;

  function relatedFor(best, ranked) {
    // Other likely matches: same topic, or a strong match elsewhere. Then fill with siblings.
    const out = ranked.filter((r) => r.s !== best && (r.s.topic === best.topic || r.score >= 4)).slice(0, 2).map((r) => r.s);
    for (const s of SERVICES) {
      if (out.length >= 3) break;
      if (s.topic === best.topic && s !== best && !out.includes(s)) out.push(s);
    }
    return out;
  }

  function answerHTML(best, related, ctx = {}) {
    // A question that names a state gets a shortcut to that state's portals, unless the answer already shows them.
    const chips = [
      ...(ctx.mentioned && ctx.state && !STATE_SERVICE[best.id] ? [stateChip(ctx.state)] : []),
      ...related.map(svcChip),
    ];
    return `
      <span class="who">${esc(t("chat.who"))}</span>
      <p class="res-lead">${esc(t("res.lead"))}</p>
      ${serviceCard(best, ctx)}
      ${chips.length ? `<p class="res-related">${esc(t("res.related"))}</p><div class="chips chips-left">${chips.join("")}</div>` : ""}
      <p class="res-safety">${esc(t("res.safety"))}</p>`;
  }

  function stateHTML(st) {
    return `
      <span class="who">${esc(t("chat.who"))}</span>
      <p class="res-lead">${esc(fill(t("st.portalsFor"), { s: stateName(st) }))}</p>
      ${stateCard(st)}
      <label class="state-pick state-pick-plain"><span>${esc(t("st.change"))}</span>${stateSelect(st.id)}</label>
      <p class="res-safety">${esc(t("res.safety"))}</p>`;
  }

  function noMatchHTML() {
    return `
      <span class="who">${esc(t("chat.who"))}</span>
      <p>${esc(t("res.none"))}</p>
      <p>${esc(t("res.noneTry"))}</p>
      <div class="svc-links">${DIRECTORIES.map((u) => outLink(u, `<span>${hostHTML(host(u))}</span>${icon("out", 14)}`, "go go-2")).join("")}</div>
      <p class="res-related">${esc(t("res.popular"))}</p>
      <div class="chips chips-left">${POPULAR.map((id) => svcChip(serviceById[id])).join("")}</div>`;
  }

  function topicHTML(tp, picked) {
    const list = SERVICES.filter((s) => s.topic === tp.id);
    const ctx = { state: stateById[selectedState], picked };
    return `
      <span class="who">${esc(t("chat.who"))}</span>
      <p class="res-lead">${esc(fill(t("res.topicLead"), { t: tp[lang].t }))}</p>
      <div class="svc-list">${list.map((s) => serviceCard(s, ctx)).join("")}</div>
      <p class="res-safety">${esc(t("res.safety"))}</p>`;
  }

  /* ---------- Chat ---------- */
  const chat = $("#chat");
  const textarea = $("#q");
  let lastView = null; // re-render the open answer when the language or state changes
  let revealTimer = 0;

  function showChat(userText, babuHTML, view) {
    clearTimeout(revealTimer); // a newer answer replaces one still "typing"
    lastView = view;
    chat.hidden = false;
    // Re-renders (language or state changes) update the answer in place; don't make screen readers re-read it all.
    chat.setAttribute("aria-live", view.rerender ? "off" : "polite");
    chat.innerHTML = `
      ${userText ? `<div class="bubble me">${esc(userText)}</div>` : ""}
      <div class="bubble babu"><span class="who">${esc(t("chat.who"))}</span><span class="typing" aria-label="…"><i></i><i></i><i></i></span></div>`;
    const bubble = chat.lastElementChild;
    const reveal = () => {
      bubble.innerHTML = babuHTML();
      chat.insertAdjacentHTML("beforeend", `<button type="button" class="chat-close">${esc(t("chat.close"))}</button>`);
      if (view.rerender) setTimeout(() => chat.setAttribute("aria-live", "polite"), 150);
      if (!view.instant && chat.getBoundingClientRect().top > window.innerHeight * 0.6) chat.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    if (view.instant) reveal(); else revealTimer = setTimeout(reveal, 450);
  }

  function queryAnswer(v) {
    const ranked = rank(v.q);
    const best = ranked[0]?.s;
    const detected = detectState(v.q)?.st || null;
    // A state picked in the answer overrides the one named in the question.
    const picked = "stateId" in v;
    const st = picked ? stateById[v.stateId] || null : detected || stateById[selectedState] || null;
    const mentioned = picked ? !!st : !!detected;
    // A question that only names a state ("Bihar") shows its portals; clearing the picker keeps that state.
    if (!best) {
      const shown = st && mentioned ? st : detected;
      return () => (shown ? stateHTML(shown) : noMatchHTML());
    }
    return () => answerHTML(best, relatedFor(best, ranked), { state: st, text: norm(v.q), mentioned, picked });
  }

  function viewContent(v) {
    if (v.type === "ask") return [v.q, queryAnswer(v)];
    if (v.type === "service") {
      const s = serviceById[v.id];
      return [s[lang].t, () => answerHTML(s, relatedFor(s, []), { state: stateById[selectedState], picked: "stateId" in v })];
    }
    if (v.type === "topic") { const tp = topicById[v.id]; return [tp[lang].t, () => topicHTML(tp, "stateId" in v)]; }
    if (v.type === "state") { const st = stateById[v.id]; return [stateName(st), () => stateHTML(st)]; }
    return ["", () => `<span class="who">${esc(t("chat.who"))}</span><p>${esc(t("chat.empty"))}</p>`];
  }

  function openView(view) {
    const [userText, html] = viewContent(view);
    showChat(userText, html, view);
  }

  function ask(q) {
    q = q.trim();
    if (!q) { openView({ type: "empty", instant: true }); textarea.focus(); return; }
    // Remember a state the question names — but not one guessed only from a code like "MP" or "HP".
    const detected = detectState(q);
    const remember = detected && detected.how !== "code";
    if (remember) setSelectedState(detected.st.id);
    openView({ type: "ask", q });
    if (remember) renderStatesSection();
    textarea.value = ""; autoGrow();
  }

  const showService = (id) => openView({ type: "service", id });
  const showTopic = (id) => openView({ type: "topic", id });
  const showState = (id) => openView({ type: "state", id });

  function rerenderChat(changes = {}) {
    if (!lastView || chat.hidden) return;
    openView({ ...lastView, ...changes, instant: true, rerender: true });
  }
  // A state chosen in the states section also applies to an open answer that has a state picker.
  const syncChat = (id) => rerenderChat(chat.querySelector(".svc-stateblock") ? { stateId: id || "" } : {});

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

  function renderStatesSection() {
    const box = $("#states-box");
    if (!box) return;
    $("#states").hidden = !STATES.length;
    const st = stateById[selectedState];
    const chip = (x) => {
      const on = x.id === selectedState;
      return `<li><button type="button" class="chip${on ? " is-on" : ""}" data-state-pick="${esc(x.id)}" aria-pressed="${on}">${esc(stateName(x))}</button></li>`;
    };
    const list = (type, label) => `<h3 class="states-group">${esc(t(label))}</h3>
      <ul class="state-chips">${STATES.filter((x) => x.type === type).sort(byName).map(chip).join("")}</ul>`;
    box.innerHTML = `
      <label class="state-pick state-pick-plain">${icon("pin", 16)}<span>${esc(t("st.pickLabel"))}</span>${stateSelect(selectedState)}</label>
      ${st ? stateCard(st) : ""}
      <div class="states-all">${list("state", "st.states")}${list("ut", "st.uts")}</div>`;
  }

  function renderSources() {
    const hosts = [...new Set(SERVICES.flatMap((s) => s.links.map((l) => host(l.u))))].sort();
    const allHosts = new Set([...hosts, ...STATES.flatMap((st) => st.links.map((l) => host(l.u)))]);
    $("#source-groups").innerHTML = `
      <p class="source-count">${esc(fill(t("sources.count"), { p: SERVICES.length, n: STATES.length, s: allHosts.size }))}</p>
      <ul class="source-cloud">${hosts.map((h) => `<li>${outLink(`https://${h}/`, esc(h))}</li>`).join("")}</ul>
      <div class="source-notes">
        <p>${esc(t("sources.agency"))}</p>
        <p>${esc(t("sources.state"))} ${STATES.length ? esc(t("sources.statesNote")) : ""}</p>
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
    lang = has(T, next) ? next : "en";
    document.documentElement.lang = lang;
    document.querySelectorAll(".lang-toggle button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    renderStatic(); renderChips(); renderTopics(); renderStatesSection(); renderExample(); renderHow(); renderSources(); renderNext(); renderFaq();
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
    const stateBtn = e.target.closest("[data-state]");
    if (stateBtn) { setSelectedState(stateBtn.dataset.state); showState(stateBtn.dataset.state); renderStatesSection(); return; }
    const pickBtn = e.target.closest("[data-state-pick]");
    if (pickBtn) {
      const id = pickBtn.dataset.statePick;
      setSelectedState(id);
      renderStatesSection();
      syncChat(id);
      $(`#states-box [data-state-pick="${CSS.escape(id)}"]`)?.focus({ preventScroll: true });
      $("#states-box .state-card")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      return;
    }
    if (e.target.closest(".chat-close")) {
      clearTimeout(revealTimer);
      chat.hidden = true; chat.innerHTML = ""; lastView = null; textarea.focus();
      return;
    }
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

  // Any state picker — in an answer or in the states section — updates the answer and the section.
  document.addEventListener("change", (e) => {
    const sel = e.target.closest("[data-state-select]");
    if (!sel) return;
    const id = sel.value || null;
    const inChat = chat.contains(sel);
    const forSvc = sel.closest("[data-for]")?.dataset.for; // which answer card the picker belongs to
    setSelectedState(id);
    renderStatesSection();
    if (inChat && lastView) {
      if (!forSvc) {
        // The picker under a state's portal card: "Choose…" keeps the card that's showing.
        if (id) rerenderChat(lastView.type === "state" ? { id } : { stateId: id });
      } else {
        rerenderChat({ stateId: id || "" });
      }
      // Put focus back on the same picker (it was rebuilt), or the nearest one left.
      const again = forSvc && chat.querySelector(`[data-for="${CSS.escape(forSvc)}"] [data-state-select]`);
      (again || chat.querySelector("[data-state-select]") || textarea).focus();
    } else {
      syncChat(id);
      $("#states-box [data-state-select]")?.focus({ preventScroll: true });
    }
  });

  /* ---------- Header border on scroll ---------- */
  const header = $(".site-header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  /* ---------- Init ---------- */
  const params = new URLSearchParams(location.search);
  const urlLang = params.get("lang");
  const saved = store.get("babu.lang");
  setSelectedState(store.get("babu.state"));
  const browserHi = (navigator.language || "").toLowerCase().startsWith("hi");
  setLang(urlLang || saved || (browserHi ? "hi" : "en"), Boolean(urlLang));

  // Expose the matcher for quick checks in the console: babuRank("pan card lost")
  window.babuRank = (q) => rank(q).slice(0, 3).map((r) => `${r.s.id} (${r.score})`);
  window.babuState = (q) => detectState(q)?.st.id ?? null;
})();
