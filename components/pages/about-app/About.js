import { View, Text, Image } from "react-native";
import React from "react";


export default function About() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        backgroundColor: '#320548'
      }}
    >
      <Text style={{ alignSelf: "center", color: '#fff' }}>О приложений</Text>
    </View>
  );
}