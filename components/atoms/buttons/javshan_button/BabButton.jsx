import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function BabButton({ num, number, setNumber }) {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate("Bab", {page: num});
    setNumber(num);
  };

  return (
    <Pressable onPress={handleClick}>
      <View style={styles.button}>
        <Text style={styles.text}>{num}.Баб</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#5D2559",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    width: 180,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontFamily: "Bold",
  },
});
