import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function Login(props) {
  return (
    <View style={styles.container}>

      <View style={styles.backgroundImageStack}>
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
        </ImageBackground>
        
        <Text style={styles.text1}>Hey, Welcome Back!</Text>
        <Text style={styles.text2}>Let&#39;s SIgn You In</Text>
        <View style={styles.rect}>
          <Text style={styles.usernamelbl}>Username</Text>
          <View style={styles.usernameView}>
            <TextInput
              placeholder="kkk"
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
              placeholder="ggg"
              placeholderTextColor="rgba(230, 230, 230,1)"
              secureTextEntry={true}
              maxLength={"null"}
              returnKeyType="go"
              clearButtonMode="while-editing"
              style={styles.passwordtxt}
            ></TextInput>
            <Icon name="cake" style={styles.showPasswordIcon}></Icon>
          </View>

          <Text style={styles.forgotPasswordtxt}>Forgot Password?</Text>
          <TouchableOpacity style={styles.signInBtn}>
            <Text style={styles.signIn}>Sign In</Text>
          </TouchableOpacity>
          <Text style={styles.text3}>
            Don&#39;t have an account? Create Account
          </Text>
        </View>
      </View>
    </View>
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
    flexDirection: "row"
  },
  backgroundImage_imageStyle: {
    opacity: 0.74
  },
  image1Filler: {
    flex: 1,
    flexDirection: "row"
  },
  image1: {
    height: 143,
    width: 112,
    marginRight: 130,
    marginTop: 81
  },
  text1: {
    top: 334,
    left: 42,
    position: "absolute",
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)"
  },
  text2: {
    top: 361,
    left: 42,
    position: "absolute",
    fontFamily: "poppins-regular",
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
    fontFamily: "poppins-regular",
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
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    height: 43,
    marginLeft: 14,
    marginRight: 15
  },
  passwordlbl: {
    fontFamily: "poppins-regular",
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
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    height: 43,
    flex: 1,
    marginRight: 18,
    marginLeft: 13
  },
  showPasswordIcon: {
    color: "rgba(128,128,128,1)",
    fontSize: 15,
    height: 16,
    width: 14,
    marginRight: 15,
    marginTop: 14
  },
  forgotPasswordtxt: {
    fontFamily: "poppins-regular",
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
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    marginTop: 15,
    marginLeft: 8,
    marginRight: 7
  },
  text3: {
    fontFamily: "poppins-regular",
    color: "rgba(137,137,137,1)",
    fontSize: 12,
    textAlign: "center",
    alignSelf: "flex-end",
    marginTop: 14,
    marginRight: 27
  },
  backgroundImageStack: {
    flex: 1
  }
});

export default Login;
