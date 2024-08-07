import React from "react";
import ReactDOM from "react-dom/client";
import mapboxgl from "mapbox-gl";
// pages
import { MapsApp } from "./MapsApp";
//
mapboxgl.accessToken =
  "pk.eyJ1IjoiamVycnlhMSIsImEiOiJja3N6NjM1eDgxOGNrMnZxa21sMXFwbGIwIn0.cowqtTgMzJHZe3urRdX9qg";

// ----------------------------------------------------------------------

if (!navigator.geolocation) {
  alert("Geolocation is not supported by your browser");
  throw new Error("Geolocation is not supported by your browser");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
