import { useState } from "react";

const App = () => {
  const [ tasks, setTasks ] = useState([
    {
      id: 1,
      text: 'Morning jog',
      reminde: true
    }
  ])

  return (
    <div className="main">
    </div>
  )
}

export default App;