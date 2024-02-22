import { View, Text, StyleSheet } from "react-native";
import React from "react";
import NavigateButton from "../../atoms/buttons/navigates/NavigateButton";
import {useNavigation} from "@react-navigation/native"
// Импорт лого
import shahada from "../../../assets/img/Shahada.png";
import tasbih from "../../../assets/img/Tasbih.png"
import sur from "../../../assets/img/Sur.png"
import dua from "../../../assets/img/Dua.png"
import javshan from "../../../assets/img/Javshan.png"
import tafrijia from "../../../assets/img/Tafrijia.png"
import Secondary from "../../atoms/buttons/secondary/Secondary";

export default function Menu_buttons() {
  const navigation = useNavigation()
  const menuItems = [
    { titleRus: "Шахада", titleKg: "Шахада", name: "Shahada", img: shahada },
    { titleRus: "Тасбихат", titleKg: "Тасбихат", name: "Tasbihat", img: tasbih },
    { titleRus: "Суры", titleKg: "Сүрөлөр", name: "Sur", img: sur },
    { titleRus: "Молитвы", titleKg: "Дубалар", name: "Prayer", img: dua },
    { titleRus: "Жавшан", titleKg: "Жавшан", name: "Javshan", img: javshan },
    { titleRus: "Тафрижия", titleKg: "Тафрижия", name: "Tafrijia", img: tafrijia },
  ];
  
  const onPress = (name) => {
    navigation.navigate(name)
  }

  return (
    <View style={styles.btn_container}>
      {menuItems.map((item, index) => {
        return (
         <NavigateButton
            onPress={() => onPress(item.name)}
            title={item.titleRus}
            img={item.img}
            key={index}
          />
        )
      })}
      <Secondary  title="О приложений"/>
    </View>
  );
}

const styles = StyleSheet.create({
    btn_container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
    }
})