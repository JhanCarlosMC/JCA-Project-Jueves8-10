
import Header from './components/Header'
import Saludo from './components/Saludo'
import './App.css'

function App() {

  return (
    <>
      <Header />

      <div className="saludo-container">
        <h2>Componentes con Propiedades</h2>
      </div>

      <main>

        <Saludo nombre="Juan" />
        <Saludo nombre="Jhan" edad={24} />
        <Saludo nombre="Jorge" edad={26} peso={70} />
      </main>
    </>
  )
}

export default App