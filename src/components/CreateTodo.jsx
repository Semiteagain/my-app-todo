import React from 'react'

export default function CreateTodo(props) {
    
function handleClick() {
    props.onDelete(props.id)
}

    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.content} </p>
            <button onClick={handleClick}>Delete</button>
        </div>
    )
}
