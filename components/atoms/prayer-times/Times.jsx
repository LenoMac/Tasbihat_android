import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import Clock from "react-live-clock";
import AsyncStorage from "@react-native-async-storage/async-storage";
import data from "../../../data/time.json";
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
// Время намаза
import moment from "moment";
export default function Times() {
  const [fajrTime, setFajrTime] = useState("");
  const [sunriseTime, setSunriseTime] = useState("");
  const [zuhrTime, setZuhrTime] = useState("");
  const [asrTime, setAsrTime] = useState("");
  const [magribTime, setMagribTime] = useState("");
  const [ishaTime, setIshaTime] = useState("");
  const currentTime = moment().format('HH:mm')

  useEffect(() => {
    loadTimes();
  }, [moment().date()]);

  const dataOfTimes = [
    {name: "Fajr", hours: +fajrTime.substr(0, 2), minutes: +fajrTime.substr(3, 5)},
    {name: "Sunrise", hours: +sunriseTime.substr(0, 2), minutes: +fajrTime.substr(3, 5)},
    {name: "Zuhr", hours: +zuhrTime.substr(0, 2), minutes: +fajrTime.substr(3, 5)},
    {name: "Asr", hours: +asrTime.substr(0, 2), minutes: +fajrTime.substr(3, 5)},
    {name: "Magrib", hours: +magribTime.substr(0, 2), minutes: +fajrTime.substr(3, 5)},
    {name: "Isha", hours: +ishaTime.substr(0, 2), minutes: +fajrTime.substr(3, 5)},
  ]
  const loadTimes = async () => {
    try {
      // Фильтр по датам
      const todayDate = data.find((item) => {
        const currentDate = moment().format("DD-MM-YYYY");
        if (item.date.gregorian.date === currentDate) return item.timings;
      });
      const todayPrayerTime = todayDate.timings;
      if (todayDate) {
        setFajrTime(todayPrayerTime.Fajr.substr(0, 5));
        setSunriseTime(todayPrayerTime.Sunrise.substr(0, 5));
        setZuhrTime(todayPrayerTime.Dhuhr.substr(0, 5));
        setAsrTime(todayPrayerTime.Asr.substr(0, 5));
        setMagribTime(todayPrayerTime.Maghrib.substr(0, 5));
        setIshaTime(todayPrayerTime.Isha.substr(0, 5));
        



      } else {
        console.log("Ошибка");
      }
    } catch (e) {
      console.log("Error getting times", e);
    }
  };

  return (
    <View style={styles.block}>
      <View style={styles.times}>
        <Text style={styles.prayerName}>Магриб</Text>
        <Clock
          style={styles.prayerTime}
          format={"HH:mm:ss"}
          ticking={true}
          element={Text}
        />
      </View>
      <View style={styles.timesList}>
        {/* times */}
        <View style={styles.time}>
          <Text style={styles.title}>Фаджр</Text>
          <Image source={currentTime !== ishaTime ? fajrNoneActive : fajrActive} />
          <Text style={styles.dispazone}>{fajrTime}</Text>
        </View>
        <View style={styles.time}>
          <Text style={styles.title}>Восход</Text>
          <Image source={currentTime !== zuhrTime ? sunriseNoneActive : activeSunrise} />
          <Text style={styles.dispazone}>{sunriseTime}</Text>
        </View>
        <View style={styles.time}>
          <Text style={styles.title}>Зухр</Text>
          <Image source={currentTime !== asrTime ? zuhrNoneActive : zuhrActive} />
          <Text style={styles.dispazone}>{zuhrTime}</Text>
        </View>
        <View style={styles.time}>
          <Text style={styles.title}>Аср</Text>
          <Image source={currentTime !== magribTime ? asrNoneActive : asrActive} />
          <Text style={styles.dispazone}>{asrTime}</Text>
        </View>
        <View style={styles.time}>
          <Text style={styles.title}>Магриб</Text>
          <Image source={currentTime !== ishaTime ? magribNoneActive : magribActive} />
          <Text style={styles.dispazone}>{magribTime}</Text>
        </View>
        <View style={styles.time}>
          <Text style={styles.title}>Иша</Text>
          <Image source={currentTime !== fajrTime ? ishaActive : ishaNoneActive} />
          <Text style={styles.dispazone}>{ishaTime}</Text>
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
    borderColor: "rgba(113, 43, 108, .6)",
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
    textAlign: "center",
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
    color: "#F2BB4A",
    fontFamily: "Medium",
    fontSize: 14,
  },
  dispazone: {
    color: "#F2BB4A",
    fontFamily: "Bold",
    fontSize: 14,
  },
});
