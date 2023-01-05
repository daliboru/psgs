import { useQuery } from "@tanstack/react-query";
import {
  getCurrentPositionAsync,
  PermissionStatus,
  requestForegroundPermissionsAsync,
} from "expo-location";

async function getCurrentLocation() {
  try {
    const { status } = await requestForegroundPermissionsAsync();
    if (status !== PermissionStatus.GRANTED) {
      throw new Error("Permission to access location was denied");
    }
    const location = await getCurrentPositionAsync({});
    return { location, status: PermissionStatus.GRANTED };
  } catch (error) {
    console.log(error);
  }
}

export default function useCurrentLocation() {
  const { isLoading, data } = useQuery(
    ["currentLocation"],
    getCurrentLocation,
    {
      retry: false,
    }
  );

  return {
    isLoading,
    location: {
      latitude: data?.location.coords.latitude || NaN,
      longitude: data?.location.coords.longitude || NaN,
    },
    status: data?.status,
  };
}
