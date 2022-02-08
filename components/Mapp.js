import React from "react";
import Map from "react-map-gl";

function Mapp() {
  return (
    <Map

    initialViewState={{
      longitude: -117.055626,
      latitude: 32.3648126,
      zoom: 13
      
    }}
    style={{width: '100%', height: '100%'}}
    mapStyle="mapbox://styles/zayne/ckzdejant000514o7hlq87x99"
    mapboxAccessToken={process.env.mapbox_key}
    />
  )
}

export default Mapp;
