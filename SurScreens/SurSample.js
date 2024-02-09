import { View, Text } from "react-native";
import React from "react";
import { gStyle } from "../Style/Style";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SurSample({ title, arabicText, rusText, meaningText }) {
  const [lang, setLang] = React.useState(null);

  // Загрузка состоянии языка
  React.useEffect(() => {
    loadLang();
  }, []);
  const loadLang = async () => {
    try {
      const savedLang = await AsyncStorage.getItem("currentLanguage");
      setLang(savedLang);
    } catch (e) {
      console.log("Error loading languages: ", e);
    }
  };

  return (
    <View style={gStyle.surSample}>
      <Text style={[gStyle.surTitle, { fontFamily: "Montserrat Semibold" }]}>
        {title}
      </Text>
      <Text style={[gStyle.surArabic, { fontFamily: "Montserrat Medium" }]}>
        {arabicText}
      </Text>
      <Text
        style={[
          gStyle.text,
          { color: "#F2BB4A", fontSize: 20, fontFamily: "Montserrat Semibold" },
        ]}
      >
        Транскрипция
      </Text>
      <Text style={[gStyle.surRus, { fontFamily: "Montserrat Medium" }]}>
        {rusText}
      </Text>
      <Text
        style={[
          gStyle.text,
          { color: "#F2BB4A", fontSize: 20, fontFamily: "Montserrat Medium" },
        ]}
      >
        {lang === "kg" ? "Мааниси" : "Значение"}
      </Text>
      <Text style={[gStyle.surRus, { fontFamily: "Montserrat Medium" }]}>
        {meaningText}
      </Text>
    </View>
  );
}
