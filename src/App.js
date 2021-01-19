import React, { Component } from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import apiKey from './config';
import axios from 'axios';

/**
 * App Components
 */
import SearchForm from './SearchForm';
import Navigation from './Navigation';
import PhotoContainer from './PhotoContainer';
import InvalidPath404 from './invalidPath404';

class App extends Component {

  /**
   * Constructor holding state of app
   */
  constructor() {
    super();
    this.state = {
      photos: [],
      cats: [],
      dogs: [],
      computers: [],
      loading: true 
    };
    this.performSearch = this.performSearch.bind(this);
  }

  /**
   * When app mounts go ahead and search for 3 keywords
   */
  componentDidMount() {
    this.performSearch('cats');
    this.performSearch('dogs');
    this.performSearch('computers');
  }

  /**
   * If search term is one of the keywords it will load 
   * results into state but if not then it will load 
   * into generic photos state.
   * @param {searchTerm} query 
   */
  performSearch(query) {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`) 
      .then(response => {
        if (query === 'cats' || query === 'dogs' || query === 'computers') {
          this.setState({
            [query]: response.data.photos.photo
          })
        } else {
          this.setState({
            photos: response.data.photos.photo,
            loading: false
          });
        }
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <SearchForm onSearch={this.performSearch} search={this.state.search} />
          <Navigation />
          {/* Using switch here to get the pathing worked out for
          app. Specific paths for the keywords and also app
          redirects to /cats path and is considered the home
          page. If given path is not here it defaults to a 404. */}
          <Switch>
            <Route path="/search/cats" render={() => <Redirect to="/cats" /> } />
            <Route path="/search/dogs" render={() => <Redirect to="/dogs" /> } />
            <Route path="/search/computers" render={() => <Redirect to="/computers" /> } />
            <Route exact path="/cats" render={() => <PhotoContainer title='Cats' data={this.state.cats} /> } />
            <Route path="/dogs" render={() => <PhotoContainer title='Dogs' data={this.state.dogs} /> } />
            <Route path="/computers" render={() => <PhotoContainer title='Computers' data={this.state.computers} /> } />
            <Route exact path="/" render={() => <Redirect to="/cats" /> } />
            <Route path="/search/:term" render={() => <PhotoContainer title='Search Results' data={this.state.photos} loading={this.state.loading}/> } />
            <Route component={InvalidPath404} />
          </Switch>
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
