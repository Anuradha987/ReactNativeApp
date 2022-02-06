import React, { Component, useEffect } from "react";
import { Text, StyleSheet, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { NavigationContainer } from '@react-navigation/native';
import I_Search from '../screens/I_Search/I_Search';
import ViewItems from '../screens/I_Search/ViewItems';

const screens ={
    // I_Search: {screen: I_Search },
    ViewItems: {screen: ViewItems }, 
}
const appNavigaiton = createStackNavigator(screens);

export default createAppContainer(appNavigaiton);