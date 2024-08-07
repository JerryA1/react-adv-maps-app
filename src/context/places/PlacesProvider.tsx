import { useEffect, useReducer } from "react";
// contexts
import { PlacesContext } from "./PlacesContext";
// reducers
import { PlacesReducer } from "./PlacesReducer";
// helpers
import { getUserLocation } from "../../helpers";
// apis
import { searchApi } from "../../apis";
// interfaces
import { Feature, PlacesResponse } from "../../interfaces/places";

// ----------------------------------------------------------------------

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
  isLoadingPlaces: boolean;
  places: Feature[];
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
  isLoadingPlaces: false,
  places: [],
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

// ----------------------------------------------------------------------

export const PlacesProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(PlacesReducer, INITIAL_STATE);

  useEffect(() => {
    getUserLocation().then((lngLat) =>
      dispatch({ type: "SET_USER_LOCATION", payload: lngLat })
    );
  }, []);

  const searchPlacesByTerm = async (query: string): Promise<Feature[]> => {
    if (query.length === 0) {
      dispatch({ type: "SET_PLACES", payload: [] });
      return [];
    }
    if (!state.userLocation) throw new Error("User location not found");

    dispatch({ type: "SET_LOADING_PLACES" });

    const resp = await searchApi.get<PlacesResponse>("forward", {
      params: {
        q: query,
        proximity: state.userLocation.join(","),
      },
    });

    dispatch({ type: "SET_PLACES", payload: resp.data.features });
    return resp.data.features;
  };

  return (
    <PlacesContext.Provider
      value={{
        ...state,
        searchPlacesByTerm,
      }}
    >
      {children}
    </PlacesContext.Provider>
  );
};
