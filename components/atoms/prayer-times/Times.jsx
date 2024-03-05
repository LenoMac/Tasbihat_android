import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Clock from "react-live-clock";
// Импорт лого
import fajrActive from "../../../assets/icons/active-fajr.png";
import fajrNoneActive from "../../../assets/icons/nonActive-fajr.png";
import activeSunrise from "../../../assets/icons/active-sunrise.png";
import sunriseNoneActive from "../../../assets/icons/nonactive-sunrise.png";
import zuhrActive from "../../../assets/icons/active-zuhr.png";
import zuhrNoneActive from "../../../assets/icons/nonactive-zuhr.png";
import asrActive from "../../../assets/icons/active-asr.png";
import asrNoneActive from "../../../assets/icons/nonactive-asr.png";
import magribActive from "../../../assets/icons/active-magrib.png";
import magribNoneActive from "../../../assets/icons/nonactive-magrib.png";
import ishaActive from "../../../assets/icons/active-isha.png";
import ishaNoneActive from "../../../assets/icons/nonactive-isha.png";
import { useState } from "react/cjs/react.production.min";

export default function Times() {
  const [hour, setHour] = React.useState();
  const [minute, setMinute] = React.useState();
  const [second, setSecond] = React.useState();

  const date = new Date();
  const currentHour = date.getHours();
  const currentMinutes = date.getMinutes();
  const currentSecond = date.getSeconds();

//   setInterval(() => {
//     setHour(currentHour);
//     setMinute(currentMinutes);
//     setSecond(currentSecond);
//   }, 1000);

  return (
    <View style={styles.block}>
      <View style={styles.times}>
        <Text style={styles.prayerName}>Магриб</Text>
        <Clock style={styles.prayerTime} format={'HH:mm:ss'} ticking={true} element={Text} />
      </View>
      <View style={styles.timesList}>
        {/* times */}
        <View style={styles.time}>
          <Text style={styles.title}>Фаджр</Text>
          <Image source={fajrActive} />
          <Text style={styles.dispazone}>06 : 00</Text>
        </View>
        <View style={styles.time}>
          <Text style={styles.title}>Восход</Text>
          <Image source={fajrNoneActive} />
          <Text style={styles.dispazone}>06 : 00</Text>
        </View>
        <View style={styles.time}>
          <Text style={styles.title}>Зухр</Text>
          <Image source={zuhrActive} />
          <Text style={styles.dispazone}>06 : 00</Text>
        </View>
        <View style={styles.time}>
          <Text style={styles.title}>Аср</Text>
          <Image source={asrActive} />
          <Text style={styles.dispazone}>06 : 00</Text>
        </View>
        <View style={styles.time}>
          <Text style={styles.title}>Магриб</Text>
          <Image source={fajrNoneActive} />
          <Text style={styles.dispazone}>06 : 00</Text>
        </View>
        <View style={styles.time}>
          <Text style={styles.title}>Иша</Text>
          <Image source={ishaActive} />
          <Text style={styles.dispazone}>06 : 00</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#5D2559",
    height: 180,
    width: "100%",
    borderColor: "#900B9A",
    borderWidth: 1,
    borderRadius: 20,
    overflow: "hidden",
  },
  times: {
    backgroundColor: "#F2BB4A",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
  },
  prayerName: {
    color: "#5D2559",
    fontSize: 16,
    fontFamily: "Bold",
  },
  prayerTime: {
    color: "#5D2559",
    fontFamily: "Bold",
    fontSize: 26,
    width: 150,
    textAlign: 'center'
  },
  timesList: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 6,
    height: "65%",
  },
  time: {
    flexDirection: "column",
    height: "80%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "white",
    fontFamily: "Medium",
    fontSize: 14,
  },
  dispazone: {
    color: "white",
    fontFamily: "Bold",
    fontSize: 14,
  },
});
