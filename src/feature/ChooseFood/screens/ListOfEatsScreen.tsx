import { GOOGLE_MAPS_KEY } from "@env";
import { Card } from "@rneui/themed";
import React from "react";
import { Linking, ScrollView, Text } from "react-native";
import { Button, ViewContainer } from "../../../components";
import useCurrentLocation from "../../../hooks/useCurrentLocation";
import useFoodOptions from "../hooks/useFoodOptions";
import {
  ChooseFoodScreens,
  ChooseFoodStackScreenProps,
} from "../navigation/chooseFood/types";

type Props = ChooseFoodStackScreenProps<ChooseFoodScreens.LIST_OF_EATS>;

export default function ListOfEatsScreen({ route }: Props) {
  const { latitude, longitude, foodType } = route.params;
  const { location } = useCurrentLocation();
  const url = getUrl(latitude, longitude, foodType);
  const { data, isLoading, isError } = useFoodOptions(url, location);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error</Text>;
  }

  if (data && data.status === "ZERO_RESULTS") {
    return <Text>No results found</Text>;
  }

  return (
    <ScrollView>
      <ViewContainer>
        {data &&
          data.results.map((result) => (
            <Card key={result.place_id}>
              <Card.Title h4>{result.name}</Card.Title>
              <Card.Divider />
              <Card.Title>{result.duration}</Card.Title>
              <Button
                title="Odvedi me"
                containerStyle={{ marginBottom: 10 }}
                onPress={() => takeMeToFood(result.name || "")}
              />
            </Card>
          ))}
      </ViewContainer>
    </ScrollView>
  );
}

const nearBySearchUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${GOOGLE_MAPS_KEY}&rankby=distance&opennow`;

const getUrl = (latitude: number, longitude: number, foodType?: string) => {
  const location = `${latitude},${longitude}`;
  const url = new URL(nearBySearchUrl);
  url.searchParams.append("location", location);
  url.searchParams.append("keyword", foodType ? foodType : "food");
  return url.toString();
};

const takeMeToFood = async (location: string) => {
  const url = `https://www.google.com/maps/dir/?api=1&destination=${location}`;
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    Linking.openURL(url);
  } else {
    const appleUrl = `http://maps.apple.com/?daddr=${location}`;
    const appleSupported = await Linking.canOpenURL(appleUrl);

    if (appleSupported) {
      Linking.openURL(appleUrl);
    } else {
      console.error("Can't open maps app");
    }
  }
};
