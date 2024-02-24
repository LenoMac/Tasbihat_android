import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import JavshanItem from "../JavshanItem";

export const Bab = React.memo(({ route }) => {
  const { page } = route.params;
  const babItem = JavshanItem.find((item) => item.id === page);
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.card}>
            <Text style={styles.title}>{page}-БАБ</Text>
            <Text style={styles.subtitle}>{babItem.firstText}</Text>
            <Text style={styles.text}>{babItem.javshantext}</Text>
          </View>
        </ScrollView>
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
  card: {
    width: "100%",
    marginTop: 20,
  },
  title: {
    fontFamily: "Bold",
    fontSize: 18,
    color: 'yellow'
    // textAlign: "center",
  },
  subtitle: {
    fontFamily: "Bold",
    fontSize: 18,
    textAlign: "center",
  },
  text: {
    fontSize: 18,
    lineHeight: 30,
    fontFamily: 'Medium',
  },
});
