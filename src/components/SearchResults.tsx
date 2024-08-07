import { useContext, useState } from "react";
// contexts
import { MapContext, PlacesContext } from "../context";
// components
import { LoadingPlaces } from "./";
// interfaces
import { Feature } from "../interfaces/places";

// ----------------------------------------------------------------------

export const SearchResults = () => {
  const { places, isLoadingPlaces, userLocation } = useContext(PlacesContext);
  const { map, getRoutesBetweenPlaces } = useContext(MapContext);

  const [activeId, setActiveId] = useState("");

  const onPlaceClick = (place: Feature) => {
    setActiveId(place.id);
    const [longitude, latitude] = place.geometry.coordinates;

    map?.flyTo({
      zoom: 15,
      center: [longitude, latitude],
    });
  };

  const getRoute = (place: Feature) => {
    if (!userLocation) return;

    const [longitude, latitude] = place.geometry.coordinates;
    getRoutesBetweenPlaces(userLocation, [longitude, latitude]);
  };

  if (isLoadingPlaces) {
    return <LoadingPlaces />;
  }

  if (places.length === 0) {
    return <></>;
  }

  return (
    <ul className="list-group mt-3">
      {places.map((_place) => (
        <li
          key={_place.id}
          className={`list-group-item list-group-item-action pointer ${
            activeId === _place.id ? "active" : ""
          }`}
          onClick={() => onPlaceClick(_place)}
        >
          <h6>{_place.properties.name}</h6>
          <p style={{ fontSize: "12px" }}>{_place.properties.full_address}</p>
          <button
            onClick={() => getRoute(_place)}
            className={`btn btn-sm ${
              activeId === _place.id
                ? "btn-outline-light"
                : "btn-outline-primary"
            }`}
          >
            Directions
          </button>
        </li>
      ))}
    </ul>
  );
};
