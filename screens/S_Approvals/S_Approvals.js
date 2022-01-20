import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import CupertinoSegmentWithTwoTabs from "./../../components/CupertinoSegmentWithTwoTabs";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


function PendingReq() {
   return (
<View><Text>Pending</Text></View>
   );
}
  


function CompletedReq() {
  return (
    <View><Text>Completed</Text></View>
  );
}

const Tab = createMaterialTopTabNavigator();

const S_Approvals = () => {
  return (
    <View style={styles.container}>

      <View style={styles.searchingBarColumn}>
        <View style={styles.searchingBar}>
          <TextInput
            placeholder="Search a service..."
            returnKeyType="go"
            placeholderTextColor="rgba(194,97,250,1)"
            selectionColor="rgba(250,245,245,1)"
            clearButtonMode="while-editing"
            style={styles.serviceSearch}
          ></TextInput>
          <EvilIconsIcon
            name="search"
            style={styles.searchIcon}
          ></EvilIconsIcon>
        </View>

        
      <NavigationContainer independent={true} >
        <Tab.Navigator >
          <Tab.Screen name="Pending" component={PendingReq} />
          <Tab.Screen name="Completed" component={CompletedReq} />
        </Tab.Navigator>
      </NavigationContainer>
  </View>
   </View> 
  )
}
const styles = StyleSheet.create({});
export default S_Approvals


