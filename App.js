import { View, StatusBar, ActivityIndicator, StyleSheet } from "react-native";
import Navigate from "./Navigate";

export default function App() {
  return (
    <View style={styles.App}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <Navigate />
    </View>
  );
}

const styles = StyleSheet.create({
  App: {
    width: "100%",
    height: "100%",
    backgroundColor: "#431247",
  },
  container: {
    padding: 12,
  }
});
