import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import fajr from "../../../assets/icons/active-fajr.png";
import zuhr from "../../../assets/icons/active-zuhr.png";
import asr from "../../../assets/icons/active-asr.png";
import magrib from "../../../assets/icons/active-magrib.png";
import isha from "../../../assets/icons/active-isha.png";
import TasbihatBtns from "../../atoms/buttons/navigates/tasbihat_btns/Tasbihat_btns";
export const Tasbihat = () => {
  const navigation = useNavigation();
  const listOfTasbih = [
    { title: "Фаджр", name: "Fajr", img: fajr },
    { title: "Зухр", name: "Zuhr", img: zuhr },
    { title: "Аср", name: "Asr", img: asr },
    { title: "Магриб", name: "Magrib", img: magrib },
    { title: "Иша", name: "Isha", img: isha },
  ];

  const onPress = (name) => {
    navigation.navigate(name);
  };
  return (
    <View style={styles.tasbih}>
      <View style={styles.container}>
        <View style={styles.button_list}>
          {listOfTasbih.map((item, index) => {
            return (
              <TasbihatBtns
                title={item.title}
                key={index}
                img={item.img}
                name={item.name}
                onPress={() => onPress(item.name)}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tasbih: {
    width: "100%",
    height: "100%",
    backgroundColor: "#2E0A30",
  },
  container: {
    paddingHorizontal: 12,
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  button_list: {
    height: '100%',
    flexDirection: "column",
    gap: 20,
    justifyContent: 'center'
  },
});
