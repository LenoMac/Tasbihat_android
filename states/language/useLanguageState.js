import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useLanguageState = () => {
  const [lang, setLang] = useState("kg");

  useEffect(() => {
    loadLanguage();
  }, []);

  const loadLanguage = async () => {
    try {
      const savedLanguage = await AsyncStorage.getItem("currentLanguage");
      setLang(savedLanguage);
      console.log(savedLanguage);
    } catch (error) {
      console.error("Error loading language", error);
    }
  };

  return lang;
};
