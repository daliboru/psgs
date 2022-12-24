import { NavigationContainer } from "@react-navigation/native";
import LinkingConfiguration from "./LinkingConfiguration";

import React from "react";
import SignedInNavigation from "../feature/ChooseFood/navigation";
import useCurrentUser from "../hooks/useCurrentUser";
import ErrorBoundary from "./error-boundary";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootScreens, RootStackParamList } from "./types";
import { SignUpScreen } from "../feature/Auth/screens";
import { ErrorScreen, NotFoundScreen } from "../screens";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  const user = useCurrentUser();

  return (
    <ErrorBoundary>
      <NavigationContainer linking={LinkingConfiguration}>
        <Stack.Navigator>
          {user ? (
            <SignedInNavigation />
          ) : (
            <Stack.Group>
              <Stack.Screen
                name={RootScreens.REGISTER}
                component={SignUpScreen}
                options={{
                  headerTitle: "Sign Up",
                }}
              />
            </Stack.Group>
          )}
          {/* other navigators below */}
          <Stack.Screen name={RootScreens.ERROR} component={ErrorScreen} />
          <Stack.Screen
            name={RootScreens.NOT_FOUND}
            component={NotFoundScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ErrorBoundary>
  );
}
