import React from 'react'
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView} from '@react-navigation/drawer'
import {DB_MainLayout, S_MainLayout, I_MainLayout, Fav_MainLayout} from '../screens'; 
import {COLORS, FONTS, SIZES, constants, icons, dummyData} from '../constants';
import Animated from 'react-native-reanimated';
import { connect } from 'react-redux';
import { setSelectedTab } from '../stores/tab/tabActions';  
import { useFonts } from 'expo-font';

const Drawer =  createDrawerNavigator()


//customize the drawer items such as Home, settings etc
const CustomDrawerItem = ({label,icon, isFocused, onPress}) => {
    const [loaded] = useFonts({
        poppinsregular: require('./../assets/fonts/Poppins-Regular.ttf')   
      });
      if (!loaded) {
        return null;
      }
    return(
        <TouchableOpacity style={{flexDirection: 'row', height:40, marginBottom: SIZES.base, alignItems: 'center', paddingLeft: SIZES.radius, borderRadius: SIZES.base, backgroundColor: isFocused ? COLORS.transparentBlack1 : null}}
                          onPress ={onPress}
        >
            <Image source={icon}  style={{width:20, height:20, tintColor: COLORS.white}} />
            <Text style={{marginLeft:15 , color: COLORS.white, fontFamily:"poppinsregular"}}>{label}</Text>
        </TouchableOpacity>
    )
}

//customize the drawer 
const CustomDrawerContent = ({navigation, selectedTab, setSelectedTab}) => {

    return (
        <DrawerContentScrollView scrollEnabled ={true}
                                 contentContainerStyle = {{flex: 1}}
        >

            <View style={{flex:1, paddingHorizontal: SIZES.radius}}>

                {/* close */}
                <View style={{alignItems: 'flex-end', justifyContent: 'center', }}>

                    <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center' }}
                                      onPress ={()=> navigation.closeDrawer()}
                    > 

                        <Image source={icons.cross}
                               style={{height: 35, width: 35, tintColor: COLORS.white}}
                        />
                    </TouchableOpacity>
                </View>


                {/* profile */}
                <TouchableOpacity style={{flexDirection: 'row', marginTop: SIZES.radius, alignItems: 'center',}}
                                  onPress={()=> navigation.navigate('MyProfile')}
                >
                    <Image source={dummyData.myProfile?.profile_image}
                           style ={{width: 50, height:50, borderRadius: SIZES.radius }}
                    />

                    <View style={{marginLeft: SIZES.radius}}>
                        <Text style={{color: COLORS.white, fontFamily:"poppinsregular"}}>{dummyData.myProfile?.name}</Text>
                        <Text style={{color:COLORS.white, fontFamily:"poppinsregular"}}>View My Profile</Text>
                    </View>
                </TouchableOpacity>

{/* Home
Services
Items
Favorites
My Transactions

Notification
Settings
Invite a friend
Help center
Logout */}
                {/* Drawer Items */}

                <View style={{flex:1, marginTop: SIZES.padding}}>

                    <CustomDrawerItem label='Dashboard'
                                      icon = {icons.noticeboard}
                                      isFocused = {selectedTab == constants.screens.DB_MainLayout}
                                      onPress ={()=> {  setSelectedTab(constants.screens.DB_MainLayout) 
                                                        navigation.navigate("DB_MainLayout")             
                                      }}

                                      
                    />

                    <CustomDrawerItem label='Services' 
                                      icon = {icons.services}
                                      isFocused = {selectedTab == constants.screens.S_Search}
                                      onPress ={()=> {  setSelectedTab(constants.screens.S_Search) 
                                                        navigation.navigate("S_MainLayout")             
                                      }}
                    />

                    <CustomDrawerItem label='Items'
                                      icon = {icons.items}
                                      isFocused = {selectedTab == constants.screens.I_Search}
                                      onPress ={()=> {  setSelectedTab(constants.screens.I_Search) 
                                                        navigation.navigate("I_MainLayout")                                    
                                      }}
                    />

                    <CustomDrawerItem label='Favorites'
                                      icon = {icons.MyBusiness}
                                      isFocused = {selectedTab == constants.screens.Fav_MainLayout}
                                      onPress ={()=> {  setSelectedTab(constants.screens.Fav_MainLayout)
                                                        navigation.navigate("Fav_MainLayout")                                    
                                      }}
                    />

                    <CustomDrawerItem label='My Transactions' 
                                      icon = {icons.MyBusiness}
                                      isFocused = {selectedTab == constants.screens.Otp}
                                      onPress ={()=> {  setSelectedTab(constants.screens.Otp)
                                                        navigation.navigate("Otp")                                   
                                      }}
                    />
                    <CustomDrawerItem label='Settings'
                                      icon = {icons.setting}
                                      isFocused = {selectedTab == constants.screens.UserProfile}
                                      onPress ={()=> {  setSelectedTab(constants.screens.UserProfile)
                                                        navigation.navigate("UserProfile")                                    
                                      }}
                    />
                    <CustomDrawerItem label='Invite a friend' 
                                      icon = {icons.profile}
                                      isFocused = {selectedTab == constants.screens.B_Search}
                                      onPress ={()=> {  setSelectedTab(constants.screens.B_Search)
                                                        navigation.navigate("DB_MainLayout")                                    
                                      }}
                    />
                    <CustomDrawerItem label='Help center' 
                                      icon = {icons.help}
                                      isFocused = {selectedTab == constants.screens.B_Search}
                                      onPress ={()=> {  setSelectedTab(constants.screens.B_Search)
                                                        navigation.navigate("DB_MainLayout")                                    
                                      }}
                    />                                                            
                    {/* Line Divider */}
                    {/* <View style ={{height: 1, marginVertical: SIZES.radius, marginLeft: SIZES.radius, backgroundColor: COLORS.lightGray1}}></View>

                    <CustomDrawerItem label="Track Your Order" 
                                      icon = {icons.location}
                    />

                    <CustomDrawerItem label="Coupons" 
                                      icon = {icons.coupon}
                    />

                    <CustomDrawerItem label="Settings"
                                      icon = {icons.setting}
                    />

                    <CustomDrawerItem label="Invite a friend"
                                      icon = {icons.profile}
                    />

                    <CustomDrawerItem label="Help Center"
                                      icon = {icons.help}
                    /> */}

                    <View style={{marginBottom: SIZES.padding}}>
                        <CustomDrawerItem label="Logout"
                                          icon = {icons.logout}
                        />
                    </View>

                </View>

            </View>
        </DrawerContentScrollView>
    )
}




const CustomDrawer = ({selectedTab, setSelectedTab}) => {

    // drawer animation
    // initial value set to 0 --> (new Animated.Value(0) )

    const [progress, setProgress ] = React.useState(new Animated.Value(0) )

    //screen scale down animation
    const scale = Animated.interpolateNode(progress, {
        inputRange: [0,1], 
        outputRange: [1, 0.8]
    } )

    //set the border radius
    const borderRadius = Animated.interpolateNode(progress, {
        inputRange: [0,1], 
        outputRange: [0, 26]
    } )
    
    //assigning the borderRadius and scale value to animatedStyle variable
    const animatedStyle = {borderRadius, transform: [{scale}]}


// function drawerColor({backgroundColor}){
//     return(
//         backgroundColor = 'green'
//     )
// }

// function drawerColor(backgroundColor){
//     return(
//         backgroundColor = 'green'
//     )
// }

//   <backgroundColor onPress = {() => {
//       return(
//     CustomDrawerItem === constants.screens.DB_MainLayout ? backgroundColor='yellow' : constants.screens.S_MainLayout ? backgroundColor= 'green'
//       )
//   }}/>

    return ( 
       <View style={{flex:1}}> 
              <ImageBackground
          source={require("../assets/images/blob-scene-haikei.png")}
          resizeMode="stretch"
          style={{top: 0, left: 0, position: "absolute",right: 0, bottom: 0,backgroundColor: "rgba(15,15, 15,0.74)", flexDirection: "row"}}
          imageStyle={{opacity: 0.75}}
        >
            <Drawer.Navigator screenOptions ={{
                              drawerType:"slide",
                              overlayColor: "transparent",
                              drawerStyle : {flex:1, width: "75%", paddingRight: 20,  backgroundColor: 'transparent'} ,  //
                              sceneContainerStyle: {backgroundColor: 'transparent'} ,//
                              initialRouteName: "DB_MainLayout",   //
                              headerShown: false,
                                }}
                              drawerContent = {props => {
                                  setTimeout(()=>{
                                    setProgress(props.progress) 
                                  }, 0 )
                                  return(
                                      <CustomDrawerContent
                                        navigation = {props.navigation}
                                        selectedTab={ selectedTab }
                                        setSelectedTab = {setSelectedTab}
                                      />
                                  )
                              }}
            >
                {/* ------------------------------------------------------------------------------------------------------------------ */}
                <Drawer.Screen name="DB_MainLayout">
                    {props => <DB_MainLayout {...props} drawerAnimationStyle = {animatedStyle} />}
                </Drawer.Screen>

                <Drawer.Screen name="S_MainLayout">
                    {props => <S_MainLayout {...props} drawerAnimationStyle = {animatedStyle} />}
                </Drawer.Screen>

                <Drawer.Screen name="I_MainLayout">
                    {props => <I_MainLayout {...props} drawerAnimationStyle = {animatedStyle} />}
                </Drawer.Screen>

                <Drawer.Screen name="Fav_MainLayout">
                    {props => <Fav_MainLayout {...props} drawerAnimationStyle = {animatedStyle} />}
                </Drawer.Screen>

                {/* ------------------------------------------------------------------------------------------------------------------ */}
            </Drawer.Navigator>
            </ImageBackground>
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)
(CustomDrawer)