import './App.css'
import reactLogo from './assets/react.svg'

function App(){ {/* Declaracion del componente */}
{/**Creacion de variables */}
  const nombre = 'Jhan Carlos Martinez '
  const edad = 24
  const titulo = "Ingeniero en sistemas"
  const ubicacion = "Armenia - Colombia"
  const disponibilidad = false
  const habilidades =  ['React', 'JavaScript', 'HTML', 'CSS']

  return(
    <div> {/* Fragment*/}

      <h1>Carta de Presentacion</h1>
      <h2>Hola soy <span>{nombre}</span></h2>  {/* Interpolacion*/}
      <img src={reactLogo} alt="React Logo"/>
      <p> <strong>Edad:</strong> {edad} años</p>
      <p> <strong>Titulo:</strong> {titulo}</p>
      <p> <strong>Ubicacion:</strong> {ubicacion}</p>
      <p> <strong>Disponibilidad:</strong> {disponibilidad ? 'Si' : 'No'}</p>
      

      <p><strong>Habilidades</strong></p>
      <p>{habilidades.join(', ')}</p>
    </div>
  )
}

{/* Exportacion del componente */}
export default App 
