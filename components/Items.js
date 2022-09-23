import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Color from "../utils/Colors";

export default function Items({ leftSide, rightSide, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.press}>
      <View style={styles.container}>
        <Text style={styles.text}>{leftSide}</Text>
        <Text style={styles.text}>{rightSide}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: {
    backgroundColor: Color.primary,
    flexDirection: "row",
    height: Dimensions.get("window").height / 15,
    width: Dimensions.get("window").width - 50,
    borderRadius: 10
  },
  text: {
    color: Color.bg,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10
  }
});
