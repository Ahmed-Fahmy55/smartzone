# Smart Zone website

The company website for Smart Zone's Windows apps, **Z Shop** and **Z Gym**, served by GitHub Pages at
<https://ahmed-fahmy55.github.io/smartzone/>.

Plain HTML, CSS and JavaScript — no build step. Open `index.html` through any local web server to preview.

| Path | What it is |
|---|---|
| `index.html`, `shop/`, `gym/`, `contact/`, `download/` | The pages. Each is a shell; the content lives in `assets/js/site.js`. |
| `assets/js/site.js` | All text (Arabic and English), product features, release lookup and rendering. |
| `assets/css/site.css` | Styles and the light/dark black-and-gold theme. |
| `assets/img/` | App screenshots. |
| `privacy.html`, `gym/privacy.html` | Privacy policies for Z Shop and Z Gym (static HTML). |
| `docs/` | User guides and appendices (PDF). |

The download buttons point at the latest release of each app:

- Z Shop — <https://github.com/Ahmed-Fahmy55/ShopManagement-Releases/releases>, and its Android phone app,
  `ZShop.apk`, which the program's `release.ps1` uploads to the same release (the phone section of `shop/`)
- Z Gym — <https://github.com/Ahmed-Fahmy55/ZGym-Releases/releases>
