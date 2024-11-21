const TodoItem = (props) => {
  return (
    <div className="checkbox-container">
        <input type="checkbox" name="" id="" checked={props.data.completed} onChange={() => props.handleChange(props.data.id)}/>
        <p>{props.data.text}</p>
    </div>
  )
}

export default TodoItem;