import React from "react";

const TodoItem = (props) => {
  return (
    <div className="checkbox-container">
        <input type="checkbox" name="" id="" checked={props.data.completed}/>
        <p>{props.data.text}</p>
    </div>
  )
}

export default TodoItem;