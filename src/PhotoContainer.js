import React, {Component} from 'react';

import Photo from './Photo';
import NotFound from './NotFound';

class PhotoContainer extends Component {
  render() {
    const results = this.props.data;
    let photos;
    if (results.length > 0) {
      photos = results.map(photo => 
        <Photo url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id}/>
      );
    } else {
      photos = <NotFound />
    }
    return (
      <div className="photo-container">
        <h2>Results</h2>
        <ul>
          {photos}
        </ul>
      </div>
    )
  }
}

export default PhotoContainer;

