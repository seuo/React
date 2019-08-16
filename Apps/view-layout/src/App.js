import React, {Component} from 'react';
import View from './Components/view'
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
			this.state = {
				activeView:'nav'
			};
	}

	setActiveView = (view) => {
		this.setState({
			activeView:view
		})
	};

render () {
	
	return (
			<div className="app">
				
				<View viewName="projects" activeView={this.state.activeView} className="color1">
				<div className="header"><i onClick={() => this.setActiveView('nav')} className="fas fa-bars"></i></div>
					<div className="main">
						<h3>Projects</h3>
							<div class="card project">
							<img class="card-img-top" src="project.jpg" alt="Card image cap" />
							<div class="card-body">
								<h5 class="card-title">Card title</h5>
								<p class="card-text">Some quick example text to build on the card title</p>
								<p>
									<i class="fas fa-heart"></i>
									<i class="fas fa-edit"></i>
									<i class="fas fa-trash"></i>
								</p>
							
							</div>
							</div>
					</div>
				</View>
				<View viewName="add-project" activeView={this.state.activeView} className="color2">
					<div className="header"><i onClick={() => this.setActiveView('nav')} className="fas fa-bars"></i></div>
					<div className="main">
							<h3>Add a project</h3>
						<form>
						<div class="form-group">
							<label for="name-input">Name</label>
							<input type="text" class="form-control" name="name-input" id="name-input" placeholder="Enter project name"/>
						</div>
						<div class="form-group">
							<label for="name-input">Description</label>
							<input type="text" class="form-control" name="description-input" id="description-input" placeholder="Enter project description"/>
						</div>

						<div class="form-group">
							<label for="name-input">Photo</label>
							<input type="text" class="form-control" name="photo-input" id="photo-input" value="project.jpg"/>
						</div>

						<div class="form-group">
							<label for="type-input">Type</label>
							<select class="form-control" name="type-input" id="type-input">
							<option value="1">Painting</option>
							<option value="2">Sculpture</option>
							<option value="3">Digital</option>
							</select>
						</div>

						<button type="submit" class="btn btn-primary">Add</button>
						</form>
					</div>
				</View>
				<View viewName="nav" activeView={this.state.activeView} className="color5">
					<div className="header"><i onClick={() => this.setActiveView('nav')} className="fas fa-bars"></i></div>
					<div className="main">
						<ul className="menu">
							<li><a className="color1" onClick={() => this.setActiveView('projects')} href="#">PROJECTS</a></li>
							<li><a className="color2" onClick={() => this.setActiveView('add-project')} href="#">+ ADD PROJECT</a></li>
						</ul>
					</div>
				</View>

			</div>
		);
	}

}

export default App;
