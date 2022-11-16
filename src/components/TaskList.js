import Task from './Task.js'

const TaskList = ({ key, filteredTasks, taskDel, taskTodo, editTask }) => {
  return (
    <>
      {filteredTasks.map((filteredTasks) => (
        <Task
          key={filteredTasks.id}
          filteredTasks={filteredTasks}
          taskDel={taskDel}
          taskTodo={taskTodo}
          editTask={editTask}
        />
      ))}
    </>
  )
}

export default TaskList
