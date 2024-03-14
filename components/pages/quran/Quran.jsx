import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
export default function Quran() {
  const [data, setData] = useState([]);

  React.useEffect(() => {
    loadSurah();
  }, []);

  const loadSurah = async () => {
    try {
      const response = await fetch("http://api.alquran.cloud/v1/surah/1", {
        method: "GET",
        redirect: "follow",
      });
      const data = await response.json();
      setData(data.data)
    } catch (e) {
      console.log("Error loading surah", e);
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text>Quran</Text>
        <Text style={styles.name}>{data.name}</Text>
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
  },
  name: {
    fontFamily:'ArabicMedium',
    color: 'white',
    fontSize: 30
  }
});
