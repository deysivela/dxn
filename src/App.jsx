import Navbar         from './components/layout/Navbar'
import HomePage       from './pages/HomePage'
import WhatsAppFloat  from './components/ui/WhatsAppFloat'

export default function App() {
  return (
    <>
      <a href="#contenido" className="skipLink">Saltar al contenido</a>
      <Navbar />
      <main id="contenido">
        <HomePage />
      </main>
      <WhatsAppFloat />
    </>
  )
}
