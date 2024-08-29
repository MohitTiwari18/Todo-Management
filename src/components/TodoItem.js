import React from "react";

// Component to display an individual todo item
const TodoItem = ({ todo, onToggle, onEdit, onDelete }) => {
  return (
    <li
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
      }}
    >
      <input type="checkbox" checked={todo.completed} onChange={onToggle} />
      {todo.text}
      <div className="todo-actions">
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
