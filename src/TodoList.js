import React from 'react'

export default function TodoList(props) {
    return (
        <ul className='list-unstyled'>
            {props.todos.map((todo, index) => (
                <li key={index.toString()}>
                    {todo}
                    <button onClick={() => props.deleteTodo(index)}> DELETE</button>
                </li>
            ))}
        </ul>
    )
}
