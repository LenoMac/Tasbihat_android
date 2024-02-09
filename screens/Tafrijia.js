import {
  View,
  Text,
  ScrollView,
  Image,
  Vibration,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import { gStyle } from "../Style/Style";
import Close from "../img/Close.png";
import { TouchableWithoutFeedback } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "./Header";

export default function Tafrijia() {
  const [number, setNumber] = useState(0);
  const handlePress = () => {
    setNumber((prev) => prev + 1);
    saveNumber(number + 1);
    Platform.OS === "android" && Vibration.vibrate(50);
  };
  const numberZero = () => {
    setNumber((prev) => (prev < 1 ? 0 : prev - 1));
    saveNumber(number - 1);
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
    <View style={gStyle.main}>
      <View style={gStyle.header}>
        <Header title="ТАФРИЖИЯ" />
      </View>
      <ScrollView>
        <View
          style={[
            { padding: 20, gap: 20, paddingBottom: 150 },
            gStyle.container,
          ]}
        >
          <View>
            <Text
              style={[
                gStyle.textArabic,

                { textAlign: "right", fontFamily: "Montserrat Medium" },
              ]}
            >
              اَللَّهُمَّ صَلِّ صلاةً كَامِلَةً وَسَلِّمْ سَلاَمًا تَامًّا عَلَى
              سَيِّدِنَا مُحَمَّدٍ الَّذِي تَنْحَلُّ بِهِ الْعُقَدُ وَتَنْفَرِجُ
              بِهِ الْكُرَبُ وَتُقْضَى بِهِ الْحَوَائِجُ وَتُنَالُ بِهِ
              الرَّغَائِبُ وَحُسْنُ الْخَوَاتِمِ وَيُسْتَسْقَى الْغَمَامُ
              بِوَجْهِهِ الْكَرِيمِ وَعَلَى آلِهِ وَصَحْبِهِ فِي كُلِّ لَمْحَةٍ
              وَنَفَسٍ بِعَدَدِ كُلِّ مَعْــلُومٍ لَك
            </Text>
          </View>
          <View style={{ gap: 20 }}>
            <Text
              style={[
                gStyle.text,
                {
                  color: "#F2BB4A",
                  fontSize: 20,
                  fontFamily: "Montserrat Semibold",
                },
              ]}
            >
              Транскрипция
            </Text>
            <Text
              style={[
                gStyle.textRus,
                gStyle.text,
                { textAlign: "left", fontFamily: "Montserrat Medium" },
              ]}
            >
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
      <View style={gStyle.counter}>
        <TouchableWithoutFeedback
          onLongPress={handleLongPress}
          onPress={numberZero}
        >
          <View style={gStyle.closeIcon}>
            <Image source={Close} />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handlePress}>
          <View style={gStyle.current_number}>
            <Text style={gStyle.text3}>{number}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}
