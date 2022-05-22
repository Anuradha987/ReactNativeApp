import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Text,
  FlatList,
  Animated,
  Image,
  ActivityIndicator
} from "react-native";
import {Picker} from '@react-native-picker/picker';
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import { dummyData } from "../../constants";
import PickerComponent from "../../components/PickerComponent";
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { AuthService } from "../../services/AuthService";
import { RequestService } from "../../services/customer/Requests";
//notifi about the rates, votes and commetns of yours services. 
//details about your requested services. 
//details about upcoming pending services that you have accepted.
//msgs from others. 
//your services graphs, eranings.  


const S_Sent = () => {
  const navigation = useNavigation();
  // for the requests status 
  const [selectedValue, setSelectedValue] = useState("All");
  const [sentRequests, setSentRequests] = React.useState([]);


    //poppins insert
    const [loaded] = useFonts({
      poppinsregular: require('./../../assets/fonts/Poppins-Regular.ttf'),
      poppins700: require('./../../assets/fonts/poppins-700.ttf'),
  });

  useEffect(() => {
    console.log("S_Sent");
    loadSentRequests();

   }, []);

   const loadSentRequests = () => {
    RequestService.getSentRequestsByUserId(AuthService.userId, AuthService.userToken).then((res) => {
      console.log(res.data.data);
      setSentRequests(res.data.data);
    }).catch((error) => {
      console.log("line 45",error);
    })
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
        listKey="23.1"
        showsVerticalScrollIndicator={true}
        ListHeaderComponent={
          <View>
            <View style={styles.requestStatusRowColumn}>
              <View style={styles.requestStatusRow}>
                
                <View style={styles.requestStatus}>
                  <Picker itemStyle={{ backgroundColor: '#000' }}
                    selectedValue={selectedValue}
                    dropdownIconColor={'#DDDDDD'}
                    style={{ color: '#DDDDDD', bottom: 7, left: 5 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
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


                <View style={styles.editBtnRow}>
                  <TouchableOpacity style={styles.editBtn}>
                    <View style={styles.editReqIconFiller}></View>
                    <FeatherIcon name="edit" style={styles.editReqIcon}></FeatherIcon>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.deleteBtn}>
                    <View style={styles.delReqIconFiller}></View>
                    <MaterialCommunityIconsIcon
                      name="delete-sweep"
                      style={styles.delReqIcon}
                    ></MaterialCommunityIconsIcon>
                  </TouchableOpacity>
                </View>

              </View>

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

            </View>


            <View style={styles.scrollArea}>
              <FlatList 
                listKey="23.2"
                data={sentRequests}
                keyExtractor={(item) => `${item._id}`}
                showsVerticalScrollIndicator={true}
                renderItem={({ item, index }) => {
                  return (
                    <View>
{/* onLongPress= edit or delete request. data disply in the NewReqForm.js
onPress = open SSentDetailsAfterAccepting.js */}
                      <TouchableOpacity style={styles.serviceReqSent} 
                                        onPress={()=> navigation.navigate('SSentDetailsAfterAccepting')} 
                                        onLongPress={()=> {}}
                      >
                        <Text style={styles.reqTitle}>{item.title}</Text>
                        <View style={styles.cateIconRow}>
                          {/* <Image
                            source={item.cateIcon}
                            resizeMode="contain"
                            style={styles.cateIcon}
                          ></Image> */}
                          <View style={styles.categoryStack}>
                            <Text style={styles.cateName}>Category: {item.category}</Text>
                          </View>
                        </View>

                        <View style={styles.sentToColumnRow}>
                          <View style={styles.sentToColumn}>
                            <Text style={styles.sentTo}>To: {item.to}</Text>
                            <Text style={styles.reqStatus}>Status: {item.status}</Text>
                          </View>
                          <View style={styles.sentToColumnFiller}></View>
                          <View
                            style={styles.priority}
                          >
                          </View>
                        </View>

                      </TouchableOpacity>
                    </View>
                  )
                }} />
            </View>
            <View style={{ marginTop: 150 }}></View>
          </View>} />
    </View>)
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21,31,40,1)"
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
    flexDirection: "row",
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
    marginTop: 65,
    //83
    marginRight: 1
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
    marginTop: -122
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
    marginTop:3
  },
  searchIcon: {
    color: "#9c8df0",
    fontSize: 29,
    height: 32,
    width: 29,
    marginRight: 10,
    marginTop: 14
  },
  requestStatusRowColumn: {
    marginTop: 38,
    marginLeft: 16,
    marginRight: 15
  },
  scrollArea: {
    borderWidth: 0,
    borderColor: "#000000",
    flex: 1,
    marginBottom: 50,
    marginTop: 100,
    marginBottom:30,
    marginLeft: 15,
    marginRight: 15,
  },
  serviceReqSent: {
    height: 110,
    backgroundColor: "rgba(65,58,100,0.7)",
    borderRadius: 20,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 2
    },
    elevation: 100,
    shadowOpacity: 0.83,
    shadowRadius: 6,
    marginBottom: 10
  },
  reqTitle: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    marginTop: 7,
    marginLeft: 20
  },
  cateIcon: {
    // color: "rgba(220,162,76,1)",
    // fontSize: 14,
    width: 18,
    height: 18,
  },
  cateName: {
    position: "absolute",
    fontFamily: "poppinsregular",
    color: "rgba(220,162,76,1)",
    fontSize: 11
  },
  sentDate: {
    position: "absolute",
    fontFamily: "poppinsregular",
    color: "rgba(145,145,145,1)",
    fontSize: 10,
    right: "-20%",
    textAlign: "right",
  },
  categoryStack: {
    width: 272,
    height: 17,
    // marginLeft: 11,
    marginTop: 1
  },
  cateIconRow: {
    height: 18,
    flexDirection: "row",
    marginTop: 0,
    marginLeft: 20,
    marginRight: 15
  },
  sentTo: {
    fontFamily: "poppinsregular",
    color: "rgba(197,212,196,1)",
    fontSize: 13
  },
  reqStatus: {
    fontFamily: "poppinsregular",
    color: "rgba(191,190,191,1)",
    fontSize: 13
  },
  sentToColumn: {
    width: 261, 
  },
  sentToColumnFiller: {
    flex: 1,
    flexDirection: "row"
  },
  priority: {
    width: 14,
    height: 14,
    borderRadius: 12,
    backgroundColor: "rgba(255,51,51,1)",
    marginTop: 2
  },
  sentToColumnRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 20,
    marginRight: 15
  }
});
export default S_Sent;