import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Component for adding a new todo
const AddTodoForm = ({ onAdd }) => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText("");
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Todo</h2>
      <div>
        <label>Todo Text:</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
