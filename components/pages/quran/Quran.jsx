import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Quran() {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text>Quran</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: "100%",
    backgroundColor: "#2E0A30",
    height: "100%",
    paddingTop: 35,
  },
  container: {
    paddingHorizontal: 12,
  },
});
