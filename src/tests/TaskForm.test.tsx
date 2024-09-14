import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TaskForm from "../components/TaskForm";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../redux/taskSlice";

const renderWithRedux = (component: React.ReactNode) => {
  const store = configureStore({
    reducer: { tasks: taskReducer },
  });
  return render(<Provider store={store}>{component}</Provider>);
};

describe("TaskForm Component", () => {
  const mockOnFormClose = jest.fn();

  it("allows user to fill out the form and submit a task", () => {
    const { getByPlaceholderText, getByText, getByTestId } = renderWithRedux(
      <TaskForm existingTask={null} onFormClose={mockOnFormClose} />
    );

    fireEvent.change(getByPlaceholderText("Task title"), {
      target: { value: "New Task" },
    });
    fireEvent.change(getByPlaceholderText("Task description"), {
      target: { value: "This is a description" },
    });

    fireEvent.change(getByTestId("due-date"), {
      target: { value: "2024-12-31" },
    });

    fireEvent.click(getByText("Add Task"));

    expect(mockOnFormClose).toHaveBeenCalled();
  });
});
