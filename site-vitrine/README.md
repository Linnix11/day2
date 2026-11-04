# Site vitrine — Axion Studio

Site vitrine de la micro-entreprise **axionstudio** (Arthur Champagne-Forterre, EI) :
automatisation des processus, IA pour entreprises, création de sites web.

Stack : **React 19 + Vite + Tailwind CSS v4**.

## Lancer le projet

```bash
npm install
npm run dev      # serveur de développement (http://localhost:5173)
npm run build    # génère le site statique dans dist/
npm run preview  # prévisualise le build
```

Le dossier `dist/` se déploie tel quel sur n'importe quel hébergeur statique (Netlify, Vercel, OVH…).

## Structure
- `src/data.js` — **toutes les infos de l'entreprise** (e-mail, téléphone, SIRET, services, exemples…).
- `src/index.css` — couleurs du thème (variables `--c-*`, mode clair et sombre).
- `src/components/` — `Header`, `Hero`, `Sections` (services, exemples, méthode, à propos, mentions légales, pied de page), `Contact`.

## À compléter avant la mise en ligne
- **SIRET** : remplacer « En cours d'attribution » dans `src/data.js` dès réception de l'avis INSEE.
- **Hébergeur** : nom, adresse et téléphone (obligatoire), dans `src/data.js`.
- **Adresse** : seule la commune est affichée. La loi (LCEN) demande l'adresse de l'éditeur ;
  ajoutez-la ou utilisez une domiciliation si vous ne voulez pas publier votre adresse personnelle.
