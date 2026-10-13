// Rebuild lang/source.en.json (the English text every language file is translated from).
// macOS: osascript -l JavaScript tools/extract_source.js "$PWD" > lang/source.en.json
ObjC.import("Foundation");
function run(argv) {
  const root = (argv[0] || ".") + "/";
  const read = (p) => $.NSString.stringWithContentsOfFileEncodingError(root + p, $.NSUTF8StringEncoding, null).js;
  const window = {};
  new Function("window", read("strings.js") + "\n" + read("data.js") + "\n" + read("states.js"))(window);
  const S = window.BABU_STRINGS, D = window.BABU_DATA;
  const out = {
    ui: S.T.en, steps: S.STEPS.en, can: S.CAN.en, cant: S.CANT.en,
    next: S.NEXT.en.map((x) => [x[1], x[2]]), faq: S.FAQ.en, reviewed: D.reviewed.en,
    topics: {}, services: {}, states: {},
  };
  D.TOPICS.forEach((tp) => { out.topics[tp.id] = { t: tp.en.t, d: tp.en.d, q: tp.en.q, hindi_example_q: tp.hi.q, english_keywords: tp.kw }; });
  D.SERVICES.forEach((s) => { out.services[s.id] = { t: s.en.t, s: s.en.s, english_keywords: s.kw.filter((k) => !/[ऀ-ॿ]/.test(k)) }; });
  window.BABU_STATES.forEach((st) => { out.states[st.id] = { name: st.en, type: st.type, cities: st.cities.map((c) => c.en).filter(Boolean) }; });
  return JSON.stringify(out, null, 1);
}
