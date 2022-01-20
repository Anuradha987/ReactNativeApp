import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

function FixedFooter(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.placeOrderBtn}>
        <Text style={styles.editOrder}>EDIT ORDER</Text>
      </TouchableOpacity>
      <View style={styles.placeOrderBtnFiller}></View>
      <TouchableOpacity style={styles.placeOrderBtn1}>
        <Text style={styles.cancelOrder}>CANCEL ORDER</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: "rgba(28,28,28,1)",
    shadowOffset: {
      width: 3,
      height: -3
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
    flexDirection: "row"
  },
  placeOrderBtn: {
    height: 46,
    backgroundColor: "rgba(123,0,255,1)",
    borderRadius: 25,
    width: 145,
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
    marginLeft: 184,
    marginTop: 5
  },
  editOrder: {
    fontFamily: "poppins-700",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    textAlign: "center",
    marginTop: 11,
    marginLeft: 7
  },
  placeOrderBtnFiller: {
    flex: 1,
    flexDirection: "row"
  },
  placeOrderBtn1: {
    height: 46,
    backgroundColor: "rgba(123,0,255,1)",
    borderRadius: 25,
    width: 145,
    shadowColor: "rgba(123,0,255,1)",
    shadowOffset: {
      width: 0,
      height: 0
    },
    elevation: 36,
    shadowOpacity: 0.5,
    shadowRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(124,1,255,1)",
    marginRight: 186,
    marginTop: 5
  },
  cancelOrder: {
    fontFamily: "poppins-700",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    textAlign: "center",
    width: 134,
    height: 24,
    marginTop: 12,
    marginLeft: 7
  }
});

export default FixedFooter;
