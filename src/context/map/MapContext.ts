import { createContext } from "react";
import { Map } from "mapbox-gl";

// ----------------------------------------------------------------------

export interface MapContextProps {
  isMapReady: boolean;
  map?: Map;
  setMap: (map: Map) => void;
  getRoutesBetweenPlaces: (
    start: [number, number],
    end: [number, number]
  ) => Promise<void>;
}

export const MapContext = createContext({} as MapContextProps);
