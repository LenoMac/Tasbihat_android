import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../screens/Header";
import { gStyle } from "../Style/Style";
import SurSample from "./SurSample";

const arabicText = `بِسْمِ اللّهِ الرَّحْمنِ الرَّحِيمِ
(1). قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ
(2). مِن شَرِّ مَا خَلَقَ
(3). وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ
(4). وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ
(5). وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ`

const rusText = `БисмиЛЛааҳир - Рохмаанир - Рохиим
(1). Қул 'а-ъуузу би-Роббил-Фалақ
(2). Мин-шарри маа холақ
(3). Уа мин-шарри ғоосикин 'изаа уақоб
(4). Уа мин-шаррин-Наффаасаати фил -ъуқод
(5). Уа мин-шарри хаасидин 'изаа хасад`;

const meaningText = `Ырайымдуу Мээримдүү Аллахтын аты менен (баштаймын)
(1). Айткын: "Сактанам таңдын Эгеси менен
(2). Ал жараткан нерселердин жамандыгынан,
(3). Караңгылык каптагандагы анын жамандыгынан,
(4). Түйүндөргө сыйкырлоочулардын кастыгынан,
(5). Көрө албастардын кызгангандагы жамандыгынан"`;

export default function AlFalak() {
  return (
    <View style={gStyle.main}>
      <View style={gStyle.header}>
        <Header title="СУРЫ" />
      </View>
      <ScrollView>
        <View style={gStyle.container}>
          <View style={gStyle.container_row}>
            <SurSample
              title="Ал-Фалак"
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
