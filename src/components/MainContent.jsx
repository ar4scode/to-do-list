import React from "react"
import TodoItem from "./Todoitem"

function MainContent() {
  return (
    <div className="container">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  )
}

export default MainContent