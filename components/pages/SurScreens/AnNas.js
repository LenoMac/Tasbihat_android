import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../screens/Header";
import { gStyle } from "../Style/Style";
import SurSample from "./SurSample";

const arabicText = `بِسْمِ اللّهِ الرَّحْمنِ الرَّحِيمِ
(1). قُلْ أَعُوذُ بِرَبِّ النَّاسِ
(2). مَلِكِ النَّاسِ
(3). إِلَهِ النَّاسِ
(4). مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ
(5). الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ
(6). مِنَ الْجِنَّةِ وَ النَّاسِ`

const rusText = `БисмиЛЛааҳир - Рохмаанир - Рохиим
(1). Қул а-ъуузу би-Роббин-наас
(2). Маликин-Наас
(3). 'Илааҳин-Наас
(4). Мин-шаррил-Уас-уаасил -хон-Наас
(5). 'Аллазии йу-уас-уису фии судуурин-Наас
(6). Минал-Жиннати уан-Наас`;

const meaningKgText = `Ырайымдуу Мээримдүү Аллахтын аты менен (баштаймын)
(1). Айткын: "Сактанам адамдардын Эгеси менен,
(2). (Ал) адамдардын падышасы,
(3). (Ал) адамдардын Кудайы
(4). Жашырынган азгыруучунун жамандыгынан,
(5). Ал адамдардын жүрөктөрдүн азгырат,
(6). (Алар) жиндер жана адамдардан (болот)"`;

const meaningRusText = `(1). Скажи: «Прибегаю к защите Господа людей,
(2). Царя людей,
(3). Бога людей,
(4). от зла искусителя исчезающего при поминании Аллаха,
(5). который наущает в груди людей,
(6). от джиннов и людей`;


export default function AnNas() {
  return (
    <View style={gStyle.main}>
      <View style={gStyle.header}>
        <Header title="СУРЫ" />
      </View>
      <ScrollView>
        <View style={gStyle.container}>
          <View style={gStyle.container_row}>
            <SurSample
              title="Ан-Наас"
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
