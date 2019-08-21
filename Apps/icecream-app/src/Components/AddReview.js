import React, { Component } from "react";

class AddReview extends Component {
    constructor(props) => {
        super(props);
            this.state = {

            }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var reviewData = new FormData(this.form);
        var data = {
            user:reviewData.get('user-input')
            flavour:reviewData.get('flavour-input')
            rating:formData.get('rating-input')
        }

        this.props.addReview(data);
        this.props.setActiveView('reviews');
    }

    render() {
        return(
            <form>

            </form>
        )
    }

}

export default AddReview;