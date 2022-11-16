import { useEffect, useState } from 'react'
import Header from './components/Header'
import TaskList from './components/TaskList'
import Addtask from './components/Addtask'
import { v4 as uuidv4 } from 'uuid'

const App = () => {
  const [tasks, setTasks] = useState([])
  const [filteredTasks, setFilteredTasks] = useState([])
  const [selected, setSelected] = useState('All')

  const taskDelete = (id) => {
    setTasks(tasks.filter((tasks) => tasks.id !== id))
  }

  const taskTodo = (id) => {
    setTasks(
      tasks.map((tasks) =>
        tasks.id === id ? { ...tasks, todo: !tasks.todo } : tasks
      )
    )
  }

  const createTask = (text) => {
    let taskId = uuidv4()
    const newTask = { id: taskId, text: text, todo: true }
    setTasks([...tasks, newTask])
  }

  const editTask = (id, text) => {
    let newText = prompt(`Edit: ${text}`)
    setTasks(
      tasks.map((tasks) =>
        tasks.id === id ? { ...tasks, text: newText } : tasks
      )
    )
  }

  const taskListType = () => {
    console.log(filteredTasks)
    switch (selected) {
      case 'Done':
        setFilteredTasks(tasks.filter((tasks) => tasks.todo !== true))
        break
      case 'Todo':
        setFilteredTasks(tasks.filter((tasks) => tasks.todo !== false))
        break
      default:
        setFilteredTasks(tasks)
        break
    }
  }

  useEffect(() => {
    taskListType()
  }, [tasks, selected])

  return (
    <div className="main">
      <Header createTask={createTask} setSelected={setSelected} />
      {tasks.length > 0 ? (
        <TaskList
          filteredTasks={filteredTasks}
          taskDel={taskDelete}
          taskTodo={taskTodo}
      {showForm === true ? <Addtask createTask={createTask} /> : ''}
        {tasks.length > 0 ? (
      <div className='task-list'>
          
            editTask={editTask}
            taskTodo={taskTodo}
            taskDel={taskDelete}
            filteredTasks={filteredTasks}
          <TaskList
        {tasks.length > 0 ? (
      <div className='task-list'>
        ) : (
          <h3>You have no tasks available, enjoy yourself!</h3>
        )}
      </div>
    </div>
  )
}

export default App
