import React from "react";
import Map from "react-map-gl";

function Mapp() {
  return (
    <Map

    initialViewState={{
      longitude: -117.055626,
      latitude: 32.3648126,
      zoom: 14
      
    }}
    style={{width: '100%', height: '100%'}}
    mapStyle="mapbox://styles/zayne/ckzdejant000514o7hlq87x99"
    mapboxAccessToken="pk.eyJ1IjoiemF5bmUiLCJhIjoiY2t6ZGVlN3psMnhhNTJvbXpsMWNzeWd4NCJ9.IAVrOei3t_0Kzs21XA4Gxw"
    />
  )
}

export default Mapp;
