import React, { useEffect, useState, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useLanguageState = () => {
  const [lang, setLang] = useState(null);

  const loadLanguage = async () => {
    try {
      const savedLanguage = await AsyncStorage.getItem("language");
      setLang(savedLanguage);
    } catch (error) {
      console.error("Ошибка при загрузке языка", error);
    }
  };

  useEffect(() => {
    loadLanguage();
  }, []);

  return { lang, setLang, loadLanguage };
};
