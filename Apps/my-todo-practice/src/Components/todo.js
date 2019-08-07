import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // updatingContent:false,
            // updatingPriority:false,
            // contentInput:props.content,
            // priorityInput:props.priority

        }
    }

handleRemoveTodo = () => {
    let id = this.props.id;
    this.props.removeTodo(id);
}

render() {
    return (
    <div className="todo">
        <div className="todoBody">
            <button className="removeTodo" onClick={this.handleRemoveTodo}></button>
            <div className="todoContent">
                {this.props.content}
            </div>
            <div className="todoPriority">
                {this.props.priority}
            </div>
        </div>
    </div>
    )
}


}

export default Todo;