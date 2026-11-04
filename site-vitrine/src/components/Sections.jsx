import { Section, SectionHead } from './ui'
import { services, useCases, steps, company } from '../data'

export function Services() {
  return (
    <Section id="services">
      <SectionHead title="Ce que je fais">
        Quatre types de missions, souvent combinées dans un même projet.
      </SectionHead>
      <dl className="border-t-2 border-ink">
        {services.map(s => (
          <div key={s.title} className="grid gap-2 border-b border-rule py-6 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-8 md:py-8">
            <dt className="text-2xl leading-tight font-medium">{s.title}</dt>
            <dd className="max-w-[60ch] font-serif text-lg leading-[1.6] text-muted">{s.text}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}

export function UseCases() {
  return (
    <Section id="exemples" tone="alt">
      <SectionHead title="Avant, après">
        Des cas types pour vous donner une idée. Chaque projet part de votre façon de travailler.
      </SectionHead>
      <div className="overflow-x-auto rounded-lg border border-rule bg-paper">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="border-b-2 border-ink">
              <th scope="col" className="w-[24%] px-5 py-4 text-sm font-medium text-muted">Tâche</th>
              <th scope="col" className="px-5 py-4 text-sm font-medium text-muted">Avant</th>
              <th scope="col" className="px-5 py-4 text-sm font-medium text-muted">Après</th>
            </tr>
          </thead>
          <tbody>
            {useCases.map(u => (
              <tr key={u.task} className="border-b border-rule last:border-0 align-top">
                <th scope="row" className="px-5 py-5 text-lg leading-tight font-medium">{u.task}</th>
                <td className="px-5 py-5 font-serif leading-[1.6] text-muted">{u.before}</td>
                <td className="px-5 py-5 font-serif leading-[1.6]">
                  <span className="marker mr-2 rounded-sm px-1.5 py-0.5 font-sans text-sm font-medium">automatisé</span>
                  {u.after}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  )
}

export function Method() {
  return (
    <Section id="methode">
      <SectionHead title="Comment on travaille ensemble" />
      <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.title} className="relative border-t-2 border-pen pt-5">
            <p className="text-sm text-pen tabular-nums">Étape {i + 1}{s.duration && `, ${s.duration}`}</p>
            <h3 className="mt-2 text-xl leading-tight font-medium">{s.title}</h3>
            <p className="mt-2 font-serif leading-[1.6] text-muted">{s.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export function About() {
  return (
    <Section id="apropos" tone="alt">
      <div className="max-w-[62ch]">
        <h2 className="text-[2rem] leading-tight md:text-5xl">Qui je suis</h2>
        <div className="mt-8 space-y-5 font-serif text-lg leading-[1.7]">
          <p>
            Je m'appelle {company.owner} et j'ai créé {company.brand} pour une raison simple : trop d'entreprises
            perdent des heures chaque semaine à recopier, relancer et classer à la main.
          </p>
          <p>
            Je construis des automatisations simples, qui fonctionnent avec les outils que vous utilisez déjà et
            que vous comprenez. Pas de logiciel à réapprendre, pas de boîte noire : chaque workflow est documenté
            et vous appartient.
          </p>
          <p>
            Je suis basé à Montlignon, dans le Val-d'Oise. Je me déplace en Île-de-France et je travaille à
            distance partout en France.
          </p>
        </div>
        <p className="mt-8 text-lg font-medium">{company.owner}</p>
        <p className="text-muted">Fondateur, {company.brand}</p>
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
    ['Contact', <a href={`mailto:${company.email}`} className="-my-3 inline-block py-3 text-pen">{company.email}</a>],
    ['Directeur de la publication', company.owner],
    ['Hébergeur', company.host],
  ]
  return (
    <Section id="mentions" className="border-t border-rule py-16! text-sm">
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
    <footer className="border-t border-rule bg-paper-2 py-6 text-sm text-muted">
      <div className="mx-auto flex max-w-[1120px] flex-wrap justify-between gap-x-8 gap-y-2 px-4 md:px-8">
        <p><span className="font-medium text-ink">{company.brand}</span>, {company.owner}, EI en micro-entreprise</p>
        <p>© {new Date().getFullYear()} {company.domain}, <a href="#mentions" className="-my-3 inline-block py-3 text-pen">mentions légales</a></p>
      </div>
    </footer>
  )
}
