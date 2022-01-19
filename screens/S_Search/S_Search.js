import React,{ Component } from 'react';
import {StyleSheet,Animated, Text,View,Image, } from 'react-native';
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, dummyData, FONTS, icons, SIZES } from '../../constants';
import {Surface} from 'react-native-paper'
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
//import MapView from "react-native-maps";

const S_Search = () => {

    const [selectedCategoryId, setSelectedCategoryId] =  React.useState(1)
//     const [selectedMenuType, setSelectedMenuType] = React.useState(1)
//     const [menuList, setMenuList] = React.useState([])

//     React.useEffect(() => {
//         handleChangeCategory(selectedCategoryId, selectedMenuType)
//     }, [])

// //header
//     function handleChangeCategory (categoryId, menuTypeId){

//         //Retreive the popular menu
//         let selectedPopular = dummyData.menu.find(a => a.name == 'Popular')

//         //Retrieve the recommended menu
//         let selectedRecommend = dummyData.menu.find (a => a.name == 'Recommended')

//         //find the menu based on the menuTypeId
//         let selectedMenu = dummyData.menu.find(a => a.id == menuTypeId)

//         //Set the popular menu based on the categoryID
//         setPopular(selectedPopular?.list.filter(a => a.categories.includes(categoryId)))

//         //Set the recommended menu based on the categoryID
//         setRecommends(selectedRecommend?.list.filter(a => a.categories.includes(categoryId)))

//         //set the menu based on the categoryId
//         setMenuList(selectedMenu?.list.filter(a=> a.categories.includes(categoryId)))
//     }


function renderServicesCategory(){
    return(
        <FlatList data={dummyData.categories}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem ={({item, index})=> ( 
                        <TouchableOpacity style={{  flexDirection: 'row', 
                                                    height: 55, 
                                                    marginTop: SIZES.padding, 
                                                    marginLeft: index == 0 ? SIZES.padding : SIZES.radius, 
                                                    marginRight: index == dummyData.categories.length - 1 ? SIZES.padding : 0, 
                                                    paddingHorizontal: 0, 
                                                    borderRadius: SIZES.radius, 
                                                    backgroundColor : selectedCategoryId == item.id ? COLORS.primary : COLORS.lightGray2
                                                }}
                                        //   onPress = {()=> {
                                        //       setSelectedCategoryId(item.id)
                                        //       handleChangeCategory(item.id, setSelectedMenuType)
                                        //   }}
                        >

                            <Image source={item.icon}
                                    style={{marginTop:5, height:50, width:50 }}
                            />
                            <Text style={{alignSelf:'center', marginRight: SIZES.base, color: selectedCategoryId == item.id ? COLORS.white : COLORS.darkGray, ...FONTS.h3}}>{item.name}</Text>
                        </TouchableOpacity>
                      )}
        />
    )
}

function searchService(){
  return(
  
      <View style={styles.rect4Row}>
        <View style={styles.rect4}>
          <TextInput
            placeholder="Search a service..."
            returnKeyType="go"
            placeholderTextColor="rgba(156,141,240,1)"
            selectionColor="rgba(156,141,240,1)"
            style={styles.serviceSearch}
          ></TextInput>
          <View style={styles.serviceSearchFiller}></View>
          <EvilIconsIcon
            name="search"
            style={styles.searchIcon}
          ></EvilIconsIcon>
        </View>
        <View style={styles.filterBtn}>
          <View style={styles.filterIconFiller}></View>
          <EvilIconsIcon
            name="search"
            style={styles.filterIcon}
          ></EvilIconsIcon>
        </View>
      </View>
  );
}


    return (
        <View style={styles.container}>
            {searchService()}
            {renderServicesCategory()}
        </View>

    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#1B2131',
  },
  rect4: {
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
    width: 223,
    marginLeft: 11
  },
  serviceSearchFiller: {
    flex: 1,
    flexDirection: "row"
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
    fontSize: 40,
    width: 40,
    height: 43,
    marginRight: 6,
    marginTop: 6
  },
  rect4Row: {
    height: 52,
    flexDirection: "row",
    marginTop: 38,
    marginLeft: 16,
    marginRight: 16
  },
  map: {
    backgroundColor: "rgba(48,57,45,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    flex: 1,
    marginBottom: 51,
    marginTop: 18
  },
  scrollArea: {
    width: 375,
    height: 44,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 24
  },
  scrollArea_contentContainerStyle: {
    width: 375,
    height: 44,
    flexDirection: "row"
  },
  button: {
    width: 74,
    height: 26,
    backgroundColor: "rgba(208,2,27,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 44,
    shadowColor: "rgba(127,127,129,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 15,
    shadowOpacity: 1,
    shadowRadius: 5
  },
  button1: {
    width: 74,
    height: 26,
    backgroundColor: "rgba(208,2,27,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 44,
    shadowColor: "rgba(127,127,129,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 15,
    shadowOpacity: 1,
    shadowRadius: 5,
    marginLeft: 12
  },
  button2: {
    width: 74,
    height: 26,
    backgroundColor: "rgba(208,2,27,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 44,
    shadowColor: "rgba(127,127,129,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 15,
    shadowOpacity: 1,
    shadowRadius: 5,
    marginLeft: 12
  },
  button3: {
    width: 74,
    height: 26,
    backgroundColor: "rgba(208,2,27,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 44,
    shadowColor: "rgba(127,127,129,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 15,
    shadowOpacity: 1,
    shadowRadius: 5,
    marginLeft: 14
  },
  buttonRow: {
    height: 26,
    flexDirection: "row",
    flex: 1,
    marginRight: 25,
    marginLeft: 16,
    marginTop: 9
  }
});

export default S_Search