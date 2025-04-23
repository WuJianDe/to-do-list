import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { Todo } from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [nextId, setNextId] = useState(1);

  const handleAdd = (text: string) => {
    setTodos((prev) => [...prev, { id: nextId, text, completed: false }]);
    setNextId((id) => id + 1);
  };

  const handleToggle = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="border">
      <div className="content">
        <h1 className="title">To Do List</h1>
        <TodoInput onAdd={handleAdd} />
        <TodoList
          todos={todos}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
        <div className="footer">
          <div>
            <span id="taskCount">{todos.length}</span> tasks
          </div>
          <button
            id="clearCompleted"
            onClick={() => setTodos(todos.filter((todo) => !todo.completed))}
            className="clear-btn"
          >
            Clear completed
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
