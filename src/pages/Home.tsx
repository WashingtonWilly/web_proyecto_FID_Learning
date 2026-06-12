import Navigation from '../sections/Navigation'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Componentes from '../sections/Componentes'
import Team from '../sections/Team'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Componentes />
      <Team />
      <Footer />
    </main>
  )
}
