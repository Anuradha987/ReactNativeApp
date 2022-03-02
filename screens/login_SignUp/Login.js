import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity, 
  Dimensions, 
  SafeAreaView
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { useFonts } from 'expo-font';

//react-native-keyboard-aware-scrollview

const { width } = Dimensions.get('window');

function Login({navigation}) {
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
        <ImageBackground
          source={require("./../../assets/images/blob-scene-haikei(copy).png")}
          resizeMode="stretch"
          style={styles.backgroundImage}
          imageStyle={styles.backgroundImage_imageStyle}
        >
          <View style={styles.image1Filler}></View>
          <Image
            source={require("./../../assets/images/1.png")}
            resizeMode="cover"
            style={styles.image1}
          ></Image>
        <Text style={styles.text1}>Hey, Welcome Back!</Text>
        <Text style={styles.text2}>Let&#39;s SIgn You In</Text>
        <View style={styles.rect}>
          <Text style={styles.usernamelbl}>Username</Text>
          <View style={styles.usernameView}>
            <TextInput
              placeholder=""
              placeholderTextColor="rgba(230, 230, 230,1)"
              selectionColor="rgba(255,255,255,1)"
              returnKeyType="next"
              clearButtonMode="while-editing"
              style={styles.usernametxt}
            ></TextInput>
          </View>
          <Text style={styles.passwordlbl}>Password</Text>
          <View style={styles.passwordView}>
          <TextInput
              placeholder=""
              placeholderTextColor="rgba(255,255,255,1)"
              secureTextEntry={true}
              returnKeyType="done"
              clearButtonMode="while-editing"
              style={styles.passwordtxt}
            ></TextInput>
            <Icon name="cake" style={styles.showPasswordIcon}></Icon>
          </View>
          <TouchableOpacity onPressIn={()=>navigation.navigate('PasswordRecovery')}>
            <Text style={styles.forgotPasswordtxt}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signInBtn}>
            <Text style={styles.signIn}>Sign In</Text>
          </TouchableOpacity>
             <View style={styles.goToRegister}>
                <Text style={styles.text3}>Don&#39;t have an account?</Text>
                <TouchableOpacity onPressIn={()=>navigation.navigate('Register')}>
                  <Text style={styles.registerText} >Create Account</Text>
                </TouchableOpacity>
        </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21,31,40,1)"
  },
  backgroundImage: {
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(15,15, 15,0.74)",
    flexDirection: "row", 
    flex:1
  },
  backgroundImage_imageStyle: {
    opacity: 0.74
  },
  image1Filler: {
    width:width,
    flex: 1,
    flexDirection: "row",
    justifyContent:'center', 
  },
  image1: {
    height: 143,
    width: 112,
    marginRight: 150,
    marginTop: 81, 
  },
  text1: {
    top: 334,
    left: 42,
    position: "absolute",
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)"
  },
  text2: {
    top: 361,
    left: 42,
    position: "absolute",
    fontFamily: "poppinsregular",
    color: "rgba(156,141,240,1)",
    fontSize: 30
  },
  rect: {
    top: 424,
    left: 16,
    height: 352,
    position: "absolute",
    backgroundColor: "rgba(6,0,38,0.65)",
    borderRadius: 20,
    right: 16
  },
  usernamelbl: {
    fontFamily: "poppinsregular",
    color: "rgba(170,170,170,1)",
    marginTop: 32,
    marginLeft: 26
  },
  usernameView: {
    height: 43,
    backgroundColor: "rgba(81,81,81,0.4)",
    borderRadius: 8,
    marginLeft: 19,
    marginRight: 19
  },
  usernametxt: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    height: 43,
    marginLeft: 14,
    marginRight: 15
  },
  passwordlbl: {
    fontFamily: "poppinsregular",
    color: "rgba(170,170,170,1)",
    width: 290,
    height: 21,
    marginTop: 23,
    marginLeft: 26
  },
  passwordView: {
    height: 43,
    backgroundColor: "rgba(81,81,81,0.4)",
    borderRadius: 8,
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 18
  },
  passwordtxt: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    height: 43,
    flex: 1,
    marginRight: 18,
    marginLeft: 14
  },
  showPasswordIcon: {
    color: "rgba(128,128,128,1)",
    fontSize: 15,
    height: 14,
    width: 14,
    marginRight: 15,
    marginTop: 14
  },
  forgotPasswordtxt: {
    fontFamily: "poppinsregular",
    color: "rgba(137,137,137,1)",
    fontSize: 12,
    textAlign: "right",
    alignSelf: "flex-end",
    marginTop: 7,
    marginRight: 19
  },
  signInBtn: {
    height: 47,
    backgroundColor: "rgba(123,0,255,1)",
    borderRadius: 8,
    marginTop: 44,
    marginLeft: 18,
    marginRight: 20
  },
  signIn: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    marginTop: 15,
    marginLeft: 8,
    marginRight: 7
  },
  backgroundImageStack: {
    flex: 1,
  }, 
   goToRegister:{
    flexDirection:'row',
    alignItems:'center', 
    justifyContent:'center', 
    marginTop: 10,
  },
    text3: {
    fontFamily: "poppinsregular",
    color: "rgba(137,137,137,1)",
    fontSize: 12,
    textAlign: "center",
    alignSelf: "flex-end",
    marginRight: 15
  },
  registerText:{
    fontFamily: 'poppinsregular',
    color: 'rgba(156,141,240,1)',
    fontSize: 12, 
   textDecorationLine: 'underline', 
  },
});

export default Login;
