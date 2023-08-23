import React from 'react'
import { nanoid } from "nanoid"
function AddNewTodo({ task, setTask, todos, setTodos }) {
    const handleInput = (e) => {
        setTask({ ...task, name: e.target.value })
        console.log(task)
    }
    const saveTodo = () => {
        setTodos([...todos, task])
        console.log(todos)
        setTask({
            id: nanoid(),
            name: "",
            status: 0
        })
    }
    return (
        <div className='add_new'>
            <input type="text" placeholder='New Todo' value={task.name} onChange={handleInput} />
            <button onClick={saveTodo}>Save</button>
        </div>
    )
}

export default AddNewTodo