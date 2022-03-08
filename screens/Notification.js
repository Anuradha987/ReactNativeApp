import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function Notification(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21,31,40,1)"
  },
  rect: {
    width: 227,
    height: 180,
    backgroundColor: "#E6E6E6",
    marginTop: 226,
    marginLeft: 47
  }
});

export default Notification;
