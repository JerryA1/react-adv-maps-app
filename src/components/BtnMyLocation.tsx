import { useContext } from "react";
// context
import { MapContext, PlacesContext } from "../context";

// ----------------------------------------------------------------------

export const BtnMyLocation = () => {
  const { map, isMapReady } = useContext(MapContext);
  const { userLocation } = useContext(PlacesContext);

  const handleClick = () => {
    if (!isMapReady) throw new Error("Map is not ready");
    if (!userLocation) throw new Error("User location is not ready");

    map?.flyTo({
      zoom: 14,
      center: userLocation,
    });
  };

  return (
    <button
      className="btn btn-primary"
      onClick={handleClick}
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 999,
      }}
    >
      My location
    </button>
  );
};
