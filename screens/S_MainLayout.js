import React, {useRef ,useEffect}  from 'react';
import {View, Text, TouchableOpacity, Image, TextInput, FlatList, TouchableWithoutFeedback} from 'react-native';
import Animated, {useSharedValue, useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {FONTS, SIZES, COLORS, constants, icons, dummyData} from '../constants';
import {connect} from 'react-redux'
import { setSelectedTab } from '../stores/tab/tabActions';
import { Header } from '../components';
import { LinearGradient } from 'expo-linear-gradient';

//these are the screens that renders within the S_MainLayout
import { S_Approvals, S_Sent, S_My, S_Requests, S_Search } from './index';


const TabButton = ({label, icon, isFocused, onPress, outerContainerStyle, innerContainerStyle}) => {
    return(
        <TouchableWithoutFeedback onPress={onPress}>
            <Animated.View style={[{flex:1, alignItems: 'center', justifyContent: 'center'}, outerContainerStyle]}>

                {/* another animated.view used to animate the bottom bar buttons in orange color */}
                <Animated.View style={[{flexDirection:'row', height: 50, width:'80%', alignItems: 'center', justifyContent: 'center', borderRadius: 25}, innerContainerStyle]}>
                    <Image source={icon} 
                           style={{ width: 20, height: 20, tintColor: isFocused? COLORS.white : COLORS.gray}}
                    />

                    {/* when a button is being clicked, the name will be shown here */}
                    {isFocused && 
                        <Text numberOfLines={1}
                              style={{marginLeft: SIZES.base , color: COLORS.white, ...FONTS.h3}}
                        >
                            {label}
                        </Text>
                    }
                </Animated.View>

            </Animated.View>
        </TouchableWithoutFeedback>
    )
}


const S_MainLayout = ({drawerAnimationStyle, navigation, selectedTab, setSelectedTab}) => {

    // FlatListRef = creating a FlatList for the page content
    const flatListRef = React.useRef()

    // Reanimated Shared Value
    //pass values to the <TabButton>

    const S_SearchTabFlex = useSharedValue(1)
    const S_SearchTabColor = useSharedValue(COLORS.white)

    const S_SentTabFlex = useSharedValue(1)
    const S_SentTabColor = useSharedValue(COLORS.white)

    const S_RequestsTabFlex = useSharedValue(1)
    const S_RequestsTabColor = useSharedValue(COLORS.white)

    const S_ApprovalsTabFlex = useSharedValue(1)
    const S_ApprovalsTabColor = useSharedValue(COLORS.white)

    const S_MyTabFlex = useSharedValue(1)
    const S_MyTabColor = useSharedValue(COLORS.white)

  
    //Define Reanimated Animated style

    //search
    const S_SearchFlexStyle = useAnimatedStyle(() => {
        return{
            flex: S_SearchTabFlex.value
        }
    })

    const S_SearchColorStyle = useAnimatedStyle (() =>{
        return{
            backgroundColor: S_SearchTabColor.value
        }
    })

    //sent Req
    const S_SentFlexStyle = useAnimatedStyle(() => {
        return{
            flex: S_SentTabFlex.value
        }
    })

    const S_SentColorStyle = useAnimatedStyle (() =>{
        return{
            backgroundColor: S_SentTabColor.value
        }
    })

    //requests
    const S_RequestsFlexStyle = useAnimatedStyle(() => {
        return{
            flex: S_RequestsTabFlex.value
        }
    })

    const S_RequestsColorStyle = useAnimatedStyle (() => {
        return{
            backgroundColor: S_RequestsTabColor.value
        }
    })

    //approvals
    const S_ApprovalsFlexStyle = useAnimatedStyle(() => {
        return{
            flex: S_ApprovalsTabFlex.value
        }
    })

    const S_ApprovalsColorStyle = useAnimatedStyle (() => {
        return{
            backgroundColor: S_ApprovalsTabColor.value
        }
    })

    //my
    const S_MyFlexStyle = useAnimatedStyle(() => {
        return{
            flex: S_MyTabFlex.value
        }
    })

    const S_MyColorStyle = useAnimatedStyle (() => {
        return{
            backgroundColor: S_MyTabColor.value
        }
    })

       //set a title for first loading the app
       React.useEffect(()=> {
        setSelectedTab(constants.screens.S_Search)
    }, [])

    React.useEffect(() => {


        if(selectedTab == constants.screens.S_Search){
            flatListRef?.current?.scrollToIndex({
                index: 0, animated : false
            })
            S_SearchTabFlex.value = withTiming(4, {duration: 500})
            S_SearchTabColor.value = withTiming(COLORS.primary, {duration: 500})
        }
        else{
            S_SearchTabFlex.value = withTiming(1, {duration: 500})
            S_SearchTabColor.value = withTiming(COLORS.white, {duration: 500})          
        }

        if(selectedTab == constants.screens.S_Sent){
            flatListRef?.current?.scrollToIndex({
                index: 1, animated : false
            })
            S_SentTabFlex.value = withTiming(4, {duration: 500})
            S_SentTabColor.value = withTiming(COLORS.primary, {duration: 500})
        }
        else{
            S_SentTabFlex.value = withTiming(1, {duration: 500})
            S_SentTabColor.value = withTiming(COLORS.white, {duration: 500})          
        }

        if(selectedTab == constants.screens.S_Requests){
            flatListRef?.current?.scrollToIndex({
                index: 2, animated : false
            })
            S_RequestsTabFlex.value = withTiming(4, {duration: 500})
            S_RequestsTabColor.value = withTiming(COLORS.primary, {duration: 500})
        }
        else{
            S_RequestsTabFlex.value = withTiming(1, {duration: 500})
            S_RequestsTabColor.value = withTiming(COLORS.white, {duration: 500})          
        }

        if(selectedTab == constants.screens.S_Approvals){
            flatListRef?.current?.scrollToIndex({
                index: 3, animated : false
            })
            S_ApprovalsTabFlex.value = withTiming(4, {duration: 500})
            S_ApprovalsTabColor.value = withTiming(COLORS.primary, {duration: 500})
        }
        else{
            S_ApprovalsTabFlex.value = withTiming(1, {duration: 500})
            S_ApprovalsTabColor.value = withTiming(COLORS.white, {duration: 500})          
        }

        if(selectedTab == constants.screens.S_My){
            flatListRef?.current?.scrollToIndex({
                index: 4, animated : false
            })
            S_MyTabFlex.value = withTiming(4, {duration: 500})
            S_MyTabColor.value = withTiming(COLORS.primary, {duration: 500})
        }
        else{
            S_MyTabFlex.value = withTiming(1, {duration: 500})
            S_MyTabColor.value = withTiming(COLORS.white, {duration: 500})          
        }
    }, [selectedTab] )


    
//     const CONTAINER_HEIGHT = 50;
//     const scrollY = useRef(new Animated.Value(0)).current;
//     const offsetAnim = useRef(new Animated.Value(0)).current;

//     const clampedScroll = Animated.diffClamp(
//         Animated.add(
//             scrollY.interpolate(
//                 inputRange= [0,1], 
//                 outputRange= [0,1], 
//                 extrapolateLeft= 'clamp'
//                 ), 
//             offsetAnim,
//         ), 0, 
//         CONTAINER_HEIGHT
//     ) 

//     var _clampedScrollValue = 0;
//     var _offsetValue = 0;
//     var _scrollValue = 0;
//     useEffect(()=> {
//         scrollY.addListener(({value}) => {
//             const diff = value - _scrollValue;
//             _scrollValue = value;
//             clampsedScrollValue = Math.min(
//                 Math.max(_clampedScrollValue * diff, 0).CONTAINER_HEIGHT,
//             )
//         });
//         offsetAnim.addListener(({value}) => {
//             _offsetValue = value;
//         })
//     }, []);

//     var scrollEndTimer =null;
//     const onMomentumScrollBegin =() => {clearTimeout(scrollEndTimer); }
//     const onMomentumScrollEnd = () => {
//         const toValue = scrollValue > CONTAINER_HEIGHT && _clampedScrollValue > CONTAINER_HEIGHT / 2 ? 
//         _offsetValue + CONTAINER_HEIGHT : _offsetValue - CONTAINER_HEIGHT;

//         Animated.timing(offsetAnim, {
//             toValue, 
//             duration: 500, 
//             useNativeDrawer: true, 
//         }).start();
//     }
//     const onScrollEndDrag = () => {
//         scrollEndTimer = setTimeout(onMomentumScrollEnd, 250);
//     }

//     const bottomBarTranslate = clampedScroll.interpolate(
//         inputRange= [0, CONTAINER_HEIGHT],
//         outputRange= [0, CONTAINER_HEIGHT*2],
//         extrapolate= 'clamp'
//    );


    return (
        <Animated.View style={{ flex: 1,backgroundColor:'#1B2131', ...drawerAnimationStyle}} >
            
            {/* Header */}
            <Header 
                containerStyle={{height: 50, paddingHorizontal: SIZES.padding, marginTop: 40, alignItems:'center'}}
                title ={selectedTab.toUpperCase()}

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
            <View style={{flex:1, }}>
                <FlatList 
                // onScroll ={Animated.event(
                //                     [{nativeEvent:{contentOffset: {y: scrollY} } }],
                //                     {useNativeDrawer: true }
                //                     )}
                          ref={flatListRef}
                          horizontal
                          scrollEnabled={false}
                          pagingEnabled
                          snapToAlignment='center'
                          snapToInterval = {SIZES.width}
                          showsHorizontalScrollIndicator = {false}
                          data ={constants.S_bottom_tabs}
                          keyExtractor = {item => `${item.id}`}

                        //   onMomentumScrollBegin={onMomentumScrollBegin}
                        //   onMomentumScrollEnd = {onMomentumScrollEnd}
                        //   onScrollEndDrag = {onScrollEndDrag}
                        //   onScrollEndDrag = {onScrollEndDrag}
                        //   scrollEventThrottle = {1}


                          renderItem ={({item, index}) => {
                              return(
                                <View style={{height: SIZES.height, width: SIZES.width}}>
                                    {/* if the item.label == home screen the render the home screen. like that it will render the relevant screen */}
                                    {item.label == constants.screens.S_Search && <S_Search/>}
                                    {item.label == constants.screens.S_Sent && <S_Sent/>}                                    
                                    {item.label == constants.screens.S_Requests && <S_Requests/>}
                                    {item.label == constants.screens.S_Approvals && <S_Approvals/>}
                                    {item.label == constants.screens.S_My && <S_My/>}
                                </View>
                              )
                          }}
                />
                

            </View>



            {/* Footer */}
            
            {/* <View style={{height: 65, justifyContent:'flex-end',  transform: [{translateY: bottomBarTranslate}]} }> */}
            <View style={{height: 65, justifyContent:'flex-end',}}>
                {/* shadow above the bottom tab navigator */}
                <LinearGradient  start = {{ x:0 , y:0 }} end = {{ x:0 , y:2 }}
                                 colors={[COLORS.transparent, 'black']}
                                 style= {{position: 'absolute', top: -20, left:0, right:0, height:100, borderTopLeftRadius: 15, borderTopRightRadius: 15}}
                />

                {/* bottom tab navigator buttons assigning values to it */}
                <View style={{flex:1, flexDirection:'row', paddingHorizontal: SIZES.radius, paddingBottom: 0, borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: COLORS.white}}>


                    <TabButton label = {constants.screens.S_Search}
                                icon = {icons.search}
                                isFocused = {selectedTab == constants.screens.S_Search}
                                outerContainerStyle={S_SearchFlexStyle}
                                innerContainerStyle ={S_SearchColorStyle}
                                onPress = {()=> setSelectedTab(constants.screens.S_Search)}
                    />

                    <TabButton label = {constants.screens.S_Sent}
                                icon = {icons.sentReq}
                                isFocused = {selectedTab == constants.screens.S_Sent}
                                outerContainerStyle={S_SentFlexStyle}
                                innerContainerStyle ={S_SentColorStyle}
                                onPress = {()=> setSelectedTab(constants.screens.S_Sent)}
                    />
                                       
                    <TabButton label = "Requests"
                                icon = {icons.recieves}
                                isFocused = {selectedTab == constants.screens.S_Requests}
                                outerContainerStyle={S_RequestsFlexStyle}
                                innerContainerStyle ={S_RequestsColorStyle}
                                onPress = {()=> setSelectedTab(constants.screens.S_Requests)}
                    />

                    <TabButton label = {constants.screens.S_Approvals}
                                icon = {icons.approval}
                                isFocused = {selectedTab == constants.screens.S_Approvals}
                                outerContainerStyle={S_ApprovalsFlexStyle}
                                innerContainerStyle ={S_ApprovalsColorStyle}
                                onPress = {()=> setSelectedTab(constants.screens.S_Approvals)}
                    />                    
                    
                    <TabButton label = {constants.screens.S_My}
                                icon = {icons.mine}
                                isFocused = {selectedTab == constants.screens.S_My}
                                outerContainerStyle={S_MyFlexStyle}
                                innerContainerStyle ={S_MyColorStyle}
                                onPress = {()=> setSelectedTab(constants.screens.S_My)}
                    />

                    
                </View>

            </View>

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
(S_MainLayout)