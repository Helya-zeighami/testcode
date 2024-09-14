import taskReducer, { addTask, editTask, deleteTask, toggleTaskCompletion, Task } from "../redux/taskSlice";

describe("taskSlice", () => {
  const initialTask: Task = {
    id: 1,
    title: "Test Task",
    description: "Test Description",
    dueDate: "2024-01-01",
    isComplete: false,
  };

  const initialState = { tasks: [] };

  it("should handle adding a task", () => {
    const nextState = taskReducer(initialState, addTask(initialTask));
    expect(nextState.tasks).toHaveLength(1);
    expect(nextState.tasks[0]).toEqual(initialTask);
  });

  it("should handle editing a task", () => {
    const editedTask: Task = {
      ...initialTask,
      title: "Updated Task",
    };

    const stateWithTask = { tasks: [initialTask] };
    const nextState = taskReducer(stateWithTask, editTask(editedTask));

    expect(nextState.tasks[0].title).toBe("Updated Task");
  });

  it("should handle deleting a task", () => {
    const stateWithTask = { tasks: [initialTask] };
    const nextState = taskReducer(stateWithTask, deleteTask(initialTask.id));

    expect(nextState.tasks).toHaveLength(0);
  });

  it("should toggle task completion", () => {
    const stateWithTask = { tasks: [initialTask] };
    const nextState = taskReducer(stateWithTask, toggleTaskCompletion(initialTask.id));

    expect(nextState.tasks[0].isComplete).toBe(true);
  });
});
