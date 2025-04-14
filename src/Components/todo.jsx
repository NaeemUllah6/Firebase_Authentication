import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
import AddTodo from '../Components/addTodo'
function Todo() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    return (
        <div className='flex flex-col gap-2'>
            {todos.map((todo) => (
                <div className='flex items-center'>
                    <li className='list-none bg-amber-200 py-2 w-fit px-5' key={todo.id}>
                        {todo.text}
                    </li>
                    <button
                        onClick={() => dispatch(removeTodo(todo.id))}
                        className='bg-amber-700 text-white px-4 py-2'>Delete</button>
                </div>
            ))}
            <AddTodo />
        </div>
    )
}

export default Todo 
