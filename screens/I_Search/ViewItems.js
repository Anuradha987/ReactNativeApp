import React, { Component, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions,
  FlatList,
  ActivityIndicator
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MapView from "react-native-maps";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FixedFooterOrderItem from "./../../components/FixedFooterOrderItem";
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from "react-native-vector-icons/SimpleLineIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
//import { SliderBox } from "react-native-image-slider-box";
//import ImageSlider from 'react-native-image-slider';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import dummyData from './../../constants/dummyData'
const windowHeight = Dimensions.get('screen').height;
const windowWidth = Dimensions.get('window').width;

const ViewItems = ({ navigation }) => {
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
    (<View style={styles.container}>
      <FlatList
         listKey="13.1"
        showsVerticalScrollIndicator={true}
        ListHeaderComponent={
          <View style={{ height: 1350 }}>
            <View style={styles.productImageStack}>
              <ImageBackground
                source={require("./../../assets/images/organic-avocados.jpg")}
                resizeMode="cover"
                style={styles.productImage}
                imageStyle={styles.productImage_imageStyle}
              >

                <TouchableOpacity style={styles.backBtn}
                  onPress={() => navigation.goBack()}>
                  <Icon name="arrow-left" style={styles.backIcon}></Icon>
                </TouchableOpacity>

                

              

                  <View style={styles.slidingDots}>
                    <View style={styles.rect2}></View>
                    <View style={styles.rect3}></View>
                    <View style={styles.rect4}></View>
                    <View style={styles.rect5}></View>
                    <View style={styles.rect6}></View>
                  </View>
                
              </ImageBackground>

              <View style={styles.userImageCircleRow}>    
              <TouchableOpacity style={styles.userImageCircle}>
                    <Image
                      source={require("./../../assets/images/avatar-1.jpg")}
                      resizeMode="contain"
                      style={styles.userImage}
                    ></Image>
                  </TouchableOpacity></View>


              <View style={styles.userDetails}>
                <View style={styles.userNameStack}>
                  <Text numberOfLines={1} style={styles.userName}>Natasha Perera</Text>
                  <Text style={styles.posetedDate}>21/12/20</Text>
                </View>
              </View>

              <View style={styles.anemanda}>

                <Text style={styles.itemName} numberOfLines={1} >Avocado</Text>
                <View style={styles.cateIconRow}>
                  <Image
                    source={require("./../../assets/icons/foods.png")}
                    resizeMode="contain"
                    style={styles.cateIcon}
                  ></Image>
                  <Text style={styles.cateName}>Food &amp; Drinks</Text>
                </View>
                <Text style={styles.itemDescription}>
                  Fresh avocado that plucked from our home garden. 500g harvest have
                  been collected.A description about the product thatuser sells.
                </Text>
                <View style={styles.totalAmountlblRow}>
                  <Text style={styles.totalAmountlbl}>Total Amount</Text>
                  <View style={styles.totalAmountlblFiller}></View>
                  <Text numberOfLines={1} style={styles.totalAmount}>550g</Text>
                </View>
                <View style={styles.forCashlblRow}>
                  <Text style={styles.forCashlbl}>For Cash</Text>
                <View style={styles.totalCashlblFiller}></View>
                  <Text numberOfLines={1} style={styles.price}>Rs.30/100g</Text>
                </View>

                <View style={{ height: 1, marginVertical: 9, marginHorizontal: 12, backgroundColor: "rgba(175,172,172,1)", }}></View>


                <View style={styles.contactGroups}>
                  <TouchableOpacity style={styles.addFavBtn}>
                    <FeatherIcon name="heart" style={styles.favIcon}></FeatherIcon></TouchableOpacity>

                  <TouchableOpacity style={styles.callBtn}>
                    <FeatherIcon name="phone" style={styles.callIcon}></FeatherIcon></TouchableOpacity>

                  <TouchableOpacity style={styles.msgBtn}>
                    <FeatherIcon
                      name="message-square"
                      style={styles.msgIcon}
                    ></FeatherIcon>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.sendReqBtn}>
                    <FontAwesomeIcon
                      name="share-square-o"
                      style={styles.sendReqIcon}
                    ></FontAwesomeIcon>
                  </TouchableOpacity>
                </View>


                <View style={styles.mapViewStackStack}>
                  <View style={styles.mapViewStack}>
                    <MapView
                      provider={MapView.PROVIDER_GOOGLE}
                      initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                      }}
                      customMapStyle={[]}
                      style={styles.mapView}
                    ></MapView>
                    <EntypoIcon
                      name="location-pin"
                      style={styles.locationIcon}
                    ></EntypoIcon>
                    <Image
                      source={require("./../../assets/images/avatar-1.jpg")}
                      resizeMode="contain"
                      style={styles.userLocation}
                    ></Image>

                  </View>
                  <Text style={styles.viewOnTheMap}>View on the map</Text>
                </View>

                <View style={styles.rect1}>
                  <Text style={styles.similarResults}>Similar results</Text>
                </View>

                <FlatList
                  listKey="13.2"
                  data={dummyData.itemsSearchList}
                  keyExtractor={(item) => `${item.id}`}
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  style={{ marginHorizontal: 10, }}
                  renderItem={({ item, index }) => {
                    return (

                      <View >
                        <TouchableOpacity style={styles.productsCardStack}>
                          <LinearGradient
                            colors={['#3b3b4a', '#212126', '#3b3b4a']}
                            style={styles.productsCard}
                          >

                            <ImageBackground
                              source={require("./../../assets/images/organic-avocados.jpg")}
                              resizeMode="cover"
                              style={styles.productImage1}
                              imageStyle={styles.productImage1_imageStyle}
                            >
                              <IoniconsIcon
                                name="md-heart"
                                style={styles.favIcon1}
                              ></IoniconsIcon>
                            </ImageBackground>

                            <View style={styles.productNameStackStack}>
                              <View style={styles.productNameStack}>
                                <Text numberOfLines={1} style={styles.productName}>Avocado</Text>
                                <Image
                                  source={require("./../../assets/icons/foods.png")}
                                  resizeMode="contain"
                                  style={styles.cateIcon1}
                                ></Image>
                              </View>
                              <Text style={styles.cateName1} numberOfLines={1}>
                                Electronics &amp; Electrics
                              </Text>
                            </View>
                            <View style={styles.transactionMethod1Stack}>
                              <Text numberOfLines={1} style={styles.transactionMethod1}>For Cash</Text>
                              <Text numberOfLines={1} style={styles.price1}>Rs.30/100g</Text>
                            </View>
                          </LinearGradient>

                        </TouchableOpacity>
                      </View>
                    )
                  }} />
              </View>
            </View>
            <View style={{ marginTop: 110 }}></View>
          </View>
        } />

      <FixedFooterOrderItem
        style={styles.fixedFooterOrderItem}
      ></FixedFooterOrderItem>
    </View>)
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21,31,40,1)", elevation: 0,
  },
  productImage: {
    top: 0,
    left: 0,
    height: 340,
    right: 0
  },
  productImage_imageStyle: {},
  backBtn: {
    width: 40,
    height: 40,
    marginTop: 19,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#BBBDC1',
    borderRadius: 12,
  },
  backIcon: {
    color: '#BBBDC1',
    fontSize: 20,
    marginRight:2,
  },
  userImageCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#9c8df0",
  },
  userImage: {
    width: 35,
    height: 35,
    marginTop: 7,
    marginLeft: 7, 
  },
  slidingDots: {
    width: 88,
    height: 10,
    flexDirection: "row",
    justifyContent: "space-between", alignItems: 'center', 
    marginHorizontal: 150,
    marginTop: 2, 
    position:'absolute', 
    bottom:30, 
  },
  rect2: {
    width: 10,
    height: 10,
    backgroundColor: "rgba(199,199,199,1)",
    borderRadius: 5
  },
  rect3: {
    width: 10,
    height: 10,
    backgroundColor: "rgba(199,199,199,1)",
    borderRadius: 5
  },
  rect4: {
    width: 20,
    height: 10,
    backgroundColor: "rgba(199,199,199,1)",
    borderRadius: 5
  },
  rect5: {
    width: 10,
    height: 10,
    backgroundColor: "rgba(199,199,199,1)",
    borderRadius: 5
  },
  rect6: {
    width: 10,
    height: 10,
    backgroundColor: "rgba(199,199,199,1)",
    borderRadius: 5
  },
  userImageCircleRow: {
    height: 50,
    flexDirection: "row",
    marginTop: -45,
    marginLeft: 24,
    width:55, elevation:30
  },
  userDetails: {
    top: 325,
    left: 0,
    marginBottom: 0,
    height: 70,
    position: "absolute",
    backgroundColor: "#9c8df0",
    borderTopRightRadius: 36,
    borderTopLeftRadius: 36,
    right: 0,
    bottom: 0,
  },
  userName: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    right: 100,
    marginHorizontal: 30,
  },
  posetedDate: {
    top: 0,
    left: 320,
    position: "absolute",
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    textAlign: "right"
  },
  userNameStack: {
    height: 21,
    marginTop: 21,
  },
  anemanda: {
    backgroundColor: "rgba(21,31,40,1)",
    top: 27,
    borderTopRightRadius: 36,
    borderTopLeftRadius: 36,
    width: windowWidth,
    padding: 5
  },
  itemName: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    fontSize: 22,
    marginTop: 15,
    marginLeft: 31,
    marginRight: 15,
  },
  cateIcon: {
    width: 17,
    height: 17
  },
  cateName: {
    fontFamily: "poppinsregular",
    color: "rgba(235,214,112,1)",
    fontSize: 12,
    marginLeft: 15
  },
  cateIconRow: {
    height: 18,
    flexDirection: "row",
    marginTop: 1,
    marginLeft: 31,
    marginRight: 29
  },
  itemDescription: {
    fontFamily: "poppinsregular",
    color: "rgba(199,199,199,1)",
    textAlign: "justify",
    fontSize: 14,
    marginTop: 12,
    marginLeft: 24,
    marginRight: 20
  },
  totalAmountlbl: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)"
  },
  totalAmountlblFiller: {
    flex: 1,
    flexDirection: "row"
  },
  totalAmount: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    textAlign: "right"
  },
  totalAmountlblRow: {
    height: 21,
    flexDirection: "row",
    marginTop: 35,
    marginLeft: 25,
    marginRight: 25
  },
  forCashlbl: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",    
    height: 25
  },
  totalCashlblFiller: {
    flex: 1,
    flexDirection: "row"
  },
  price: {
    fontFamily: "poppinsregular",
    color: "rgba(160,135,186,1)",
    textAlign: "right",
    fontSize: 16,
  },
  forCashlblRow: {
    height: 25,
    flexDirection: "row",
    marginTop: 18,
    marginBottom: 20,
    marginLeft: 25,
    marginRight:25,
  },
  contactGroups: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
    marginLeft: 38,
    marginRight: 44
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
    left: 11,
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
    top: 10,
    left: 10,
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
    top: 10,
    left: 10,
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
    borderRadius: 15, alignItems: 'center',
  },
  sendReqIcon: {
    top: 10,
    left: 12,
    position: "absolute",
    color: "rgba(235,214,112,1)",
    fontSize: 30,
    height: 30,
    width: 28
  },
  mapView: {
    position: "absolute",
    top: 40,
    left: 29,
    height: 99,
    right: 29
  },
  locationIcon: {
    top: 69,
    left: 111,
    position: "absolute",
    color: "rgba(255,0,0,1)",
    fontSize: 40,
    height: 43,
    width: 40
  },
  userLocation: {
    top: 76,
    left: 121,
    width: 20,
    height: 20,
    position: "absolute",
    borderRadius: 12
  },
  fixedFooterOrderItem: {
    position: "absolute",
    bottom: 0,
    left: 0,
    height: 55,
    width: windowWidth,
  },
  mapViewStack: {
    top: 0,
    left: 0,
    height: 139,
    position: "absolute",
    right: 0,
  },
  viewOnTheMap: {
    top: 0,
    left: 29,
    position: "absolute",
    fontFamily: "poppins700",
    color: "rgba(212,212,212,1)"
  },
  mapViewStackStack: {
    height: 150,
    marginTop: 30,
    marginBottom: 30,
  },
  rect1: {
    height: 55,
    shadowColor: "black",
    shadowOffset: {
      width: 10,
      height: 10
    },
    elevation: 45,
    shadowOpacity: 1,
    shadowRadius: 15,
  },
  similarResults: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    marginTop: 17,
    marginLeft: 21
  },
  productsCard: {
    top: 1,
    width: 154,
    height: 278,
    position: "absolute",
    borderRadius: 20,
    shadowColor: "rgba(32,32,32,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
    left: 0,
    overflow: "hidden",

  },
  productsCardStack: {
    width: 154,
    height: 279,
    marginRight: 15,
  },
  productName: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    fontSize: 16
  },
  cateIcon1: {
    top: 23,
    left: 1,
    width: 17,
    height: 17,
    position: "absolute"
  },
  productNameStack: {
    top: 0,
    left: 0,
    width: 138,
    height: 40,
    position: "absolute"
  },
  cateName1: {
    top: 27,
    left: 22,
    position: "absolute",
    fontFamily: "poppinsregular",
    color: "rgba(235,214,112,1)",
    fontSize: 10
  },
  productNameStackStack: {
    width: 142,
    height: 41,
    marginTop: 171,
    marginLeft: 7
  },
  transactionMethod1: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "poppinsregular",
    color: "#9c8df0",
    fontSize: 17
  },
  price1: {
    top: 27,
    left: 2,
    position: "absolute",
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    fontSize: 13
  },
  transactionMethod1Stack: {
    width: 134,
    height: 44,
    marginTop: 7,
    marginLeft: 9
  },
  productImage1: {
    top: 0,
    left: 0,
    width: 154,
    height: 166,
    position: "absolute",
    borderRadius: 20,
    overflow: "hidden",
  },
  productImage1_imageStyle: {},
  favIcon1: {
    color: "rgba(249,43,85,1)",
    fontSize: 24,
    height: 26,
    width: 26,
    marginTop: 9,
    marginLeft: 124
  },
  productImageStack: {
    flex: 1,
    marginBottom: -1,
  }
});

export default ViewItems;

