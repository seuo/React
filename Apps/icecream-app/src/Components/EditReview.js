import React, { Component } from "react";

class EditReview extends Component {
    constructor(props) => {
        super(props);
            this.state = {

            }
    }


    handleSubmit = (e) => {
        e.preventDefault();
        var {updateReview,id,setActiveView} = this.props
        var reviewData = new FormData(this.form);
        var data = {
            user:reviewData.get('user-input')
            flavour:reviewData.get('flavour-input')
            rating:formData.get('rating-input')
        }
        updateReview(id,data);
        setActiveView('reviews');
        
    }

    render() {
        return(
            <form>

            </form>
        )
    }
}
export default EditReview;