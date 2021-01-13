import React, { Component } from 'react';
import apiKey from './config';
import axios from 'axios';

import SearchForm from './SearchForm';
import Navigation from './Navigation';
// import NotFound from './NotFound';
import PhotoContainer from './PhotoContainer';

class App extends Component {

  componentDidMount() {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        console.log(response.data.photos.photo);
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      })
  }

  render() {
    return (
      <div>
        <SearchForm />
        <Navigation />
        <PhotoContainer />
      </div>
    );
  }
}

export default App;
