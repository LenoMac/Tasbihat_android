import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../screens/Header";
import { gStyle } from "../Style/Style";
import SurSample from "./SurSample";

const arabicText = `بِسْمِ اللّهِ الرَّحْمنِ الرَّحِيمِ
(1). إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ
(2). فَصَلِّ لِرَبِّكَ وَانْحَرْ
(3). إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ`;

const rusText = `БисмиЛЛааҳир - Рохмаанир - Рохиим.
(1). 'Иннаааа 'аътойнаакал-КАУСАР
(2). Фасолли ли-Роббика уанхар
(3). 'Инна шаани-'ака ҳу-уал-'абтар`;

const meaningText = `(1). Акыйкатта, Биз сага "Кавсарды" таттуу кылдык,
(2). Эми Эгеңе (сыйынып) намаз оку жана курбандык чал
(3). Ырасында, сени капаланткан - өзү шордуу`;

export default function AlKavsar() {
  return (
    <View style={gStyle.main}>
      <View style={gStyle.header}>
        <Header title="СУРЫ" />
      </View>
      <ScrollView>
        <View style={gStyle.container}>
          <View style={gStyle.container_row}>
            <SurSample
              title="Аль-Каусар"
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
