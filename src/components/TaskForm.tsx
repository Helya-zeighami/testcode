import React, { useState, useEffect, memo } from "react";
import { useDispatch } from "react-redux";
import { Task, addTask, editTask } from "../redux/taskSlice";
import TaskFormFields from "./TaskFormFields";

type TaskFormProps = {
  existingTask?: Task | null;
  onFormClose: () => void;
};

/**
 * TaskForm component that handles adding or editing tasks.
 * If `existingTask` is provided, the form will be pre-filled for editing.
 */
const TaskForm = ({ existingTask, onFormClose }: TaskFormProps) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");

  const dispatch = useDispatch();

  /**
   * Pre-fills the form with the existing task's details if editing.
   */
  useEffect(() => {
    if (existingTask) {
      setTitle(existingTask.title);
      setDescription(existingTask.description);
      setDueDate(existingTask.dueDate);
    }
  }, [existingTask]);

  /**
   * Handles form submission for both adding and editing tasks.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title === "") return alert("Title cannot be empty");

    const taskData: Task = {
      id: existingTask ? existingTask.id : Date.now(),
      title,
      description,
      dueDate,
      isComplete: existingTask ? existingTask.isComplete : false,
    };

    // Dispatch either an edit or add task action
    if (existingTask) {
      dispatch(editTask(taskData));
    } else {
      dispatch(addTask(taskData));
    }

    // Close the form and reset inputs
    onFormClose();
    setTitle("");
    setDescription("");
    setDueDate("");
  };

  return (
    <TaskFormFields
      title={title}
      description={description}
      dueDate={dueDate}
      setTitle={setTitle}
      setDescription={setDescription}
      setDueDate={setDueDate}
      handleSubmit={handleSubmit}
      existingTask={existingTask}
      onFormClose={onFormClose}
    />
  );
};

export default memo(TaskForm);
