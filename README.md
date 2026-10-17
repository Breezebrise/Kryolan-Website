# Kryolan Shade Lab

An independent, fan-made shade guide for Kryolan makeup. It is not affiliated with or endorsed by Kryolan Professional Make-up GmbH.

The site covers every shade code listed on kryolan.com for Supracolor, Supracolor Color & FX, TV Paint Stick, Ultra Foundation, Ultra Fluid Foundation, Tinted Moisturizer and Dermacolor Camouflage Creme. Each shade gets its own page in English, Simplified Chinese and Traditional Chinese, with:

- depth, undertone and formula estimates
- starting matches in MAC, Fenty, Estee Lauder, Make Up For Ever, Maybelline, Mehron and Ben Nye
- community dupes for any brand, decided by votes, with shade suggestions built in for Mehron, Ben Nye, Made By Mitchell and P. Louise
- owner votes on the shade's real depth and undertone
- links to the same code in other Kryolan lines, and nearby shades

There is also a concealer wheel guide, an everyday-wear guide for each formula, and a shade matcher on the home page.

## 1. Put it on GitHub

1. Create a new public repository on GitHub named `kryolan-shade-lab`.
2. Upload everything in this folder to it, including the hidden `.github` folder, on the `main` branch.
3. In the repository, open **Settings > Pages** and set **Source** to **GitHub Actions**.
4. Open the **Actions** tab. The "Build and publish site" job runs on every push. When it finishes, the job page shows the live address, which is your GitHub username followed by `.github.io/kryolan-shade-lab/`.

The build creates about 1,900 pages, the sitemap and all the search engine tags automatically. You never need to run anything on your own computer.

## 2. Turn on voting (Supabase, free)

1. Sign up at supabase.com and create a new project.
2. Open **SQL Editor**, paste the contents of `supabase/schema.sql`, and click **Run**.
3. Open **Authentication > Sign In / Providers** and turn on **Allow anonymous sign-ins**. Visitors vote without making an account, and each browser gets one vote per dupe.
4. Open **Project Settings > API** and copy the **Project URL** and the **anon public** key.
5. In GitHub, edit `assets/config.js` and paste those two values between the quotes. Commit the change.

The anon key is meant to be public. The database rules in `schema.sql` only let visitors add their own votes and dupes.

Shade reports land in the `shade_reports` table. Read them in Supabase under **Table Editor**.

If spam votes show up, turn on CAPTCHA protection under **Authentication > Attack Protection**.

## 3. Get found on every search engine

Every push already does two things on its own: it rebuilds `sitemap.xml`, and it sends every page to IndexNow. IndexNow feeds Bing, Yandex, Naver, Seznam and Yep directly. Bing also powers DuckDuckGo, Yahoo and Ecosia, so one ping covers most engines.

Then claim the site in each engine's webmaster tool. Each one gives you a verification code. Paste it into `data/site.json` next to the engine's name and commit, and the build adds the tag to your home page.

1. **Google Search Console**: add the site as a URL-prefix property, choose the HTML tag method, copy only the `content` value into `"google"`. Then submit `sitemap.xml`.
2. **Bing Webmaster Tools**: sign in, choose "Import from Google Search Console" once Google is verified. That covers Bing, DuckDuckGo, Yahoo and Ecosia.
3. **Yandex Webmaster**: add the site, use the meta tag method, paste into `"yandex"`, submit the sitemap.
4. **Baidu Ziyuan** (ziyuan.baidu.com): add the site, use the HTML tag method, paste into `"baidu"`, submit the sitemap. Baidu needs a Chinese phone number to sign up.
5. **Naver Search Advisor** (for Korea): add the site, paste into `"naver"`, submit the sitemap.

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
