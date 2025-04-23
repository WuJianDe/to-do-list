import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Todo {
  id: number;
  text: string;
  date: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
  nextId: number;
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  clearCompleted: () => void;
}

export const useTodoStore = create<TodoState>()(
  persist(
    (set, get) => ({
      todos: [],
      nextId: 1,
      addTodo: (text) =>
        set((state) => ({
          todos: [
            ...state.todos,
            { id: state.nextId, text, completed: false ,date: new Date().toISOString()},
          ],
          nextId: state.nextId + 1,
        })),
      toggleTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id
              ? { ...todo, completed: !todo.completed }
              : todo
          ),
        })),
      deleteTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
      clearCompleted: () =>
        set((state) => ({
          todos: state.todos.filter((todo) => !todo.completed),
        })),
    }),
    {
      name: "todo-storage", 
    }
  )
);