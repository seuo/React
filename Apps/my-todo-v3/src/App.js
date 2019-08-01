import React, { Component } from 'react';
import Todo from './Components/todo';
import NewTodoForm from './Components/newTodoForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos:[
            {
              id:1,
              content:'hihi',
              priority:'high'
            },{
              id:2,
              content:'eat',
              priority:'low'
            },{
              id:3,
              content:'sleep',
              priority:'high'
            }
          ],
      };
    }

    addTodo = (data) => {
      var newTodo = { // creating unique id for new todo
        id:Date.now(),
        ...data // setting up (data) to encapsulate new todo data
      }
      var newList = [newTodo,...this.state.todos]; // creating a new list with the new todo at the beginning
      this.setState({ // updating list with newlist with the new todo
        todos:newList
      });
    }

    removeTodo = (id) => {

    }

    updateTodo = (id,data) => {

    }

  render (){

    return (
      <div className="wrap">
        <div className="container">
          <div className="todos">
          {
            this.state.todos((todo) => {
              var todoProps = {
              ...todo,
              key: todo.id
              };
            
            return (
              <Todo {...todoProps}/>
            )
            })
        }
          </div>
        </div>
      </div>



      );
    }
  
}

export default App;
