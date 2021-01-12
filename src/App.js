import React, { Component } from 'react';

import SearchForm from './SearchForm';
import Navigation from './Navigation';
import NotFound from './NotFound';
import PhotoContainer from './PhotoContainer';

class App extends Component {
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
