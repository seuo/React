import React, { Component } from 'react';

class NewTodoForm extends Component {
    constructor(props) {
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
            priorityInput:e.target.value
        });
    }

    handleAddTodoClick = (e) => {
        e.preventDefault();
        var data = {
            contentInput:e.target.value,
            priorityInput:e.target.value
        };
        
        this.props.addTodo(data); // pull function from App.js 
    }


    render(){

        return (
            <div className="todo new-todo">
            <form className="todo-body">
                <div className="form-group">
                  <label htmlFor="content-input">Content</label>
                  <input type="text" onClick={this.handleContentInputChange} className="form-control" id="content-input"/>
                </div>

                <div className="form-group">
                  <label htmlFor="priority-input">Priority</label>
                  <input type="text" onClick={this.handlePriorityInputChange} className="form-control" id="priority-input"/>
                </div>
          
                <button type="submit" onClick={this.handleAddTodoClick} className="btn btn-primary todo-add">Add</button>
            </form>
          </div>
        );
    }
}

export default NewTodoForm;