import React, {Component} from 'react';
import Draggable from 'react-draggable';
import { FaGripLines,FaAngleRight,FaLightbulb } from 'react-icons/fa';


class NewIdea extends Component {
    constructor(props) {
        super(props)
        this.state = {
            titleInput:'',
            contentInput:'',
            noteInput:'',
        }
    }

    handleTitleInputChange = (e) => {
        this.setState ({
            titleInput:e.target.value
        });
    };

    handleContentInputChange = (e) => {
        this.setState ({
            contentInput:e.target.value
        });
    };

    handleNoteInputChange = (e) => {
        this.setState ({
            noteInput:e.target.value
        });
    };

    handleAddIdeaClick = (e) => {
        e.preventDefault(); 
        let data = {
            title:this.state.titleInput,
            content:this.state.contentInput,
            notes:this.state.noteInput
        };
        this.props.addIdea(data);

        this.setState({
            title:'',
            content:'',
            notes:''
        })
    }




render (){
        return (
            <div className="ideaBubble">
                <div>
                                <FaLightbulb />
                    <h2>BrainStorm</h2>
                    <Draggable
            // axis="x"
            cancel=".SubjectStyle"
            handle=".subjectHandle"
            defaultPosition={{x: 0, y: 0}}
            position={null}
            grid={[25, 25]}
            scale={1}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}>
              <div className="subjectHandle">
              <FaGripLines />
              <form className="subject">
              {this.props.subject}
              
                <input type="text" placeholder="Subject" className="SubjectStyle"/>
               
              </form>
              </div>
            </Draggable>
                    </div>
                       
                <form onSubmit={this.handleAddIdeaClick} className="IdeaForm" id="ideaSubmit">

                    <input type="text"  onChange={this.handleTitleInputChange} placeholder="Idea Title" className="titleStyle"/>
                    <textarea onChange={this.handleContentInputChange} placeholder="Your Idea" className="contentStyle"/>
                    <input type="text"  onChange={this.handleNoteInputChange} placeholder="Notes" className="noteStyle"/>
                    
                </form>
                <button type="submit" form="ideaSubmit" className="btn btn-primary idea-add">Add Idea <FaAngleRight /></button>
            </div>
        );
    }   
}

export default NewIdea;