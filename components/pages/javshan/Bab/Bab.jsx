import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { JavshanItem } from "../JavshanItem";
import Mecca from "../../../../assets/backgrouds/Mecca.jpg";
import Right from "../../../../assets/icons/Right.png";
import Left from "../../../../assets/icons/Left.png";

export const Bab = React.memo(({ route }) => {
  const { page } = route.params;
  const [currentPage, setCurrentPage] = useState(page);
  const babItem = JavshanItem.find((item) => item.id === currentPage);

  const goAhead = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const goBack = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <View style={styles.main}>
      <ImageBackground
        style={styles.backImage}
        source={Mecca}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <Pressable>
            <View style={styles.card}>
              <ScrollView style={styles.scroll}>
                <Text style={styles.title}>{currentPage}-БАБ</Text>
                {babItem.firstText ? (
                  <Text style={styles.subtitle}>{babItem.firstText}</Text>
                ) : null}
                <Text style={styles.text}>{babItem.javshantext}</Text>
                <Text style={styles.endText}>{babItem.secondText}</Text>
              </ScrollView>
            </View>
          </Pressable>
        </View>
        <View style={styles.buttons}>
          <Pressable onPress={goBack}>
            <View style={styles.btn}>
              <Image source={Left} />
            </View>
          </Pressable>
          <Pressable onPress={goAhead}>
            <View style={styles.btn}>
              <Image source={Right} />
            </View>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
});

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    backgroundColor: "#320548",
  },
  container: {
    paddingHorizontal: 12,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "90%",
  },
  card: {
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 16,
    paddingHorizontal: 25,
    paddingVertical: 20,
    pointerEvents: "box-only",
    transform: [{ scale: 0.9 }],
  },
  title: {
    fontFamily: "Bold",
    fontSize: 20,
    color: "yellow",
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "Bold",
    fontSize: 18,
    color: "white",
    // textAlign: "center",
  },
  text: {
    fontSize: 18,
    lineHeight: 30,
    fontFamily: "Medium",
    color: "white",
  },
  endText: {
    color: "yellow",
    fontSize: 18,
    fontFamily: "Bold",
    marginTop: 12,
  },
  backImage: {
    height: "100%",
    width: "100%",
  },
  scroll: {
    // backgroundColor:'red',
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 50,
    position: "absolute",
    bottom: 40,
    right: 0,
    left: 0,
  },
  btn: {
    backgroundColor: "rgba(0, 0, 0, .5)",
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 10,
  },
});
