import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import RamadanImg from "../../../assets/backgrouds/ramadan_img.png";
import Subtitle from "../../atoms/titles/subtitle/Subtitle";
import RamadanTimesAndDua from "../../molecules/prayer_ramadan_times/Index";

export default function Home() {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        {/* Background */}
        <Image style={styles.backgroundImg} source={RamadanImg} />
        <View>
          <Subtitle title="Рамадан 2024" />
          <Text style={styles.description}>
            Понедельник, 11 марта {"\n"}Бишкек, Кыргызстан{" "}
          </Text>
        </View>
        <RamadanTimesAndDua/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: "100%",
    backgroundColor: "#2E0A30",
    height: "100%",
    paddingTop: 60,
  },
  container: {
    paddingHorizontal: 12,
  },
  backgroundImg: {
    position: "absolute",
    right: 0,
    top: -60,
  },
  description: {
    color: "white",
    fontFamily: "Bold",
    fontSize: 14,
    marginTop: 5,
  },
});
