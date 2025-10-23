import { useState } from 'react'
import './styles/FormularioNombre.css'

function FormularioNombre(){
    const [nombre, setNombre] = useState('')

    const capturaNombre = (e) => {
        setNombre(e.target.value)
    }

    return(
        <div className='formulario-nombre'>
            <h2>Hola, {nombre || "Invitado Anonimo"}!</h2>

            <input
                type='text'
                placeholder='Ingrese su nombre...'
                value={nombre}
                onChange={capturaNombre}
            />
        </div>
    )
}

export default FormularioNombre