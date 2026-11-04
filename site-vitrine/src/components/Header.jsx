import { useState } from 'react'
import { Container, btn } from './ui'
import { nav } from '../data'

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper">
      <Container className="relative flex h-16 items-center justify-between">
        <a href="#" className="flex min-h-11 items-center gap-2 text-lg font-semibold text-ink no-underline" aria-label="Axion Studio, accueil">
          <span aria-hidden="true" className="grid size-6 place-items-center rounded-[5px] bg-pen">
            <span className="h-[3px] w-3.5 rounded-full bg-marker" />
          </span>
          Axion Studio
        </a>

        <button
          className="flex size-11 flex-col justify-center gap-1 p-3 md:hidden"
          aria-expanded={open}
          aria-controls="nav"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen(o => !o)}
        >
          <span className="h-0.5 bg-ink" /><span className="h-0.5 bg-ink" /><span className="h-0.5 bg-ink" />
        </button>

        <nav
          id="nav"
          className={`${open ? 'flex' : 'hidden'} absolute inset-x-0 top-16 flex-col border-b border-rule bg-paper px-4 pt-2 pb-4
                      md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:p-0`}
        >
          {nav.map(item => (
            <a key={item.href} href={item.href} onClick={close}
               className="flex min-h-11 items-center border-b border-rule text-base text-ink no-underline hover:text-pen md:border-0">
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={close} className={`${btn.primary} mt-3 min-h-11 md:mt-0`}>Réserver un appel</a>
        </nav>
      </Container>
    </header>
  )
}
