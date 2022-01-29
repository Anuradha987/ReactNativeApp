import React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput, FlatList, TouchableWithoutFeedback} from 'react-native';
import Animated, {useSharedValue, useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {FONTS, SIZES, COLORS, constants, icons, dummyData} from '../constants';
import {connect} from 'react-redux'
import { setSelectedTab } from '../stores/tab/tabActions';
import { Header } from '../components';
import { LinearGradient } from 'expo-linear-gradient';



const DB_MainLayout = ({drawerAnimationStyle, navigation, selectedTab, setSelectedTab}) => {

           //set a title for first loading the app
        //    React.useEffect(()=> {
        //     setSelectedTab(constants.screens.DB_MainLayout)
        // }, [])

//#181938
    return (
        <Animated.View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"rgba(21,31,40,1)", ...drawerAnimationStyle}} >
            {/* Header */}
            <Header 
                containerStyle={{height: 30, paddingHorizontal: SIZES.padding, marginTop: 25,marginBottom:5, alignItems:'center', }}
                // title ={selectedTab.toUpperCase()}
                title ="DASHBOARD"

                leftComponent ={
                    <TouchableOpacity style={{width:40, height: 40, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: COLORS.gray2, borderRadius: SIZES.radius}}
                                      onPress ={()=> navigation.openDrawer()}
                    >
                        <Image source={icons.menu} />
                    </TouchableOpacity>
                }

                rightComponent ={
                    <TouchableOpacity style={{borderRadius: SIZES.radius, alignItems: 'center', justifyContent:'center'}}>
                        <Image source={dummyData?.myProfile?.profile_image}
                                style={{width:40, height:40, borderRadius:SIZES.radius}}
                        />
                    </TouchableOpacity>
                }
            />



            {/* Content */}
            <View style={{flex:1}}></View>
            {/* Footer */}
            <Text>Dashboard MainLayout</Text>
        </Animated.View>
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
(DB_MainLayout)