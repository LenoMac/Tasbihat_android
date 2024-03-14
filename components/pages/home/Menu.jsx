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
    backgroundColor: "#2E0A30",
  },
  container_row: {
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 100,
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
});
