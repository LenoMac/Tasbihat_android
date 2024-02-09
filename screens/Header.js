import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import goBack from "../img/Back.png";
import { HomeBack } from "./HomeBack";
import { gStyle } from "../Style/Style";
import { useNavigation } from "@react-navigation/native";

export default function Header({ title }) {
  const navigation = useNavigation();

  return (
    <View style={gStyle.header_row_flex}>
      <Pressable onPress={() => navigation.goBack()}>
        <Image
          style={{ width: 40, height: 25, objectFit: "scale-down" }}
          source={goBack}
        />
      </Pressable>
      <Text style={[gStyle.headerText, { fontFamily: "Montserrat Semibold" }]}>
        {title}
      </Text>
      <HomeBack />
    </View>
  );
}
