import React, {Component} from 'react';

class NewTodoForm extends Component{
	constructor(props){
		super(props)
		this.state = {
			contentInput:'',
			priorityInput:'',
		}
	}

	// handles are used on elements

	handleContentInputChange = (e) => { // function updates content for contentInput for NewTodoForm state
		this.setState({
			contentInput:e.target.value
		});
	}
	handlePriorityInputChange = (e) => {  // function updates content for priorityInput for NewTodoForm state
		this.setState({
			priorityInput:e.target.value
		});
	}
	handleTodoAddClick = (e) => { // function pulls in content from NewTodoForm state
		e.preventDefault();
		var data = {
			content: this.state.contentInput,
			priority:this.state.priorityInput
		};
		
		this.props.addTodo(data); // pull addTodo function from App.js 
	}
	render(){
		return (
			<div className="todo new-todo">
              <form className="todo-body">
                  <div className="form-group">
                    <label htmlFor="content-input">Content</label>
                    <input onChange={this.handleContentInputChange} type="text" className="form-control" id="content-input"/>
                  </div>

                  <div className="form-group">
                    <label htmlFor="priority-input">Priority</label>
                    <input onChange={this.handlePriorityInputChange} type="text" className="form-control" id="priority-input"/>
                  </div>
            
                  <button onClick={this.handleTodoAddClick} type="submit" className="btn btn-primary todo-add">Add</button>
              </form>
            </div>
		);
	}
}

export default NewTodoForm;