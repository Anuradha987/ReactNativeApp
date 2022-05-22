import React, { Component, useEffect } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import CupertinoSegmentWithTwoTabs from "./../../components/CupertinoSegmentWithTwoTabs";
import IoniconsIcon from "react-native-vector-icons/Ionicons"
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { dummyData } from '../../constants';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

function PendingReq({navigation}) {
// const navigation = useNavigation();
      //poppins insert
      const [loaded] = useFonts({
        poppinsregular: require('./../../assets/fonts/Poppins-Regular.ttf'),
        poppins700: require('./../../assets/fonts/poppins-700.ttf'),
    });

    useEffect(() => {
      // console.log("SSentDetailsAfterAccepting");
     }, []);
  
  return (
    (!loaded)?
    (
      <View
        style={{
          flex: 4,
          backgroundColor: 'rgba(21,31,40,1)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* https://github.com/n4kz/react-native-indicators */}
        <ActivityIndicator size="large" />
      </View>
    ):
    (<View style={styles.scrollArea}>
      <FlatList
        listKey="16.1"
        data={dummyData.pendingReceieveServicesRequests}
        keyExtractor={(item) => `${item.id}`}
        showsHorizontalScrollIndicator={true}
        style={styles.scrollArea_contentContainerStyle}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity style={styles.serviceReqReceived} onPress={()=>navigation.navigate('SAfterApproved')}>
              <View style={styles.senderImageRow}>
                <Image
                  source={item.senderImage}
                  resizeMode="contain"
                  style={styles.senderImage}
                ></Image>
                <View style={styles.acceptDateStackStack}>
                  <View style={styles.acceptDateStack}>
                    <Text style={styles.acceptDate}>{item.acceptDate}</Text>
                    <Text style={styles.senderName}>{item.senderName}</Text>
                  </View>
                  <View style={styles.priorityDot} ></View>
                </View>
              </View>
              <Text style={styles.reqTitle}>{item.reqTitle}</Text>
              <View style={styles.cateIconRow}>
                <Image
                  source={item.cateIcon}
                  resizeMode="contain"
                  style={styles.cateIcon}
                ></Image>
                <Text style={styles.cateName}>{item.cateName}</Text>
              </View>
              <View style={styles.endWrapperFillerRow}>
                <View style={styles.endWrapperFiller}></View>
                <View style={styles.reqCancelBtnRow}>
                  <TouchableOpacity style={styles.reqCancelBtn}>
                    <Text style={styles.cancel}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.reqCompleteBtn}>
                    <Text style={styles.complete}>Complete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>

          )
        }} />
    </View>)
  );
}



function CompletedReq({navigation}) {
  return (
    <View style={styles.scrollArea}>
      <FlatList
        listKey="16.2"
        data={dummyData.completedReceieveServicesRequests}
        keyExtractor={(item) => `${item.id}`}
        showsHorizontalScrollIndicator={true}
        style={styles.scrollArea_contentContainerStyle1}
        renderItem={({ item, index }) => {
          return (

            <TouchableOpacity style={styles.serviceReqReceivedCompleted} onPress={()=>navigation.navigate('SAfterCompleted')}>
              <View style={styles.senderImageRow1}>
                <Image
                  source={item.senderImage}
                  resizeMode="contain"
                  style={styles.senderImage}
                ></Image>
                <View style={styles.priorityDotStack}>
                  <View style={styles.priorityDot}></View>
                  <View style={styles.senderNameStack}>
                    <Text style={styles.senderName}>{item.senderName}</Text>
                    <Text style={styles.completeDate}>{item.completeDate}</Text>
                  </View>
                </View>
              </View>
              <Text style={styles.reqTitle}>{item.reqTitle}</Text>
              <View style={styles.cateIconRow}>
                <IoniconsIcon
                  name="ios-home"
                  style={styles.cateIcon}
                ></IoniconsIcon>
                <Text style={styles.cateName}>{item.cateName}</Text>
              </View>
            </TouchableOpacity>
          )
        }}
      />

    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

const S_Approvals = ({ navigation }) => {
  return (
    <View style={styles.container}>


          {/* Searching bar */}
          <View style={styles.searchingBar}>
            <TextInput
              placeholder="Search a service..."
              returnKeyType="go"
              placeholderTextColor="#9c8df0"
              selectionColor="rgba(250,245,245,1)"
              clearButtonMode="while-editing"
              style={styles.serviceSearch}
            ></TextInput>
            <EvilIconsIcon name="search" style={styles.searchIcon}></EvilIconsIcon>
          </View>

          <Text style={styles.priority}>Priority :</Text>
          <View style={styles.priorityStack}>
            <Text style={styles.low}>Low</Text>
            <Text style={styles.medium}>Medium</Text>
            <Text style={styles.high}>High</Text>
            <View style={styles.greenDot}></View>
            <View style={styles.yellowDot}></View>
            <View style={styles.redDot}></View>
          </View>

      {/* Not Completed (after accepting) and completed requests */}
      <NavigationContainer independent={true} >
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: '#9c8df0',
            tabBarInactiveTintColor: "rgba(141,140,140,1)",
            tabBarIndicatorStyle: { backgroundColor: '#9c8df0' },
            tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold', letterSpacing: 1 },
            tabBarStyle: { backgroundColor: "rgba(21,31,40,1)", marginTop: 7, shadowOpacity: 1, shadowColor: "rgba(16,16,16,1)", elevation: 3, shadowOffset: { width: 3, height: 3 } },
          }}
        >
          <Tab.Screen name="Not Completed" component={PendingReq} />
          <Tab.Screen name="Completed" component={CompletedReq} />
        </Tab.Navigator>
      </NavigationContainer>
      <View style={{ marginTop: 175 }}></View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21,31,40,1)",
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
    elevation: 0,
    shadowOpacity: 0.59,
    shadowRadius: 5,
    flexDirection: "row",
    marginTop: 22,
    marginLeft: 16,
    marginRight: 16
  },
  serviceSearch: {
    fontFamily: "poppinsregular",
    color: "#fff",
    height: 52,
    opacity: 0.75,
    fontSize: 15,
    flex: 1,
    marginRight: 7,
    marginLeft: 11,
   marginTop:3
  },
  searchIcon: {
    color: "#9c8df0",
    fontSize: 29,
    width: 29,
    height: 32,
    marginRight: 10,
    marginTop: 13
  },
  rect2: {
    top: 1,
    height: 55,
    position: "absolute",
    shadowColor: "rgba(28,28,28,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 45,
    shadowOpacity: 1,
    shadowRadius: 15,
    left: 0,
    right: 0,
    borderWidth: 0,
    borderColor: "#000000"
  },
  rect2Stack: {
    height: 56,
    marginTop: 77
  },
  priority: {
    fontFamily: "poppinsregular",
    color: "rgba(141,140,140,1)",
    fontSize: 11,
    textAlign: "right",
    alignSelf: "flex-end",
    marginTop: 29,
    marginRight: 20
  },
  low: {
    top: 0,
    position: "absolute",
    fontFamily: "poppinsregular",
    color: "rgba(141,140,140,1)",
    fontSize: 11,
    textAlign: "right",
    right: 0
  },
  medium: {
    top: 0,
    position: "absolute",
    fontFamily: "poppinsregular",
    color: "rgba(141,140,140,1)",
    fontSize: 11,
    textAlign: "right",
    right: 55
  },
  high: {
    top: 0,
    position: "absolute",
    fontFamily: "poppinsregular",
    color: "rgba(141,140,140,1)",
    fontSize: 11,
    textAlign: "right",
    right: 137
  },
  greenDot: {
    top: 2,
    width: 12,
    height: 12,
    position: "absolute",
    backgroundColor: "rgba(71,214,56,1)",
    borderRadius: 7,
    right: 30
  },
  yellowDot: {
    top: 2,
    width: 12,
    height: 12,
    position: "absolute",
    backgroundColor: "rgba(222,255,0,1)",
    borderRadius: 7,
    right: 112
  },
  redDot: {
    top: 2,
    width: 12,
    height: 12,
    position: "absolute",
    backgroundColor: "rgba(255,51,51,1)",
    borderRadius: 7,
    right: 172
  },
  priorityStack: {
    height: 16,
    alignSelf: "flex-end",
    marginRight: 20, 
    flexDirection:'row', 
    alignItems:'center'
  },
  searchingBarColumn: {
    marginTop: 22
  },
  scrollArea: {
    borderWidth: 0,
    borderColor: "#000000",
    flex: 1,
    marginBottom: 0,
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    backgroundColor: "rgba(21,31,40,1)",
  },
  scrollArea_contentContainerStyle: {
    //height: 456
    marginTop: 10
  },
  scrollArea_contentContainerStyle1: {
    //height: 456
    marginTop: 10
  },
  serviceReqReceived: {
    height: 143,
    backgroundColor: "rgba(65,58,100,0.7)",
    borderRadius: 20,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 2
    },
    elevation: 0,
    shadowOpacity: 1,
    shadowRadius: 6,
    marginTop: 10,
    //marginLeft: 2,
    marginHorizontal: 15,
  },
  senderImage: {
    width: 25,
    height: 25,
    borderRadius: 15
  },
  acceptDate: {
    top: 0,
    position: "absolute",
    fontFamily: "poppinsregular",
    color: "rgba(145,145,145,1)",
    fontSize: 10,
    right: "-20%",
    textAlign: "right",
  },
  senderName: {
    top: 2,
    left: 0,
    position: "absolute",
    fontFamily: "poppinsregular",
    color: "rgba(197,212,196,1)",
    fontSize: 12
  },
  acceptDateStack: {
    top: 0,
    left: 0,
    width: 269,
    height: 20,
    position: "absolute"
  },
  priorityDot: {
    width: 14,
    height: 14,
    position: "absolute",
    borderRadius: 12,
    backgroundColor: "rgba(222,255,0,1)",
    right: '-20%',
    top: 20,
  },
  acceptDateStackStack: {
    width: 269,
    height: 32,
    marginLeft: 3,
    marginTop: 2
  },
  senderImageRow: {
    height: 34,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 16,
    marginRight: 14
  },
  senderImageRow1: {
    height: 34,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 16,
    marginRight: 14
  },
  reqTitle: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    marginTop: 1,
    marginHorizontal: 10, 
  },
  cateIcon: {
    color: "rgba(220,162,76,1)",
    fontSize: 15,
    height: 18,
    width: 18
  },
  cateName: {
    fontFamily: "poppinsregular",
    color: "#ebd670",
    fontSize: 11,
    marginLeft: 8,
  },
  cateIconRow: {
   // height: 17,
    flexDirection: "row",
    marginLeft: 24,
    marginRight: 24, 
  },
  endWrapperFiller: {
    flex: 1,
    flexDirection: "row", 
  },
  reqCancelBtn: {
    width: 83,
    height: 40,
    borderWidth: 2,
    borderColor: "rgba(242,132,69,1)",
    borderRadius: 10,
    shadowColor: "rgba(242,132,69,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 100,
    shadowOpacity: 1,
    shadowRadius: 10,
    flexDirection: "row",
    marginRight: 14,
  },
  cancel: {
    width:83,
    fontFamily: "poppinsregular",
    color: "rgba(242,132,69,1)",
    fontSize: 12,
    textAlign: "center",
    marginRight: 18,
    marginTop: 8,
  },
  reqCompleteBtn: {
    height: 40,
    borderWidth: 2,
    borderColor: "rgba(3,213,241,1)",
    borderRadius: 10,
    width: 84,
    shadowColor: "rgba(3,213,241,1)",
    shadowOffset: {
      width: 0,
      height: 0
    },
    elevation: 30,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    flexDirection: "row"
  },
  complete: {
    width:83,
    fontFamily: "poppinsregular",
    color: "rgba(3,213,241,1)",
    textAlign: "center",
    fontSize: 12,
    // marginRight: 1,
    // marginTop: 12
    marginRight: 10,
    marginTop: 8,
  },
  reqCancelBtnRow: {
    height: 40,
    flexDirection: "row"
  },
  endWrapperFillerRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 127,
    marginRight: 18
  },

  highStack: {
    top: 0,
    width: 212,
    height: 16,
    position: "absolute",
    right: 51
  },
  greenDotStack: {
    top: 0,
    width: 73,
    height: 16,
    position: "absolute",
    right: 0
  },
  rect1: {
    top: 1,
    height: 55,
    position: "absolute",
    shadowColor: "rgba(28,28,28,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 45,
    shadowOpacity: 1,
    shadowRadius: 15,
    left: 0,
    borderWidth: 0,
    borderColor: "#000000",
    right: 0
  },
  serviceReqReceivedCompleted: {
    height: 100,
    backgroundColor: "rgba(65,58,100,0.7)",
    borderRadius: 20,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 2
    },
    elevation: 0,
    shadowOpacity: 1,
    shadowRadius: 6,
    marginTop: 10,
    marginHorizontal: 15,
  },
  completeDate: {
    top: 0,
    position: "absolute",
    fontFamily: "poppinsregular",
    color: "rgba(145,145,145,1)",
    fontSize: 10,
    right: "-20%",
    textAlign: "right"
  },
  senderNameStack: {
    top: 0,
    left: 0,
    width: 269,
    height: 20,
    position: "absolute"
  },
  priorityDotStack: {
    width: 269,
    height: 32,
    marginLeft: 3,
    marginTop: 2
  },
});
export default S_Approvals


