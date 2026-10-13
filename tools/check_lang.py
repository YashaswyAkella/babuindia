#!/usr/bin/env python3
"""Check a language file (lang/<code>.js) against the English source.

    python3 tools/check_lang.py te

Checks that every piece of text is present and in the right script, that {placeholders} are
kept exactly, that list sizes match, and that every topic, service and state has keywords/names.
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SCRIPTS = {  # Unicode block for each language's script
    "te": (0x0C00, 0x0C7F), "ta": (0x0B80, 0x0BFF), "kn": (0x0C80, 0x0CFF),
    "ml": (0x0D00, 0x0D7F), "bn": (0x0980, 0x09FF), "or": (0x0B00, 0x0B7F),
    "mr": (0x0900, 0x097F), "gu": (0x0A80, 0x0AFF), "pa": (0x0A00, 0x0A7F),
}


def load(code):
    text = (ROOT / "lang" / f"{code}.js").read_text(encoding="utf-8")
    m = re.search(r"\(window\.BABU_LANGS = window\.BABU_LANGS \|\| \{\}\)\." + code + r" = (\{.*\});\s*$", text, re.S)
    if not m:
        sys.exit(f"lang/{code}.js must end with: (window.BABU_LANGS = window.BABU_LANGS || {{}}).{code} = {{ ...JSON... }};")
    return json.loads(m.group(1))


def main():
    code = sys.argv[1]
    lo, hi = SCRIPTS[code]
    in_script = lambda s: any(lo <= ord(c) <= hi for c in s)
    src = json.loads((ROOT / "lang" / "source.en.json").read_text(encoding="utf-8"))
    p = load(code)
    errors, warns = [], []
    ph = lambda s: sorted(re.findall(r"\{\w+\}", s))

    def check_text(where, en, tr, need_script=True):
        if not isinstance(tr, str) or not tr.strip():
            errors.append(f"{where}: missing")
            return
        if ph(en) != ph(tr):
            errors.append(f"{where}: placeholders {ph(en)} != {ph(tr)}")
        if need_script and not in_script(tr):
            errors.append(f"{where}: not in {code} script: {tr[:60]!r}")
        if tr.strip() == en.strip() and in_script(en) is False and len(en) > 12:
            warns.append(f"{where}: identical to English")

    for k in ("name",):
        if not p.get(k):
            errors.append(f"{k}: missing")
    ui = p.get("ui", {})
    for k, en in src["ui"].items():
        check_text(f"ui.{k}", en, ui.get(k))
    for k in ui:
        if k not in src["ui"]:
            errors.append(f"ui.{k}: not an English key")
    for key in ("steps", "can", "cant", "next", "faq"):
        en, tr = src[key], p.get(key, [])
        if len(en) != len(tr):
            errors.append(f"{key}: {len(tr)} items, English has {len(en)}")
            continue
        for i, (e, t) in enumerate(zip(en, tr)):
            if isinstance(e, list):
                if not isinstance(t, list) or len(t) != len(e):
                    errors.append(f"{key}[{i}]: must be a list of {len(e)} strings")
                    continue
                for j, (ee, tt) in enumerate(zip(e, t)):
                    check_text(f"{key}[{i}][{j}]", ee, tt)
            else:
                check_text(f"{key}[{i}]", e, t)
    check_text("reviewed", src["reviewed"], p.get("reviewed"))
    for tid, en in src["topics"].items():
        tr = p.get("topics", {}).get(tid, {})
        for f in ("t", "d", "q"):
            check_text(f"topics.{tid}.{f}", en[f], tr.get(f))
        kw = tr.get("kw", [])
        if len([k for k in kw if in_script(k)]) < 2:
            errors.append(f"topics.{tid}.kw: needs at least 2 keywords in {code} script")
    for sid, en in src["services"].items():
        tr = p.get("services", {}).get(sid, {})
        for f in ("t", "s"):
            check_text(f"services.{sid}.{f}", en[f], tr.get(f))
        kw = tr.get("kw", [])
        if not [k for k in kw if in_script(k.lstrip("~="))]:
            errors.append(f"services.{sid}.kw: needs at least 1 keyword in {code} script")
        for k in kw:
            if not isinstance(k, str) or not k.strip("~= "):
                errors.append(f"services.{sid}.kw: empty keyword")
    for st_id in src["states"]:
        tr = p.get("states", {}).get(st_id, {})
        if not tr.get("name") or not in_script(tr["name"]):
            errors.append(f"states.{st_id}.name: missing or not in {code} script")
    for k in p:
        if k not in ("name", "ui", "steps", "can", "cant", "next", "faq", "reviewed", "topics", "services", "states"):
            errors.append(f"{k}: unexpected top-level key")

    for w in warns:
        print("warn ", w)
    for e in errors:
        print("ERROR", e)
    print(f"\n{code}: {len(errors)} errors, {len(warns)} warnings")
    sys.exit(1 if errors else 0)


if __name__ == "__main__":
    main()
