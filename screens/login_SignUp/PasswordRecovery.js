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
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { useFonts } from 'expo-font';

function PasswordRecovery({navigation}) {
    //poppins insert
  const [loaded] = useFonts({
    poppinsregular: require('./../../assets/fonts/Poppins-Regular.ttf'),
    poppins700: require('./../../assets/fonts/poppins-700.ttf'),
  });

  if (!loaded) {
       return null;
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backBtn}
        onPress={()=>navigation.goBack()}
      >
        <Icon name="arrow-left" style={styles.backIcon}></Icon>
      </TouchableOpacity>
      <Image
        source={require("./../../assets/images/passwordRecover.png")}
        resizeMode="cover"
        style={styles.image1}
      ></Image>
      <Text style={styles.forgotPassword}>Forgot Password?</Text>
      <Text style={styles.text1}>
        Don&#39;t worry!. Please enter the email address associated with your
        account.
      </Text>
      <Text style={styles.emaillbl}>Email</Text>
      <View style={styles.emailView}>
        <TextInput
          placeholder=""
          placeholderTextColor="rgba(230, 230, 230,1)"
          selectionColor="rgba(255,255,255,1)"
          returnKeyType="done"
          clearButtonMode="while-editing"
          keyboardType="email-address"
          style={styles.emailtxt}
        ></TextInput>
      </View>
      <TouchableOpacity style={styles.submitBtn}>
        <Text style={styles.submit}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
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
    marginLeft: 27,
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
  forgotPassword: {
    fontFamily: "poppinsregular",
    color: "rgba(156,141,240,1)",
    fontSize: 30,
    marginTop: 48,
    marginLeft: 41
  },
  text1: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    marginTop: 6,
    marginLeft: 41,
    marginRight: 31
  },
  emaillbl: {
    fontFamily: "poppinsregular",
    color: "rgba(170,170,170,1)",
    width: 290,
    height: 21,
    marginTop: 32,
    marginLeft: 41, 
    marginBottom:3
  },
  emailView: {
    height: 43,
    backgroundColor: "rgba(81,81,81,0.4)",
    borderRadius: 8,
    marginLeft: 33,
    marginRight: 37
  },
  emailtxt: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    height: 43,
    marginLeft: 13,
    marginRight: 12
  },
  submitBtn: {
    height: 47,
    backgroundColor: "rgba(123,0,255,1)",
    borderRadius: 8,
    marginTop: 127,
    marginLeft: 33,
    marginRight: 37
  },
  submit: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    marginTop: 13,
    marginLeft: 7,
    marginRight: 9
  }
});

export default PasswordRecovery;
