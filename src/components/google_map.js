import React, { Component } from 'react';

// Custom libary to be implemented
export default class extends Component {

  // Only render component one time
  shouldComponentUpdate() {
    return false;
  }

  // But pass new props received to custom lib for rendering
  componentWillReceiveProps(nextProps) {
    let pos = {
      lat: nextProps.lat,
      lng: nextProps.lng
    };
    // Move to new position
    this.map.panTo(pos);
    // Set new marker
    this.marker = new google.maps.Marker({
      position: pos,
      map: this.map
    });
  }

  // Render custom component
  componentDidMount() {
    let pos = {
      lat: this.props.lat,
      lng: this.props.lng
    };

    // Create component and append to element
    this.map = new google.maps.Map(this.refs.map , {
      center: pos,
      zoom: 8
    });

    this.marker = new google.maps.Marker({
      position: pos,
      map: this.map
    });
  }

  render() {
    return (
      // Ref hooks element to component
      <div id="map" ref="map"></div>
    );
  }
}
