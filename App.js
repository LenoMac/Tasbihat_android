import { View, StatusBar, ActivityIndicator, StyleSheet } from "react-native";
import Navigate from "./Navigate";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Montserrat Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat Semibold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
  });

  return (
    <View style={styles.App}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      {
        !fontsLoaded && <ActivityIndicator />
        // <Navigate />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  App: {
    width: "100%",
    height: "100%",
    backgroundColor: '#431247'
  },
});