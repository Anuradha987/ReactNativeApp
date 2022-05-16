import React, { Component, useEffect } from 'react';
import {StyleSheet, View, ScrollView, Image, Text, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import Animated, {useSharedValue, useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {FONTS, SIZES, COLORS, constants, icons, dummyData} from '../constants';
import {connect} from 'react-redux'
import { setSelectedTab } from '../stores/tab/tabActions';
import { Header } from '../components';
import { LinearGradient } from 'expo-linear-gradient';

import BellIcon from "react-native-vector-icons/EvilIcons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useFonts } from 'expo-font';

const Tab = createMaterialTopTabNavigator();

function ServiceProviders() {
  const [loaded] = useFonts({
    poppinsregular: require('./../assets/fonts/Poppins-Regular.ttf'),
    poppins700: require('./../assets/fonts/poppins-700.ttf'),
  });

  if(!loaded){
    return null;
  }

return (
  // (!loaded)?
  // (
  //   <View
  //     style={{
  //       flex: 4,
  //       backgroundColor: 'rgba(21,31,40,1)',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //     }}>
  //     {/* https://github.com/n4kz/react-native-indicators */}
  //     <ActivityIndicator size="large" />
  //   </View>
  // ):
(<View style={styles.scrollAreaServices}>
    <FlatList
        data={dummyData.completedReceieveServicesRequests}
        keyExtractor={(item) => `${item.id}`}
        showsHorizontalScrollIndicator={true}
        style={styles.scrollArea_contentContainerStyleServices}
        renderItem={({ item, index }) => {
    return (
    <TouchableOpacity style={styles.expertRect}
    onPress={()=>{}}
    >
        <View style={styles.proPicRow}>
        <Image
            source={require("./../assets/images/_110435139_parsa.jpg")}
            resizeMode="contain"
            style={styles.proPic}
        ></Image>
        <View style={styles.nameRowColumnServices}>
            <View style={styles.nameRowServices}>
            <Text style={styles.name}>Sankalpa De Silva</Text>
            <Icon name="heart" style={styles.favIconServices}></Icon>
            </View>
            <View style={styles.servicesGroup}>
            <Text style={styles.serivcesTitle1}>Financial Consultant</Text>
            <Text style={styles.serivcesTitle2}>Trainer</Text>
            <Text style={styles.serivcesTitle3}>Professional Advisor</Text>
            <Text style={styles.serivcesTitle4}>Service Title 1</Text>
            <Text style={styles.serivcesTitle5}>Services Title 2</Text>
            </View>
        </View>
        </View>
    </TouchableOpacity>
    )}}/>
</View>)
)}

// items and products flatlist
function Items() {
    return (
            <View style={styles.scrollAreaItems}>
            <FlatList
                data={dummyData.completedReceieveServicesRequests}
                keyExtractor={(item) => `${item.id}`}
                showsHorizontalScrollIndicator={true}
                style={styles.scrollArea_contentContainerStyleItems}
                renderItem={({ item, index }) => {
                return (
                <TouchableOpacity style={styles.itemRect}
                onPress={()=>{}}
                >
                <View style={styles.imagePicRow}>
                    <Image
                    source={require("./../assets/images/hawaiian-pizza.jpg")}
                    resizeMode="contain"
                    style={styles.imagePic}
                    ></Image>
                    <View style={styles.itemNameRowColumn}>
                    <View style={styles.itemNameRow}>
                        <Text style={styles.itemName}>hawaiian-pizza</Text>
                        <Icon name="heart" style={styles.favIconItems}></Icon>
                    </View>
                    <Text style={styles.availablity}>Available</Text>
                    <Text style={styles.tradingMethod}>For Cash</Text>
                    <Text style={styles.pricePerUnit}>pricePerUnit /unit</Text>
                    </View>
                </View>
                </TouchableOpacity>
            )}}/>
        </View>
    )}




const Fav_MainLayout = ({drawerAnimationStyle, navigation, selectedTab, setSelectedTab}) => {
         //poppins insert
  const [loaded] = useFonts({
    poppinsregular: require('./../assets/fonts/Poppins-Regular.ttf'),
    poppins700: require('./../assets/fonts/poppins-700.ttf'),
  });

  useEffect(() => {
    console.log("Fav_MainLayout");
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
        (<Animated.View style={{ flex: 1,backgroundColor:"rgba(21,31,40,1)", ...drawerAnimationStyle}} >
            {/* Header */}
            <Header 
                containerStyle={{height: 30, paddingHorizontal: SIZES.padding, marginTop: 20,marginBottom:15, alignItems:'center',  }}
                // title ={selectedTab.toUpperCase()}
                title ="My Favorites"

                leftComponent ={
                    <TouchableOpacity style={{width:40, height: 40, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: COLORS.gray2, borderRadius: SIZES.radius}}
                                      onPress ={()=> navigation.openDrawer()}
                    >
                        <Image source={icons.menu} />
                    </TouchableOpacity>
                }

                rightComponent ={
                  <TouchableOpacity style={{width:40, height: 40, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: COLORS.gray2, borderRadius: SIZES.radius}}
                                    onPress ={()=> navigation.navigate('Notification')}
                  >
                       <BellIcon name="bell" style={{color: COLORS.gray2, fontSize: 25}}></BellIcon>
                  </TouchableOpacity>
                }
            />
<LinearGradient  start = {{ x:0 , y:0.5 }} end = {{ x:0 , y:0 }}
                      colors={['transparent', 'rgba(19,18,18,1)']}
                        style= {{ left:0, right:0, height:15, }}
      />
      
<NavigationContainer independent={true} >
<Tab.Navigator
    screenOptions={{
    tabBarActiveTintColor: '#9c8df0',
    tabBarInactiveTintColor: "rgba(141,140,140,1)",
    tabBarIndicatorStyle: { backgroundColor: '#9c8df0' },
    tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold', letterSpacing: 1, fontFamily: "poppinsregular", },
    tabBarStyle: { backgroundColor: "rgba(21,31,40,1)", marginTop: 15, shadowOpacity: 1, shadowColor: "rgba(16,16,16,1)", elevation: 3, shadowOffset: { width: 3, height: 3 } },
    }}
>
    <Tab.Screen name="Service Providers" component={ServiceProviders}/>
    <Tab.Screen name="Items & Products" component={Items} />
</Tab.Navigator>
</NavigationContainer>


        </Animated.View>)
    )
}


function mapStateToProps (state) {
    return{
        selectedTab: state.tabReducer.selectedTab
    }
}

function mapDispatchToProps(dispatch){
    return{
        setSelectedTab: (selectedTab) => { return dispatch
            (setSelectedTab(selectedTab)) }
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21,31,40,1)"
  },
  scrollAreaServices: {
    backgroundColor:"rgba(21,31,40,1)",
    flex:1,
    top:0, 
    bottom:0,
  },
  scrollArea_contentContainerStyleServices: {
       marginTop: 10,marginBottom:10,
  },
  expertRect: {
    height: 118,
    backgroundColor: "rgba(81,81,81,0.4)",
    borderRadius: 20, 
    marginBottom:10,
    marginHorizontal:10, 
  },
  proPic: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  name: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginTop: 1,
    marginLeft:4, 
  },
  favIconServices: {
    color: "rgba(249,43,85,1)",
    fontSize: 20,
    height: 20,
    width: 20, 
  },
  nameRowServices: {
    height: 22,
    flexDirection: "row", 
  },
  servicesGroup: {
    marginLeft: 10,
    marginRight: 10, 
    flex:1, 
  },
  serivcesTitle1: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    width: 200,
    fontSize: 10, 
  },
  serivcesTitle2: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    width: 200,
    fontSize: 10
  },
  serivcesTitle3: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    width: 200,
    fontSize: 10
  },
  serivcesTitle4: {
    // fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    width: 200,
    fontSize: 10
  },
  serivcesTitle5: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    width: 200,
    fontSize: 10
  },
  nameRowColumnServices: {
   flex:1,
  },
  proPicRow: {
    height: 104,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 9,
    marginRight: 12, 
  },
  scrollAreaItems:{
    backgroundColor:"rgba(21,31,40,1)",
    flex:1,
    top:0, 
    bottom:0,
  },
  scrollArea_contentContainerStyleItems: {
   marginTop: 10, 
  },
  itemRect: {
    height: 118,
    backgroundColor: "rgba(81,81,81,0.4)",
    borderRadius: 20,
    marginBottom:10,
    marginHorizontal:10,
  },
  imagePic: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  itemName: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginTop: 1,
    marginLeft:4

  },
  favIconItems: {
    color: "rgba(249,43,85,1)",
    fontSize: 20,
    height: 20,
    width: 20
  },
  itemNameRow: {
    height: 27, 
    flexDirection: "row"
  },
  availablity: {
    fontFamily: "poppinsregular",
    color: "rgba(8,255,0,1)",
    width: 199,
    fontSize: 12,
    height: 18,
    marginTop: 2,
    marginLeft: 10
  },
  tradingMethod: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    width: 199,
    height: 21,
    marginTop: 4,
    marginLeft: 10
  },
  pricePerUnit: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    width: 200,
    height: 27,
    marginLeft: 10, 
    marginTop:3, 
  },
  itemNameRowColumn: {
  flex:1,
  },
  imagePicRow: {
    height: 100,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 9,
    marginRight: 12
  },
});

export default connect(mapStateToProps, mapDispatchToProps)
(Fav_MainLayout)