import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import React from "react";
import Clock from "react-live-clock";
import background from "../../../assets/backgrouds/ramadan.jpg";
import suhur from "../../../assets/icons/suhur.png";
import iftar from "../../../assets/icons/iftar.png";

export default function Dua() {
  return (
    <View style={styles.block}>
      <ImageBackground source={background} resizeMode="cover">
        <View style={styles.blurPage}>
          <View style={styles.timeLeft}>
            <Text style={styles.title}>До ифтара осталось:</Text>
            <Clock
              style={styles.time}
              element={Text}
              format={"HH:mm:ss"}
              ticking={true}
            />
            <Text style={styles.location}>Бишкек, Кыргызстан</Text>
          </View>
          <View style={styles.duas}>
            <View style={styles.dua}>
              <Text style={styles.duaTitle}>Сухур</Text>
              <Text style={styles.duaTime}>05:22</Text>
              <Image style={{ width: 80, height: 80 }} source={suhur} />
            </View>
            <View style={styles.dua}>
              <Text>Сухур</Text>
              <Text>05:22</Text>
              <Image style={{ width: 80, height: 80 }} source={iftar} />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    width: "100%",
    height: 300,
    backgroundColor: "#5D2559",
    borderRadius: 20,
    overflow: "hidden",
  },
  blurPage: {
    width: "100%",
    height: "100%",
    padding: 12,
    backgroundColor: "rgba(93, 37, 89, .9)",
    flexDirection: "column",
    gap: 16,
  },
  timeLeft: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
  },
  title: {
    color: "white",
    fontSize: 16,
    fontFamily: "Bold",
  },
  time: {
    color: "white",
    fontSize: 26,
    fontFamily: "Bold",
  },
  location: {
    color: "white",
    fontFamily: "Medium",
  },
  duas: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  dua: {
    flexDirection: "column",
    gap: 2,
    alignItems: "center",
  },
});
