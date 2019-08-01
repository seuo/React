import React, {Component} from 'react';

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }

    render () {
        return (
        <div className="todos">
            <div className="todo" content="Feed Cat">
                <div className="todo-body">
                    <i className="far fa-times-circle todo-remove"></i>
                    <div className="todo-content">
                        {this.state.content}
                    </div>
                    <div className="todo-priority">
                        {this.state.priority}
                    </div>
                </div>
            </div>
            <div className="todo" content="Get Money">
                <div className="todo-body">
                    <i className="far fa-times-circle todo-remove"></i>
                    <div className="todo-content">
                        {this.props.content}
                    </div>
                    <div className="todo-priority">
                        {this.props.priority}
                    </div>
                </div>
            </div>
            <div className="todo" content="Eat">
                <div className="todo-body">
                    <i className="far fa-times-circle todo-remove"></i>
                    <div className="todo-content">
                        {this.props.content}
                    </div>
                    <div className="todo-priority">
                        {this.props.priority}
                        <input type="text" className="form-control form-control-sm" value="Important"/>
                    </div>
                </div>
            </div>
            <div className="todo" content="Sleep">
                <div className="todo-body">
                    <i className="far fa-times-circle todo-remove"></i>
                    <div className="todo-content">
                        <input type="text" className="form-control" value="Call Peter"/>
                        {this.props.content}
                    </div>
                    <div className="todo-priority">
                    {this.props.priority}
                    </div>
                </div>
            </div>
            
        </div>
    
        )
    }
}

export default Todo;