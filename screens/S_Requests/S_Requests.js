import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  FlatList
} from "react-native";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { dummyData } from "../../constants";
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

const S_Requests = () => {
  const navigation = useNavigation();
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
      <FlatList 
        showsVerticalScrollIndicator={true}
        ListHeaderComponent={ 
          <View>

            {/* Searching bar */}
            <View style={styles.searchingBar}>
              <TextInput
                placeholder="Search a service..."
                returnKeyType="go"
                placeholderTextColor="#9c8df0"
                selectionColor="rgba(250,245,245,1)"
                clearButtonMode="while-editing"
                style={styles.serviceSearch}
              ></TextInput>
              <EvilIconsIcon name="search" style={styles.searchIcon}></EvilIconsIcon>
            </View>

            <Text style={styles.priority}>Priority :</Text>
            <View style={styles.priorityStack}>
              <Text style={styles.low}>Low</Text>
              <Text style={styles.medium}>Medium</Text>
              <Text style={styles.high}>High</Text>
              <View style={styles.greenDot}></View>
              <View style={styles.yellowDot}></View>
              <View style={styles.redDot}></View>
            </View>

              <Text style={styles.requestsForMe}>Requests for me</Text>

            {/* Recieved request for me */}
            <FlatList data={dummyData.recieveRequestForMe}
              horizontal
              keyExtractor={(item) => `${item.id}`}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{marginLeft:10, }}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity style={styles.serviceReqSentMe} onPress={()=>navigation.navigate('S_RequestsDetails')}>
                    <View style={styles.senderImageRow}>
                      <Image
                        source={item.senderImage}
                        resizeMode="contain"
                        style={styles.senderImage}
                      ></Image>
                      <View style={styles.sendingDateStackColumn}>
                        <View style={styles.sendingDateStack}>
                          {/* sent date */}
                          <Text style={styles.sendingDate}>{item.sendingDate}</Text>
                          <Text style={styles.senderName}>{item.senderName}</Text>
                        </View>
                        <View style={styles.priorityDot}></View>
                      </View>
                    </View>
                    {/* req title */}
                    <Text style={styles.reqTitle}>{item.reqTitle}</Text>

                    {/* category details */}
                    <View style={styles.cateIconRow}>
                      <Image
                        source={item.cateIcon}
                        resizeMode="contain"
                        style={styles.cateIcon}
                      ></Image>
                      <Text style={styles.cateName}>{item.cateName}</Text>
                    </View>
                    {/* decline btn */}
                    <View style={styles.reqDeleteBtnRow}>
                      <TouchableOpacity style={styles.reqDeleteBtn}>
                        <Text style={styles.decline}>Decline</Text>
                      </TouchableOpacity>
                      {/* accept btn */}
                      <TouchableOpacity style={styles.reqAcceptBtn}>
                        <Text style={styles.accept}>Accept</Text>
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                );
              }} />

            <View style={styles.rect3}>
              <Text style={styles.otherRequests}>Other Requests</Text>
              <View style={styles.otherRequestsFiller}></View>
              <TouchableOpacity style={styles.filterBtn}>
                <View style={styles.filterIconFiller}></View>
                <FontAwesomeIcon
                  name="filter"
                  style={styles.filterIcon}
                ></FontAwesomeIcon>
              </TouchableOpacity>
            </View>

            {/* other requests */}
            <FlatList data={dummyData.OtherRecieveRequest}
              keyExtractor={(item) => `${item.id}`}
              showsVerticalScrollIndicator={true}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity style={styles.serviceReqRecieveOther} onPress={()=>navigation.navigate('S_RequestsDetails')}>
                    <View style={styles.reqTitleOthersStackStack}>
                      <View style={styles.reqTitleOthersStack}>
                        {/* req title */}
                        <Text style={styles.reqTitleOthers}>{item.reqTitleOthers}</Text>
                        {/* accept btn */}
                        <TouchableOpacity style={styles.reqAcceptBtnOthers}>
                          <View style={styles.acceptOthersFiller}></View>
                          <Text style={styles.acceptOthers}>Accept</Text>
                        </TouchableOpacity>
                      </View>
                      {/* request posted date */}
                      <Text style={styles.sendingDateOther}>{item.sendingDateOther}</Text>
                      {/* category info */}
                      <Text style={styles.CateNameOther}>{item.CateNameOther}</Text>
                      <Image
                        source={item.cateIconOthers}
                        resizeMode="contain"
                        style={styles.cateIconOthers}
                      ></Image>
                      {/* priority */}
                      <View style={styles.priorityDotOther}></View>
                    </View>
                  </TouchableOpacity>
                );
              }} />
          </View>
        } />
      <View style={{ marginTop: 175 }}></View>
    </View>
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
    marginTop: 22,
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
  },
  priority: {
    fontFamily: "poppinsregular",
    color: "rgba(141,140,140,1)",
    fontSize: 11,
    textAlign: "right",
    alignSelf: "flex-end",
    marginTop: 29,
    marginRight: 20
  },
  low: {
    top: 0,
    position: "absolute",
    fontFamily: "poppinsregular",
    color: "rgba(141,140,140,1)",
    fontSize: 11,
    textAlign: "right",
    right: 0
  },
  medium: {
    top: 0,
    position: "absolute",
    fontFamily: "poppinsregular",
    color: "rgba(141,140,140,1)",
    fontSize: 11,
    textAlign: "right",
    right: 55
  },
  high: {
    top: 0,
    position: "absolute",
    fontFamily: "poppinsregular",
    color: "rgba(141,140,140,1)",
    fontSize: 11,
    textAlign: "right",
    right: 137
  },
  greenDot: {
    top: 2,
    width: 12,
    height: 12,
    position: "absolute",
    backgroundColor: "rgba(71,214,56,1)",
    borderRadius: 7,
    right: 30
  },
  yellowDot: {
    top: 2,
    width: 12,
    height: 12,
    position: "absolute",
    backgroundColor: "rgba(222,255,0,1)",
    borderRadius: 7,
    right: 112
  },
  redDot: {
    top: 2,
    width: 12,
    height: 12,
    position: "absolute",
    backgroundColor: "rgba(255,51,51,1)",
    borderRadius: 7,
    right: 172
  },
  priorityStack: {
    height: 16,
    alignSelf: "flex-end",
    marginRight: 20, 
    flexDirection:'row', 
    alignItems:'center'
  },
  requestsForMe: {
    fontFamily: "poppins700",
    color: "rgba(255,255,255,1)",
    marginTop: 20,
    marginLeft: 27
  },
  serviceReqSentMe: {
    height: 141,
    backgroundColor: "rgba(65,58,100,0.7)",
    borderRadius: 20,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 2
    },
    elevation: 18,
    shadowOpacity: 0.15,
    shadowRadius: 6,
    width: 267,
    marginTop: 15,
    marginLeft:5, 
    marginRight:10,
  },
  senderImage: {
    width: 25,
    height: 25
  },
  sendingDate: {
    top: 0,
    position: "absolute",
    fontFamily: "poppinsregular",
    color: "rgba(145,145,145,1)",
    fontSize: 10,
    textAlign: "right",
    width: 60,
    height: 14,
    left: 152
  },
  senderName: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "poppinsregular",
    color: "rgba(176,172,172,1)",
    fontSize: 12
  },
  sendingDateStack: {
    width: 212,
    height: 18
  },
  priorityDot: {
    width: 14,
    height: 14,
    backgroundColor: "rgba(222,255,0,1)",
    borderRadius: 7,
    marginTop: 1,
    marginLeft: 196
  },
  sendingDateStackColumn: {
    width: 212,
    marginLeft: 6,
    marginTop: 1
  },
  senderImageRow: {
    height: 34,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 11,
    marginRight: 13
  },
  reqTitle: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    marginLeft: 11
  },
  cateIcon: {
    color: "rgba(220,162,76,1)",
    fontSize: 15,
    height: 18,
    width: 18
  },
  cateName: {
    fontFamily: "poppinsregular",
    color: "rgba(235,214,112,1)",
    fontSize: 11,
    marginLeft: 9,
    marginTop: 1
  },
  cateIconRow: {
    height: 17,
    flexDirection: "row",
    marginTop: 2,
    marginLeft: 16,
    marginRight: 22
  },
  reqDeleteBtn: {
    width: 83,
    height: 40,
    borderWidth: 2,
    borderColor: "rgba(242,69,69,1)",
    borderRadius: 10,
    shadowColor: "rgba(242,69,69,1)",
    shadowOffset: {
      height: 0,
      width: 0
    },
    elevation: 30,
    shadowOpacity: 0.3,
    shadowRadius: 10
  },
  decline: {
    fontFamily: "poppinsregular",
    color: "rgba(242,69,69,1)",
    fontSize: 12,
    textAlign: "center",
    marginTop: 8
  },
  reqAcceptBtn: {
    width: 83,
    height: 40,
    borderWidth: 2,
    borderColor: "rgba(8,255,0,1)",
    borderRadius: 10,
    shadowColor: "rgba(8,255,0,1)",
    shadowOffset: {
      width: 0,
      height: 0
    },
    elevation: 30,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    marginLeft: 13
  },
  accept: {
    fontFamily: "poppinsregular",
    color: "rgba(8,255,0,1)",
    textAlign: "center",
    fontSize: 12,
    marginTop: 8,
    marginLeft: 2
  },
  reqDeleteBtnRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 73,
    marginRight: 13
  },
  rect3: {
    height: 55,
    shadowColor: "rgba(28,28,28,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 45,
    shadowOpacity: 1,
    shadowRadius: 15,
    borderWidth: 0,
    borderColor: "#000000",
    flexDirection: "row",
    marginTop: 30,
  },
  otherRequests: {
    fontFamily: "poppins700",
    color: "rgba(255,255,255,1)",
    marginLeft: 27,
    marginTop: 17
  },
  otherRequestsFiller: {
    flex: 1,
    flexDirection: "row"
  },
  filterBtn: {
    width: 40,
    height: 41,
    backgroundColor: "rgba(60,40,95,1)",
    borderRadius: 8,
    flexDirection: "row",
    marginRight: 14,
    marginTop: 7
  },
  filterIconFiller: {
    flex: 1,
    flexDirection: "row"
  },
  filterIcon: {
    color: "rgba(235,212,210,1)",
    fontSize: 23,
    height: 23,
    width: 18,
    marginRight: 10,
    marginTop: 9
  },
  serviceReqRecieveOther: {
    height: 75,
    backgroundColor: "rgba(65,58,100,0.7)",
    borderRadius: 8,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 2
    },
    elevation: 18,
    shadowOpacity: 0.41,
    shadowRadius: 6,
    marginTop: 16,
    marginLeft: 13,
    marginRight: 17
  },
  reqTitleOthers: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "poppinsregular",
    color: "rgba(255,235,235,1)",
    fontSize: 14
  },
  reqAcceptBtnOthers: {
    top: 3,
    width: 57,
    height: 54,
    position: "absolute",
    borderWidth: 2,
    borderColor: "rgba(8,255,0,1)",
    borderRadius: 10,
    right: -47,
    shadowColor: "rgba(8,255,0,1)",
    shadowOffset: {
      width: 0,
      height: 0
    },
    elevation: 30,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    flexDirection: "row"
  },
  acceptOthersFiller: {
    flex: 1,
    flexDirection: "row"
  },
  acceptOthers: {
    fontFamily: "poppinsregular",
    color: "rgba(8,255,0,1)",
    textAlign: "center",
    fontSize: 12,
    width: 52,
    height: 16,
    marginRight: 2,
    marginTop: 15
  },
  reqTitleOthersStack: {
    top: 0,
    left: 0,
    width: 309,
    height: 57,
    position: "absolute"
  },
  sendingDateOther: {
    top: 43,
    position: "absolute",
    fontFamily: "poppinsregular",
    color: "rgba(145,145,145,1)",
    fontSize: 11,
    textAlign: "left",
    left: 30
  },
  CateNameOther: {
    top: 22,
    left: 29,
    position: "absolute",
    fontFamily: "poppinsregular",
    color: "#70eba1",
    fontSize: 11
  },
  cateIconOthers: {
    top: 21,
    left: 5,
    position: "absolute",
    color: "rgba(112,235,161,1)",
    fontSize: 15,
    height: 18,
    width: 18
  },
  priorityDotOther: {
    top: 45,
    width: 14,
    height: 14,
    position: "absolute",
    backgroundColor: "rgba(222,255,0,1)",
    borderRadius: 7,
    left: 5
  },
  reqTitleOthersStackStack: {
    width: 309,
    height: 57,
    marginTop: 8,
    marginLeft: 11
  }
});

export default S_Requests;