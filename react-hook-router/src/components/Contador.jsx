import { useState, useEffect } from 'react'
import './styles/Contador.css'

function Contador() {
    const [count, setCount] = useState(0)

    const decrementar = () =>{
        setCount(count - 1)
    }

    const reiniciar = () =>{
        setCount(0)
    }

    const incrementar = () =>{
        setCount(count + 1)
    }

    useEffect(() => {
        document.title = `Contador: ${count}`
    }, [count])

    return(
        <div className='contador'>
            <h2>Contador: {count}</h2>
            <div className='botones'>
                <button onClick={decrementar}>Decrementar</button>
                <button onClick={reiniciar}>Reiniciar</button>
                <button onClick={incrementar}>Incrementar</button>
            </div>
        </div>
    )
}
export default Contador