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
import { LinearGradient } from 'expo-linear-gradient';

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

          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => navigation.goBack()}>
              <Icon name="arrow-left" style={styles.backIcon}></Icon>
            </TouchableOpacity>
            <Text style={styles.newRequest}>NEW REQUEST</Text>
          </View>

          <LinearGradient  start = {{ x:0 , y:0.5 }} end = {{ x:0 , y:0 }}
                      colors={['transparent', 'rgba(19,18,18,1)']}
                        style= {{ left:0, right:0, height:15, }}
      />

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
          <View style={styles.categorytxt} onPress={()=>{}}>
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
            <Text style={styles.medium}>Medium</Text>

            <MaterialRadio style={styles.lowRadioBtn}></MaterialRadio>
            <View style={styles.greenDot}></View>
            <Text style={styles.low}>Low</Text>

          </View>

{/* Automatically fill the textinput from the user's location that have provided during the registration */}
          <Text style={styles.locationlbl}>Location *</Text>
          <TextInput
            placeholder=""
            clearButtonMode="while-editing"
            returnKeyType="done"
            style={styles.locationtxt}></TextInput>

          <Text style={styles.attachmentslbl}>Attachments</Text>
          <View style={styles.attachmentstxt}>
            <MaterialChipWithImageAndCloseButton
              style={
                styles.materialChipWithImageAndCloseButton
              }></MaterialChipWithImageAndCloseButton>            
          </View>

          <TouchableOpacity style={styles.button} onPress={()=>{}}>
              <Text style={styles.submit}>SUBMIT</Text>
          </TouchableOpacity>
          
<View style={{marginTop:80}}></View>
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
    marginTop: 3,
    fontFamily: 'poppinsregular',
    color: 'rgba(255,255,255,1)',
    fontSize: 15,
    marginLeft: 12,
  },
  cateRoundRow: {
    height: 30,
    flexDirection: "row",
    flex: 1,
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
  marginTop: 0,
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
  fontFamily:'poppins700',
  color: '#9c8df0',
  textAlign: 'center',
  flex: 1,
  marginRight: 35,
  marginTop: 7,
  fontSize: 17,
  letterSpacing: 0,
},
header: {
  flexDirection: 'row',
  marginTop: 20,
  marginBottom:10,
  marginLeft: 15,
  marginRight: 15,
},
backIcon: {
  color: '#BBBDC1',
  fontSize: 20,
  marginRight:2
},
backBtn: {
  width: 40,
  height: 40,
  marginLeft: 10,
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
  textAlignVertical: "top",
  paddingVertical:6
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
  height: 47,
  backgroundColor: "rgba(123,0,255,1)",
  borderRadius: 8,
  marginTop: 60,
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
highRadioBtn: {
  height: 34,
  width: 34,
},
redDot: {
  width: 12,
  height:12,
  backgroundColor: 'rgba(255,51,51,1)',
  borderRadius: 6,
  marginLeft: 10,
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
  marginLeft: 10,
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
  marginLeft:20,
},
greenDot: {
  width: 12,
  height: 12,
  backgroundColor: 'rgba(68,255,51,1)',
  borderRadius: 6,
  marginLeft: 10,
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
