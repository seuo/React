import React, { Component } from "react";

class EditReview extends Component {
    constructor(props) {
        super(props);
            this.state = {

            }
    }


    handleSubmit = (e) => {
        e.preventDefault();
        var {updateReview,id,setActiveView} = this.props
        var reviewData = new FormData(this.form);
        var data = {
            user:reviewData.get('user-input'),
            parlour:reviewData.get('parlour-input'),
            flavour:reviewData.get('flavour-input'),
            rating:reviewData.get('rating-input')
        }
        updateReview(id,data);
        setActiveView('reviews');
        
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}
            ref={(el) => {this.form = el}}>
            <div className="form-group">
                <label for="exampleFormControlInput1">Username:</label>
                <input type="username" className="form-control" id="exampleFormControlInput1" placeholder="Your username..."/>
            </div>
            <div className="form-group">
                <label for="exampleFormControlInput1">Parlour:</label>
                <input type="parlour" className="form-control" id="exampleFormControlInput1" placeholder=""/>
            </div>
            <div className="form-group">
                <label for="exampleFormControlInput1">Flavour:</label>
                <input type="flavour" className="form-control" id="exampleFormControlInput1" placeholder="Chocolate"/>
            </div>
            <div className="form-group">
                <label for="exampleFormControlSelect1">Rating between 1-10</label>
                <select className="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
            </div>
            <div className="form-group">
                <label for="exampleFormControlTextarea1">How were you feeling emotionally at the time?</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Add</button>
        </form>
        )
    }
}
export default EditReview;