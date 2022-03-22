import React, { useState } from "react";
import Map, { Marker } from "react-map-gl";
import Head from "next/head";

function Mapp() {
  const [viewstate, setViewstate] = useState({
    width: "100vw",
    height: "100vh",
    longitude: -117.064967,
    latitude: 32.359337,
    zoom: 12,
  });

  return (
    <Map
      {...viewstate}
      mapStyle="mapbox://styles/zayne/ckzdejant000514o7hlq87x99"
      mapboxAccessToken={process.env.mapbox_key}
      onMove={(evt) => setViewstate(evt.viewState)}
    >
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <Marker
        longitude={-117.064967}
        latitude={32.359337}
        anchor="center"
      ></Marker>
    </Map>
  );
}

export default Mapp;
