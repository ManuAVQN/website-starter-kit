# website-starter-kit

Mini starter Next.js 15 + Tailwind v4 conçu pour itérer **vite** depuis Claude Code on the web : on build localement dans la sandbox et on pousse directement les fichiers statiques sur **Cloudflare Pages** (pas de CI, pas de queue, ~10s par cycle).

## Setup (une seule fois)

1. **Installer les deps**
   ```bash
   npm install
   ```

2. **Créer le projet sur Cloudflare Pages** (depuis ton poste ou ici)
   ```bash
   npx wrangler login                       # OAuth via navigateur (1 fois)
   npx wrangler pages project create website-starter-kit --production-branch=main
   ```

3. **Configurer les secrets pour le déploiement headless**

   Si tu déploies depuis Claude Code on the web (sans navigateur dispo), utilise un **API token** au lieu d'OAuth :
   - Crée un token sur https://dash.cloudflare.com/profile/api-tokens avec permission `Pages:Edit`
   - Copie `.env.example` en `.env` et remplis :
     ```
     CLOUDFLARE_API_TOKEN=…
     CLOUDFLARE_ACCOUNT_ID=…   # visible en haut à droite du dashboard CF
     CF_PAGES_PROJECT=website-starter-kit
     ```

## Workflow quotidien

```bash
npm run dev      # dev local avec HMR
./deploy.sh      # build + push direct à Cloudflare Pages (~10s)
```

L'URL publique est de la forme `https://website-starter-kit.pages.dev`. Tu la rafraîchis sur ton tel après chaque `./deploy.sh`.

## Pourquoi ce stack

- **Next.js static export** (`output: "export"`) → build rapide, déploiement statique pur, pas besoin du runtime Node sur Cloudflare.
- **Tailwind v4** via le plugin PostCSS officiel.
- **Cloudflare Pages Direct Upload** : on build où on veut (CLI/sandbox) et on POST le `out/` à l'API CF. Pas de build Worker, pas de queue.

## Structure

```
app/
  layout.tsx        # shell HTML + import du CSS global
  page.tsx          # page d'accueil
  globals.css       # @import "tailwindcss"
next.config.ts      # output: "export"
deploy.sh           # build + wrangler pages deploy
```
