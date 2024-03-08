import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function PrayerTimes() {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadTimes = async () => {
    try {
      const cachedData = await AsyncStorage.getItem("times");

      if (!cachedData.length) {
        setDatas(JSON.parse(cachedData));
        setLoading(false);
        console.log("Data is true", datas);
      } else {
        const response = await fetch(
          "https://api.aladhan.com/v1/calendarByAddress/2024/3?address=Bishkek%&method=3"
        );
        const data = await response.json();
        const newDatas = data.data.map((item) => item.timings);
        await AsyncStorage.setItem("times", JSON.stringify(datas));
        setDatas(newDatas);
        console.log(datas);
        console.log("Data is Empty");
      }
    } catch (error) {
      console.error("Ошибка загрузки данных", error);
    }
  };

  useEffect(() => {
    async function fetchData() {
      await loadTimes();
    }
    fetchData();
  }, []);

  return { datas, loading };
}
