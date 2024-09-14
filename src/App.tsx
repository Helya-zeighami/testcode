import { useMemo, useState } from "react";
import "./App.css";

import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { Task } from "./redux/taskSlice";
import TaskForm from "./components/TaskForm";
import Filter from "./components/Filter";
import TaskList from "./components/TaskList";

/**
 * Main application component that manages tasks, filtering, and editing.
 */
const App = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const [filter, setFilter] = useState("All");
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);

  // Filter tasks based on the selected filter (All, Completed, Incomplete)

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      if (filter === "All") return true;
      if (filter === "Completed") return task.isComplete;
      if (filter === "Incomplete") return !task.isComplete;
      return false;
    });
  }, [filter, tasks]);

  /**
   * Handles setting the task to be edited.
   */

  const handleEditTask = (task: Task) => {
    setTaskToEdit(task);
  };

  /**
   * Clears the task edit state after editing or canceling the form.
   */
  const handleFormClose = () => {
    setTaskToEdit(null);
  };

  return (
    <div className="app-container">
      <h1>Pretty Pink Task Manager</h1>

      {/* TaskForm handles adding new tasks or editing an existing task */}
      <TaskForm existingTask={taskToEdit} onFormClose={handleFormClose} />

      {/* Filter component to filter tasks by status */}
      <Filter setFilter={setFilter} />

      {/* TaskList displays the filtered list of tasks */}
      <div className="task-container">
        <TaskList tasks={filteredTasks} onEditTask={handleEditTask} />{" "}
      </div>
    </div>
  );
};

export default App;
