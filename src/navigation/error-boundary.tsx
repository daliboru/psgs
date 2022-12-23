import React from "react";
import { View, Text, SafeAreaView } from "react-native";

type State = {
  hasError: boolean;
};

export default class ErrorBoundary extends React.Component<any, State> {
  state = { hasError: false };

  static getDerivedStateFromError(/*error: Error*/) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <SafeAreaView style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Something went wrong.</Text>
          </View>
        </SafeAreaView>
      );
    }

    return this.props.children;
  }
}
