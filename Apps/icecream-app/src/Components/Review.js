import React, {Component} from 'react';

class Review extends Component {
    constructor(props) {
        super(props);
            this.state = {
                review:[{}]
            }
    }

    handleDeleteClick = () => {
        var {deleteReview,id} = this.props;
        deleteReview(id);
    }

    handleEditClick = () => {
        var {setActiveView, setReviewToUpdate, id} = this.props;
        setActiveView('edit-review')
        setReviewToUpdate(id)
    }

    render() {

        var {user,flavour,rating} = this.props;
        
        return (
            <div className="card review">
            <img className="card-img-top" src="icecream.jpg" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{user}</h5>
                <p className="card-text">{flavour}</p>
                <p className="card-stars">{rating}</p>
                <p>
                    <i className="fas fa-heart"></i>
                    <i onClick={this.handleEditClick} className="fas fa-edit"></i>
                    <i onClick={this.handleTrashClick} className="fas fa-trash"></i>
                </p>
            
            </div>
        </div>   

        )
    }

}

export default Review;