import React from 'react'; 
import {
  TouchableOpacity, 
  Text, 
  StyleSheet,
} from 'react-native';

const TextButton = ({buttonContainerStyle, lable, labelSTyle, onPress})=>{
  return(
    <TouchableOpacity style={{alignItems:'center', justifyContent:'center', backgroundColor: 'white'}}
                      onPress={onPress}>
    <Text style={{color: 'black'}}>
      {lable}
    </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

})

export default TextButton;