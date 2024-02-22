import { View, StatusBar, ActivityIndicator, StyleSheet } from "react-native";
import Navigate from "./Navigate";
import { useFonts } from "expo-font";

export default function App() {
  const [fonts] = useFonts({
    Medium: require("./assets/fonts/Montserrat-Medium.ttf"),
    Bold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
  });

  if (!fonts)
    return (
      <View style={styles.loadingPage}>
        <ActivityIndicator size={40}/>
      </View>
    );

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
  },
  loadingPage: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
