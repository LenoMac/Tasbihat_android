import React, { useState } from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { gStyle } from "../Style/Style";
import { Dimensions } from "react-native";

export const CustomButton = ({ onPress, title, img }) => {
  return (
    <TouchableOpacity onPress={onPress} style={gStyle.buttonContainer}>
      <View style={gStyle.button}>
        <View style={gStyle.buttonList}>
          <Image style={gStyle.img} source={img} />
          <Text
            style={[gStyle.buttonText,
               { fontFamily: "Montserrat Semibold" }
              ]}
          >
            {title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
