import { View, StyleSheet, ScrollView, Text } from "react-native";
import React from "react";
import Calendar from "react-native-calendars/src/calendar";

export default function CalendarPage() {
  const [day, setDay] = React.useState("");
  const [monthName, setMonthName] = React.useState("Нажмите на дни");
  const [dayInfo, setDayInfo] = React.useState("Нет информации");
  const [hadis, setHadis] = React.useState("");
  const dayColor = "#883982";
  const handleDayPress = (data) => {
    const day = data.dateString;
    const month = data.month;
    // Определение месяца
    switch (month) {
      case 3:
        setMonthName("Март");
        break;
      case 4:
        setMonthName("Апрель");
        break;
      default:
        setMonthName("Неизвестный месяц");
        break;
    }
    setDay(day);
    // Определение информации и дни
    switch (day) {
      case "2024-04-05":
        setDayInfo("Ночь аль-Кадр \n Хадисы о Ляйлятуль-кадр");
        setHadis(
          "«Ищите Ночь могущества [молясь, выстаивая молитвы и совершая благие дела] в последних десяти днях месяца Рамадан» [14]; \n «Ищите Ночь могущества в нечетные дни последних десяти дней месяца Рамадан» [15]; \n «Кто будет искать Ночь могущества, тот пусть ищет ее среди последних семи дней» [16]; \n «Ночь могущества — это ночь двадцать седьмого дня» [17];"
        );
        break;
      default:
        setHadis("Нет хадисов");
        break;
    }
  };

  return (
    <View style={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never">
        <Calendar
          minDate="2024-03-01"
          maxDate="2024-04-30"
          style={styles.calendar}
          hideExtraDays={true}
          markedDates={{
            "2024-03-10": {
              selected: true,
              selectedColor: dayColor,
              selectedTextColor: "white",
            },
            "2024-03-11": {
              selected: true,
              selectedColor: dayColor,
              selectedTextColor: "white",
            },
            "2024-03-12": {
              selected: true,
              selectedColor: dayColor,
              selectedTextColor: "white",
            },
            "2024-03-13": {
              selected: true,
              selectedColor: dayColor,
              selectedTextColor: "white",
            },
            "2024-03-14": {
              selected: true,
              selectedColor: dayColor,
              selectedTextColor: "white",
            },
            "2024-03-15": {
              selected: true,
              selectedColor: dayColor,
              selectedTextColor: "white",
            },
            "2024-03-16": {
              selected: true,
              selectedColor: dayColor,
              selectedTextColor: "white",
            },
            "2024-03-17": {
              selected: true,
              selectedColor: dayColor,
              selectedTextColor: "white",
            },
            "2024-03-18": {
              selected: true,
              selectedColor: dayColor,
              selectedTextColor: "white",
            },
            "2024-03-19": {
              selected: true,
              selectedColor: dayColor,
              selectedTextColor: "white",
            },
            "2024-03-20": {
              selected: true,
              selectedColor: dayColor,
              selectedTextColor: "white",
            },
            "2024-03-21": {
              selected: true,
              selectedColor: dayColor,
              selectedTextColor: "white",
            },
            "2024-03-22": {
              selected: true,
              selectedColor: dayColor,
              selectedTextColor: "white",
            },
            "2024-03-23": {
              selected: true,
              selectedColor: dayColor,
              selectedTextColor: "white",
            },
            "2024-03-24": {
              selected: true,
              selectedColor: dayColor,
              selectedTextColor: "white",
            },
            "2024-03-25": {
              selected: true,
              selectedColor: dayColor,
              selectedTextColor: "white",
            },
            "2024-03-26": {
              selected: true,
              selectedColor: dayColor,
              selectedTextColor: "white",
            },
            "2024-03-27": {
              selected: true,
              selectedColor: dayColor,
              selectedTextColor: "white",
            },
            "2024-03-28": {
              selected: true,
              selectedColor: dayColor,
              selectedTextColor: "white",
            },
            "2024-03-29": {
              selected: true,
              selectedColor: dayColor,
              selectedTextColor: "white",
            },
            "2024-03-30": {
              selected: true,
              selectedColor: dayColor,
              selectedTextColor: "white",
            },
            "2024-03-31": {
              selected: true,
              selectedColor: dayColor,
              selectedTextColor: "white",
            },
            "2024-04-01": {
              selected: true,
              selectedColor: dayColor,
              selectedTextColor: "white",
            },
            "2024-04-02": {
              selected: true,
              selectedColor: dayColor,
              selectedTextColor: "white",
            },
            "2024-04-03": {
              selected: true,
              selectedColor: dayColor,
              selectedTextColor: "white",
            },
            "2024-04-04": {
              selected: true,
              selectedColor: dayColor,
              selectedTextColor: "white",
            },
            "2024-04-05": {
              selected: true,
              selectedColor: "#F2BB4A",
              selectedTextColor: "white",
            },
            "2024-04-06": {
              selected: true,
              selectedColor: dayColor,
              selectedTextColor: "white",
            },
            "2024-04-07": {
              selected: true,
              selectedColor: dayColor,
              selectedTextColor: "white",
            },
            "2024-04-08": {
              selected: true,
              selectedColor: dayColor,
              selectedTextColor: "white",
            },
            "2024-04-09": {
              selected: true,
              selectedColor: dayColor,
              selectedTextColor: "white",
            },
            "2024-04-10": {
              selected: true,
              selectedColor: dayColor,
              selectedTextColor: "white",
            },
          }}
          onDayPress={handleDayPress}
        />
        <View style={styles.info}>
          <View style={styles.area}>
            <Text style={styles.day}>
              {day.substr(-2)}
              {"-" + monthName}
            </Text>
            <Text style={styles.dayInfo}>{dayInfo}</Text>
            <Text style={styles.hadis}>{hadis}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    paddingHorizontal: 12,
  },
  calendar: {
    backgroundColor: "white",
    borderRadius: 20,
  },
  info: {
    width: "100%",
    marginTop: 10,
    paddingBottom: 20,
  },
  area: {
    width: "100%",
    minHeight: 200,
    backgroundColor: "#5D2559",
    borderRadius: 20,
    padding: 12,
  },
  day: {
    color: "white",
    fontFamily: "Bold",
    fontSize: 20,
  },
  dayInfo: {
    color: "white",
    fontFamily: "Medium",
    fontSize: 16,
  },
  hadis: {
    color: "white",
    fontFamily: "Medium",
    fontSize: 14,
  },
});
