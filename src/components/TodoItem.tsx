import { Todo } from "@/store/todo";

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
        <div className="item-text-box">
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
            className="item-text"
          >
            {todo.text}
          </span>
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
            className="item-date"
          >
            {" "}
            {todo.date}
          </span>
        </div>
      </div>
      <button className="item-delete" onClick={() => onDelete(todo.id)}>
        ×
      </button>
    </li>
  );
};

export default TodoItem;
