import Header from './components/Header'
import Hero from './components/Hero'
import Contact from './components/Contact'
import { Services, UseCases, Method, About, Legal, Footer } from './components/Sections'

export default function App() {
  return (
    <>
      <a href="#contenu" className="absolute -left-[999px] focus:top-4 focus:left-4 focus:z-[100] focus:bg-paper focus:inline-flex focus:min-h-11 focus:items-center focus:px-4">
        Aller au contenu
      </a>
      <Header />
      <main id="contenu">
        <Hero />
        <Services />
        <UseCases />
        <Method />
        <About />
        <Contact />
        <Legal />
      </main>
      <Footer />
    </>
  )
}
