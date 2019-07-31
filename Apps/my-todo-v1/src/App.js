import React, { Component } from 'react';
// import Todos from './Components/Todos'
// import AddTodo from './Components/AddTodo'
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { //props
      todos:[
        {
          id:1,
          content:'hi',
          date:'01/12/2019'
        
        },
      ],

      todoInputValue:'',
      dateInput:''
    }
  }

removeTodo = (id) => {
  const todos = this.state.todos.filter(todo => {  // const keeps todos within removeTodo function
    return todo.id !== id // keeps id's not equal to id being removed
  });
  this.setState({
    todos // updates todos array
  })
}

handleAddFormSubmit = (e) => {
  e.preventDefault();
  var newTodo = {

    id : Math.random(),
    content: this.state.todoInputValue,
    date: this.state.dateInput
  };

  let todos = [...this.state.todos, newTodo]; // let todos so can be passed on to Todos.js
  this.setState({
    todos // updates todo list with newly added todo
  })

}


handleTodoInputChange = (e) => {
  this.setState({
      todoInputValue:e.target.value
  })
}

handleDateChange = (e) => {
  this.setState({
    dateInput:e.target.value
  })
}

render(){

  return (
    <div className="todo-app container">
      <h1 className="header">My Todo's</h1>
      {/* <Todos todos={this.state.todos} removeTodo={this.removeTodo}/> */}

      {
        this.state.todos.map(todo => {
            return (
                <div className="todoItem" key={todo.id}>
                    <div className="noteClose"><div className="closeBtn">REMOVE</div></div>
                    <div className="content"><div className="todoContent">{todo.content}</div><div className="dueDate">{todo.date}</div></div>
                </div>
            )
        })
      }
       <div >
          <form onSubmit={this.handleAddFormSubmit}>
              <input type="submit" className="btn" value="+"/>
              <input type="text" placeholder="Add a new Todo" className="textInput" onChange={this.handleTodoInputChange} value={this.state.todoInputValue}/>
              <input type="date" placeholder="Due Date"  className="dateInput" onChange={this.handleDateChange} value={this.state.dateInput}/>
          </form>
      </div>
    </div> 
    // Todos todos={this.state.todos} removeTodo={this.removeTodo} passes todos & removeTodo on to Todos.js
    // handleAddTodoClick handleAddTodoClick={this.handleAddTodoClick} passes handleAddTodoClick to handleAddTodoClick.js
  );
}
}

export default App;
