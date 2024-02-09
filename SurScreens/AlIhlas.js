import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../screens/Header";
import { gStyle } from "../Style/Style";
import SurSample from "./SurSample";

const arabicText = `بِسْمِ اللّهِ الرَّحْمنِ الرَّحِيمِ
(1). قُلْ هُوَ اللَّهُ أَحَدٌ
(2). اللَّهُ الصَّمَدُ
(3). لَمْ يَلِدْ وَلَمْ يُولَدْ
(4). وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ`

const rusText = `БисмиЛЛааҳир - Рохмаанир - Рохиим
(1). Қуль ҳу-уа-ЛЛооҳу 'Ахад
(2). 'АЛЛООҳус-Сомад
(3). Лам йалид, уа лам йуулад
(4). Уа лам йакул-ла-Ҳуу куфу-уан 'ахад`;

const meaningText = `Ырайымдуу Мээримдүү Аллахтын аты менен (баштаймын)
(1). Айткын: Аллах Жалгыз!
(2). Аллах эч кимге муктаж эмес!
(3). (Ал) төрөбөгөн жана төрөлбөгөн
(4). Ага эч ким теңдеш эмес`;

export default function AlIhlas() {
  return (
    <View style={gStyle.main}>
      <View style={gStyle.header}>
        <Header title="СУРЫ" />
      </View>
      <ScrollView>
        <View style={gStyle.container}>
          <View style={gStyle.container_row}>
            <SurSample
              title="Ал-Ихлас"
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
