import { useEffect, useState } from 'react'
import Header from './components/Header'
import TaskList from './components/TaskList'
import Addtask from './components/Addtask'
import { v4 as uuidv4 } from 'uuid'

const App = () => {
  const [showForm, setShowForm] = useState(false)
  const [tasks, setTasks] = useState([])
  const [filteredTasks, setFilteredTasks] = useState([])
  const [selected, setSelected] = useState('All')
  const [taskEdit, setTaskEdit] = useState([])

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

  const addForm = () => {
    setShowForm(!showForm)
  }

  const createTask = (text) => {
    const taskId = uuidv4()
    const newTask = { id: taskId, text: text, todo: true }
    setTasks([...tasks, newTask])
  }

  const editTask = (text) => {
    setTasks(
      tasks.map((tasks) =>
        tasks.id === taskEdit.id ? { ...tasks, text: text } : tasks
      )
    )
    setTaskEdit([])
    return
  }

  const taskContent = (id, text) => {
    if (showForm === false) {
      setShowForm(true)
    }
    setTaskEdit({ id: id, text: text })
  }

  const taskListType = () => {
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
      <Header
        setSelected={setSelected}
        showForm={addForm}
        onAdd={showForm}
      />
      {showForm === true ? (
        <Addtask
          createTask={createTask}
          taskContent={taskEdit.text}
          setTask={setTasks}
          editTask={editTask}
        />
      ) : (
        ''
      )}
      <div className="task-list">
        {tasks.length > 0 ? (
          <TaskList
            filteredTasks={filteredTasks}
            taskDel={taskDelete}
            taskTodo={taskTodo}
            editTask={taskContent}
          />
        ) : (
          <h3>You have no tasks available, enjoy yourself!</h3>
        )}
      </div>
    </div>
  )
}

export default App
