import React from "react";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <li className="item">
      <div className="item-content">
        <input
          className="item-checkbox"
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          style={{ marginRight: 8 }}
        />
        <span
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
          }}
          className="item-text"
        >
          {todo.text}
        </span>
      </div>
      <button className="item-delete" onClick={() => onDelete(todo.id)}>
        ×
      </button>
    </li>
  );
};

export default TodoItem;
