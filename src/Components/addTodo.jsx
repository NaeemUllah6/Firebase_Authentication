import { useState } from "react";
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'
const TodoForm = () => {

    const [input, setInput] = useState("");
    // We will bring this despatch from react redux as the redux has that
    const dispatch = useDispatch()
    const addTodoHandler = (e) => {
        e.preventDefault()
        // now we will dispatch what ever we want to do 
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <form className="mt-1" onSubmit={addTodoHandler}>
            <input
                className="outline-0 bg-amber-400 px-2 py-2 text-white placeholder:text-white"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a todo"
                required
            />
            <button className="px-4 py-2 bg-amber-600 text-white" type="submit">Add Todo</button>
        </form>
    );
};

export default TodoForm;
