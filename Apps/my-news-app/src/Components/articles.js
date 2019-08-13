import React, {Component} from 'react';

class Article extends Component {
    constructor(props) {
        super(props);
            this.state = {

        }
    }


    render() {
        return(
            <div className="article">
                <h5>{this.props.title}</h5>
                <p><span className="badge badge-primary">{this.props.source.name}</span></p>
            </div>
        )
    }

}

export default Article;