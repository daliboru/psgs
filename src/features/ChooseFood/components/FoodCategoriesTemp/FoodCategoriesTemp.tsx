import { Dialog, Divider, Text } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { Linking, ScrollView, View } from "react-native";
import { Button, Loader } from "../../../../components";
import useCurrentLocation from "../../../../hooks/useCurrentLocation";
import { ChooseFoodScreens } from "../../navigation/chooseFood/types";

type Props = {
  children: React.ReactNode;
  navigation: any;
};

const FoodCategoriesTemp = ({ navigation, children }: Props) => {
  const [isDialog, setIsDialog] = useState(false);

  const {
    location: { latitude, longitude },
    needsSettingsAction,
    isLoading,
  } = useCurrentLocation();

  useEffect(() => {
    if (needsSettingsAction) {
      setIsDialog(true);
    }
    setIsDialog(false);
  }, [needsSettingsAction]);

  if (isLoading) {
    return <Loader />;
  }

  const onChooseFood = (foodType?: string) => {
    navigation.navigate(ChooseFoodScreens.LIST_OF_EATS, {
      latitude,
      longitude,
      foodType,
    });
  };

  return (
    <ScrollView>
      <View style={{ marginHorizontal: 5 }}>
        <Dialog isVisible={isDialog}>
          <Dialog.Title
            titleStyle={{ fontSize: 24 }}
            title="Dozvoli geolokaciju"
          />
          <Text h4>
            Moramo da znamo gde si da bismo znali kako da te dovedemo do tvoje
            hrane...
          </Text>
          <Dialog.Button
            titleStyle={{ fontSize: 24 }}
            title="Dozvoli"
            onPress={() => {
              Linking.openSettings();
              setIsDialog(false);
            }}
          />
        </Dialog>
        <Button
          onPress={() => onChooseFood()}
          title="Šta god, samo da je jestivo"
          containerStyle={{
            marginVertical: 10,
            marginHorizontal: 5,
          }}
        />
        <Divider style={{ marginBottom: 5 }} />
        {children}
      </View>
    </ScrollView>
  );
};

export default FoodCategoriesTemp;
