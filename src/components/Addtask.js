import { useState } from 'react'

const Addtask = ({ createTask, editTask, taskContent }) => {
  const [text, setText] = useState()

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('You must give a text to the task')
      return
    }

    if (taskContent) {
      editTask(text)
      setText('')
      return
    }

    createTask(text)

    setText('')
  }

  return (
    <form className="task-add" onSubmit={onSubmit}>
      <div className="form-body">
        <label htmlFor="text">{taskContent ? 'Edit task:' : 'New task:'}</label>
        <input
          type="text"
          placeholder={taskContent ? taskContent : 'Task text'}
          value={text}
          onChangeCapture={(e) => setText(e.target.value)}
        />
        <input
          type="submit"
          value={taskContent ? 'Edit' : 'Add'}
          className="submit"
        />
      </div>
    </form>
  )
}

export default Addtask
