import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Image, View,Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {dummyData, icons} from './../constants'
import {Pressable} from 'react-native'; 

// https://blog.logrocket.com/create-radio-buttons-react-native/

function MaterialRadio(props,{data, onSelect}) {
  const [userOption, setUserOption] = React.useState(null);
  const selectHandler = (value) => {
    onSelect(value);
    setUserOption(value);
  };

return(
  <View style={{ flexDirection:'row',}}>
  {/* {data.map((item, index) => { */}
  {dummyData.priorityCategory.map((item, index) => {
  return (
    <View style={{flexDirection:'row',}}>
    <Pressable style={[styles.container, props.style]}  onPress={() => selectHandler(item.value)}>
          <Image source={item.value === userOption ? icons.check_on : icons.check_off}
                 style={styles.availableRadioBtn}/>
    </Pressable>
    <View style={[styles.priorityDot, {backgroundColor:item.color}]}></View>
    <Text style={styles.priorityLevel}>{item.value}</Text>
    </View>
)})}</View>)}

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
  highRadioBtn: {
    height: 34,
    width: 34,
  },
  priorityDot: {
    width: 12,
    height:12,
    backgroundColor: 'rgba(255,51,51,1)',
    borderRadius: 6,
    marginLeft: 0,
    marginTop: 12,
  
  },
  priorityLevel: {
    fontFamily: 'poppinsregular',
    color: 'rgba(255,255,255,1)',
    fontSize: 12,
    height: 19,
    width: 60,
    marginLeft: 4,
    marginTop: 8,
  },
});

export default MaterialRadio;
