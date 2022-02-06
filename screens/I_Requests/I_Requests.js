import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  TextInput, 
  FlatList, 
  TouchableOpacity
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import {dummyData} from '../../constants';

//The topic of the page should changed to I_SalesHistory. 
// Details about items/products that have been sold to others in the past are displayed on here. 

const I_Requests = () => {
    return (
        <View style={styles.container}>
<FlatList showsVerticalScrollIndicator={true}
        ListHeaderComponent={
            <View>
<View> 
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


           <View style={styles.scrollArea}>
            <FlatList
            data={dummyData.itemSalesHistory}
            keyExtractor={(item) => `${item.id}`}
            showsVerticalScrollIndicator={true}
            renderItem={({ item, index }) => {
                return (
                    <View>
                      <TouchableOpacity style={styles.itemCardStack}>
                        <View style={styles.itemCard}>
                          <Text style={styles.itemTitle}>{item.itemTitle}</Text>

                          <View style={styles.cateNameStack}>
                            <Text style={styles.cateName}><Image
                              source={item.cateIcon}
                              resizeMode="contain"
                              style={styles.cateIcon}
                            ></Image>  {item.cateName}</Text>
                            
                          </View>

                         

                          <View style={styles.priceperUnitStack}>
                            <Text style={styles.priceperUnit}>{item.price} / {item.unit}</Text>
                            <Text style={styles.transactionMethod}>{item.transactionMethod}</Text>
                          </View>
                        </View>
                        <Image
                          source={item.itemImage}
                          resizeMode="cover"
                          style={styles.itemImage}
                        ></Image>
                      </TouchableOpacity>
                      </View>
          )}}/>
        
        </View>


        </View>
        <View style={{ marginTop: 105 }}></View>

        </View>}/>
      </View>
    );
  }
  
const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: "rgba(21,31,40,1)"
},
scrollArea: {
    //height: 61,
    borderWidth:0,
    borderColor: "#000000",
    //flex: 1,
    marginBottom: 50,
    marginTop: 20,
    marginLeft: 12,
    marginRight: 12, 
},
itemCard: {
    top: 14,
    left: 73,
    height: 87,
    position: "absolute",
    backgroundColor: "rgba(81,81,81,0.69)",
    borderRadius: 20,
    right: 0,
    alignItems: "flex-end"
},
itemTitle: {
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    textAlign: "right",
    marginTop: 14,
    marginRight: 10
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
    right: 94,
    height: 18,
    width: 18
},
cateNameStack: {
  height: 20,
  top:1,
  marginTop: -5,
  marginRight: 9, 
},
priceperUnit: {
    top: 0,
    position: "absolute",
    fontFamily: "poppins-regular",
    color: "rgba(209,209,209,1)",
    textAlign: "right",
    fontSize: 12,
    height: 18,
    right: 59,
    width: 122
},
transactionMethod: {
    top: 0,
    position: "absolute",
    fontFamily: "poppins-500",
    color: "rgba(220,147,245,1)",
    textAlign: "right",
    fontSize: 13,
    height: 20,
    right: 0,
    width: 83
},
priceperUnitStack: {
    width: 181,
    height: 20,
    marginTop: 6,
    marginRight: 11
},
itemImage: {
    top: 0,
    left: 0,
    width: 126,
    height: 111,
    position: "absolute",
    borderRadius: 20
},
itemCardStack: {
    height: 111,
    marginTop: 0, 
    marginBottom:15
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
marginTop: 38,
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
}
});

export default I_Requests
