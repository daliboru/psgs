import { GOOGLE_MAPS_KEY } from "@env";
import { useQuery } from "@tanstack/react-query";

const distanceUrl = "https://maps.googleapis.com/maps/api/distancematrix/json?";

export default function useFoodOptions(
  url: string,
  location: { latitude: number; longitude: number }
) {
  const { isLoading, data, isError } = useQuery<NearbySearchResponse>(
    ["foodOptions", url],
    async () => await getFoodOptions(url, location),
    {
      staleTime: Infinity,
    }
  );

  return { isLoading, data, isError };
}

async function getFoodOptions(
  url: string,
  userLocation: { latitude: number; longitude: number }
) {
  const response = await fetch(url);
  const data: NearbySearchResponse = await response.json();
  const dataWithDistance = await addDistanceToFoodOptions(
    data.results,
    userLocation
  );
  data.results = dataWithDistance;
  return data;
}

async function addDistanceToFoodOptions(
  results: Array<Result>,
  userLocation: {
    latitude: number;
    longitude: number;
  }
) {
  const resultsWithDistance = await Promise.all(
    results.map(async (result) => {
      if (result.geometry?.location) {
        const destinationLat = result.geometry.location.lat;
        const destinationLng = result.geometry.location.lng;
        const distanceUrlWithParams = `${distanceUrl}origins=${userLocation.latitude},${userLocation.longitude}&destinations=${destinationLat},${destinationLng}&mode=walking&key=${GOOGLE_MAPS_KEY}`;
        const distance = await calculateWalkingDistance(distanceUrlWithParams);
        result.distance = distance.rows[0].elements[0].distance.text;
        result.duration = distance.rows[0].elements[0].duration.text;
      }
      return result;
    })
  );
  return resultsWithDistance;
}

async function calculateWalkingDistance(url: string) {
  const response = await fetch(url);
  const data: google.maps.DistanceMatrixResponse = await response.json();
  return data;
}

type Result = {
  distance?: string;
  duration?: string;
} & google.maps.places.PlaceResult;

type NearbySearchResponse = {
  html_attributions: Array<string>;
  next_page_token?: string;
  results: Array<Result>;
  status: PlacesSearchStatus;
  error_message?: string;
  info_messages?: Array<string>;
};

type PlacesSearchStatus =
  | "OK"
  | "ZERO_RESULTS"
  | "OVER_QUERY_LIMIT"
  | "REQUEST_DENIED"
  | "INVALID_REQUEST"
  | "UNKNOWN_ERROR";
