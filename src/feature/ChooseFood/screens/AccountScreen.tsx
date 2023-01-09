import { View, StyleSheet } from "react-native";
import React from "react";
import useCurrentUser from "../../../hooks/useCurrentUser";
import { Text } from "@rneui/themed";
import { ViewContainer } from "../../../components";

type Props = {};

const AccountScreen = (props: Props) => {
  const { user } = useCurrentUser();

  return (
    <>
      {user && (
        <ViewContainer>
          <View style={styles.container}>
            <Text>Full Name: {user.user_metadata.full_name}</Text>
          </View>
        </ViewContainer>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
});

export default AccountScreen;
