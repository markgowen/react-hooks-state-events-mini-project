import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleClick }) {
  const taskItem = tasks.map((item) => {
  return <Task 
            key={item.text}
            text={item.text} 
            category={item.category}
            handleClick={handleClick}
          />
  });

  return (
    <div className="tasks">
      {taskItem}
    </div>
  );
}

export default TaskList;
