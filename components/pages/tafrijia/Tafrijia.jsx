import {
  View,
  Text,
  ScrollView,
  Image,
  Vibration,
  Platform,
  StyleSheet,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Subtitle from "../../atoms/titles/subtitle/Subtitle";
import ArabicText from "../../atoms/texts/arabic/ArabicText";
import Counter from "../../atoms/buttons/counter/Counter";

export default function Tafrijia() {
  const [number, setNumber] = useState(0);
  const handlePress = () => {
    setNumber((prev) => prev + 1);
    saveNumber(number + 1);
    Platform.OS === "android" && Vibration.vibrate(50);
  };
  const numberZero = () => {
    setNumber((prev) => (prev < 1 ? 0 : prev - 1));
    saveNumber(number < 1 && 1);
  };
  const handleLongPress = () => {
    setNumber(0);
    saveNumber(0);
    Platform.OS === "android" && Vibration.vibrate(70);
  };
  useEffect(() => {
    loadSavedNumbers();
  }, []);
  const loadSavedNumbers = async () => {
    try {
      const savedNumber = await AsyncStorage.getItem("savedNumber");
      if (savedNumber !== null) {
        setNumber(parseInt(savedNumber, 10));
      }
    } catch (error) {
      console.error("Error loading saved number", error);
    }
  };
  const saveNumber = async (value) => {
    try {
      await AsyncStorage.setItem("savedNumber", value.toString());
    } catch (error) {
      console.error("Error saving number", error);
    }
  };

  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <ArabicText
              text="اَللَّهُمَّ صَلِّ صلاةً كَامِلَةً وَسَلِّمْ سَلاَمًا تَامًّا عَلَى
              سَيِّدِنَا مُحَمَّدٍ الَّذِي تَنْحَلُّ بِهِ الْعُقَدُ وَتَنْفَرِجُ
              بِهِ الْكُرَبُ وَتُقْضَى بِهِ الْحَوَائِجُ وَتُنَالُ بِهِ
              الرَّغَائِبُ وَحُسْنُ الْخَوَاتِمِ وَيُسْتَسْقَى الْغَمَامُ
              بِوَجْهِهِ الْكَرِيمِ وَعَلَى آلِهِ وَصَحْبِهِ فِي كُلِّ لَمْحَةٍ
              وَنَفَسٍ بِعَدَدِ كُلِّ مَعْــلُومٍ لَك"
            />
          </View>
          <View style={styles.rusArea}>
            <Subtitle title="Транскрипция" />
            <Text style={styles.rusText}>
              Аллахумма салли салятан камилятан васаллим саляман тамман ‘аля
              сайидина Мухамадини-ллязи танхалю бихиль-‘укаду ватанфариджу
              бихиль-курабу ватукза бихиль-хаваиджу ватуналю бихи-рагаибу
              вахуснуль-хаватим. Ваюстаскаль-гамаму биваджхихиль-кярими ва‘аля
              алихи ва сахбихи фи кули лямхатин ванафасин би'адади кули
              ма‘люммин ляк
            </Text>
          </View>
        </View>
      </ScrollView>
      <Counter />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    backgroundColor: "#320548",
  },
  container: {
    paddingHorizontal: 12,
    paddingVertical: 20,
    paddingBottom: 300,
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  arabicText: {
    color: "white",
    fontSize: 30,
    fontFamily: "Medium",
  },
  rusArea: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  rusText: {
    color: "white",
    fontSize: 18,
    fontFamily: "Medium",
    lineHeight: 25,
  },
});
