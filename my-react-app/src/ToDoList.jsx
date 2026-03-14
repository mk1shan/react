import React, { useState } from "react";

function ToDoList() {
  const [task, setTask] = useState(["east brakfast", "take shower"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChnage(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]);
      setNewTask(" ");
    }
  }

  function deleteTask(index) {
    const updatedTask = task.filter((_, i) => i !== index);
    setTask(updatedTask);
  }

  function moveTaskUP(index) {
    if (index > 0) {
      const updatedTask = [...task];
      [
        updatedTask[index],
        (updatedTask[index - 1] = [updatedTask[index - 1], updatedTask[index]]),
      ];
      setTask();
    }
  }

  function moveTaskDown(index) {}

  return (
    <>
      <div className="to-do-list">
        <h1>To-Do-list</h1>

        <div>
          <input
            type="text"
            placeholder="Enter a task..."
            value={newTask}
            onChange={handleInputChnage}
          />
          <button className="add-button" onClick={addTask}>
            Add
          </button>
        </div>
        <ol>
          {task.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>

              <button className="move-button" onClick={() => moveTaskUP(index)}>
                Up
              </button>

              <button className="move-down" onClick={() => moveTaskDown(index)}>
                Down
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default ToDoList;
