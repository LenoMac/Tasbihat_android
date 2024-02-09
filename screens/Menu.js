import React from "react";
import { Text, Image, View, ScrollView, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
// Импорт Лого и изображении
import Logo from "../assets/img/Logo.png";
import Shahada from "../assets/img/Shahada.png";
import Tasbih from "../assets/img/Tasbih.png";
import Sur from "../assets/img/Sur.png";
import Dua from "../assets/img/Dua.png";
import Javshan from "../assets/img/Javshan.png";
import Tafrij from "../assets/img/Tafrijia.png";
import { CustomButton } from "./CustomButton";
import KG from "../assets/img/kg.png";
import RUS from "../assets/img/rus.png";
// Импорт стилей
import { gStyle } from "../Style/Style";

const menuItems = [
  { titleRus: "Шахада", titleKg: "Шахада", img: Shahada, name: "Shahada" },
  { titleRus: "Тасбихат", titleKg: "Тасбихат", img: Tasbih, name: "Tasbihat" },
  { titleRus: "Суры", titleKg: "Сүрөлөр", img: Sur, name: "Sur" },
  { titleRus: "Молитвы", titleKg: "Дубалар", img: Dua, name: "Prayer" },
  { titleRus: "Жавшан", titleKg: "Жавшан", img: Javshan, name: "Javshan" },
  { titleRus: "Тафрижия", titleKg: "Тафрижия", img: Tafrij, name: "Tafrijia" },
];

export const Menu = () => {
  const [lang, setLang] = React.useState("kg");

  const changeToKg = () => {
    setLang("kg");
    saveLang("kg");
  };

  const changeToRus = () => {
    setLang("rus");
    saveLang("rus");
  };

  //   Load language from Storage

  React.useEffect(() => {
    loadSavedLanguage();
  }, []);

  const loadSavedLanguage = async () => {
    try {
      const savedLang = await AsyncStorage.getItem("currentLanguage");
      if (savedLang !== null) {
        setLang(savedLang);
      }
    } catch (e) {
      console.log("Error loading language: ", e);
    }
  };

  //   Save lang state in Storage
  const saveLang = async (value) => {
    try {
      await AsyncStorage.setItem("currentLanguage", value);
    } catch (error) {
      console.log("Error saving language: ", error);
    }
  }

  const navigation = useNavigation();
  const onPress = (name) => {
    navigation.navigate(name);
  };
  return (
    <ScrollView
      style={{ width: "100%", height: "100%", backgroundColor: "#320548" }}
    >
      <View style={gStyle.menu}>
        <View style={gStyle.logoAndText}>
          <Image style={{ width: 120, height: 120 }} source={Logo} />
          <Text style={[gStyle.title, { fontFamily: "Montserrat Semibold" }]}>
            {lang === 'kg' ? 'НАМАЗ ТАСБИХАТЫ' : 'ТАСБИХАТ НАМАЗА'}
          </Text>
          <View style={gStyle.language}>
            <Pressable onPress={changeToKg}>
              <View
                style={[
                  gStyle.lanContainer,
                  lang === "kg"
                    ? { borderColor: "yellow" }
                    : { borderColor: "#320548" },
                ]}
              >
                <Image
                  style={{ width: 20, objectFit: "scale-down" }}
                  source={KG}
                />
                <Text
                  style={[
                    gStyle.langText,
                    lang === 'kg' && {color: 'yellow'},
                    { fontFamily: "Montserrat Semibold" },
                  ]}
                >
                  Кыргызча
                </Text>
              </View>
            </Pressable>
            <Pressable onPress={changeToRus}>
              <View
                style={[
                  gStyle.lanContainer,
                ]}
              >
                <Image
                  style={{ width: 20, objectFit: "scale-down" }}
                  source={RUS}
                />
                <Text
                  style={[
                    gStyle.langText,
                    lang === 'rus' && {color: 'yellow'},
                    { fontFamily: "Montserrat Semibold" },
                  ]}
                >
                  На русском
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
        <View style={gStyle.section}>
          {menuItems.map((item, index) => {
            return (
              <CustomButton
                onPress={() => onPress(item.name)}
                title={lang === "kg" ? item.titleKg : item.titleRus}
                key={index}
                img={item.img}
                name={item.name}
              />
            );
          })}
        </View>
        <Pressable onPress={() => navigation.navigate("about")}>
          <Text style={[gStyle.about, { fontFamily: "Montserrat Semibold" }]}>
            {lang === "kg" ? "Тиркеме жөнүндө" : "О приложений"}
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};
