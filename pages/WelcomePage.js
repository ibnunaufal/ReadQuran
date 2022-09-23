import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../components/Button";
import Color from "../utils/Colors";
// import  from "../components/Items";

export default function WelcomePage() {
  return (
    <View style={[styles.flex1, styles.bg]}>
      <View style={[styles.flex1, styles.centerize]}>
        <Text>Quran</Text>
      </View>
      <View style={[styles.flex1]}>
        <View style={[styles.flex1, styles.centerize, styles.content]}>
          <Button>Find by Juz</Button>
          <Button>Find by Surah</Button>
          <Button>Latest Opened</Button>
          <Pressable style={styles.credits}>
            <Text style={styles.textCredits}>Credits</Text>
          </Pressable>
          {/* <Button leftSide={"Juz 1"} rightSide={"1"} /> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  centerize: {
    justifyContent: "center",
    alignItems: "center",
  },
  credits: {
    marginTop: 5,
    borderBottomColor: Color.primary,
    borderBottomWidth: 2,
  },
  textCredits: {
    fontWeight: "bold",
    color: Color.primary,
  },
  bg: {
    backgroundColor: Color.bg
  }
});
