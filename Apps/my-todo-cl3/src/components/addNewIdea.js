import React,{Component} from 'react';

class NewIdea extends Component {
    constructor(props) {
        super(props);
            this.state = {
                userInput:'',
                contentInput:'',
                dateInput:''
        }
    }

    handleUserInputChange  = (e) => {
        this.setState({
            userInput:e.target.value
        });
    }

    handleContentInputChange = (e) => {
        this.setState({
            contentInput:e.target.value
        })
    }

    handleDateinputChange = (e) => {
        this.setState({
            dateInput:e.target.value
        })
    }

    handleNewAddIdea = (e) => {
        e.preventDefault();
        var data = {
            user: this.state.userInput,
            content: this.state.contentInput,
            date: this.state.dateInput,
            };
        this.props.addIdea(data);
        }





    render() {
        return (
            <div className="ideaInputsContainer">
              <form className="idea-body">
                  <div className="form-group">
                    <label htmlFor="user-input">User</label>
                    <input onChange={this.handleUserInputChange} type="text" className="form-input" id="user-input"/>
                  </div>

                  <div className="form-group">
                    <label htmlFor="content-input">Your Idea</label>
                    <input onChange={this.handleContentInputChange} type="text" className="form-input" id="content-input"/>
                  </div>

                  <div className="form-group">
                    <label htmlFor="date-input">Date</label>
                    <input onChange={this.handleContentInputChange} type="text" className="form-input" id="date-input"/>
                  </div>
            
                  <button onClick={this.handleNewAddIdea} type="submit" className="btn btn-primary todo-add">Add</button>
              </form>
            </div>
        );
    }
}

export default NewIdea;