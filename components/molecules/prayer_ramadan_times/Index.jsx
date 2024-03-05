import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Times from "../../atoms/prayer-times/Times";

export default function RamadanTimesAndDua() {
  return (
    <View style={styles.main}>
      <Times />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: 30,
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
});
