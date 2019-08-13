import React, {Component} from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchArticles:[]
        }
    }




    render () {

              
    //   let searchTerm = this.props.searchTerm;
    //   let searchList = this.props.searchArticles;
      
    //   let filtered = searchList.filter((searchList)=>{
    //       return searchList.title !== searchTerm;
    //   });
    //   this.setState({
    //     searchArticles: filtered
    //   });
        
        return(
            <div className="search">
                <p>{this.props.title}</p>
            </div>
        )
    }

}

export default Search;