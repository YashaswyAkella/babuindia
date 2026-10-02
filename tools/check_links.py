#!/usr/bin/env python3
"""Check every official link in data.js.

Many Indian government sites block visitors from outside India, so run this
from an Indian internet connection for reliable results.

    python3 tools/check_links.py
"""
import re
import ssl
import sys
import urllib.error
import urllib.request
from pathlib import Path

DATA = Path(__file__).resolve().parent.parent / "data.js"
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128 Safari/537.36"


def check(url):
    # The part after # is handled by the page's own JavaScript; check the page itself.
    page = url.split("#", 1)[0]
    req = urllib.request.Request(page, headers={"User-Agent": UA})
    try:
        with urllib.request.urlopen(req, timeout=25, context=ssl.create_default_context()) as r:
            return r.status, r.geturl()
    except urllib.error.HTTPError as e:
        return e.code, page
    except Exception as e:  # timeouts, DNS, TLS
        return None, f"{type(e).__name__}: {e}"


def main():
    urls = sorted(set(re.findall(r'u: "([^"]+)"', DATA.read_text(encoding="utf-8"))))
    bad = 0
    for url in urls:
        status, final = check(url)
        ok = status is not None and status < 400
        bad += not ok
        note = "" if final in (url, url.split("#", 1)[0]) else f"  -> {final}"
        print(f"{'OK ' if ok else 'BAD'} {status or '---'}  {url}{note}")
    print(f"\n{len(urls) - bad}/{len(urls)} links reachable.")
    sys.exit(1 if bad else 0)


if __name__ == "__main__":
    main()
