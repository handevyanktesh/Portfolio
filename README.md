# Portfolio – Vyanktesh Hande

A static site: plain HTML, CSS and JavaScript. No build step, no dependencies.

## Files
- `index.html`  page content (text, sections, links)
- `styles.css`  all styling; colors and theme are the variables at the top (`:root`)
- `script.js`   the two interactive demos (Rigora compatibility check, MindMap rules)
- `assets/profile.jpg`  your photo

## Run locally
Open `index.html` in a browser, or run `npx serve` in this folder.

## Deploy (free)
**Vercel:** push this folder to a GitHub repo, then Import Project on vercel.com. Framework preset: Other. No build command, output directory is the root.
**Netlify:** drag and drop this folder onto app.netlify.com/drop.
**GitHub Pages:** push to a repo, then Settings > Pages > Deploy from branch (main, root).

## Before you publish (checklist)
- [ ] Replace the two GitHub links in `index.html` with the exact repo URLs for Rigora and MindMap.
- [ ] Confirm the LinkedIn URL (guessed as linkedin.com/in/vyanktesh-hande).
- [ ] Confirm MindMap's status text matches reality (resume vs. project notes).
- [ ] Add a resume button: put `resume.pdf` in `assets/` and link to `assets/resume.pdf`.
- [ ] Once Rigora is deployed, add a "Live demo" link next to its GitHub link.
- [ ] Buy a domain (for example yourname.dev) and connect it in your host's settings.

## Redesigning later
Content lives only in `index.html`, styling only in `styles.css`. You can restyle everything without touching `script.js`. Keep the element ids (`cpu`, `mb`, `ram`, `gpu`, `psu`, `res`, `verdict`, `face`, `away`, `awayv`, `mm`) if you change the demo markup.
