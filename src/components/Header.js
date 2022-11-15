import Button from './Button'
import Addtask from './Addtask'
import Select from './Select'

const Header = ({createTask, setSelected}) => {
  return (
    <header className="header">
      <h1 className="title">Todo List</h1>
      <Select setSelected={setSelected}/>
      <Button color={'black'} text={'Add'}/>
      {<Addtask createTask={createTask}/>}
    </header>
  )
}

export default Header