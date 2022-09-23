import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Color from "../utils/Colors";

export default function Button({ children, onPress }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.press, pressed && styles.pressed]}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: {
    backgroundColor: Color.primary,
    flexDirection: "row",
    height: Dimensions.get("window").height / 15,
    width: Dimensions.get("window").width / 2,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5
  },
  text: {
    color: Color.bg,
    fontWeight: "bold"
  },
  pressed: {
    opacity: 0.5
  }
});
