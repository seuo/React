import React , {Component} from 'react';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Article from './Components/articles';
import Search from './Components/search';
import './App.css';

var keyCode = '0ac87d5dcb66413e9b9ebfa55ae5fc8a';
var key = '?apiKey='+keyCode;

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      activeKey:'sports',
      searchTerm:'',
      searchArticles:[],
      sportsArticles:[],
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
    
      
      if(category=='sports'){
        this.setState({sportsArticles:articles});
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
      let articles = data.articles;
      let searchTerm = this.state.searchTerm;
      let filtered = articles.filter((articles)=>{
          return articles.description !== searchTerm;
      });
      this.setState({
        searchArticles: filtered
      });

      if(term=='search'){
        this.setState({searchArticles:filtered})
      }
		})
}

// loadHeadlinesByCategory ('sport');



  componentDidMount() {
    this.loadHeadlinesByCategory('sports');
    this.loadHeadlinesByCategory('business');
    this.loadHeadlinesByCategory('general');
    this.loadHeadlinesByCategory('science');
    this.loadHeadlinesByCategory('technology');
    this.loadHeadlinesByTerm('search');
  }


  HandleSearchNews = (term) => {
    let searchList = this.state.searchArticles;
    let filtered = searchList.filter((searchList)=>{
        return searchList.term !== this.state.searchTerm;
    });
    this.setState({
      searchList: filtered
    });
    console.log(filtered)
    }



  handleSearchSubmitClick = (e) => {
    e.preventDefault();
    this.setState({activeKey:'search'})
    console.log(this.state.searchTerm)
  }

  handleSearchInputChange = (e) => {
    e.preventDefault();
    this.setState({
			searchTerm:e.target.value
    });
    
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
                  <Nav.Link eventKey="business">Business</Nav.Link>
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

              <form className="col-5" id="searchForm" >
                <div className="form-row align-items-center justify-content-end">
                  <div className="col-auto">
                    <input type="text" onBlur={this.handleSearchInputChange} className="form-control mb-2 search-input" placeholder="Enter keywords"/>
                  </div>
                  
                  <div className="col-auto">
                    <button onClick={this.handleSearchSubmitClick} type="submit" className="btn btn-primary mb-2 search-submit">Search</button>
                  </div>
                </div>
              </form>
            </div>

            <Tab.Content>
              <Tab.Pane className="tab-pane" eventKey="technology">
                <h1>Tech</h1>

                <div className="articles">
                {
                    this.state.techArticles.map((article)=>{
                      
                      var articleProps = {
                        ...article,
                        key:Math.random()
                      }
                      return <Article {...articleProps} />
                    })
                  }

                </div>
              </Tab.Pane>

              <Tab.Pane className="tab-pane" eventKey="general">
                <h1>World</h1>

                <div className="articles">
                {
                    this.state.generalArticles.map((article)=>{
                      
                      var articleProps = {
                        ...article,
                        key:Math.random()
                      }
                      return <Article {...articleProps} />
                    })
                  }

                </div>
              </Tab.Pane>
            
              <Tab.Pane className="tab-pane" eventKey="science">
                <h1>Science</h1>

                <div className="articles">

                {
                    this.state.scienceArticles.map((article)=>{
                      
                      var articleProps = {
                        ...article,
                        key:Math.random()
                      }
                      return <Article {...articleProps} />
                    })
                  }

                </div>
              </Tab.Pane>

              <Tab.Pane className="tab-pane" eventKey="business">
                
                <h1>Business</h1>
                <div className="articles">
                {
                    this.state.businessArticles.map((article)=>{
                      
                      var articleProps = {
                        ...article,
                        key:Math.random()
                      }
                      return <Article {...articleProps} />
                    })
                  }

                </div>
              </Tab.Pane>

              <Tab.Pane className="tab-pane" eventKey="sports">
                <h1>Sports</h1>
                <div className="articles">

                  {
                    this.state.sportsArticles.map((article)=>{
                      
                      var articleProps = {
                        ...article,
                        key:Math.random()
                      }
                      return <Article {...articleProps} />
                    })
                  }

                </div>
              </Tab.Pane>

              <Tab.Pane className="tab-pane" eventKey="search">
                <h1>Search Results</h1>

              {
                this.state.searchArticles.map((article)=>{
                  var articleProps = {
                    ...article,
                    key:Math.random()
                  }
                  return <Search {...articleProps}/>
                })
              }
                
              </Tab.Pane>

            </Tab.Content>
          
          </Tab.Container>
        </div>
    );
  }
}

export default App;
