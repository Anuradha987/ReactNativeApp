import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";

const I_My = () => {
    return (
        <SafeAreaView style={styles.container}>
          {/* order info at bottom */}
      <ImageBackground
        style={styles.receivedReqList}
        imageStyle={styles.receivedReqList_imageStyle}
        source={require(".../assets/images/Gradient_U0mLOhY.png")}
      > {/* order requests */}
        <View style={styles.orderRequestslblStack}>
          <Text style={styles.orderRequestslbl}>Order Requests</Text>
          {/* notification */}
          <View style={styles.notificationCircle}>
            <View style={styles.noOfNotificationFiller}></View>
            <Text style={styles.noOfNotification}>10</Text>
          </View>
        </View>

        {/* Item order request info */}
        <TouchableOpacity style={styles.reqInfoCard}>
          <View style={styles.reqSenderInfo}>
            <View style={styles.senderProPicRow}>
               {/* Pro pic of requ sender */}
              <Image
                source={require(".../assets/images/istockphoto-523147245-612x612.jpg")}
                resizeMode="cover"
                style={styles.senderProPic}
              ></Image>
              <Text style={styles.senderName}>Sunimal Kumara</Text>
            </View>
            <View style={styles.senderProPicRowFiller}></View>
            <Text style={styles.sendTime}>13 mins ago</Text>
          </View>

          <View style={styles.amountlblStackRowRow}>
            <View style={styles.amountlblStackRow}>
              <View style={styles.amountlblStack}>
              {/* Amount */}
                <Text style={styles.amountlbl}>Amount</Text>
                <Text style={styles.colonMark1}>:</Text>
              </View>
              <Text style={styles.amountOrdered}>2 Large Pizza</Text>
            </View>
            <View style={styles.amountlblStackRowFiller}></View>
            {/* Decline Btn */}
            <TouchableOpacity style={styles.reqDeclineBtn}>
              <View style={styles.declineFiller}></View>
              <Text style={styles.decline}>Decline</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.returningDateOrExchangedForlblStackRowRow}>
            <View style={styles.returningDateOrExchangedForlblStackRow}>
              <View style={styles.returningDateOrExchangedForlblStack}>
                {/* Returning or exchanging for */}
                <Text style={styles.returningDateOrExchangedForlbl}>
                  Returning Date
                </Text>
                <Text style={styles.colonMark2}>:</Text>
              </View>
              <Text style={styles.returningDateOrExchangedFor}>20/12/2021</Text>
            </View>
            <View
              style={styles.returningDateOrExchangedForlblStackRowFiller}
            ></View>
            
              {/* Accept Btn */}
            <TouchableOpacity style={styles.reqAcceptBtn}>
              <View style={styles.acceptFiller}></View>
              <Text style={styles.accept}>Accept</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </ImageBackground>

  {/* Order placement in top */}
      <ImageBackground
        style={styles.myItemDetails}
        imageStyle={styles.myItemDetails_imageStyle}
        source={require(".../assets/images/Gradient_U0mLOhY.png")}
      >
        <View style={styles.publishDateRow}>
          {/* publish date */}
          <Text style={styles.publishDate}>12/12/2021</Text>
          <View style={styles.publishDateFiller}></View>
          <View style={styles.editBtnRow}>
            {/* edit order */}
            <TouchableOpacity style={styles.editBtn}>
              <View style={styles.editIconFiller}></View>
              <FeatherIcon name="edit" style={styles.editIcon}></FeatherIcon>
            </TouchableOpacity>
            {/* delete order */}
            <TouchableOpacity style={styles.deleteBtn}>
              <View style={styles.delIconFiller}></View>
              <MaterialCommunityIconsIcon
                name="delete-sweep"
                style={styles.delIcon}
              ></MaterialCommunityIconsIcon>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.pageNo}>2.</Text>
        <Image
          source={require(".../assets/images/pizza.jpg")}
          resizeMode="cover"
          style={styles.itemImage}
        ></Image>
        <Text style={styles.itemTitle}>Making School uniforms</Text>
        <View style={styles.cateIconRow}>
          <EntypoIcon name="home" style={styles.cateIcon}></EntypoIcon>
          <Text style={styles.cateName}>Clothes &amp; Fashion</Text>
        </View>
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
        </ImageBackground>

    {/* searching bar */}
       <View style={styles.searchingBarStack}>
        <View style={styles.searchingBar}>
          <View style={styles.searchIconFiller}></View>
          <EvilIconsIcon
            name="search"
            style={styles.searchIcon}
          ></EvilIconsIcon>
        </View>
        <TextInput
          placeholder="Search a service..."
          returnKeyType="go"
          placeholderTextColor="rgba(194,97,250,1)"
          selectionColor="rgba(250,245,245,1)"
          clearButtonMode="while-editing"
          style={styles.serviceSearch}
        ></TextInput>
      </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgba(21,31,40,1)"
    },
    receivedReqList: {
      shadowColor: "rgba(0,0,0,1)",
      shadowOffset: {
        width: 3,
        height: 3
      },
      elevation: 30,
      shadowOpacity: 1,
      shadowRadius: 10,
      borderRadius: 19,
      height: 497,
      marginTop: 617,
      marginLeft: 23,
      marginRight: 24,
      overflow: "hidden"
    },
    receivedReqList_imageStyle: {},
    orderRequestslbl: {
      top: 0,
      left: 0,
      position: "absolute",
      fontFamily: "poppins-700",
      color: "rgba(0,0,0,1)"
    },
    notificationCircle: {
      top: 0,
      width: 26,
      height: 26,
      position: "absolute",
      backgroundColor: "rgba(255,255,255,1)",
      flexDirection: "row",
      borderRadius: 13,
      right: 0
    },
    noOfNotificationFiller: {
      flex: 1,
      flexDirection: "row"
    },
    noOfNotification: {
      fontFamily: "poppins-regular",
      color: "#121212",
      textAlign: "center",
      marginTop: 3
    },
    orderRequestslblStack: {
      width: 273,
      height: 26,
      marginTop: 36,
      marginLeft: 29
    },
    reqInfoCard: {
      height: 113,
      borderRadius: 24,
      borderWidth: 1,
      borderColor: "rgba(31,31,31,1)",
      borderTopWidth: 1,
      borderBottomWidth: 1,
      marginTop: 11,
      marginLeft: 5,
      marginRight: 5
    },
    reqSenderInfo: {
      height: 31,
      backgroundColor: "rgba(31,31,31,1)",
      borderRadius: 24,
      flexDirection: "row",
      marginLeft: 4
    },
    senderProPic: {
      width: 20,
      height: 20,
      borderRadius: 10
    },
    senderName: {
      fontFamily: "poppins-regular",
      color: "rgba(255,255,255,1)",
      fontSize: 11,
      marginLeft: 10,
      marginTop: 3
    },
    senderProPicRow: {
      height: 20,
      flexDirection: "row",
      marginLeft: 24,
      marginTop: 5
    },
    senderProPicRowFiller: {
      flex: 1,
      flexDirection: "row"
    },
    sendTime: {
      fontFamily: "poppins-regular",
      color: "rgba(255,255,255,1)",
      fontSize: 11,
      textAlign: "right",
      marginRight: 15,
      marginTop: 8
    },
    amountlbl: {
      top: 0,
      left: 0,
      position: "absolute",
      fontFamily: "poppins-700",
      color: "rgba(125,123,123,1)",
      width: 66,
      fontSize: 11,
      height: 16
    },
    colonMark1: {
      top: 0,
      left: 63,
      position: "absolute",
      fontFamily: "roboto-700",
      color: "rgba(125,123,123,1)",
      width: 10,
      height: 17,
      fontSize: 14
    },
    amountlblStack: {
      width: 73,
      height: 17,
      marginTop: 2
    },
    amountOrdered: {
      fontFamily: "poppins-regular",
      color: "rgba(0,0,0,1)",
      textAlign: "left",
      width: 145,
      height: 21
    },
    amountlblStackRow: {
      height: 21,
      flexDirection: "row",
      marginTop: 11
    },
    amountlblStackRowFiller: {
      flex: 1,
      flexDirection: "row"
    },
    reqDeclineBtn: {
      width: 57,
      height: 36,
      borderWidth: 2,
      borderColor: "rgba(242,69,69,1)",
      borderRadius: 10,
      shadowColor: "rgba(242,69,69,1)",
      shadowOffset: {
        width: 0,
        height: 0
      },
      elevation: 30,
      shadowOpacity: 0.3,
      shadowRadius: 10,
      flexDirection: "row"
    },
    declineFiller: {
      flex: 1,
      flexDirection: "row"
    },
    decline: {
      fontFamily: "poppins-regular",
      color: "rgba(242,69,69,1)",
      textAlign: "center",
      fontSize: 12,
      width: 52,
      height: 16,
      marginRight: 2,
      marginTop: 8
    },
    amountlblStackRowRow: {
      height: 36,
      flexDirection: "row",
      marginTop: 1,
      marginLeft: 17,
      marginRight: 16
    },
    returningDateOrExchangedForlbl: {
      top: 0,
      left: 0,
      position: "absolute",
      fontFamily: "poppins-700",
      color: "rgba(125,123,123,1)",
      fontSize: 11
    },
    colonMark2: {
      top: 5,
      left: 63,
      position: "absolute",
      fontFamily: "roboto-700",
      color: "rgba(125,123,123,1)"
    },
    returningDateOrExchangedForlblStack: {
      width: 73,
      height: 32
    },
    returningDateOrExchangedFor: {
      fontFamily: "poppins-regular",
      color: "rgba(0,0,0,1)",
      textAlign: "left",
      width: 145,
      height: 21,
      marginTop: 3
    },
    returningDateOrExchangedForlblStackRow: {
      height: 32,
      flexDirection: "row"
    },
    returningDateOrExchangedForlblStackRowFiller: {
      flex: 1,
      flexDirection: "row"
    },
    reqAcceptBtn: {
      width: 57,
      height: 36,
      borderWidth: 2,
      borderColor: "rgba(60,209,6,1)",
      borderRadius: 10,
      shadowColor: "rgba(60,209,6,1)",
      shadowOffset: {
        width: 0,
        height: 0
      },
      elevation: 30,
      shadowOpacity: 0.3,
      shadowRadius: 10,
      flexDirection: "row",
      marginTop: 6
    },
    acceptFiller: {
      flex: 1,
      flexDirection: "row"
    },
    accept: {
      fontFamily: "poppins-regular",
      color: "rgba(60,209,6,1)",
      textAlign: "center",
      fontSize: 12,
      width: 52,
      height: 16,
      marginRight: 2,
      marginTop: 9
    },
    returningDateOrExchangedForlblStackRowRow: {
      height: 42,
      flexDirection: "row",
      marginLeft: 17,
      marginRight: 16
    },
    myItemDetails: {
      height: 453,
      shadowColor: "rgba(0,0,0,1)",
      shadowOffset: {
        width: 3,
        height: 3
      },
      elevation: 30,
      shadowOpacity: 1,
      shadowRadius: 10,
      borderWidth: 0,
      borderColor: "#000000",
      borderRadius: 19,
      marginTop: -981,
      marginLeft: 23,
      marginRight: 24,
      overflow: "hidden"
    },
    myItemDetails_imageStyle: {},
    publishDate: {
      fontFamily: "poppins-regular",
      color: "rgba(152,150,150,1)",
      width: 106,
      fontSize: 11,
      height: 16,
      marginTop: 7
    },
    publishDateFiller: {
      flex: 1,
      flexDirection: "row"
    },
    editBtn: {
      width: 40,
      height: 40,
      backgroundColor: "rgba(60,40,95,1)",
      shadowColor: "rgba(0,0,0,1)",
      shadowOffset: {
        width: 3,
        height: 4
      },
      elevation: 12,
      shadowOpacity: 0.25,
      shadowRadius: 4,
      borderRadius: 9,
      flexDirection: "row",
      marginRight: 12
    },
    editIconFiller: {
      flex: 1,
      flexDirection: "row"
    },
    editIcon: {
      color: "rgba(235,112,210,1)",
      fontSize: 25,
      height: 25,
      width: 26,
      marginRight: 7,
      marginTop: 7
    },
    deleteBtn: {
      width: 40,
      height: 40,
      backgroundColor: "rgba(60,40,95,1)",
      shadowColor: "rgba(0,0,0,1)",
      shadowOffset: {
        width: 3,
        height: 4
      },
      elevation: 12,
      shadowOpacity: 0.25,
      shadowRadius: 4,
      borderRadius: 9,
      flexDirection: "row"
    },
    delIconFiller: {
      flex: 1,
      flexDirection: "row"
    },
    delIcon: {
      color: "rgba(252,89,89,1)",
      fontSize: 27,
      height: 29,
      width: 27,
      marginRight: 6,
      marginTop: 6
    },
    editBtnRow: {
      height: 40,
      flexDirection: "row"
    },
    publishDateRow: {
      height: 40,
      flexDirection: "row",
      marginTop: 24,
      marginLeft: 22,
      marginRight: 16
    },
    pageNo: {
      fontFamily: "poppins-regular",
      color: "rgba(216,148,255,1)",
      fontSize: 62,
      textAlign: "center",
      marginTop: 3,
      marginLeft: 15,
      marginRight: 16
    },
    itemImage: {
      width: 130,
      height: 130,
      marginTop: 14,
      marginLeft: 95
    },
    itemTitle: {
      fontFamily: "poppins-regular",
      color: "#121212",
      fontSize: 20,
      textAlign: "center",
      marginTop: 10,
      marginLeft: 4
    },
    cateIcon: {
      color: "rgba(79,77,77,1)",
      fontSize: 20,
      height: 22,
      width: 20
    },
    cateName: {
      fontFamily: "poppins-regular",
      color: "rgba(79,77,77,1)",
      marginLeft: 7
    },
    cateIconRow: {
      height: 22,
      flexDirection: "row",
      marginTop: 1,
      marginLeft: 68,
      marginRight: 16
    },
    totalAmountlbl: {
      fontFamily: "poppins-regular",
      color: "rgba(59,57,57,1)"
    },
    totalAmountlblFiller: {
      flex: 1,
      flexDirection: "row"
    },
    totalAmount: {
      fontFamily: "poppins-regular",
      color: "rgba(59,57,57,1)",
      textAlign: "right"
    },
    totalAmountlblRow: {
      height: 21,
      flexDirection: "row",
      marginTop: 25,
      marginLeft: 32,
      marginRight: 36
    },
    forCashlbl: {
      fontFamily: "poppins-700",
      color: "rgba(109,107,107,1)",
      width: 111,
      height: 20
    },
    forCashlblFiller: {
      flex: 1,
      flexDirection: "row"
    },
    price: {
      fontFamily: "poppins-700",
      color: "rgba(126,0,255,1)",
      width: 148,
      textAlign: "right",
      fontSize: 16,
      height: 20
    },
    forCashlblRow: {
      height: 20,
      flexDirection: "row",
      marginTop: 10,
      marginLeft: 33,
      marginRight: 36
    },
    searchingBar: {
      top: 1,
      left: 0,
      height: 52,
      position: "absolute",
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
      right: 0
    },
    searchIconFiller: {
      flex: 1,
      flexDirection: "row"
    },
    searchIcon: {
      color: "rgba(194,97,250,1)",
      fontSize: 29,
      width: 30,
      height: 32,
      marginRight: 10,
      marginTop: 9
    },
    serviceSearch: {
      top: 0,
      position: "absolute",
      fontFamily: "poppins-regular",
      color: "rgba(255,255,255,1)",
      height: 52,
      opacity: 0.43,
      fontSize: 15,
      left: 11,
      right: 52
    },
    searchingBarStack: {
      height: 53,
      marginTop: -548,
      marginLeft: 16,
      marginRight: 15
    }
  });
export default I_My
