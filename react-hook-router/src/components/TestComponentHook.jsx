import { useState, useEffect } from 'react'

function TestComponentHook() {
    //Sintax: const [variable, setVariable] = useState(initialValue)
    //variable: El nombre de la variable que va a almacenar el valor
    //setVariable: La funcion encargada de actualizar la variable
    //initialValue: Valor inicial de la variable
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    const [available, setAvailable] = useState(true)

    useEffect(() => {
      //Codigo que se va a ejecutar cuando el componente se monte
        console.log('useEffect se ha ejecutado')

        return () => { // Opcional - Codigo que se va a ejecutar cuando el componente se desmonte
            console.log('useEffect se ha desmontado')
        }
    }, [])
        //[] -> Se ejecuta una vez al montar el componente
        //[dependencia] -> Se ejecuta cuando la dependencia cambia

    const changeStates = () =>{
        setCount(count + 1)
        setName('Jhan Carlos')
        setAvailable(!available)
    }
  return (
    <>
        <h1>Test Component Hook</h1>
        <p>Count: {count}</p>
        <p>Name: {name || 'No name'}</p>
        <p>Available: {available ? 'Yes' : 'No'}</p>

        <button onClick={changeStates}>Change States</button>
    </>
  )
}

export default TestComponentHook