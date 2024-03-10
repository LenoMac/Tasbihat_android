import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function SurButton({ number, name, title }) {
  const navigation = useNavigation();
  const onPress = (name) => navigation.navigate(name);

  return (
    <Pressable onPress={() => onPress(name)}>
      <View style={styles.button}>
        <View style={styles.button_row}>
          <Text style={styles.number}>{number + "."}</Text>
          <Text style={styles.title}>{title}</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  button_row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  number: {
    width: 25,
    fontSize: 18,
    fontFamily: "Medium",
    color: "white",
  },
  title: {
    fontSize: 18,
    fontFamily: "Medium",
    color: "white",
  },
});
