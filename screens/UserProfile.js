import React, { Component, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground, 
  FlatList
  , ActivityIndicator
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FeatherIcon from "react-native-vector-icons/Feather";
import MapView from "react-native-maps";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import { useFonts } from 'expo-font';
import { dummyData, icons } from '../constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { Rating, AirbnbRating } from 'react-native-ratings';
import I_My from './I_My/I_My';
import S_My from './S_My/S_My';
import { ReportService } from '../services/customer/Report';
import { AuthService } from '../services/AuthService';
import { ToastAndroid } from 'react-native';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();


function UserProfile({navigation, route}) {

  const ratingCompleted = (rating) => {
    console.log("Rating is: " + rating)
  }

  const { userDetails } = route.params;

    //poppins insert
  const [loaded] = useFonts({
    poppinsregular: require('../assets/fonts/Poppins-Regular.ttf'),
    poppins700: require('../assets/fonts/poppins-700.ttf'),
  });

  useEffect(() => {
   console.log("User Profile");
  }, []);

  const reportUser = () =>{
    const data = {
      user_id: "620729b1de4a5c278423dbe9",
      victim_user_id: AuthService.userId,
      description: "Test reporting description."
  };
    ReportService.AddReport(data,AuthService.userToken).then((res)=>{
      console.log(res.data);
      ToastAndroid.show(res.data.message,ToastAndroid.SHORT);
    }).catch((error)=>{
      console.log(error);
    });
  }

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
    (<View style={styles.container}>

       <FlatList
             listKey="9.1"
        showsVerticalScrollIndicator={true}
        ListHeaderComponent={
          <View>
            <View style={styles.rect1Row}></View>

      <View style={styles.coverImageStackStack}>
        <View style={styles.coverImageStack}>
          <ImageBackground
            source={require("../assets/images/eee4e8f8eb69c3b9a7c38d6cae13c5661.jpg")}
            resizeMode="cover"
            style={styles.coverImage}
            imageStyle={styles.coverImage_imageStyle}
          >
           <TouchableOpacity style={styles.backBtn}
                             onPress={()=> navigation.goBack()}>
             <Icon name="arrow-left" style={styles.backIcon}></Icon>
          </TouchableOpacity>

          </ImageBackground>
          {userDetails.profile_img.length >30?
                    <Image
                    source={{uri: `data:image/gif;base64,${userDetails.profile_img}`}}
                    resizeMode="contain"
                    style={styles.profileImage}
                  ></Image>
          :
          <Image
          source={require("../assets/images/_110435139_parsa.jpg")}
          resizeMode="contain"
          style={styles.profileImage}
        ></Image>
          }
        </View>
        <Text numberOfLines={1} style={styles.personName}>{userDetails ? userDetails.username : "Test"}</Text>
        <FontAwesomeIcon name="star" style={styles.icon1}></FontAwesomeIcon>
        <Text style={styles.loremIpsum13}>4.1</Text>
      </View>


      <View style={styles.servicesGroupRow}>
        <View style={styles.servicesGroup}>
          <Text style={styles.totalServiceProvidedlbl}>
            Total Service {"\n"}Provided
          </Text>
          <Text style={styles.noOfServices}>18</Text>
        </View>
        <View style={styles.servicesGroupFiller}></View>
        <View style={styles.tradeGroup}>
          <Text style={styles.totalItemsProductsTraded}>
            Total Items/{"\n"}Products Traded
          </Text>
          <Text style={styles.noOfItems}>18</Text>
        </View>
      </View>


      <Text style={styles.descriptionAboutUser}>
        {userDetails.description}
      </Text>

      <View style={styles.emailRow}>
      <Image source={icons.email}
                resizeMode="contain"
                style={styles.emailIcon}></Image>
              <Text style={styles.userEmail}>{userDetails.email}</Text>
            </View>

      <View style={styles.contactGroups}>
        <TouchableOpacity style={styles.addFavBtn}></TouchableOpacity>
        <FeatherIcon name="heart" style={styles.favIcon}></FeatherIcon>
        <TouchableOpacity style={styles.callBtn}></TouchableOpacity>
        <FeatherIcon name="phone" style={styles.callIcon}></FeatherIcon>
        <TouchableOpacity style={styles.msgBtn}></TouchableOpacity>
        <FeatherIcon name="message-square" style={styles.msgIcon}></FeatherIcon>
        <TouchableOpacity style={styles.sendReqBtn}></TouchableOpacity>
        <FontAwesomeIcon
          name="share-square-o"
          style={styles.sendReqIcon}
        ></FontAwesomeIcon>
      </View>


      <Text style={styles.viewOnTheMap}>View on the map</Text>
      <View style={styles.mapViewStack}>
        <MapView
          provider={MapView.PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          customMapStyle={[]}
          style={styles.mapView}></MapView>
        <EntypoIcon
          name="location-pin"
          style={styles.locationIcon}
        ></EntypoIcon>
        <Image
          source={require("../assets/images/_110435139_parsa.jpg")}
          resizeMode="contain"
          style={styles.userLocation}
        ></Image>
      </View>

<View style={{alignItems:'center', textAlign: 'center', marginHorizontal:26}}>
      <Text style={styles.ratingText1}>How was your experience with </Text>
    <View style={{flexDirection:'row', }}>
      <Text style={styles.ratingText2}>{userDetails.username}</Text>
      <Text>?</Text>
    </View>
    <AirbnbRating
      starContainerStyle={{justifyContent:'space-between', width:300, marginTop:10, marginBottom:20}}
      showRating={false}
      count={5}
      defaultRating={0}
      size={30}
      onFinishRating={ratingCompleted}
    />
</View>

  <NavigationContainer independent={true} style={{ marginTop: 769 }}>
              <Tab.Navigator
                screenOptions={{
                  tabBarActiveTintColor: '#9c8df0',
                  tabBarInactiveTintColor: 'rgba(141,140,140,1)',
                  tabBarIndicatorStyle: { backgroundColor: '#9c8df0' },
                  tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: 'bold',
                    letterSpacing: 1,
                  },
                  tabBarStyle: {
                    backgroundColor: 'rgba(21,31,40,1)',
                    marginTop: 25,
                    shadowOpacity: 1,
                    shadowColor: 'rgba(16,16,16,1)',
                    elevation: 3,
                    shadowOffset: { width: 3, height: 3 },
                  },
                }}>
                <Tab.Screen name="My Services" component={S_My} />
                <Tab.Screen name="My Items" component={I_My} />
              </Tab.Navigator>
            </NavigationContainer>
            
                  
      <TouchableOpacity style={styles.reportingUserBar} onPress={reportUser}>
        <View style={styles.thumbsaDownIconRow}>
          <MaterialIconsIcon
            name="thumb-down"
            style={styles.thumbsaDownIcon}
          ></MaterialIconsIcon>
          <Text style={styles.reportUser}>Report User</Text>
        </View>
      </TouchableOpacity>

        <View style={{ marginTop: 50 }}></View>
        
      </View>}/>
    </View>)
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21,31,40,1)"
  },
rect1Row: { height: 43, marginTop: 769 },
  coverImage: {
    top: 0,
    height: 178,
    position: "absolute",
    left: 0,
    right: 0
  },
  coverImage_imageStyle: {},
  backBtn: {
    width: 40,
    height: 40,
    marginTop: 20,
    marginLeft: 20,
    alignItems: 'center', 
    justifyContent: 'center', 
    borderWidth: 1, 
    borderColor:'#BBBDC1', 
    borderRadius: 12,  
  },
  backIcon:{
    color: '#BBBDC1', 
    // fontSize: 20,
    marginRight:3
  },
  profileImage: {
    top: 134,
    left: 14,
    width: 118,
    height: 118,
    position: "absolute",
    borderRadius: 80
  },
  coverImageStack: {
    top: 0,
    left: 0,
    height: 252,
    position: "absolute",
    right: 0
  },
  personName: {
    top: 183,
    left: 145,
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    fontSize: 22, 
  },
  icon1: {
    left: 146,
    position: "absolute",
    color: "rgba(255,254,0,1)",
    // fontSize: 20,
    top: 219
  },
  loremIpsum13: {
    position: "absolute",
    fontFamily: "poppinsregular",
    color: "rgba(255,254,0,1)",
    fontSize: 17,
    left: 176,
    top: 217
  },
  coverImageStackStack: {
    height: 252,
    marginTop: -812,
    marginRight: 2
  },
  servicesGroup: {
    width: 106,
    height: 87,
    justifyContent: "space-between",
    alignItems: "center"
  },
  totalServiceProvidedlbl: {
    fontFamily: "poppinsregular",
    color: "rgba(160,135,186,1)",
    width: 106,
    textAlign: "center",
    flex: 1
  },
  noOfServices: {
    fontFamily: "poppins700",
    color: "rgba(160,135,186,1)",
    fontSize: 18,
    letterSpacing: 2,
    width: 106,
    textAlign: "center"
  },
  servicesGroupFiller: {
    flex: 1,
    flexDirection: "row"
  },
  tradeGroup: {
    width: 138,
    height: 87,
    justifyContent: "space-between",
    alignItems: "center"
  },
  totalItemsProductsTraded: {
    fontFamily: "poppinsregular",
    color: "rgba(160,135,186,1)",
    width: 135,
    textAlign: "center",
    flex: 1
  },
  noOfItems: {
    fontFamily: "poppins700",
    color: "rgba(160,135,186,1)",
    fontSize: 18,
    letterSpacing: 2,
    width: 138,
    textAlign: "center"
  },
  servicesGroupRow: {
    height: 87,
    flexDirection: "row",
    marginTop: 39,
    marginLeft: 39,
    marginRight: 32
  },
  descriptionAboutUser: {
    fontFamily: "poppinsregular",
    color: "rgba(176,176,176,1)",
    textAlign: "justify",
   marginTop: 20,
    marginHorizontal: 15,
  },
  emailRow: {
    flexDirection: 'row',
    marginLeft: 15,
  },
  emailIcon: {
    height: 24,
    width: 24,
    marginTop: 20,
    marginLeft: 5,
    marginRight:15,
  },
  userEmail: {
    fontFamily: 'poppinsregular',
    color: 'rgba(176,176,176,1)',
    textAlign: 'justify',
    marginTop: 20,
    marginHorizontal: 5,
  },
  contactGroups: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    width: 308,
    marginTop: 35,
    alignSelf: "center"
  },
  addFavBtn: {
    width: 50,
    height: 50,
    backgroundColor: "rgba(60,40,95,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 4
    },
    elevation: 0,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 15
  },
  favIcon: {
    top: 11,
    left: 10,
    position: "absolute",
    color: "rgba(235,112,210,1)",
    fontSize: 30,
    height: 30,
    width: 30
  },
  callBtn: {
    width: 50,
    height: 50,
    backgroundColor: "rgba(60,40,95,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 4
    },
    elevation: 0,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 15
  },
  callIcon: {
    top: 11,
    left: 95,
    position: "absolute",
    color: "rgba(112,235,161,1)",
    fontSize: 30,
    height: 30,
    width: 30
  },
  msgBtn: {
    width: 50,
    height: 50,
    backgroundColor: "rgba(60,40,95,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 4
    },
    elevation: 0,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 15
  },
  msgIcon: {
    top: 11,
    left: 182,
    position: "absolute",
    color: "rgba(112,214,235,1)",
    fontSize: 30,
    height: 30,
    width: 30
  },
  sendReqBtn: {
    width: 50,
    height: 50,
    backgroundColor: "rgba(60,40,95,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 4
    },
    elevation: 0,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 15
  },
  sendReqIcon: {
    top: 11,
    left: 270,
    position: "absolute",
    color: "rgba(235,214,112,1)",
    fontSize: 30,
    height: 30,
    width: 28
  },
  viewOnTheMap: {
    fontFamily: "poppins700",
    color: "rgba(212,212,212,1)",
    marginTop: 30,
    marginLeft: 26
  },
  mapView: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 99,
    right: 0
  },
  locationIcon: {
    top: 29,
    left: 83,
    position: "absolute",
    color: "rgba(255,0,0,1)",
    fontSize: 40
  },
  userLocation: {
    top: 37,
    left: 92,
    width: 20,
    height: 20,
    position: "absolute",
    borderRadius: 12
  },
  mapViewStack: {
    height: 99,
    marginTop: 18,
    marginLeft: 26,
    marginRight: 32
  },
  ratingText1: {
    fontFamily: "poppinsregular",
    color: "rgba(212,212,212,1)",
    marginTop: 40,
   // marginLeft: 26, 
    textAlign: 'center'
  },  
  ratingText2: {
    fontFamily: "poppins700",
    color: "rgba(212,212,212,1)",
    fontSize:18
  },
  breakingLine: {
    fontFamily: "roboto-regular",
    color: "rgba(176,176,176,1)",
    marginTop: 9,
    marginLeft: 24,
    marginRight: 24
  },
  reportingUserBar: {
    height: 53,
    backgroundColor: "rgba(235,235,235,0.09)",
    flexDirection: "row",
    marginTop: 50,
    marginLeft: 1,
    marginRight: -1
  },
  thumbsaDownIcon: {
    color: "rgba(255,102,102,1)",
    fontSize: 24,
    height: 24,
    width: 24,
    marginTop: 2
  },
  reportUser: {
    fontFamily: "poppinsregular",
    color: "rgba(255,102,102,1)",
    letterSpacing: 1,
    fontSize: 15,
    marginLeft: 20
  },
  thumbsaDownIconRow: {
    height: 26,
    flexDirection: "row",
    flex: 1,
    marginRight: 221,
    marginLeft: 28,
    marginTop: 15
  }
});

export default UserProfile;
