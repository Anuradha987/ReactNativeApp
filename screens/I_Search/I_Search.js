import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground, 
  SafeAreaView
} from "react-native";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

const I_Search = () => {
    return (
        <SafeAreaView style={styles.container}>

        {/* product categoty */}
        <View style={styles.scrollbar}>           
          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.scrollbar_contentContainerStyle}
          >
            <View style={styles.categories}>
              <View style={styles.cateRoundRow}>
                <View style={styles.cateRound}>
                  <Image
                    source={require("../assets/images/pineapple_96px.png")}
                    resizeMode="contain"
                    style={styles.cateIcon2}
                  ></Image>
                </View>
                <Text style={styles.cateName2}>All</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* Searching bar */}
        <View style={styles.searchingBarRow}>
          <View style={styles.searchingBar}>
            <TextInput
              placeholder="Search a service..."
              returnKeyType="go"
              placeholderTextColor="rgba(194,97,250,1)"
              selectionColor="rgba(250,245,245,1)"
              clearButtonMode="while-editing"
              style={styles.serviceSearch}
            ></TextInput>
            <EvilIconsIcon
              name="search"
              style={styles.searchIcon}
            ></EvilIconsIcon>
          </View>
          <TouchableOpacity style={styles.filterBtn}>
            <View style={styles.filterIconFiller}></View>
            <FontAwesomeIcon
              name="filter"
              style={styles.filterIcon}
            ></FontAwesomeIcon>
          </TouchableOpacity>
        </View>

{/* Product 1 */}
        <View style={styles.product1GroupRow}>
          <View style={styles.product1Group}>
            <View style={styles.products1Stack}>
              <ImageBackground
                style={styles.products1}
                imageStyle={styles.products1_imageStyle}
                source={require("../assets/images/Gradient_WcvXyL2.png")}
              >
                <View style={styles.productName1StackStack}>
                  <View style={styles.productName1Stack}>
                      {/* Product name */}
                    <Text style={styles.productName1}>Avocado</Text>
                     {/* product category icon*/}
                    <Image
                      source={require("../assets/images/foods.png")}
                      resizeMode="contain"
                      style={styles.cateIcon1}
                    ></Image>
                  </View>
                   {/* product category name*/}
                  <Text style={styles.cateName1}>
                    Electronics &amp; Electrics
                  </Text>
                </View>
                <Text style={styles.available}>Available</Text>
                <Text style={styles.tradingMethod1}>For Cash</Text>
                <Text style={styles.rs30100G}>Rs.30 / 100g</Text>
              </ImageBackground>

              {/* Product Image */}
              <ImageBackground
                source={require("../assets/images/organic-avocados.jpg")}
                resizeMode="cover"
                style={styles.productImage1}
                imageStyle={styles.productImage1_imageStyle}
              > {/* heart icon*/}
                <IoniconsIcon
                  name="md-heart"
                  style={styles.favIcon1}
                ></IoniconsIcon>
              </ImageBackground>
            </View>
          </View>

{/* Product 2 */}
          <View style={styles.product1GroupFiller}></View>
          <View style={styles.product2}>
            <View style={styles.products2Stack}>
              <ImageBackground
                style={styles.products2}
                imageStyle={styles.products2_imageStyle}
                source={require("../assets/images/Gradient_WcvXyL2.png")}
              >
                <View style={styles.productName2StackStack}>
                  <View style={styles.productName2Stack}>
                    <Text style={styles.productName2}>Avocado</Text>
                    <Image
                      source={require("../assets/images/foods.png")}
                      resizeMode="contain"
                      style={styles.cateIcon3}
                    ></Image>
                  </View>
                  <Text style={styles.cateName3}>
                    Electronics &amp; Electrics
                  </Text>
                </View>
                <Text style={styles.notAvailable}>Not Available</Text>
                <View style={styles.forBarterStack}>
                  <Text style={styles.forBarter}>For Barter</Text>
                  <Text style={styles.rs30101}>Rs.30 / 100g</Text>
                </View>
              </ImageBackground>
              <ImageBackground
                source={require("../assets/images/organic-avocados.jpg")}
                resizeMode="cover"
                style={styles.productImage2}
                imageStyle={styles.productImage2_imageStyle}
              >
                <IoniconsIcon
                  name="md-heart"
                  style={styles.favIcon2}
                ></IoniconsIcon>
              </ImageBackground>
            </View>
          </View>
        </View>

{/* Add new request */}
        <View style={styles.addNewReqStack}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("NewReqForm")}
            style={styles.addNewReq}
          ></TouchableOpacity>
          <Text style={styles.add}>+</Text>
        </View>

{/* Product 3 */}
        <View style={styles.product3}>
          <View style={styles.products3Stack}>
            <ImageBackground
              style={styles.products3}
              imageStyle={styles.products3_imageStyle}
              source={require("../assets/images/Gradient_WcvXyL2.png")}
            >
              <View style={styles.productName3StackStack}>
                <View style={styles.productName3Stack}>
                  <Text style={styles.productName3}>Avocado</Text>
                  <Image
                    source={require("../assets/images/foods.png")}
                    resizeMode="contain"
                    style={styles.cateIcon4}
                  ></Image>
                </View>
                <Text style={styles.cateName4}>Electronics &amp; Electrics</Text>
              </View>
              <Text style={styles.available2}>Available</Text>
              <Text style={styles.forBorrow}>For Borrow</Text>
              <Text style={styles.rs30102}>Rs.30 / 100g</Text>
            </ImageBackground>
            <ImageBackground
              source={require("../assets/images/organic-avocados.jpg")}
              resizeMode="cover"
              style={styles.productImage3}
              imageStyle={styles.productImage3_imageStyle}
            >
              <IoniconsIcon
                name="md-heart"
                style={styles.favIcon3}
              ></IoniconsIcon>
            </ImageBackground>
          </View>
        </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgba(21,31,40,1)"
    },
    scrollbar: {
      height: 35,
      borderWidth: 1,
      borderColor: "#000000",
      marginTop: 113
    },
    scrollbar_contentContainerStyle: {
      width: 390,
      height: 35
    },
    categories: {
      width: 102,
      height: 35,
      backgroundColor: "rgba(200,128,255,1)",
      borderRadius: 15,
      shadowColor: "rgba(0,0,0,1)",
      shadowOffset: {
        width: 3,
        height: 3
      },
      elevation: 9,
      shadowOpacity: 0.25,
      shadowRadius: 3,
      flexDirection: "row",
      marginLeft: 11
    },
    cateRound: {
      width: 30,
      height: 30,
      backgroundColor: "rgba(228,227,227,1)",
      borderRadius: 15,
      shadowColor: "rgba(122,121,121,1)",
      shadowOffset: {
        width: 3,
        height: 3
      },
      elevation: 15,
      shadowOpacity: 1,
      shadowRadius: 5
    },
    cateIcon2: {
      width: 25,
      height: 25,
      marginTop: 2,
      marginLeft: 2
    },
    cateName2: {
      fontFamily: "poppins-regular",
      color: "#121212",
      fontSize: 12,
      marginLeft: 8,
      marginTop: 6
    },
    cateRoundRow: {
      height: 30,
      flexDirection: "row",
      flex: 1,
      marginRight: 2,
      marginLeft: 3,
      marginTop: 3
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
      elevation: 15,
      shadowOpacity: 0.59,
      shadowRadius: 5,
      flexDirection: "row",
      flex: 1,
      marginRight: 9
    },
    serviceSearch: {
      fontFamily: "poppins-regular",
      color: "rgba(255,255,255,1)",
      height: 52,
      opacity: 0.43,
      fontSize: 15,
      flex: 1,
      marginRight: 7,
      marginLeft: 11
    },
    searchIcon: {
      color: "rgba(194,97,250,1)",
      fontSize: 29,
      height: 32,
      width: 29,
      marginRight: 12,
      marginTop: 11
    },
    filterBtn: {
      width: 52,
      height: 52,
      backgroundColor: "rgba(75,81,101,0.43)",
      borderWidth: 0,
      borderColor: "rgba(31,30,30,0.43)",
      borderRadius: 8,
      shadowColor: "rgba(16,16,16,1)",
      shadowOffset: {
        width: 3,
        height: 3
      },
      elevation: 15,
      shadowOpacity: 0.59,
      shadowRadius: 5,
      flexDirection: "row"
    },
    filterIconFiller: {
      flex: 1,
      flexDirection: "row"
    },
    filterIcon: {
      color: "rgba(194,97,250,1)",
      fontSize: 33,
      height: 33,
      width: 26,
      marginRight: 14,
      marginTop: 10
    },
    searchingBarRow: {
      height: 52,
      flexDirection: "row",
      marginTop: -110,
      marginLeft: 16,
      marginRight: 16
    },
    product1Group: {
      width: 169,
      height: 317
    },
    products1: {
      top: 1,
      left: 0,
      width: 169,
      height: 315,
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
      overflow: "hidden"
    },
    products1_imageStyle: {},
    productName1: {
      top: 0,
      left: 0,
      position: "absolute",
      fontFamily: "poppins-regular",
      color: "rgba(255,255,255,1)",
      fontSize: 18
    },
    cateIcon1: {
      top: 26,
      left: 1,
      width: 17,
      height: 17,
      position: "absolute"
    },
    productName1Stack: {
      top: 0,
      left: 0,
      width: 142,
      height: 43,
      position: "absolute"
    },
    cateName1: {
      top: 28,
      left: 27,
      position: "absolute",
      fontFamily: "poppins-regular",
      color: "#ebd670",
      fontSize: 10
    },
    productName1StackStack: {
      width: 149,
      height: 43,
      marginTop: 173,
      marginLeft: 11
    },
    available: {
      fontFamily: "poppins-regular",
      color: "rgba(8,255,0,1)",
      fontSize: 13,
      marginTop: 3,
      marginLeft: 10
    },
    tradingMethod1: {
      fontFamily: "poppins-regular",
      color: "rgba(221,160,248,1)",
      fontSize: 24,
      width: 142,
      height: 37,
      marginTop: 4,
      marginLeft: 11
    },
    rs30100G: {
      fontFamily: "poppins-regular",
      color: "rgba(255,255,255,1)",
      fontSize: 16,
      marginLeft: 11
    },
    productImage1: {
      top: 0,
      left: 0,
      width: 169,
      height: 169,
      position: "absolute",
      borderRadius: 20,
      overflow: "hidden"
    },
    productImage1_imageStyle: {},
    favIcon1: {
      color: "rgba(249,43,85,1)",
      fontSize: 24,
      height: 26,
      width: 19,
      marginTop: 9,
      marginLeft: 135
    },
    products1Stack: {
      width: 169,
      height: 316
    },
    product1GroupFiller: {
      flex: 1,
      flexDirection: "row"
    },
    product2: {
      width: 169,
      height: 317
    },
    products2: {
      top: 1,
      left: 0,
      width: 169,
      height: 316,
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
      overflow: "hidden"
    },
    products2_imageStyle: {},
    productName2: {
      top: 0,
      left: 0,
      position: "absolute",
      fontFamily: "poppins-regular",
      color: "rgba(255,255,255,1)",
      fontSize: 18
    },
    cateIcon3: {
      top: 26,
      left: 1,
      width: 17,
      height: 17,
      position: "absolute"
    },
    productName2Stack: {
      top: 0,
      left: 0,
      width: 142,
      height: 43,
      position: "absolute"
    },
    cateName3: {
      top: 28,
      left: 27,
      position: "absolute",
      fontFamily: "poppins-regular",
      color: "#ebd670",
      fontSize: 10
    },
    productName2StackStack: {
      width: 155,
      height: 43,
      marginTop: 173,
      marginLeft: 11
    },
    notAvailable: {
      fontFamily: "poppins-regular",
      color: "rgba(255,130,130,1)",
      fontSize: 13,
      marginTop: 3,
      marginLeft: 10
    },
    forBarter: {
      top: 0,
      left: 1,
      position: "absolute",
      fontFamily: "poppins-regular",
      color: "rgba(221,160,248,1)",
      fontSize: 24,
      width: 142,
      height: 37
    },
    rs30101: {
      top: 36,
      left: 0,
      position: "absolute",
      fontFamily: "poppins-regular",
      color: "rgba(255,255,255,1)",
      fontSize: 16,
      width: 142,
      height: 24
    },
    forBarterStack: {
      width: 143,
      height: 60,
      marginTop: 5,
      marginLeft: 11
    },
    productImage2: {
      top: 0,
      left: 0,
      width: 169,
      height: 169,
      position: "absolute",
      borderRadius: 20,
      overflow: "hidden"
    },
    productImage2_imageStyle: {},
    favIcon2: {
      color: "rgba(249,43,85,1)",
      fontSize: 24,
      height: 26,
      width: 19,
      marginTop: 9,
      marginLeft: 135
    },
    products2Stack: {
      width: 169,
      height: 317
    },
    product1GroupRow: {
      height: 317,
      flexDirection: "row",
      marginTop: 89,
      marginLeft: 16,
      marginRight: 15
    },
    addNewReq: {
      top: 11,
      width: 70,
      height: 70,
      position: "absolute",
      backgroundColor: "rgba(162,0,255,1)",
      transform: [
        {
          rotate: "-45.00deg"
        }
      ],
      borderRadius: 22,
      right: 0,
      shadowColor: "rgba(113,0,255,1)",
      shadowOffset: {
        width: 0,
        height: 0
      },
      elevation: 15,
      shadowOpacity: 0.5,
      shadowRadius: 5
    },
    add: {
      top: 0,
      position: "absolute",
      fontFamily: "poppins-regular",
      color: "rgba(255,255,255,1)",
      fontSize: 60,
      height: 70,
      right: 14,
      width: 41
    },
    addNewReqStack: {
      width: 70,
      height: 81,
      alignSelf: "flex-end",
      marginTop: 393,
      marginRight: 30
    },
    product3: {
      width: 169,
      height: 318,
      marginTop: -433,
      marginLeft: 16
    },
    products3: {
      top: 1,
      left: 0,
      width: 169,
      height: 317,
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
      overflow: "hidden"
    },
    products3_imageStyle: {},
    productName3: {
      top: 0,
      left: 0,
      position: "absolute",
      fontFamily: "poppins-regular",
      color: "rgba(255,255,255,1)",
      fontSize: 18
    },
    cateIcon4: {
      top: 26,
      left: 1,
      width: 17,
      height: 17,
      position: "absolute"
    },
    productName3Stack: {
      top: 0,
      left: 0,
      width: 142,
      height: 43,
      position: "absolute"
    },
    cateName4: {
      top: 28,
      left: 27,
      position: "absolute",
      fontFamily: "poppins-regular",
      color: "#ebd670",
      fontSize: 10
    },
    productName3StackStack: {
      width: 149,
      height: 43,
      marginTop: 173,
      marginLeft: 11
    },
    available2: {
      fontFamily: "poppins-regular",
      color: "rgba(8,255,0,1)",
      fontSize: 13,
      marginTop: 4,
      marginLeft: 13
    },
    forBorrow: {
      fontFamily: "poppins-regular",
      color: "rgba(221,160,248,1)",
      fontSize: 24,
      width: 142,
      height: 37,
      marginTop: 3,
      marginLeft: 12
    },
    rs30102: {
      fontFamily: "poppins-regular",
      color: "rgba(255,255,255,1)",
      fontSize: 16,
      marginTop: 1,
      marginLeft: 11
    },
    productImage3: {
      top: 0,
      left: 0,
      width: 169,
      height: 169,
      position: "absolute",
      borderRadius: 20,
      overflow: "hidden"
    },
    productImage3_imageStyle: {},
    favIcon3: {
      color: "rgba(249,43,85,1)",
      fontSize: 24,
      height: 26,
      width: 19,
      marginTop: 9,
      marginLeft: 135
    },
    products3Stack: {
      width: 169,
      height: 318
    }
  });

export default I_Search
