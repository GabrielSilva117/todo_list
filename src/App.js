import { useState } from 'react'
import Header from './components/Header'
import TaskList from './components/Task_List'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
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
  }

  return (
    <div className="main">
      <Header />
      {tasks.length > 0 ? <TaskList task={tasks} taskDel={taskDelete} taskTodo={taskTodo}/> : <h3>You have no tasks available, enjoy yourself!</h3>}
    </div>
  )
}

export default App
