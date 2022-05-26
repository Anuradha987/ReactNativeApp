import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  RefreshControl,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Text,
  Image,
  FlatList,
  ActivityIndicator
} from "react-native";
import {Picker} from '@react-native-picker/picker';
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { dummyData, icons } from "../../constants";
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { ItemsService } from "../../services/customer/Items";
import { OrderService } from "../../services/customer/Orders";
import { AuthService } from "../../services/AuthService";

//Order history. Item orders that have been sent/ Item that have been bought (items buy)
const I_Sent = () => {
  const navigation = useNavigation();
  const [orderStatus, setOrderStatus] = useState("All");
  const [refreshing, setRefreshing] = useState(true);

  const [orders, setOrders] = useState([]);
  const [orderItems, setOrderItems] = useState([]);

      //poppins insert
      const [loaded] = useFonts({
        poppinsregular: require('./../../assets/fonts/Poppins-Regular.ttf'),
        poppins700: require('./../../assets/fonts/poppins-700.ttf'),
    });
  
    useEffect(() => {
      console.log("I_Sent");
      getSentOrdersByUserId();
     }, []);

     const getSentOrdersByUserId = () =>{
      OrderService.getOrdersByUserId(AuthService.userId,AuthService.userToken).then((res)=>{
        console.log(res.data);
        setRefreshing(false);
        setOrders(res.data.data);
      }).catch((error)=>{
        setRefreshing(false);
        console.log(error);
      });
     }

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
      <FlatList
        listKey="14.1"
        showsVerticalScrollIndicator={true}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={()=>getSentOrdersByUserId()} />
        }
        ListHeaderComponent={
          <View>
            <View style={styles.searchingBarColumn}>
              {/* search bar */}
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

              <View style={styles.requestStatusRow}>
                <View style={styles.requestStatus}>
                  <Picker itemStyle={{ backgroundColor: '#000' }}
                    selectedValue={orderStatus}
                    dropdownIconColor={'#DDDDDD'}
                    style={{ color: '#DDDDDD', bottom: 7, left: 5 }}
                    onValueChange={(itemValue, itemIndex) => setOrderStatus(itemValue)}
                  >
                    {/* https://reactnative.dev/docs/picker */}
                    <Picker.Item label="All" value="All" />
                    <Picker.Item label="Accepted" value="Accepted" />
                    <Picker.Item label="Pending" value="Pending" />
                    <Picker.Item label="Rejected" value="Rejected" />
                    <Picker.Item label="Completed" value="Completed" />
                    <Picker.Item label="Cancelled" value="Cancelled" />
                    <Picker.Item label="Cancelled By Me" value="Cancelled By Me" />
                  </Picker>
                </View>
                <View style={styles.requestStatusFiller}></View>


                {/* edit btn */}
                <View style={styles.editBtnRow}>
                  {/* <TouchableOpacity style={styles.editBtn}>
                    <View style={styles.editReqIconFiller}></View>
                    <FeatherIcon name="edit" style={styles.editReqIcon}></FeatherIcon>
                  </TouchableOpacity> */}
                  {/* delete btn */}
                  {/* <TouchableOpacity style={styles.deleteBtn}>
                    <View style={styles.delReqIconFiller}></View>
                    <MaterialCommunityIconsIcon
                      name="delete-sweep"
                      style={styles.delReqIcon}
                    ></MaterialCommunityIconsIcon>
                  </TouchableOpacity> */}
                </View>
              </View>
            </View>


            <View style={styles.scrollArea}>
              <FlatList
                listKey="14.2"
                data={orders}
                keyExtractor={(item) => `${item._id}`}
                showsVerticalScrollIndicator={true}
                renderItem={({ item, index }) => {
                  if(item.status === orderStatus || orderStatus === "All"){
                    // const itemDetails = orderItems.filter((orderItem)=>item.item_id === orderItem._id);
                    // console.log(itemDetails);
                    // if(itemDetails[0]){
                      //  const category = dummyData.itemOrdersSent.filter((item)=>(item.cateName == itemDetails[0].category));
                       const d = new Date(item.order_created_date); 
                      return (
                        // <View style={styles.scrollArea_contentContainerStyle}>
                     <View >
                       {/* item details  */}
                       <TouchableOpacity style={styles.itemDetailsCardStack}
                                         onPress={()=>navigation.navigate("ViewItems", {item:item.item_id, from:"sent",to:item.to})}  //open viewitems
                                         onLongPress={()=>{}} //edit,cancel or delete order popup boxes
                       >
                         <View style={styles.itemDetailsCard}>
                           {/* item name */}
                           <Text numberOfLines={1} style={styles.reqTitle}>{item.item_id.name}</Text>
  
                           <View style={styles.cateNameStack}>
                             {/* item category */}
                             <Text style={styles.cateName}>
                               {/* <Image
                             source={ null}
                             resizeMode="contain"
                             style={styles.cateIcon}
                           ></Image>  */}
                            {item.item_id.category}</Text>                 
                           </View>
                      
                           
  
                           <Text style={styles.reqStatus}>{item.status}</Text>
                           <Text style={styles.priceperUnit}>{item.item_id.price} / {item.item_id.amount}</Text>
                           <Text style={styles.transactionMethod}>{item.order_type}</Text>
                         </View>
                         {/* item image */}
                         <Image
                           source={dummyData.itemOrdersSent[0].itemImage}
                           resizeMode="cover"
                           style={styles.itemImage}
                         ></Image>
                         <View style={styles.orderDetails}>
                           <View style={styles.amountReturningDateFiller}></View>
                           <Text style={styles.amountReturningDate}>
                             {d.toISOString().substring(0,10)+'   '+d.toISOString().substring(11,16)}
                           </Text>
                         </View>
                       </TouchableOpacity>
                     </View>
                   )
                    }
                  }
                }/>
            </View>
            <View style={{ marginTop: 130 }}></View>
          </View>} />
    </View>)
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
    elevation: 0,
    shadowOpacity: 1,
    shadowRadius: 5,
    flexDirection: "row",

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
  },
  searchIcon: {
    color: "#9c8df0",
    fontSize: 29,
    width: 29,
    height: 32,
    marginRight: 10,
    marginTop: 10
  },
  requestStatus: {
    height: 40,
    borderWidth: 2,
    borderColor: "#9c8df0",
    borderRadius: 15,
    width: 164,
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
    color: "rgba(235,212,210,1)",
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
    //marginTop: 65,
    marginRight: 1
  },
  searchingBarColumn: {
    marginTop: 15,
    marginLeft: 16,
    marginRight: 15
  },
  scrollArea: {
    borderWidth: 0,
    borderColor: "#000000",
    flex: 1,
    marginBottom: 50,
    marginTop: 20,
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
    alignItems: "flex-end", 
  },
  reqTitle: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    textAlign: "right",
    marginTop: 6,
    marginRight: 5
  },
  cateName: {
    position: "absolute",
    fontFamily: "poppinsregular",
    color: "#70d6eb",
    top: 0,
    fontSize: 11,
    right: 0,
  },
  cateIcon: {
    height: 18,
    width: 18
  },
  cateNameStack: {
    //width: 166,
    height: 20,
    top:1,
    marginTop: -8,
    marginRight: 9, 
  },
  reqStatus: {
    fontFamily: "poppinsregular",
    color: "rgba(208,208,208,1)",
    fontSize: 13,
    textAlign: "right",
    marginTop: 2,
    marginRight: 8,
  },
  priceperUnit: {
    fontFamily: "poppinsregular",
    color: "rgba(209,209,209,1)",
    textAlign: "center",
    fontSize: 12,
    alignSelf: "flex-start",
    marginTop: 0, 
    marginLeft:12
  },
  transactionMethod: {
    fontFamily: "poppinsregular",
    color: "#9c8df0",
    textAlign: "center",
    fontSize: 13,
    alignSelf: "flex-start",
    marginLeft: 13, 
    marginTop:-3,
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
    top: 133,
    width: 222,
    height: 44,
    position: "absolute",
    backgroundColor: "#9c8df0",
    right: 1,
    flexDirection: "row",
    borderBottomRightRadius:15,
    borderTopLeftRadius:15, 
    paddingRight:5
  },
  amountReturningDateFiller: {
    flex: 1,
    flexDirection: "row"
  },
  amountReturningDate: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    marginRight: 1,
    marginTop: 11, 
    width: 220,
  },
  itemDetailsCardStack: {
    height: 178, marginBottom:10
  }
});
export default I_Sent
