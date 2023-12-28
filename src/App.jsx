import { Boutton } from './components/Boutton/Boutton'
import { Header } from './components/Header/Header'
import './index.css'

function App() {

  return (
    <>
    <Header/>
    <section className="hero">
      <h1 className="title">
        Trouver votre neuble parfait
      </h1>
      <p className='description'>Commender et faire vous livrer tout type de meubles des des prix defiant toutes concurrences</p>
      <Boutton label={"Rechercher un meuble"} isPrimary={true}/>
    </section>
    </>
  )
}

export default App
