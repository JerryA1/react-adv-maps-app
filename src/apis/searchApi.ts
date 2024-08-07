import axios from "axios";

const searchApi = axios.create({
  baseURL: "https://api.mapbox.com/search/geocode/v6",
  params: {
    language: "es",
    access_token:
      "pk.eyJ1IjoiamVycnlhMSIsImEiOiJja3N6NjM1eDgxOGNrMnZxa21sMXFwbGIwIn0.cowqtTgMzJHZe3urRdX9qg",
  },
});

export default searchApi;
