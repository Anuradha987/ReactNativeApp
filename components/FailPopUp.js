import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function FailPopUp(props) {
  return (
    <View style={[styles.container, props.style]}>
      
  <View style={styles.box}> 
  <TouchableOpacity style={styles.closeBtnStack}><Icon name="circle-with-cross" style={styles.closeBtn}></Icon></TouchableOpacity>
      <View style={styles.failureImageStack}>
          <Image
            source={require("../assets/images/faiure1.png")}
            resizeMode="contain"
            style={styles.failureImage}
          ></Image>    
      </View>
      
      <Text style={styles.failureMsg}>
        Oops...Something went wrong. {"\n"}Try again!
      </Text>
      <TouchableOpacity style={styles.okBtn}>
        <Text style={styles.okCool}>OK. COOL!</Text>
      </TouchableOpacity>
      </View>      
         
    </View>
  );
}

const styles = StyleSheet.create({
container: {
  backgroundColor:'transparent' , 
  justifyContent:'center', 
  alignItems:'center', 
  flex:1, 
  width:'100%', height:'100%'
},
box:{
  backgroundColor: "rgba(21,31,40,1)",
  borderRadius: 13,   
  alignItems:'center', 
  top:20,
  width:'90%'
},
closeBtnStack:
{
  flexDirection:'row',
  alignSelf:'flex-end', 
  right:-20,
  top:-20,
},
closeBtn: {
  color: "#f76d6e",
  fontSize: 50,
  right: 8, 
},
failureImageStack: {
  top:-20,
  height: 200,
  alignItems:'center', 
},
failureImage: {
  width: 295,
  height: 180,
  //position: "absolute",
},
failureMsg: {
  fontFamily: "poppins-regular",
  color: "rgba(188,188,188,1)",
  //textAlign: "justify",
  marginHorizontal: 4
},
okBtn: {
  height: 46,
  backgroundColor: "#f76d6e",
  borderRadius: 25,
  width: 200,
  shadowColor: "rgba(247,109,110,1)",
  shadowOffset: {
    width: 0,
    height: 0
  },
  elevation: 30,
  shadowOpacity: 0.5,
  shadowRadius: 10,
  marginVertical: 30,
  alignSelf:'center', 
},
okCool: {
  fontFamily: "poppins-700",
  color: "rgba(255,255,255,1)",
  textAlign: "center",
  marginTop: 14,
}
});

export default FailPopUp;
