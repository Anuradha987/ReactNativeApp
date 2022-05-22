import React, { Component, useState, useEffect } from "react";
import {
  RefreshControl,
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
  FlatList,
  Animated,
  ActivityIndicator
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import { dummyData } from '../../constants';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { ItemsService } from "../../services/customer/Items";
import { AuthService } from "../../services/AuthService";
import { RequestService } from "../../services/customer/Requests";

//item details that have been sold and the order requests recieved from others

const windowHeight = Dimensions.get('screen').height;
const windowWidth = Dimensions.get('screen').width;

const I_My = () => {
  const navigation = useNavigation();

  const [refreshing, setRefreshing] = useState(true);

  const [myItems, setMyItems] = React.useState([]);
  const [orderRequests, setOrderRequests] = React.useState([]);
  // console.log(myItems);
  //poppins insert
  const [loaded] = useFonts({
    poppinsregular: require('./../../assets/fonts/Poppins-Regular.ttf'),
    poppins700: require('./../../assets/fonts/poppins-700.ttf'),
  });

  useEffect(() => {
    console.log("I_my");
    console.log(AuthService.userId);
    console.log(AuthService.userToken);
    if(!myItems.length){
    loadData();
    }

  }, []);

  const getMyItems = () => {
    ItemsService.getItemsByUserId(AuthService.userId, AuthService.userToken).then((res) => {
      // console.log(res.data);
      const items = res.data.data;
      // console.log(items);
      setMyItems(items);
      setRefreshing(false);
      // console.log(myItems);
    }).catch((error) => {
      setRefreshing(false);
      // console.log(error);
    })
  }

  const getOrderRequests = () => {
    RequestService.getRecievedRequestsByUserId(AuthService.userId, AuthService.userToken).then((res)=>{
      console.log(res.data);
      const orderRequests = res.data.data;
      setOrderRequests(orderRequests);
    }).catch((error)=>{
      console.log(error);
    });
  }

  const loadData= () =>{
    getMyItems();
    getOrderRequests();
  }

  return (
    (!loaded || refreshing) ?
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
      ) :
      (<View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('AddEditItems') }}>
          <Text style={styles.submit}>Add New Item</Text>
        </TouchableOpacity>
        {/* Vertical scroll bar */}
        <FlatList data={dummyData.itemsRequestList}
          showsVerticalScrollIndicator={true}
          listKey="10.8"
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={loadData} />
          }
          //contentContainerStyle={{ paddingBottom: 100 }}
          ListHeaderComponent={
            <View key={2}>
              {/* horizontal scroll bar */}
              <Animated.FlatList
                listKey="10.1"
                data={dummyData.myItemsData}
                keyExtractor={(item) => `${item.id}`}
                showsHorizontalScrollIndicator={true}
                horizontal
                snapToAlignment='center'
                pagingEnabled
                snapToInterval={412}
                decelerationRate={'fast'}
                // style={{ width: 600,    }}
                renderItem={({ item, index }) => {
                  return (
                    <View key={index}>
                      {/* My items details */}
                      {myItems.map((item) => {
                       return (<LinearGradient
                          colors={['#F1F1B0', '#ECDC80', '#EBD670']}
                          key={item._id}
                          style={styles.myItemDetails}
                        >
                          <View style={styles.publishDateRow}>
                            <Text numberOfLines={1} style={styles.publishDate}>{item.publishDate}</Text>
                            <View style={styles.publishDateFiller}></View>
                            <View style={styles.editBtnRow}>
                              <TouchableOpacity style={styles.editBtn}>
                                <View style={styles.editIconFiller}></View>
                                <FeatherIcon name="edit" style={styles.editIcon}></FeatherIcon>
                              </TouchableOpacity>
                              <TouchableOpacity style={styles.deleteBtn}>
                                <View style={styles.delIconFiller}></View>
                                <MaterialCommunityIconsIcon
                                  name="delete-sweep"
                                  style={styles.delIcon}
                                ></MaterialCommunityIconsIcon>
                              </TouchableOpacity>
                            </View>
                          </View>
                          <Text style={styles.pageNo}>{item.pageNo}.</Text>
                          <Image
                            source={item.itemImage}
                            resizeMode="cover"
                            style={styles.itemImage}
                          ></Image>
                          <Text numberOfLines={1} style={styles.itemTitle}>{item.name}</Text>
                          <View style={styles.cateIconRow}>
                            <Image
                              source={item.cateIcon}
                              resizeMode="contain"
                              style={styles.cateIcon}
                            ></Image>
                            <Text numberOfLines={1} style={styles.cateName}>{item.category}</Text>
                          </View>
                          <View style={styles.totalAmountlblRow}>
                            <Text style={styles.totalAmountlbl}>Total Amount</Text>
                            <View style={styles.totalAmountlblFiller}></View>
                            <Text numberOfLines={1} style={styles.totalAmount}>{item.amount}</Text>
                          </View>
                          <View style={styles.forCashlblRow}>
                            <Text style={styles.forCashlbl}>For Cash</Text>
                            <View style={styles.forCashlblFiller}></View>
                            <Text numberOfLines={1} style={styles.price}>{item.price} /{item.amount}</Text>
                          </View>
                        </LinearGradient>)
                      })}
                    </View>
                  )
                }}
              />

                      {/* Reqests for my items */}
                      <LinearGradient
                        colors={['#F1F1B0', '#ECDC80', '#EBD670']}
                        style={styles.receivedReqList}
                      >
                        <View style={styles.orderRequestslblStack}>
                          <Text style={styles.orderRequestslbl}>Order Requests</Text>
                          <View style={styles.notificationCircle}>
                            {/* <View style={styles.noOfNotificationFiller}></View> */}
                            <Text numberOfLines={1} style={styles.noOfNotification}>{orderRequests.length}</Text>
                          </View>
                        </View>

                        {/* open the popup box */}
                        {orderRequests.map((request)=>{
                          return     <TouchableOpacity key={request._id} style={styles.reqInfoCard}>
                          <View style={styles.reqSenderInfo}>
                            <View style={styles.senderProPicRow}>
                              <Image
                                source={item.senderProPic}
                                //source={require("./../../assets/images/_110435139_parsa.jpg")}
                                resizeMode="cover"
                                style={styles.senderProPic}
                              ></Image>
                              <Text numberOfLines={1} style={styles.senderName}>{item.senderName}</Text>
                            </View>
                            <View style={styles.senderProPicRowFiller}></View>
                            <Text style={styles.sendTime}>{item.sendTime}</Text>
                          </View>
                          <View style={styles.amountlblStackRowRow}>
                            <View style={styles.amountlblStackRow}>
                              <View style={styles.amountlblStack}>
                                <Text style={styles.amountlbl}>Amount</Text>
                                <Text style={styles.colonMark1}> :</Text>
                              </View>
                              <Text style={styles.amountOrdered}>{item.amountOrdered}</Text>
                            </View>
                            <View style={styles.amountlblStackRowFiller}></View>
                            <TouchableOpacity style={styles.reqDeclineBtn}>
                              <Text style={styles.decline}>Decline</Text>
                            </TouchableOpacity>
                          </View>
                          <View style={styles.returningDateOrExchangedForlblStackRowRow}>
                            <View style={styles.returningDateOrExchangedForlblStackRow}>
                              <View style={styles.returningDateOrExchangedForlblStack}>
                                <Text style={styles.returningDateOrExchangedForlbl}>
                                  Returning Date
                                </Text>
                                <Text style={styles.colonMark2}> :</Text>
                              </View>
                              <Text numberOfLines={1} style={styles.returningDateOrExchangedFor}>{item.returningDateOrExchangedFor}</Text>
                            </View>
                            <View
                              style={styles.returningDateOrExchangedForlblStackRowFiller}
                            ></View>
                            <TouchableOpacity style={styles.reqAcceptBtn}>
                              <Text style={styles.accept}>Accept</Text>
                            </TouchableOpacity>
                          </View>
                        </TouchableOpacity>
                        })}
                    

                      </LinearGradient>
            </View>
          }
        />
        
        <View style={{ marginTop: 155 }}></View>
      </View>)

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    backgroundColor: "rgba(21,31,40,1)",
  },
  button: {
    height: 47,
    backgroundColor: "rgba(123,0,255,1)",
    borderRadius: 8,
    marginTop: 30,
    marginLeft: 37,
    marginRight: 37
  },
  submit: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    marginTop: 9,
    marginLeft: 8,
    marginRight: 7,
    letterSpacing: 0.5,
    fontSize: 18,
  },
  receivedReqList: {
    width: 365,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 0,
    shadowOpacity: 1,
    shadowRadius: 10,
    borderRadius: 19,
    height: "auto",
    marginTop: 30,
    marginLeft: 23,
    marginRight: 24,
    marginBottom:24,
    paddingBottom:24,
    overflow: "hidden"
  },
  receivedReqList_imageStyle: {},
  orderRequestslbl: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "poppins700",
    color: "rgba(0,0,0,1)"
  },
  notificationCircle: {
    top: 0,
    width: 26,
    height: 26,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
    borderRadius: 13,
    right: 0,
  },
  noOfNotificationFiller: {
    flex: 1,
    flexDirection: "row"
  },
  noOfNotification: {
    //width:26,
    fontFamily: "poppinsregular",
    color: "#121212",
    textAlign: "center",
    marginTop: 2,
    flex: 1,
  },
  orderRequestslblStack: {
    height: 26,
    marginTop: 36,
    marginHorizontal: 29,
  },
  reqInfoCard: {
    height: 118,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "rgba(31,31,31,1)",
    marginTop: 11,
    marginLeft: 5,
    marginRight: 5
  },
  reqSenderInfo: {
    height: 31,
    backgroundColor: "rgba(31,31,31,1)",
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    flexDirection: "row",
    // marginLeft: 4
  },
  senderProPic: {
    width: 20,
    height: 20,
    borderRadius: 10
  },
  senderName: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    fontSize: 11,
    marginLeft: 10,
  },
  senderProPicRow: {
    height: 20,
    flexDirection: "row",
    marginLeft: 24,
    marginTop: 5
  },
  senderProPicRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  sendTime: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    fontSize: 11,
    textAlign: "right",
    marginRight: 15,
    marginTop: 8
  },
  amountlbl: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "poppins700",
    color: "rgba(125,123,123,1)",
    width: 66,
    fontSize: 11,
    height: 16
  },
  colonMark1: {
    top: 0,
    left: 63,
    position: "absolute",
    // fontFamily: "roboto-700",
    color: "rgba(125,123,123,1)",
    width: 10,
    height: 17,
    fontSize: 14
  },
  amountlblStack: {
    width: 73,
    height: 17,
    marginTop: 2
  },
  amountOrdered: {
    fontFamily: "poppinsregular",
    color: "rgba(0,0,0,1)",
    textAlign: "left",
    width: 175,
    height: 21
  },
  amountlblStackRow: {
    height: 21,
    flexDirection: "row",
    marginTop: 11
  },
  amountlblStackRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  reqDeclineBtn: {
    width: 57,
    height: 36,
    borderWidth: 2,
    borderColor: "rgba(242,69,69,1)",
    borderRadius: 10,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    flexDirection: "row"
  },
  declineFiller: {
    flex: 1,
    flexDirection: "row"
  },
  decline: {
    fontFamily: "poppinsregular",
    color: "rgba(242,69,69,1)",
    textAlign: "center",
    fontSize: 12,
    width: 52,
    height: 16,
    marginRight: 2,
    marginTop: 6
  },
  amountlblStackRowRow: {
    height: 36,
    flexDirection: "row",
    marginTop: 1,
    marginLeft: 17,
    marginRight: 16
  },
  returningDateOrExchangedForlbl: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "poppins700",
    color: "rgba(125,123,123,1)",
    fontSize: 11
  },
  colonMark2: {
    top: 5,
    left: 63,
    position: "absolute",
    // fontFamily: "roboto-700",
    color: "rgba(125,123,123,1)"
  },
  returningDateOrExchangedForlblStack: {
    width: 73,
    height: 32
  },
  returningDateOrExchangedFor: {
    fontFamily: "poppinsregular",
    color: "rgba(0,0,0,1)",
    textAlign: "left",
    width: 175,
    height: 21,
    marginTop: 5,
  },
  returningDateOrExchangedForlblStackRow: {
    height: 32,
    flexDirection: "row"
  },
  returningDateOrExchangedForlblStackRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  reqAcceptBtn: {
    width: 57,
    height: 36,
    borderWidth: 2,
    borderColor: "rgba(60,209,6,1)",
    borderRadius: 10,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    flexDirection: "row",
    marginTop: 6
  },
  accept: {
    fontFamily: "poppinsregular",
    color: "rgba(60,209,6,1)",
    textAlign: "center",
    fontSize: 12,
    width: 52,
    height: 16,
    marginRight: 2,
    marginTop: 6
  },
  returningDateOrExchangedForlblStackRowRow: {
    height: 42,
    flexDirection: "row",
    marginLeft: 16,
    marginRight: 16,
  },
  myItemDetails: {
    marginHorizontal: 10,
    height: 470,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 0,
    shadowOpacity: 1,
    shadowRadius: 10,
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 19,
    marginTop: 30,
    marginLeft: 24,
    marginRight: 24,
    overflow: "hidden",
    width: 365
  },
  publishDate: {
    fontFamily: "poppinsregular",
    color: "rgba(152,150,150,1)",
    width: 120,
    fontSize: 11,
    height: 16,
    marginTop: 7,
  },
  publishDateFiller: {
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
  publishDateRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 24,
    marginLeft: 22,
    marginRight: 16
  },
  pageNo: {
    fontFamily: "poppinsregular",
    color: "rgba(216,148,255,1)",
    fontSize: 62,
    textAlign: "center",
    marginTop: -15,
    marginLeft: 15,
    marginRight: 16
  },
  itemImage: {
    width: 130,
    height: 130,
    marginTop: 0,
    marginLeft: 110
  },
  itemTitle: {
    fontFamily: "poppinsregular",
    color: "#121212",
    fontSize: 20,
    textAlign: "center",
    marginTop: 7,
    marginLeft: 24,
    marginRight: 24,
  },
  cateIcon: {
    tintColor: "rgba(79,77,77,1)",
    // fontSize: 20,
    height: 22,
    width: 22,
  },
  cateName: {
    fontFamily: "poppinsregular",
    color: "rgba(79,77,77,1)",
    marginLeft: 7,
    marginTop: 6,
    textAlignVertical: 'center',
  },
  cateIconRow: {
    height: 22,
    flexDirection: "row",
    marginTop: 1,
    marginHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalAmountlbl: {
    fontFamily: "poppinsregular",
    color: "rgba(59,57,57,1)"
  },
  totalAmountlblFiller: {
    flex: 1,
    flexDirection: "row"
  },
  totalAmount: {
    fontFamily: "poppinsregular",
    color: "rgba(59,57,57,1)",
    textAlign: "right"
  },
  totalAmountlblRow: {
    height: 21,
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 32,
    marginRight: 36
  },
  tradingMethodlbl: {
    fontFamily: "poppins700",
    color: "rgba(109,107,107,1)",
    width: 111,
    height: 20
  },
  forCashlblFiller: {
    flex: 1,
    flexDirection: "row"
  },
  pricePerUnit: {
    fontFamily: "poppins700",
    color: "rgba(126,0,255,1)",
    width: 148,
    textAlign: "right",
    fontSize: 16,
    height: 20
  },
  forCashlblRow: {
    height: 20,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 33,
    marginRight: 36
  },
  // searchingBarStack: {
  //   height: 53,
  //   marginTop: 26,
  //   marginLeft: 16,
  //   marginRight: 15
  // },
  // searchingBar: {
  //   top: 1,
  //   left: 0,
  //   height: 52,
  //   position: "absolute",
  //   borderWidth: 0,
  //   borderColor: "rgba(31,30,30,0.43)",
  //   borderRadius: 8,
  //   backgroundColor: "rgba(75,81,101,0.43)",
  //   shadowColor: "rgba(16,16,16,1)",
  //   shadowOffset: {
  //     width: 3,
  //     height: 3
  //   },
  //   elevation: 0,
  //   shadowOpacity: 0.59,
  //   shadowRadius: 5,
  //   flexDirection: "row",
  //   right: 0
  // },
  // searchIconFiller: {
  //   flex: 1,
  //   flexDirection: "row"
  // },
  // searchIcon: {
  //   color: "#9c8df0",
  //   fontSize: 29,
  //   width: 30,
  //   height: 32,
  //   marginRight: 10,
  //   marginTop: 12

  // },
  // serviceSearch: {
  //   top: 0,
  //   position: "absolute",
  //   fontFamily: "poppinsregular",
  //   color: "rgba(255,255,255,1)",
  //   height: 52,
  //   opacity: 0.75,
  //   fontSize: 15,
  //   left: 11,
  //   right: 52
  // },
});
export default I_My
