import React, { Component, useState } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Text,
    FlatList,
    Animated, 
    Image, 
    Picker 
  } from "react-native";

export default class PickerComponent extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
          requestStatus: 'All', 
        }
      }
  render() {
    return (
        <View>
        <Picker
          style={styles.picker} itemStyle={styles.pickerItem}
          selectedValue={this.state.requestStatus}
          onValueChange={(itemValue) => this.setState({requestStatus: itemValue})}
        >
          <Picker.Item label="All" value="All" />
          <Picker.Item label="Accepted" value="Accepted" />
          <Picker.Item label="Pending" value="Pending" />
          <Picker.Item label="Rejected" value="Rejected" />
          <Picker.Item label="Completed" value="Completed" />
        </Picker>
        </View>
    );
  }
}
const styles = StyleSheet.create({
    picker: {
      color:'#DDDDDD',
      width: 200,
     bottom:7, 
     left:5
    },
  });
  

