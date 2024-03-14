import { Text, StyleSheet } from "react-native";
import React from "react";

export default function Subtitle({ title }) {
  return <Text style={styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "Bold",
    color: "#F2BB4A",
  },
});
