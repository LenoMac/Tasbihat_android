import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../screens/Header";
import { gStyle } from "../Style/Style";
import SurSample from "./SurSample";

const arabicText = `بِسْمِ اللّهِ الرَّحْمنِ الرَّحِيمِ
(1). وَيْلٌ لِّكُلِّ هُمَزَةٍ لُّمَزَةٍ
(2). الَّذِي جَمَعَ مَالًا وَعَدَّدَهُ
(3). يَحْسَبُ أَنَّ مَالَهُ أَخْلَدَهُ
(4). كَلَّا لَيُنبَذَنَّ فِي الْحُطَمَةِ
(5). وَمَا أَدْرَاكَ مَا الْحُطَمَةُ
(6). نَارُ اللَّهِ الْمُوقَدَةُ
(7). الَّتِي تَطَّلِعُ عَلَى الْأَفْئِدَةِ
(8). إِنَّهَا عَلَيْهِم مُّؤْصَدَةٌ
(9). فِي عَمَدٍ مُّمَدَّدَةٍ`;

const rusText = `БисмиЛЛааҳир - Рохмаанир - Рохиим.
(1). Уайлул-ликулли ҳумазатил - лумазаҳ
(2). 'Аллазии жама-ъа маала у-уа ъаддадаҳ
(3). Йахсабу 'анна маалаҳуу 'ахладаҳ
(4). Калла ла-йумбазанна фил - Хутомаҳ
(5). Уа маааа 'адроока мал-Хутомаҳ
(6). Наару-ЛЛооҳил-мууқодаҳ
(7). 'Аллятии таттоли-ъу ъалаль - 'аф - 'идаҳ
(8). 'Иннаҳаа ъалайхим-му'содаҳ
(9). Фии ъамадим-мумаддадаҳ`;

const meaningKgText = `(1). Тили жана кыймыл-аракети менен кайбат кылуучуга азап болсун!
(2). Ал мал-дүйнө топтоп, аны санады
(3). Топтогон мал-дүйнөсү аны түбөлүктүү кылат деп ойлойт
(4). Жок! (Андай болбойт) ал сөзсүз "быркыратуучуга" (тозокко) ыргытылат
(5). "Быркыратуучу" эмне экенин билесиңерби?
(6). Ал Аллахтын жагылган оту
(7). Ал (денени көзөп өтүп) жүрөктөргө чейин жетет
(8). Албетте, ал алардын үстүнө жабылат
(9). Тартылган устундардын ичинде (болушат)`;

const meaningRusText = `(1). Горе всякому хулителю и обидчику,
(2). который копит состояние и подсчитывает его,
(3). думая, что богатство увековечит его
(4). О нет! Он будет ввергнут в Огонь сокрушающий
(5). Откуда ты мог знать, что такое Огонь сокрушающий?
(6). Это – разожженный Огонь Аллаха,
(7). который вздымается над сердцами
(8). Он сомкнется над ними
(9). высокими столбами`;

export default function AlHumaza() {
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
        <Header title="СУРЫ" />
      </View>
      <ScrollView>
        <View style={gStyle.container}>
          <View style={gStyle.container_row}>
            <SurSample
              title="Аль-Хумаза"
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
