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
        <Language />
        <Menu_buttons />
      </View>
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
    paddingTop: 60,
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
