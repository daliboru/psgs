import { createTheme, lightColors, ThemeProvider } from "@rneui/themed";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-url-polyfill/auto";
import Navigation from "./src/navigation";

const theme = createTheme({
  lightColors: {
    ...Platform.select({
      default: lightColors.platform.android,
      ios: lightColors.platform.ios,
    }),
  },
  // darkColors: {
  //   ...Platform.select({
  //     default: darkColors.platform.android,
  //     ios: darkColors.platform.ios,
  //   }),
  // },
});

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <StatusBar />
          <Navigation />
        </ThemeProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
