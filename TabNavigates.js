import { Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./components/pages/ramadan_homepage/Home";
import Navigate from "./Navigate";
import Quran from "./components/pages/quran/Quran";
import shahadaLogo from "./assets/img/Shaha_logo.png"
// Импорт иконки
import { Foundation } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import HomeNavigates from "./HomeNavigates";

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    left: 0,
    right: 0,
    height: 60,
    elevation: 10,
    borderColor: "#5D2559",
    backgroundColor: "#5D2559",
  },
};

export default function TabNavigates() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Text>
                <Foundation
                  name="home"
                  size={focused ? 38 : 34}
                  color="white"
                />
              </Text>
            );
          },
        }}
        name="home"
        component={HomeNavigates}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Text>
                <FontAwesome5 name="book-open" size={40} color="white" />
                {/* <Image style={{width: 80, height: 80, objectFit: 'scale-down'}} source={shahadaLogo}/> */}
              </Text>
            );
          },
        }}
        name="quran"
        component={Quran}
      />
      <Tab.Screen
        name="menu"
        component={Navigate}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Text>
                <Entypo name="menu" size={focused ? 38 : 34} color="white" />
              </Text>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
