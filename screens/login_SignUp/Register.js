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
import EntypoIcon from "react-native-vector-icons/Entypo";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";

function Register(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageStack}>
        <ImageBackground
          source={require("./../../assets/images/blob-scene-haikei.png")}
          resizeMode="stretch"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <View style={styles.rect}>
            <View style={styles.propicCircle}>
              <EntypoIcon name="camera" style={styles.camIcon}></EntypoIcon>
            </View>
            <Text style={styles.namelbl}>Name</Text>
            <View style={styles.nameView}>
              <TextInput
                placeholder=""
                placeholderTextColor="rgba(230, 230, 230,1)"
                selectionColor="rgba(255,255,255,1)"
                returnKeyType="next"
                clearButtonMode="while-editing"
                autoCapitalize="sentences"
                maxLength={"null"}
                style={styles.nametxt}
              ></TextInput>
            </View>
            <Text style={styles.emaillbl}>Email</Text>
            <View style={styles.emailView}>
              <TextInput
                placeholder=""
                placeholderTextColor="rgba(230, 230, 230,1)"
                selectionColor="rgba(255,255,255,1)"
                returnKeyType="next"
                clearButtonMode="while-editing"
                maxLength={"null"}
                keyboardType="email-address"
                style={styles.emailtxt}
              ></TextInput>
            </View>
            <Text style={styles.locationlbl}>Location</Text>
            <View style={styles.locationView}>
              <TextInput
                placeholder=""
                placeholderTextColor="rgba(230, 230, 230,1)"
                selectionColor="rgba(255,255,255,1)"
                returnKeyType="next"
                clearButtonMode="while-editing"
                maxLength={"null"}
                style={styles.locationtxt}
              ></TextInput>
            </View>
            <Text style={styles.usernamelbl}>Username</Text>
            <View style={styles.locationIconStack}>
              <EntypoIcon
                name="location-pin"
                style={styles.locationIcon}
              ></EntypoIcon>
              <View style={styles.usernameView}>
                <TextInput
                  placeholder=""
                  placeholderTextColor="rgba(230, 230, 230,1)"
                  selectionColor="rgba(255,255,255,1)"
                  returnKeyType="next"
                  clearButtonMode="while-editing"
                  maxLength={"null"}
                  style={styles.usernametxt}
                ></TextInput>
              </View>
            </View>
            <Text style={styles.passwordlbl}>Password</Text>
            <View style={styles.passwordView}>
              <TextInput
                placeholder=""
                placeholderTextColor="rgba(230, 230, 230,1)"
                selectionColor="rgba(255,255,255,1)"
                returnKeyType="done"
                clearButtonMode="while-editing"
                secureTextEntry={true}
                maxLength={"null"}
                style={styles.passwordtxt}
              ></TextInput>
              <EntypoIcon
                name="cake"
                style={styles.showPasswordIcon}
              ></EntypoIcon>
            </View>
            <TouchableOpacity style={styles.signInBtn}>
              <Text style={styles.signIn2}>Create Account</Text>
            </TouchableOpacity>
            <Text style={styles.by}>
              By creating account, you agree to our {"\n"}Terms and Conditions.
            </Text>
            <Text style={styles.text3}>Already have an account? Sign In</Text>
          </View>
        </ImageBackground>
        <View style={styles.backBtn}>
          <SimpleLineIconsIcon
            name="arrow-left"
            style={styles.backIcon}
          ></SimpleLineIconsIcon>
        </View>
        <Text style={styles.text1}>
          Hello! Welcome to Quiky App. Get registered and explore what you want.
        </Text>
        <Text style={styles.text2}>Let&#39;s get Started!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21,31,40,1)"
  },
  image: {
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  image_imageStyle: {
    opacity: 0.74
  },
  rect: {
    height: 830,
    backgroundColor: "rgba(6,0,38,0.65)",
    borderRadius: 20,
    marginTop: 251,
    marginLeft: 17,
    marginRight: 15
  },
  propicCircle: {
    width: 110,
    height: 110,
    backgroundColor: "rgba(81,81,81,0.4)",
    borderRadius: 50,
    alignSelf: "flex-end",
    marginTop: 28,
    marginRight: 116
  },
  camIcon: {
    color: "rgba(128,128,128,1)",
    fontSize: 30,
    height: 33,
    width: 30,
    marginTop: 39,
    marginLeft: 41
  },
  namelbl: {
    fontFamily: "poppins-regular",
    color: "rgba(170,170,170,1)",
    width: 290,
    height: 21,
    marginTop: 29,
    marginLeft: 27
  },
  nameView: {
    height: 43,
    backgroundColor: "rgba(81,81,81,0.4)",
    borderRadius: 8,
    marginLeft: 20,
    marginRight: 18
  },
  nametxt: {
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    height: 43,
    marginLeft: 12,
    marginRight: 13
  },
  emaillbl: {
    fontFamily: "poppins-regular",
    color: "rgba(170,170,170,1)",
    width: 290,
    height: 21,
    marginTop: 36,
    marginLeft: 28
  },
  emailView: {
    height: 43,
    backgroundColor: "rgba(81,81,81,0.4)",
    borderRadius: 8,
    marginLeft: 20,
    marginRight: 18
  },
  emailtxt: {
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    height: 43,
    marginLeft: 12,
    marginRight: 13
  },
  locationlbl: {
    fontFamily: "poppins-regular",
    color: "rgba(170,170,170,1)",
    width: 290,
    height: 21,
    marginTop: 35,
    marginLeft: 27
  },
  locationView: {
    height: 43,
    backgroundColor: "rgba(81,81,81,0.4)",
    borderRadius: 8,
    marginLeft: 21,
    marginRight: 17
  },
  locationtxt: {
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    height: 43,
    marginLeft: 12,
    marginRight: 38
  },
  usernamelbl: {
    fontFamily: "poppins-regular",
    color: "rgba(170,170,170,1)",
    width: 290,
    height: 21,
    marginTop: 29,
    marginLeft: 29
  },
  locationIcon: {
    top: 6,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 20,
    width: 14,
    right: 15,
    height: 22
  },
  usernameView: {
    top: 0,
    left: 0,
    height: 43,
    position: "absolute",
    backgroundColor: "rgba(81,81,81,0.4)",
    borderRadius: 8,
    right: 0
  },
  usernametxt: {
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    height: 43,
    marginLeft: 12,
    marginRight: 14
  },
  locationIconStack: {
    height: 43,
    marginLeft: 21,
    marginRight: 17
  },
  passwordlbl: {
    fontFamily: "poppins-regular",
    color: "rgba(170,170,170,1)",
    width: 290,
    height: 21,
    marginTop: 33,
    marginLeft: 29
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
    marginRight: 13,
    marginLeft: 13
  },
  showPasswordIcon: {
    color: "rgba(128,128,128,1)",
    fontSize: 15,
    width: 14,
    height: 16,
    marginRight: 10,
    marginTop: 14
  },
  signInBtn: {
    height: 47,
    backgroundColor: "rgba(123,0,255,1)",
    borderRadius: 8,
    marginTop: 58,
    marginLeft: 21,
    marginRight: 17
  },
  signIn2: {
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    marginTop: 15,
    marginLeft: 8,
    marginRight: 7
  },
  by: {
    fontFamily: "poppins-regular",
    color: "rgba(137,135,135,1)",
    fontSize: 11,
    textAlign: "center",
    marginTop: 9,
    marginLeft: 28,
    marginRight: 17
  },
  text3: {
    fontFamily: "poppins-regular",
    color: "rgba(170,170,170,1)",
    fontSize: 12,
    textAlign: "center",
    marginTop: 31,
    marginLeft: 28,
    marginRight: 25
  },
  backBtn: {
    top: 54,
    left: 27,
    width: 40,
    height: 40,
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(187,189,193,1)",
    borderRadius: 12
  },
  backIcon: {
    color: "rgba(128,128,128,1)",
    fontSize: 20,
    height: 22,
    width: 20,
    marginTop: 9,
    marginLeft: 10
  },
  text1: {
    top: 134,
    left: 37,
    position: "absolute",
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    right: 32
  },
  text2: {
    top: 185,
    left: 37,
    position: "absolute",
    fontFamily: "poppins-regular",
    color: "rgba(156,141,240,1)",
    width: 306,
    fontSize: 30,
    height: 45
  },
  imageStack: {
    flex: 1
  }
});

export default Register;
