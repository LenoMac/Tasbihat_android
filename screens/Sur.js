import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Right from "../img/Right.png";
import { gStyle } from "../Style/Style";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "./Header";

const ListOfSur = [
  {
    titleRus: "Сура аль-Фатиха",
    titleKg: "Фатиха сүрөсү",
    name: "al-Fatiha",
    number: 1,
  },
  {
    titleRus: "Сура аль-Аср",
    titleKg: "Аср сүрөсү",
    name: "al-Asr",
    number: 2,
  },
  {
    titleRus: "Сура аль-Хумаза",
    titleKg: "Хумаза сүрөсү",
    name: "al-Humaza",
    number: 3,
  },
  {
    titleRus: "Сура аль-Филь",
    titleKg: "Филь сүрөсү",
    name: "al-Fil",
    number: 4,
  },
  {
    titleRus: "Сура Курайш",
    titleKg: "Курайш сүрөсү",
    name: "Kuraysh",
    number: 5,
  },
  {
    titleRus: "Сура Аль-Маун",
    titleKg: "Маун сүрөсү",
    name: "al-Maun",
    number: 6,
  },
  {
    titleRus: "Сура аль-Каусар",
    titleKg: "Каусар сүрөсү",
    name: "al-Kavsar",
    number: 7,
  },
  {
    titleRus: "Сура аль-Кафирун",
    titleKg: "Кафирун сүрөсү",
    name: "al-Kafirun",
    number: 8,
  },
  {
    titleRus: "Сура ан-Наср",
    titleKg: "Наср сүрөсү",
    name: "an-Nasr",
    number: 9,
  },
  {
    titleRus: "Сура аль-Масад",
    titleKg: "Масад сүрөсү",
    name: "al-Masad",
    number: 10,
  },
  {
    titleRus: "Сура аль-Ихлас",
    titleKg: "Ихлас сүрөсү",
    name: "al-Ihlas",
    number: 11,
  },
  {
    titleRus: "Сура аль-Фалак",
    titleKg: "Фалак сүрөсү",
    name: "al-Falak",
    number: 12,
  },
  {
    titleRus: "Сура ан-Нас",
    titleKg: "Нас сүрөсү",
    name: "an-Nas",
    number: 13,
  },
];

const CustomButton = ({ title, name, number, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(name)}>
      <View style={gStyle.sur_btn}>
        <View style={gStyle.sur_btn_row}>
          <Text style={[gStyle.text1, { fontFamily: "Montserrat Medium" }]}>
            {number + "."}
          </Text>
          <Text style={[gStyle.text2, { fontFamily: "Montserrat Medium" }]}>
            {title}
          </Text>
        </View>
        <Image source={Right} />
      </View>
    </TouchableOpacity>
  );
};

export const Sur = () => {
  const [lang, setLang] = React.useState(null);
  const navigation = useNavigation();

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

  const onPress = (name) => {
    navigation.navigate(name);
  };

  return (
    <>
      <View style={gStyle.header}>
        <Header title={lang === "kg" ? "СҮРӨЛӨР" : "СУРЫ"} />
      </View>
      <ScrollView style={gStyle.sur_cont}>
        <View style={gStyle.sur_cont_row}>
          {ListOfSur.map((item, index) => {
            return (
              <CustomButton
                title={lang === "rus" ? item.titleRus : item.titleKg}
                number={item.number}
                name={item.name}
                key={index}
                onPress={onPress}
              />
            );
          })}
        </View>
      </ScrollView>
    </>
  );
};
