import { View, StyleSheet } from "react-native";
import React from "react";
import useCurrentUser from "../../../hooks/useCurrentUser";
import { Avatar, ListItem, Text } from "@rneui/themed";
import { Icon, ViewContainer } from "../../../components";

type Props = {};

const AccountScreen = (props: Props) => {
  const { user } = useCurrentUser();

  return (
    <>
      {user && (
        <ViewContainer>
          <View style={styles.container}>
            <Avatar
              rounded
              title={[...user.user_metadata.full_name][0]}
              containerStyle={{ backgroundColor: "grey" }}
            />
            <Text>{user.user_metadata.full_name}</Text>
          </View>
        </ViewContainer>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default AccountScreen;
