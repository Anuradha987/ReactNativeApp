import React, { Component, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MapView from 'react-native-maps';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { useFonts } from 'expo-font';
import { dummyData, icons } from '../constants';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import I_My from './I_My/I_My';
import S_My from './S_My/S_My';
import { ServicesService } from '../services/customer/Services';
import { AuthContext } from '../components/context';
import { ToastAndroid } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ReportService } from '../services/customer/Report';
import { AuthService } from '../services/AuthService';
import { useFocusEffect } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function MyProfile() {
  const navigation = useNavigation();

  //poppins insert
  const [loaded] = useFonts({
    poppinsregular: require('../assets/fonts/Poppins-Regular.ttf'),
    poppins700: require('../assets/fonts/poppins-700.ttf'),
  });

  const { sendUserToken,logout } = React.useContext(AuthContext);
  

  const [userDetails, setUserDetails]=React.useState(null);

  useFocusEffect( 
    React.useCallback(() => {
    if(!userDetails){
    loadUserDetails();
    }
    console.log(userDetails);
  }, []));

  const deleteAccount = () =>{
    ReportService.deleteUserById(AuthService.userId,AuthService.userToken).then((res)=>{
      console.log(res.data);
      logout();
    }).catch((error)=>{
      console.log(error);
    });
  }

  const loadUserDetails = ()=>{
    setTimeout(async () => {
      let userToken;
      let userId=null;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
        userId = await AsyncStorage.getItem('userId');
        console.log(userToken);
        ServicesService.getUserDetailsByUserId(userId, userToken).then((res)=>{
          console.log(res.data.data[0].username);
          ToastAndroid.show(res.data.data[0].username,ToastAndroid.SHORT);
          setUserDetails(res.data.data[0]);
        }).catch((error)=>{
          // logout();
          console.error(error);

        });
      } catch (e) {
        console.log(e);
      }
    }, 1000);
  }

  return (
    (userDetails === null)? 
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
      ):(
    
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={true}
        listKey="1.1"
        ListHeaderComponent={
          <View>
            <View style={styles.rect1Row}></View>

            {/* cover photo*/}
            <View style={styles.coverImageStackStack}>
              <View style={styles.coverImageStack}>
                <ImageBackground
                  source={{uri: `data:image/gif;base64,${userDetails.cover_img}`}}
                  resizeMode="cover"
                  style={styles.coverImage}
                  imageStyle={styles.coverImage_imageStyle}>

                {/* back button */}
                <TouchableOpacity style={styles.backBtn}
                    onPress={()=> navigation.goBack()}>
                        <Icon name="arrow-left" style={styles.backIcon}></Icon>
                </TouchableOpacity>

                </ImageBackground>


{/* profile picture */}
                <Image
                  source={{uri: `data:image/gif;base64,${userDetails.profile_img}`}}
                  resizeMode="contain"
                  style={styles.profileImage}></Image>
              </View>
              <Text numberOfLines={1} style={styles.personName}>{userDetails.username}</Text>
              <FontAwesomeIcon
                name="star"
                style={styles.icon1}></FontAwesomeIcon>
              <Text style={styles.loremIpsum13}>4.1</Text>
            </View>

            <View style={styles.servicesGroupRow}>
              <View style={styles.servicesGroup}>
                <Text style={styles.totalServiceProvidedlbl}>
                  Total Service {'\n'}Provided
                </Text>
                <Text style={styles.noOfServices}>18</Text>
              </View>
              <View style={styles.servicesGroupFiller}></View>
              <View style={styles.tradeGroup}>
                <Text style={styles.totalItemsProductsTraded}>
                  Total Items/{'\n'}Products Traded
                </Text>
                <Text style={styles.noOfItems}>18</Text>
              </View>
            </View>

            <Text style={styles.descriptionAboutUser}>
              {userDetails.description}
            </Text>

            {/* Email here*/}
            <View style={styles.emailRow}>
                <Image source={icons.email}
                resizeMode="contain"
                style={styles.emailIcon}></Image>
              <Text style={styles.userEmail}>{userDetails.email}</Text>
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
                style={styles.locationIcon}></EntypoIcon>
              <Image
                source={require('./../assets/images/_110435139_parsa.jpg')}
                resizeMode="contain"
                style={styles.userLocation}></Image>
            </View>


{/* my services and items that have published. (S_My and I_My) */}
            {/* <NavigationContainer independent={true} style={{ marginTop: 769 }}>
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
            </NavigationContainer> */}

{/* account actions */}
            <View style={styles.profileSettings}>
              <TouchableOpacity style={styles.signoutUserBar} onPress={()=>logout()}>
                <View style={styles.signoutIconRow}>
                  <MaterialIconsIcon
                    name="logout"
                    style={styles.signoutIcon}></MaterialIconsIcon>
                  <Text style={styles.signoutUsertxt}>Sign Out</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.editUserBar} onPress={()=>navigation.navigate('UpdateUserDetails', {user:userDetails})}>
                <View style={styles.editIconRow}>
                  <FontAwesomeIcon
                    name="edit"
                    style={styles.editIcon}></FontAwesomeIcon>
                  <Text style={styles.editUsertxt}>Edit My Details</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.deleteUserBar} onPress={deleteAccount}>
                <View style={styles.deleteIconRow}>
                  {/* <MaterialIconsIcon
                    name="DeleteForever"
                    style={styles.deleteIcon}></MaterialIconsIcon> */}
                     <Image source={icons.deleteUser}
                resizeMode="contain"
                style={styles.deleteUser}></Image>
                  <Text style={styles.deleteUsertxt}>Delete My Account</Text>
                </View>
              </TouchableOpacity>

              <View style={{ marginTop: 50 }}></View>
            </View>
          </View>
        }
      />
    </View>
  ));
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(21,31,40,1)',
  },
  rect1Row: {height: 43, marginTop: 769 },
  coverImage: {
    top: 0,
    height: 178,
    position: 'absolute',
    left: 0,
    right: 0,
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
    fontSize: 20,
  },
  profileImage: {
    top: 134,
    left: 14,
    width: 118,
    height: 118,
    position: 'absolute',
    borderRadius: 80,
  },
  coverImageStack: {
    top: 0,
    left: 0,
    height: 252,
    position: 'absolute',
    right: 0,
  },
  personName: {
    top: 183,
    left: 145,
    position: 'absolute',
    fontFamily: 'poppinsregular',
    color: 'rgba(255,255,255,1)',
    fontSize: 22,
  },
  icon1: {
    left: 146,
    position: 'absolute',
    color: 'rgba(255,254,0,1)',
    fontSize: 20,
    top: 219,
  },
  loremIpsum13: {
    position: 'absolute',
    fontFamily: 'poppinsregular',
    color: 'rgba(255,254,0,1)',
    fontSize: 17,
    left: 176,
    top: 217,
  },
  coverImageStackStack: {
    height: 252,
    marginTop: -812,
    marginRight: 2,
  },
  servicesGroup: {
    width: 106,
    height: 87,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalServiceProvidedlbl: {
    fontFamily: 'poppinsregular',
    color: 'rgba(160,135,186,1)',
    width: 106,
    textAlign: 'center',
    flex: 1,
  },
  noOfServices: {
    fontFamily: 'poppins700',
    color: 'rgba(160,135,186,1)',
    fontSize: 18,
    letterSpacing: 2,
    width: 106,
    textAlign: 'center',
  },
  servicesGroupFiller: {
    flex: 1,
    flexDirection: 'row',
  },
  tradeGroup: {
    width: 138,
    height: 87,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalItemsProductsTraded: {
    fontFamily: 'poppinsregular',
    color: 'rgba(160,135,186,1)',
    width: 135,
    textAlign: 'center',
    flex: 1,
  },
  noOfItems: {
    fontFamily: 'poppins700',
    color: 'rgba(160,135,186,1)',
    fontSize: 18,
    letterSpacing: 2,
    width: 138,
    textAlign: 'center',
  },
  servicesGroupRow: {
    height: 87,
    flexDirection: 'row',
    marginTop: 39,
    marginLeft: 39,
    marginRight: 32,
  },
  descriptionAboutUser: {
    fontFamily: 'poppinsregular',
    color: 'rgba(176,176,176,1)',
    textAlign: 'justify',
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
  viewOnTheMap: {
    fontFamily: 'poppins700',
    color: 'rgba(212,212,212,1)',
    marginTop: 30,
    marginLeft: 26,
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
    position: 'absolute',
    borderRadius: 12,
  },
  mapViewStack: {
    height: 99,
    marginTop: 18,
    marginLeft: 26,
    marginRight: 32,
  },
  profileSettings: {
    marginTop: 50,
  },
  signoutUserBar: {
    height: 53,
    backgroundColor: 'rgba(235,235,235,0.09)',
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 1,
    marginRight: -1,
  },
  signoutIcon: {
    color: '#e100ff',
    fontSize: 24,
    height: 24,
    width: 24,
    marginTop: 2,
  },
  signoutUsertxt: {
    fontFamily: 'poppinsregular',
    color: '#e100ff',
    letterSpacing: 1,
    fontSize: 15,
    marginLeft: 20,
  },
  signoutIconRow: {
    height: 26,
    flexDirection: 'row',
    flex: 1,
    marginRight: 221,
    marginLeft: 28,
    marginTop: 15,
  },

  editUserBar: {
    height: 53,
    backgroundColor: 'rgba(235,235,235,0.09)',
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 1,
    marginRight: -1,
  },
  editIconRow: {
    height: 26,
    flexDirection: 'row',
    flex: 1,
    marginRight: 221,
    marginLeft: 28,
    marginTop: 15,
  },
  editIcon: {
    color: '#fcbe03',
    fontSize: 24,
    height: 24,
    width: 24,
    marginTop: 2,
  },
  editUsertxt: {
    fontFamily: 'poppinsregular',
    color: '#fcbe03',
    letterSpacing: 1,
    fontSize: 15,
    marginLeft: 20,
  },

  deleteUserBar: {
    height: 53,
    backgroundColor: 'rgba(235,235,235,0.09)',
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 1,
    marginRight: -1,
  },
  deleteIconRow: {
    height: 26,
    flexDirection: 'row',
    flex: 1,
    marginRight: 221,
    marginLeft: 28,
    marginTop: 15,
  },
  deleteUser: {
    color: 'rgba(255,102,102,1)',
    fontSize: 24,
    height: 24,
    width: 24,
  },
  deleteUsertxt: {
    fontFamily: 'poppinsregular',
    color: 'rgba(255,102,102,1)',
    letterSpacing: 1,
    fontSize: 15,
    marginLeft: 20,
    width: 350,
  },
});

export default MyProfile;
