import axios from "axios";

const directionsApi = axios.create({
  baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
  params: {
    alternatives: false,
    geometries: "geojson",
    overview: "simplified",
    steps: false,
    access_token:
      "pk.eyJ1IjoiamVycnlhMSIsImEiOiJja3N6NjM1eDgxOGNrMnZxa21sMXFwbGIwIn0.cowqtTgMzJHZe3urRdX9qg",
  },
});

export default directionsApi;
