import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import Clock from "react-live-clock";
import background from "../../../assets/backgrouds/ramadan.jpg";
import suhur from "../../../assets/icons/suhur.png";
import iftar from "../../../assets/icons/iftar.png";
import data from "../../../data/time.json";
import moment from "moment";
export default function Dua() {
  const [fajrTime, setFajrTime] = useState("");
  const [ishaTime, setIshaTime] = useState("");
  const currentTime = moment().format("HH:mm");

  useEffect(() => {
    loadTimes();
  }, [moment().date()]);

  const loadTimes = async () => {
    try {
      const todayDate = data.find((item) => {
        const currentDate = moment().format("DD-MM-YYYY");
        if (item.date.gregorian.date === currentDate) return item.timings;
      });
      const todayPrayerTime = todayDate.timings;
      if (todayDate) {
        setFajrTime(todayPrayerTime.Fajr.substring(0, 5));
        setIshaTime(todayPrayerTime.Isha.substring(0, 5));
      }
    } catch (e) {
      console.log(e);
    }
  };

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
          </View>
          <View style={styles.duas}>
            <View style={styles.dua}>
              <Text style={styles.duaTitle}>Сухур</Text>
              <Text style={styles.duaTime}>{fajrTime}</Text>
              <Image style={{ width: 80, height: 80 }} source={suhur} />
            </View>
            <View style={styles.dua}>
              <Text style={styles.duaTitle}>Ифтар</Text>
              <Text style={styles.duaTime}>{ishaTime}</Text>
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
  duaTitle: {
    color: 'white',
    fontFamily: 'Medium',
    fontSize: 16
  },
  duaTime: {
    color: 'white',
    fontFamily: 'Bold',
    fontSize: 26
  }
});