import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import { useTodoStore } from "./store/todo";

function App() {
  const todos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const clearCompleted = useTodoStore((state) => state.clearCompleted);
  // 條件搜尋
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  return (
    <div className="border">
      <div className="content">
        <h1 className="title">To Do List</h1>
        <TodoInput onAdd={addTodo} />
        <TodoFilter filter={filter} onFilter={setFilter} />
        <TodoList
          todos={
            filter === "all"
              ? todos
              : filter === "active"
              ? todos.filter((todo) => !todo.completed)
              : todos.filter((todo) => todo.completed)
          }
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
        <div className="footer">
          <div>{todos.length} tasks</div>
          <button
            onClick={() => clearCompleted()}
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
