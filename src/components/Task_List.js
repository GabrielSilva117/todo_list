import Task from './Task.js'

const TaskList = ({ task }) => {
  console.log(task)
  return (
    <>
      {task.map((task) => (
        <Task task={task} />
      ))}
    </>
  )
}

export default TaskList
