import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../screens/Header";
import { gStyle } from "../Style/Style";
import SurSample from "./SurSample";

const arabicText = `بِسْمِ اللّهِ الرَّحْمنِ الرَّحِيمِ
(1). قُلْ يَا أَيُّهَا الْكَافِرُونَ
(2). لَا أَعْبُدُ مَا تَعْبُدُونَ
(3). وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ
(4). وَلَا أَنَا عَابِدٌ مَّا عَبَدتُّمْ
(5). وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ
(6). لَكُمْ دِينُكُمْ وَلِيَ دِينِ`;

const rusText = `БисмиЛЛааҳир - Рохмаанир - Рохиим.
(1). Қул йаааа-'аййуҳал-КААФИРУУН
(2). Лаааа 'аъбуду маа таъбудуун
(3). Уа лааа 'антум ъаабидууна маааа 'аъбуд
(4). Уа лаааа 'ана ъаабидум-маа ъабаттум
(5). Уа лаааа 'антум ъаабидууна маааа 'аъбуд
(6). Лакум Диинукум уа лийа Диин`;

const meaningText = `(1). Айткын: "Эй, капырлар!
(2). Мен силер сыйынган нерселерге сыйынбаймын,
(3). Силер дагы мен сыйынган (Аллахка) сыйынбайсыңар,
(4). Дагы да - мен силер сыйынган нерселерге сыйынбаймын,
(5). жана да силер мен сыйынган (Аллахка) сыйынбайсыңар,
(6). Силердин диниңер - озүңөр үчүн, а менин диним - өзүм үчүн"`;

export default function AlKafirun() {
  return (
    <View style={gStyle.main}>
      <View style={gStyle.header}>
        <Header title="СУРЫ" />
      </View>
      <ScrollView>
        <View style={gStyle.container}>
          <View style={gStyle.container_row}>
            <SurSample
              title="Аль-Кафирун"
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
