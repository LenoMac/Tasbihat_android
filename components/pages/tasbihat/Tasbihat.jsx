import React from "react";
import { View, Text, Pressable, StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";
import NavigateButton from "../../atoms/buttons/navigates/NavigateButton";


export const Tasbihat = () => {
  const navigation = useNavigation();
  const listOfTasbih = [
    { title: "Фаджр", name: "Fajr" },
    { title: "Зухр", name: "Zuhr" },
    { title: "Аср", name: "Asr" },
    { title: "Магриб", name: "Magrib" },
    { title: "Иша", name: "Isha" },
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
                <NavigateButton
                  title={item.title}
                  key={index}
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
        width: '100%',
        height: '100%',
        backgroundColor: '#320548'
    },
    container: {
        paddingHorizontal: 12,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',

    }, 
    button_list: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        marginTop: 50
    }
})