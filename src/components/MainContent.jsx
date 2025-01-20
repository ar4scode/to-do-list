import React, { useState } from "react";
import TodoItem from "./Todoitem";
import { todoData } from "../data/todoData";

const MainContent = () => {
  const [todos, setTodos] = useState(todoData);
  const [isCompleted, setIsCompleted] = useState(false)

  const handleChange = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const todoList = todos.map((item) => (
    <TodoItem key={item.id} data={item} handleChange={handleChange} />
  ));

  return <div className="container">{todoList}</div>;
};

export default MainContent;
