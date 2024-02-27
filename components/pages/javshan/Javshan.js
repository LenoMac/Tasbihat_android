import React, { useRef } from "react";
import { View, FlatList, Text, Dimensions, StyleSheet } from "react-native";
import JavshanItem from "./JavshanItem";
import Card from "../../atoms/card/javshan-card/Card";
// import { useLanguageState } from "../../../states/language/useLanguageState";

export const Javshan = () => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Card />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    backgroundColor: "#320548",
  },
  container: {
    paddingHorizontal: 12,
    paddingVertical: 20,
    paddingBottom: 100,
  },
});
