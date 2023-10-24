import AddTodo from "@/components/addTodos";
import Todos from "@/components/todos";
import { useSelector } from "react-redux";

export default function Page() {
  return (
    <div className="App mx-4">
      <AddTodo />
      <Todos />
    </div>
  );
}
