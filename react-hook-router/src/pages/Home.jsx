import './styles/Home.css'

function Home() {
  return (
    <div className="page home-page">
      <h1>🏠 Bienvenido a Mi App</h1>
      <p className="intro">
        Esta es una aplicación de demostración de React con Hooks y React Router.
      </p>

      <div className="features">
        <div className="feature-card">
          <h3>⚡ Rápido</h3>
          <p>Navegación sin recargas de página</p>
        </div>
        <div className="feature-card">
          <h3>🎨 Moderno</h3>
          <p>Diseño limpio y responsive</p>
        </div>
        <div className="feature-card">
          <h3>🚀 Potente</h3>
          <p>Construido con React y Hooks</p>
        </div>
      </div>
    </div>
  )
}

export default Home