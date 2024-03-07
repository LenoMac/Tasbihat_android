import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Times from "../../atoms/prayer-times/Times";
import Dua from "../../atoms/ramadan-dua";
import TableComponents from "../../atoms/table/Table";
export default function RamadanTimesAndDua() {
  return (
    <View style={styles.main}>
      <Times />
      <Dua/>
      <TableComponents/>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: 30,
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
});
