import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function FailureComponent(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.tryagainBtn1}>
        <Text style={styles.tryAgain1}>TRY AGAIN</Text>
      </TouchableOpacity>
      <Text style={styles.failedMsg1}>
        Oops...Something went wrong. {"\n"}Try again!
      </Text>
      <View style={styles.failedImage1StackStack}>
        <View style={styles.failedImage1Stack}>
          <Image
            source={require("../assets/images/image_processing20191101-29669.png")}
            resizeMode="contain"
            style={styles.failedImage1}
          ></Image>
          <Icon name="circle-with-cross" style={styles.closeBtn1}></Icon>
        </View>
        <View style={styles.rect1}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(21,31,40,1)",
    borderRadius: 13
  },
  tryagainBtn1: {
    height: 46,
    backgroundColor: "rgba(247,109,110,1)",
    borderRadius: 25,
    width: 200,
    shadowColor: "rgba(247,109,110,1)",
    shadowOffset: {
      height: 0,
      width: 0
    },
    elevation: 30,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    alignSelf: "flex-end",
    marginTop: 338,
    marginRight: 54
  },
  tryAgain1: {
    fontFamily: "poppins-700",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    marginTop: 12,
    marginLeft: 9
  },
  failedMsg1: {
    fontFamily: "poppins-regular",
    color: "rgba(188,188,188,1)",
    textAlign: "justify",
    marginTop: -125,
    marginLeft: 37
  },
  failedImage1: {
    top: 49,
    width: 265,
    height: 200,
    position: "absolute",
    left: 0
  },
  closeBtn1: {
    top: 0,
    position: "absolute",
    color: "#f76d6e",
    fontSize: 50,
    right: 0
  },
  failedImage1Stack: {
    top: 0,
    left: 0,
    width: 308,
    height: 249,
    position: "absolute"
  },
  rect1: {
    top: 6,
    width: 39,
    height: 43,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 25,
    right: 5
  },
  failedImage1StackStack: {
    width: 308,
    height: 249,
    marginTop: -315,
    marginLeft: 24
  }
});

export default FailureComponent;
