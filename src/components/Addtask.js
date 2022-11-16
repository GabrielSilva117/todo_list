import { useState } from "react"

const Addtask = ({createTask}) => {
  const [text, setText] = useState('')
  
  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('You must give a text to the task')
      return
    }

    createTask(text)

    setText('')
  }

  return (
    <form className="task-add" onSubmit={onSubmit}>
      <div className="form-body">
        <label htmlFor="text">New task:</label>
        <input type="text" placeholder="Task text" value={text} onChange={(e) => setText(e.target.value)}/>
        <input type="submit" value="Add" className="submit"/>
      </div>
    </form>
  )
}

export default Addtask