#!/usr/bin/env bash
# Build static + push direct à Cloudflare Pages (skip le build CI).
# Usage: ./deploy.sh
#
# Variables requises (à mettre dans .env ou exporter dans le shell) :
#   CLOUDFLARE_API_TOKEN  → token avec permission "Pages:Edit"
#   CLOUDFLARE_ACCOUNT_ID → ton account ID Cloudflare
#   CF_PAGES_PROJECT      → nom du projet Pages (ex: "mon-site")

set -euo pipefail

if [ -f .env ]; then
  set -a; source .env; set +a
fi

: "${CLOUDFLARE_API_TOKEN:?manque CLOUDFLARE_API_TOKEN}"
: "${CLOUDFLARE_ACCOUNT_ID:?manque CLOUDFLARE_ACCOUNT_ID}"
: "${CF_PAGES_PROJECT:?manque CF_PAGES_PROJECT (nom du projet Cloudflare Pages)}"

echo "→ Build Next.js (static export)…"
npm run build

echo "→ Upload vers Cloudflare Pages ($CF_PAGES_PROJECT)…"
npx wrangler pages deploy out --project-name "$CF_PAGES_PROJECT" --branch main
