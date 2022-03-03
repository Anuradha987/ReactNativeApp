import React from 'react'
import { View, Text } from 'react-native'
import { useFonts } from 'expo-font';

const Header = ({containerStyle, title, leftComponent, rightComponent}) => {
  //poppins insert
  const [loaded] = useFonts({
    poppinsregular: require('./../assets/fonts/Poppins-Regular.ttf'),
    poppins700: require('./../assets/fonts/poppins-700.ttf'),
  });

  if (!loaded) {
       return null;
  }
    return (
        <View style={{flexDirection: 'row', ...containerStyle}}>

           {/* left */}
           {leftComponent}

           {/* title */}
           <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', }}>
               <Text style={{fontSize:17, color: '#9c8df0',letterSpacing:0, fontFamily:'poppins700', marginTop:5}}> {title} </Text>
           </View>
           
           {/* right */}
           {rightComponent}
        </View>
    )
}

export default Header
