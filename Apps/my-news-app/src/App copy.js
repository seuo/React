import React , {Component} from 'react';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
// import Form from 'react-bootstrap/Form';
// import Articles from './Components/articles';
import './App.css';

var keyCode = 'b37ed9c772d940c2ace3d420fa4a72f3';
var key = '?apiKey='+keyCode;

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      activeKey:'politics',
      sportArticles:[],
      businessArticles:[],
      scienceArticles:[],
      techArticles:[],
      generalArticles:[]
    }
  }




loadHeadlinesByCategory = (category) => {
	var articlesURL = 'https://newsapi.org/v2/top-headlines'+key+'&category='+category;
	fetch(articlesURL)
		.then( res=>res.json())
		.then((data)=>{
      
      var articles = data.articles;
    
      
      if(category=='sport'){
        this.setState({sportArticles:articles});
      }
      if(category=='business'){
        this.setState({businessArticles:articles});
      }
      if(category=='science'){
        this.setState({scienceArticles:articles});
      }
      if(category=='technology'){
        this.setState({techArticles:articles});
      }
      if(category=='general'){
        this.setState({generalArticles:articles})
      }

		})
}

loadHeadlinesByTerm = (term) => {
	var articlesURL = 'https://newsapi.org/v2/top-headlines'+key+'&q='+term;
	fetch(articlesURL)
		.then( res=>res.json())
		.then((data)=>{
			var articles = data.articles;
			console.log(articles);
		})
}

// testing 
// loadHeadlinesByCategory ('business');
// loadHeadlinesByTerm('oil');




  handleTabSelect = (key, e) => {
    this.setState({activeKey:key})
  }

  handleSearchSubmitClick = (e) => {
    e.preventDefault();
    this.setState({activeKey:'search'})
  }


  

  render(){
      return (
        <div className="container">
          <Tab.Container activeKey={this.state.activeKey} onSelect={this.handleTabSelect}>
       
            <div className="row tab-top">
              
              <Nav variant="pills" className="col-7">
                <Nav.Item>
                  <Nav.Link eventKey="sports">Sports</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="business">Businsess</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="science">Science</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="technology">Tech</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="general">World</Nav.Link>
                </Nav.Item>
              </Nav>

              <form className="col-5">
                <div class="form-row align-items-center justify-content-end">
                  <div class="col-auto">
                    <input type="text" className="form-control mb-2 search-input" placeholder="Enter keywords"/>
                  </div>
                  
                  <div class="col-auto">
                    <button onClick={this.handleSearchSubmitClick} type="submit" className="btn btn-primary mb-2 search-submit">Search</button>
                  </div>
                </div>
              </form>
            </div>

            
            <Tab.Content>
              <Tab.Pane className="tab-pane" eventKey="politics">
                <h1>Politics</h1>

                <div className="articles">

                  <div className="article">
                    <h5>Apple is giving out a special iPhone that can lead to a $1 million reward</h5>
                    <p><span class="badge badge-primary">Phonearena.com</span></p>
                  </div>

                  <div className="article">
                    <h5>Bengals vs. Chiefs: 5 winners and 6 losers from Cincinnatis 38-17 defeat - Cincy Jungle</h5>
                    <p><span class="badge badge-primary">Cincyjungle.com</span></p>
                  </div>

                  <div className="article">
                    <h5>New 4K HDR Honor Vision smart screen running Huaweis HarmonyOS unveiled at HDC 19</h5>
                    <p><span class="badge badge-primary">Buzz.ie</span></p>
                  </div>

                </div>
              </Tab.Pane>

              <Tab.Pane className="tab-pane" eventKey="business">
                <h1>Business</h1>
                <div className="articles">

                  <div className="article">
                    <h5>Apple is giving out a special iPhone that can lead to a $1 million reward</h5>
                    <p><span class="badge badge-primary">Phonearena.com</span></p>
                  </div>

                  <div className="article">
                    <h5>New 4K HDR Honor Vision smart screen running Huaweis HarmonyOS unveiled at HDC 19</h5>
                    <p><span class="badge badge-primary">Buzz.ie</span></p>
                  </div>

                </div>
              </Tab.Pane>

              <Tab.Pane className="tab-pane" eventKey="sports">
                <h1>Sports</h1>
              </Tab.Pane>

              <Tab.Pane className="tab-pane" eventKey="search">
                <h1>Search Results</h1>

                <div className="article">
                  <h5>Apple is giving out a special iPhone that can lead to a $1 million reward</h5>
                  <p><span class="badge badge-primary">Phonearena.com</span></p>
                </div>
                
              </Tab.Pane>

            </Tab.Content>
          
          </Tab.Container>
        </div>
    );
  }
}

export default App;
