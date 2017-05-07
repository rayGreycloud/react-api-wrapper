import React, { Component } from 'react';

// Custom libary to be implemented
export default class extends Component {
  // Only render component one time
  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    // Create component
    this.map = new google.maps.Map(this.refs.map , {
      center: { lat: this.props.lat, lng: this.props.lng },
      zoom: 8
    });
  }
  render() {
    return (
      // Ref hooks element to component
      <div id="map" ref="map"></div>
    );
  }
}
