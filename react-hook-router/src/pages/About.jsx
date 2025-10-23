import './styles/About.css'

function About() {
  return (
    <div className="page about-page">
      <h1>📖 Sobre Nosotros</h1>

      <div className="about-content">
        <section className="about-section">
          <h2>Nuestra Historia</h2>
          <p>
            Somos un equipo apasionado por crear experiencias web increíbles
            usando las últimas tecnologías de React.
          </p>
        </section>

        <section className="about-section">
          <h2>Nuestra Misión</h2>
          <p>
            Proporcionar aplicaciones web rápidas, accesibles y hermosas
            que mejoren la vida de nuestros usuarios.
          </p>
        </section>

        <section className="about-section">
          <h2>Tecnologías</h2>
          <div className="tech-list">
            <span className="tech-badge">⚛️ React</span>
            <span className="tech-badge">🎣 Hooks</span>
            <span className="tech-badge">🛣️ React Router</span>
            <span className="tech-badge">🎨 CSS3</span>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About