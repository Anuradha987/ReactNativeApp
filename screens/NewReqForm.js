import React, { Component, } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity, FlatList
} from "react-native";
import MaterialChipWithImageAndCloseButton from "../components/MaterialChipWithImageAndCloseButton";
import MaterialRadio from "../components/MaterialRadio";
// <Text style={styles.br}>━━━━━━━━━━━━━━━━━━━━━━━━━</Text>
function NewReqForm(props) {
  return (
    <View style={styles.container}>
    <FlatList showsVerticalScrollIndicator={true}
        ListHeaderComponent={
            <View>
      <View style={styles.rect1}>
        <Text style={styles.pageTitle}>New Service or Trade Request</Text>
        <Text style={styles.paragraph}>
          Need a help? Couldn&#39;t find a solution. Let others know and hrlp
          you!
        </Text>   
        
         <View style ={{height: 1, marginVertical: 9, marginLeft: 10, backgroundColor: "rgba(175,172,172,1)",}}></View>
      </View>
      <View style={styles.rectRow}>
        <View style={styles.rect}></View>
        <Text style={styles.newRequest}>New Request</Text>
      </View>
      <Text style={styles.tolbl}>To*</Text>
      <TextInput
        placeholder=""
        clearButtonMode="while-editing"
        returnKeyType="next"
        style={styles.totxt}
      ></TextInput>
      <Text style={styles.titlelbl}>Title *</Text>
      <TextInput
        placeholder=""
        clearButtonMode="while-editing"
        autoCapitalize="sentences"
        returnKeyType="next"
        maxLength={40}
        style={styles.titletxt}
      ></TextInput>
      <Text style={styles.descriptionlbl}>Description</Text>
      <TextInput
        placeholder=""
        clearButtonMode="while-editing"
       // maxLength={"null"}
        numberOfLines={4}
        multiline={true}
        autoCapitalize="sentences"
        returnKeyType="next"
        style={styles.descriptiontxt}
      ></TextInput>
      <Text style={styles.categorylbl}>Category *</Text>
      <TextInput
        placeholder=""
        clearButtonMode="while-editing"
        returnKeyType="next"
        //maxLength={"null"}
        style={styles.placeholder3}
      ></TextInput>
      <Text style={styles.priority}>Priority *</Text>
      <Text style={styles.location}>Location</Text>
      <TextInput
        placeholder=""
        clearButtonMode="while-editing"
        returnKeyType="done"
       // maxLength={"null"}
        style={styles.locationtxt}
      ></TextInput>
      <Text style={styles.attachmentslbl}>Attachments</Text>
      <View style={styles.attachmentstxtStack}>
        <TextInput
          placeholder=""
          returnKeyType="done"
         // maxLength={"null"}
          style={styles.attachmentstxt}
        ></TextInput>
        <MaterialChipWithImageAndCloseButton
          style={styles.materialChipWithImageAndCloseButton}
        ></MaterialChipWithImageAndCloseButton>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.submit}>SUBMIT</Text>
      </TouchableOpacity>
      <View style={styles.highRadioBtnRow}>
        <MaterialRadio style={styles.highRadioBtn}></MaterialRadio>
        <View style={styles.redDot}></View>
        <Text style={styles.high}>High</Text>
        <View style={styles.mediumRadioBtnStack}>
          <MaterialRadio style={styles.mediumRadioBtn}></MaterialRadio>
          <View style={styles.yellowDot}></View>
        </View>
        <Text style={styles.medium}>Medium</Text>
        <MaterialRadio style={styles.lowRadioBtn}></MaterialRadio>
        <View style={styles.greenDot}></View>
        <Text style={styles.low}>Low</Text>
      </View>
      </View>}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(15,30,69,1)"
  },
  rect1: {
    height: 140,
    shadowColor: "rgba(28,28,28,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 45,
    shadowOpacity: 1,
    shadowRadius: 15,
    borderWidth: 0,
    borderColor: "#000000",
    marginTop: 109
  },
  pageTitle: {
    fontFamily: "poppins-700",
    color: "rgba(224,224,224,1)",
    fontSize: 17,
    marginTop: 17,
    marginLeft: 30
  },
  paragraph: {
    fontFamily: "poppins-regular",
    color: "rgba(234,234,234,1)",
    fontSize: 12,
    textAlign: "justify",
    marginTop: 26,
    marginLeft: 30
  },
  br: {
    fontFamily: "roboto-regular",
    color: "rgba(175,172,172,1)",
    marginTop: 13,
    marginLeft: 18,
    marginRight: 10
  },
  rect: {
    width: 40,
    height: 40,
    backgroundColor: "#E6E6E6"
  },
  newRequest: {
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    width: 249,
    height: 21,
    textAlign: "center",
    marginLeft: 8,
    marginTop: 10
  },
  rectRow: {
    height: 40,
    flexDirection: "row",
    marginTop: -212,
    marginLeft: 15,
    marginRight: 72
  },
  tolbl: {
    fontFamily: "poppins-regular",
    color: "rgba(170,170,170,1)",
    marginTop: 186,
    marginLeft: 35
  },
  totxt: {
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    height: 42,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "rgba(255,0,246,1)",
    width: 329,
    fontSize: 15,
    marginLeft: 28
  },
  titlelbl: {
    fontFamily: "poppins-regular",
    color: "rgba(170,170,170,1)",
    marginTop: 24,
    marginLeft: 35
  },
  titletxt: {
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    height: 42,
    width: 329,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "rgba(255,0,246,1)",
    fontSize: 15,
    marginLeft: 28
  },
  descriptionlbl: {
    fontFamily: "poppins-regular",
    color: "rgba(170,170,170,1)",
    marginTop: 25,
    marginLeft: 35
  },
  descriptiontxt: {
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    height: 142,
    width: 329,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "rgba(255,0,246,1)",
    fontSize: 15,
    marginLeft: 28
  },
  categorylbl: {
    fontFamily: "poppins-regular",
    color: "rgba(170,170,170,1)",
    marginTop: 25,
    marginLeft: 37
  },
  placeholder3: {
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    height: 42,
    width: 333,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "rgba(255,0,246,1)",
    fontSize: 15,
    marginLeft: 28
  },
  priority: {
    fontFamily: "poppins-regular",
    color: "rgba(170,170,170,1)",
    marginTop: 24,
    marginLeft: 37
  },
  location: {
    fontFamily: "poppins-regular",
    color: "rgba(170,170,170,1)",
    marginTop: 67,
    marginLeft: 37
  },
  locationtxt: {
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    height: 42,
    width: 333,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "rgba(255,0,246,1)",
    fontSize: 15,
    marginLeft: 28
  },
  attachmentslbl: {
    fontFamily: "poppins-regular",
    color: "rgba(170,170,170,1)",
    marginTop: 24,
    marginLeft: 36
  },
  attachmentstxt: {
    top: 0,
    position: "absolute",
    fontFamily: "poppins-regular",
    color: "#121212",
    height: 42,
    width: 333,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "rgba(255,0,246,1)",
    left: 0,
    fontSize: 15
  },
  materialChipWithImageAndCloseButton: {
    width: 150,
    height: 32,
    position: "absolute",
    left: 8,
    top: 5
  },
  attachmentstxtStack: {
    width: 333,
    height: 42,
    marginLeft: 28
  },
  button: {
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
    marginTop: 39,
    marginLeft: 94,
    marginRight: 96
  },
  submit: {
    fontFamily: "poppins-700",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
    marginLeft: 15
  },
  highRadioBtn: {
    height: 34,
    width: 34
  },
  redDot: {
    width: 22,
    height: 22,
    backgroundColor: "rgba(255,51,51,1)",
    borderRadius: 11,
    marginLeft: 3,
    marginTop: 6
  },
  high: {
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    height: 19,
    width: 49,
    marginLeft: 4,
    marginTop: 8
  },
  mediumRadioBtn: {
    height: 34,
    width: 34,
    position: "absolute",
    left: 0,
    top: 0
  },
  yellowDot: {
    top: 6,
    left: 33,
    width: 22,
    height: 22,
    position: "absolute",
    backgroundColor: "rgba(255,238,51,1)",
    borderRadius: 11
  },
  mediumRadioBtnStack: {
    width: 55,
    height: 34
  },
  medium: {
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    height: 19,
    width: 56,
    marginLeft: 5,
    marginTop: 8
  },
  lowRadioBtn: {
    height: 34,
    width: 34,
    marginLeft: 14
  },
  greenDot: {
    width: 22,
    height: 22,
    backgroundColor: "rgba(68,255,51,1)",
    borderRadius: 11,
    marginLeft: 1,
    marginTop: 6
  },
  low: {
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    height: 19,
    width: 49,
    marginLeft: 4,
    marginTop: 8
  },
  highRadioBtnRow: {
    height: 34,
    flexDirection: "row",
    marginTop: -292,
    marginLeft: 28,
    marginRight: 4
  }
});

export default NewReqForm;
