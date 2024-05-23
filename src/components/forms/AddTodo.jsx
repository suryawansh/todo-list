import React, { useState } from "react";

const AddTodo = () => {
  const [addTask, setAddTask] = useState("");

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Write your next todo"
          className="add-todo"
          value={addTask}
          onChange={(e) => setAddTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTodo;
