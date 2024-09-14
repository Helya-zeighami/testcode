import { useDispatch } from "react-redux";
import { Task, deleteTask, toggleTaskCompletion } from "../redux/taskSlice";
import { memo } from "react";

type TaskListProps = {
  tasks: Task[];
  onEditTask: (task: Task) => void;
};

/**
 * TaskList component that renders a list of tasks with title and description.
 * Allows users to mark tasks as complete/incomplete, edit, or delete them.
 */

const TaskList = ({ tasks, onEditTask }: TaskListProps) => {
  const dispatch = useDispatch();

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className={task.isComplete ? "task-complete" : ""}>
          <div className="task-content">
            <span className="task-title">{task.title}</span>
            <p className="task-description">{task.description}</p>
          </div>

          {/* Task action buttons */}
          <div className="task-actions">
            <button onClick={() => dispatch(toggleTaskCompletion(task.id))}>
              {task.isComplete ? "Undo" : "Complete"}
            </button>
            <button onClick={() => onEditTask(task)}>Edit</button>
            <button onClick={() => dispatch(deleteTask(task.id))}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default memo(TaskList);
