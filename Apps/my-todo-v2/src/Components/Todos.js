import React from 'react'

const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="todoItem" key={todo.id}>
                    <div className="noteClose"><div className="closeBtn" onClick={() => {deleteTodo(todo.id)}}>REMOVE</div></div>
                    <span>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">You have nothing to do</p>
    )

    return (
       <div className="todos collection">
           {todoList}
       </div>
    )
}

export default Todos;