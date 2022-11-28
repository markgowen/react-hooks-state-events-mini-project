import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] =useState(TASKS);
  const [category, setCategory] = useState("All");

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function handleDeleteClick(taskText) {
    setTasks(tasks.filter((task) => task.text !== taskText));
  }

  const visibleTasks = tasks.filter(
    (task) => category === "All" || task.category === category
  )

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={category}
        onSelectCategory={setCategory}
      />
      <NewTaskForm 
        categories={CATEGORIES} 
        onTaskFormSubmit={handleAddTask}/>
      <TaskList tasks={visibleTasks} handleClick={handleDeleteClick} />
    </div>
  );
}

export default App;
