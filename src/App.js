import { useState } from "react";
import Header from "./components/Header";

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
      <Header />
    </div>
  )
}

export default App;