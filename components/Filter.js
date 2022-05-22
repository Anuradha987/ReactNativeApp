import React, { Component } from "react";
import { StyleSheet, View, Text, Slider } from "react-native";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

function Filter(props) {
  const navigation = useNavigation();
    //poppins insert
const [loaded] = useFonts({
  poppinsregular: require('../assets/fonts/Poppins-Regular.ttf'),
  poppins700: require('../assets/fonts/poppins-700.ttf'),
});

if (!loaded) {
  return null;
} 
 return (
    <View style={styles.container}>

      <View style={styles.backBtnRowRow}>
        <View style={styles.backBtnRow}>
          <View style={styles.backBtn}>
            <SimpleLineIconsIcon
              name="arrow-left"
              onPress={()=> navigation.goBack()}
              style={styles.backIcon}
            ></SimpleLineIconsIcon>
          </View>
          <Text style={styles.filterYourSearch}>Filter Your Search</Text>
        </View>
        <View style={styles.backBtnRowFiller}></View>
        <View style={styles.closeBtn}>
          <View style={styles.closeIconFiller}></View>
          <EvilIconsIcon name="close" style={styles.closeIcon}></EvilIconsIcon>
        </View>
      </View>


      <Text style={styles.ratings}>Ratings</Text>
      <View style={styles.ratingGroup}>
        <View style={styles.rate1}></View>
        <FontAwesomeIcon name="star" style={styles.starIcon1}></FontAwesomeIcon>
        <Text style={styles.rateNo1}>1</Text>
        <View style={styles.rate2}></View>
        <FontAwesomeIcon name="star" style={styles.starIcon2}></FontAwesomeIcon>
        <Text style={styles.rateNo2}>2</Text>
        <View style={styles.rate3}></View>
        <FontAwesomeIcon name="star" style={styles.starIcon3}></FontAwesomeIcon>
        <Text style={styles.rateNo3}>3</Text>
        <View style={styles.rate4}></View>
        <FontAwesomeIcon name="star" style={styles.starIcon4}></FontAwesomeIcon>
        <Text style={styles.rateNo4}>4</Text>
        <View style={styles.rate5}></View>
        <FontAwesomeIcon name="star" style={styles.starIcon5}></FontAwesomeIcon>
        <Text style={styles.rateNo5}>5</Text>
      </View>


      <Text style={styles.distance}>Distance</Text>
      <Slider
        value={25}
        maximumValue={25}
        minimumTrackTintColor="rgba(156,141,240,1)"
        style={styles.distanceSlider}
      ></Slider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21,31,40,1)"
  },
  backBtn: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "rgba(187,189,193,1)",
    borderRadius: 12
  },
  backIcon: {
    color: "rgba(128,128,128,1)",
    fontSize: 20,
    height: 22,
    width: 20,
    marginTop: 9,
    marginLeft: 10
  },
  filterYourSearch: {
    fontFamily: "poppins-700",
    color: "rgba(156,141,240,1)",
    textAlign: "center",
    letterSpacing: 0.5,
    fontSize: 18,
    marginLeft: 11,
    marginTop: 9
  },
  backBtnRow: {
    height: 40,
    flexDirection: "row"
  },
  backBtnRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  closeBtn: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "rgba(187,189,193,1)",
    borderRadius: 12,
    flexDirection: "row"
  },
  closeIconFiller: {
    flex: 1,
    flexDirection: "row"
  },
  closeIcon: {
    color: "rgba(128,128,128,1)",
    fontSize: 30,
    height: 33,
    width: 30,
    marginRight: 5,
    marginTop: 4
  },
  backBtnRowRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 54,
    marginLeft: 27,
    marginRight: 25
  },
  ratings: {
    fontFamily: "poppins-700",
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    marginTop: 51,
    marginLeft: 26
  },
  ratingGroup: {
    width: 326,
    height: 35,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 13,
    alignSelf: "center"
  },
  rate1: {
    width: 50,
    height: 35,
    backgroundColor: "rgba(81,81,81,0.69)",
    borderRadius: 4
  },
  starIcon1: {
    top: 7,
    left: 8,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    height: 20,
    width: 18
  },
  rateNo1: {
    top: 6,
    left: 33,
    position: "absolute",
    // fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 16
  },
  rate2: {
    width: 50,
    height: 35,
    backgroundColor: "rgba(81,81,81,0.69)",
    borderRadius: 4
  },
  starIcon2: {
    top: 7,
    left: 75,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    height: 20,
    width: 18
  },
  rateNo2: {
    top: 8,
    left: 101,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 16
  },
  rate3: {
    width: 50,
    height: 35,
    backgroundColor: "rgba(81,81,81,0.69)",
    borderRadius: 4
  },
  starIcon3: {
    top: 7,
    left: 145,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    height: 20,
    width: 18
  },
  rateNo3: {
    top: 6,
    left: 171,
    position: "absolute",
    // fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 16
  },
  rate4: {
    width: 50,
    height: 35,
    backgroundColor: "rgba(81,81,81,0.69)",
    borderRadius: 4
  },
  starIcon4: {
    top: 7,
    left: 215,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    height: 20,
    width: 18
  },
  rateNo4: {
    top: 6,
    left: 240,
    position: "absolute",
    // fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 16
  },
  rate5: {
    width: 50,
    height: 35,
    backgroundColor: "rgba(81,81,81,0.69)",
    borderRadius: 4
  },
  starIcon5: {
    top: 7,
    left: 281,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    height: 20,
    width: 18
  },
  rateNo5: {
    top: 6,
    left: 307,
    position: "absolute",
    // fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 16
  },
  distance: {
    // fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    marginTop: 45,
    marginLeft: 26
  },
  distanceSlider: {
    height: 26,
   // width: 332,
    marginTop: 11,
    marginHorizontal: 10
  }
});

export default Filter;
