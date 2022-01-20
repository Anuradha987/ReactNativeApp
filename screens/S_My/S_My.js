import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  TextInput
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";

const S_My = () => {
    return (
      <View style={styles.container}>
      <ImageBackground
        style={styles.myServiceDetails}
        imageStyle={styles.myServiceDetails_imageStyle}
        source={require("./../../assets/images/Gradient_U0mLOhY.png")}
      >
        <View style={styles.endWrapperFillerRow}>
          <View style={styles.endWrapperFiller}></View>
          <View style={styles.editBtnRow}>
            {/* edit btn */}
            <TouchableOpacity style={styles.editBtn}>
              <View style={styles.editIconFiller}></View>
              <FeatherIcon name="edit" style={styles.editIcon}></FeatherIcon>
            </TouchableOpacity>
            {/* delete btn */}
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
        <Text style={styles.serviceTitle}>Making School uniforms</Text>
        <Text style={styles.description}>
          I sew school uniforms for girls and boys who goes toDarmapala Collage,
          Mahinda Rajapaksha Collage, Lumbini Collage. {"\n"}
          {"\n"}Available after 6 PM every weekday.
        </Text>
        <View style={styles.cateIconRow}>
          <EntypoIcon name="home" style={styles.cateIcon}></EntypoIcon>
          <Text style={styles.cateName}>Clothes &amp; Fashion</Text>
        </View>
      </ImageBackground>

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
        <EvilIconsIcon name="search" style={styles.searchIcon}></EvilIconsIcon>
      </View>

      {/* add new service details.  */}
      <View style={styles.myServiceDetailsNewStack}>
        <ImageBackground
          style={styles.myServiceDetailsNew}
          imageStyle={styles.myServiceDetailsNew_imageStyle}
          source={require("./../../assets/images/Gradient_U0mLOhY.png")}
        >
          <TextInput
            placeholder="Title"
            maxLength={40}
            autoCapitalize="sentences"
            returnKeyType="next"
            placeholderTextColor="rgba(156,59,203,1)"
            style={styles.serviceTitletxt}
          ></TextInput>
          <TextInput
            placeholder="Description"
            maxLength={40}
            autoCapitalize="sentences"
            returnKeyType="next"
            placeholderTextColor="rgba(156,59,203,1)"
            style={styles.descriptiontxt}
          ></TextInput>
          <TextInput
            placeholder="Category"
            maxLength={40}
            autoCapitalize="sentences"
            returnKeyType="next"
            placeholderTextColor="rgba(156,59,203,1)"
            style={styles.categorytxt}
          ></TextInput>
          {/* done btn */}
          <TouchableOpacity style={styles.donebtn}>
            <Text style={styles.done}>DONE</Text>
          </TouchableOpacity>
        </ImageBackground>

        <Text style={styles.loremIpsum}>
          Tell how can you help others with what {"\n"}you know, learnt and
          experts with...
        </Text>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(15,30,69,1)"
  },
  myServiceDetails: {
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
    marginTop: 133,
    marginLeft: 23,
    marginRight: 24,
    overflow: "hidden"
  },
  myServiceDetails_imageStyle: {},
  endWrapperFiller: {
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
  endWrapperFillerRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 24,
    marginLeft: 220,
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
  serviceTitle: {
    fontFamily: "poppins-regular",
    color: "#121212",
    fontSize: 20,
    textAlign: "center",
    marginTop: 12,
    marginLeft: 15,
    marginRight: 16
  },
  description: {
    fontFamily: "poppins-regular",
    color: "rgba(59,57,57,1)",
    textAlign: "justify",
    marginTop: 29,
    marginLeft: 27
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
    marginLeft: 6,
    marginTop: 1
  },
  cateIconRow: {
    height: 22,
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 19,
    marginRight: 19
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
    marginTop: -548,
    marginLeft: 16,
    marginRight: 16
  },
  serviceSearch: {
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    height: 52,
    opacity: 0.43,
    fontSize: 15,
    flex: 1,
    marginRight: 12,
    marginLeft: 11
  },
  searchIcon: {
    color: "rgba(194,97,250,1)",
    fontSize: 29,
    width: 30,
    height: 32,
    marginRight: 10,
    marginTop: 10
  },
  myServiceDetailsNew: {
    top: 0,
    height: 453,
    position: "absolute",
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
    left: 0,
    right: 1,
    overflow: "hidden"
  },
  myServiceDetailsNew_imageStyle: {},
  serviceTitletxt: {
    fontFamily: "poppins-regular",
    color: "#121212",
    height: 41,
    fontSize: 13,
    borderRadius: 6,
    shadowColor: "rgba(141,141,141,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 18,
    shadowOpacity: 1,
    shadowRadius: 6,
    backgroundColor: "rgba(230, 230, 230,1)",
    width: 273,
    marginTop: 108,
    marginLeft: 27
  },
  descriptiontxt: {
    fontFamily: "poppins-regular",
    color: "#121212",
    height: 124,
    fontSize: 13,
    borderRadius: 6,
    shadowColor: "rgba(141,141,141,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 18,
    shadowOpacity: 1,
    shadowRadius: 6,
    backgroundColor: "rgba(230, 230, 230,1)",
    width: 273,
    marginTop: 25,
    marginLeft: 28
  },
  categorytxt: {
    fontFamily: "poppins-regular",
    color: "#121212",
    height: 41,
    fontSize: 13,
    borderRadius: 6,
    backgroundColor: "rgba(230, 230, 230,1)",
    shadowColor: "rgba(141,141,141,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 18,
    shadowOpacity: 1,
    shadowRadius: 6,
    width: 273,
    marginTop: 25,
    marginLeft: 30
  },
  donebtn: {
    height: 42,
    backgroundColor: "rgba(123,0,255,1)",
    borderRadius: 25,
    shadowColor: "rgba(123,0,255,1)",
    shadowOffset: {
      width: 0,
      height: 0
    },
    elevation: 30,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    width: 168,
    marginTop: 26,
    marginLeft: 76
  },
  done: {
    fontFamily: "poppins-700",
    color: "rgba(255,255,255,1)",
    letterSpacing: 1,
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
    marginLeft: 3
  },
  loremIpsum: {
    top: 39,
    position: "absolute",
    fontFamily: "poppins-regular",
    color: "#121212",
    textAlign: "center",
    left: 1,
    right: 0
  },
  myServiceDetailsNewStack: {
    height: 453,
    marginTop: 527,
    marginLeft: 23,
    marginRight: 23
  }
}); 

export default S_My