import React from 'react'

const Todos = ({todos, removeTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="todoItem" key={todo.id}>
                    <div className="noteClose"><div className="closeBtn" onClick={() => {removeTodo(todo.id)}}>REMOVE</div></div>
                    <div className="content"><div className="todoContent">{todo.content}</div><div className="dueDate">{todo.date}</div></div>
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