import React from 'react';

/**
 * Takes individual photo data, gets url and adds photo
 * as list item.
 * @param {photo data} props 
 */
const Photo = (props) => {
  return (
    <li>
      <img src={props.url} alt="" />
    </li>
  )
};

export default Photo;