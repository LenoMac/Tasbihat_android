import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../screens/Header";
import { gStyle } from "../Style/Style";
import SurSample from "./SurSample";

const arabicText = `بِسْمِ اللّهِ الرَّحْمنِ الرَّحِيمِ
(1). إِذَا جَاء نَصْرُ اللَّهِ وَالْفَتْحُ
(2). وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا
(3). فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ إِنَّهُ كَانَ تَوَّابًا`;

const rusText = `БисмиЛЛааҳир - Рохмаанир - Рохиим
(1). 'Изаа жаааа-'а насруЛЛооҳи уалл Фатх
(2). Уа ро-'айтан-нааса йадхулууна фии Диини-ЛЛааҳи 'аф-уаажаа
(3). Фасаббих би-Хамди Роббика уастағфирҳ 'Инна-Ҳуу каана Тау-уаабаа`;

const meaningText = `(1). "Качан Аллахдан жардам жана жеңиш келген кезде,
(2). жана да Аллахтын динине топ-тобу менен кирип жаткан элдерди көргөнүңдө,
(3). Ошондо Эгеңди мактоо менен даңктагын жана Андан кечирим сура. Албетте Ал тооболорду кабыл кылуучу!"`;

export default function AnNasr() {
  return (
    <View style={gStyle.main}>
      <View style={gStyle.header}>
        <Header title="СУРЫ" />
      </View>
      <ScrollView>
        <View style={gStyle.container}>
          <View style={gStyle.container_row}>
            <SurSample
              title="Ан-Наср"
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
