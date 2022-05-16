import React, { Component, useEffect } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
  FlatList,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useFonts } from 'expo-font';
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { LinearGradient } from 'expo-linear-gradient';

const SAfterCompleted = ({ navigation }) => {   
  //poppins insert
  const [loaded] = useFonts({
    poppinsregular: require('./../../assets/fonts/Poppins-Regular.ttf'),
    poppins700: require('./../../assets/fonts/poppins-700.ttf'),
  });

  useEffect(() => {
    // console.log("SSentDetailsAfterAccepting");
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

      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" style={styles.backIcon}></Icon>
        </TouchableOpacity>
        <Text style={styles.servicesRequest}>REQUEST DETAILS</Text>
      </View>

      <LinearGradient
        start={{ x: 0, y: 0.5 }}
        end={{ x: 0, y: 0 }}
        colors={['transparent', 'rgba(19,18,18,1)']}
        style={{ left: 0, right: 0, height: 15 }}
      />

            <FlatList
        showsVerticalScrollIndicator={true}
        ListHeaderComponent={
          <View>
            <Text style={styles.reqTitle}>Preparing Birthday Cake.</Text>

            <ImageBackground
              style={styles.contactInfoBox}
              imageStyle={styles.contactInfoBox_imageStyle}
              source={require('./../../assets/images/Gradient_j4NfJ5t.png')}>
              <View style={styles.senderImageRow}>
                <Image
                  source={require('./../../assets/images/avatar-1.jpg')}
                  resizeMode="contain"
                  style={styles.senderImage}></Image>
                <View style={styles.senderNameColumn}>
                  <Text style={styles.senderName}>Natasha Perera</Text>
                  <View style={styles.locationIconRow}>
                    <EntypoIcon
                      name="location-pin"
                      style={styles.locationIcon}></EntypoIcon>
                    <View style={styles.latitudeStackColumn}>
                      <View style={styles.latitudeStack}>
                        <Text style={styles.longitude}>
                          6.927079 , 79.861244
                        </Text>
                      </View>
                      <TouchableOpacity onPress={() => {}}>
                        <Text style={styles.clickToViewOnMap}>
                          Click to view on the Map
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.callBtnRow}>
                <TouchableOpacity style={styles.callBtn}>
                  <FeatherIcon
                    name="phone"
                    style={styles.callIcon}></FeatherIcon>
                </TouchableOpacity>
                <TouchableOpacity style={styles.msgBtn}>
                  <FeatherIcon
                    name="message-square"
                    style={styles.msgIcon}></FeatherIcon>
                </TouchableOpacity>
              </View>
            </ImageBackground>

            <Text style={styles.description}>
              Just click on a symbol to copy any check mark or any tick to the
              clipboard and then paste them where ever you like. The tick &amp;
              check mark symbols are often used. A small description about the
              request.
            </Text>
            <View style={styles.cateIconRow}>
              <EntypoIcon name="home" style={styles.cateIcon}></EntypoIcon>
              <Text style={styles.cateName}>Food &amp; Drinks</Text>
            </View>

            <View style={styles.priorityRow}>
              <Text style={styles.prioritylbl}>Priority :</Text>
              <View style={styles.priorityDot}></View>
              <Text style={styles.priorityName}>Medium</Text>
            </View>

            <View style={styles.toRow}>
              <Text style={styles.tolbl}>To :</Text>
              <Text style={styles.toWhom}>Public</Text>
            </View>

            <Text style={styles.attachments}>Attachments :</Text>
            <View style={styles.attachmentsBox}></View>

            <View style={styles.postedDatelblRow}>
              <Text style={styles.postedDatelbl}>Posted Date :</Text>
              <Text style={styles.postedDate}>20/12/2021</Text>
            </View>

            <View style={styles.acceptedDatelblRow}>
              <Text style={styles.acceptedDatelbl}>Accepted Date :</Text>
              <Text style={styles.acceptedDate}>20/12/2021</Text>
            </View>

            <View style={styles.completedDatelblRow}>
              <Text style={styles.completedDatelbl}>Completed Date :</Text>
              <Text style={styles.completedDate}>20/12/2021</Text>
            </View>

          <View style={{marginTop:60}}></View>
          </View>
        }
      />
    </View>)
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(21,31,40,1)',
  },
  contactInfoBox: {
    height: 167,
    borderRadius: 15,
    shadowColor: 'gray',
    shadowOffset: {
      height: 3,
      width: 1,
    },
    elevation: 21,
    shadowOpacity: 0.45,
    shadowRadius: 7,
    borderWidth: 1,
    borderColor: '#000000',
    marginTop: 16,
    marginHorizontal: 30,
    overflow: 'hidden',
  },
  contactInfoBox_imageStyle: {},
  senderImage: {
    width: 80,
    height: 80,
    borderRadius: 20,
  },
  senderName: {
    fontFamily: 'poppinsregular',
    color: 'rgba(232,232,232,1)',
    fontSize: 15,
    marginLeft: 7,
  },
  locationIcon: {
    color: 'rgba(253,47,47,1)',
    fontSize: 35,
    height: 38,
    width: 35,
  },
  longitude: {
    top: 0,
    left: 0,
    position: 'absolute',
    fontFamily: 'poppinsregular',
    color: 'rgba(212,206,206,1)',
    fontSize: 13,
  },
  latitudeStack: {
    width: 173,
    height: 20,
  },
  clickToViewOnMap: {
    fontFamily: 'poppinsregular',
    color: 'rgba(239,173,255,1)',
    fontSize: 12,
    textDecorationLine: 'underline',
  },
  latitudeStackColumn: {
    width: 173,
    marginLeft: 3,
  },
  locationIconRow: {
    height: 38,
    flexDirection: 'row',
    marginTop: 5,
    marginRight: 14,
  },
  senderNameColumn: {
    width: 227,
    marginLeft: 10,
    marginTop: 12,
    marginBottom: 2,
  },
  senderImageRow: {
    height: 80,
    flexDirection: 'row',
    marginTop: 13,
    marginRight: 3,
  },
  callBtn: {
    width: 43,
    height: 43,
    backgroundColor: 'rgba(60,40,95,1)',
    borderRadius: 9,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 4,
    },
    elevation: 12,
    shadowOpacity: 0.17,
    shadowRadius: 4,
  },
  callIcon: {
    color: 'rgba(235,112,210,1)',
    fontSize: 25,
    height: 25,
    width: 25,
    marginTop: 9,
    marginLeft: 9,
  },
  msgBtn: {
    width: 43,
    height: 43,
    backgroundColor: 'rgba(60,40,95,1)',
    borderRadius: 9,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 4,
    },
    elevation: 12,
    shadowOpacity: 0.17,
    shadowRadius: 4,
    marginLeft: 33,
  },
  msgIcon: {
    color: 'rgba(235,112,210,1)',
    fontSize: 25,
    height: 25,
    width: 25,
    marginTop: 9,
    marginLeft: 9,
  },
  callBtnRow: {
    height: 43,
    flexDirection: 'row',
    marginTop: 12,
    marginLeft: 97,
    marginRight: 104,
  },
  acceptedDatelbl: {
    fontFamily: 'poppinsregular',
    color: 'rgba(214,214,214,1)',
    width:137, 
  },
  acceptedDate: {
    fontFamily: 'poppinsregular',
    color: 'rgba(214,214,214,1)',
    marginLeft: 7,
  },
  acceptedDatelblRow: {
    height: 21,
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
  },
  backBtn: {
    // width: 40,
    // height: 40,
    // marginTop: 19,
    // marginLeft: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
    // borderWidth: 1,
    // borderColor: '#BBBDC1',
    // borderRadius: 12,

    width: 40,
    height: 40,
    marginTop: 0,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#BBBDC1',
    borderRadius: 12,
  },
  backIcon: {
    color: '#BBBDC1',
    fontSize: 20,
    marginRight: 2,
  },
  servicesRequest: {
    fontFamily: 'poppins700',
    textAlign: 'center',
    marginLeft: 60,
    marginTop: 7,
    color: '#9c8df0',
    fontSize: 17,
    letterSpacing: 0,
  },
  header: {
    height: 50,
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  reqTitle: {
    fontFamily: 'poppinsregular',
    color: 'rgba(216,148,255,1)',
    fontSize: 20,
    marginTop: 20,
    marginLeft: 30,
  },
  description: {
    fontFamily: 'poppinsregular',
    color: 'rgba(205,204,204,1)',
    textAlign: 'justify',
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20,
  },
  cateIcon: {
    color: 'rgba(220,162,76,1)',
    fontSize: 17,
  },
  cateName: {
    fontFamily: 'poppinsregular',
    color: 'rgba(220,162,76,1)',
    fontSize: 13,
    marginLeft: 21,
  },
  cateIconRow: {
    height: 20,
    flexDirection: 'row',
    marginTop: 26,
    marginLeft: 37,
    marginRight: 85,
  },
  prioritylbl: {
    fontFamily: 'poppinsregular',
    color: 'rgba(214,214,214,1)',
    marginTop: 1,
  },
  priorityDot: {
    width: 14,
    height: 14,
    backgroundColor: 'rgba(222,255,0,1)',
    borderRadius: 7,
    marginLeft: 32,
    marginTop: 4,
  },
  priorityName: {
    fontFamily: 'poppinsregular',
    color: 'rgba(210,205,205,1)',
    marginLeft: 13,
  },
  priorityRow: {
    height: 22,
    flexDirection: 'row',
    marginTop: 19,
    marginLeft: 32,
    marginRight: 26,
  },
  tolbl: {
    fontFamily: 'poppinsregular',
    color: 'rgba(214,214,214,1)',
    width: 62, 
  },
  toWhom: {
    fontFamily: 'poppinsregular',
    color: 'rgba(210,205,205,1)',
    marginLeft: 32,
  },
  toRow: {
    height: 21,
    flexDirection: 'row',
    marginTop: 18,
    marginLeft: 32,
    marginRight: 49,
  },
  attachments: {
    fontFamily: 'poppinsregular',
    color: 'rgba(214,214,214,1)',
    marginTop: 33,
    marginLeft: 32,
  },
  attachmentsBox: {
    height: 91,
    borderWidth: 2,
    borderColor: 'rgba(194,163,254,1)',
    marginTop: 13,
    marginLeft: 37,
    marginRight: 37,
  },
  postedDatelbl: {
    fontFamily: 'poppinsregular',
    color: 'rgba(214,214,214,1)',width:143, 
  },
  postedDate: {
    fontFamily: 'poppinsregular',
    color: 'rgba(214,214,214,1)',
  },
  postedDatelblRow: {
    height: 21,
    flexDirection: 'row',
    marginTop: 34,
    marginLeft: 35,
    marginRight: 35,
  },
  completedDatelbl: {
    fontFamily: 'poppinsregular',
    color: 'rgba(214,214,214,1)',width:145, 
  },
  completedDate: {
    fontFamily: 'poppinsregular',
    color: 'rgba(214,214,214,1)', 
  },
  completedDatelblRow: {
    height: 21,
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
  },
});

export default SAfterCompleted;
