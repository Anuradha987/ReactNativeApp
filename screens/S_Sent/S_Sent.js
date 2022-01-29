import React, { Component } from "react";
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
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import { dummyData } from "../../constants";
import PickerComponent from "../../components/PickerComponent";
//notifi about the rates, votes and commetns of yours services. 
//details about your requested services. 
//details about upcoming pending services that you have accepted.
//msgs from others. 
//your services graphs, eranings.  
    

const S_Sent = () => {
    return (
      
      <View style={styles.container}>

      <View style={styles.requestStatusRowColumn}>
        <View style={styles.requestStatusRow}>
          <View style={styles.requestStatus}>
          <PickerComponent></PickerComponent>
          </View>
          <View style={styles.requestStatusFiller}></View> 
          

          <View style={styles.editBtnRow}>
            <TouchableOpacity style={styles.editBtn}>
              <View style={styles.editReqIconFiller}></View>
              <FeatherIcon name="edit" style={styles.editReqIcon}></FeatherIcon>
            </TouchableOpacity>

            <TouchableOpacity style={styles.deleteBtn}>
              <View style={styles.delReqIconFiller}></View>
              <MaterialCommunityIconsIcon
                name="delete-sweep"
                style={styles.delReqIcon}
              ></MaterialCommunityIconsIcon>
            </TouchableOpacity>
          </View>
          
        </View>

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

      </View>


      <View style={styles.scrollArea}>
        <FlatList
        data={dummyData.myServicesList}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={true}
        renderItem={({ item, index }) => {
          return (
        <View contentContainerStyle={styles.scrollArea_contentContainerStyle}>
          <TouchableOpacity style={styles.serviceReqSent}>
            <Text style={styles.reqTitle}>Water Line is Broken</Text>
            <View style={styles.cateIconRow}>
            <Image
                  source={item.cateIcon}
                  resizeMode="contain"
                  style={styles.cateIcon}
                ></Image>
              <View style={styles.categoryStack}>
                <Text style={styles.cateName}>Home &amp; Garden</Text>
                <Text style={styles.sentDate}>02/04/2021</Text>
              </View>
            </View>
            <View style={styles.sentToColumnRow}>
              <View style={styles.sentToColumn}>
                <Text style={styles.sentTo}>To: Sunil Ariyarathna</Text>
                <Text style={styles.statusPending}>Status: Pending</Text>
              </View>
              <View style={styles.sentToColumnFiller}></View>
              <View
                gradientImage="Gradient_w5ZSEt2.png"
                style={styles.priority}
              ></View>
            </View>
          </TouchableOpacity>
        </View>
          )}}/>
      </View>
      <View style={{marginTop:110}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21,31,40,1)"
  },
  requestStatus: {
    height: 40,
    borderWidth: 2,
    borderColor: "rgba(228,154,247,1)",
    borderRadius: 15,
    width: 164
  },
  requestStatusFiller: {
    flex: 1,
    flexDirection: "row"
  },
  editBtn: {
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
  editReqIconFiller: {
    flex: 1,
    flexDirection: "row"
  },
  editReqIcon: {
    color: "rgba(235,112,210,1)",
    fontSize: 25,
    height: 25,
    width: 25,
    marginRight: 6,
    marginTop: 7
  },
  deleteBtn: {
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
  delReqIconFiller: {
    flex: 1,
    flexDirection: "row"
  },
  delReqIcon: {
    color: "rgba(252,89,89,1)",
    fontSize: 27,
    height: 29,
    width: 26,
    marginRight: 6,
    marginTop: 6
  },
  editBtnRow: {
    height: 40,
    flexDirection: "row"
  },
  requestStatusRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 83,
    marginRight: 1
  },
  searchingBar: {
    height: 52,
    borderWidth: 0,
    borderColor: "rgba(31,30,30,0.43)",
    borderRadius: 8,
    backgroundColor: "rgba(75,81,101,0.43)",
    shadowColor: "rgba(16,16,16,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 15,
    shadowOpacity: 0.59,
    shadowRadius: 5,
    flexDirection: "row",
    marginTop: -123
  },
  serviceSearch: {
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    height: 52,
    opacity: 0.43,
    fontSize: 15,
    flex: 1,
    marginRight: 13,
    marginLeft: 11
  },
  searchIcon: {
    color: "rgba(194,97,250,1)",
    fontSize: 29,
    height: 32,
    width: 29,
    marginRight: 10,
    marginTop: 10
  },
  requestStatusRowColumn: {
    marginTop: 38,
    marginLeft: 16,
    marginRight: 15
  },
  scrollArea: {
    borderWidth: 0,
    borderColor: "#000000",
    flex: 1,
    marginBottom: 50,
    marginTop: 100,
    marginLeft: 16,
    marginRight: 15,
  },
  scrollArea_contentContainerStyle: {
    height: 582
  },
  serviceReqSent: {
    height: 104,
    backgroundColor: "rgba(65,58,100,0.7)",
    borderRadius: 20,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 2
    },
    elevation: 100,
    shadowOpacity: 0.83,
    shadowRadius: 6,
    marginBottom:10
  },
  reqTitle: {
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    marginTop: 10,
    marginLeft: 20
  },
  cateIcon: {
    color: "rgba(220,162,76,1)",
    fontSize: 14,
    width: 11,
    height: 15
  },
  cateName: {
    top: 1,
    left: 0,
    position: "absolute",
    fontFamily: "poppins-regular",
    color: "rgba(220,162,76,1)",
    fontSize: 11
  },
  sentDate: {
    top: 0,
    position: "absolute",
    fontFamily: "poppins-regular",
    color: "rgba(145,145,145,1)",
    fontSize: 10,
    right: "-20%",
    textAlign: "right"
  },
  categoryStack: {
    width: 272,
    height: 17,
    marginLeft: 11,
    marginTop: 1
  },
  cateIconRow: {
    height: 18,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 20,
    marginRight: 15
  },
  sentTo: {
    fontFamily: "poppins-regular",
    color: "rgba(197,212,196,1)",
    fontSize: 13
  },
  statusPending: {
    fontFamily: "poppins-regular",
    color: "rgba(191,190,191,1)",
    fontSize: 13
  },
  sentToColumn: {
    width: 261
  },
  sentToColumnFiller: {
    flex: 1,
    flexDirection: "row"
  },
  priority: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(255,51,51,1)",
    marginTop: 2
  },
  sentToColumnRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 3,
    marginLeft: 20,
    marginRight: 15
  }
});
export default S_Sent;