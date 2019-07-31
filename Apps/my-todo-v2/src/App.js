import React, { Component } from 'react';
import Todos from './Components/Todos'
import AddTodo from './Components/AddTodo'
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { //props
      todos:[
      ],
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

handleAddTodoClick = (todo) => {
  todo.id = Math.random();
  let todos = [...this.state.todos, todo]; // let todos so can be passed on to Todos.js
  this.setState({
    todos // updates todo list with newly added todo
  })

}

render(){

  return (
    <div className="todo-app container">
      <h1 className="header">My Todo's</h1>
      <Todos todos={this.state.todos} removeTodo={this.removeTodo}/>
      <AddTodo handleAddTodoClick={this.handleAddTodoClick} />
    </div> 
    // Todos todos={this.state.todos} removeTodo={this.removeTodo} passes todos & removeTodo on to Todos.js
    // handleAddTodoClick handleAddTodoClick={this.handleAddTodoClick} passes handleAddTodoClick to handleAddTodoClick.js
  );
}
}

export default App;
