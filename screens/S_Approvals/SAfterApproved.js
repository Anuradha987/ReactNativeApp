import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";

function SAfterApproved(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.contactInfoBox}
        imageStyle={styles.contactInfoBox_imageStyle}
        source={require("../assets/images/Gradient_j4NfJ5t.png")}
      >
        <View style={styles.senderImageRow}>
          <Image
            source={require("../assets/images/avatar-1.jpg")}
            resizeMode="contain"
            style={styles.senderImage}
          ></Image>
          <View style={styles.senderNameColumn}>
            <Text style={styles.senderName}>Natasha Perera</Text>
            <View style={styles.locationIconRow}>
              <EntypoIcon
                name="location-pin"
                style={styles.locationIcon}
              ></EntypoIcon>
              <View style={styles.longitudeStackColumn}>
                <View style={styles.longitudeStack}>
                  <Text style={styles.longitude}>6.927079 , 79.861244</Text>
                </View>
                <Text style={styles.clickToViewOnMap}>
                  Click to view on the Map
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.callBtnRow}>
          <TouchableOpacity style={styles.callBtn}>
            <FeatherIcon name="phone" style={styles.callIcon}></FeatherIcon>
          </TouchableOpacity>
          <TouchableOpacity style={styles.msgBtn}>
            <FeatherIcon
              name="message-square"
              style={styles.msgIcon}
            ></FeatherIcon>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.acceptedDatelblRow}>
        <Text style={styles.acceptedDatelbl}>Accepted Date :</Text>
        <Text style={styles.acceptedDate}>20/12/2021</Text>
      </View>
      <View style={styles.backBtnRow}>
        <View style={styles.backBtn}></View>
        <Text style={styles.servicesRequest}>Services Request</Text>
      </View>
      <Text style={styles.reqTitle}>Preparing Birthday Cake.</Text>
      <Text style={styles.description}>
        Just click on a symbol to copy any check mark or any tick to the
        clipboard and then paste them where ever you like. The tick &amp; check
        mark symbols are often used. A small description about the request.
      </Text>
      <View style={styles.cateIconRow}>
        <EntypoIcon name="home" style={styles.cateIcon}></EntypoIcon>
        <Text style={styles.cateName}>Food &amp; Drinks</Text>
      </View>
      <View style={styles.prioritylblRow}>
        <Text style={styles.prioritylbl}>Priority :</Text>
        <View style={styles.priorityDot}></View>
        <Text style={styles.priorityName}>Medium</Text>
      </View>
      <View style={styles.tolblRow}>
        <Text style={styles.tolbl}>To :</Text>
        <Text style={styles.toWhom}>Public</Text>
      </View>
      <Text style={styles.attachments}>Attachments :</Text>
      <View style={styles.attachmentsBox}></View>
      <View style={styles.postedDatelblRow}>
        <Text style={styles.postedDatelbl}>Posted Date :</Text>
        <Text style={styles.postedDate}>20/12/2021</Text>
      </View>
      <View style={styles.completedDatelblRow}>
        <Text style={styles.completedDatelbl}>Completed Date :</Text>
        <Text style={styles.completedDate}>20/12/2021</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(15,30,69,1)"
  },
  contactInfoBox: {
    height: 167,
    borderRadius: 15,
    shadowColor: "rgba(19,18,18,1)",
    shadowOffset: {
      height: 3,
      width: 1
    },
    elevation: 21,
    shadowOpacity: 0.45,
    shadowRadius: 7,
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 178,
    marginHorizontal: 30,
    overflow: "hidden"
  },
  contactInfoBox_imageStyle: {
    width: 318,
    height: 165
  },
  senderImage: {
    width: 80,
    height: 80,
    borderRadius: 20
  },
  senderName: {
    fontFamily: "poppins-regular",
    color: "rgba(232,232,232,1)",
    fontSize: 15,
    marginLeft: 7
  },
  locationIcon: {
    color: "rgba(253,47,47,1)",
    fontSize: 35,
    height: 38,
    width: 35
  },
  longitude: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "poppins-regular",
    color: "rgba(212,206,206,1)",
    fontSize: 13
  },
  longitudeStack: {
    width: 175,
    height: 20
  },
  clickToViewOnMap: {
    fontFamily: "poppins-regular",
    color: "rgba(239,173,255,1)",
    fontSize: 12,
    textDecorationLine: "underline"
  },
  longitudeStackColumn: {
    width: 175,
    marginLeft: 3
  },
  locationIconRow: {
    height: 38,
    flexDirection: "row",
    marginTop: 5,
    marginRight: 14
  },
  senderNameColumn: {
    width: 227,
    marginLeft: 10,
    marginTop: 12,
    marginBottom: 2
  },
  senderImageRow: {
    height: 80,
    flexDirection: "row",
    marginTop: 13,
    marginRight: 3
  },
  callBtn: {
    width: 43,
    height: 43,
    backgroundColor: "rgba(60,40,95,1)",
    borderRadius: 9,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 4
    },
    elevation: 12,
    shadowOpacity: 0.17,
    shadowRadius: 4
  },
  callIcon: {
    color: "rgba(235,112,210,1)",
    fontSize: 25,
    height: 25,
    width: 25,
    marginTop: 9,
    marginLeft: 9
  },
  msgBtn: {
    width: 43,
    height: 43,
    backgroundColor: "rgba(60,40,95,1)",
    borderRadius: 9,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 4
    },
    elevation: 12,
    shadowOpacity: 0.17,
    shadowRadius: 4,
    marginLeft: 33
  },
  msgIcon: {
    color: "rgba(235,112,210,1)",
    fontSize: 25,
    height: 25,
    width: 25,
    marginTop: 9,
    marginLeft: 9
  },
  callBtnRow: {
    height: 43,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 97,
    marginRight: 104
  },
  acceptedDatelbl: {
    fontFamily: "poppins-regular",
    color: "rgba(214,214,214,1)"
  },
  acceptedDate: {
    fontFamily: "poppins-regular",
    color: "rgba(214,214,214,1)"
  },
  acceptedDatelblRow: {
    height: 21,
    flexDirection: "row",
    marginTop: 515,
    marginLeft: 35,
    marginRight: 67
  },
  backBtn: {
    width: 40,
    height: 40,
    backgroundColor: "#E6E6E6"
  },
  servicesRequest: {
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    flex: 1,
    marginLeft: 24,
    marginTop: 10
  },
  backBtnRow: {
    height: 40,
    flexDirection: "row",
    marginTop: -844,
    marginLeft: 15,
    marginRight: 69
  },
  reqTitle: {
    fontFamily: "poppins-regular",
    color: "rgba(216,148,255,1)",
    fontSize: 20,
    marginTop: 55,
    marginLeft: 30
  },
  description: {
    fontFamily: "poppins-regular",
    color: "rgba(205,204,204,1)",
    textAlign: "justify",
    marginTop: 209,
    marginLeft: 32,
    marginRight: 36
  },
  cateIcon: {
    color: "rgba(220,162,76,1)",
    fontSize: 17
  },
  cateName: {
    fontFamily: "poppins-regular",
    color: "rgba(220,162,76,1)",
    fontSize: 13,
    marginLeft: 21
  },
  cateIconRow: {
    height: 20,
    flexDirection: "row",
    marginTop: 26,
    marginLeft: 37,
    marginRight: 89
  },
  prioritylbl: {
    fontFamily: "poppins-regular",
    color: "rgba(214,214,214,1)",
    marginTop: 1
  },
  priorityDot: {
    width: 14,
    height: 14,
    backgroundColor: "rgba(222,255,0,1)",
    borderRadius: 7,
    marginLeft: 32,
    marginTop: 4
  },
  priorityName: {
    fontFamily: "poppins-regular",
    color: "rgba(210,205,205,1)",
    marginLeft: 13
  },
  prioritylblRow: {
    height: 22,
    flexDirection: "row",
    marginTop: 19,
    marginLeft: 61,
    marginRight: 32
  },
  tolbl: {
    fontFamily: "poppins-regular",
    color: "rgba(214,214,214,1)"
  },
  toWhom: {
    fontFamily: "poppins-regular",
    color: "rgba(210,205,205,1)",
    marginLeft: 32
  },
  tolblRow: {
    height: 21,
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 62,
    marginRight: 55
  },
  attachments: {
    fontFamily: "poppins-regular",
    color: "rgba(214,214,214,1)",
    marginTop: 33,
    marginLeft: 32
  },
  attachmentsBox: {
    height: 91,
    borderWidth: 2,
    borderColor: "rgba(194,163,254,1)",
    marginTop: 13,
    marginLeft: 37,
    marginRight: 38
  },
  postedDatelbl: {
    fontFamily: "poppins-regular",
    color: "rgba(214,214,214,1)"
  },
  postedDate: {
    fontFamily: "poppins-regular",
    color: "rgba(214,214,214,1)"
  },
  postedDatelblRow: {
    height: 21,
    flexDirection: "row",
    marginTop: 34,
    marginLeft: 35,
    marginRight: 67
  },
  completedDatelbl: {
    fontFamily: "poppins-regular",
    color: "rgba(214,214,214,1)"
  },
  completedDate: {
    fontFamily: "poppins-regular",
    color: "rgba(214,214,214,1)"
  },
  completedDatelblRow: {
    height: 21,
    flexDirection: "row",
    marginTop: 54,
    marginLeft: 35,
    marginRight: 67
  }
});

export default SAfterApproved;
