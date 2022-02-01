import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MapView from "react-native-maps";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FixedFooterOrderItem from "../components/FixedFooterOrderItem";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function ViewItems(props) {
  return (
    <View style={styles.container}>
      <View style={styles.productImageStack}>
        <ImageBackground
          source={require("./../../assets/images/organic-avocados.jpg")}
          resizeMode="cover"
          style={styles.productImage}
          imageStyle={styles.productImage_imageStyle}
        >
          <View style={styles.backBtn}></View>
          <View style={styles.userImageCircleRow}>
            <View style={styles.userImageCircle}>
              <Image
                source={require("./../../assets/images/avatar-1.jpg")}
                resizeMode="contain"
                style={styles.userImage}
              ></Image>
            </View>
            <View style={styles.slidingDots}>
              <View style={styles.rect2}></View>
              <View style={styles.rect3}></View>
              <View style={styles.rect4}></View>
              <View style={styles.rect5}></View>
              <View style={styles.rect6}></View>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.userDetails}>
          <View style={styles.userNameStack}>
            <Text style={styles.userName}>Natasha Perera</Text>
            <Text style={styles.loremIpsum}>21/12/20</Text>
          </View>
        </View>
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>Avocado</Text>
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
            <Text style={styles.totalAmount}>550g</Text>
          </View>
          <View style={styles.forCashlblRow}>
            <Text style={styles.forCashlbl}>For Cash</Text>
            <View style={styles.forCashlblFiller}></View>
            <Text style={styles.price}>Rs.30 /100g</Text>
          </View>
          <Text style={styles.br}>━━━━━━━━━━━━━━━━━━━━━━━━━</Text>
          <View style={styles.contactGroups}>
            <TouchableOpacity style={styles.addFavBtn}></TouchableOpacity>
            <FeatherIcon name="heart" style={styles.favIcon}></FeatherIcon>
            <TouchableOpacity style={styles.callBtn}></TouchableOpacity>
            <FeatherIcon name="phone" style={styles.callIcon}></FeatherIcon>
            <TouchableOpacity style={styles.msgBtn}></TouchableOpacity>
            <FeatherIcon
              name="message-square"
              style={styles.msgIcon}
            ></FeatherIcon>
            <TouchableOpacity style={styles.sendReqBtn}></TouchableOpacity>
            <FontAwesomeIcon
              name="share-square-o"
              style={styles.sendReqIcon}
            ></FontAwesomeIcon>
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
                source={require("./../../assets/images/_110435139_parsa.jpg")}
                resizeMode="contain"
                style={styles.userLocation}
              ></Image>
              <FixedFooterOrderItem
                style={styles.fixedFooterOrderItem}
              ></FixedFooterOrderItem>
            </View>
            <Text style={styles.viewOnTheMap}>View on the map</Text>
          </View>
          <View style={styles.rect1}>
            <Text style={styles.similarResults}>Similar results</Text>
          </View>
          <View style={styles.product1SimilarItemsRow}>
            <View style={styles.product1SimilarItems}>
              <View style={styles.productsCardStack}>
                <ImageBackground
                  style={styles.productsCard}
                  imageStyle={styles.productsCard_imageStyle}
                  source={require("./../../assets/images/Gradient_WcvXyL2.png")}
                >
                  <View style={styles.productNameStackStack}>
                    <View style={styles.productNameStack}>
                      <Text style={styles.productName}>Avocado</Text>
                      <Image
                        source={require("./../../assets/images/foods.png")}
                        resizeMode="contain"
                        style={styles.cateIcon1}
                      ></Image>
                    </View>
                    <Text style={styles.cateName1}>
                      Electronics &amp; Electrics
                    </Text>
                  </View>
                  <View style={styles.transactionMethod1Stack}>
                    <Text style={styles.transactionMethod1}>For Cash</Text>
                    <Text style={styles.price1}>Rs.30/100g</Text>
                  </View>
                </ImageBackground>
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
              </View>
            </View>
            <View style={styles.product2}>
              <View style={styles.productsCard1Stack}>
                <ImageBackground
                  style={styles.productsCard1}
                  imageStyle={styles.productsCard1_imageStyle}
                  source={require("./../../assets/images/Gradient_WcvXyL2.png")}
                >
                  <View style={styles.productName1StackStack}>
                    <View style={styles.productName1Stack}>
                      <Text style={styles.productName1}>Avocado</Text>
                      <Image
                        source={require("./../../assets/icons/foods.png")}
                        resizeMode="contain"
                        style={styles.cateIcon2}
                      ></Image>
                    </View>
                    <Text style={styles.cateName2}>
                      Electronics &amp; Electrics
                    </Text>
                  </View>
                  <View style={styles.transactionMethod2Stack}>
                    <Text style={styles.transactionMethod2}>For Cash</Text>
                    <Text style={styles.price2}>Rs.30/100g</Text>
                  </View>
                </ImageBackground>
                <ImageBackground
                  source={require("./../../assets/images/organic-avocados.jpg")}
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
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21,31,40,1)"
  },
  productImage: {
    top: 0,
    left: 0,
    height: 392,
    position: "absolute",
    right: 0
  },
  productImage_imageStyle: {},
  backBtn: {
    width: 40,
    height: 40,
    backgroundColor: "#E6E6E6",
    marginTop: 37,
    marginLeft: 15
  },
  userImageCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(31,31,31,1)"
  },
  userImage: {
    width: 35,
    height: 35,
    marginTop: 7,
    marginLeft: 7
  },
  slidingDots: {
    width: 88,
    height: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 79,
    marginTop: 2
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
    marginTop: 264,
    marginLeft: 24,
    marginRight: 149
  },
  userDetails: {
    top: 365,
    left: 0,
    height: 193,
    position: "absolute",
    backgroundColor: "rgba(210,171,250,1)",
    borderRadius: 36,
    right: 0
  },
  userName: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    right: 100
  },
  loremIpsum: {
    top: 0,
    left: 236,
    position: "absolute",
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    textAlign: "right"
  },
  userNameStack: {
    height: 21,
    marginTop: 21,
    marginLeft: 31,
    marginRight: 21
  },
  itemDetails: {
    left: 0,
    position: "absolute",
    backgroundColor: "rgba(21,31,40,1)",
    borderRadius: 36,
    bottom: 0,
    right: 0,
    top: 418
  },
  itemName: {
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 22,
    marginTop: 33,
    marginLeft: 31
  },
  cateIcon: {
    width: 17,
    height: 17
  },
  cateName: {
    fontFamily: "poppins-regular",
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
    fontFamily: "poppins-regular",
    color: "rgba(199,199,199,1)",
    textAlign: "justify",
    fontSize: 14,
    marginTop: 12,
    marginLeft: 24,
    marginRight: 20
  },
  totalAmountlbl: {
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)"
  },
  totalAmountlblFiller: {
    flex: 1,
    flexDirection: "row"
  },
  totalAmount: {
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    textAlign: "right"
  },
  totalAmountlblRow: {
    height: 21,
    flexDirection: "row",
    marginTop: 35,
    marginLeft: 38,
    marginRight: 50
  },
  forCashlbl: {
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    width: 162,
    height: 16
  },
  forCashlblFiller: {
    flex: 1,
    flexDirection: "row"
  },
  price: {
    fontFamily: "poppins-regular",
    color: "rgba(160,135,186,1)",
    width: 140,
    textAlign: "right",
    fontSize: 16,
    height: 16
  },
  forCashlblRow: {
    height: 16,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 38,
    marginRight: 50
  },
  br: {
    fontFamily: "roboto-regular",
    color: "rgba(175,172,172,1)",
    marginTop: 17,
    marginLeft: 16,
    marginRight: 12
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
    elevation: 12,
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
    elevation: 12,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 15
  },
  callIcon: {
    top: 10,
    left: 97,
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
    elevation: 12,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 15
  },
  msgIcon: {
    top: 10,
    left: 182,
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
    elevation: 12,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 15
  },
  sendReqIcon: {
    top: 13,
    left: 270,
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
    top: 0,
    left: 0,
    height: 55,
    width: 390
  },
  mapViewStack: {
    top: 0,
    left: 0,
    height: 139,
    position: "absolute",
    right: 0
  },
  viewOnTheMap: {
    top: 0,
    left: 29,
    position: "absolute",
    fontFamily: "poppins-700",
    color: "rgba(212,212,212,1)"
  },
  mapViewStackStack: {
    height: 139,
    marginTop: 29
  },
  rect1: {
    height: 55,
    shadowColor: "rgba(28,28,28,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 45,
    shadowOpacity: 1,
    shadowRadius: 15,
    marginTop: 37
  },
  similarResults: {
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 17,
    marginLeft: 21
  },
  product1SimilarItems: {
    width: 155,
    height: 278
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
    overflow: "hidden"
  },
  productsCard_imageStyle: {},
  productName: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "poppins-regular",
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
    fontFamily: "poppins-regular",
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
    fontFamily: "poppins-regular",
    color: "rgba(221,160,248,1)",
    fontSize: 18
  },
  price1: {
    top: 24,
    left: 2,
    position: "absolute",
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 13
  },
  transactionMethod1Stack: {
    width: 134,
    height: 44,
    marginTop: 13,
    marginLeft: 9
  },
  productImage1: {
    top: 0,
    left: 0,
    width: 154,
    height: 166,
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
    marginLeft: 124
  },
  productsCardStack: {
    width: 154,
    height: 279
  },
  product2: {
    width: 155,
    height: 278,
    marginLeft: 10
  },
  productsCard1: {
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
    overflow: "hidden"
  },
  productsCard1_imageStyle: {},
  productName1: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 16
  },
  cateIcon2: {
    top: 23,
    left: 1,
    width: 17,
    height: 17,
    position: "absolute"
  },
  productName1Stack: {
    top: 0,
    left: 0,
    width: 138,
    height: 40,
    position: "absolute"
  },
  cateName2: {
    top: 27,
    left: 22,
    position: "absolute",
    fontFamily: "poppins-regular",
    color: "rgba(235,214,112,1)",
    fontSize: 10
  },
  productName1StackStack: {
    width: 142,
    height: 41,
    marginTop: 171,
    marginLeft: 7
  },
  transactionMethod2: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "poppins-regular",
    color: "rgba(221,160,248,1)",
    fontSize: 18
  },
  price2: {
    top: 24,
    left: 2,
    position: "absolute",
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 13
  },
  transactionMethod2Stack: {
    width: 134,
    height: 44,
    marginTop: 13,
    marginLeft: 9
  },
  productImage2: {
    top: 0,
    left: 0,
    width: 154,
    height: 166,
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
    marginLeft: 124
  },
  productsCard1Stack: {
    width: 154,
    height: 279
  },
  product1SimilarItemsRow: {
    height: 278,
    flexDirection: "row",
    marginTop: 32,
    marginLeft: 16,
    marginRight: 54
  },
  productImageStack: {
    flex: 1,
    marginBottom: -1
  }
});


export default ViewItems;
