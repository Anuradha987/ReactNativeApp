import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";

function SApprovedDetails(props) {
  return (
    <View style={styles.container}>
      <View style={styles.endWrapperFillerRow}>
        <View style={styles.endWrapperFiller}></View>
        <View style={styles.reqCancelBtnRow}>
          <TouchableOpacity style={styles.reqCancelBtn}>
            <View style={styles.cancelFiller}></View>
            <Text style={styles.cancel}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.reqCompleteBtn}>
            <View style={styles.completeFiller}></View>
            <Text style={styles.complete}>Complete</Text>
          </TouchableOpacity>
        </View>
      </View>
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
              <View style={styles.latitudeStackColumn}>
                <View style={styles.latitudeStack}>
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
      <View style={styles.postedDatelblRow}>
        <Text style={styles.postedDatelbl}>Posted Date :</Text>
        <Text style={styles.postedDate}>20/12/2021</Text>
      </View>
      <View style={styles.attachmentsBox}></View>
      <View style={styles.toRow}>
        <Text style={styles.to}>To :</Text>
        <Text style={styles.toWhom}>Public</Text>
      </View>
      <View style={styles.priorityRow}>
        <Text style={styles.priority}>Priority :</Text>
        <View style={styles.priorityDot}></View>
        <Text style={styles.priorityName}>Medium</Text>
      </View>
      <Text style={styles.attachments}>Attachments :</Text>
      <View style={styles.cateIconRow}>
        <EntypoIcon name="home" style={styles.cateIcon}></EntypoIcon>
        <Text style={styles.cateName}>Food &amp; Drinks</Text>
      </View>
      <Text style={styles.description}>
        Just click on a symbol to copy any check mark or any tick to the
        clipboard and then paste them where ever you like. The tick &amp; check
        mark symbols are often used. A small description about the request.
      </Text>
      <Text style={styles.reqTitle}>Preparing Birthday Cake.</Text>
      <View style={styles.backBtnRow}>
        <View style={styles.backBtn}></View>
        <Text style={styles.servicesRequest}>Services Request</Text>
      </View>
      <View style={styles.acceptedDatelblRow}>
        <Text style={styles.acceptedDatelbl}>Accepted Date :</Text>
        <Text style={styles.acceptedDate3}>20/12/2021</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(15,30,69,1)"
  },
  endWrapperFiller: {
    flex: 1,
    flexDirection: "row"
  },
  reqCancelBtn: {
    width: 83,
    height: 40,
    borderWidth: 2,
    borderColor: "rgba(242,132,69,1)",
    borderRadius: 10,
    shadowColor: "rgba(242,132,69,1)",
    shadowOffset: {
      width: 0,
      height: 0
    },
    elevation: 30,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    flexDirection: "row",
    marginRight: 22
  },
  cancelFiller: {
    flex: 1,
    flexDirection: "row"
  },
  cancel: {
    fontFamily: "poppins-regular",
    color: "rgba(242,132,69,1)",
    fontSize: 12,
    textAlign: "center",
    width:83,
    marginTop: 11
  },
  reqCompleteBtn: {
    width: 83,
    height: 40,
    borderWidth: 2,
    borderColor: "rgba(3,213,241,1)",
    borderRadius: 10,
    shadowColor: "rgba(3,213,241,1)",
    shadowOffset: {
      width: 0,
      height: 0
    },
    elevation: 30,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    flexDirection: "row"
  },
  completeFiller: {
    flex: 1,
    flexDirection: "row"
  },
  complete: {
    fontFamily: "poppins-regular",
    color: "rgba(3,213,241,1)",
    textAlign: "center",
    fontSize: 12,
    width:83,
    marginTop: 11
  },
  reqCancelBtnRow: {
    height: 40,
    flexDirection: "row"
  },
  endWrapperFillerRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 921,
    marginLeft: 110,
    marginRight: 39
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
  
    marginTop: -783,
    marginHorizontal: 30,
    overflow: "hidden"
  },
  contactInfoBox_imageStyle: {},
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
  latitude: {
    top: 0,
    left: 80,
    position: "absolute",
    fontFamily: "poppins-regular",
    color: "rgba(212,206,206,1)",
    fontSize: 13
  },
  longitude: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "poppins-regular",
    color: "rgba(212,206,206,1)",
    fontSize: 13
  },
  latitudeStack: {
    width: 173,
    height: 20
  },
  clickToViewOnMap: {
    fontFamily: "poppins-regular",
    color: "rgba(239,173,255,1)",
    fontSize: 12,
    textDecorationLine: "underline"
  },
  latitudeStackColumn: {
    width: 173,
    marginLeft: 3
  },
  locationIconRow: {
    height: 38,
    flexDirection: "row",
    marginTop: 5,
    marginRight: 10
  },
  senderNameColumn: {
    width: 221,
    marginLeft: 10,
    marginTop: 12,
    marginBottom: 2
  },
  senderImageRow: {
    height: 80,
    flexDirection: "row",
    marginTop: 13,
    marginRight: 10
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
    marginRight: 105
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
    marginTop: 479,
    marginLeft: 35,
    marginRight: 65
  },
  attachmentsBox: {
    height: 91,
    borderWidth: 2,
    borderColor: "rgba(194,163,254,1)",
    marginTop: -146,
    marginLeft: 37,
    marginRight: 38
  },
  to: {
    fontFamily: "poppins-regular",
    color: "rgba(214,214,214,1)"
  },
  toWhom: {
    fontFamily: "poppins-regular",
    color: "rgba(210,205,205,1)",
    marginLeft: 32
  },
  toRow: {
    height: 21,
    flexDirection: "row",
    marginTop: -179,
    marginLeft: 62,
    marginRight: 49
  },
  priority: {
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
  priorityRow: {
    height: 22,
    flexDirection: "row",
    marginTop: -59,
    marginLeft: 61,
    marginRight: 26
  },
  attachments: {
    fontFamily: "poppins-regular",
    color: "rgba(214,214,214,1)",
    marginTop: 70,
    marginLeft: 32
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
    marginTop: -152,
    marginLeft: 37,
    marginRight: 85
  },
  description: {
    fontFamily: "poppins-regular",
    color: "rgba(205,204,204,1)",
    textAlign: "justify",
    marginTop: -183,
    marginLeft: 32,
    marginRight: 36
  },
  reqTitle: {
    fontFamily: "poppins-regular",
    color: "rgba(216,148,255,1)",
    fontSize: 20,
    marginTop: -376,
    marginLeft: 30
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
    marginTop: -125,
    marginLeft: 15,
    marginRight: 69
  },
  acceptedDatelbl: {
    fontFamily: "poppins-regular",
    color: "rgba(214,214,214,1)"
  },
  acceptedDate3: {
    fontFamily: "poppins-regular",
    color: "rgba(214,214,214,1)",
    marginLeft: 7
  },
  acceptedDatelblRow: {
    height: 21,
    flexDirection: "row",
    marginTop: 783,
    marginLeft: 35,
    marginRight: 65
  }
});

export default SApprovedDetails;
