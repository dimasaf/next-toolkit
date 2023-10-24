import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../features/todo/todoSlice";
import { Button } from "./Button/Button";
import TodoList from "./TodoList/TodoList";

export type TodoProps = {
  todo: {
    text?: string;
    id?: number;
  };
};

export default function Todo(props: TodoProps) {
  const { todo } = props;
  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);

  const saveTodo = () => {
    const payload = {
      id: todo.id,
      text: editValue,
    };
    dispatch(updateTodo(payload));
    cancelEdit();
  };

  const cancelEdit = () => {
    setIsEdit(false);
  };

  return isEdit ? (
    <form onSubmit={saveTodo}>
      <div className="gap-2 flex">
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
        />
        <Button label="Save" type="submit" />
      </div>
    </form>
  ) : (
    <>
      <TodoList
        todo={todo}
        onEdit={() => setIsEdit(!isEdit)}
        onDelete={() => dispatch(deleteTodo(todo.id))}
      />
      {/* <div className="border-2 to-red-800 p-4 rounded-lg flex items-center justify-between mb-2">
        <span>{todo.text}</span>
        <div className="gap-2 flex">
          <Button label="Edit" onClick={() => setIsEdit(!isEdit)} />
          <Button
            label="Delete"
            onClick={() => dispatch(deleteTodo(todo.id))}
          />
        </div>
      </div> */}
    </>
  );
}
