import { useQuery } from "@tanstack/react-query";
import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";
import { useEffect } from "react";

async function getCurrentLocation() {
  try {
    const { status } = await requestForegroundPermissionsAsync();
    if (status !== "granted") {
      throw new Error("Location permission not granted");
    }
    const location = await getCurrentPositionAsync({});
    return location;
  } catch (error) {
    console.log(error);
  }
}

export default function useCurrentLocation() {
  const { isLoading, data, refetch, isError } = useQuery(
    ["currentLocation"],
    getCurrentLocation,
    {
      retry: false,
    }
  );

  useEffect(() => {
    refetch();
  }, []);

  return {
    isLoading,
    location: {
      latitude: data?.coords.latitude || 0,
      longitude: data?.coords.longitude || 0,
    },
    isError,
  };
}
