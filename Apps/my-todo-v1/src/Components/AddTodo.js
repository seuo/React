import React, { Component } from 'react'


class AddTodo extends Component {
    constructor(props){
        super(props);
          this.state = {
            todoInputValue: '',
            content:'',
            date:''
          };
    
    }

    handleTodoInputChange = (e) => {
        this.setState({
            todoInputValue:e.target.value
        })
    }

    handleDateChange = (e) => {
        this.setState({
            date:e.target.value
        })
    }

    handleAdd = (e) => {
        e.preventDefault(); // prevent event from running until on submit
        this.props.handleAddTodoClick(this.state);
        this.setState({
            todoInputValue:''
        })
    }

    

    render(){
        return (
            <div >
                <form onSubmit={this.handleAdd}>
                    <input type="submit" className="btn" value="+"/>
                    <input type="text" placeholder="Add a new Todo" className="textInput" onChange={this.handleTodoInputChange} value={this.state.todoInputValue}/>
                    <input type="date" placeholder="Due Date"  className="dateInput" onChange={this.handleDateChange} value={this.state.date}/>
                </form>
            </div>
        )
    }

}

export default AddTodo