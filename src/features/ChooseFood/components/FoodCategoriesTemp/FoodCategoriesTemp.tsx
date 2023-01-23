import { Dialog, Text } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { Linking, ScrollView, View } from "react-native";
import { Loader } from "../../../../components";
import useCurrentLocation from "../../../../hooks/useCurrentLocation";

type Props = {
  children: React.ReactNode;
  FABComponent?: React.ReactNode;
};

const FoodCategoriesTemp = ({ children, FABComponent }: Props) => {
  const [isDialog, setIsDialog] = useState(false);

  const { needsSettingsAction, isLoading } = useCurrentLocation();

  useEffect(() => {
    if (needsSettingsAction) {
      setIsDialog(true);
    }
    setIsDialog(false);
  }, [needsSettingsAction]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <View style={{ flex: 1, position: "relative" }}>
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
          {children}
        </View>
      </ScrollView>
      {FABComponent}
    </View>
  );
};

export default FoodCategoriesTemp;
