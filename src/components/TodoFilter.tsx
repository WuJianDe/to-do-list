interface TodoFilterProps {
  filter: "all" | "active" | "completed";
  onFilter: (value: "all" | "active" | "completed") => void;
}
const FILTERS = ["all", "active", "completed"] as const;

const TodoFilter: React.FC<TodoFilterProps> = ({ filter, onFilter }) => (
  <div className="filter">
    {FILTERS.map(f => (
      <button
        key={f}
        className={`filter-button${filter === f ? " active" : ""}`}
        onClick={() => onFilter(f)}
      >
        {f.charAt(0).toUpperCase() + f.slice(1)}
      </button>
    ))}
  </div>
);

export default TodoFilter;
