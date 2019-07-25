import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
      this.notes = [
        {
          id:1,
          text: 'Washing'
        },
        {
          id:2,
          text: 'Cook Dinner'
        },
        {
          id:3,
          text: 'React'
        },
      ];
    }

  render(){
    return (
      <div className="wrap">
        <div className="container">
          <div className="notes">
                {
                  this.notes.map(function(note){
                    return(

                     <div className="note" key={note.id}>
                      <div className="note-body">
                        <i className="far fa-times-circle note-remove"></i>
                        <div className="note-text">
                          {note.text}
                        </div>
                      </div>
                    </div>

                    );
                  })
                }

                <div className="note new-note">
                    
                  <form className="note-body">

                      <div className="form-group">
                        <label for="note-input">New note</label>
                        <input type="text" className="form-control" id="note-input"/>
                      </div>
                
                      <button type="submit" className="btn btn-primary">Add</button>
                  </form>
                  
                </div>

            </div>
          </div>

        </div>
    );
  }

}

export default App;
