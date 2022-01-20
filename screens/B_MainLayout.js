import React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput, FlatList, TouchableWithoutFeedback} from 'react-native';
import Animated, {useSharedValue, useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {FONTS, SIZES, COLORS, constants, icons, dummyData} from '../constants';
import {connect} from 'react-redux'
import { setSelectedTab } from '../stores/tab/tabActions';
import { Header } from '../components';
import { LinearGradient } from 'expo-linear-gradient';

//these are the screens that renders within the S_MainLayout
import { B_Sent, B_My, B_Approvals, B_Search, B_ReceiveReq } from '.';


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


const B_MainLayout = ({drawerAnimationStyle, navigation, selectedTab, setSelectedTab}) => {

        // FlatListRef = creating a FlatList for the page content
        const flatListRef = React.useRef()

        // Reanimated Shared Value
        //pass values to the <TabButton>
    
        const B_SearchTabFlex = useSharedValue(1)
        const B_SearchTabColor = useSharedValue(COLORS.white)
    
        const B_SentTabFlex = useSharedValue(1)
        const B_SentTabColor = useSharedValue(COLORS.white)

        const B_ReceiveReqTabFlex = useSharedValue(1)
        const B_ReceiveReqTabColor = useSharedValue(COLORS.white)
    
        const B_ApprovalsTabFlex = useSharedValue(1)
        const B_ApprovalsTabColor = useSharedValue(COLORS.white)
    
        const B_MyTabFlex = useSharedValue(1)
        const B_MyTabColor = useSharedValue(COLORS.white)
    
      
        //Define Reanimated Animated style
    
        //search
        const B_SearchFlexStyle = useAnimatedStyle(() => {
            return{
                flex: B_SearchTabFlex.value
            }
        })
    
        const B_SearchColorStyle = useAnimatedStyle (() =>{
            return{
                backgroundColor: B_SearchTabColor.value
            }
        })

        //sent Req
        const B_SentFlexStyle = useAnimatedStyle(() => {
            return{
                flex: B_SentTabFlex.value
            }
        })
    
        const B_SentColorStyle = useAnimatedStyle (() => {
            return{
                backgroundColor: B_SentTabColor.value
            }
        })

        //Recieve Requests
        const B_ReceiveReqFlexStyle = useAnimatedStyle(() => {
            return{
                flex: B_ReceiveReqTabFlex.value
            }
        })
    
        const B_ReceiveReqColorStyle = useAnimatedStyle (() => {
            return{
                backgroundColor: B_ReceiveReqTabColor.value
            }
        })
    
        //Approvals
        const B_ApprovalsFlexStyle = useAnimatedStyle(() => {
            return{
                flex: B_ApprovalsTabFlex.value
            }
        })
    
        const B_ApprovalsColorStyle = useAnimatedStyle (() => {
            return{
                backgroundColor: B_ApprovalsTabColor.value
            }
        })
    
        //my
        const B_MyFlexStyle = useAnimatedStyle(() => {
            return{
                flex: B_MyTabFlex.value
            }
        })
    
        const B_MyColorStyle = useAnimatedStyle (() => {
            return{
                backgroundColor: B_MyTabColor.value
            }
        })

           //set a title for first loading the app
           React.useEffect(()=> {
            setSelectedTab(constants.screens.B_Sent)
        }, [])

        React.useEffect(() => {

            if(selectedTab == constants.screens.B_Search){
                flatListRef?.current?.scrollToIndex({
                    index: 0, animated : false
                })
                B_SearchTabFlex.value = withTiming(4, {duration: 500})
                B_SearchTabColor.value = withTiming(COLORS.primary, {duration: 500})
            }
            else{
                B_SearchTabFlex.value = withTiming(1, {duration: 500})
                B_SearchTabColor.value = withTiming(COLORS.white, {duration: 500})          
            }
    
            if(selectedTab == constants.screens.B_Sent){
                flatListRef?.current?.scrollToIndex({
                    index: 1, animated : false
                })
                B_SentTabFlex.value = withTiming(4, {duration: 500})
                B_SentTabColor.value = withTiming(COLORS.primary, {duration: 500})
            }
            else{
                B_SentTabFlex.value = withTiming(1, {duration: 500})
                B_SentTabColor.value = withTiming(COLORS.white, {duration: 500})          
            }
    
            if(selectedTab == constants.screens.B_ReceiveReq){
                flatListRef?.current?.scrollToIndex({
                    index: 2, animated : false
                })
                B_ReceiveReqTabFlex.value = withTiming(4, {duration: 500})
                B_ReceiveReqTabColor.value = withTiming(COLORS.primary, {duration: 500})
            }
            else{
                B_ReceiveReqTabFlex.value = withTiming(1, {duration: 500})
                B_ReceiveReqTabColor.value = withTiming(COLORS.white, {duration: 500})          
            }   

            if(selectedTab == constants.screens.B_Approvals){
                flatListRef?.current?.scrollToIndex({
                    index: 3, animated : false
                })
                B_ApprovalsTabFlex.value = withTiming(4, {duration: 500})
                B_ApprovalsTabColor.value = withTiming(COLORS.primary, {duration: 500})
            }
            else{
                B_ApprovalsTabFlex.value = withTiming(1, {duration: 500})
                B_ApprovalsTabColor.value = withTiming(COLORS.white, {duration: 500})          
            }
                
            if(selectedTab == constants.screens.B_My){
                flatListRef?.current?.scrollToIndex({
                    index: 4, animated : false
                })
                B_MyTabFlex.value = withTiming(4, {duration: 500})
                B_MyTabColor.value = withTiming(COLORS.primary, {duration: 500})
            }
            else{
                B_MyTabFlex.value = withTiming(1, {duration: 500})
                B_MyTabColor.value = withTiming(COLORS.white, {duration: 500})          
            }
        }, [selectedTab] )



    return (
        <Animated.View style={{ flex: 1,backgroundColor:'white', ...drawerAnimationStyle}} >
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
            <View style={{flex:1}}>
            <FlatList ref={flatListRef}
                          horizontal
                          scrollEnabled={false}
                          pagingEnabled
                          snapToAlignment='center'
                          snapToInterval = {SIZES.width}
                          showsHorizontalScrollIndicator = {false}
                          data ={constants.B_bottom_tabs}
                          keyExtractor = {item => `${item.id}`}
                          renderItem ={({item, index}) => {
                              return(
                                <View style={{height: SIZES.height, width: SIZES.width}}>
                                    {/* if the item.label == home screen the render the home screen. like that it will render the relevant screen */}
                                    {item.label == constants.screens.B_Search && <B_Search/>}
                                    {item.label == constants.screens.B_Sent && <B_Sent/>}
                                    {item.label == constants.screens.B_ReceiveReq && <B_ReceiveReq/>}
                                    {item.label == constants.screens.B_Approvals && <B_Approvals/>}
                                    {item.label == constants.screens.B_My && <B_My/>}
                                </View>
                              )
                          }}
                />
            </View>



            {/* Footer */}
            
            <View style={{height: 65, justifyContent:'flex-end'}}>

                {/* shadow above the bottom tab navigator */}
                <LinearGradient  start = {{ x:0 , y:0 }} end = {{ x:0 , y:2 }}
                                 colors={[COLORS.transparent, 'black']}
                                 style= {{position: 'absolute', top: -20, left:0, right:0, height:100, borderTopLeftRadius: 15, borderTopRightRadius: 15}}
                />

                {/* bottom tab navigator buttons assigning values to it */}
                <View style={{flex:1, flexDirection:'row', paddingHorizontal: SIZES.radius, paddingBottom: 0, borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: COLORS.white}}>

                    <TabButton label = {constants.screens.B_Search}
                                icon = {icons.search}
                                isFocused = {selectedTab == constants.screens.B_Search}
                                outerContainerStyle={B_SearchFlexStyle}
                                innerContainerStyle ={B_SearchColorStyle}
                                onPress = {()=> setSelectedTab(constants.screens.B_Search)}
                    />
                        
                    <TabButton label = {constants.screens.B_Sent}
                                icon = {icons.sentReq}
                                isFocused = {selectedTab == constants.screens.B_Sent}
                                outerContainerStyle={B_SentFlexStyle}
                                innerContainerStyle ={B_SentColorStyle}
                                onPress = {()=> setSelectedTab(constants.screens.B_Sent)}
                    />

                    <TabButton label = {constants.screens.B_ReceiveReq}
                                icon = {icons.recieves}
                                isFocused = {selectedTab == constants.screens.B_ReceiveReq}
                                outerContainerStyle={B_ReceiveReqFlexStyle}
                                innerContainerStyle ={B_ReceiveReqColorStyle}
                                onPress = {()=> setSelectedTab(constants.screens.B_ReceiveReq)}
                    />                    
                                   
                    <TabButton label = {constants.screens.B_Approvals}
                                icon = {icons.approval}
                                isFocused = {selectedTab == constants.screens.B_Approvals}
                                outerContainerStyle={B_ApprovalsFlexStyle}
                                innerContainerStyle ={B_ApprovalsColorStyle}
                                onPress = {()=> setSelectedTab(constants.screens.B_Approvals)}
                    />

                    <TabButton label = {constants.screens.B_My}
                                icon = {icons.mine}
                                isFocused = {selectedTab == constants.screens.B_My}
                                outerContainerStyle={B_MyFlexStyle}
                                innerContainerStyle ={B_MyColorStyle}
                                onPress = {()=> setSelectedTab(constants.screens.B_My)}
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
(B_MainLayout)