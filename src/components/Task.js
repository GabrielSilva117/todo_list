import { BsFillTrashFill, BsFillCheckSquareFill } from 'react-icons/bs'

const Task = ({ task, taskDel, taskTodo }) => {
  return (
    <>
      <h3 className={`task ${!task.todo ? 'done' : ''}`}>
        {task.text}
        <BsFillCheckSquareFill
          className="btn_act"
          style={{ cursor: 'pointer' }}
          onClick={() => taskTodo(task.id)}
        />
        <BsFillTrashFill
          style={{ cursor: 'pointer' }}
          onClick={() => taskDel(task.id)}
        />
      </h3>
    </>
  )
}

export default Task
