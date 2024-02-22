import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

export default function Secondary({ title, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    textAlign: "center",
    alignItems: "center",
  },
  title: {
    color: "#F2BB4A",
    fontWeight: "500",
    fontSize: 16,
    fontFamily: "Bold",
  },
});
