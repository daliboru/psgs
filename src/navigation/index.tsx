import { NavigationContainer } from "@react-navigation/native";
import LinkingConfiguration from "./LinkingConfiguration";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { LoginScreen, SignUpScreen } from "../feature/Auth";
import SignedInNavigation from "../feature/ChooseFood/navigation";
import useSession from "../hooks/useSession";
import { ErrorScreen, NotFoundScreen } from "../screens";
import ErrorBoundary from "./error-boundary";
import { RootScreens, RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  const session = useSession();

  return (
    <ErrorBoundary>
      <NavigationContainer linking={LinkingConfiguration}>
        <Stack.Navigator>
          {session && session.user ? (
            <Stack.Screen
              key={session.user.id}
              name={RootScreens.SIGNED_IN}
              component={SignedInNavigation}
              options={{
                headerShown: false,
              }}
            />
          ) : (
            <Stack.Group>
              <Stack.Screen
                name={RootScreens.SIGN_UP}
                component={SignUpScreen}
                options={{
                  headerTitle: "Sign Up",
                }}
              />
              <Stack.Screen
                name={RootScreens.LOGIN}
                component={LoginScreen}
                options={{
                  headerTitle: "Login",
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
