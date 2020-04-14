import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent =  withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 25.4358, lng:81.8463}}
  >
    {props.isMarkerShown && <Marker position={{ lat:25.4358, lng: 81.8463 }} />}
  </GoogleMap>
))

export default MyMapComponent;

