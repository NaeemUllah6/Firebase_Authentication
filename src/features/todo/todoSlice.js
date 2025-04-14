import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        { id: 1, text: 'hello world' }
    ]
}
export const todoSlice = createSlice({
    // name is given by redux toolkit and we will always use name we can't define of our opinion word here,
    name: 'todo',
    initialState,
    // Reducer take properties and functions
    reducers: {
        // Property
        // addTodo : sayHello we can call function like this and with other method below given
        // the property will always provide two things state and action and it will always do the same
        addTodo: (state, action) => {
            const todo =
            {

                id: nanoid(), text: action.payload
            }
            // now we will pass the state as we have previous state and want to update the state in this method we will update the state
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {

            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer;