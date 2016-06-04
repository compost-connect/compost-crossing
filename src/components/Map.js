import React, { PropTypes } from 'react'
import { GoogleMap, Marker } from "react-google-maps";
import { default as MarkerClusterer } from "react-google-maps/lib/addons/MarkerClusterer";

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
  }
  render () {
    return (
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
          {this.state.markers.map((marker, i) => (
            <Marker
              position={{ lat: marker.latitude, lng: marker.longitude }}
              key={i}
            />
          ))}
       </MarkerClusterer>
      </GoogleMap>
    );
  }
}

export default Map;
