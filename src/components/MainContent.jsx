import React from "react"
import TodoItem from "./Todoitem"
import { todoData } from "../data/todoData"
import { Component } from "react"

class MainContent extends Component {
  constructor() {
    super()
    this.state = {
      todos : todoData
    }
  }

  render() {
    const todoList = this.state.todos.map((item) => <TodoItem key={item.id} data={item} />)
    
    return (
      <div className="container">
        {todoList}
      </div>
    )

  }
}

export default MainContent