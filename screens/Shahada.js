import React from "react";
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import { gStyle } from "../Style/Style";
import Header from "./Header";
import AsyncStorage from "@react-native-async-storage/async-storage";
// Импорт изображении
import ShahadaLogo from "../img/Shaha_logo.png";

export const Shahada = () => {
  const [lang, setLang] = React.useState();


  React.useEffect(() => {
    loadSavedLang();
  }, []);

  const loadSavedLang = async () => {
    try {
      const savedLang = await AsyncStorage.getItem("currentLanguage");
      setLang(savedLang);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={gStyle.main}>
      <View style={gStyle.header}>
        <Header title="ШАХАДА" />
      </View>
      <ScrollView>
        <View style={gStyle.container}>
          <View style={gStyle.container_row}>
            <View>
              <Image style={{ width: 200, height: 245 }} source={ShahadaLogo} />
            </View>
            <Text
              style={[
                gStyle.textArabic,
                gStyle.text,
                { fontFamily: "Montserrat Medium" },
              ]}
            >
              أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَ أَشْهَدُ أَنَّ
              مُحَمَّدًا عَبْدُهُ وَ رَسُولُهُ
            </Text>
            <Text
              style={[
                gStyle.textRus,
                gStyle.text,
                { fontFamily: "Montserrat Medium" },
              ]}
            >
              Ашхаду алля иляха илляллах. Ва ашхаду анна Мухаммадан ‘абдуху ва
              расулюх.
            </Text>

            {lang === "kg" ? (
              <Text
                style={[
                  gStyle.textRus,
                  gStyle.text,
                  { fontFamily: "Montserrat Medium" },
                ]}
              >
                Аллахтан башка сыйынууга татыктуу зат жок жана Мухаммад анын
                кулу жана элчиси экендигине күбөлүк берем.
              </Text>
            ) : (
              <Text
                style={[
                  gStyle.textRus,
                  gStyle.text,
                  { fontFamily: "Montserrat Medium" },
                ]}
              >
                Я свидетельствую, что нет никого достойного поклонения, кроме
                Аллаха. И я свидетельствую, что Мухаммад — Его раб и Посланник.
              </Text>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
