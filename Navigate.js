import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Menu } from "./components/pages/home/Menu";
import { Shahada } from "./components/pages/shahada/Shahada";
import { Tasbihat } from "./components/pages/tasbihat/Tasbihat";
import { Sur } from "./components/pages/sur/Sur";
import Prayer from "./components/pages/dua/Prayer";
import { Javshan } from "./components/pages/javshan/Javshan";
import Tafrijia from "./components/pages/tafrijia/Tafrijia";
import { Fajr } from "./components/pages/fajr/Fajr";
import { Zuhr } from "./components/pages/zuhr/Zuhr";
import { Asr } from "./components/pages/asr/Asr";
import { Isha } from "./components/pages/isha/Isha";
import { Magrib } from "./components/pages/magrib/Magrib";
import home from "./assets/img/Home.png";
import React from "react";
import { Image } from "react-native";
import { Bab } from "./components/pages/javshan/Bab/Bab";
// Импорт Суры
import Al_Fatiha from "./components/pages/SurScreens/Al_Fatiha";
import Al_Asr from "./components/pages/SurScreens/Al_Asr";

// Импорт О нас
// import AlHumaza from "./SurScreens/AlHumaza"
// import AlFil from "./SurScreens/AlFil"
// import Kuraysh from "./SurScreens/Kuraysh"
// import AlMaun from "./SurScreens/AlMaun"
// import AlKavsar from "./SurScreens/AlKavsar";
// import AlKafirun from "./SurScreens/AlKafirun"
// import AnNasr from "./SurScreens/AnNasr"
// import AlMasad from "./SurScreens/AlMasad"
// import AlIhlas from "./SurScreens/AlIhlas"
// import AlFalak from "./SurScreens/AlFalak"
// import AnNas from "./SurScreens/AnNas"
import About from "./components/pages/about-app/About";
const Stack = createNativeStackNavigator();

const screens = [
  { name: "Shahada", title: "ШАХАДА", component: Shahada, id: "1" },
  { name: "Tasbihat", title: "ТАСБИХАТ", component: Tasbihat, id: "1" },
  { name: "Sur", title: "СУРЫ", component: Sur, id: "1" },
  { name: "Prayer", title: "МОЛИТВЫ", component: Prayer, id: "1" },
  { name: "Javshan", title: "ЖАВШАН", component: Javshan, id: "1" },
  { name: "Tafrijia", title: "ТАФРИЖИЯ", component: Tafrijia, id: "1" },
  // { name: "About", title: "О НАС", component: About, id: "1" },
  { name: "Fajr", title: "ФАДЖР", component: Fajr, id: "1" },
  { name: "Zuhr", title: "ЗУХР", component: Zuhr, id: "1" },
  { name: "Asr", title: "АСР", component: Asr, id: "1" },
  { name: "Magrib", title: "МАГРИБ", component: Magrib, id: "1" },
  { name: "Isha", title: "ИША", component: Isha, id: "1" },
  { name: "al-Fatiha", title: "СУРЫ", component: Al_Fatiha, id: "1" },
  { name: "al-Asr", title: "СУРЫ", component: Al_Asr, id: "1" },
  { name: "Bab", title: "ЖАВШАН", component: Bab, id: "1" },
];

function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{
            headerShown: false,
          }}
        />
        {screens.map((item) => {
          return (
            <Stack.Screen
              name={item.name}
              key={item.id}
              component={item.component}
              options={{
                title: `${item.title}`,
                headerStyle: { backgroundColor: "#320548" },
                headerTitleAlign: "center",
                headerTitleStyle: { color: "white" },
                headerTintColor: "white",
                headerRight: () => (
                  <Image
                    style={{ width: 35, height: 35, objectFit: "scale-down" }}
                    source={home}
                  />
                ),
              }}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigate;
