import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useState } from "react";
import kyrgyz from "../../../assets/img/kg.png";
import rus from "../../../assets/img/rus.png";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLanguageState } from "../../../states/language/useLanguageState";
export default function Language() {
  const [active, setActive] = useState(true);
  // const languageState = useLanguageState();

  const handleChangeLanguageToKyrgyz = () => {
    submitLanguage("kg");
    setActive(true);
  };
  const handleChangeLanguageToRu = () => {
    submitLanguage("ru");
    setActive(false);
  };

  const submitLanguage = async (value) => {
    try {
      await AsyncStorage.setItem("currentLanguage", value);
      console.log("🆗");
    } catch (e) {
      console.log("Error saving language", e);
    }
  };

  return (
    <View style={styles.language_container}>
      <Pressable onPress={handleChangeLanguageToKyrgyz}>
        <View style={styles.language_container_row}>
          <Image style={styles.img} source={kyrgyz} />
          <Text style={active == true ? styles.active : styles.title}>
            Кыргызча
          </Text>
        </View>
      </Pressable>
      <Pressable onPress={handleChangeLanguageToRu}>
        <View style={styles.language_container_row}>
          <Image style={styles.img} source={rus} />
          <Text style={active == false ? styles.active : styles.title}>
            Русский
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  language_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    alignItems: "center",
    alignSelf: "center",
  },
  language_container_row: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  img: {
    width: 20,
    height: 20,
    objectFit: "scale-down",
  },
  title: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
  active: {
    color: "yellow",
    fontWeight: "600",
    fontSize: 16,
  },
});
