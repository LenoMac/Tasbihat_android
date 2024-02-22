import { View, Image, Pressable } from "react-native";
import React from "react";
import home from "../../../../assets/img/Home.png";
import useNavigation from "@react-navigation/native";

function GoHome() {
  const navigation = useNavigation();
  const onPress = () => navigation.navigate("Menu");
  return (
    <View>
      <Pressable onPress={onPress}>
        <Image
          style={{ width: 35, height: 35, objectFit: "scale-down" }}
          source={home}
        />
      </Pressable>
    </View>
  );
}

export default GoHome