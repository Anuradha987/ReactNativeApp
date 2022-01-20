import React, {useState, useEffect} from 'react';
import {Text, View, Image, Button, SafeAreaView, SectionList, StatusBar, StyleSheet } from 'react-native';
import { FlatList, TextInput, TouchableOpacity, TouchableHighlight  } from 'react-native-gesture-handler';
import { COLORS, dummyData, FONTS, icons, SIZES } from '../../constants';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ApprovedServReq } from '../../constants/dummyData';

const I_Approvals = () => {
    return (
        <View>
            <Text>Items Approvals</Text>
        </View>
    )
}

export default I_Approvals
