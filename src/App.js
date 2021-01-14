import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import apiKey from './config';
import axios from 'axios';

import SearchForm from './SearchForm';
import Navigation from './Navigation';
import PhotoContainer from './PhotoContainer';

class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      cats: [],
      dogs: [],
      computers: [],
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch('cats');
    this.performSearch('dogs');
    this.performSearch('computers');
    this.performSearch();
  }

  performSearch(query = 'cars') {
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
          <SearchForm onSearch={this.performSearch} />
          <Navigation />
          <Switch>
            <Route path="/cats" render={() => <PhotoContainer title='Cats' data={this.state.cats} /> } />
            <Route path="/dogs" render={() => <PhotoContainer title='Dogs' data={this.state.dogs} /> } />
            <Route path="/computers" render={() => <PhotoContainer title='Computers' data={this.state.computers} /> } />
          </Switch>
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
