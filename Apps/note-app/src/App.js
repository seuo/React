import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="wrap">
        <div className="container">
          <div className="notes">
            <div className="note">
              <div className="note-body">
                <i className="far fa-times-circle note-remove"></i>
                <div className="note-text">
                  Get milk
                </div>
              </div>
            </div>
            <div className="note">
              <div className="note-body">
                <i className="far fa-times-circle note-remove"></i>
                <div className="note-text">
                  Water the plants
                </div>
              </div>
            </div>
    
            <div className="note">
              <div className="note-body">
                <i className="far fa-times-circle note-remove"></i>
                <div className="note-text">
                  Ring Peter
                </div>
              </div>
            </div>
        
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
