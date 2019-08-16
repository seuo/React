import React, {Component} from 'react';
import axios from 'axios';
import View from './Components/view'
import Project from './Components/project';
import './App.css';

var urlPrefix = 'http://10.2.24.39:4000/api'

class App extends Component {
	constructor(props) {
		super(props);
			this.state = {
				activeView:'nav',
				projects:[{
					id:1,
					name:'Build an App',
					description:'my first live app'
				},
				{
					id:2,
					name:'Update Data',
					description:'Update remove data on database'
				}
				]
			};
	}

	setActiveView = (view) => {
		this.setState({
			activeView:view
		})
	};


	getProjects = () => {
		axios.get(urlPrefix+'/projects')
		.then(res => {
			console.log(res);
		 	this.setState({projects:res.data});
		});
	}

	addProjects = (data) => {

	}

	deleteProjects = (id) => {

	}

	updateProject = (id,data) => {

	}

	componentDidMount(){
		this.getProjects();
	}

render () {
	
	return (
			<div className="app">
				
				<View viewName="projects" activeView={this.state.activeView} className="color1">
				<div className="header"><i onClick={() => this.setActiveView('nav')} className="fas fa-window-close"></i></div>
					<div className="main">
						<h3>Projects</h3>
						{
							this.state.projects.map((project) => {
								var projectProps = {
									...project,
									key: project.id
								};
								return (<Project {...projectProps} />);
							})
						}

					</div>
				</View>
				<View viewName="add-project" activeView={this.state.activeView} className="color2">
					<div className="header"><i onClick={() => this.setActiveView('nav')} className="fas fa-window-close"></i></div>
					<div className="main">
							<h3>Add a project</h3>
						<form>
						<div className="form-group">
							<label for="name-input">Name</label>
							<input type="text" className="form-control" name="name-input" id="name-input" placeholder="Enter project name"/>
						</div>
						<div className="form-group">
							<label for="name-input">Description</label>
							<input type="text" className="form-control" name="description-input" id="description-input" placeholder="Enter project description"/>
						</div>

						<div className="form-group">
							<label for="name-input">Photo</label>
							<input type="text" className="form-control" name="photo-input" id="photo-input" value="project.jpg"/>
						</div>

						<div className="form-group">
							<label for="type-input">Type</label>
							<select className="form-control" name="type-input" id="type-input">
							<option value="1">Painting</option>
							<option value="2">Sculpture</option>
							<option value="3">Digital</option>
							</select>
						</div>

						<button type="submit" className="btn btn-primary">Add</button>
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
