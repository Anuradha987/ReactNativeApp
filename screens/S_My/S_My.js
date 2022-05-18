import React, { Component, useEffect } from 'react';
import {
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
import { LinearGradient } from 'expo-linear-gradient';
import { dummyData } from "../../constants";
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

//only 5 services can add in a once. 

const S_My = () => {
  const navigation = useNavigation();      
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
               <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('AddEditServices')}}>
              <Text style={styles.submit}>Add New Service</Text>
          </TouchableOpacity>
      <FlatList 
                keyExtractor={(item) => `${item.id}`}
                showsVerticalScrollIndicator={true}
                ListHeaderComponent={
                  <View>
                    <Animated.FlatList 
                      data={dummyData.myServicesList}
                      keyExtractor={(item) => `${item.id}`}
                      showsHorizontalScrollIndicator={true}
                      horizontal
                      snapToAlignment='center'
                      pagingEnabled
                      snapToInterval={412}
                      decelerationRate={'fast'}
                      renderItem={({ item, index }) => {
                        return (
                          <LinearGradient
                          colors={['#F1F1B0', '#ECDC80', '#EBD670']}
                          style={styles.myServiceDetails}
                        >
                    <View style={styles.endWrapperFillerRow}>
                      <View style={styles.endWrapperFiller}></View>
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
                    <Text style={styles.serviceTitle}>{item.serviceTitle}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <View style={styles.cateIconRow}>
                      <Image
                          source={item.cateIcon}
                          resizeMode="contain"
                          style={styles.cateIcon}
                        ></Image>
                      <Text style={styles.cateName}>{item.cateName}</Text>
                    </View>
                    </LinearGradient>
                        )}}
                    />
                  </View>
                }/>
  
      {/* add new service details.  */}
      {/* <View style={styles.myServiceDetailsNewStack}>
        <ImageBackground
          style={styles.myServiceDetailsNew}
          imageStyle={styles.myServiceDetailsNew_imageStyle}
          source={require("./../../assets/images/Gradient_U0mLOhY.png")}
        >
          <TextInput
            placeholder="Title"
            maxLength={40}
            autoCapitalize="sentences"
            returnKeyType="next"
            placeholderTextColor="rgba(156,59,203,1)"
            style={styles.serviceTitletxt}
          ></TextInput>
          <TextInput
            placeholder="Description"
            maxLength={40}
            autoCapitalize="sentences"
            returnKeyType="next"
            placeholderTextColor="rgba(156,59,203,1)"
            style={styles.descriptiontxt}
          ></TextInput>
          <TextInput
            placeholder="Category"
            maxLength={40}
            autoCapitalize="sentences"
            returnKeyType="next"
            placeholderTextColor="rgba(156,59,203,1)"
            style={styles.categorytxt}
          ></TextInput>
          {/* 
          <TouchableOpacity style={styles.donebtn}>
            <Text style={styles.done}>DONE</Text>
          </TouchableOpacity>
        </ImageBackground>

        <Text style={styles.loremIpsum}>
          Tell how can you help others with what {"\n"}you know, learnt and
          experts with...
        </Text>
        
      </View> */}
      
    </View>)
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21,31,40,1)"
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
    letterSpacing:0.5, 
    fontSize:18,
  },
  myServiceDetails: {
    width:365,
    marginHorizontal: 10,
    height: 453,
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
    marginLeft: 23,
    marginRight: 24,
    overflow: "hidden"
  },
  myServiceDetails_imageStyle: {},
  endWrapperFiller: {
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
    color: "rgba(235,212,210,1)",
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
  endWrapperFillerRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 24,
    marginLeft: 220,
    marginRight: 16
  },
  pageNo: {
    fontFamily: "poppinsregular",
    color: "rgba(216,148,255,1)",
    fontSize: 62,
    textAlign: "center",
    marginTop: 3,
    marginLeft: 15,
    marginRight: 16
  },
  serviceTitle: {
    fontFamily: "poppinsregular",
    color: "#121212",
    fontSize: 20,
    textAlign: "center",
    marginTop: 12,
    marginLeft: 15,
    marginRight: 16
  },
  description: {
    fontFamily: "poppinsregular",
    color: "rgba(59,57,57,1)",
    textAlign: "justify",
    marginTop: 29,
    marginHorizontal: 20
  },
  cateIcon: {
    tintColor: "rgba(79,77,77,1)",
    fontSize: 20,
    height: 22,
    width: 20
  },
  cateName: {
    fontFamily: "poppinsregular",
    color: "rgba(79,77,77,1)",
    marginLeft: 6,
    marginTop: 1
  },
  cateIconRow: {
    height: 22,
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 20,
    marginRight: 19
  },
  myServiceDetailsNew: {
    top: 0,
    height: 453,
    position: "absolute",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 19,
    left: 0,
    right: 1,
    overflow: "hidden"
  },
  myServiceDetailsNew_imageStyle: {},
  serviceTitletxt: {
    fontFamily: "poppinsregular",
    color: "#121212",
    height: 41,
    fontSize: 13,
    borderRadius: 6,
    shadowColor: "rgba(141,141,141,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 18,
    shadowOpacity: 1,
    shadowRadius: 6,
    backgroundColor: "rgba(230, 230, 230,1)",
    width: 273,
    marginTop: 108,
    marginLeft: 27
  },
  descriptiontxt: {
    fontFamily: "poppinsregular",
    color: "#121212",
    height: 124,
    fontSize: 13,
    borderRadius: 6,
    shadowColor: "rgba(141,141,141,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 18,
    shadowOpacity: 1,
    shadowRadius: 6,
    backgroundColor: "rgba(230, 230, 230,1)",
    width: 273,
    marginTop: 25,
    marginLeft: 28
  },
  categorytxt: {
    fontFamily: "poppinsregular",
    color: "#121212",
    height: 41,
    fontSize: 13,
    borderRadius: 6,
    backgroundColor: "rgba(230, 230, 230,1)",
    shadowColor: "rgba(141,141,141,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 18,
    shadowOpacity: 1,
    shadowRadius: 6,
    width: 273,
    marginTop: 25,
    marginLeft: 30
  },
  donebtn: {
    height: 42,
    backgroundColor: "rgba(123,0,255,1)",
    borderRadius: 25,
    shadowColor: "rgba(123,0,255,1)",
    shadowOffset: {
      width: 0,
      height: 0
    },
    elevation: 30,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    width: 168,
    marginTop: 26,
    marginLeft: 76
  },
  done: {
    fontFamily: "poppins700",
    color: "rgba(255,255,255,1)",
    letterSpacing: 1,
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
    marginLeft: 3
  },
  loremIpsum: {
    top: 39,
    position: "absolute",
    fontFamily: "poppinsregular",
    color: "#121212",
    textAlign: "center",
    left: 1,
    right: 0
  },
  myServiceDetailsNewStack: {
    height: 453,
    marginTop: 527,
    marginLeft: 23,
    marginRight: 23
  }
}); 

export default S_My