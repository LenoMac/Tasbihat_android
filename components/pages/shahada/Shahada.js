import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
// Импорт изображении
import ShahadaLogo from "../../../assets/img/Shaha_logo.png";
import { useLanguageState } from "../../../states/language/useLanguageState";

export const Shahada = () => {
  const state = useLanguageState();
  return (
    <View style={styles.shahada}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.box}>
            <View>
              <Image style={{ width: 200, height: 245 }} source={ShahadaLogo} />
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
              {state === "kg" ? "Аллахтан башка сыйынууга татыктуу зат жок жана Мухаммад анын кулу жана элчиси экендигине күбөлүк берем." : "Я свидетельствую"}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  shahada: {
    backgroundColor: "#320548",
    height: "100%",
    width: "100%",
  },
  container: {
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 25
  },
  arabicText: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white'
  },
  rusText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white'
  }
});
