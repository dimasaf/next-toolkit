import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export type TodoType = {
  id: string;
  text: string | undefined;
};

export const todosSlice = createSlice({
  name: "todos",
  initialState: [] as TodoType[],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: uuid(),
        text: action.payload,
      };

      return [...state, todo];
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo?.text) {
        todo.text = text;
      }
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;
