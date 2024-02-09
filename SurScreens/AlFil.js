import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../screens/Header";
import { gStyle } from "../Style/Style";
import SurSample from "./SurSample";

const arabicText = `بِسْمِ اللّهِ الرَّحْمنِ الرَّحِيمِ
(1). أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ
(2). أَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ
(3). وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ
(4). تَرْمِيهِم بِحِجَارَةٍ مِّن سِجِّيلٍ
(5). فَجَعَلَهُمْ كَعَصْفٍ مَّأْكُولٍ`

const rusText = `БисмиЛЛааҳир - Рохмаанир - Рохиим
(1). 'Алам таро кайфа фа-ъала Роббука би-'Ас-хаабиль-ФИИЛ
(2). 'Алам йаж-ъал кайдаҳум фии тадлииль
(3). Уа 'арсала ъалайҳим тойрон 'абаабиил
(4). Тармииҳим-би-хижааротим-мин-сижжииль
(5). Фажа-ъалаҳум ка-ъасфим-ма'кууль`

const meaningText = `(1). Сенин Эгең пил ээлерин менен кылганын көрбөйсүңбү?
(2). Ал алардын арам ой-максаттарын ойрон кылбадыбы?
(3). Ал аларга тобу менен куштарды жөнөтпөдүбү?
(4). Ал куштар тигилердин үстүндө бышкан чопо таштарды ташташты
(5). Ошентип, аларды чайналган эгиндей кылып салды`

export default function AlFil() {
  return (
    <View style={gStyle.main}>
      <View style={gStyle.header}>
        <Header title="СУРЫ" />
      </View>
      <ScrollView>
        <View style={gStyle.container}>
          <View style={gStyle.container_row}>
            <SurSample
              title="Аль-Фиил"
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
