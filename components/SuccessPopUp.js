import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function SuccessPopUp(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.failedImageStackStack}>
        <View style={styles.failedImageStack}>
          <Image
            source={require("../assets/images/image_processing20191101-29669.png")}
            resizeMode="contain"
            style={styles.failedImage}
          ></Image>
          <Icon name="circle-with-cross" style={styles.closeBtn}></Icon>
        </View>
        <View style={styles.rect}></View>
      </View>
      <Text style={styles.failedMsg}>
        Your request has been sent. Wait a few moments for the owner&#39;s
        approval.
      </Text>
      <TouchableOpacity style={styles.okBtn}>
        <Text style={styles.okCool}>OK. COOL!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(21,31,40,1)",
    borderRadius: 13
  },
  failedImage: {
    top: 49,
    width: 265,
    height: 200,
    position: "absolute",
    left: 0
  },
  closeBtn: {
    top: 0,
    position: "absolute",
    color: "#63f066",
    fontSize: 50,
    right: 0
  },
  failedImageStack: {
    top: 0,
    left: 0,
    width: 308,
    height: 249,
    position: "absolute"
  },
  rect: {
    top: 6,
    width: 39,
    height: 43,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 25,
    right: 5
  },
  failedImageStackStack: {
    width: 308,
    height: 249,
    marginTop: -23,
    marginLeft: 24
  },
  failedMsg: {
    fontFamily: "poppins-regular",
    color: "rgba(188,188,188,1)",
    textAlign: "justify",
    marginTop: 28,
    marginLeft: 24
  },
  okBtn: {
    height: 46,
    backgroundColor: "#63f066",
    borderRadius: 25,
    width: 200,
    shadowColor: "rgba(99,240,102,1)",
    shadowOffset: {
      width: 0,
      height: 0
    },
    elevation: 30,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    alignSelf: "flex-end",
    marginTop: 51,
    marginRight: 54
  },
  okCool: {
    fontFamily: "poppins-700",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    marginTop: 12,
    marginLeft: 8
  }
});

export default SuccessPopUp;
