import { Button } from "../Button/Button";
import { TodoProps } from "../todo";

type TodoListProps = {
  todo: TodoProps["todo"];
  onEdit: () => void;
  onDelete: () => void;
};

function TodoList(props: TodoListProps) {
  const { todo, onEdit, onDelete } = props;

  return (
    <div className="border-2 to-red-800 p-4 rounded-lg flex items-center justify-between mb-2">
      <span>{todo.text}</span>
      <div className="gap-2 flex">
        <Button label="Edit" onClick={onEdit} />
        <Button label="Delete" onClick={onDelete} />
      </div>
    </div>
  );
}

export default TodoList;
