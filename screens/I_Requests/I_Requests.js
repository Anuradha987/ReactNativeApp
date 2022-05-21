import React, { Component, useEffect } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  TextInput, 
  FlatList, 
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import {dummyData} from '../../constants';
import { useFonts } from 'expo-font';
import { OrderService } from '../../services/customer/Orders';
import { AuthService } from '../../services/AuthService';

// ⚠ The topic of the page should changed to I_SalesHistory. ⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠
// Details about items/products that have been sold to others in the past are displayed on here. 

const I_Requests = () => {

      //poppins insert
      const [loaded] = useFonts({
        poppinsregular: require('./../../assets/fonts/Poppins-Regular.ttf'),
        poppins700: require('./../../assets/fonts/poppins-700.ttf'),
    });

    useEffect(() => {
      console.log("I_requests");
      OrderService.getOrdersByUserId(AuthService.userId,"accept",AuthService.userToken).then((res)=>{
        console.log(res.data);
      }).catch((error)=>{
        console.log(error);
      });
     }, []);

    return (
      (!loaded)?
      (
        <View
          style={{
            flex: 4,
            backgroundColor: 'rgba(21,31,40,1)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* https://github.com/n4kz/react-native-indicators */}
          <ActivityIndicator size="large" />
        </View>
      ):
        (<View style={styles.container}>
<FlatList showsVerticalScrollIndicator={true}
        listKey="11.1"
        ListHeaderComponent={
            <View>
<View> 
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

           <View style={styles.scrollArea}>
            <FlatList
            listKey="11.2"
            data={dummyData.itemSalesHistory}
            keyExtractor={(item) => `${item.id}`}
            showsVerticalScrollIndicator={true}
            //onPress = {()=> naviga}
            renderItem={({ item, index }) => {
                return (
                    <View>
                      {/* open I_My */}
                      <TouchableOpacity style={styles.itemCardStack} onPress={()=>{}}>
                        <View style={styles.itemCard}>
                          <Text numberOfLines={1} style={styles.itemTitle}>{item.itemTitle}</Text>

                          <View style={styles.cateNameStack}>
                            <Text style={styles.cateName}><Image
                              source={item.cateIcon}
                              resizeMode="contain"
                              style={styles.cateIcon}
                            ></Image>  {item.cateName}</Text>
                            
                          </View>

                         

                          <View style={styles.priceperUnitStack}>
                            <Text numberOfLines={1} style={styles.priceperUnit}>{item.price} / {item.unit}</Text>
                            <Text numberOfLines={1} style={styles.transactionMethod}>{item.transactionMethod}</Text>
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
        <View style={{ marginTop: 150 }}></View>

        </View>}/>
      </View>)
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
    marginTop: 40,
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
    alignItems: "flex-end", 
},
itemTitle: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    textAlign: "right",
    marginTop: 10,
    marginRight: 10, 
},
cateName: {
    position: "absolute",
    fontFamily: "poppinsregular",
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
    fontFamily: "poppinsregular",
    color: "rgba(209,209,209,1)",
    textAlign: "right",
    fontSize: 12,
    height: 18,
    right: 59,
  //  width: 122
},
transactionMethod: {
    top: 0,
    position: "absolute",
    fontFamily: "poppinsregular",
    color: "rgba(220,147,245,1)",
    textAlign: "right",
    fontSize: 13,
    height: 20,
    right: 0,
   // width: 83
},
priceperUnitStack: {
    width: 181,
    height: 20,
    marginTop: 10,
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
    shadowOpacity: 1,
    shadowRadius: 5,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 16,
    marginRight: 16
},
serviceSearch: {
    fontFamily: "poppinsregular",
    color: "#fff",
    height: 52,
    opacity: 0.75,
    fontSize: 15,
    flex: 1,
    marginRight: 13,
    marginLeft: 11,
    marginTop:3
},
searchIcon: {
  color: "#9c8df0",
  fontSize: 29,
  width: 29,
  height: 32,
  marginRight: 10,
  marginTop: 14
}
});

export default I_Requests
