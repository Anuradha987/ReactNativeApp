import React from 'react'
import { View, Text } from 'react-native'
import { FONTS } from '../constants'


const Header = ({containerStyle, title, leftComponent, rightComponent}) => {
    return (
        <View style={{flexDirection: 'row', ...containerStyle}}>

           {/* left */}
           {leftComponent}

           {/* title */}
           <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', }}>
               <Text style={{fontSize:18, color: '#9c8df0',letterSpacing:0.5, fontWeight: "bold"}}> {title} </Text>
           </View>
           
           {/* right */}
           {rightComponent}
        </View>
    )
}

export default Header
