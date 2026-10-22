# ネパールの地形、自然災害、旅行 — Presentation

A static, 7‑slide web presentation (HTML + CSS + vanilla JS). No build step, no backend.

```
index.html      slides
css/style.css   styles
js/app.js       navigation, romaji toggle, fullscreen
images/         photos (Wikimedia Commons) + credits.json
```

## Controls

| Action | Keys / UI |
| --- | --- |
| Next | → · Space · Page Down · Next button · swipe left |
| Previous | ← · Page Up · Previous button · swipe right |
| First / last | Home / End |
| Romaji on/off | **R** or the ローマ字 button (hidden by default) |
| Full screen | **F** or the corner button |

Direct links work: `https://your-site/#4` opens slide 4. Controls fade out after 3.5 s of inactivity; move the mouse to bring them back.

## Run locally

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## Publish (get a permanent public URL)

Opening `index.html` as a file only works on your computer. To share it, upload the folder to a static host:

**Vercel Drop (easiest, no account setup)** — drag this whole folder onto the Vercel Drop page. You get a `*.vercel.app` URL.

**Vercel CLI**
```bash
npm i -g vercel
vercel --prod        # accept the defaults; framework = "Other", no build command
```

**Netlify Drop** — drag the folder onto https://app.netlify.com/drop.

**GitHub Pages** — push to GitHub → Settings → Pages → deploy from branch `main`, folder `/ (root)`.

**Cloudflare Pages** — connect the repo, build command empty, output directory `/`.

All of these give a shareable URL that needs no login to view. Do a quick check on a phone before presenting.

## Content notes

- **Tunnel**: Nagdhunga–Sisnekhola Tunnel inaugurated 27 July 2026; 2.68 km main tunnel; Japanese ODA loan via JICA (see the JICA Nepal Office press release).
- **83%** (hills + mountains) and **約6,000 rivers** are commonly cited estimates; sources differ slightly. The slide carries a small source note.
- Slide 4 uses a real Nepal highway **landslide** photo. No suitable openly licensed Nepal *flood* photo was found, so the flood point is covered by the text only. Swap in your own via `images/landslide.jpg`.

## Photo credits (all via Wikimedia Commons)

| File | Author | Licence |
| --- | --- | --- |
| hero.jpg | Vyacheslav Argenberg | CC BY 4.0 |
| himalaya.jpg | Arite | CC BY-SA 3.0 |
| hills.jpg | Bsdbhattarai | CC BY-SA 4.0 |
| terai.jpg | Alex Bhusal | CC BY-SA 4.0 |
| river.jpg | Vyacheslav Argenberg | CC BY 4.0 |
| landslide.jpg | Gunjan Raj Giri | CC BY 3.0 |
| road.jpg | Sundar1 | CC BY-SA 3.0 |
| tunnel.jpg | Prakash Gopali85 | CC BY-SA 4.0 |
| sunset.jpg | Nir B. Gurung | CC BY-SA 4.0 |

Source page URLs are in `images/credits.json`. Credits are also shown in small print on each slide, as the licences require.
