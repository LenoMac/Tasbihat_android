import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../screens/Header";
import { gStyle } from "../Style/Style";
import SurSample from "./SurSample";

const arabicText = `بِسْمِ اللّهِ الرَّحْمنِ الرَّحِيمِ
(1). أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ
(2). فَذَلِكَ الَّذِي يَدُعُّ الْيَتِيمَ
(3). وَلَا يَحُضُّ عَلَى طَعَامِ الْمِسْكِينِ
(4). فَوَيْلٌ لِّلْمُصَلِّينَ
(5). الَّذِينَ هُمْ عَن صَلَاتِهِمْ سَاهُونَ
(6). الَّذِينَ هُمْ يُرَاؤُونَ
(7). وَيَمْنَعُونَ الْمَاعُونَ`

const rusText = `БисмиЛЛааҳир - Рохмаанир - Рохиим
(1). 'Аро-'айталлазии йуказзибу бид - Диин
(2). Фазааликал-лазии йадуъ-ъуль йатиим
(3). Уа лаа йахудду ъалаа то-ъаамил мискиин
(4). Фа-уайлул-лил-мусоллиин
(5). 'Аллзиина ҳум ъан-солаатиҳим сааҳуун
(6). 'Аллазиина ҳум йуроо-уун
(7). Уа йамна-ъуунал -МАА-ЪУУН`;

const meaningText = `(1). Динди жалганга чыгарганды сен көрдүңбү?
(2). Дал ошол жетимдерди кууган,
(3). Жана да ал жардыларды тамак берүүгө үндөбөгөн (үгүттөбөгөн) неме
(4). Азап (болсун) намаз(ды начар) окуучуларга
(5). Анткени алар намаздарын унутуп коюшкан
(6). (анан да) алар (намаздарын) эл көрсүнгө жасашат (окушат)
(7). Жана да алар үй шаймандарын (башкаларга) беришпейт`;

export default function AlMaun() {
  return (
    <View style={gStyle.main}>
      <View style={gStyle.header}>
        <Header title="СУРЫ" />
      </View>
      <ScrollView>
        <View style={gStyle.container}>
          <View style={gStyle.container_row}>
            <SurSample
              title="Аль-Маъуун"
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
