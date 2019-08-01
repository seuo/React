import React, {Component} from 'react';
import Todo from './todo.jsx'
import NewTodoForm from './newTodoForm.jsx';
import './App.css';

// import App from './App.jsx ';

class App extends Component {
  constructor(props) {
		super(props);

		this.state = {
				todos:[{
					id:1,
					content:'Wake',
					priority:'Important'
				},{
					id:2,
					content:'Eat',
					priority:'Important'
				},{
					id:3,
					content:'Sleep',
					priority:'Important'
				}],
		}
	}


	addTodo = (data) => {
		var newTodo ={
			id:Date.now(),
			...data
		};
		var todos = [newTodo,...this.state.todos];
		this.setState({todos});
	}

	removeTodo = (id) =>{
		var todos = this.state.todos.filter( todo => {
			return todo.id !==id
		})
		this.setState({
			todos
		})
	}
	updateTodo = (id,data) =>{

	}


render() {
	return (
				<div className="wrap">
					<button onClick={() => {this.addTodo({content:'hi',priority:'there'})}}>test</button>
						<div className="container">


							{	
									this.state.todos.map((todo) => {

										var todoProps = {
											...todo,
											key:todo.id,
											addTodo:this.addTodo
									};

									return (
											<todo {...todoProps}/>
									)
								})
							}

								<Todo/>
								<NewTodoForm/>
						</div>
				</div>
		)
	}
}


export default App;