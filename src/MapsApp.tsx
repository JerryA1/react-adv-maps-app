// contexts
import { MapProvider, PlacesProvider } from "./context";
// screens
import { HomeScreen } from "./screens";
//
import "./styles.css";

// ----------------------------------------------------------------------

export const MapsApp = () => {
  return (
    <PlacesProvider>
      <MapProvider>
        <HomeScreen />
      </MapProvider>
    </PlacesProvider>
  );
};
