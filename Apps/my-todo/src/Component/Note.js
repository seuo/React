import React, { Component } from 'react';

class Note extends Component {

    render(){
      return (
        <div className="note">
          {this.props.text}
          <div className="noteClose"><div className="closeBtn" onClick={this.props.deleteMethod}>REMOVE</div></div>
        </div>
      );
    } 
}

export default Note;