import React, { Component } from 'react';
import { GoogleMap, withGoogleMap } from 'react-google-maps';
import PropTypes from 'prop-types';
import './index.style.less';

/*
 * Sample From: https://developers.google.com/maps/documentation/javascript/examples/map-simple
 */

const SimpleMapExampleGoogleMap = withGoogleMap(() => (
  <GoogleMap
    defaultZoom={15}
    options={{
      scrollwheel: false,
    }}
    defaultCenter={{ lat: 25.7824758, lng: -80.289328 }}
  />
));

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class SimpleMap extends Component {
  render() {
    let styleName = this.props.styleName;
    if (!styleName) {
      styleName = 'contact-embed-responsive-21by9';
    }
    return <SimpleMapExampleGoogleMap containerElement={<div className={`contact-embed-responsive ${styleName}`} />} mapElement={<div className="contact-embed-responsive-item" />} />;
  }
}

SimpleMap.propTypes = {
  styleName: PropTypes.object,
};
