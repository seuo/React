import React, {Component} from 'react';
import Draggable from 'react-draggable';
import { FaTrash } from 'react-icons/fa';



class Idea extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            updatingTitle:false,
            updatingIdea:false,
            updatingNote:false,
            titleInput:props.title,
            contentInput:props.content,
            noteInput:props.notes
        }
    }
// set input field to true for editing

handleTitleDoubleClick = () => {
    this.setState ({
        updatingTitle:true
    });
}

handleContentDoubleClick = () => {
    this.setState ({
        updatingContent:true
    });
}

handleNotesDoubleClick = () => {
    this.setState ({
        updatingNote:true
    });
}


// Input change updates state

handleTitleInputChange = (e) => {
   this.setState({
       titleInput:e.target.value
   })
}

handleContentInputChange = (e) => {
    this.setState({
        contentInput:e.target.value
    })
}

handleNotesInputChange = (e) => {
    this.setState({
        noteInput:e.target.value
    })
}

// update props state with new input and unset input field

handleTitleInputBlur = () => {
    var id = this.props.id;
    var data = {
        title: this.state.titleInput
    };
    this.props.updateIdea(id,data);
    this.setState({updatingTitle:false});
}

handleContentInputBlur = () => {
    var id = this.props.id;
    var data = {
        content: this.state.contentInput
    };
    this.props.updateIdea(id,data);
    this.setState({updatingContent:false});
}

handleNotesInputBlur = () => {
    var id = this.props.id;
    var data = {
        notes: this.state.noteInput
    };
    this.props.updateIdea(id,data);
    this.setState({updatingNote:false});
}



handleIdeaRemoveClick = () => {
    var id = this.props.id;
    this.props.removeIdea(id);
}


render (){
        return(
            
            <Draggable
            // axis="x"
            handle=".handle"
            defaultPosition={{x: 0, y: 0}}
            position={null}
            grid={[52, 52]}
            scale={1}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}>
            <div className="handle" >
                <div className="idea">
                <div className="titleContent" onBlur={this.handleTitleInputBlur} onDoubleClick={this.handleTitleDoubleClick}>

                    {this.state.updatingTitle 
                    ? (
                    <input value={this.state.titleInput} autoFocus onChange={this.handleTitleInputChange} type="text" className="ideaInput"/>
                    ):
                   <h2> {this.props.title}</h2>
                   }
                </div>

                <div className="ideaContent" onBlur={this.handleContentInputBlur} onDoubleClick={this.handleContentDoubleClick}>
                    {this.state.updatingContent 
                    ? (
                    <textarea value={this.state.contentInput} autoFocus onChange={this.handleContentInputChange}  type="text" className="ideaContentText"/> 
                     ):
                     <p>{this.props.content}</p> 
                     }
                </div>

                <div className="ideaNote" onBlur={this.handleNotesInputBlur} onDoubleClick={this.handleNotesDoubleClick}>
                {this.state.updatingNote
                    ? (
                    <input value={this.state.noteInput} autoFocus onChange={this.handleNotesInputChange}  type="text" className="ideaNoteInput"/> 
                    ): <p>{this.props.notes}</p>
                    }
                </div>

                <div className="removeIdea" onClick={this.handleIdeaRemoveClick}><FaTrash /></div>
                </div>
            </div>
          </Draggable>


        );
    }
}

export default Idea;