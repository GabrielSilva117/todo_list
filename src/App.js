import { useState } from 'react'
import Header from './components/Header'
import TaskList from './components/Task_List'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Morning jog',
      reminde: true
    }
  ])

  return (
    <div className="main">
      <Header />
      <TaskList task={tasks} />
    </div>
  )
}

export default App
