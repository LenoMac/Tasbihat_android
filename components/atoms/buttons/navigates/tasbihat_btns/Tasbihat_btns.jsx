import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import React from "react";

export default function TasbihatBtns({ onPress, title, img }) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.button}>
        <View style={styles.button_row}>
          <View style={styles.button_row_in}>
            <Image style={styles.img} source={img} />
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#5D2559",
    width: "100%",
    alignItems: "flex-start",
    paddingVertical: 16,
    borderRadius: 15,
    height: 90,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center'
  },
  button_row: {
    display: "flex",
    width: "40%",
    justifyContent: "flex-start",
  },
  button_row_in: {
    display: "flex",
    flexDirection: "row",
    gap: 28,
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Bold",
  },
  img: {
    objectFit: "scale-down",
    width: 30,
    height: 30,
  },
});
