import { Section, SectionHead, Eyebrow } from './ui'
import { services, useCases, steps, company } from '../data'

const card = 'rounded-xl border border-line bg-surface'
const pad = (n) => String(n + 1).padStart(2, '0')

export function Services() {
  return (
    <Section id="services">
      <SectionHead eyebrow="Services" title="Ce que je fais pour vous" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <article key={s.title} className={`${card} p-8`}>
            <span className="mb-4 block font-mono text-sm text-accent">{pad(i)}</span>
            <h3 className="mb-2 text-lg leading-tight font-medium">{s.title}</h3>
            <p className="text-muted">{s.text}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}

export function UseCases() {
  return (
    <Section id="exemples" alt>
      <SectionHead eyebrow="Exemples" title="Ce qu'on peut automatiser chez vous">
        Des cas types, pour vous donner une idée. Chaque projet part de votre façon de travailler.
      </SectionHead>
      <div className="grid gap-5 md:grid-cols-3">
        {useCases.map(u => (
          <article key={u.title} className={`${card} border-l-3 border-l-accent-2 px-8 py-6`}>
            <p className="mb-4 inline-block rounded-md bg-accent/10 px-2 py-0.5 font-mono text-xs font-medium text-accent">{u.tag}</p>
            <h3 className="mb-2 text-lg leading-tight font-medium">{u.title}</h3>
            <p className="text-muted">{u.text}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}

export function Method() {
  return (
    <Section id="methode">
      <SectionHead eyebrow="Méthode" title="Comment se déroule un projet" />
      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.title} className="border-t-2 border-ink pt-6">
            <span className="mb-2 block font-display text-3xl font-semibold text-accent">{pad(i)}</span>
            <h3 className="mb-2 text-lg leading-tight font-medium">{s.title}</h3>
            <p className="text-muted">{s.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export function About() {
  return (
    <Section id="apropos" alt>
      <div className="grid items-center gap-10 md:grid-cols-[240px_1fr]">
        <div aria-hidden="true" className="grid aspect-square max-w-60 place-items-center rounded-3xl bg-linear-135 from-accent to-accent-2">
          <span className="font-display text-6xl leading-tight font-semibold text-white">AC</span>
        </div>
        <div className="max-w-2xl">
          <Eyebrow>À propos</Eyebrow>
          <h2 className="mb-4 text-3xl md:text-4xl">{company.owner}</h2>
          <p className="mb-4">
            Je suis le fondateur d'{company.brand}, une micro-entreprise spécialisée dans l'automatisation et
            l'intelligence artificielle appliquées au quotidien des entreprises.
          </p>
          <p>
            Mon objectif : des solutions simples, qui fonctionnent avec les outils que vous utilisez déjà, et que
            vous comprenez. Basé à Montlignon, dans le Val-d'Oise, j'interviens sur place en Île-de-France et à
            distance partout en France.
          </p>
        </div>
      </div>
    </Section>
  )
}

export function Legal() {
  const rows = [
    ['Éditeur', `${company.owner}, entrepreneur individuel (micro-entreprise), nom commercial « ${company.tradeName} »`],
    ['Siège', company.siege],
    ['SIRET', company.siret],
    ['TVA', 'TVA non applicable, art. 293 B du CGI'],
    ['Contact', <a href={`mailto:${company.email}`} className="-my-3 inline-block py-3 text-accent">{company.email}</a>],
    ['Directeur de la publication', company.owner],
    ['Hébergeur', company.host],
  ]
  return (
    <Section id="mentions" alt className="py-16! text-sm">
      <h2 className="text-2xl leading-tight">Mentions légales</h2>
      <dl className="mt-6 grid gap-x-6 gap-y-1 sm:grid-cols-[minmax(120px,220px)_1fr] sm:gap-y-2">
        {rows.map(([k, v]) => (
          <div key={k} className="contents">
            <dt className="text-muted">{k}</dt>
            <dd className="mb-3 break-words sm:mb-0">{v}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-line py-6 text-sm text-muted">
      <div className="mx-auto flex max-w-[1120px] flex-wrap justify-between gap-x-8 gap-y-2 px-4 md:px-8">
        <p><strong className="text-ink">{company.brand}</strong> — {company.owner}, EI · Micro-entreprise</p>
        <p>TVA non applicable, art. 293 B du CGI</p>
        <p>© {new Date().getFullYear()} {company.domain} · <a href="#mentions" className="-my-3 inline-block py-3 text-accent">Mentions légales</a></p>
      </div>
    </footer>
  )
}
