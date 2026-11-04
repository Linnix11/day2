// Toutes les informations de l'entreprise sont centralisées ici.
export const company = {
  brand: 'Axion Studio',
  tradeName: 'axionstudio',
  owner: 'Arthur Champagne-Forterre',
  email: 'arthur.champagne@icloud.com',
  phone: '06 48 61 23 50',
  phoneHref: '+33648612350',
  city: 'Montlignon (95)',
  siege: '95680 Montlignon, France',
  domain: 'axionstudio.fr',
  siret: "En cours d'attribution",
  host: "À compléter (nom, adresse et téléphone de l'hébergeur)",
}

export const nav = [
  { href: '#services', label: 'Services' },
  { href: '#exemples', label: 'Exemples' },
  { href: '#methode', label: 'Méthode' },
  { href: '#apropos', label: 'À propos' },
]

export const services = [
  { title: 'Workflows automatisés', text: 'Relances clients, facturation, reporting, saisie de données : je conçois des workflows qui tournent seuls, 24 h/24.' },
  { title: "Intégration d'outils", text: 'Vos logiciels se parlent enfin : CRM, tableur, messagerie, agenda, outil de facturation, connectés via API.' },
  { title: 'Intelligence artificielle', text: "Assistants internes, tri d'e-mails, extraction de données depuis vos documents, réponses clients assistées." },
  { title: 'Sites web', text: 'Sites vitrines rapides, clairs et faciles à mettre à jour, reliés directement à vos automatisations.' },
]

export const useCases = [
  { task: 'Demandes de devis', before: 'Vous recopiez chaque demande dans votre CRM, puis rédigez la réponse de zéro.', after: 'Le formulaire crée le contact, prépare un brouillon de réponse et vous prévient.' },
  { task: 'Factures fournisseurs', before: 'Les PDF s’accumulent dans la boîte mail et sont classés en fin de mois.', after: 'Chaque facture est lue, renommée, rangée et reportée dans votre tableau de suivi.' },
  { task: 'Reporting', before: 'Le lundi matin, vous assemblez les chiffres de trois outils différents.', after: 'Le récapitulatif des ventes et des rendez-vous arrive seul dans votre boîte mail.' },
]

export const steps = [
  { title: 'Audit', duration: '30 min offertes', text: 'On repère ensemble les tâches qui vous coûtent le plus de temps.' },
  { title: 'Proposition', duration: 'sous 72 h', text: 'Une solution chiffrée, avec le temps gagné estimé, sans engagement.' },
  { title: 'Mise en place', duration: '', text: 'Construction, tests sur vos vraies données, puis mise en production.' },
  { title: 'Suivi', duration: '', text: 'Prise en main, documentation et ajustements pour que tout reste fiable.' },
]

// Liste du haut de page : durées moyennes indicatives, en minutes par semaine.
export const tasks = [
  { label: 'Recopier les commandes dans le tableur', minutes: 45, preset: true },
  { label: 'Relancer les factures impayées', minutes: 30, preset: true },
  { label: 'Répondre aux mêmes questions par e-mail', minutes: 60, preset: true },
  { label: 'Préparer le reporting du lundi', minutes: 40, preset: false },
  { label: 'Classer les justificatifs et factures', minutes: 35, preset: false },
  { label: 'Saisir les rendez-vous dans l’agenda', minutes: 20, preset: false },
]

export const needs = [
  'Automatisation de processus',
  "Intégration d'outils",
  'Intelligence artificielle',
  'Site web',
  'Je ne sais pas encore',
]
