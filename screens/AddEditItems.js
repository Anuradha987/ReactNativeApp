import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  TextInput
} from "react-native";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialRadio from "../components/MaterialRadio";

function AddEditItems({navigation}) {
      //poppins insert
  const [loaded] = useFonts({
    poppinsregular: require('../assets/fonts/Poppins-Regular.ttf'),
    poppins700: require('../assets/fonts/poppins-700.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.itemImagesScrollArea}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={
            styles.itemImagesScrollArea_contentContainerStyle
          }
        >
          <View style={styles.cameraFrameStack}>
            <View style={styles.cameraFrame}>
              <MaterialIconsIcon
                name="add-a-photo"
                style={styles.cameraIcon}
              ></MaterialIconsIcon>
            </View>
            <ImageBackground
              source={require("../assets/images/hawaiian-pizza.jpg")}
              resizeMode="cover"
              style={styles.image}
              imageStyle={styles.image_imageStyle}
            >
              <EntypoIcon
                name="circle-with-cross"
                style={styles.closeIcon}
              ></EntypoIcon>
            </ImageBackground>
            <ImageBackground
              source={require("../assets/images/pizza.jpg")}
              resizeMode="cover"
              style={styles.image2}
              imageStyle={styles.image2_imageStyle}
            >
              <EntypoIcon
                name="circle-with-cross"
                style={styles.closeIcon2}
              ></EntypoIcon>
            </ImageBackground>
          </View>
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.submitBtn}>
        <Text style={styles.submit}>SUBMIT</Text>
      </TouchableOpacity>


      <View style={styles.backBtnRow}>
        <View style={styles.backBtn}></View>
        <Text style={styles.addNewItems}>Add new Items</Text>
      </View>


      
      <TextInput
        placeholder=""
        clearButtonMode="while-editing"
        returnKeyType="next"
        maxLength={"null"}
        style={styles.categorytxt}
      ></TextInput>
      <Text style={styles.categorylbl}>Category *</Text>
      <TextInput
        placeholder=""
        clearButtonMode="while-editing"
        maxLength={"null"}
        numberOfLines={4}
        multiline={true}
        autoCapitalize="sentences"
        returnKeyType="next"
        style={styles.descriptiontxt}
      ></TextInput>
      <Text style={styles.descriptionlbl}>Description</Text>
      <TextInput
        placeholder=""
        clearButtonMode="while-editing"
        autoCapitalize="sentences"
        returnKeyType="next"
        maxLength={40}
        style={styles.nametxt}
      ></TextInput>
      <Text style={styles.namelbl}>Name *</Text>
      <Text style={styles.statuslbl}>Status *</Text>
      <Text style={styles.tradingMethodlbl}>Trading Method *</Text>
      <TextInput
        placeholder=""
        clearButtonMode="while-editing"
        returnKeyType="next"
        maxLength={"null"}
        style={styles.tradingMethodtxt}
      ></TextInput>
      <Text style={styles.pricelbl}>Price *</Text>
      <TextInput
        placeholder=""
        clearButtonMode="while-editing"
        returnKeyType="done"
        maxLength={"null"}
        selectionColor="rgba(255,255,255,1)"
        keyboardType="numbers-and-punctuation"
        style={styles.pricetxt}
      ></TextInput>
      <Text style={styles.totalAmountlbl}>Total Amount Available *</Text>
      <TextInput
        placeholder=""
        clearButtonMode="while-editing"
        returnKeyType="next"
        maxLength={"null"}
        keyboardType="numbers-and-punctuation"
        style={styles.totalAmounttxt}
      ></TextInput>
      <View style={styles.availableRadioBtnRow}>
        <MaterialRadio style={styles.availableRadioBtn}></MaterialRadio>
        <Text style={styles.availablelbl}>Available</Text>
        <MaterialRadio style={styles.mediumRadioBtn1}></MaterialRadio>
        <Text style={styles.notAvailablelbl}>Not Available</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21,31,40,1)"
  },
  itemImagesScrollArea: {
    width: 342,
    height: 122,
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 139,
    marginLeft: 15
  },
  itemImagesScrollArea_contentContainerStyle: {
    width: 342,
    height: 122
  },
  cameraFrame: {
    top: 0,
    width: 122,
    height: 122,
    position: "absolute",
    borderWidth: 2,
    borderColor: "rgba(246,102,242,1)",
    left: 111,
    borderRadius: 33,
    borderStyle: "dashed"
  },
  cameraIcon: {
    color: "rgba(255,0,246,1)",
    fontSize: 40,
    height: 40,
    width: 40,
    marginTop: 41,
    marginLeft: 41
  },
  image: {
    top: 0,
    left: 0,
    width: 140,
    height: 122,
    position: "absolute"
  },
  image_imageStyle: {},
  closeIcon: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    height: 33,
    width: 30,
    marginLeft: 108
  },
  image2: {
    top: 0,
    left: 142,
    width: 122,
    height: 122,
    position: "absolute"
  },
  image2_imageStyle: {},
  closeIcon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    height: 33,
    width: 30,
    marginLeft: 91
  },
  cameraFrameStack: {
    width: 264,
    height: 122
  },
  submitBtn: {
    height: 46,
    backgroundColor: "rgba(123,0,255,1)",
    borderRadius: 25,
    shadowColor: "rgba(123,0,255,1)",
    shadowOffset: {
      height: 0,
      width: 0
    },
    elevation: 30,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    marginTop: 754,
    marginLeft: 94,
    marginRight: 96
  },
  submit: {
    fontFamily: "poppins700",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
    marginLeft: 15
  },
  backBtn: {
    width: 40,
    height: 40,
    backgroundColor: "#E6E6E6"
  },
  addNewItems: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    width: 243,
    height: 21,
    textAlign: "center",
    marginLeft: 6,
    marginTop: 10
  },
  backBtnRow: {
    height: 40,
    flexDirection: "row",
    marginTop: -1024,
    marginLeft: 15,
    marginRight: 71
  },
  categorytxt: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    height: 42,
    width: 326,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "rgba(255,0,246,1)",
    fontSize: 15,
    marginTop: 506,
    marginLeft: 24
  },
  categorylbl: {
    fontFamily: "poppinsregular",
    color: "rgba(170,170,170,1)",
    marginTop: -63,
    marginLeft: 30
  },
  descriptiontxt: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    height: 142,
    width: 321,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "rgba(255,0,246,1)",
    fontSize: 15,
    marginTop: -188,
    marginLeft: 24
  },
  descriptionlbl: {
    fontFamily: "poppinsregular",
    color: "rgba(170,170,170,1)",
    marginTop: -163,
    marginLeft: 30
  },
  nametxt: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    height: 42,
    width: 321,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "rgba(255,0,246,1)",
    fontSize: 15,
    marginTop: -88,
    marginLeft: 24
  },
  namelbl: {
    fontFamily: "poppinsregular",
    color: "rgba(170,170,170,1)",
    marginTop: -63,
    marginLeft: 30
  },
  statuslbl: {
    fontFamily: "poppinsregular",
    color: "rgba(170,170,170,1)",
    marginTop: 433,
    marginLeft: 30
  },
  tradingMethodlbl: {
    fontFamily: "poppinsregular",
    color: "rgba(170,170,170,1)",
    marginTop: 59,
    marginLeft: 30
  },
  tradingMethodtxt: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    height: 42,
    width: 326,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "rgba(255,0,246,1)",
    fontSize: 15,
    marginLeft: 24
  },
  pricelbl: {
    fontFamily: "poppinsregular",
    color: "rgba(170,170,170,1)",
    marginTop: 29,
    marginLeft: 30
  },
  pricetxt: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    height: 42,
    width: 326,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "rgba(255,0,246,1)",
    fontSize: 15,
    marginLeft: 24
  },
  totalAmountlbl: {
    fontFamily: "poppinsregular",
    color: "rgba(170,170,170,1)",
    marginTop: -325,
    marginLeft: 30
  },
  totalAmounttxt: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    height: 42,
    width: 326,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "rgba(255,0,246,1)",
    fontSize: 15,
    marginLeft: 24
  },
  availableRadioBtn: {
    height: 34,
    width: 34
  },
  availablelbl: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    height: 20,
    width: 92,
    marginLeft: 1,
    marginTop: 8
  },
  mediumRadioBtn1: {
    height: 34,
    width: 34,
    marginLeft: 1
  },
  notAvailablelbl: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    height: 20,
    width: 131,
    marginLeft: 1,
    marginTop: 8
  },
  availableRadioBtnRow: {
    height: 34,
    flexDirection: "row",
    marginTop: 56,
    marginLeft: 38,
    marginRight: 43
  }
});

export default AddEditItems;
