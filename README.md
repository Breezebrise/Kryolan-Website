# Kryolan Shade Lab

An independent, fan-made shade guide for Kryolan makeup. It is not affiliated with or endorsed by Kryolan Professional Make-up GmbH.

The site covers every shade code listed on kryolan.com for Supracolor, Supracolor Color & FX, TV Paint Stick, Ultra Foundation, Ultra Fluid Foundation, Tinted Moisturizer and Dermacolor Camouflage Creme. Each shade gets its own page in English, Simplified Chinese and Traditional Chinese, with:

- depth, undertone and formula estimates
- starting matches in MAC, Fenty, Estee Lauder, Make Up For Ever, Maybelline, Mehron and Ben Nye
- community dupes for any brand, decided by votes, with shade suggestions built in for Mehron, Ben Nye, Made By Mitchell and P. Louise
- owner votes on the shade's real depth and undertone
- links to the same code in other Kryolan lines, and nearby shades

There is also a concealer wheel guide, an everyday-wear guide for each formula, and a shade matcher on the home page.

New sites usually take two to six weeks to show up. Searches for a specific shade, like "Kryolan Supracolor NB dupe" or "Kryolan alabaster MAC equivalent", are where this site can rank first, because each shade has its own page. For the bare word "Kryolan", Kryolan's own site and big retailers will rank above it. What moves this site up is other sites linking to it, so share shade pages where makeup people talk: Reddit, TikTok and Instagram bios, makeup forums, and Xiaohongshu for the Chinese pages.

## Chinese audiences

The Chinese pages are written in full, not machine translated, and use Kryolan's Chinese brand name, 歌剧魅影. The site uses no Google fonts or outside script hosts, so it loads in mainland China. Two limits there: GitHub Pages can be slow in mainland China, and Baidu ranks sites hosted inside China higher. For a big Chinese audience later, mirror the `_site` folder to a host in China and submit the sitemap to Baidu Ziyuan.

Other languages use the language menu, which hands the page to Google Translate. Browser translation in Chrome, Edge and Safari also works.

## Editing the data

- `tools/build_shades.py` holds every shade code by product line and the rules for the starting estimates. Change a code there and push.
- `data/i18n.json` holds every piece of text on the site in all three languages.
- `data/wheels.json` holds the concealer wheels and their contents.
- `data/brands.json` holds the brand list and the shade lists offered when someone suggests a dupe.
- `data/site.json` holds the search engine verification codes and the IndexNow key.

To preview on your own computer, run `python3 tools/build_shades.py`, then `python3 tools/build_site.py`, then open `_site/index.html`.

## Credits

Thank you to Kryolan for decades of makeup that film, theater and beauty artists trust. Shade codes come from kryolan.com. Kryolan and its product names are trademarks of their owner. The Supabase client library in `assets/vendor` is MIT licensed.
