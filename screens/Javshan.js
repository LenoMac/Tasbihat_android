import React, { useRef } from "react";
import { View, FlatList, Text, Dimensions } from "react-native";
import { gStyle } from "../Style/Style";
import Header from "./Header";
import JavDua from "./DuaScreens/Dua"; 
import { OnboardingItem } from "../OnBoarding";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Javshan = () => {
  const [page, setPage] = React.useState(Number(0));

  React.useEffect(() => {
    loadSavedIndex();
  }, []);

  const loadSavedIndex = async () => {
    try {
      const savedIndex = await AsyncStorage.getItem("savedIndex");
      if(savedIndex !== null){
        setPage(Number(savedIndex))
      }
    } catch (e) {
      console.log(e);
    }
  };

  const saveIndex = async (value) => {
    try{
      await AsyncStorage.setItem("savedIndex", value.toString())
      setPage(value)
    }
    catch(e){
      console.log('Error saving index', e);
    }
  }

  const handleScroll = (event) => {
    const { x } = event.nativeEvent.contentOffset;
    const currentIndex = Math.round(x / Dimensions.get("window").width);
    saveIndex(currentIndex)
  };

  return (
    <View style={gStyle.main}>
      {/* HEADER */}
      <View style={gStyle.header}>
        <Header title="ЖАВШАН" />
      </View>

      <View style={gStyle.container}>
        <View style={gStyle.javshanContainer}>
          <FlatList
            data={JavDua}
            renderItem={({ item }) => (
              <OnboardingItem item={item} key={item.id} />
            )}
            showsHorizontalScrollIndicator={false}
            horizontal
            pagingEnabled
            bounces={false}
            keyExtractor={(item) => item.id}
            onScroll={handleScroll}
            initialScrollIndex={page}
            // initialNumToRender={100}
          />
        </View>
        <View style={gStyle.javshanEndContainer}>
          <Text style={[gStyle.javshanEnd, { fontFamily: "Montserrat Semibold" }]}>
            Субхаанака йаа лаа илааа иллаа антал амаанал амаана холлиснаа
            минан-наар
          </Text>
          <Text style={[gStyle.javshanCounter,{ fontFamily: "Montserrat Semibold" },]}>
            {page + 1}/100
          </Text>
        </View>
      </View>
    </View>
  );
};
