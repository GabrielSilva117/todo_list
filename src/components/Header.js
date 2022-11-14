import Button from './Button'
import Select from './Select'

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">Todo List</h1>
      <Select />
      <Button color={'black'} text={'Add'}/>
    </header>
  )
}

export default Header