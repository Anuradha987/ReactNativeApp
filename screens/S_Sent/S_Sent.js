import React, { Component } from "react";
import { StyleSheet, View, TextInput, ScrollView, } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";

//notifi about the rates, votes and commetns of yours services. 
//details about your requested services. 
//details about upcoming pending services that you have accepted.
//msgs from others. 
//your services graphs, eranings.  
const S_Sent = () => {
    return (
        <View style={styles.container}>
          <View style={styles.rect2RowColumn}>
            <View style={styles.rect2Row}>
              <View style={styles.rect2}></View>
              <View style={styles.rect2Filler}></View>
              <View style={styles.rect3Row}>
                <View style={styles.rect3}>
                  <View style={styles.iconFiller}></View>
                  <FeatherIcon name="edit" style={styles.icon}></FeatherIcon>
                </View>
                <View style={styles.rect5}>
                  <View style={styles.icon1Filler}></View>
                  <MaterialCommunityIconsIcon
                    name="delete-sweep"
                    style={styles.icon1}
                  ></MaterialCommunityIconsIcon>
                </View>
              </View>
            </View>
            <View style={styles.serviceSearch1StackStackRow}>
              <View style={styles.serviceSearch1StackStack}>
                <View style={styles.serviceSearch1Stack}>
                  <TextInput
                    placeholder="Search a service..."
                    returnKeyType="go"
                    placeholderTextColor="rgba(194,97,250,1)"
                    selectionColor="rgba(250,245,245,1)"
                    clearButtonMode="while-editing"
                    style={styles.serviceSearch1}
                  ></TextInput>
                  <View style={styles.rect4}></View>
                </View>
                <EvilIconsIcon
                  name="search"
                  style={styles.searchIcon1}
                ></EvilIconsIcon>
              </View>
              <View style={styles.filterIcon1Stack}>
                <EvilIconsIcon
                  name="search"
                  style={styles.filterIcon1}
                ></EvilIconsIcon>
                <View style={styles.filterBtn1}></View>
              </View>
            </View>
          </View>
          <View style={styles.scrollArea}>
            <ScrollView
              contentContainerStyle={styles.scrollArea_contentContainerStyle}
            ></ScrollView>
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgba(15,30,69,1)"
    },
    rect2: {
      width: 185,
      height: 40,
      borderWidth: 2,
      borderColor: "rgba(228,154,247,1)",
      borderRadius: 15
    },
    rect2Filler: {
      flex: 1,
      flexDirection: "row"
    },
    rect3: {
      width: 40,
      height: 40,
      backgroundColor: "rgba(60,40,95,1)",
      shadowColor: "rgba(0,0,0,1)",
      shadowOffset: {
        width: 3,
        height: 4
      },
      elevation: 12,
      shadowOpacity: 0.25,
      shadowRadius: 4,
      borderRadius: 9,
      flexDirection: "row",
      marginRight: 12
    },
    iconFiller: {
      flex: 1,
      flexDirection: "row"
    },
    icon: {
      color: "rgba(235,112,210,1)",
      fontSize: 25,
      height: 25,
      width: 25,
      marginRight: 6,
      marginTop: 7
    },
    rect5: {
      width: 40,
      height: 40,
      backgroundColor: "rgba(60,40,95,1)",
      shadowColor: "rgba(0,0,0,1)",
      shadowOffset: {
        width: 3,
        height: 4
      },
      elevation: 12,
      shadowOpacity: 0.25,
      shadowRadius: 4,
      borderRadius: 9,
      flexDirection: "row"
    },
    icon1Filler: {
      flex: 1,
      flexDirection: "row"
    },
    icon1: {
      color: "rgba(252,89,89,1)",
      fontSize: 27,
      height: 29,
      width: 26,
      marginRight: 6,
      marginTop: 6
    },
    rect3Row: {
      height: 40,
      flexDirection: "row"
    },
    rect2Row: {
      height: 40,
      flexDirection: "row",
      marginTop: 83
    },
    serviceSearch1: {
      top: 0,
      position: "absolute",
      fontFamily: "poppins-regular",
      color: "rgba(255,255,255,1)",
      height: 52,
      opacity: 0.43,
      fontSize: 15,
      width: 223,
      left: 11
    },
    rect4: {
      top: 0,
      left: 0,
      height: 52,
      position: "absolute",
      opacity: 0.43,
      borderWidth: 0,
      borderColor: "rgba(31,30,30,1)",
      borderRadius: 8,
      backgroundColor: "rgba(75,81,101,1)",
      shadowColor: "rgba(16,16,16,1)",
      shadowOffset: {
        width: 3,
        height: 3
      },
      elevation: 15,
      shadowOpacity: 0.59,
      shadowRadius: 5,
      flexDirection: "row",
      right: 0
    },
    serviceSearch1Stack: {
      top: 0,
      left: 0,
      height: 52,
      position: "absolute",
      right: 0
    },
    searchIcon1: {
      top: 11,
      position: "absolute",
      color: "rgba(194,97,250,1)",
      fontSize: 29,
      right: 12
    },
    serviceSearch1StackStack: {
      height: 52,
      flex: 1,
      marginRight: 9
    },
    filterIcon1: {
      top: 6,
      position: "absolute",
      color: "rgba(194,97,250,1)",
      fontSize: 40,
      right: 6
    },
    filterBtn1: {
      top: 0,
      width: 52,
      height: 52,
      position: "absolute",
      backgroundColor: "rgba(75,81,101,1)",
      opacity: 0.43,
      borderWidth: 0,
      borderColor: "rgba(31,30,30,1)",
      borderRadius: 8,
      shadowColor: "rgba(16,16,16,1)",
      shadowOffset: {
        width: 3,
        height: 3
      },
      elevation: 15,
      shadowOpacity: 0.59,
      shadowRadius: 5,
      right: 0
    },
    filterIcon1Stack: {
      width: 52,
      height: 52
    },
    serviceSearch1StackStackRow: {
      height: 52,
      flexDirection: "row",
      marginTop: -123
    },
    rect2RowColumn: {
      marginTop: 38,
      marginLeft: 16,
      marginRight: 16
    },
    scrollArea: {
      backgroundColor: "rgba(230, 230, 230,1)",
      flex: 1,
      marginBottom: 29,
      marginTop: 96,
      marginLeft: 17,
      marginRight: 15
    },
    scrollArea_contentContainerStyle: {
      height: 748
    }
  });
export default S_Sent;