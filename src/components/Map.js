import React, { PropTypes } from 'react'
import { GoogleMap, Marker } from "react-google-maps";
import { default as MarkerClusterer } from "react-google-maps/lib/addons/MarkerClusterer";
import UserList from './UserList';

const CHICAGO = {
  lat: 41.8781,
  lng: -87.6298,
}

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [
        {
          latitude: 41.856650,
          longitude: -87.664865,
        },
        {
          latitude: 41.977772,
          longitude: -87.667254
        },
        {
          latitude: 41.882591,
          longitude: -87.637407
        },
      ]
    }
    this.markers = ::this.markers;
  }
  componentDidMount() {
    fetch('//compost-crossing.herokuapp.com/api/users')
      .then(response => response.json())
      .then(markers => this.setState({markers: markers.slice(0,150)}))
  }
  markers() {
    return this.state.markers.map((marker, i) => (
      <Marker
        position={{ lat: marker.longitude, lng: marker.latitude }}
        key={i}
      />
    ))
  }
  render () {
    return (
      <div id="homepage-container">
        <GoogleMap
          containerProps={{
            ...this.props,
            className: 'map-container'
          }}
          defaultZoom={10}
          defaultCenter={CHICAGO} >
          <MarkerClusterer
            averageCenter
            enableRetinaIcons
            gridSize={60} >
            {this.markers()}
         </MarkerClusterer>
        </GoogleMap>
        <UserList users={this.state.markers} />
      </div>
    );
  }
}

export default Map;
