import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Menu } from "./screens/Menu";
import { Shahada } from "./screens/Shahada";
import { Tasbihat } from "./screens/Tasbihat";
import { Sur } from "./screens/Sur";
import Prayer from "./screens/Prayer";
import { Javshan } from "./screens/Javshan";
import Tafrijia from "./screens/Tafrijia";
import { Fajr } from "./screens/Fajr";
import { Zuhr } from "./screens/Zuhr";
import { Asr } from "./screens/Asr";
import { Isha } from "./screens/Isha";
import { Magrib } from "./screens/Magrib";
import React from "react";
// Импорт Суры
import Al_Fatiha from "./SurScreens/Al_Fatiha";
import Al_Asr from "./SurScreens/Al_Asr";
import AlHumaza from "./SurScreens/AlHumaza"
import AlFil from "./SurScreens/AlFil"
import Kuraysh from "./SurScreens/Kuraysh"
import AlMaun from "./SurScreens/AlMaun"
import AlKavsar from "./SurScreens/AlKavsar";
import AlKafirun from "./SurScreens/AlKafirun"
import AnNasr from "./SurScreens/AnNasr"
import AlMasad from "./SurScreens/AlMasad"
import AlIhlas from "./SurScreens/AlIhlas"
import AlFalak from "./SurScreens/AlFalak"
import AnNas from "./SurScreens/AnNas"
// Импорт О нас
import About from "./screens/About";

const Stack = createNativeStackNavigator();
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
        <Stack.Screen
          name="Shahada"
          component={Shahada}
          options={{
            // headerShown: false,
            headerBackButtonMenuEnabled: false,
            // headerRight: {},
          }}
        />
        <Stack.Screen
          name="Tasbihat"
          component={Tasbihat}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Sur"
          component={Sur}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Prayer"
          component={Prayer}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Javshan"
          component={Javshan}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Tafrijia"
          component={Tafrijia}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Fajr"
          component={Fajr}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Zuhr"
          component={Zuhr}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Acr"
          component={Asr}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Isha"
          component={Isha}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Magrib"
          component={Magrib}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="al-Fatiha"
          component={Al_Fatiha}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="al-Asr"
          component={Al_Asr}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="al-Humaza"
          component={AlHumaza}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="al-Fil"
          component={AlFil}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Kuraysh"
          component={Kuraysh}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="al-Kavsar"
          component={AlKavsar}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="al-Kafirun"
          component={AlKafirun}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="an-Nasr"
          component={AnNasr}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="al-Masad"
          component={AlMasad}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="al-Ihlas"
          component={AlIhlas}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="al-Falak"
          component={AlFalak}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="an-Nas"
          component={AnNas}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="al-Maun"
          component={AlMaun}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="about"
          component={About}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigate;
