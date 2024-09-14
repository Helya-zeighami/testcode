Here’s a **README.md** file for your **Pretty Pink Task Manager** project. This will help others understand how to set up, run the project.

---

# Pretty Pink Task Manager

This is a **Task Management Application** built with **React** and **Redux**. The app allows users to add, edit, delete, and filter tasks. It provides a visually appealing pink-themed UI and uses **React Hooks** (including `useState`, `useEffect` and `useMemo`) to manage the component's state and optimize performance. Tasks are filtered by their status (All, Completed, or Incomplete).

## Features

- **Add Task**: Add a new task with a title, description, and due date.
- **Edit Task**: Edit an existing task, including updating its title, description, or due date.
- **Delete Task**: Remove a task from the list.
- **Complete Task**: Mark tasks as complete or incomplete.
- **Filter Tasks**: Filter tasks based on their status: All, Completed, or Incomplete.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Redux**: State management library.
- **TypeScript**: Type safety and static analysis.
- **React Hooks**: Used to manage component state (`useState`, `useEffect`).
- **CSS**: For styling the application.

## Getting Started

To get a local copy of the project up and running, follow these steps.

### Prerequisites

You need to have **Node.js** and **npm** installed on your system.

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/helya-zeighami/testcode.git
   ```

2. Navigate to the project directory:

   ```bash
   cd pretty-pink-task-manager
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

### Running the Application

To run the application locally:

```bash
npm start
```

This will start the app in development mode and automatically open it in your default browser at `http://localhost:3000`.

### Running the Production Build

To create a production-ready build of the app:

```bash
npm run build
```

This will create an optimized production build of your application, which you can deploy.

## Folder Structure

Here’s a basic overview of the folder structure:

```
/pretty-pink-task-manager
│
├── /public                # Public assets and HTML template
├── /src                   # Source code of the React app
│   ├── /components        # React components for the app (TaskForm, TaskList, Filter)
│   ├── /redux             # Redux store and slice for managing tasks
│   ├── /App.tsx           # Main app component
│   ├── /index.tsx         # Entry point of the app
│   └── /App.css           # Styling for the app
│
├── package.json           # NPM scripts and dependencies
├── tsconfig.json          # TypeScript configuration
└── README.md              # Documentation for the project
```

### Key Components

- **App.tsx**: The main component that brings everything together.
- **TaskForm.tsx**: A component that handles adding and editing tasks.
- **TaskList.tsx**: Displays the list of tasks.
- **Filter.tsx**: Allows filtering tasks by status.
- **Redux Slice**: Manages task-related state.
