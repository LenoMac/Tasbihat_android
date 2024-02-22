import React, { useEffect, useState } from "react";
import {
  Text,
  Image,
  View,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Menu_buttons from "../../molecules/menu_buttons/Menu_buttons";
import AsyncStorage from "@react-native-async-storage/async-storage";
// // Импорт Лого и изображении
import Logo from "../../../assets/img/Logo.png";
import Language from "../../atoms/language/Language";

// Импорт языка
import { useLanguageState } from "../../../states/language/useLanguageState";
export const Menu = () => {
  const { lang, setLang, loadLanguage } = useLanguageState();
  useEffect(() => {
    const fetchData = async () => {
      await loadLanguage();
      // setLang(lang);
    };
    fetchData();
  }, [lang, setLang, loadLanguage]);

  if (lang === null)
    return (
      <View style={styles.loadPage}>
        <ActivityIndicator size="50px" color="#7100A9" />
      </View>
    );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container_row}>
        <Image style={styles.logo} source={Logo} />
        <Text style={styles.title}>ТАСБИХАТ</Text>
        <Language />
        <Menu_buttons />
      </View>
      {/* <View style={gStyle.menu}>
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
      </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 12,
    backgroundColor: "#320548",
  },
  container_row: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 30,
    gap: 20,
  },
  logo: {
    alignSelf: "center",
  },
  title: {
    color: "#F2BB4A",
    fontSize: 23,
    textAlign: "center",
    fontFamily: "Bold",
  },
  loadPage: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#320548",
  },
});
