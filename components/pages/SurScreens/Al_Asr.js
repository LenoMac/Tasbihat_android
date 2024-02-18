import { View, Text, ScrollView, } from "react-native";
import React from "react";
import Header from "../screens/Header";
import { gStyle } from "../Style/Style";
import SurSample from "./SurSample";
import AsyncStorage from "@react-native-async-storage/async-storage";

const arabicText = `بِسْمِ اللّهِ الرَّحْمنِ الرَّحِيمِ
(1). وَالْعَصْرِ
(2). إِنَّ الْإِنسَانَ لَفِي خُسْرٍ
(3). إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ`;

const rusText = `БисмиЛЛааҳир - Рохмаанир - Рохиим.
(1). Уаль ЪАСР.
(2). 'Иннал-'Инсаана лафии хуср.
(3). 'Иллал -лазиина 'аамануу уа ъамилус-соолихаати уа та-уаасоу бил- Хаққи уа та-уаасоу-бис-собр`;

const meaningKgText =  `(1). Асрга ант!
(2). Албетте, инсан коромжуда
(3). Бирок, ыйман келтиргендер, жакшы амалдарды жасагандар жана актык менен сабырдуулукка бири-бирин насаат кылгандар (коромжуда эмес)`

const meaningRusText = `(1). Клянусь предвечерним временем,
(2). что люди несут убытки,
(3). кроме тех, которые уверовали, совершали праведные деяния, заповедали друг другу истину и заповедали друг другу терпение!`

export default function Al_Asr() {

  const [lang, setLang] = React.useState(null);

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
    <View style={gStyle.main}>
      <View style={gStyle.header}>
        <Header title="СҮРӨЛӨР" />
      </View>
      <ScrollView>
        <View style={gStyle.container}>
          <View style={gStyle.container_row}>
            <SurSample
              title="Аль-Аср"
              arabicText={arabicText}
              rusText={rusText}
              meaningText={lang === 'kg' ? meaningKgText : meaningRusText}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
