# Asif Academy (Next.js)

Next.js port of the PHP Asif Academy site: public storefront, Stripe checkout, student accounts, and the admin dashboard. Data still lives in `data/*.json`.

## Setup

```bash
npm install
cp .env.example .env.local   # then fill in values
npm run dev                  # http://localhost:3000
```

Production: `npm run build && npm start`.

### Environment

| Variable | Purpose |
| --- | --- |
| `STRIPE_SECRET_KEY` | Server-side Stripe key for Checkout |
| `ADMIN_USERNAME` / `ADMIN_PASSWORD_HASH` | Admin login (bcrypt; existing PHP `$2y$` hashes work) |
| `SESSION_SECRET` | Signs admin/student session cookies (`openssl rand -hex 32`) |
| `SITE_NAME` | Branding |
| `SITE_URL` | Optional base URL for Stripe redirects (defaults to the request origin) |

**Escape every `$` in `ADMIN_PASSWORD_HASH` as `\$`**, both in `.env` files and in a hosting platform's env settings. Next.js expands `$NAME` references in env values, which would otherwise corrupt the hash.

## Layout

```
app/
  (home)/            "/" — own root layout (body class differs)
  (site)/            about, courses, courses/[id], faq, contact, success, index-2, index-3
  (auth)/            student login + register (no site header/footer)
  (admin)/admin/     dashboard pages + Server Actions, guarded by requireAdmin()
  (admin-login)/     /admin/login (own <body> class, outside the guard)
  checkout/route.ts  creates the Stripe Checkout session, redirects to Stripe
  global-not-found.tsx
components/site/     header, footer, nav, theme CSS/JS loaders, course cards
lib/                 config, JSON data access, sessions, admin auth, Stripe REST client, traffic logging
proxy.ts             passes the request path to traffic logging
public/assets/       template CSS/JS/images/fonts (unchanged from the PHP site)
data/                JSON datastore
```

## Notes

- **Theme JavaScript.** The template's jQuery plugins (Swiper, WOW, magnific-popup, offcanvas) load after hydration from `components/site/ThemeScripts.tsx`. Public pages link to each other with plain `<a>` tags, so each navigation is a full page load and the plugins start fresh, as they did in PHP.
- **Rendering.** Pages render per request, because every view logs traffic and reads the JSON files. Cache Components is deliberately left off.
- **Old URLs.** `*.php` URLs and `course.php?id=…` redirect to the new routes (`next.config.ts`).
- **Admin Server Actions** each call `requireAdmin()` themselves, because actions can be invoked without rendering the guarded layout.
- **JSON storage** has no locking, the same as the PHP version. It is fine for a single server but not for multiple instances or serverless deployments with a read-only filesystem.
