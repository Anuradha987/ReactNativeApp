import React, { Component, useEffect } from 'react';
import {
  View, Text, TouchableOpacity, Image, TextInput, FlatList, StyleSheet, ImageBackground, ScrollView,
  ActivityIndicator
} from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { FONTS, SIZES, COLORS, constants, icons, dummyData } from '../constants';
import { connect } from 'react-redux'
import { setSelectedTab } from '../stores/tab/tabActions';
import { Header } from '../components';
import { LinearGradient } from 'expo-linear-gradient';
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/EvilIcons";

const DB_MainLayout = ({ drawerAnimationStyle, selectedTab, setSelectedTab }) => {
  const navigation = useNavigation();

  const [recievedRequests, setRecievedRequests] = React.useState([]);
  const [recievedOrders, setRecievedOrders] = React.useState([]);
  //set a title for first loading the app
  //    React.useEffect(()=> {
  //     setSelectedTab(constants.screens.DB_MainLayout)
  // }, [])

  //#181938       

  //poppins insert
  const [loaded] = useFonts({
    poppinsregular: require('./../assets/fonts/Poppins-Regular.ttf'),
    poppins700: require('./../assets/fonts/poppins-700.ttf'),
  });

  useEffect(() => {
    console.log("DB_MainLayout");
  }, []);

  return (
    (!loaded) ?
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
      ) :
      (<Animated.View style={{ flex: 1, backgroundColor: "rgba(21,31,40,1)", ...drawerAnimationStyle }} >
        {/* Header */}
        <Header
          containerStyle={{ height: 30, paddingHorizontal: SIZES.padding, marginTop: 20, marginBottom: 15, alignItems: 'center', }}
          // title ={selectedTab.toUpperCase()}
          title="DASHBOARD"

          leftComponent={
            <TouchableOpacity style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: COLORS.gray2, borderRadius: SIZES.radius }}
              onPress={() => navigation.openDrawer()}
            >
              <Image source={icons.menu} />
            </TouchableOpacity>
          }

          rightComponent={
            // <TouchableOpacity style={{borderRadius: SIZES.radius, alignItems: 'center', justifyContent:'center'}}>
            //     <Image source={dummyData?.myProfile?.profile_image}
            //             style={{width:40, height:40, borderRadius:SIZES.radius}}
            //     />
            // </TouchableOpacity>
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

        {/* Greeting text */}
        <FlatList
          listKey='1.2'
          showsVerticalScrollIndicator={true}
          ListHeaderComponent={
            <View>
              <Text style={styles.helloName}>Hi, {dummyData.myProfile?.name}.👋</Text>
              <Text style={styles.text1}>
                Discover anything you want and let others know how you can serve them.
              </Text>


              {/* Total services and items i have published so far. (On My services and my items) */}
              {/* <View style={styles.Totals}> */}

              {/* <View style={styles.totalServicesBoxRow}>
        <ImageBackground
          style={styles.totalServicesBox}
          imageStyle={styles.totalServicesBox_imageStyle}
          source={require("./../assets/images/Gradient_ZhvenFe.png")}
        >
          <Text style={styles.totalServicestxt}>Total Services</Text>
          <Text style={styles.totalServicesNo}>25</Text>
        </ImageBackground>

        <View style={styles.totalItemsBoxStack}>
          <ImageBackground
            style={styles.totalItemsBox}
            imageStyle={styles.totalItemsBox_imageStyle}
            source={require("./../assets/images/Gradient_ZhvenFe.png")}
          >
            <Text style={styles.totalItemstxt}>Total Items</Text>
          
          <Text style={styles.totalItemsNo}>25</Text>
          </ImageBackground>
        </View>
      </View> */}

              {/* </View> */}


              {/* Search bar */}

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


              {/* Categories */}
              <Text style={styles.categorieslbl}>Categories</Text>
              {/* <View style={styles.categoryscrollArea}>
        <ScrollView
          contentContainerStyle={
            styles.categoryscrollArea_contentContainerStyle
          }
        > */}
              <FlatList
                listKey='1.3'
                columnWrapperStyle={{ justifyContent: 'space-between', marginHorizontal: 20, }}
                data={dummyData.categories}
                keyExtractor={(item) => `${item.id}`}
                //horizontal
                showsHorizontalScrollIndicator={false}
                numColumns={4}

                renderItem={({ item, index }) => {
                  return (
                    <View style={styles.group}>
                      <TouchableOpacity style={styles.categoryCircle}>
                        <Image
                          source={item.icon}
                          resizeMode="contain"
                          style={styles.categoryIcon}
                        ></Image>
                      </TouchableOpacity>
                      <Text style={styles.categoryName}>{item.name}</Text>
                    </View>
                  )
                }} />
              {/* <View style={styles.categoryCircle}>
              <Image
                source={require("./../assets/icons/Agricultural.png")}
                resizeMode="contain"
                style={styles.categoryIcon}
              ></Image>
            </View>
            <Text style={styles.categoryName}>Agriculture</Text>
          </View>
          <View style={styles.image7Stack}>
            <Image
              source={require("./../assets/icons/Agricultural.png")}
              resizeMode="contain"
              style={styles.image7}
            ></Image>
            <View style={styles.rect12}></View>
          </View>
          <Text style={styles.agriculture7}>Agriculture</Text> */}

              {/* </ScrollView>
      </View> */}


              {/* Service Requests Recieved */}
              {recievedRequests.length > 0 ?
                (<View style={styles.recievedRequestslblRow}>
                  <Text style={styles.recievedRequestslbl}>Recieved Requests</Text>
                  <TouchableOpacity style={styles.viewAllView1} onPress={() => navigation.navigate("S_Requests")}>
                    <Text style={styles.viewAlltxt1}>View all</Text>
                  </TouchableOpacity>
                </View>)
                  (
                    <FlatList data={dummyData.OtherRecieveRequest}
                      listKey='1.4'
                      horizontal
                      keyExtractor={(item) => `${item.id}`}
                      showsHorizontalScrollIndicator={false}
                      style={{ marginHorizontal: 10 }}
                      renderItem={({ item, index }) => {
                        return (
                          <TouchableOpacity style={styles.reqBox}>
                            <View style={styles.sentDateRow}>
                              <Text style={styles.sentDate}>{item.publishDate}</Text>
                              <View style={styles.priorityDot}></View>
                            </View>
                            <Text style={styles.serviceTitle}>{item.senderName}</Text>
                            <View style={styles.cateIconRow}>
                              {/* <Icon name="archive"></Icon> */}
                              <Image source={require('./../assets/icons/foods.png')}
                                style={styles.cateIcon}
                                resizeMode="contain">
                              </Image>
                              <Text style={styles.cateName}>Food &amp; Drink</Text>
                            </View>
                            <View style={styles.toPublicOrMeRow}>
                              <Text style={styles.toPublicOrMe}>To: Public /Me</Text>
                              <TouchableOpacity style={styles.acceptReqBtn}>
                                <Text style={styles.accept}>Accept</Text>
                              </TouchableOpacity>
                            </View>
                          </TouchableOpacity>
                        )
                      }} />
                  )
                :
                null
              }

              {/* Recieved Orders */}

              {recievedOrders.length > 0 ? (
                <View style={styles.itemOrderslblRow}>
                  <Text style={styles.itemOrderslbl}>Item Orders</Text>
                  <TouchableOpacity style={styles.viewAllView2} onPress={() => navigation.navigate('I_My')}>
                    <Text style={styles.viewAlltxt2}>View all</Text>
                  </TouchableOpacity>
                </View>)(

                  <FlatList
                    listKey='1.5'
                    onPress={() => { }}
                    data={dummyData.myItemsData}
                    keyExtractor={(item) => `${item.id}`}
                    style={styles.scrollAreaItemOrders}
                    renderItem={({ item, index }) => {
                      return (
                        <TouchableOpacity style={styles.ordersBox}>
                          <View style={styles.itemImageRow}>
                            <Image
                              source={item.itemImage}
                              resizeMode="cover"
                              style={styles.itemImage}
                            ></Image>
                            <View style={styles.senderNameColumn}>
                              <Text style={styles.senderName}>Sunimal Kumara</Text>
                              <View style={styles.amountlblColumnRowRow}>
                                <View style={styles.amountlblColumnRow}>

                                  <View style={styles.amountlblColumn}>
                                    <Text style={styles.amountlbl}>Amount :</Text>
                                    <Text style={styles.returningDateOrBarterFor}>Returning {"\n"}Date : </Text>
                                  </View>
                                  <View style={styles.amounttxtColumn}>
                                    <Text style={styles.amounttxt}>1250g</Text>
                                    <Text style={styles.returningDateOrBarterFortxt}>20/01/22</Text>
                                  </View>
                                </View>

                                <TouchableOpacity style={styles.orderAcceptBtn} onPress={() => { }}>
                                  <Text style={styles.accept1}>Accept</Text>
                                </TouchableOpacity>
                              </View>
                            </View>
                          </View>
                        </TouchableOpacity>


                      )
                    }} />
                ) : null}

              <View style={{ marginBottom: 80 }}></View>
            </View>} />
      </Animated.View>)
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

const styles = StyleSheet.create({
  helloName: {
    fontFamily: "poppins700",
    color: "rgba(255,255,255,1)",
    fontSize: 23,
    marginTop: 30,
    marginHorizontal: 20
  },
  text1: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    marginTop: 12,
    marginHorizontal: 22
  },
  totalServicesBox: {
    width: 134,
    height: 134,
    borderRadius: 20,
    overflow: "hidden"
  },
  totalServicesBox_imageStyle: {},
  totalServicestxt: {
    top: 25,
    position: "absolute",
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    left: 0,
    textAlign: "center",
    width: 134,
  },
  totalServicesNo: {
    left: 0,
    position: "absolute",
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    top: 63,
    textAlign: "center",
    width: 134,
    // backgroundColor:'#F6088B'
  },
  totalServicestxtStack: {
    width: 134,
    height: 100,
    marginTop: 24,
  },
  totalItemsBox: {
    top: 0,
    width: 134,
    height: 134,
    position: "absolute",
    borderRadius: 20,
    right: 0,
    overflow: "hidden"
  },
  totalItemsBox_imageStyle: {},
  totalItemstxt: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    marginTop: 25,
    left: 0,
    textAlign: "center",
    width: 134,
  },
  totalItemsNo: {
    left: 0,
    position: "absolute",
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    top: 63,
    textAlign: "center",
    width: 134,
  },
  totalItemsBoxStack: {
    right: 0,
    position: 'absolute',
  },
  totalServicesBoxRow: {
    //height: 135,
    flexDirection: "row",
    marginTop: 34,
    marginHorizontal: 35
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
    shadowOpacity: 1,
    shadowRadius: 5,
    flexDirection: "row",
    marginTop: 30,
    marginHorizontal: 20
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
  },
  searchIcon: {
    color: "#9c8df0",
    fontSize: 29,
    height: 32,
    width: 29,
    marginRight: 10,
    marginTop: 13
  },
  categorieslbl: {
    fontFamily: "poppins700",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 34,
    marginLeft: 20,
    marginRight: 37
  },
  categoryscrollArea: {
    height: 185,
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 11,
    marginLeft: 13,
    marginRight: 10
  },
  categoryscrollArea_contentContainerStyle: {
    height: 185,
  },
  group: {
    width: 65,
    height: 68,
    marginTop: 30,
    alignItems: 'center'
  },
  categoryCircle: {
    width: 48,
    height: 48,
    backgroundColor: "rgba(81,81,81,0.69)",
    borderRadius: 24,
  },
  categoryIcon: {
    width: 25,
    height: 25,
    marginTop: 12,
    marginLeft: 11
  },
  categoryName: {
    fontFamily: "poppinsregular",
    color: "rgba(178,178,179,1)",
    fontSize: 9,
    marginTop: 6,
    width: 80,
    textAlign: 'center',
  },
  image7: {
    top: 12,
    left: 11,
    width: 25,
    height: 25,
    position: "absolute"
  },
  rect12: {
    top: 0,
    left: 0,
    width: 48,
    height: 48,
    position: "absolute",
    backgroundColor: "rgba(81,81,81,0.69)",
    borderRadius: 24
  },
  image7Stack: {
    width: 48,
    height: 48,
    marginTop: 13,
    marginLeft: 19
  },
  agriculture7: {
    fontFamily: "poppinsregular",
    color: "rgba(178,178,179,1)",
    fontSize: 9,
    textAlign: "center",
    marginTop: 6,
    marginLeft: 11
  },
  recievedRequestslbl: {
    fontFamily: "poppins700",
    color: "rgba(255,255,255,1)",
    fontSize: 18
  },
  viewAllView1: {
    height: 27,
    flexDirection: "row",
    position: 'absolute',
    right: 1,
  },
  viewAlltxt1Filler: {
    flex: 1,
    flexDirection: "row"
  },
  viewAlltxt1: {

    fontFamily: "poppins700",
    color: "rgba(156,141,240,1)", width: 75,
    textAlign: 'right'
  },
  recievedRequestslblRow: {
    height: 27,
    flexDirection: "row",
    marginTop: 70,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  reqScrollArea: {
    height: 109,
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 14,
    marginLeft: 13,
    marginRight: 10
  },
  reqScrollArea_contentContainerStyle: {
    height: 109,
  },
  reqBox: {
    width: 250,
    height: 115,
    backgroundColor: "rgba(65,58,100,0.7)",
    borderRadius: 20,
    marginLeft: 15
  },
  sentDate: {
    fontFamily: "poppinsregular",
    color: "rgba(145,145,145,1)",
    textAlign: "right",
    fontSize: 10,
    right: 0,
    marginRight: 25, position: 'absolute'
  },
  priorityDot: {
    width: 14,
    height: 14,
    backgroundColor: "rgba(248,231,28,1)",
    borderRadius: 10,
    marginLeft: 8,
    marginTop: 1,
    right: 1, position: 'absolute'
  },
  sentDateRow: {
    height: 15,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 21,
    marginRight: 12,
  },
  serviceTitle: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    fontSize: 13,
    // width: 180,
    height: 20,
    marginHorizontal: 5,
    marginTop: 2,
  },
  cateIcon: {
    height: 14,
    width: 14
  },
  cateName: {
    fontFamily: "poppinsregular",
    color: "rgba(112,214,235,1)",
    fontSize: 10,
    marginLeft: 5,
  },
  cateIconRow: {
    height: 16,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 10,
    marginRight: 18,
  },
  toPublicOrMe: {
    fontFamily: "poppinsregular",
    color: "rgba(224,224,224,1)",
    fontSize: 12,
    position: "absolute",
    bottom: 12
  },
  acceptReqBtn: {
    width: 90,
    height: 40,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "rgba(8,225,0,1)",
    right: 4,
    position: 'absolute',
  },
  accept: {
    fontFamily: "poppinsregular",
    color: "rgba(8,225,0,1)",
    textAlign: "center",
    fontSize: 12,
    marginTop: 7
  },
  toPublicOrMeRow: {
    flex: 1,
    flexDirection: "row",
    marginTop: 3,
    marginLeft: 10,
    marginRight: 9,
  },
  itemOrderslbl: {
    fontFamily: "poppins700",
    color: "rgba(255,255,255,1)",
    fontSize: 18
  },
  itemOrderslblFiller: {
    flex: 1,
    flexDirection: "row"
  },
  viewAllView2: {
    width: 75,
    height: 27,
    flexDirection: "row",
    position: 'absolute',
    right: 1,
  },
  viewAlltxt2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  viewAlltxt2: {
    fontFamily: "poppins700",
    color: "rgba(156,141,240,1)", width: 75,
    textAlign: 'right'
  },
  itemOrderslblRow: {
    height: 27,
    flexDirection: "row",
    marginTop: 40,
    marginLeft: 21,
    marginRight: 19
  },
  scrollAreaItemOrders: {
    height: 330,
    marginTop: 26,
    marginHorizontal: 15,
  },
  ordersBox: {
    height: 98,
    backgroundColor: "rgba(65,58,100,1)",
    borderRadius: 20,
    marginBottom: 15,
  },
  itemImage: {
    width: 90,
    height: 90,
    borderRadius: 20
  },
  senderName: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    marginHorizontal: 8,
  },
  amountlbl: {
    fontFamily: "poppinsregular",
    color: "rgba(125,123,123,1)",
    fontSize: 11
  },
  returningDateOrBarterFor: {
    fontFamily: "poppinsregular",
    color: "rgba(125,123,123,1)",
    fontSize: 11,
    lineHeight: 12,
    marginTop: 5
  },
  amountlblColumn: {
    // width: 54,
    marginTop: 1,
    marginBottom: 17
  },
  amounttxt: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    fontSize: 13
  },
  returningDateOrBarterFortxt: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    fontSize: 13,
    marginTop: 5
  },
  amounttxtColumn: {
    width: 140,
    marginLeft: 5,
    marginTop: 0,
    marginBottom: 0,
  },
  amountlblColumnRow: {
    flexDirection: "row",
  },
  orderAcceptBtn: {
    width: 52,
    height: 52,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "rgba(8,225,0,1)",
    flexDirection: "row",
    position: 'absolute',
    right: 5,
  },
  accept1: {
    width: 47,
    fontFamily: "poppinsregular",
    color: "rgba(8,225,0,1)",
    textAlign: "center",
    fontSize: 11,
    textAlignVertical: 'center',
  },
  amountlblColumnRowRow: {
    height: 62,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 10,
  },
  senderNameColumn: {
    flex: 1,
  },
  itemImageRow: {
    height: 90,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 4,
    marginRight: 6,
  }
});


export default connect(mapStateToProps, mapDispatchToProps)
  (DB_MainLayout)