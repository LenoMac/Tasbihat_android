import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Title({ title }) {
  return <Text style={styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    color: "yellow",
  },
});
