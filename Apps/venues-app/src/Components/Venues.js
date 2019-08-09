import React, { Component } from 'react';

class Venue extends Component {
    constructor(props) {
        super(props);

    }

    handleVenueNameClick = () => {
        this.props.openModal();
        let id = this.props.id;
        this.props.loadVenue(id);
    }

    render() {
        return (
            <div className="card venue" onClick={this.handleVenueNameClick}>
                <div className="card-body">
                <h1 className="venue-name">{this.props.name}</h1>
                <p>{this.props.address}</p>
                
                <p><span className="badge venue-type">{this.props.categories}</span></p>
                </div>
            </div>
        );
    }

}

export default Venue;
