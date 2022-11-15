import { BsFillTrashFill, BsFillCheckSquareFill, BsFillPencilFill } from 'react-icons/bs'

const Task = ({ filteredTasks, taskDel, taskTodo, editTask }) => {
  return (
    <>
      <h3 className={`task ${!filteredTasks.todo ? 'done' : ''}`}>
        {filteredTasks.text}
      <section>  
        <BsFillCheckSquareFill
          className="btn-act"
          onClick={() => taskTodo(filteredTasks.id)}
        />
        <BsFillPencilFill
          className='btn-act'
          onClick={() => editTask(filteredTasks.id, filteredTasks.text)}
        />
        <BsFillTrashFill
          className='btn-act'
          onClick={() => taskDel(filteredTasks.id)}
        />
      </section>
      </h3>
    </>
  )
}

export default Task
