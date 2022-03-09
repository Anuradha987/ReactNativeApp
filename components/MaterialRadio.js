import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {dummyData, icons} from './../constants'

function MaterialRadio(props, {isSelected}) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      {/* <Icon
        name={props.selected ? "radiobox-marked" : "radiobox-blank"}
        style={styles.radioIcon}
      ></Icon> */}
          <Image source={isSelected ? icons.check_on : icons.check_off}
                 style={styles.availableRadioBtn}
          />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "transparent"
  },
  radioIcon: {
    color: "#3F51B5",
    fontSize: 23,
    lineHeight: 24,
    margin: 0
  }, 
  availableRadioBtn: {
    height: 25,
    width: 25, 
    marginLeft:20, 
    marginRight:10
  },
});

export default MaterialRadio;
