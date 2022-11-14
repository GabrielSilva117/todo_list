import Task from './Task.js'

const TaskList = ({ key, task, taskDel, taskTodo }) => {
  return (
    <>
      {task.map((task) => (
        <Task key={task.id} task={task} taskDel={taskDel} taskTodo={taskTodo} />
      ))}
    </>
  )
}

export default TaskList
