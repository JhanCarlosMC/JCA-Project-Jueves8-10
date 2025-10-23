import { useState } from 'react'
import './styles/Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  })

  const [enviado, setEnviado] = useState(false)

  const manejarCambio = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const manejarEnvio = (e) => {
    e.preventDefault()
    console.log('Datos del formulario:', formData)
    setEnviado(true)

    // Reiniciar después de 3 segundos
    setTimeout(() => {
      setEnviado(false)
      setFormData({ nombre: '', email: '', mensaje: '' })
    }, 3000)
  }

  return (
    <div className="page contact-page">
      <h1>📬 Contáctanos</h1>

      {enviado ? (
        <div className="mensaje-exito">
          <h2>✅ ¡Mensaje enviado con éxito!</h2>
          <p>Nos pondremos en contacto pronto.</p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={manejarEnvio}>
          <div className="form-group">
            <label>Nombre:</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={manejarCambio}
              required
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={manejarCambio}
              required
            />
          </div>

          <div className="form-group">
            <label>Mensaje:</label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={manejarCambio}
              rows="5"
              required
            />
          </div>

          <button type="submit">Enviar Mensaje</button>
        </form>
      )}
    </div>
  )
}

export default Contact