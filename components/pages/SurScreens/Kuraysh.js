import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../screens/Header";
import { gStyle } from "../Style/Style";
import SurSample from "./SurSample";

const arabicText = `سْمِ اللّهِ الرَّحْمنِ الرَّحِيمِ
(1). لِإِيلَافِ قُرَيْشٍ
(2). إِيلَافِهِمْ رِحْلَةَ الشِّتَاء وَالصَّيْفِ
(3). فَلْيَعْبُدُوا رَبَّ هَذَا الْبَيْتِ
(4). الَّذِي أَطْعَمَهُم مِّن جُوعٍ وَآمَنَهُم مِّنْ خَوْفٍ`;

const rusText = `БисмиЛЛааҳир - Рохмаанир - Рохиим
(1). Ли-'йлаафи ҚУРОйШ
(2). 'Йлаафиҳим рихляташ-шитаааа-'и уас-сойф
(3). Фал-йаъбудуу Робба ҳаазаль-Байт
(4). 'Аллазииии 'ат-ъамаҳум-мин - жуу - ъи у-уа 'ааманаҳум - мин Хоуф`;

const meaningKgText = `(1). Курейштер көнүккөн нерселери үчүн,
(2). (б.а.) кышкы жана жайкы сапарга көнүккөндөрү үчун,
(3). Бул үйдүн Ээсине сыйынышсын!
(4). Ал ачкалыкта аларды тамактандырып, коркунучтан аларды аман сактаган`;

const meaningRusText = `(1). Ради единения курайшитов,
(2). единения их во время зимних и летних поездок.
(3). Пусть же они поклоняются Господу этого Дома (Каабы),
(4). Который накормил их после голода и избавил их от страха.`;


export default function Kuraysh() {
  return (
    <View style={gStyle.main}>
      <View style={gStyle.header}>
        <Header title="СУРЫ" />
      </View>
      <ScrollView>
        <View style={gStyle.container}>
          <View style={gStyle.container_row}>
            <SurSample
              title="Курайш"
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
