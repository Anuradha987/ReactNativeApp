import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Dimensions } from "react-native";
import { useFonts } from 'expo-font';
const windowWidth = Dimensions.get('window').width;

function FixedFooterOrderItem(props) {  

  const [loaded] = useFonts({
    poppinsregular: require('../assets/fonts/Poppins-Regular.ttf'),
    poppins700: require('../assets/fonts/poppins-700.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.placeOrderBtn} onPress={props.onPress}>
        <Text style={styles.placeAnOrder}>PLACE AN ORDER</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: "rgba(14,14,14,1)",
    shadowOffset: {
      width: 3,
      height: -3
    },
    elevation: 24,
    shadowOpacity: 1,
    shadowRadius: 8,
    backgroundColor:'rgba(0,0,0,0.5)', 
    width:windowWidth,
    borderTopLeftRadius: 15, 
    borderTopRightRadius: 15,
    // alignItems:'flex-end'
  },
  placeOrderBtn: {
    height: 46,
    backgroundColor: "rgba(123,0,255,1)",
    borderRadius: 25,
    width: 200,
    shadowColor: "rgba(123,0,255,1)",
    shadowOffset: {
      width: 0,
      height: 0
    },
    elevation: 30,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(124,1,255,1)",
    marginTop: 5,
    marginLeft: 113,
    alignItems:'center',
  },
  placeAnOrder: {
    fontFamily: "poppins700",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    textAlign: "center",
    marginTop: 8,
    //marginLeft: 7
  }
});

export default FixedFooterOrderItem;
