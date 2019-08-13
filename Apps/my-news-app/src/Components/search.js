import React, {Component} from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchArticles:[]
        }
    }

    render () {
        
        return(
            <div className="search">
                <p>{this.props.title}</p>
            </div>
        )
    }

}

export default Search;