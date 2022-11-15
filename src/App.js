import { useState } from 'react'
import Header from './components/Header'
import TaskList from './components/TaskList'
import { v4 as uuidv4 } from 'uuid'

const App = () => {
  const [tasks, setTasks] = useState([
    {
  const [selected, setSelected] = useState('All')
      text: 'Morning jog',
      todo: true
    },
    {
      id: 2,
      text: 'Afternoon workout',
      todo: true
    },
    {
      id: 3,
      text: 'Dinner with family',
      todo: true
    }
  ])

  const taskDelete = (id) => {
    setTasks(tasks.filter((tasks) => tasks.id !== id))
  }

  const taskTodo = (id) => {
    setTasks(tasks.map((tasks) => tasks.id === id ? {...tasks, todo: !tasks.todo} : tasks))
  const createTask = (text) => {
    let taskId = uuidv4()
    const newTask = { id: taskId, text: text, todo: true }
    setTasks([...tasks, newTask])
  }

  return (
    <div className="main">
      <Header />
      {tasks.length > 0 ? (
        <TaskList
          filteredTasks={filteredTasks}
          taskDel={taskDelete}
          taskTodo={taskTodo}
          editTask={editTask}
        />
      ) : (
        <h3>You have no tasks available, enjoy yourself!</h3>
      )}
    </div>
  )
}

export default App
