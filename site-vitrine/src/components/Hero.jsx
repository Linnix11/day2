import { Container, Eyebrow, btn } from './ui'

const flow = [
  { label: 'Nouveau formulaire', dot: 'bg-accent-2' },
  { label: 'IA · tri & résumé', dot: 'bg-accent' },
  { label: 'CRM mis à jour', dot: 'bg-accent-2' },
  { label: 'E-mail envoyé', dot: 'bg-accent' },
]

function FlowDiagram() {
  return (
    <div aria-hidden="true" className="rounded-2xl border border-line bg-surface p-7 shadow-[0_24px_60px_-30px_rgba(79,70,229,0.45)]">
      {flow.map((step, i) => (
        <div key={step.label}>
          {i > 0 && <div className="h-5.5 w-0.5 bg-linear-to-b from-accent to-accent-2 opacity-60" style={{ marginLeft: `calc(${(i - 1) * 12}% + 28px)` }} />}
          <div className="inline-flex items-center gap-2.5 rounded-[10px] border border-line bg-bg px-4 py-3 font-mono text-sm font-medium" style={{ marginLeft: `${i * 12}%` }}>
            <span className={`size-2 animate-pulse-soft rounded-full ${step.dot}`} style={{ animationDelay: `${i * 0.6}s` }} />
            {step.label}
          </div>
        </div>
      ))}
      <p className="mt-5 font-mono text-xs text-muted">Exécuté automatiquement · 0 clic</p>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="pt-18 pb-22">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <Eyebrow>Automatisation · Intelligence artificielle · Web</Eyebrow>
          <h1 className="text-4xl leading-[1.1] sm:text-5xl lg:text-[3.5rem]">
            Arrêtez de faire à la main ce qu'une machine fait{' '}
            <em className="bg-linear-to-r from-accent to-accent-2 bg-clip-text not-italic text-transparent">mieux</em>.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">
            J'aide les TPE, PME et indépendants à automatiser leurs tâches répétitives, à connecter leurs outils
            et à intégrer l'IA là où elle fait vraiment gagner du temps.
          </p>
          <div className="mt-7 mb-9 flex flex-wrap gap-3">
            <a href="#contact" className={btn.primary}>Réserver un audit gratuit</a>
            <a href="#services" className={btn.ghost}>Voir les services</a>
          </div>
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted">
            <li><strong className="text-ink">Audit</strong> offert de 30 min</li>
            <li><strong className="text-ink">Réponse</strong> sous 48 h</li>
            <li><strong className="text-ink">À distance</strong> partout en France</li>
          </ul>
        </div>
        <FlowDiagram />
      </Container>
    </section>
  )
}
