import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import RamadanImg from "../../../assets/backgrouds/ramadan_img.png";
import Subtitle from "../../atoms/titles/subtitle/Subtitle";
import RamadanTimesAndDua from "../../molecules/prayer_ramadan_times/Index";

export default function Home() {
  const [date, setDate] = React.useState(new Date());
  const [day, setDay] = React.useState();

  React.useEffect(() => {
    const daysOfWeek = [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ];
    const dayOfWeek = daysOfWeek[date.getDay()] || "Неизвестный день";
    setDay(dayOfWeek);
  }, [date]);

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        {/* Background */}
        <Image style={styles.backgroundImg} source={RamadanImg} />
        <ScrollView overScrollMode='never' showsVerticalScrollIndicator={false}>
          <View>
            <Subtitle title="Рамадан 2024" />
            <Text style={styles.description}>
              {day}, {date.getDate()} марта {"\n"}Бишкек, Кыргызстан{" "}
            </Text>
          </View>
          {/* Ramadan Times and Duas and Calendar */}
          <RamadanTimesAndDua />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: "100%",
    backgroundColor: "#2E0A30",
    height: "100%",
    paddingTop: 35,
  },
  container: {
    paddingHorizontal: 12,
    paddingTop: 10
  },
  backgroundImg: {
    position: "absolute",
    right: 0,
    top: -40,
  },
  description: {
    color: "white",
    fontFamily: "Bold",
    fontSize: 14,
    marginTop: 5,
  },
});
