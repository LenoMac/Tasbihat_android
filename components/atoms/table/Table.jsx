import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Table, Row } from "react-native-table-component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PrayerTimes from "../../../api/index";
import data from "../../../data/time.json"
export default function TableComponents() {
  const tableHead = ["Рамадан", "Дата", "Сухур", "Ифтар"];
  const [datas, setDatas] = useState([]);
  // const { loadTimes } = PrayerTimes();

  // useEffect(() => {
  //   async function Fetch() {
  //     await loadSavedTimes();
  //     if (!datas.length) {
  //       await loadTimes();
  //     }
  //   }
  //   Fetch();
  // }, []);

  // const loadSavedTimes = async () => {
  //   try {
  //     const response = await AsyncStorage.getItem("times");
  //     if (response !== null) setDatas(JSON.parse(response));
  //     else {
  //       console.log("Is empty :(");
  //     }
  //     console.log(datas);
  //   } catch (e) {
  //     console.log("Error loading times", e);
  //   }
  // };
  // const deleteItem = async() => {
  //   try{
  //     const response = await AsyncStorage.removeItem("times")
  //     console.log(response);
  //   }
  //   catch(e){}
  // }
  return (
    <View style={styles.main}>
      {/* <Button title="Get" onPress={loadTimes} /> */}
      {/* <Button title="Reset" onPress={deleteItem}/> */}
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
          <FlatList
            data={data}
            // keyExtractor={(item) => item.id.toString()} // Используйте уникальный идентификатор
            renderItem={({ item, index }) => (
              <View key={index} style={styles.headerBody}>
                <Text style={styles.bodyText}>1</Text>
                <Text style={styles.bodyText}>11.03</Text>
                <Text style={styles.bodyText}>{item.Fajr.substring(0, 6)}</Text>
                <Text style={styles.bodyText}>{item.Isha.substring(0, 6)}</Text>
              </View>
            )}
          />
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
    paddingLeft: 21,
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
  },
});
