import {useState,useContext} from 'react'
import { TaskContext } from '../context/TaskContext'



function TaskForm() {
    const [Title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const {createTask} = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        createTask({
            Title,
            description
        })
        setTitle('')
        setDescription('')
    } 

    return (
        <div className='max-w-md mx-auto'>
            <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'>
            <h1 className='text-2xl font-bold text-white mb-3'>Crea tu Tarea</h1>
            <input placeholder='Escribe tu tarea'
            onChange={(e)=> {
                setTitle(e.target.value)
            }}
            value={Title}
            className='p-3 bg-slate-300 w-full mb-2'
            autoFocus
            />
            <textarea placeholder='Describe la tarea' onChange={(e)=> 
                setDescription(e.target.value)} value={description}
                className='p-3 bg-slate-300 w-full mb-2'></textarea>
            <button className='bg-indigo-500 px-3 py-1 text-white'>
                Guardar
            </button>
        </form>
        </div>
    );
}

export default TaskForm