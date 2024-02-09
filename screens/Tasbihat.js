import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { gStyle } from "../Style/Style";
import { useNavigation } from "@react-navigation/native";
import Header from "./Header";
const CustomButton = ({ onPress, title, name }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(name)}
      style={gStyle.buttonContainer}
    >
      <View style={gStyle.button}>
        <Text
          style={[gStyle.buttonText, { fontFamily: "Montserrat Semibold" }]}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export const Tasbihat = () => {
  const navigation = useNavigation();
  const listOfTasbih = [
    { title: "Фаджр", name: "Fajr" },
    { title: "Зухр", name: "Zuhr" },
    { title: "Аср", name: "Acr" },
    { title: "Магриб", name: "Magrib" },
    { title: "Иша", name: "Isha" },
  ];

  const onPress = (name) => {
    navigation.navigate(name);
  };
  return (
    <View style={gStyle.tasbih}>
      <View style={gStyle.header}>
        <Header title="ТАСБИХАТ" />
      </View>
      <View style={gStyle.container}>
        <View style={gStyle.menu}>
          <View style={gStyle.list}>
            {listOfTasbih.map((item, index) => {
              return (
                <CustomButton
                  title={item.title}
                  key={index}
                  name={item.name}
                  onPress={onPress}
                />
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};
