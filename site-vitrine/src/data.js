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
  { tag: 'Commercial', title: 'Demande de devis traitée en 2 minutes', text: "Le formulaire du site crée le contact dans le CRM, l'IA prépare un brouillon de réponse et vous êtes notifié." },
  { tag: 'Administratif', title: 'Factures fournisseurs classées seules', text: 'Les PDF reçus par e-mail sont lus, renommés, rangés et les montants reportés dans votre tableau de suivi.' },
  { tag: 'Pilotage', title: 'Reporting hebdo sans copier-coller', text: 'Chaque lundi, un récapitulatif des ventes et des rendez-vous arrive dans votre boîte mail.' },
]

export const steps = [
  { title: 'Audit', text: 'On repère ensemble les tâches qui vous coûtent le plus de temps.' },
  { title: 'Proposition', text: 'Une solution chiffrée, avec le temps gagné estimé, sans engagement.' },
  { title: 'Mise en place', text: 'Construction, tests sur vos vraies données, puis mise en production.' },
  { title: 'Suivi', text: 'Prise en main, documentation et ajustements pour que tout reste fiable.' },
]

export const needs = [
  'Automatisation de processus',
  "Intégration d'outils",
  'Intelligence artificielle',
  'Site web',
  'Je ne sais pas encore',
]
