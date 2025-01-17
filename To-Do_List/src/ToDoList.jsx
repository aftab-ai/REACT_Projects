import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ToDoList() {
  let [todos, setTodos] = useState([
    { task: "Sample-Task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...todos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  let upperCaseAll = () => {
    setTodos((todos) =>
      todos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  let markAsDone = () => {
    setTodos((todos) =>
      todos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a task..."
        value={newTodo}
        onChange={updateTodoValue}
      />
      <br />
      <br />
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <hr />
      <h4>Tasks</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={todo.isDone ? { textDecorationLine: "line-through" } : {}}
            >
              {todo.task}
            </span>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => markAsDone(todo.id)}>Done</button>
          </li>
        ))}
      </ul>

      <button onClick={upperCaseAll}>UpperCase All</button>
    </div>
  );
}
