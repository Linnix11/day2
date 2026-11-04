// Menu mobile
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

// Année du footer
document.getElementById('year').textContent = new Date().getFullYear();

// Formulaire de contact (validation côté client, envoi via le client mail)
const form = document.getElementById('contact-form');
const rules = {
  nom: v => v.trim() ? '' : 'Indiquez votre nom.',
  email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Indiquez une adresse e-mail valide, par ex. nom@exemple.fr.',
  message: v => v.trim().length >= 10 ? '' : 'Décrivez votre projet en quelques mots (10 caractères minimum).',
};
function check(field) {
  const msg = rules[field.name](field.value);
  document.getElementById(field.name + '-err').textContent = msg;
  field.setAttribute('aria-invalid', msg ? 'true' : 'false');
  return !msg;
}
Object.keys(rules).forEach(name => {
  const f = form.elements[name];
  f.addEventListener('blur', () => check(f));
  f.addEventListener('input', () => { if (f.getAttribute('aria-invalid') === 'true') check(f); });
});
form.addEventListener('submit', e => {
  e.preventDefault();
  const fields = Object.keys(rules).map(n => form.elements[n]);
  const ok = fields.map(check).every(Boolean);
  const status = form.querySelector('.form-status');
  if (!ok) { fields.find(f => f.getAttribute('aria-invalid') === 'true').focus(); status.textContent = ''; return; }
  const d = new FormData(form);
  const body = `Nom : ${d.get('nom')}\nE-mail : ${d.get('email')}\nProjet : ${d.get('type')}\n\n${d.get('message')}`;
  window.location.href = `mailto:arthur.champagne@icloud.com?subject=${encodeURIComponent('Demande Axion Studio – ' + d.get('type'))}&body=${encodeURIComponent(body)}`;
  status.textContent = 'Merci ! Votre logiciel de messagerie s’ouvre pour finaliser l’envoi.';
});
