import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
// Импорт изображении
import ShahadaLogo from "../../../assets/img/Shaha_logo.png";
import { useLanguageState } from "../../../states/language/useLanguageState";

export const Shahada = () => {
  const { lang, loadLanguage } = useLanguageState();
  return (
    <View style={styles.shahada}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.box}>
            <View>
              <Image
                style={{ width: 250, height: 280, objectFit: "scale-down" }}
                source={ShahadaLogo}
              />
            </View>
            <Text style={styles.arabicText}>
              أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَ أَشْهَدُ أَنَّ
              مُحَمَّدًا عَبْدُهُ وَ رَسُولُهُ
            </Text>
            <Text style={styles.rusText}>
              Ашхаду алля иляха илляллах. Ва ашхаду анна Мухаммадан ‘абдуху ва
              расулюх.
            </Text>
            <Text style={styles.rusText}>
              {lang === "kg"
                ? "Аллахтан башка сыйынууга татыктуу зат жок жана Мухаммад анын кулу жана элчиси экендигине күбөлүк берем."
                : "Я свидетельствую, что нет никого достойного поклонения, кроме Аллаха. И я свидетельствую, что Мухаммад — Его раб и Посланник."}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  shahada: {
    backgroundColor: "#2E0A30",
    height: "100%",
    width: "100%",
  },
  container: {
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
  },
  arabicText: {
    fontSize: 30,
    textAlign: "center",
    color: "white",
    fontFamily: "ArabicMedium",
  },
  rusText: {
    fontSize: 18,
    textAlign: "center",
    color: "white",
    lineHeight: 28,
    fontFamily: "Medium",
  },
});
