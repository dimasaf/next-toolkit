import React from "react";
import Todo from "./todo";
import { TodoType } from "@/features/todo/todoSlice";
import { useAppSelector } from "@/app/hooks";

export default function Todos() {
  const todos = useAppSelector((state) => state.todos) as TodoType[];

  return (
    <div>
      <ul>
        {todos.map((todo: { id: any; text?: string }) => (
          <li key={todo.id}>
            <Todo todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
}
