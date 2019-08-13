import React, {Component} from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
    }


    render () {
        return(
            <div className="article">
                <p>{this.props.title}</p>
            </div>
        )
    }

}

export default Search;