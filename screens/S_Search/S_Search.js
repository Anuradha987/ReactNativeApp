import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Text,
  Image, 
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import FeatherIcon from "react-native-vector-icons/Feather";
import mapStyle from "../../constants/MapStyle";
import { dummyData} from '../../constants';
import { useFonts } from 'expo-font';

const S_Search = ({ navigation, route }) => {

  const [selectedPlace, setSelectedPlace] = React.useState(null)
  const [selectedHotel, setSelectedHotel] = React.useState(null)

  const [selectedCatergoryId, setSelectedCategoryId] = React.useState(dummyData.categories)

  function onSelectCategory(category) {
    let categoryList = dummyData.categories.filter(a => a.selectedCatergoryId.includes(category.id))
    setSelectedCategoryId(categoryList)    
  }

  // React.useEffect(() => {
  //   let { selectedPlace } = route.params;
  //   setSelectedPlace(selectedPlace)
  // }, [])

       //poppins insert
       const [loaded] = useFonts({
        poppinsregular: require('./../../assets/fonts/Poppins-Regular.ttf'),
        poppins700: require('./../../assets/fonts/poppins-700.ttf'),
      });
    
      if (!loaded) {
           return null;
      }

  return (
    <View style={styles.container}>

      <View>
        {/* horizontal scroll bar */}
        <FlatList
          data={dummyData.categories}
          keyExtractor={(item) => `${item.id}`}
          showsHorizontalScrollIndicator={false}
          horizontal
          style={styles.scrollbar}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity style={[styles.categories, selectedCatergoryId == item.id && styles.SelectedCategories]}
                // onPress={() => {setSelectedCategoryId(item.id)}}
                // onPress={() => onSelectCategory(item)}
                onPress ={()=>navigation.navigate('ViewItems')}
              >
                <View style={styles.cateRoundRow}>
                  <View style={styles.cateRound}>
                    <Image
                      source={item.icon}
                      resizeMode="contain"
                      style={styles.cateIcon2}
                    ></Image>
                  </View>
                  <Text style={styles.cateName2}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )
          }}
        />
      </View>

      {/* search bar */}
      <View style={styles.searchingBarRow}>
        <View style={styles.searchingBar}>
          <TextInput
            placeholder="Search a service..."
            returnKeyType="go"
            placeholderTextColor="#9c8df0"
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
          initialRegion={selectedPlace?.mapInitialRegion}
          customMapStyle={mapStyle}
          style={styles.mapView}
        >
          {/* {selectedPlace?.hotels.map((hotel, index) => (
            <Marker key={index}
              coordinate={hotel.lating}
              identifier={hotel.id}
              onPress={() => {
                setSelectedHotel(hotel)
              }}
            >
              <View style={styles.rect3}>
                <Image
                  source={require("./../../assets/images/avatar-1.jpg")}
                  resizeMode="contain"
                  style={styles.image2}
                ></Image>
              </View>
            </Marker>
          ))} */}
        </MapView>


        {/* new request */}
        <TouchableOpacity
          onPress={() => props.navigation.navigate("NewReqForm")}
          style={styles.addNewReq}
        ></TouchableOpacity>
        <Text style={styles.add}>+</Text>

        {/* expert pop up box */}
        <View style={styles.button}>
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
              <Text style={styles.service1Titile}>Preparing Birthday Cake</Text>
              <Text style={styles.service2Titile}>Making School Uniforms</Text>
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
                <Text style={styles.userRating}>4.1</Text>
              </View>
              <View style={styles.iconRowFiller}></View>
              <View style={styles.icon2Row}>
                {/* expert contact */}
                <FeatherIcon name="phone" style={styles.callIcon}></FeatherIcon>
                <FeatherIcon name="message-square" style={styles.messageIcon}></FeatherIcon>
                <FontAwesomeIcon name="share-square-o" style={styles.requestIcon}></FontAwesomeIcon>
              </View>
            </View>
          </View>
        </View>


        <View style={styles.rect3}>
          <Image
            source={require("./../../assets/images/avatar-1.jpg")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
        </View>


      </View>
      
      <View style={{marginTop:160}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21,31,40,1)"
  }, 
  scrollbar: {
    height: 38,
    marginTop: 97
  },
  scrollbar_contentContainerStyle: {
    width: 390,
    height: 35
  }, categories: {
    width: 120,
    height: 35,
    backgroundColor: "#9c8df0",
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
  SelectedCategories: {
    backgroundColor: '#fff',
  },
  cateRound: {
    width: 30,
    height: 30,
    backgroundColor: "rgba(81,81,81,0.69)",
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
    fontFamily: "poppinsregular",
    color: "#121212",
    fontSize: 10,
    marginLeft: 4,
    marginTop: -1,
    textAlignVertical: 'center'
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
    elevation: 0,
    shadowOpacity: 0.59,
    shadowRadius: 5,
    flexDirection: "row",
    flex: 1,
    marginRight: 9
  },
  serviceSearch: {
    fontFamily: "poppinsregular",
    color: "#fff",
    height: 52,
    opacity: 0.75,
    fontSize: 15,
    flex: 1,
    marginRight: 7,
    marginLeft: 11,
  },
  searchIcon: {
    color: "#9c8df0",
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
    color: "#9c8df0",
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
  mapView: {
   // position: "absolute",
    flex:1,
    top: 0,
    left: 0,
    //height: 644,
    marginBottom:72,
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
    fontFamily: "poppinsregular",
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
    height: 170,
    bottom: 75,
    overflow: "scroll",
    right: 118, 
    width:270, 
    paddingTop:5,
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
    fontFamily: "poppinsregular",
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
    height: 82,
    //justifyContent: "space-between",
    marginBottom: 18,
    marginLeft: 17,
    marginRight: 3
  },
  service1Titile: {
    fontFamily: "poppinsregular",
    color: "rgba(232,232,232,1)",
    fontSize: 10,
    margin: 0,
    width: 240
  },
  service2Titile: {
    fontFamily: "poppinsregular",
    color: "rgba(232,232,232,1)",
    fontSize: 10,
    margin: 0,
    width: 240
  },
  service3Titile: {
    fontFamily: "poppinsregular",
    color: "rgba(232,232,232,1)",
    fontSize: 10,
    margin: 0,
    width: 240
  },
  service5Title: {
    fontFamily: "poppinsregular",
    color: "rgba(232,232,232,1)",
    fontSize: 10,
    margin: 0,
    width: 240
  },
  service4Title: {
    fontFamily: "poppinsregular",
    color: "rgba(232,232,232,1)",
    fontSize: 10,
    margin: 0,
    width: 240
  },
  rect: {
    height: 30,
    backgroundColor: "rgba(60,40,95,0.86)",
    borderRadius: 6,
    flexDirection: "row",
    marginTop:-5
  },
  icon: {
    color: "rgba(255,254,0,1)",
    fontSize: 13,
    height: 13,
    width: 12,
    //marginBottom: 2
    top:5
  },
  userRating: {
    fontFamily: "poppinsregular",
    color: "rgba(255,254,0,1)",
    fontSize: 12,
    marginLeft: 9, 
    top:12,
  },
  iconRow: {
    height: 16,
    flexDirection: "row",
    alignItems: "flex-end",
    marginLeft: 19,
    marginBottom: 10
  },
  iconRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  callIcon: {
    color: "rgba(235,112,210,1)",
    fontSize: 20,
    marginRight: 30
  },
  messageIcon: {
    color: "rgba(235,112,210,1)",
    fontSize: 20,
    marginRight: 30,
    marginBottom: 1
  },
  requestIcon: {
    color: "rgba(235,112,210,1)",
    fontSize: 20,
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
    top:75,
    flex:1
   // height: 64,
   // marginTop: 28
  }
});


export default S_Search