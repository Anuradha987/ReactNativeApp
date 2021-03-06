import React, { Component, useEffect } from 'react';
import {
    View, Text, TouchableOpacity, Image, TextInput, FlatList, TouchableWithoutFeedback, ScrollView, Keyboard,
    ActivityIndicator
} from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { FONTS, SIZES, COLORS, constants, icons, dummyData } from '../constants';
import { connect } from 'react-redux'
import { setSelectedTab } from '../stores/tab/tabActions';
import { Header } from '../components';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from "react-native-vector-icons/EvilIcons";
import { Extrapolate, interpolate, useAnimatedScrollHandler } from 'react-native-reanimated'
//these are the screens that renders within the I_MainLayout
import { I_Approvals, I_Sent, I_My, I_Search } from '.';
import { NavService } from '../services/NavService';
import I_SalesHistory from './I_SalesHistory/I_SalesHistory';


const TabButton = ({ label, icon, isFocused, onPress, outerContainerStyle, innerContainerStyle }) => {


    const [keyboardIsOpen, setKeyboardIsOpen] = React.useState(false);
    Keyboard.addListener("keyboardDidShow", () => {
        setKeyboardIsOpen(true);
    });
    Keyboard.addListener("keyboardDidHide", () => {
        setKeyboardIsOpen(false);
    });

    useEffect(() => {
        console.log("I_Mainlayout");
    }, []);

    return (
        <TouchableWithoutFeedback onPress={onPress} >
            <Animated.View style={[{ flex: 1, alignItems: 'center', justifyContent: 'center', }, outerContainerStyle]}>

                {/* another animated.view used to animate the bottom bar buttons in purple color */}
                <Animated.View style={[{ flexDirection: 'row', height: 50, width: '80%', alignItems: 'center', justifyContent: 'center', borderRadius: 25, }, innerContainerStyle]}>
                    <Image source={icon}
                        style={{ width: 20, height: 20, tintColor: isFocused ? COLORS.white : COLORS.gray }}
                    />

                    {/* when a button is being clicked, the name will be shown here */}
                    {isFocused &&
                        <Text numberOfLines={1}
                            style={{ marginLeft: 15, letterSpacing: 0.5, fontSize: 16, color: COLORS.white, fontFamily: 'poppinsregular', marginTop: 3 }}
                        >
                            {label}
                        </Text>
                    }
                </Animated.View>

            </Animated.View>
        </TouchableWithoutFeedback>
    )
}


const I_MainLayout = ({ drawerAnimationStyle, navigation, selectedTab, setSelectedTab }) => {

    // FlatListRef = creating a FlatList for the page content
    const flatListRef = React.useRef()

    // Reanimated Shared Value
    //pass values to the <TabButton>


    const I_SearchTabFlex = useSharedValue(1)
    const I_SearchTabColor = useSharedValue(COLORS.white)

    const I_SentTabFlex = useSharedValue(1)
    const I_SentTabColor = useSharedValue(COLORS.white)

    const I_RequestsTabFlex = useSharedValue(1)
    const I_RequestsTabColor = useSharedValue(COLORS.white)

    const I_ApprovalsTabFlex = useSharedValue(1)
    const I_ApprovalsTabColor = useSharedValue(COLORS.white)

    const I_MyTabFlex = useSharedValue(1)
    const I_MyTabColor = useSharedValue(COLORS.white)


    //Define Reanimated Animated style

    //search
    const I_SearchFlexStyle = useAnimatedStyle(() => {
        return {
            flex: I_SearchTabFlex.value
        }
    })

    const I_SearchColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: I_SearchTabColor.value
        }
    })

    //sent
    const I_SentFlexStyle = useAnimatedStyle(() => {
        return {
            flex: I_SentTabFlex.value
        }
    })

    const I_SentColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: I_SentTabColor.value
        }
    })

    //requests
    const I_RequestsFlexStyle = useAnimatedStyle(() => {
        return {
            flex: I_RequestsTabFlex.value
        }
    })

    const I_RequestsColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: I_RequestsTabColor.value
        }
    })

    //approvals
    const I_ApprovalsFlexStyle = useAnimatedStyle(() => {
        return {
            flex: I_ApprovalsTabFlex.value
        }
    })

    const I_ApprovalsColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: I_ApprovalsTabColor.value
        }
    })

    //my
    const I_MyFlexStyle = useAnimatedStyle(() => {
        return {
            flex: I_MyTabFlex.value
        }
    })

    const I_MyColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: I_MyTabColor.value
        }
    })

    //set a title for first loading the app
    React.useEffect(() => {
        // setSelectedTab(constants.screens.I_Search);
        // NavService.selectedItemPage = constants.screens.I_Search;
    }, [])

    React.useEffect(() => {

        if (selectedTab == constants.screens.I_Search) {
            flatListRef?.current?.scrollToIndex({
                index: 0, animated: false
            })
            I_SearchTabFlex.value = withTiming(4, { duration: 500 })
            I_SearchTabColor.value = withTiming(COLORS.primary, { duration: 500 })
        }
        else {
            I_SearchTabFlex.value = withTiming(1, { duration: 500 })
            I_SearchTabColor.value = withTiming(COLORS.white, { duration: 500 })
        }

        if (selectedTab == constants.screens.I_Sent) {
            flatListRef?.current?.scrollToIndex({
                index: 1, animated: false
            })
            I_SentTabFlex.value = withTiming(4, { duration: 500 })
            I_SentTabColor.value = withTiming(COLORS.primary, { duration: 500 })
        }
        else {
            I_SentTabFlex.value = withTiming(1, { duration: 500 })
            I_SentTabColor.value = withTiming(COLORS.white, { duration: 500 })
        }

        if (selectedTab == constants.screens.I_SalesHistory) {
            flatListRef?.current?.scrollToIndex({
                index: 2, animated: false
            })
            I_RequestsTabFlex.value = withTiming(4, { duration: 500 })
            I_RequestsTabColor.value = withTiming(COLORS.primary, { duration: 500 })
        }
        else {
            I_RequestsTabFlex.value = withTiming(1, { duration: 500 })
            I_RequestsTabColor.value = withTiming(COLORS.white, { duration: 500 })
        }

        if (selectedTab == constants.screens.I_Approvals) {
            flatListRef?.current?.scrollToIndex({
                index: 3, animated: false
            })
            I_ApprovalsTabFlex.value = withTiming(4, { duration: 500 })
            I_ApprovalsTabColor.value = withTiming(COLORS.primary, { duration: 500 })
        }
        else {
            I_ApprovalsTabFlex.value = withTiming(1, { duration: 500 })
            I_ApprovalsTabColor.value = withTiming(COLORS.white, { duration: 500 })
        }

        if (selectedTab == constants.screens.I_My) {
            flatListRef?.current?.scrollToIndex({
                index: 4, animated: false
            })
            I_MyTabFlex.value = withTiming(4, { duration: 500 })
            I_MyTabColor.value = withTiming(COLORS.primary, { duration: 500 })
        }
        else {
            I_MyTabFlex.value = withTiming(1, { duration: 500 })
            I_MyTabColor.value = withTiming(COLORS.white, { duration: 500 })
        }
    }, [selectedTab])



    // const scrollY = useSharedValue(0)    
    // const outputRange = [0,55]; 
    // const footerAnimatedStyle = useAnimatedStyle(()=>{
    //     return{
    //         height:Extrapolate(scrollY.value, outputRange[55,0], interpolate.CLAMP), 
    //         opacity:Extrapolate(scrollY.value, outputRange[1,0], interpolate.CLAMP), 
    //     }
    // })
    // const onScroll = useAnimatedScrollHandler((event) => {
    //     scrollY.value = event.contentOffset.y
    // })
    return (


        <Animated.View style={{ flex: 1, backgroundColor: "rgba(21,31,40,1)", ...drawerAnimationStyle }} >
            {/* Header */}
            {/* <ScrollView onScroll={onScroll}> */}
            <Header
                containerStyle={{ height: 30, paddingHorizontal: SIZES.padding, marginTop: 20, marginBottom: 15, alignItems: 'center' }}
                title={selectedTab.toUpperCase()}

                leftComponent={
                    <TouchableOpacity style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: COLORS.gray2, borderRadius: SIZES.radius }}
                        onPress={() => navigation.openDrawer()}
                    >
                        <Image source={icons.menu} />
                    </TouchableOpacity>
                }

                rightComponent={
                    <TouchableOpacity style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: COLORS.gray2, borderRadius: SIZES.radius }}
                        onPress={() => navigation.navigate('Notification')}
                    >
                        <Icon name="bell" style={{ color: COLORS.gray2, fontSize: 25 }}></Icon>
                    </TouchableOpacity>
                }
            />


            <LinearGradient start={{ x: 0, y: 0.5 }} end={{ x: 0, y: 0 }}
                colors={['transparent', 'rgba(19,18,18,1)']}
                style={{ left: 0, right: 0, height: 15, }}
            />

            {/* Content */}
            <View style={{ flex: 1 }}>
                <View style={{ height: SIZES.height, width: SIZES.width }}>
                    {(selectedTab == constants.screens.I_Sent) ?<I_Sent /> :
                     (selectedTab == constants.screens.I_SalesHistory) ? (<I_SalesHistory />) :
                     (selectedTab == constants.screens.I_My) ? (<I_My />) :
                     (selectedTab == constants.screens.I_Search) ? (<I_Search />) :
                     ( <I_Search />)
                    }
                </View>
            </View>
            {/* </ScrollView> */}

            {/* Footer */}
            {/* useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
    'keyboardDidShow',
    () => {
        setKeyboardVisible(true); // or some other action
    }
    );
    const keyboardDidHideListener = Keyboard.addListener(
    'keyboardDidHide',
    () => {
        setKeyboardVisible(false); // or some other action
    }
    );

    return () => {
    keyboardDidHideListener.remove();
    keyboardDidShowListener.remove();
    }; 
}, []);*/}



            <View style={{ height: 65, justifyContent: 'flex-end', bottom: 0, position: 'absolute', right: 0, left: 0 }} >
                {/* <View style={{height: 65, justifyContent:'flex-end',bottom: 0,}}> */}

                {/* shadow above the bottom tab navigator */}
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 2 }}
                    colors={[COLORS.transparent, 'black']}
                    style={{ position: 'absolute', top: -20, left: 0, right: 0, height: 100, borderTopLeftRadius: 15, borderTopRightRadius: 15 }}
                />

                {/* bottom tab navigator buttons assigning values to it */}
                <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: SIZES.radius, paddingBottom: 0, borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: COLORS.white }}>

                    <TabButton label='Search'
                        icon={icons.search}
                        isFocused={selectedTab == constants.screens.I_Search}
                        outerContainerStyle={I_SearchFlexStyle}
                        innerContainerStyle={I_SearchColorStyle}
                        onPress={() => setSelectedTab(constants.screens.I_Search)}
                    />

                    <TabButton label='Sent'
                        icon={icons.sentReq}
                        isFocused={selectedTab == constants.screens.I_Sent}
                        outerContainerStyle={I_SentFlexStyle}
                        innerContainerStyle={I_SentColorStyle}
                        onPress={() => setSelectedTab(constants.screens.I_Sent)}
                    />

                    <TabButton label='History'
                        icon={icons.clock}
                        isFocused={selectedTab == constants.screens.I_SalesHistory}
                        outerContainerStyle={I_RequestsFlexStyle}
                        innerContainerStyle={I_RequestsColorStyle}
                        onPress={() => setSelectedTab(constants.screens.I_SalesHistory)}
                    />

                    {/* <TabButton label = 'Approvals'
                                icon = {icons.approval}
                                isFocused = {selectedTab == constants.screens.I_Approvals}
                                outerContainerStyle={I_ApprovalsFlexStyle}
                                innerContainerStyle ={I_ApprovalsColorStyle}
                                onPress = {()=> setSelectedTab(constants.screens.I_Approvals)}
                    />                     */}

                    <TabButton label='My'
                        icon={icons.mine}
                        isFocused={selectedTab == constants.screens.I_My}
                        outerContainerStyle={I_MyFlexStyle}
                        innerContainerStyle={I_MyColorStyle}
                        onPress={() => setSelectedTab(constants.screens.I_My)}
                    />


                </View>

            </View>


        </Animated.View>


    )

}


function mapStateToProps(state) {
    return {
        selectedTab: state.tabReducer.selectedTab
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setSelectedTab: (selectedTab) => {
            return dispatch
                (setSelectedTab(selectedTab))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)
    (I_MainLayout)