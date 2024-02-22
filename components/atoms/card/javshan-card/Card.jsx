import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useState } from "react";
import Input from "../../buttons/input/Input";
import BabButton from "../../buttons/javshan_button/BabButton";

export default function Card() {
  const initialData = Array.from({ length: 100 }, (_, index) => ({
    key: `${index}`,
    item: { number: index + 1 },
  }));

  const [number, setNumber] = React.useState();
  const [data, setData] = React.useState(initialData);
  const [filteredText, setFilteredText] = useState("");
  
  const handleChangeText = (text) => {
    setFilteredText(text);
    filterData(text);
  };

  const filterData = (text) => {
    const filteredData = initialData.filter((item) =>
      item.item.number.toString().includes(text)
    );
    setData(filteredData);
  };

  return (
    <View style={styles.container}>
      <Input number={number} handleChangeText={handleChangeText} />
      <FlatList
        style={styles.flatList}
        data={data}
        // numColumns={2}
        renderItem={({ item }) => {
          return <BabButton setNumber={setNumber} num={item.item.number} />;
        }}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20
  },
  flatList: {
    marginTop: 10,
    paddingBottom: 50,
  },
});
