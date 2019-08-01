import React, {Component} from 'react';



class NewTodoForm extends Component {
    constructor(props){
        super(props);
            this.state = {
                contentInput:'',
                priorityInput:''
        }
}

handleContentInputChange = (e) => {
        this.setState({
        contentInput:e.target.value
    });
}
handlePriorityInputChange = (e) => {
        this.setState({
        contentInput:e.target.value
});
}

handleTodoAddClick = (e) => {
    e.preventDefault();
    var data = {
        content:this.state.contentInput,
        priority:this.state.priority
    }
    this.props.addTodo();
};


render() {
    return (
        
        <div className="todo new-todo">
            <form className="todo-body">
            <div className="form-group">
                <label for="content-input">Content</label>
                <input type="text" onChange={this.handleContentinputChange} className="form-control" id="content-input"/>
            </div>

            <div className="form-group">
                <label for="priority-input">Priority</label>
                <input type="text" onChange={this.handlePriorityinputChange} className="form-control" id="priority-input"/>
            </div>

            <button type="submit" onClick={this.handleTodoAddClick} className="btn btn-primary">Add</button>
            </form>
        </div>	
        );
    }
}

export default NewTodoForm;
