import { BASE_URL } from '../constants';

import React, { PropTypes } from 'react'
import {connect} from 'react-redux';
import { GoogleMap, Marker } from "react-google-maps";
import { default as MarkerClusterer } from "react-google-maps/lib/addons/MarkerClusterer";
import UserList from './UserList';
import {getIcon} from '../utils/Utils';
import {fetchMatches} from '../redux/modules/Matches';

const Chicago = {
  lat: 41.8781,
  lng: -87.6298,
}

class Map extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   markers: [
    //     {
    //       latitude: 41.856650,
    //       longitude: -87.664865,
    //     },
    //     {
    //       latitude: 41.977772,
    //       longitude: -87.667254
    //     },
    //     {
    //       latitude: 41.882591,
    //       longitude: -87.637407
    //     },
    //   ]
    // }
    this.markers = ::this.markers;
  }
  componentDidMount() {
    this.props.dispatch(fetchMatches(this.props.token || null));
  }
  markers() {
    if (this.props.matches.length == 0) return;

    return <MarkerClusterer
      averageCenter
      enableRetinaIcons
      gridSize={60} >
      {
        this.props.matches.length > 0 ?
        this.props.matches.map(match => <Marker
        icon={getIcon(match.participant_type)}
        position={{ lat: match.latitude, lng: match.longitude,}}
        key={match.email}/>) : ''}
   </MarkerClusterer>
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
          defaultCenter={Chicago} >
        </GoogleMap>
        <UserList users={this.props.matches} />
      </div>
    );
  }
}

const stateToProps = state => {
  return {
    token: state.AuthenticationReducer.token,
    matches: state.MatchesReducer
  }
}

export default connect(stateToProps)(Map);
