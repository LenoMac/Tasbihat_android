import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Pressable,
  Appearance,
} from "react-native";
import React, { useEffect } from "react";
import { Table, Row } from "react-native-table-component";
import data from "../../../data/time.json";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
const colorScheme = Appearance.getColorScheme();
const darkMode = colorScheme === "dark";

export default function TableComponents() {
  const tableHead = ["№", "Дата", "Сухур", "Ифтар"];

  const navigation = useNavigation();
  const CalendarButton = ({ title }) => {
    return (
      <Pressable onPress={() => navigation.navigate("Calendar")}>
        <View style={styles.calendarButton}>
          <Text style={styles.calendarButtonText}>{title}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.main}>
      {!data.length ? (
        <ActivityIndicator color="#5D2559" size="large" />
      ) : (
        <>
          <Table
            style={styles.table}
            borderStyle={{ borderWidth: 2, borderColor: "transparent" }}
          >
            <Row
              textStyle={styles.text}
              style={styles.header}
              data={tableHead}
            />
          </Table>
          {data.slice(10).map((item, index) => {
            return (
              <View key={index} style={styles.headerBody}>
                <Text style={styles.bodyText}>{index + 1}</Text>
                <Text style={styles.bodyText}>
                  {item.date.readable.substring(0, 2)}{" "}
                  {item.date.gregorian.month.en === "March" ? "Мар" : "Апр"}
                </Text>
                <Text style={styles.bodyText}>
                  {item.timings.Fajr.substring(0, 6)}
                </Text>
                <Text style={styles.bodyText}>
                  {item.timings.Isha.substring(0, 6)}
                </Text>
              </View>
            );
          })}
          {/* <FlatList
            data={data.slice(10)}
            // keyExtractor={(item) => item.id.toString()} // Используйте уникальный идентификатор
            renderItem={({ item, index }) => (
              <View key={index} style={styles.headerBody}>
                <Text style={styles.bodyText}>{index + 1}</Text>
                <Text style={styles.bodyText}>
                  {item.date.readable.substring(0, 2)}{" "}
                  {item.date.gregorian.month.en === "March" ? "Мар" : "Апр"}
                </Text>
                <Text style={styles.bodyText}>
                  {item.timings.Fajr.substring(0, 6)}
                </Text>
                <Text style={styles.bodyText}>
                  {item.timings.Isha.substring(0, 6)}
                </Text>
              </View>
            )}
          /> */}
          <CalendarButton title="Посмотреть на календаре" />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: "100%",
  },
  table: {
    backgroundColor: "#F2BB4A",
    borderTopLeftRadius: 20,
    borderTopEndRadius: 20,
  },
  header: {
    padding: 10,
  },
  headerBody: {
    // paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#5D2559",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  text: {
    fontSize: 14,
    color: "#5D2559",
    fontFamily: "Bold",
    textAlign: "center",
  },
  tableBody: {
    backgroundColor: "rgba(93, 37, 89, 0.8)",
  },
  row: {
    height: 40,
    backgroundColor: "rgba(93, 37, 89, 0.8)",
  },
  bodyText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Medium",
    width: "18%",
  },
  calendarButton: {
    backgroundColor: "#F2BB4A",
    marginTop: 16,
    paddingVertical: 16,
    elevation: 10,
    borderRadius: 100,
  },
  calendarButtonText: {
    alignItems: "center",
    fontFamily: "Bold",
    textAlign: "center",
    fontSize: 16,
  },
});
