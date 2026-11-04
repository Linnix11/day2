import { useState } from 'react'
import { Container, btn } from './ui'
import { nav } from '../data'

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <Container className="relative flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-ink no-underline" aria-label="Axion Studio, accueil">
          <span aria-hidden="true" className="relative size-6 rounded-[7px] bg-linear-135 from-accent to-accent-2 after:absolute after:inset-[7px] after:rounded-full after:bg-bg" />
          axion<span className="font-medium text-muted">studio</span>
        </a>

        <button
          className="flex size-11 flex-col justify-center gap-[5px] p-2.5 md:hidden"
          aria-expanded={open}
          aria-controls="nav"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen(o => !o)}
        >
          <span className="h-0.5 bg-ink" /><span className="h-0.5 bg-ink" /><span className="h-0.5 bg-ink" />
        </button>

        <nav
          id="nav"
          className={`${open ? 'flex' : 'hidden'} absolute inset-x-0 top-16 flex-col border-b border-line bg-surface px-4 pt-2 pb-4
                      md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0`}
        >
          {nav.map(item => (
            <a key={item.href} href={item.href} onClick={close}
               className="border-b border-line py-3 text-[0.95rem] font-medium text-ink no-underline hover:text-accent md:border-0 md:py-0">
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={close} className={`${btn.primary} mt-3 min-h-9.5 px-4 text-sm md:mt-0`}>Prendre rendez-vous</a>
        </nav>
      </Container>
    </header>
  )
}
