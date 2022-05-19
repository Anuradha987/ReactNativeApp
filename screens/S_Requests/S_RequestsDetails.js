import React, { Component, useEffect } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';

const S_RequestsDetails = ({ navigation }) => { 
  //poppins insert
  const [loaded] = useFonts({
    poppinsregular: require('./../../assets/fonts/Poppins-Regular.ttf'),
    poppins700: require('./../../assets/fonts/poppins-700.ttf'),
  });

  useEffect(() => {
    // loadRequests();
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
        listKey="21.1"
        showsVerticalScrollIndicator={true}
        ListHeaderComponent={
          <View>
            <Text style={styles.reqTitle}>Preparing Birthday Cake.</Text>

            <ImageBackground
              style={styles.contactInfoBox}
              imageStyle={styles.contactInfoBox_imageStyle}
              source={require('./../../assets/images/Gradient_j4NfJ5t.png')}>
              <View style={styles.senderImageRow}>
                {/* req sender's profile pic  */}
                <Image
                  source={require('./../../assets/images/avatar-1.jpg')}
                  resizeMode="contain"
                  style={styles.senderImage}></Image>
                <View style={styles.senderNameColumn}>
                  {/* req sender name */}
                  <Text style={styles.senderName}>Natasha Perera</Text>

                  {/* req sender location */}
                  <View style={styles.locationIconRow}>
                    <EntypoIcon
                      name="location-pin"
                      style={styles.locationIcon}></EntypoIcon>

                    <View style={styles.longitudeStackColumn}>
                      <View style={styles.longitudeStack}>
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

            {/* category and its icon */}
            <View style={styles.cateIconRow}>
              <EntypoIcon name="home" style={styles.cateIcon}></EntypoIcon>
              <Text style={styles.cateName}>Food &amp; Drinks</Text>
            </View>

            <View style={styles.priorityRow}>
              <Text style={styles.priority}>Priority :</Text>
              <View style={styles.priorityDot}></View>
              <Text style={styles.priorityName}>Medium</Text>
            </View>
            <View style={styles.toRow}>
              <Text style={styles.to}>To :</Text>
              <Text style={styles.toWhom}>Public</Text>
            </View>
            <Text style={styles.attachments}>Attachments :</Text>
            <View style={styles.attachmentsBox}></View>
            <View style={styles.postedDatelblRow}>
              <Text style={styles.postedDatelbl}>Posted Date :</Text>
              <Text style={styles.postedDate}>20/12/2021</Text>
            </View>

            <View style={styles.endWrapperFillerRow}>
              <View style={styles.endWrapperFiller}></View>
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
            </View>
            <View style={{ marginTop: 50 }}></View>
          </View>
        }
      />
    </View>)
  );
};

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
    borderWidth: 0,
    borderColor: '#000000',
    marginTop: 20,
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
  latitude: {
    top: 0,
    left: 80,
    position: 'absolute',
    fontFamily: 'poppinsregular',
    color: 'rgba(212,206,206,1)',
    fontSize: 13,
  },
  longitudeStack: {
    width: 180,
    height: 20,
  },
  clickToViewOnMap: {
    fontFamily: 'poppinsregular',
    color: 'rgba(239,173,255,1)',
    fontSize: 12,
    textDecorationLine: 'underline',
  },
  longitudeStackColumn: {
    width: 180,
    marginLeft: 3,
  },
  locationIconRow: {
    height: 38,
    flexDirection: 'row',
    marginTop: 5,
    marginRight: 20,
  },
  senderNameColumn: {
    width: 238,
    marginLeft: 10,
    marginTop: 12,
    marginBottom: 2,
  },
  senderImageRow: {
    height: 80,
    flexDirection: 'row',
    marginTop: 13,
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
    marginRight: 112,
  },
  backBtn: {
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
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
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
    marginTop: 33,
    marginLeft: 37,
    marginRight: 98,
  },
  priority: {
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
    marginRight: 46,
  },
  to: {
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
    marginTop: 16,
    marginLeft: 32,
    marginRight: 36,
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
    marginRight: 38,
  },
  postedDatelbl: {
    fontFamily: 'poppinsregular',
    color: 'rgba(214,214,214,1)',
  },
  postedDate: {
    fontFamily: 'poppinsregular',
    color: 'rgba(214,214,214,1)',
    marginLeft: 12,
  },
  postedDatelblRow: {
    height: 21,
    flexDirection: 'row',
    marginTop: 34,
    marginLeft: 35,
    marginRight: 35,
  },
  endWrapperFiller: {
    flex: 1,
    flexDirection: 'row',
  },
  reqDeleteBtn: {
    width: 83,
    height: 40,
    borderWidth: 2,
    borderColor: 'rgba(242,69,69,1)',
    borderRadius: 10,
    shadowColor: 'rgba(242,69,69,1)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 30,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    flexDirection: 'row',
    marginRight: 23,
    marginTop: 1,
  },
  decline: {
    fontFamily: 'poppinsregular',
    color: 'rgba(242,69,69,1)',
    fontSize: 12,
    textAlign: 'center',
    width: 83,
    marginTop: 8,
  },
  reqAcceptBtn: {
    width: 83,
    height: 40,
    borderWidth: 2,
    borderColor: 'rgba(8,255,0,1)',
    borderRadius: 10,
    shadowColor: 'rgba(8,255,0,1)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
    flexDirection: 'row',
  },
  accept: {
    fontFamily: 'poppinsregular',
    color: 'rgba(8,255,0,1)',
    fontSize: 12,
    width: 80,
    marginTop: 8,
    marginRight:3,
    textAlign: 'center',
    
  },
  reqDeleteBtnRow: {
    height: 41,
    flexDirection: 'row',
  },
  endWrapperFillerRow: {
    height: 41,
    flexDirection: 'row',
    marginTop: 24,
    marginLeft: 110,
    marginRight: 44,
  },
});

export default S_RequestsDetails;
