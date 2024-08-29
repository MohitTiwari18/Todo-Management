import React from "react";
import TodoItem from "./TodoItem";

// Component to display the list of todos
const TodoList = ({
  todos,
  onToggle,
  onEdit,
  onDelete,
  editingTodo,
  setEditingTodo,
  searchQuery,
  onSearchChange,
  sortOrder,
  onSortChange,
}) => {
  return (
    <div>
      <h2>Todo List</h2>
      <div className="search-sort">
        <input
          type="text"
          value={searchQuery}
          onChange={onSearchChange}
          placeholder="Search todos..."
        />
        <select value={sortOrder} onChange={onSortChange}>
          <option value="asc">Sort by Text (Asc)</option>
          <option value="desc">Sort by Text (Desc)</option>
        </select>
      </div>
      {todos.length === 0 ? (
        <p>No todos available</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={() => onToggle(todo.id)}
              onEdit={() => setEditingTodo(todo)}
              onDelete={() => onDelete(todo.id)}
            />
          ))}
        </ul>
      )}
      {editingTodo && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (searchQuery.trim()) {
              onEdit(editingTodo.id, searchQuery.trim());
              setEditingTodo(null);
            }
          }}
          className="edit-form"
        >
          <h3>Edit Todo</h3>
          <input
            type="text"
            value={searchQuery}
            onChange={onSearchChange}
            required
          />
          <button type="submit">Save</button>
          <button type="button" onClick={() => setEditingTodo(null)}>
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default TodoList;
