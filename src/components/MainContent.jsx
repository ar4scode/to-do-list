import React from "react"
import TodoItem from "./Todoitem"
import { todoData } from "../data/todoData"

function MainContent() {
  const todoList = todoData.map((item) => <TodoItem key={item.id} data={item} />)
  
  return (
    <div className="container">
      {todoList}
    </div>
  )
}

export default MainContent