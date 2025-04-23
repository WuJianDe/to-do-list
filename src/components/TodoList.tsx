import TodoItem from './TodoItem';
import { Todo } from "@/store/todo";

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
  if (todos.length === 0) {
    return <div style={{ color: '#888', textAlign: 'center', marginTop: 32 }}>No to-do items</div>;
  }
  return (
    <ul className='list'>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default TodoList;
