import React from 'react';
import './Ad.css';
import PropTypes from 'prop-types';

/*const Ad = () => (
  <div>
    Ad Component
  </div>
);

Ad.propTypes = {};

Ad.defaultProps = {};*/

/*export default function Ad ({source, width, height}) {
  return <img src={source + '/' + width + '/' + height} ></img> //<img src="{title}' + width + '/' + height + '" alt="pretty kitty"> </img>
}*/

export default function Ad ({source}) {
  return <img src={source} ></img>
}