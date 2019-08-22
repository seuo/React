import React,{Component} from 'react';
import axios from 'axios';
import View from './Components/View'
import Review from './Components/Review';
import AddReview from './Components/AddReview';
import EditReview from './Components/EditReview';
import './App.css';

var urlPrefix = 'http://localhost:3000'

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        activeView:'reviews',
        reviewToUpdate:null,
        reviews:[{
          id:1,
          user:'user1',
          parlour:'Wendys',
          flavour:'Chocolate',
          rating:5
        }]
      }
  }

	setActiveView = (view) => {
		this.setState({
			activeView:view
		})
	};

  setReviewToUpdate = (id) => {
    var matchedReview = this.state.reviews.find((review) => {
      return review.id === id;
    })
    this.setState({reviewToUpdate:matchedReview});
  }

  getReviews = (data) => {
    axios.get(urlPrefix+ '/reviews',data)
    .then (res =>{
      this.setState({reviews:res.data})
    })
  }

  addReview = (data) => {
    axios.post(urlPrefix+ '/reviews',data)
    .then (res => {
      this.getReviews()
    })
  }

  deleteReview = (id) => {
    axios.delete(urlPrefix+ '/reviews'+id)
    .then (res => {
      this.getReviews();
    })
  }

  updateReview = (id,data) => {
    axios.put(urlPrefix+'/reviews'+id,data)
    .then(res => {
      this.getReviews();
    })
  }

  componentDidMount() {
    this.getReviews();
  }


render() {
  return (
    <div className="app">
				<View viewName="reviews" activeView={this.state.activeView} className="color1">
				<div className="header "><h2>Rate your Ice Cream</h2><div className="navadd"><div className="addIcecream" onClick={() => this.setActiveView('add-review')} ><img src="add-icecream.png" alt="icecream" class="icecream" /></div></div></div>
					<div className="main">
            {
              this.state.reviews.map((review) => {
                var reviewProps = {
                  ...review,
                  key:review.id,
                  setActiveView:this.setActiveView,
                  setReviewToUpdate:this.setReviewToUpdate,
                  deleteReview:this.deleteReview
                };
                return (<Review {...reviewProps}/>);
              })

            }
            </div>
          </View>
          <View viewName="add-review" activeView={this.state.activeView} className="color2">
					<div className="header"><i onClick={() => this.setActiveView('reviews')} className="fas fa-window-close"></i></div>
					<div className="main">
            <AddReview addReview ={this.addReview} setActiveView={this.setActiveView}/>
					</div>
				  </View>
				  <View viewName="edit-review" activeView={this.state.activeView} className="color3">
					<div className="header"><i onClick={() => this.setActiveView('reviews')} className="fas fa-window-close"></i></div>
					<div className="main">
						<h3>Edit Your Review</h3>
            <EditReview {...this.state.reviewToUpdate} updateReview={this.updateReview} setActiveView={this.setActiveView}/>
					</div>
				</View>
      </div>
  );
}

}

export default App;
