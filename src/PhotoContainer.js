import React, {Component} from 'react';
import Photo from './Photo';

class PhotoContainer extends Component {
  render() {
    return (
      <div class="photo-container">
        <h2>Results</h2>
        <ul>
          <Photo />
          <Photo />
          <Photo />
          <Photo />
        </ul>
      </div>
    )
  }
}

export default PhotoContainer;



