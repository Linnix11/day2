export function Container({ className = '', children }) {
  return <div className={`mx-auto max-w-[1120px] px-4 md:px-8 ${className}`}>{children}</div>
}

export function Section({ id, tone = 'paper', className = '', children }) {
  return (
    <section id={id} className={`scroll-mt-16 py-20 md:py-24 ${tone === 'alt' ? 'bg-paper-2' : ''} ${className}`}>
      <Container>{children}</Container>
    </section>
  )
}

export function SectionHead({ title, children }) {
  return (
    <header className="mb-10 max-w-2xl">
      <h2 className="text-[2rem] leading-tight md:text-5xl">{title}</h2>
      {children && <p className="mt-4 font-serif text-lg leading-[1.6] text-muted">{children}</p>}
    </header>
  )
}

const base = 'inline-flex min-h-12 items-center justify-center rounded-md px-6 text-base font-medium no-underline transition-colors duration-150 cursor-pointer'
export const btn = {
  primary: `${base} bg-pen text-on-pen hover:bg-ink`,
  ghost: `${base} border border-rule text-ink hover:border-pen hover:text-pen`,
}
