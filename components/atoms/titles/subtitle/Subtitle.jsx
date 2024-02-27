import { Text, StyleSheet } from "react-native";
import React from "react";

export default function Subtitle({ title }) {
  return <Text style={styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: "Bold",
    color: "yellow",
  },
});
