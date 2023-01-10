import { Avatar, Text } from "@rneui/themed";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ViewContainer } from "../../../components";
import useCurrentUser from "../../../hooks/useCurrentUser";

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
              containerStyle={{
                backgroundColor: `#${Math.floor(
                  Math.random() * 16777215
                ).toString(16)}`,
              }}
              size="large"
            />
            <View style={{ marginTop: 10 }}>
              <Text h4>{user.user_metadata.full_name}</Text>
            </View>
          </View>
        </ViewContainer>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});

export default AccountScreen;
