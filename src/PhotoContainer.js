import React, {Component} from 'react';

/**
 * Components
 */
import Photo from './Photo';
import NotFound from './NotFound';

/**
 * Gets the results from the performSearch in app.js and
 * maps each item in reslts to photo.js to then render
 * the group of completed photos to page. If no results
 * then page lets user know to try again or return to /cats.
 */
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
        <h2>{this.props.title}</h2>
        <ul>
          {photos}
        </ul>
      </div>
    )
  }
}

export default PhotoContainer;

