import React, {Component} from 'react';
import Idea from './components/idea.js';
import NewIdea from './components/addNewIdea.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        ideas:[
        ],
      }
  }

  addIdea = (data) => {
    var newIdea = {
      id:Date.now(),
      ...data
    };
    var newList = [newIdea,...this.state.ideas];
    this.setState({
      ideas:newList
    });
  }

  removeIdea= (id) => {
    var ideas = this.state.ideas
    var filtered = ideas.filter((idea) => {
      return idea.id !== id
    });
    this.setState({
      ideas:filtered
    })
  }

  updateIdea = (id,data) => {}

render() {
  return (
      <div className="wrap">
        <div className="container">
            <div className="ideas">
            {
              this.state.ideas.map((idea) => {

                var ideaProps = {
                  ...idea,
                  key:idea.id,
                  removeIdea: this.removeIdea
                };
                
                return ( 
                <Idea {...ideaProps}/>
                )
              })
            }
            <NewIdea addIdea={this.addIdea}/>
            </div>
        </div>
      </div>
  );
}


}

export default App;
