import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../screens/Header";
import { gStyle } from "../Style/Style";
import SurSample from "./SurSample";

const arabicText = `بِسْمِ اللّهِ الرَّحْمنِ الرَّحِيمِ
(1). تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ
(2). مَا أَغْنَى عَنْهُ مَالُهُ وَمَا كَسَبَ
(3). سَيَصْلَى نَارًا ذَاتَ لَهَبٍ
(4). وَامْرَأَتُهُ حَمَّالَةَ الْحَطَبِ
(5). فِي جِيدِهَا حَبْلٌ مِّن مَّسَدٍ`

const rusText = `БисмиЛЛааҳир - Рохмаанир - Рохиим
(1). Таббат йадаааа 'Абии Лаҳаби у-уа табб
(2). Маа 'ағнаа ъанҳу маалуҳуу уа маа касаб
(3). Са-йаслаа Наарон-заата лаҳаб
(4). Уамро-'атуҳуу хаммаалатал-хатоб
(5). Фии жиидиҳаа хаблум-мим-масад`;

const meaningText = `(1). Абу Лахабдын эки колу куурап калсын! Ал куурады
(2). Ага анын байлыгы да, кесиби да эч жардам кыла алган жок
(3). Ал алоологон отто азапталат
(4). Отун көтөргөн айалы да
(5). Анын мойнунда эшилген жиби (бар)`;

export default function AlMasad() {
  return (
    <View style={gStyle.main}>
      <View style={gStyle.header}>
        <Header title="СУРЫ" />
      </View>
      <ScrollView>
        <View style={gStyle.container}>
          <View style={gStyle.container_row}>
            <SurSample
              title="Ал-Масад"
              arabicText={arabicText}
              rusText={rusText}
              meaningText={meaningText}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
