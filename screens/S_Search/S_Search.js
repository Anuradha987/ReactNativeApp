import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Text,
  Image
} from "react-native";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MapView from "react-native-maps";
import FeatherIcon from "react-native-vector-icons/Feather";

const S_Search = () => {
return(
  <View style={styles.container}>
  <StatusBar
    barStyle="light-content"
    backgroundColor="rgba(195,195,202,1)"
  />

  {/* search bar */}
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

  {/* Map */}
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

    {/* new request */}
    <TouchableOpacity
      onPress={() => props.navigation.navigate("NewReqForm")}
      style={styles.addNewReq}
    ></TouchableOpacity>
    <Text style={styles.add}>+</Text>

{/* expert pop up box */}
    <TouchableOpacity style={styles.button}>
      <View style={styles.endWrapperFiller}></View>
      <View style={styles.imageRowRowColumn}>
        <View style={styles.imageRowRow}>
          <View style={styles.imageRow}>
            <Image
              source={require("./../../assets/images/avatar-1.jpg")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <EvilIconsIcon
              name="close"
              style={styles.closeBtn1}
            ></EvilIconsIcon>
          </View>
          <Text style={styles.natashaPerera}>Natasha Perera</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.electronic}>Preparing Birthday Cake</Text>
          <Text style={styles.electronic1}>Making School Uniforms</Text>
          <Text style={styles.service3Titile}>Service 3 Titile</Text>
          <Text style={styles.service5Title}>Service 5 Title</Text>
          <Text style={styles.service4Title}>Service 4 Title</Text>
        </View>
        <View style={styles.rect}>
          <View style={styles.iconRow}>
            {/* rate */}
            <FontAwesomeIcon
              name="star"
              style={styles.icon}
            ></FontAwesomeIcon>
            <Text style={styles.loremIpsum}>4.1</Text>
          </View>
          <View style={styles.iconRowFiller}></View>
          <View style={styles.icon2Row}>
            {/* expert contact */}
            <FeatherIcon name="phone" style={styles.icon2}></FeatherIcon>
            <FeatherIcon name="message-square" style={styles.icon3}></FeatherIcon>
            <FontAwesomeIcon name="share-square-o" style={styles.icon4}></FontAwesomeIcon>
          </View>
        </View>
      </View>
    </TouchableOpacity>


    <View style={styles.rect3}>
      <Image
        source={require("./../../assets/images/avatar-1.jpg")}
        resizeMode="contain"
        style={styles.image2}
      ></Image>
    </View>
  </View>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "rgba(15,30,69,1)"
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
marginTop: 38,
marginLeft: 16,
marginRight: 16
},
mapView: {
position: "absolute",
top: 0,
left: 0,
height: 644,
right: 0
},
addNewReq: {
top: 552,
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
right: 19,
shadowColor: "rgba(162,0,255,1)",
shadowOffset: {
  width: 0,
  height: 0
},
elevation: 30,
shadowOpacity: 0.5,
shadowRadius: 10
},
add: {
top: 544,
position: "absolute",
fontFamily: "poppins-regular",
color: "rgba(255,255,255,1)",
fontSize: 60,
height: 70,
right: 34,
width: 41
},
button: {
left: 8,
position: "absolute",
backgroundColor: "rgba(23,29,47,0.92)",
borderRadius: 6,
borderWidth: 1,
borderColor: "#000000",
height: 181,
bottom: 7,
overflow: "scroll",
right: 118
},
endWrapperFiller: {
flex: 1
},
image: {
width: 30,
height: 30
},
closeBtn1: {
color: "rgba(255,125,125,1)",
fontSize: 25,
width: 26,
height: 27,
marginLeft: 194,
marginBottom: 7
},
imageRow: {
height: 34,
flexDirection: "row",
alignItems: "flex-end"
},
natashaPerera: {
fontFamily: "roboto-regular",
color: "rgba(200,155,246,1)",
flex: 1,
marginRight: 28,
marginLeft: -212,
marginBottom: 7
},
imageRowRow: {
height: 34,
flexDirection: "row",
marginBottom: 7,
marginLeft: 10
},
group: {
height: 88,
justifyContent: "space-between",
marginBottom: 9,
marginLeft: 17,
marginRight: 3
},
electronic: {
fontFamily: "poppins-300",
color: "rgba(232,232,232,1)",
fontSize: 11,
margin: 0,
width: 240
},
electronic1: {
fontFamily: "poppins-300",
color: "rgba(232,232,232,1)",
fontSize: 11,
margin: 0,
width: 240
},
service3Titile: {
fontFamily: "poppins-300",
color: "rgba(232,232,232,1)",
fontSize: 11,
margin: 0,
width: 240
},
service5Title: {
fontFamily: "poppins-300",
color: "rgba(232,232,232,1)",
fontSize: 11,
margin: 0,
width: 240
},
service4Title: {
fontFamily: "poppins-300",
color: "rgba(232,232,232,1)",
fontSize: 11,
margin: 0,
width: 240
},
rect: {
height: 37,
backgroundColor: "rgba(60,40,95,0.86)",
borderRadius: 6,
flexDirection: "row",
marginRight: 1
},
icon: {
color: "rgba(255,254,0,1)",
fontSize: 13,
height: 13,
width: 12,
marginBottom: 2
},
loremIpsum: {
fontFamily: "poppins-regular",
color: "rgba(255,254,0,1)",
fontSize: 12,
marginLeft: 9
},
iconRow: {
height: 18,
flexDirection: "row",
alignItems: "flex-end",
marginLeft: 19,
marginBottom: 10
},
iconRowFiller: {
flex: 1,
flexDirection: "row"
},
icon2: {
color: "rgba(235,112,210,1)",
fontSize: 25,
height: 25,
width: 26,
marginRight: 17
},
icon3: {
color: "rgba(235,112,210,1)",
fontSize: 25,
height: 25,
width: 26,
marginRight: 21,
marginBottom: 1
},
icon4: {
color: "rgba(235,112,210,1)",
fontSize: 25,
height: 25,
width: 23,
marginBottom: 1
},
icon2Row: {
height: 26,
flexDirection: "row",
alignItems: "flex-end",
marginRight: 13,
marginBottom: 5
},
imageRowRowColumn: {
marginBottom: 1,
marginLeft: 2,
marginRight: 2
},
rect3: {
top: 159,
left: 112,
width: 45,
height: 45,
position: "absolute",
backgroundColor: "rgba(172,96,220,1)",
borderRadius: 22
},
image2: {
width: 38,
height: 38,
borderRadius: 19,
marginTop: 2,
marginLeft: 3
},
mapViewStack: {
height: 644,
marginTop: 28
}
});


export default S_Search