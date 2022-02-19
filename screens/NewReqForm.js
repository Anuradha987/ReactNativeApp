import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
  Picker, TouchableWithoutFeedback
} from 'react-native';
import MaterialChipWithImageAndCloseButton from '../components/MaterialChipWithImageAndCloseButton';
import MaterialRadio from '../components/MaterialRadio';
import { useFonts } from 'expo-font';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from "react-native-vector-icons/SimpleLineIcons";

function NewReqForm({ navigation }) {
//poppins insert
const [loaded] = useFonts({
  poppinsregular: require('../assets/fonts/Poppins-Regular.ttf'),
  poppins700: require('../assets/fonts/poppins-700.ttf'),
});

if (!loaded) {
  return null;
}
return (
  <SafeAreaView style={styles.container}>
    <FlatList
      showsVerticalScrollIndicator={true}
      ListHeaderComponent={
        <View>
          <View style={styles.backBtnRow}>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => navigation.goBack()}>
              <Icon name="arrow-left" style={styles.backIcon}></Icon>
            </TouchableOpacity>
            <Text style={styles.newRequest}>New Request</Text>
          </View>

          <View style={styles.rect1}>
            <Text style={styles.pageTitle}>New Service or Trade Request</Text>
            <Text style={styles.paragraph}>
              Need a help? Couldn&#39;t find a solution? Let others know and
              help you!
            </Text>
            <View style={styles.br}></View>
          </View>

          <Text style={styles.tolbl}>To</Text>
          <TextInput
            placeholder=""
            clearButtonMode="while-editing"
            returnKeyType="next"
            style={styles.totxt}></TextInput>

          <Text style={styles.titlelbl}>Title *</Text>
          <TextInput
            placeholder=""
            clearButtonMode="while-editing"
            autoCapitalize="sentences"
            returnKeyType="next"
            maxLength={40}
            style={styles.titletxt}></TextInput>

          <Text style={styles.descriptionlbl}>Description</Text>
          <TextInput
            placeholder=""
            clearButtonMode="while-editing"
           // maxLength={'null'}
            numberOfLines={4}
            multiline={true}
            autoCapitalize="sentences"
            returnKeyType="next"
            style={styles.descriptiontxt}></TextInput>

          <Text style={styles.categorylbl}>Category *</Text>
          <View style={styles.categorytxt}>
                <View style={styles.cateRoundRow}>
                  <View style={styles.cateRound}>
                    <Image
                      source={require('../assets/icons/Entertainment.png')}
                      resizeMode="contain"
                      style={styles.cateIcon2}
                    ></Image>
                  </View>
                  <Text style={styles.cateName2}>Environment</Text>
                </View>
          </View>

          <Text style={styles.priority}>Priority *</Text>
          <View style={styles.priorityRadioBtnRow}>

            <MaterialRadio style={styles.highRadioBtn}></MaterialRadio>
            <View style={styles.redDot}></View>
            <Text style={styles.high}>High</Text>

            <MaterialRadio style={styles.mediumRadioBtn}></MaterialRadio>
            <View style={styles.yellowDot}></View>
            <Text style={styles.medium}>Low</Text>

            <MaterialRadio style={styles.lowRadioBtn}></MaterialRadio>
            <View style={styles.greenDot}></View>
            <Text style={styles.low}>Low</Text>

          </View>

          <Text style={styles.locationlbl}>Location</Text>
          <TextInput
            placeholder=""
            clearButtonMode="while-editing"
            returnKeyType="done"
           // maxLength={'null'}
            style={styles.locationtxt}></TextInput>

          <Text style={styles.attachmentslbl}>Attachments</Text>
          <View style={styles.attachmentstxt}>
            <MaterialChipWithImageAndCloseButton
              style={
                styles.materialChipWithImageAndCloseButton
              }></MaterialChipWithImageAndCloseButton>            
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.submit}>SUBMIT</Text>
          </TouchableOpacity>
          
<View style={{marginTop:50}}></View>
        </View>
      }
    />
  </SafeAreaView>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: 'rgba(21,31,40,1)',
},  
cateRound: {
    width: 30,
    height: 30,
    backgroundColor: "rgba(81,81,81,0.69)",
    borderRadius: 15,
  },
  cateIcon2: {
    width: 25,
    height: 25,
    marginTop: 2,
    marginLeft: 2
  },
  cateName2: {
    // fontFamily: "poppinsregular",
    // color: "#121212",
    // fontSize: 10,
    // marginLeft: 4,
     marginTop: 3,
    // textAlignVertical: 'center'
      fontFamily: 'poppinsregular',
  color: 'rgba(255,255,255,1)',
  fontSize: 15,
  marginLeft: 12,
  },
  cateRoundRow: {
    height: 30,
    flexDirection: "row",
    flex: 1,
   // marginRight: 2,
    marginLeft: 5,
    marginTop: 3
  },
rect1: {
  height: 140,
  shadowColor: 'black',
  shadowOffset: {
    width: 3,
    height: 3,
  },
  elevation: 45,
  shadowOpacity: 1,
  shadowRadius: 15,
  borderWidth: 0,
  borderColor: '#000000',
  marginTop: 30,
},
pageTitle: {
  fontFamily: 'poppins700',
  color: 'rgba(224,224,224,1)',
  fontSize: 17,
  marginTop: 17,
  marginLeft: 30,
},
paragraph: {
  fontFamily: 'poppinsregular',
  color: 'rgba(234,234,234,1)',
  fontSize: 12,
  textAlign: 'justify',
  marginTop: 26,
  marginHorizontal: 30,
},
br: {
  height: 1,
  margin:15,
  backgroundColor: 'rgba(175,172,172,1)',
},
newRequest: {
  fontFamily: 'poppinsregular',
  color: '#9c8df0',
  textAlign: 'center',
  flex: 1,
  marginRight: 35,
  marginTop: 9,
  fontSize: 18,
  letterSpacing: 0.5,
  fontWeight: 'bold',
},
backBtnRow: {
  flexDirection: 'row',
  marginTop: 30,
  marginLeft: 15,
  marginRight: 15,
},
backIcon: {
  color: '#BBBDC1',
  fontSize: 20,
},
backBtn: {
  width: 40,
  height: 40,
  marginLeft: 20,
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 1,
  borderColor: '#BBBDC1',
  borderRadius: 12,
},
tolbl: {
  fontFamily: 'poppinsregular',
  color: 'rgba(170,170,170,1)',
  marginTop: 12,
  marginHorizontal: 35,
},
totxt: {
  fontFamily: 'poppinsregular',
  color: 'rgba(255,255,255,1)',
  height: 42,
  borderRadius: 15,
  borderWidth: 2,
  borderColor: 'rgba(255,0,246,1)',
  paddingHorizontal:10,
  fontSize: 15,
  marginHorizontal: 28,
},
titlelbl: {
  fontFamily: 'poppinsregular',
  color: 'rgba(170,170,170,1)',
  marginTop: 24,
  marginHorizontal: 35,
},
titletxt: {
  fontFamily: 'poppinsregular',
  color: 'rgba(255,255,255,1)',
  height: 42,
  paddingHorizontal:10,
  borderRadius: 15,
  borderWidth: 2,
  borderColor: 'rgba(255,0,246,1)',
  fontSize: 15,
  marginHorizontal: 28,
},
descriptionlbl: {
  fontFamily: 'poppinsregular',
  color: 'rgba(170,170,170,1)',
  marginTop: 24,
  marginHorizontal: 35,
},
descriptiontxt: {
  fontFamily: 'poppinsregular',
  color: 'rgba(255,255,255,1)',
  height: 142,
  paddingHorizontal:10,
  borderRadius: 15,
  borderWidth: 2,
  borderColor: 'rgba(255,0,246,1)',
  fontSize: 15,
  marginHorizontal: 28,
},
categorylbl: {
  fontFamily: 'poppinsregular',
  color: 'rgba(170,170,170,1)',
  marginTop: 24,
  marginHorizontal: 35,
},
categorytxt: {
 // fontFamily: 'poppinsregular',
  color: 'rgba(255,255,255,1)',
  height: 42,
  paddingHorizontal:10,
  borderRadius: 15,
  borderWidth: 2,
  borderColor: 'rgba(255,0,246,1)',
  fontSize: 15,
  marginHorizontal: 28,
  flexDirection:'row', 
  alignItems:'center', 
},
priority: {
  fontFamily: 'poppinsregular',
  color: 'rgba(170,170,170,1)',
  marginTop: 24,
  marginLeft: 37,
},
locationlbl: {
  fontFamily: 'poppinsregular',
  color: 'rgba(170,170,170,1)',
  marginTop: 24,
  marginHorizontal: 35,
},
locationtxt: {
  fontFamily: 'poppinsregular',
  color: 'rgba(255,255,255,1)',
  height: 42,
    paddingHorizontal:10,
  borderRadius: 15,
  borderWidth: 2,
  borderColor: 'rgba(255,0,246,1)',
  fontSize: 15,
  marginHorizontal: 28,
},
attachmentslbl: {
  fontFamily: 'poppinsregular',
  color: 'rgba(170,170,170,1)',
  marginTop: 24,
  marginHorizontal: 35,
},
materialChipWithImageAndCloseButton: {
  width: 150,
  height: 32,
  position: 'absolute',
  left: 8,
  top: 5,
  elevation:90
},
attachmentstxt: {
//paddingHorizontal:10,
  fontFamily: 'poppinsregular',
  color: 'rgba(255,255,255,1)',
  height: 42,
  borderRadius: 15,
  borderWidth: 2,
  borderColor: 'rgba(255,0,246,1)',
  fontSize: 15,
  marginHorizontal: 28,
},
button: {
  height: 46,
  backgroundColor: 'rgba(123,0,255,1)',
  borderRadius: 25,
  shadowColor: 'rgba(123,0,255,1)',
  shadowOffset: {
    height: 0,
    width: 0,
  },
  elevation: 30,
  shadowOpacity: 0.5,
  shadowRadius: 10,
  marginTop: 39,
  marginLeft: 96,
  marginRight: 96,
},
submit: {
  fontFamily: 'poppins700',
  color: 'rgba(255,255,255,1)',
  fontSize: 18,
  textAlign: 'center',
  marginTop: 10,
  marginHorizontal: 15,
},
highRadioBtn: {
  height: 34,
  width: 34,
},
redDot: {
  width: 12,
  height:12,
  backgroundColor: 'rgba(255,51,51,1)',
  borderRadius: 6,
  marginLeft: 1,
  marginTop: 12,

},
high: {
  fontFamily: 'poppinsregular',
  color: 'rgba(255,255,255,1)',
  fontSize: 12,
  height: 19,
  width: 49,
  marginLeft: 4,
  marginTop: 8,
},
mediumRadioBtn: {
  height: 34,
  width: 34, 
  marginLeft:10
},
yellowDot: {
  width: 12,
  height: 12,
  backgroundColor: 'rgba(255,238,51,1)',
  borderRadius: 6,
  marginLeft: 1,
  marginTop:12,
},
medium: {
  fontFamily: 'poppinsregular',
  color: 'rgba(255,255,255,1)',
  fontSize: 12,
  height: 19,
  width: 56,
  marginLeft: 5,
  marginTop: 8,
},
lowRadioBtn: {
  height: 34,
  width: 34,
},
greenDot: {
  width: 12,
  height: 12,
  backgroundColor: 'rgba(68,255,51,1)',
  borderRadius: 6,
  marginLeft: 1,
  marginTop:12,
},
low: {
  fontFamily: 'poppinsregular',
  color: 'rgba(255,255,255,1)',
  fontSize: 12,
  height: 19,
  width: 49,
  marginLeft: 4,
  marginTop: 8,
},
priorityRadioBtnRow: {
  height: 34,
  flexDirection: 'row',
  marginLeft: 28,
  marginRight: 4, 
},
});

export default NewReqForm;
