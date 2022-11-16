const Button = ({ color, text, showForm }) => {
  return (
    <>
      <button
        className="btn"
        style={{ backgroundColor: color }}
        onClick={() => showForm()}
      >
        {text}
      </button>
    </>
  )
}

export default Button
