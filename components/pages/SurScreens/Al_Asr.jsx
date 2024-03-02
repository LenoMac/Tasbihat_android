import { View, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import SurSample from "../../molecules/sur-sample/SurSample";
import { useLanguageState } from "../../../states/language/useLanguageState";
const arabicText = `بِسْمِ اللّهِ الرَّحْمنِ الرَّحِيمِ
(1). وَالْعَصْرِ
(2). إِنَّ الْإِنسَانَ لَفِي خُسْرٍ
(3). إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ`;

const rusText = `БисмиЛЛааҳир - Рохмаанир - Рохиим.
(1). Уаль ЪАСР.
(2). 'Иннал-'Инсаана лафии хуср.
(3). 'Иллал -лазиина 'аамануу уа ъамилус-соолихаати уа та-уаасоу бил-Хаққи уа та-уаасоу-бис-собр`;

const meaningKgText = `(1). Асрга ант!
(2). Албетте, инсан коромжуда
(3). Бирок, ыйман келтиргендер, жакшы амалдарды жасагандар жана актык менен сабырдуулукка бири-бирин насаат кылгандар (коромжуда эмес)`;

const meaningRusText = `(1). Клянусь предвечерним временем,
(2). что люди несут убытки,
(3). кроме тех, которые уверовали, совершали праведные деяния, заповедали друг другу истину и заповедали друг другу терпение!`;

export default function Al_Asr() {

  const {lang} = useLanguageState()

  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.container}>
          <SurSample
            title={lang === "kg" ? "АСР СҮРӨӨСҮ" : "аль-Аср"}
            arabicText={arabicText}
            rusText={rusText}
            meaningText={lang === "kg" ? meaningKgText : meaningRusText}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    backgroundColor: "#320548",
  },
  container: {
    paddingHorizontal: 12,
  },
});
