import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { Button } from "./Button/Button";

export default function AddTodo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <form onSubmit={addTodoHandler} className="flex gap-2 justify-center mb-5">
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button label="Add Todo" type="submit" />
    </form>
  );
}
