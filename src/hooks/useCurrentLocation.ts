import { useQuery } from "@tanstack/react-query";
import {
  getCurrentPositionAsync,
  PermissionStatus,
  requestForegroundPermissionsAsync,
} from "expo-location";

async function getCurrentLocation() {
  const { status } = await requestForegroundPermissionsAsync();
  if (status === PermissionStatus.GRANTED) {
    const location = await getCurrentPositionAsync({});
    return { location, status };
  }

  return { location: null, status };
}

export default function useCurrentLocation() {
  const { isLoading, data } = useQuery(["currentLocation"], getCurrentLocation);

  const needsSettingsAction = data?.status !== PermissionStatus.GRANTED;

  return {
    isLoading,
    location: {
      latitude: data?.location?.coords?.latitude || NaN,
      longitude: data?.location?.coords?.longitude || NaN,
    },
    needsSettingsAction,
  };
}
