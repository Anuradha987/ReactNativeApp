import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
import { RadioButton } from 'react-native-paper';
import {icons, dummyData} from './../constants';
import { useFonts } from 'expo-font';

const CardItem = ({item, isSelected, onPress}) => {
    const [checked, setChecked] = React.useState('first');
        //poppins insert
  const [loaded] = useFonts({
    poppinsregular: require('../assets/fonts/Poppins-Regular.ttf'),
    poppins700: require('../assets/fonts/poppins-700.ttf'),
  });

  if (!loaded) {
       return null;
  }   
  return(
      <TouchableOpacity style={{flexDirection:'row', 
                                height:70, 
                                alignItems:'center', 
                                marginTop: 20, 
                                paddingHorizontal:20, 
                                marginHorizontal:10,
                                borderWidth:3, 
                                borderRadius:10, 
                                borderColor: isSelected ? 'rgba(156,141,240,1)' :'gray', 
                                }}
                                onPress={onPress}
>
          <View style={styles.imageRowFiller}>
            <Image source = {item.icon} style={styles.image} />
          </View>
          <Text style={styles.cardName}>{item.name}</Text>
          <Image source={isSelected ? icons.check_on : icons.check_off}
                 style={styles.radioBtn}
          />
      </TouchableOpacity>
  )}

const styles = StyleSheet.create({
  imageRowFiller: {
    width:60, 
    height:40, 
    alignItems:'center', 
    justifyContent:'center', 
    borderTopWidth:2, 
    borderBottomWidth:2,
    borderRadius:6, 
    borderColor:'gray',
  },
  image: {
    width: 35,
    height:35, 
  }, 
  cardName: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    marginLeft: 23,
    flex:1, 
  },
  radioBtn:{
    height:25, width:25, 
  }, 
 
})
  export default CardItem;