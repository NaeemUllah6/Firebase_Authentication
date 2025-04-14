import { configureStore } from "@reduxjs/toolkit";
import  todoReducer  from "../features/todo/todoSlice";

// it is our store and it always take object
export const store = configureStore({
    reducer:todoReducer
})