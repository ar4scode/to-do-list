const TodoItem = (props) => {
  const completedStyle = {
    fontSize: "1.2rem",
    textDecoration: "line-through",
    color: "#8b8787",
    fontStyle: "italic"
  }
  
  return (
    <div className="checkbox-container">
        <input type="checkbox" name="" id="" checked={props.data.completed} onChange={() => props.handleChange(props.data.id)}/>
        <p style={props.data.completed ? completedStyle : null}>{props.data.text}</p>
    </div>
  )
}

export default TodoItem;