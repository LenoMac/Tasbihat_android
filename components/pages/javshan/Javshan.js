import React, { useRef } from "react";
import { View, FlatList, Text, Dimensions, StyleSheet } from "react-native";
import JavshanItem from "./JavshanItem";
import Card from "../../atoms/card/javshan-card/Card";
// import { useLanguageState } from "../../../states/language/useLanguageState";

export const Javshan = () => {
  // const { lang, loadLanguage } = useLanguageState();
  const [page, setPage] = React.useState(Number(0));

  // const saveIndex = async (value) => {
  //   try {
  //     await AsyncStorage.setItem("savedIndex", value.toString());
  //     setPage(value);
  //   } catch (e) {
  //     console.log("Error saving index", e);
  //   }
  // };

  // const handleScroll = (event) => {
  //   const { x } = event.nativeEvent.contentOffset;
  //   const currentIndex = Math.round(x / Dimensions.get("window").width);
  //   // saveIndex(currentIndex);
  // };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Card />
        {/* <View style={styles.javshanContainer}>
          <FlatList
            data={JavshanItem}
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
            initialNumToRender={100}
          />
        </View>
        <View style={styles.javshanEndContainer}>
          <Text>
            Субхаанака йаа лаа илааа иллаа антал амаанал амаана холлиснаа
            минан-наар
          </Text>
          <Text>{page + 1}/100</Text>
        </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    backgroundColor: "#320548",
  },
  container: {
    paddingHorizontal: 12,
    paddingVertical: 20,
    paddingBottom: 100,
  },
});
