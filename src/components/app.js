import React, { Component } from 'react';
import GoogleMap from './google_map';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { lat: -34.397, lng: 150.644 };
  }

  render() {
    return (
      <div className="wrapper">
        <div>
          <h3>Map Me!</h3>
          <button onClick={() => this.setState({ lat: 45.562020, lng: -122.636817 })} className="btn btn-info">
            Home
          </button>
        </div>
        <GoogleMap lat={this.state.lat} lng={this.state.lng}/>
      </div>
    );
  }
}
