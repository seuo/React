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

deleteTodo = (id) => {
  const todos = this.state.todos.filter(todo => {  // const keeps todos within deleteTodo function
    return todo.id !== id
  });
  this.setState({
    todos
  })
}

addTodo = (todo) => {
  todo.id = Math.random();
  let todos = [...this.state.todos, todo]; // let todos so can be passed on to Todos.js
  this.setState({
    todos
  })

}

render(){

  return (
    <div className="todo-app container">
      <h1 className="header">My Todo's</h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      <AddTodo addTodo={this.addTodo} /> 
    </div> 
    // Todos todos={this.state.todos} deleteTodo={this.deleteTodo} passes todos & deleteTodo on to Todos.js
    // AddTodo addTodo={this.addTodo} passes addTodo to AddTodo.js
  );
}
}

export default App;
