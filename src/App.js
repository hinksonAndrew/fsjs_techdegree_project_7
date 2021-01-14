import React, { Component } from 'react';
import apiKey from './config';
import axios from 'axios';

import SearchForm from './SearchForm';
import Navigation from './Navigation';
import PhotoContainer from './PhotoContainer';

class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`) 
      .then(response => {
        this.setState({
          photos: response.data.photos.photo
        });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      })
  }

  //probably best this ends up in container so that i can pass
  // all data including id for each picture
  createPhotos = (data) => {
    const photos = data.photos.photo.map(photo => `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`);
    return photos;
  }

  render() {
    return (
      <div>
        <SearchForm />
        <Navigation />
        <PhotoContainer data={this.state.photos}/>
      </div>
    );
  }
}

export default App;
