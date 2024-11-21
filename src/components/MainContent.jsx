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
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render() {
    const todoList = this.state.todos.map((item) => <TodoItem key={item.id} data={item} handleChange={this.handleChange} />)
    
    return (
      <div className="container">
        {todoList}
      </div>
    )

  }
}

export default MainContent