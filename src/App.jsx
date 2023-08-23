import React, { useState } from 'react'
import { nanoid } from "nanoid"
import AddNewTodo from './components/AddNewTodo'
function App() {
  const [todos, setTodos] = useState([])
  const [task, setTask] = useState({
    id: nanoid(),
    name: "",
  

  })

  const deleteTask = (id) => {
    setTodos([...todos.filter((a) => a.id !== id)])
  }

  return (
    <main>
      <section className='todos'>
        <header><h1>Todo List</h1></header>
        <AddNewTodo task={task} setTask={setTask} todos={todos} setTodos={setTodos} />
        <ul>
          {todos.length ? (
            todos.map((a) => (
              <li key={a.id} onClick={(e) => completeTask(a.id, e)}>
                {a.status === 1 ? (
                  <div>
                    <input type="text" value={a.name} onChange={(e) => changeName(a.id, e)} />
                    <button onClick={() => saveEditTask(a.id)}>Save</button>
                  </div>
                ) : (
                  <>
                    <b style={{ textDecoration: a.status === 2 ? "line-through" : "" }}> {a.name}</b>
                    <div>
                      <button onClick={() => deleteTask(a.id)}>Delete</button>
                    </div>
                  </>
                )}
              </li>
            ))
          ) : (<h1>Task yoxdur</h1>)}
        </ul>
      </section>

    </main>
  )
}

export default App