import { View, Text } from "react-native";
import { gStyle } from "./Style/Style";

export const OnboardingItem = ({ item }) => {
  return (
    <View style={gStyle.javshanCard}>
      <View style={gStyle.javshanCard__card}>
        <Text style={[gStyle.javshanTitle, {fontFamily: 'Montserrat Semibold'}]}>{item.firstText}</Text>
        <Text style={[gStyle.javshanText, {fontFamily: 'Montserrat Medium'}]}>{item.javshantext}</Text>
      </View>
    </View>
  );
};
