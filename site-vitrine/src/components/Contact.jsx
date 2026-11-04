import { useState } from 'react'
import { Section, Eyebrow, btn } from './ui'
import { company, needs } from '../data'

const rules = {
  nom: v => (v.trim() ? '' : 'Indiquez votre nom.'),
  email: v => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Indiquez une adresse e-mail valide, par ex. nom@exemple.fr.'),
  message: v => (v.trim().length >= 10 ? '' : 'Décrivez votre projet en quelques mots (10 caractères minimum).'),
}

const input = 'w-full min-h-11 rounded-lg border bg-bg px-3 py-2.5 text-ink'

function Field({ id, label, error, children }) {
  return (
    <div className="mb-4.5">
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold">{label}</label>
      {children}
      {error && <p id={`${id}-err`} className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  )
}

export default function Contact() {
  const [values, setValues] = useState({ nom: '', email: '', type: needs[0], message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')

  const validate = name => {
    const msg = rules[name](values[name])
    setErrors(e => ({ ...e, [name]: msg }))
    return msg
  }

  const onChange = e => {
    const { name, value } = e.target
    setValues(v => ({ ...v, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: rules[name](value) }))
  }

  const onSubmit = e => {
    e.preventDefault()
    const next = Object.fromEntries(Object.keys(rules).map(k => [k, rules[k](values[k])]))
    setErrors(next)
    const firstBad = Object.keys(next).find(k => next[k])
    if (firstBad) { document.getElementById(firstBad)?.focus(); setStatus(''); return }
    const body = `Nom : ${values.nom}\nE-mail : ${values.email}\nBesoin : ${values.type}\n\n${values.message}`
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(`Demande ${company.brand} – ${values.type}`)}&body=${encodeURIComponent(body)}`
    setStatus('Merci ! Votre logiciel de messagerie s’ouvre pour finaliser l’envoi.')
  }

  const fieldProps = name => ({
    id: name, name, value: values[name], onChange,
    onBlur: rules[name] ? () => validate(name) : undefined,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `${name}-err` : undefined,
    className: `${input} ${errors[name] ? 'border-red-600' : 'border-line'}`,
  })

  const infos = [
    ['E-mail', <a href={`mailto:${company.email}`} className="text-accent">{company.email}</a>],
    ['Téléphone', <a href={`tel:${company.phoneHref}`} className="text-accent">{company.phone}</a>],
    ['Zone', `${company.city} · Île-de-France · à distance`],
    ['Site', company.domain],
  ]

  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h2 className="mb-4 text-3xl md:text-4xl">Parlons de votre projet</h2>
          <p>Décrivez la tâche qui vous fait perdre du temps, je vous réponds sous 48 heures ouvrées.</p>
          <ul className="mt-7">
            {infos.map(([k, v]) => (
              <li key={k} className="grid grid-cols-[100px_1fr] gap-3 border-b border-line py-3 break-words">
                <span className="text-sm text-muted">{k}</span>{v}
              </li>
            ))}
          </ul>
        </div>

        <form noValidate onSubmit={onSubmit} className="rounded-xl border border-line bg-surface p-7">
          <Field id="nom" label="Nom" error={errors.nom}>
            <input {...fieldProps('nom')} autoComplete="name" required />
          </Field>
          <Field id="email" label="E-mail" error={errors.email}>
            <input {...fieldProps('email')} type="email" autoComplete="email" required />
          </Field>
          <Field id="type" label="Besoin">
            <select {...fieldProps('type')}>
              {needs.map(n => <option key={n}>{n}</option>)}
            </select>
          </Field>
          <Field id="message" label="Votre projet" error={errors.message}>
            <textarea {...fieldProps('message')} rows={5} required className={`${fieldProps('message').className} resize-y`} />
          </Field>
          <button type="submit" className={btn.primary}>Envoyer la demande</button>
          <p role="status" aria-live="polite" className="mt-3.5 font-medium">{status}</p>
        </form>
      </div>
    </Section>
  )
}
