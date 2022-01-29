import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Text,
  Image,
} from "react-native";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";


const I_Sent = () => {
    return (
      <View style={styles.container}>
      <View style={styles.searchingBarColumn}>
        {/* search bar */}
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
        <View style={styles.requestStatusRow}>
          <View style={styles.requestStatus}></View>
          <View style={styles.requestStatusFiller}></View>
          {/* edit btn */}
          <View style={styles.editBtnRow}>
            <TouchableOpacity style={styles.editBtn}>
              <View style={styles.editReqIconFiller}></View>
              <FeatherIcon name="edit" style={styles.editReqIcon}></FeatherIcon>
            </TouchableOpacity>
            {/* delete btn */}
            <TouchableOpacity style={styles.deleteBtn}>
              <View style={styles.delReqIconFiller}></View>
              <MaterialCommunityIconsIcon
                name="delete-sweep"
                style={styles.delReqIcon}
              ></MaterialCommunityIconsIcon>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.scrollArea}>

        {/* item details  */}
        <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.itemDetailsCardStack}>
            <View style={styles.itemDetailsCard}>
              {/* item name */}
              <Text style={styles.reqTitle}>UMYOGO Women&#39;s Runni...</Text>

              <View style={styles.cateNameStack}>
                {/* item category */}
                <Text style={styles.cateName}>Sports &amp; Fitness</Text>
                <MaterialCommunityIconsIcon
                  name="human-handsup"
                  style={styles.cateIcon}
                ></MaterialCommunityIconsIcon>
              </View>

              <Text style={styles.reqStatus}>Pending</Text>
              <Text style={styles.priceperUnit}>Rs. 250 / 1 day</Text>
              <Text style={styles.transactionMethod}>Rent</Text>
            </View>
            {/* item image */}
            <Image
              source={require("./../../assets/images/shoes.jpg")}
              resizeMode="cover"
              style={styles.itemImage}
            ></Image>
            <View style={styles.orderDetails}>
              <View style={styles.amountReturningDateFiller}></View>
              <Text style={styles.amountReturningDate}>
                2 Pairs - For 2 days
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21,31,40,1)"
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
    flexDirection: "row"
  },
  serviceSearch: {
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    height: 52,
    opacity: 0.43,
    fontSize: 15,
    flex: 1,
    marginRight: 13,
    marginLeft: 11
  },
  searchIcon: {
    color: "rgba(194,97,250,1)",
    fontSize: 29,
    width: 29,
    height: 32,
    marginRight: 10,
    marginTop: 10
  },
  requestStatus: {
    height: 40,
    borderWidth: 2,
    borderColor: "rgba(228,154,247,1)",
    borderRadius: 15,
    width: 172
  },
  requestStatusFiller: {
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
  editReqIconFiller: {
    flex: 1,
    flexDirection: "row"
  },
  editReqIcon: {
    color: "rgba(235,112,210,1)",
    fontSize: 25,
    height: 25,
    width: 25,
    marginRight: 6,
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
  delReqIconFiller: {
    flex: 1,
    flexDirection: "row"
  },
  delReqIcon: {
    color: "rgba(252,89,89,1)",
    fontSize: 27,
    height: 29,
    width: 26,
    marginRight: 6,
    marginTop: 6
  },
  editBtnRow: {
    height: 40,
    flexDirection: "row"
  },
  requestStatusRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 31,
    marginRight: 1
  },
  searchingBarColumn: {
    marginTop: 38,
    marginLeft: 16,
    marginRight: 15
  },
  scrollArea: {
    borderWidth: 1,
    borderColor: "#000000",
    flex: 1,
    marginBottom: 50,
    marginTop: 40,
    marginLeft: 12,
    marginRight: 12
  },
  scrollArea_contentContainerStyle: {
    height: 754
  },
  itemDetailsCard: {
    top: 63,
    left: 0,
    height: 114,
    position: "absolute",
    backgroundColor: "rgba(81,81,81,0.69)",
    borderRadius: 20,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 2
    },
    elevation: 0,
    shadowOpacity: 1,
    shadowRadius: 6,
    right: 0,
    alignItems: "flex-end"
  },
  reqTitle: {
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    textAlign: "right",
    marginTop: 6,
    marginRight: 5
  },
  cateName: {
    position: "absolute",
    fontFamily: "poppins-regular",
    color: "#70d6eb",
    textAlign: "right",
    top: 0,
    fontSize: 11,
    right: 0
  },
  cateIcon: {
    top: 1,
    position: "absolute",
    color: "rgba(112,214,235,1)",
    fontSize: 14,
    right: 95,
    height: 15,
    width: 14
  },
  cateNameStack: {
    width: 166,
    height: 16,
    marginTop: 1,
    marginRight: 9
  },
  reqStatus: {
    fontFamily: "poppins-regular",
    color: "rgba(208,208,208,1)",
    fontSize: 13,
    textAlign: "right",
    marginTop: 2,
    marginRight: 8
  },
  priceperUnit: {
    fontFamily: "poppins-regular",
    color: "rgba(209,209,209,1)",
    textAlign: "center",
    fontSize: 12,
    alignSelf: "flex-start",
    marginTop: 5
  },
  transactionMethod: {
    fontFamily: "poppins-500",
    color: "rgba(220,147,245,1)",
    textAlign: "center",
    fontSize: 13,
    alignSelf: "flex-start",
    marginLeft: 9
  },
  itemImage: {
    top: 0,
    left: 0,
    width: 126,
    height: 126,
    position: "absolute",
    borderRadius: 20
  },
  orderDetails: {
    top: 134,
    width: 222,
    height: 44,
    position: "absolute",
    backgroundColor: "rgba(179,35,215,1)",
    right: 1,
    flexDirection: "row"
  },
  amountReturningDateFiller: {
    flex: 1,
    flexDirection: "row"
  },
  amountReturningDate: {
    fontFamily: "poppins-500",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    marginRight: 1,
    marginTop: 11
  },
  itemDetailsCardStack: {
    height: 178
  }
});
export default I_Sent
