import React, {Component} from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './App.css';

class  App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      todos:[
        {
          id:1,
          content: 'Ring Peter',
          priority: 'Important'
        },
        {
          id:2,
          content: 'Water plants',
          priority: 'Urgent'
        },
        {
          id:3,
          content: 'Get milk',
          priority: 'Can wait'
        }
      ]
    };
  }

  addTodo = (data) =>{  // creating unique id for new todo
    var newTodo = { 
      id:Date.now(),
      ...data // encapsulating data within new todo
    };
    var newList = [newTodo,...this.state.todos]; // creating a new list with the new todo at the beginning
    this.setState({ // updating list with newlist with the new todo
      todos: newList
    });
  }
  
  removeTodo = (id) =>{}

  updateTodo = (id,data) =>{}

  render(){
    return (
      <div className="wrap">
        <div className="container">
          <div className="todos">
            {
              this.state.todos.map((todo) => {
                
                var todoProps = {
                  ...todo,
                  key: todo.id
                };

                return (
                  <Todo {...todoProps}/>
                )
              })
            }
            
            <NewTodoForm addTodo={this.addTodo}/>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
