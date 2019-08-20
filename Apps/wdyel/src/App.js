import React, {Component} from 'react';
import axios from 'axios';
import View from './Components/view'
import Project from './Components/project';
import AddProject from './Components/addProjectForm';
import EditProject from './Components/editProjectForm';
import './App.css';
/* <link href="https://fonts.googleapis.com/css?family=Pangolin&display=swap" rel="stylesheet"></link> */

var urlPrefix = 'http://10.2.24.38:4000/api'

class App extends Component {
	constructor(props) {
		super(props);
			this.state = {
				activeView:'projects',
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
				],
				projectToUpdate:null
			};
	}

	setActiveView = (view) => {
		this.setState({
			activeView:view
		})
	};

	setProjectToUpdate = (id) => {
		var foundProject = this.state.projects.find((project) => {
			return project.id === id;
		})
		this.setState({projectToUpdate:foundProject});

	}


	getProjects = () => {
		axios.get(urlPrefix+'/projects')
		.then(res => {
			 this.setState({projects:res.data});
		});
	}

	addProjects = (data) => {
		axios.post(urlPrefix+'/projects',data)
		.then(res => {
			this.getProjects()
		})
	}

	deleteProjects = (id) => {
		axios.delete(urlPrefix+'/projects/'+id)
		.then(res => {
			this.getProjects();
			// console.log(res);
		})
	}

	updateProject = (id,data) => {
		axios.put(urlPrefix+'/projects/'+id,data)
		.then(res => {
			this.getProjects();
			// console.log(res)
		})
	}

	componentDidMount(){
		this.getProjects();
	}

render () {
	
	return (
			<div className="app">
				
				<View viewName="projects" activeView={this.state.activeView} className="color1">
				<div className="header "><div className="navbar"><i onClick={() => this.setActiveView('nav')} className="fas fa-bars"></i></div><h2>Rate your Ice Cream</h2><div className="navadd"><div className="addIcecream" onClick={() => this.setActiveView('add-project')} ><img src="add-icecream.png" alt="icecream" class="icecream" /></div></div></div>
					<div className="main">

						{
							this.state.projects.map((project) => {
								var projectProps = {
									...project,
									key: project.id,
									deleteProjects:this.deleteProjects,
									setActiveView:this.setActiveView,
									setProjectToUpdate: this.setProjectToUpdate

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
						<AddProject addProjects={this.addProjects} setActiveView={this.setActiveView}/>
					</div>
				</View>
				<View viewName="edit-project" activeView={this.state.activeView} className="color3">
					<div className="header"><i onClick={() => this.setActiveView('projects')} className="fas fa-plus"></i><i onClick={() => this.setActiveView('nav')} className="fas fa-bars"></i></div>
					
					<div className="main">
						<h3>Edit Project</h3>
						<EditProject {...this.state.projectToUpdate}
						updateProject={this.updateProject}
						setActiveView={this.setActiveView}
						/>
					</div>
				</View>
				<View viewName="nav" activeView={this.state.activeView} className="color5">
					<div className="header"><i onClick={() => this.setActiveView('add-project')} className="fas fa-plus"></i><i onClick={() => this.setActiveView('nav')} className="fas fa-bars"></i></div>
					
					<div className="main">
						<ul className="menu">
							<li><a className="color1" onClick={() => this.setActiveView('projects')} href="#">PROJECTS</a></li>
							<li><a className="color2" onClick={() => this.setActiveView('add-project')} href="#">+ ADD PROJECT</a></li>
							<li><a className="color3" onClick={() => this.setActiveView('projects')} href="#">= EDIT PROJECT</a></li>
						</ul>
					</div>
				</View>


			</div>
		);
	}

}

export default App;
 