import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FontAwesome from 'react-fontawesome';
import Venue from './Components/Venues';
import './App.css';

var clientId = 'AOLPRU3ZNR3O0E3WNSMHLPRMCMIEFC14D4Z4RG23V5UVC5YV';
var clientSecret = 'CU2VGYPCB3YLY30GRAELDK2032NDYVIUNLPXRR5NTPVPK2R4';
var key = '?client_id='+clientId+'&client_secret='+clientSecret+'&v=+20190801';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        venues:[],
        activeVenue:null,
        isModalOpen:false
    }
  }



loadVenues = () => {

    var latlong = '-36.856855,174.764460';
    var venuesURL = 'https://api.foursquare.com/v2/venues/explore'+key+'&ll='+latlong;

    fetch(venuesURL)
        .then(res=>res.json())
        .then((data)=>{
            return data.response.groups[0].items
        })
        .then( (data)=>{
            return data.map( (item)=>{
                // console.log(item)
                var venue = {
                    id:item.venue.id,
                    name:item.venue.name,
                    address:item.venue.location.address,
                    categories:item.venue.categories[0].shortName,
                
                };
                return venue;
    
            });
        })
        .then( (data)=>{
            this.setState({
              venues:data
            })
        })
    }
loadVenue = (venueId) => {

      var venueURL = 'https://api.foursquare.com/v2/venues/'+venueId+key;
      this.setState({activeVenue:null})
  
  
      fetch(venueURL)
          .then(res=>res.json())
          .then((data)=>{
              var item = data.response.venue;
              var venue = {
                  name:item.name,
                  description:item.description,
                  category:item.categories[0].shortName,
                  address:item.location.formattedAddress,
                  photo:item.bestPhoto.prefix + '300x300'+ item.bestPhoto.suffix
              }
              this.setState({activeVenue:venue})
              // console.log(venue);
          })
  }

    componentDidMount() {
      this.loadVenues();
    }

    openModal = () => {
      this.setState({isModalOpen:true});
    }
    closeModal = () => {
      this.setState({isModalOpen:false});
    } 

 render() {
  return (
    <div className="app">
      <div className="container">
        <div className="venues">
            {this.state.venues.map((venue)=> {
              let venueProps = {...venue,
              key:venue.id,
              openModal:this.openModal,
              loadVenue:this.loadVenue
              };
              return(<Venue {...venueProps}/>)
              })
            }

          </div> 
        </div> 

        <div className="venue-filters">
          
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <div role="group" className="btn-group btn-group-toggle">
              <label className="venue-filter btn active btn-primary">
                <input name="venue-filter" type="radio" autoComplete="off" value="all" checked=""/>All
              </label>
              <label className="venue-filter btn btn-primary">
                <input name="venue-filter" type="radio" autoComplete="off" value="food"/>Food
              </label>
              <label className="venue-filter btn btn-primary">
                <input name="venue-filter" type="radio" autoComplete="off" value="drinks"/>Drinks
              </label>
              <label className="venue-filter btn btn-primary">
                <input name="venue-filter" type="radio" autoComplete="off" value="others"/>Others
              </label>
            </div>
          </div>
        </div>
    

        <Modal show={this.state.isModalOpen} onHide={ () => {this.closeModal()}}> 
        
          <Modal.Body>
            <button type="button" class="close"/>
            {
             this.state.activeVenue !==null ? (

            <div className="venue-popup-body row">
              <div className="col-6">
                <h1 className="venue-name">{this.state.activeVenue.name}</h1>
                <p>{this.state.activeVenue.address[0]}</p>
                <p>{this.state.activeVenue.address[1]}</p>
                <p><span className="badge venue-type">{this.state.activeVenue.category}</span></p>
                
              </div>
              <div className="col-6">
                <img src="https://fastly.4sqi.net/img/general/200x200/194220_nI7vTqtIFQncbe7Zgn_XLymzqM78Cx-aZ_gySunjz-M.jpg" className="img-fluid" alt="Responsive image"/>
              </div>
            </div>

             ) : 'Loading...'
            }

            
          </Modal.Body>
        </Modal>


      
    </div>
  );
}

}

export default App;
