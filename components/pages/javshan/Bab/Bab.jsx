import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import JavshanItem from "../JavshanItem";

export const Bab = React.memo(({ route }) => {
  const { page } = route.params;
  const babItem = JavshanItem.find((item) => item.id === page);
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text>{babItem.firstText}</Text>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    backgroundColor: "#320548",
  },
  container: {
    paddingHorizontal: 12,
  },
  card: {},
});
