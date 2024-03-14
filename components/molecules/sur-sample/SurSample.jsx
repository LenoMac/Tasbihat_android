import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useLanguageState } from "../../../states/language/useLanguageState";

export default function SurSample({ title, arabicText, rusText, meaningText }) {
  const { lang, loadLanguage } = useLanguageState();

  return (
    <View style={styles.surSample}>
      <View>
        <Text style={styles.surTitle}>{title}</Text>
      </View>
      <View>
        <Text style={styles.surArabic}>{arabicText}</Text>
      </View>
      <View style={styles.layout}>
        <Text style={styles.text}>Транскрипция</Text>
        <Text style={styles.surRus}>{rusText}</Text>
      </View>
      <View style={styles.layout}>
        <Text style={styles.text}>
          {lang === "kg" ? "Мааниси" : "Значение"}
        </Text>
        <Text style={styles.surRus}>{meaningText}</Text>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  surSample: {
    display: "flex",
    flexDirection: "column",
    gap: 25,
  },
  surTitle: {
    fontSize: 22,
    textAlign: 'center',
    color: 'yellow',
    fontFamily: 'Bold',
  },
  surArabic: {
    fontSize: 26,
    color:'white',
    lineHeight: 45,
    textAlign: 'right',
    fontFamily: 'ArabicMedium',
  },
  text: {
    color: 'yellow',
    fontSize: 18,
    fontFamily: 'Bold',
  },
  surRus: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Medium',
    lineHeight: 30
  },
  layout: {
    display: 'flex',
    flexDirection: 'column',
    gap: 15
  },
});
