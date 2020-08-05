import React, { useState } from 'react'

const TodoForm = props => {

    const [value, setValue] = useState('');

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                props.saveTodo(value)
                setValue('');
            }}>
            <input placeholder='Add todo'
                onChange={e => setValue(e.target.value)}
                value={value}></input>
        </form>
    )
}

export default TodoForm;