import React, {Component} from 'react';

class Todo extends Component{
	constructor(props){
		super(props)
      this.state = {
        updatingContent:false,
        updatingPriority:false,
        contentInput:props.content,
        priorityInput:props.priority

      }
  }

  handleContentDoubleClick = () => {
    this.setState({
      updatingContent:true});
  }

  handlePriorityDoubleClick = () => {
    this.setState({
      updatingPriority:true});
  }

  handleContentInputBlur = () => {
    var id = this.props.id;
    var data = {
    content: this.state.contentInput
    };
    this.props.updateTodo(id,data);
    this.setState({
      updatingContent:false
    });
  }

  handlePriorityInputBlur = () => {
    var id = this.props.id;
    var data = {
    priority: this.state.priorityInput
    };
    this.props.updateTodo(id,data);
    this.setState({
      updatingPriority:false
    });
  }

  handleTodoRemoveClick = () => {
      var id = this.props.id;
      this.props.removeTodo(id);
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


	render(){

		return (
			<div className="todo">
        <div className="todo-body">
          <i className="far fa-times-circle todo-remove" onClick={this.handleTodoRemoveClick}></i>
          <div className="todo-content" onBlur={this.handleContentInputBlur} onDoubleClick={this.handleContentDoubleClick}>
            { this.state.updatingContent ? (
            <input value={this.state.contentInput} autoFocus onChange={this.handleContentInputChange} onBlur={this.handleChangeContent} type="text" className="form-control"/> 

            ):  this.props.content }

            
          </div>
          <div className="todo-priority" onBlur={this.handlePriorityInputBlur} onDoubleClick={this.handlePriorityDoubleClick}>
            {this.state.updatingPriority ? (
            <input value={this.state.priorityInput} autoFocus onChange={this.handlePriorityInputChange} type="text" className="form-control form-control-sm"/>

            ):  this.props.priority}
            
          </div>
        </div>
      </div>
		);
	}
}

export default Todo;