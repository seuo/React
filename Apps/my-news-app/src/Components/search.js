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
                <p><span className="badge badge-primary">  {this.props.source.name} <a href={this.props.url}><img src={this.props.urlToImage} alt=""/></a></span></p>
            </div>
        )
    }

}

export default Search;