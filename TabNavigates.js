import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./components/pages/ramadan_homepage/Home";
import Navigate from "./Navigate";
import Quran from "./components/pages/quran/Quran";

// Импорт иконки
import { Foundation } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    left: 0,
    right: 0,
    height: 80,
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
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Text>
                <FontAwesome5 name="book-open" size={50} color="#F2BB4A" />
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
