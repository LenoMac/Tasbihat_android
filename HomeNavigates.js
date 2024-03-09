import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/pages/ramadan_homepage/Home";
import CalendarPage from "./components/pages/calendar/Calendar";

const Stack = createNativeStackNavigator();
export default function HomeNavigates() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="homepage"
        component={Home}
      />
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#2E0A30" },
          headerTitleAlign: "center",
          headerTitleStyle: { color: "white" },
          headerTintColor: "white",
          title: 'КАЛЕНДАРЬ'
        }}
        name="Calendar"
        component={CalendarPage}
      />
    </Stack.Navigator>
  );
}
