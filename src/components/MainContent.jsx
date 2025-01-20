import React, { useState } from "react";
import TodoItem from "./Todoitem";
import { todoData } from "../data/todoData";
import {useFormik} from "formik"
import * as Yup from "yup"

const MainContent = () => {
  const [todos, setTodos] = useState(todoData);
  const [isCompleted, setIsCompleted] = useState(false)

  const formik = useFormik({
    initialValues: {
      todoTask: ""
    },
    validationSchema: Yup.object({
      todoTask: Yup.string()
        .required("Enter New Task")
    })
  })

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

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          value={formik.values.todoTask}
          placeholder="New Task"
        />
        <button type="submit">Add</button>
      </form>
      {formik.errors.todoTask ? (
          <div className="input-error">{formik.errors.todoTask}</div>
        ) : null}
      <div className="container">{todoList}</div>
    </>
  ) 
};

export default MainContent;
