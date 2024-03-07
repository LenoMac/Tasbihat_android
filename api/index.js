import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function PrayerTimes() {
  const [datas, setDatas] = useState([]);
  const loadTimes = async () => {
    try {
      const response = await fetch(
        "https://api.aladhan.com/v1/calendarByAddress/2024/3?address=Bishkek%&method=3"
      );
      const data = await response.json();
      for (const item of data.data) {
        // Добавляем каждый элемент массива в состояние
        setDatas(prevDatas => [...prevDatas, item.timings]);
      }
      console.log(datas.slice(10));
      await AsyncStorage.setItem("times", JSON.stringify(datas));
    } catch (error) {
      console.error("Ошибка загрузки данных", error);
    }
  };
  return { loadTimes };
}
