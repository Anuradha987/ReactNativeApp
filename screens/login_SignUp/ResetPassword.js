import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity, 
  SafeAreaView
} from "react-native";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { useFonts } from 'expo-font';

function ResetPassword({navigation}) {
     //poppins insert
  const [loaded] = useFonts({
    poppinsregular: require('./../../assets/fonts/Poppins-Regular.ttf'),
    poppins700: require('./../../assets/fonts/poppins-700.ttf'),
  });

  if (!loaded) {
       return null;
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backBtn}>
        <SimpleLineIconsIcon
          name="arrow-left"
          style={styles.backIcon}
        ></SimpleLineIconsIcon>
      </TouchableOpacity>
      <Image
        source={require("./../../assets/images/resetPassword.png")}
        resizeMode="stretch"
        style={styles.image1}
      ></Image>
      <Text style={styles.resetPassword}>Reset Password</Text>
      <Text style={styles.newPasswordlbl}>New Password</Text>
      <View style={styles.newPasswordView}>
        <TextInput
          placeholder=""
          placeholderTextColor="rgba(230, 230, 230,1)"
          selectionColor="rgba(255,255,255,1)"
          returnKeyType="next"
          clearButtonMode="while-editing"
          secureTextEntry={true}
          style={styles.newPasswordtxt}
        ></TextInput>
        <EntypoIcon name="cake" style={styles.showPasswordIcon2}></EntypoIcon>
      </View>
      <Text style={styles.confirmPasswordlbl}>Confirm Password</Text>
      <View style={styles.confirmPasswordView}>
        <TextInput
          placeholder=""
          placeholderTextColor="rgba(230, 230, 230,1)"
          selectionColor="rgba(255,255,255,1)"
          returnKeyType="done"
          clearButtonMode="while-editing"
          secureTextEntry={true}
          style={styles.conformPasswordtxt}
        ></TextInput>
        <EntypoIcon name="cake" style={styles.showPasswordIcon1}></EntypoIcon>
      </View>
      <TouchableOpacity style={styles.submitBtn}>
        <Text style={styles.submit}>Submit</Text>
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
    marginTop: 60,
    marginLeft: 27
  },
  backIcon: {
    color: '#BBBDC1',
    fontSize: 20,
    height: 22,
    width: 20,
    marginTop: 9,
    marginLeft: 8,
  },
  image1: {
    height: 200,
    borderRadius: 100,
    width: 200,
    marginTop: 6,
    marginLeft: 105
  },
  resetPassword: {
    fontFamily: "poppinsregular",
    color: "rgba(156,141,240,1)",
    width: 292,
    fontSize: 30,
    height: 45,
    marginTop: 48,
    marginLeft: 37
  },
  newPasswordlbl: {
    fontFamily: "poppinsregular",
    color: "rgba(170,170,170,1)",
    width: 290,
    height: 21,
    marginTop: 27,
    marginLeft: 41
  },
  newPasswordView: {
    height: 43,
    backgroundColor: "rgba(81,81,81,0.4)",
    borderRadius: 8,
    flexDirection: "row",
    marginLeft: 33,
    marginRight: 38
  },
  newPasswordtxt: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    height: 43,
    flex: 1,
    marginRight: 15,
    marginLeft: 11
  },
  showPasswordIcon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 15,
    height: 16,
    width: 14,
    marginRight: 10,
    marginTop: 13
  },
  confirmPasswordlbl: {
    fontFamily: "poppinsregular",
    color: "rgba(170,170,170,1)",
    width: 290,
    height: 21,
    marginTop: 30,
    marginLeft: 41
  },
  confirmPasswordView: {
    height: 43,
    backgroundColor: "rgba(81,81,81,0.4)",
    borderRadius: 8,
    flexDirection: "row",
    marginLeft: 33,
    marginRight: 38
  },
  conformPasswordtxt: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    height: 43,
    flex: 1,
    marginRight: 15,
    marginLeft: 10
  },
  showPasswordIcon1: {
    color: "rgba(128,128,128,1)",
    fontSize: 15,
    height: 16,
    width: 14,
    marginRight: 10,
    marginTop: 13
  },
  submitBtn: {
    height: 47,
    backgroundColor: "rgba(123,0,255,1)",
    borderRadius: 8,
    marginTop: 86,
    marginLeft: 33,
    marginRight: 37
  },
  submit: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    marginTop: 15,
    marginLeft: 8,
    marginRight: 7
  }
});

export default ResetPassword;
