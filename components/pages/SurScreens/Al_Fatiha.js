import { View, ScrollView, Image } from "react-native";
import React from "react";
import Header from "../screens/Header";
import { gStyle } from "../Style/Style";
import SurSample from "./SurSample";
import AsyncStorage from "@react-native-async-storage/async-storage";

const arabicText = `(1).بِسْمِ اللّهِ الرَّحْمنِ الرَّحِيمِ
(2).الْحَمْدُ للّهِ رَبِّ الْعَالَمِينَ
(3).الرَّحْمنِ الرَّحِيمِ
(4).مَالِكِ يَوْمِ الدِّينِ
(5).إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ
(6).اهدِنَا الصِّرَاطَ المُستَقِيمَ
(7).صِرَاطَ الَّذِينَ أَنعَمتَ عَلَيهِمْ غَيرِ المَغضُوبِ عَلَيهِمْ وَلاَ الضَّالِّينَ`;

const rusText = `Аъуузу биллаахи минаш - шайтоонир - рожиим.
(1). БисмиЛЛааҳир - Рохмаанир - Рохиим.
(2). 'Альхамду лиЛЛааҳи Роббиль ъааламиин.
(3). Ар-Рохмаанир-Рохиим.
(4). Маалики йаумид-Диин.
(5). 'ИййааКа наъбуду уа 'иййааКа настаъиин.
(6). 'Иҳдинас-сыроотол мустақиим.
(7). Сыроотоллазиина 'анъамта ъалайҳим, ғойрил мағдууби ъалайҳим уа ладдооооллиин.`;

const meaningKgText = `(1). Ырайымдуу Мээримдүү Аллахтын аты менен (баштаймын)
(2). Ааламдардын Раббиси – Аллага алкыш-мактоолор болсун!
(3). Ал – Ырайымдуу, Мээримдүү
(4). Кыямат Күндүн падышасы.
(5). Жалгыз Сага гана сыйынабыз жана Сенден гана жардам сурайбыз.
(6). (О, Жараткан!) Бизди Туура Жолго баштагын!
(7). Өзүң жакшылык берген адамдардын жолуна (баштагын). Каарыңа учурагандардын жана адашкандардын жолуна эмес.`;

const meaningRusText = `(1). Во имя Аллаха, Милостивого, Милосердного!
(2). Хвала Аллаху, Господу миров,
(3). Милостивому, Милосердному,
(4). Властелину Дня воздаяния!
(5). Тебе одному мы поклоняемся и Тебя одного молим о помощи
(6). Веди нас прямым путем,
(7). путем тех, кого Ты облагодетельствовал, не тех, на кого пал гнев, и не заблудших`;

export default function Al_Fatiha() {
  const [lang, setLang] = React.useState(null);

  React.useEffect(() => {
    loadLang();
  }, []);

  const loadLang = async () => {
    try {
      const savedLang = await AsyncStorage.getItem("currentLanguage");
      setLang(savedLang);
    } catch (e) {
      console.log("Error loading languages: ", e);
    }
  };

  return (
    <View style={gStyle.main}>
      <View style={gStyle.header}>
        <Header title={lang === "kg" ? "СҮРӨЛӨР" : "СУРЫ"} />
      </View>
      <ScrollView>
        <View style={gStyle.container}>
          <View style={gStyle.container_row}>
            <SurSample
              title={lang === "kg" ? "ФАТИХА СҮРӨӨСҮ" : "аль-Фатиха"}
              arabicText={arabicText}
              rusText={rusText}
              meaningText={lang === "kg" ? meaningKgText : meaningRusText}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
