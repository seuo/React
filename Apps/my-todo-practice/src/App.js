import React, { Component } from 'react';
import './App.css';
import NewTodo from './Components/newTodo';
import Todo from './Components/todo'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos:[]
    };
  }

addTodo = (data) => {
  let newTodo = { id:Date.now(),
  ...data
  };
  let newList = [newTodo,...this.state.todos];
  this.setState({
    todos: newList
  });
}

removeTodo = (id) => {
  let todos = this.state.todos;
  let filtered = todos.filter((todo) => {
    return todo.id !== id
  });
  this.setState({
    todos:filtered
  });
}

updateTodo = (id,data) => {
  let todos = this.state.todos;
  let index = todos.findIndex(function(todo){
    return todo.id === id;
  });

  let updatedTodo = {...todos[index],...data};  
    todos[index] = updatedTodo;
  this.setState({
    todos:todos
  });
}


render() {
  return (
    <div className="wrap">
      <div className="container">
        <div className="todos">

          {
            this.state.todos.map((todo)=>{
              let todoProps = {
                ...todo,
                key:todo.id,
                removeTodo:this.removeTodo,
                updateTodo:this.updateTodo
              };
              return (
                <Todo {...todoProps}/>

              )
            })
          }
          <NewTodo addTodo = {this.addTodo}/> 
        </div>
      </div>
    </div>

  );
}

}

export default App;
