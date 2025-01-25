import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";

const MainContent = () => {
  const [tasks, setTasks] = useState([]);

  const formik = useFormik({
    initialValues: {
      todoTask: "",
    },
    validationSchema: Yup.object({
      todoTask: Yup.string().required("Enter New Task"),
    }),
    onSubmit: (values, { resetForm }) => {
      const newTask = {
        id: Date.now(), // Unique ID for each task
        name: values.todoTask,
        completed: false,
      };
      setTasks([...tasks, newTask]); // Add the new task
      resetForm(); // Clear the input field
    },
  });

  const toggleCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const completedStyle = {
    fontSize: "1rem",
    textDecoration: "line-through",
    color: "#8b8787",
    fontStyle: "italic",
  };

  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(tasks))
  // })

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <input
          id="todoTask"
          name="todoTask"
          type="text"
          value={formik.values.todoTask}
          onChange={formik.handleChange}
          placeholder="New Task"
        />
        <button type="submit">Add</button>
      </form>
      {formik.errors.todoTask && (
        <div className="input-error">{formik.errors.todoTask}</div>
      )}

      <div className="container">
        {tasks.map((task) => (
          <div className="to-do-list" key={task.id}>
            <p style={task.completed ? completedStyle : null}>{task.name}</p>
            <div>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleCompletion(task.id)}
              />
              <button onClick={() => removeTask(task.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MainContent;
