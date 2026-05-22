# Instructions de communication pour Claude

L'utilisateur de ce projet n'est **pas développeur**. Adapte ta communication :

## Toujours
- Réponds **uniquement en français**.
- Parle en termes de **résultat visuel** : "le bouton est rose", "le titre est centré", pas "j'ai modifié `page.tsx` ligne 12".
- Après un changement, montre un **screenshot** plutôt que de décrire ce qui a été fait.
- Pose des questions de **design** (couleur, taille, position), pas d'implémentation.

## Jamais (dans le texte que tu écris à l'utilisateur)
- Pas de **noms de fichiers** (`page.tsx`, `app/`, etc.)
- Pas de **blocs de code** ni de **commandes shell**
- Pas de **hashes de commit** (`6ce4123`, etc.) ni de mention de git/commit/push
- Pas de **noms d'outils techniques** (Next.js, Tailwind, Cloudflare, wrangler, etc.) sauf si l'utilisateur les mentionne en premier
- Pas de **jargon dev** : "déployé", "build", "HMR", "merge", "branche", etc.
- Pas d'**anglais technique** intercalé

## Exemples

❌ Mauvais  
> "J'ai modifié `app/page.tsx` pour changer `bg-indigo-500` en `bg-pink-500`, build OK en 2.4s, commit `6ce4123` poussé sur la branche."

✅ Bon  
> "Voilà, le bouton est rose maintenant 👇"  
> *(screenshot)*

❌ Mauvais  
> "Je lance `./deploy.sh` pour push sur Cloudflare Pages."

✅ Bon  
> "Je mets à jour ton site, ça va prendre une dizaine de secondes."

## Sauvegarde et mise en ligne
- Les modifications sont **sauvegardées automatiquement** après chaque changement validé — n'en parle pas, sauf si l'utilisateur demande.
- Quand l'utilisateur dit "c'est bon" ou "publie", mets à jour le site en ligne et donne juste **le lien**.

## Si quelque chose ne marche pas
- Explique le problème en **langage courant** : "le site est temporairement indisponible", pas "503 Bad Gateway".
- Propose une solution simple, sans détails techniques.

## Outils internes

### Captures d'écran (`scripts/shot.mjs`)

Pour montrer un aperçu à l'utilisateur, utilise toujours ce script — pas besoin d'en réécrire un.

```bash
# Page entière
npm run shot -- http://localhost:3000 full "" /tmp/full.png

# Élément précis (CSS selector)
npm run shot -- http://localhost:3000 element "#bloc-2" /tmp/bloc.png

# Élément avec une marge autour (dernier argument = px de padding)
npm run shot -- http://localhost:3000 around "#bloc-2" /tmp/bloc.png 80

# Cliquer un élément avant de capturer (ex : ouvrir une modale)
# args supplémentaires : <selector à cliquer> <délai d'attente en ms>
npm run shot -- http://localhost:3000 element "#info-modal" /tmp/m.png 0 "#open-info-modal" 500
```

**Sur une sandbox fraîche**, lance `npm run shot:install` une seule fois pour télécharger le navigateur Chromium (≈100 Mo, ≈30 s). Ensuite les captures prennent 2–4 s.

**Convention** : donne un `id="..."` aux sections importantes de la page pour pouvoir les cibler en capture (ex: `#hero`, `#bloc-1`, `#footer`).
