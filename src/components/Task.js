import { BsFillTrashFill } from "react-icons/bs";

const Task = ({task}) => {
  return (
    <>
      <h3 className="chore">
        {task.text}
        <BsFillTrashFill style={{cursor: 'pointer'}}/>
      </h3>
    </>
  )
}

export default Task