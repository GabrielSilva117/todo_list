import Button from './Button'
import Select from './Select'

const Header = ({ setSelected, showForm, onAdd }) => {
  return (
    <header className="header">
      <h1 className="title">Todo List</h1>
      <Select setSelected={setSelected} />
      <Button
        color={onAdd === false ? 'black' : 'red'}
        text={onAdd === false ? 'Add' : 'Close'}
        showForm={showForm}
      />
    </header>
  )
}

export default Header
