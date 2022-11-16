const Select = ({ setSelected }) => {
  return (
    <>
      <select
        className="dropdown"
        onChange={(e) => setSelected(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Done">Done</option>
        <option value="Todo">Todo</option>
      </select>
    </>
  )
}

export default Select
