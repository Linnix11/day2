export function Container({ className = '', children }) {
  return <div className={`mx-auto max-w-[1120px] px-4 md:px-8 ${className}`}>{children}</div>
}

export function Eyebrow({ children }) {
  return <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-accent">{children}</p>
}

export function Section({ id, alt = false, className = '', children }) {
  return (
    <section id={id} className={`scroll-mt-16 py-20 md:py-24 ${alt ? 'bg-bg-alt' : ''} ${className}`}>
      <Container>{children}</Container>
    </section>
  )
}

export function SectionHead({ eyebrow, title, children }) {
  return (
    <header className="mb-10 max-w-2xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-3xl md:text-4xl">{title}</h2>
      {children && <p className="mt-3 text-muted">{children}</p>}
    </header>
  )
}

const btnBase = 'inline-flex min-h-11 items-center justify-center rounded-full border px-6 text-[0.95rem] font-semibold no-underline transition-transform hover:-translate-y-px cursor-pointer'
export const btn = {
  primary: `${btnBase} border-accent bg-accent text-on-accent`,
  ghost: `${btnBase} border-line bg-transparent text-ink`,
}
