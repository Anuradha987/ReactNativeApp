import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { useFonts } from 'expo-font';

function SuccessPopUp(props) {
    //poppins insert
    const [loaded] = useFonts({
      poppinsregular: require('../assets/fonts/Poppins-Regular.ttf'),
      poppins700: require('../assets/fonts/poppins-700.ttf'),
    });
  
    if (!loaded) {
      return null;
    }

  return (
    <View style={[styles.container, props.style]}>
      
  <View style={styles.box}> 
  <TouchableOpacity style={styles.closeBtnStack}><Icon name="circle-with-cross" style={styles.closeBtn}></Icon></TouchableOpacity>
      <View style={styles.successImageStack}>
          <Image
            source={require("../assets/images/success1.png")}
            resizeMode="contain"
            style={styles.successImage}
          ></Image>    
      </View>
      
      <Text style={styles.successMsg}>
        Your request has been sent. Wait a few moments for the owner&#39;s
        approval.
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
closeBtnStack:{
  flexDirection:'row',
  alignSelf:'flex-end', 
  right:-20,
  top:-20,
},
closeBtn: {
  color: "#63f066",
  fontSize: 50,
  right: 8, 
},
successImageStack: {
  top:-20,
  height: 200,
  alignItems:'center', 
},
successImage: {
  width: 295,
  height: 180,
  position: "absolute",
},
successMsg: {
  fontFamily: "poppinsregular",
  color: "rgba(188,188,188,1)",
  textAlign: "justify",
  marginHorizontal: 24
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
  marginVertical: 30,
  alignSelf:'center', 
},
okCool: {
  fontFamily: "poppins700",
  color: "rgba(255,255,255,1)",
  textAlign: "center",
  marginTop: 14,
}
});

export default SuccessPopUp;
