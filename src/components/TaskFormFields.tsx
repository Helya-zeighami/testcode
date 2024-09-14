import React from "react";
import { Task } from "../redux/taskSlice";

type TaskFormFieldsProps = {
  title: string;
  description: string;
  dueDate: string;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  setDueDate: (dueDate: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  existingTask?: Task | null;
  onFormClose: () => void;
};

/**
 * TaskFormFields component that renders the form fields and buttons.
 */
const TaskFormFields = ({
  title,
  description,
  dueDate,
  setTitle,
  setDescription,
  setDueDate,
  handleSubmit,
  existingTask,
  onFormClose,
}: TaskFormFieldsProps) => {
  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        data-testid="due-date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      {/* Button for submitting the form */}
      <button type="submit">{existingTask ? "Update Task" : "Add Task"}</button>
      {existingTask && (
        <button type="button" onClick={onFormClose}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default TaskFormFields;
