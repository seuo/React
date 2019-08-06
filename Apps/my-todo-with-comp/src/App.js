import React, {Component} from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './App.css';

class  App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      todos:[]
    };
  }

  addTodo = (data) =>{  // creating unique id for new todo & store data
    var newTodo = { 
      id:Date.now(),
      ...data // encapsulating data within new todo
    };
    var newList = [newTodo,...this.state.todos]; // creating a new list with the new todo at the beginning
    this.setState({ // updating list with newlist with the new todo
      todos: newList
    });

  }
  
  removeTodo = (id) =>{
    var todos = this.state.todos;
    var filtered = todos.filter((todo) => {
      return todo.id !== id
    });
    this.setState({ // updating list with newlist with the new todo
      todos: filtered
    });
  }

  updateTodo = (id,data) => {
    var todos = this.state.todos;
    var index = todos.findIndex(function(todo) {
      return todo.id == id;
    });

    var updatedTodo = {...todos[index],...data};

      todos[index] = updatedTodo;

      this.setState({
        todos:todos
      });

    // console.log(updatedTodo)
  }

  render(){
    return (
      <div className="wrap">
        <div className="container">
          <div className="todos">
            {
              this.state.todos.map((todo) => { // map array to for data from to Todo component
                
                var todoProps = { //  var todoProps for the todo component
                  ...todo, // todo content
                  key: todo.id, // todo id
                  removeTodo: this.removeTodo, // removeTodo function
                  updateTodo: this.updateTodo
                };

                return (
                  <Todo {...todoProps}/> // pull data for todoProps array from Todo Component
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
