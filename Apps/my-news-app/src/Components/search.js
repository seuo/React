import React, {Component} from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }


    render () {
        
        return(
            <div className="search">
                <p>{this.props.term}</p>
            </div>
        )
    }

}

export default Search;