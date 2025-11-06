import './TaskCreator.css'
import { useState, useEffect } from 'react'

const URL_API = 'http://localhost:3000/tasks'

function TaskCreator() {

    const [task, setTask] = useState({
        id: '',
        nombre: '',
        descripcion: ''
    })

    const [tasks, setTasks] = useState([])

    const manejadorCambios = (e) => {
        const {name, value} = e.target
        setTask({...task, [name]: value})
    }

    const crearTarea = () => {
        fetch(URL_API, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(task)
        })
        .then(res => res.json())
        .then(data => {
            setTasks([...tasks, data])
            setTask({
                id: '',
                nombre: '',
                descripcion: ''
            })
        })
    }

    useEffect(() => {
        fetch(URL_API)
        .then(res => res.json())
        .then(data => {
            setTasks(data)
        })
    }, [])

    return (
        <div className='body'>
            <div className='container'>
                <div className='card'>
                    <h1 className='h1'>Crear Tarea</h1>

                    <div className='form-group'>
                        <label htmlFor='id' className='label'>id(Negocio):</label>
                        <input 
                            className='input'
                            type='text' 
                            id='id' 
                            name='id'
                            placeholder='Ejemplo: 123456'
                            value={task.id}
                            onChange={manejadorCambios}
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='nombre' className='label'>Nombre:</label>
                        <input 
                            className='input'
                            type='text' 
                            id='nombre' 
                            name='nombre'
                            placeholder='Ejemplo: Tarea 1'
                            value={task.nombre}
                            onChange={manejadorCambios}
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='descripcion' className='label'>Descripción:</label>
                        <textarea 
                            className='textarea'
                            type='text' 
                            id='descripcion' 
                            name='descripcion'
                            placeholder='Ejemplo: Descripción de la tarea 1'
                            value={task.descripcion}
                            onChange={manejadorCambios}
                        />
                    </div>

                    <button className='button' onClick={crearTarea}>Crear Tarea</button>
                </div>


                <div className='tasks-list'>
                    <h2 className='h2'>Tareas: ({tasks.length})</h2>

                    {tasks.map((t) => (
                            <div className='task-item' key={t.id}>
                                <p className='task-id'>{t.id}</p>
                                <p className='task-name'>{t.nombre}</p>
                                <p className='task-description'>{t.descripcion}</p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default TaskCreator