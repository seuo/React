import React, {Component} from 'react';
import Idea from './Components/idea';
import NewIdea from './Components/newidea';
import SketchFieldCanvas from './Components/sketch';
import DragScrollProvider from 'drag-scroll-provider'



import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject:'',
      ideas:[]
    };

  }


addIdea = (data) =>{
    var newIdea = { id:Date.now(),
    ...data
  };
    var newList = [newIdea,...this.state.ideas];
    this.setState({
    ideas: newList
  });

}

removeIdea = (id) => {
  var ideas = this.state.ideas;
  var filtered = ideas.filter((idea) => {
    return idea.id !== id
  });
  this.setState ({
    ideas: filtered
  });
}

handleSubjectInputChange = (e) => {
  this.setState ({
      subject:e.target.value
  });
};

updateIdea = (id,data) => {
  var ideas = this.state.ideas;
  var index = ideas.findIndex(function(idea) {
    return idea.id == id;
});

var updatedIdea = {...ideas[index],...data};
ideas[index] = updatedIdea;
this.setState({
  ideas:ideas
});

}


render(){
  return (
    <div className="wrap">
                        
        <div className="container">
        
            <div className="ideas">
            
              {
                this.state.ideas.map((idea) => {
                  var ideaProps = {
                    ...idea,
                  key: idea.id,
                  removeIdea: this.removeIdea,
                  updateIdea: this.updateIdea
                  };
                  
                  return (
                     <Idea {...ideaProps}/>
                    
                  )

                })
              }
<SketchFieldCanvas></SketchFieldCanvas>
          </div>
         
          <NewIdea addIdea={this.addIdea}/>
          
        </div>
      </div>
    );
  }
}

export default App;



