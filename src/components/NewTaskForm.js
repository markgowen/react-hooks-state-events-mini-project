import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  const options = categories.map((option) => {
    return option !== "All" ? <option>{option}</option> : null;
  })

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({
      text: text,
      category: category,
    })
    setText("")
    setCategory("Code")
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)} 
        />
      </label>
      <label>
        Category
        <select 
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
