import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";

function Otp(props) {
  return (
    <View style={styles.container}>
      <View style={styles.backBtn}>
        <Icon name="arrow-left" style={styles.backIcon}></Icon>
      </View>
      <Image
        source={require("./../../assets/images/output-onlinepngtools (6).png")}
        resizeMode="cover"
        style={styles.image1}
      ></Image>
      <Text style={styles.enterOtp}>Enter OTP</Text>
      <Text style={styles.text1}>
        An 4-digit code has been sent to{"\n"}example@gmail.com
      </Text>
      <View style={styles.codeGroup1Stack}>
        <View style={styles.codeGroup1}>
          <View style={styles.rect}></View>
          <TextInput
            placeholder="1"
            clearButtonMode="while-editing"
            keyboardType="phone-pad"
            returnKeyType="next"
            maxLength={1}
            style={styles.textInput}
          ></TextInput>
          <View style={styles.rect1}></View>
          <TextInput
            placeholder="1"
            clearButtonMode="while-editing"
            keyboardType="phone-pad"
            returnKeyType="next"
            maxLength={1}
            style={styles.textInput1}
          ></TextInput>
          <View style={styles.rect2}></View>
          <TextInput
            placeholder="1"
            clearButtonMode="while-editing"
            keyboardType="phone-pad"
            returnKeyType="next"
            maxLength={1}
            style={styles.textInput2}
          ></TextInput>
          <View style={styles.rect4}></View>
        </View>
        <TextInput
          placeholder="1"
          clearButtonMode="while-editing"
          keyboardType="phone-pad"
          returnKeyType="next"
          maxLength={1}
          style={styles.textInput3}
        ></TextInput>
      </View>
      <Text style={styles.text2}>Didn&#39;t received thr code? Resend</Text>
      <TouchableOpacity style={styles.confirmBtn}>
        <Text style={styles.confirm}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21,31,40,1)"
  },
  backBtn: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "rgba(187,189,193,1)",
    borderRadius: 12,
    marginTop: 54,
    marginLeft: 27
  },
  backIcon: {
    color: "rgba(128,128,128,1)",
    fontSize: 20,
    height: 22,
    width: 20,
    marginTop: 9,
    marginLeft: 10
  },
  image1: {
    height: 200,
    borderRadius: 100,
    width: 200,
    alignSelf: "flex-end",
    marginTop: 6,
    marginRight: 86
  },
  enterOtp: {
    fontFamily: "poppins-regular",
    color: "rgba(156,141,240,1)",
    width: 292,
    fontSize: 30,
    height: 45,
    marginTop: 48,
    marginLeft: 34
  },
  text1: {
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 7,
    marginLeft: 34,
    marginRight: 39
  },
  codeGroup1: {
    top: 0,
    left: 0,
    height: 60,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    right: 1
  },
  rect: {
    width: 60,
    height: 60,
    backgroundColor: "rgba(81,81,81,0.4)",
    borderRadius: 8
  },
  textInput: {
    top: 22,
    left: 0,
    position: "absolute",
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    height: 18,
    width: 59,
    textAlign: "center"
  },
  rect1: {
    width: 60,
    height: 60,
    backgroundColor: "rgba(81,81,81,0.4)",
    borderRadius: 8
  },
  textInput1: {
    top: 22,
    left: 85,
    position: "absolute",
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    height: 18,
    width: 59,
    textAlign: "center"
  },
  rect2: {
    width: 60,
    height: 60,
    backgroundColor: "rgba(81,81,81,0.4)",
    borderRadius: 8
  },
  textInput2: {
    top: 22,
    left: 168,
    position: "absolute",
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    height: 18,
    width: 59,
    textAlign: "center"
  },
  rect4: {
    width: 60,
    height: 60,
    backgroundColor: "rgba(81,81,81,0.4)",
    borderRadius: 8
  },
  textInput3: {
    top: 22,
    left: 254,
    position: "absolute",
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    height: 18,
    width: 59,
    textAlign: "center"
  },
  codeGroup1Stack: {
    height: 60,
    marginTop: 46,
    marginLeft: 29,
    marginRight: 33
  },
  text2: {
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 62,
    marginLeft: 32
  },
  confirmBtn: {
    height: 47,
    backgroundColor: "rgba(123,0,255,1)",
    borderRadius: 8,
    marginTop: 33,
    marginLeft: 33,
    marginRight: 37
  },
  confirm: {
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    marginTop: 13,
    marginLeft: 7,
    marginRight: 9
  }
});

export default Otp;
