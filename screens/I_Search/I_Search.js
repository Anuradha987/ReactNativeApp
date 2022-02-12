import React, { Component, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground, TouchableWithoutFeedback, Dimensions
} from "react-native";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { FlatList } from "react-native-gesture-handler";
import { dummyData} from '../../constants';
import { useNavigation } from '@react-navigation/native';
const windowHeight = Dimensions.get('screen').height;
 import ViewItems from "./ViewItems";
import 'react-native-gesture-handler';
 import appNavigaiton from './../../navigation/appNavigaiton';

const I_Search = (props) => {

   const navigation = useNavigation();
  const [selectedCatergoryId, setSelectedCategoryId] = React.useState(dummyData.categories)
  
const pressHandler = () => {
  navigation.navigate('ViewItems')
}
  function onSelectCategory(category) {
    let categoryList = dummyData.categories.filter(a => a.selectedCatergoryId.includes(category.id))
    setSelectedCategoryId(categoryList)    
  }

  //poppins insert
  const [loaded] = useFonts({
    poppinsregular: require('./../../assets/fonts/Poppins-Regular.ttf'),
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
                onPress={() => onSelectCategory(item)}
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


      {/* Product Cards */}
      <View style={styles.product1GroupRow}>
        <FlatList
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          data={dummyData.itemsSearchList}
          numColumns={2}
          keyExtractor={(item) => `${item.id}`}
          showsHorizontalScrollIndicator={true}

          renderItem={({ item, index }) => {
            return (
              
              <TouchableWithoutFeedback style={styles.product1Group}
              // pressHandler
                   onPress = {pressHandler}
              >
                <View style={styles.products1Stack}>
                  <LinearGradient
                    colors={['#3b3b4a', '#212126', '#3b3b4a']}
                    style={styles.products1}
                  >
                    <View style={styles.productName1StackStack}>
                      <View style={styles.productName1Stack}>
                        <Text style={styles.productName1}>{item.itemName}</Text>
                        <Image
                          source={item.categoryIcon}
                          resizeMode="contain"
                          style={styles.cateIcon1}
                        ></Image>
                      </View>
                      <Text style={styles.cateName1}>
                        {item.cateName}
                      </Text>
                    </View>
                    <Text style={styles.available}>{item.availability}</Text>
                    <Text style={styles.tradingMethod1}>{item.tradeMethod}</Text>
                    <Text style={styles.pricePerUnit}>{item.price} / {item.quantity}</Text>
                    {/* </ImageBackground> */}
                  </LinearGradient>
                  <ImageBackground
                    source={item.itemImage}
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
              </TouchableWithoutFeedback>
            );
          }} />

      </View>

      <View style={styles.addNewReqStack}>
        <TouchableOpacity
            onPress={() =>navigation.navigate("ViewItems")}
          style={styles.addNewReq}
        ></TouchableOpacity>
        {/* <Text style={styles.add}>+</Text> */}
      </View>

      {/* <View style={{ backgroundColor: "#fff", margin: 50, height: 700 }}></View> */}
      <View style={{ marginTop: 160 }}></View>
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
  },
  categories: {
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
    shadowOpacity: 1,
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
    marginTop: 13
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
    shadowOpacity:1,
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
  product1Group: {
    width: 169,
    height: 317
  },
  products1: {
    top: 0,
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
    elevation: 0,
    shadowOpacity: 1,
    shadowRadius: 10,
    overflow: "hidden",
  },
  products1_imageStyle: {},
  productName1: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "poppinsregular",
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
    fontFamily: "poppinsregular",
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
    fontFamily: "poppinsregular",
    color: "rgba(8,255,0,1)",
    fontSize: 13,
    marginTop: 3,
    marginLeft: 10
  },
  tradingMethod1: {
    fontFamily: "poppinsregular",
    color: "#9c8df0",
    fontSize: 24,
    width: 142,
    height: 37,
    marginTop: 4,
    marginLeft: 11
  },
  pricePerUnit: {
    fontFamily: "poppinsregular",
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
    width: 26,
    marginTop: 9,
    marginLeft: 135
  },
  products1Stack: {
    width: 169,
    height: 316,
    marginBottom: 15,
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
    fontFamily: "poppinsregular",
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
    fontFamily: "poppinsregular",
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
    fontFamily: "poppinsregular",
    color: "rgba(255,130,130,1)",
    fontSize: 13,
    marginTop: 3,
    marginLeft: 10
  },
  forBarter: {
    top: 0,
    left: 1,
    position: "absolute",
    fontFamily: "poppinsregular",
    color: "rgba(221,160,248,1)",
    fontSize: 24,
    width: 142,
    height: 37
  },
  rs30101: {
    top: 36,
    left: 0,
    position: "absolute",
    fontFamily: "poppinsregular",
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
    //card flatlist area
    height: windowHeight - 280,
    flexDirection: "row",
    marginTop: 78,
    marginLeft: 15,
    marginRight: 15,
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
    elevation: 0,
    shadowOpacity: 0.5,
    shadowRadius: 5
  },
  add: {
    top: 0,
    position: "absolute",
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    fontSize: 60,
    height: 70,
    right: 17,
    width: 41
  },
  addNewReqStack: {
    width: 70,
    height: 81,
    alignSelf: "flex-end",
    marginTop: windowHeight - 860,
    marginRight: 30
  },
  product3: {
    width: 169,
    height: 318,
    marginTop: 20,
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
    fontFamily: "poppinsregular",
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
    fontFamily: "poppinsregular",
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
    fontFamily: "poppinsregular",
    color: "rgba(8,255,0,1)",
    fontSize: 13,
    marginTop: 4,
    marginLeft: 13
  },
  forBorrow: {
    fontFamily: "poppinsregular",
    color: "rgba(221,160,248,1)",
    fontSize: 24,
    width: 142,
    height: 37,
    marginTop: 3,
    marginLeft: 12
  },
  rs30102: {
    fontFamily: "poppinsregular",
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

export default I_Search;

