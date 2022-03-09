import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  FlatList, 
  TextInput,
  Picker
} from "react-native";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialRadio from "../components/MaterialRadio";
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import {dummyData, icons} from '../constants'

function AddEditItems({item, navigation, isSelected}) {
      //poppins insert
  const [loaded] = useFonts({
    poppinsregular: require('../assets/fonts/Poppins-Regular.ttf'),
    poppins700: require('../assets/fonts/poppins-700.ttf'),
  });

  const [availability, setAvailability] = React.useState(null);
  const [selectedValue, setSelectedValue] = useState("All");

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>

            {/* header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" style={styles.backIcon}></Icon>
        </TouchableOpacity>
        <Text style={styles.servicesRequest}>ADD A NEW ITEM</Text>
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
         {/* add images area */}
      <View style={styles.itemImagesScrollArea}>

 {/* open camera or gallery to add images */}
          <View style={styles.cameraFrameStack}>
            <TouchableOpacity style={styles.cameraFrame}>
              <MaterialIconsIcon
                name="add-a-photo"
                style={styles.cameraIcon}
              ></MaterialIconsIcon>
            </TouchableOpacity>
            

            {/* Image 1 */}
             {/* <ImageBackground
              source={require("../assets/images/hawaiian-pizza.jpg")}
              resizeMode="cover"
              style={styles.image}
            >
              <EntypoIcon
                name="circle-with-cross"
                style={styles.closeIcon}
              ></EntypoIcon>
            </ImageBackground> */}
            {/* Image 2 */}
            {/* <ImageBackground
              source={require("../assets/images/pizza.jpg")}
              resizeMode="cover"
              style={styles.image2}
            >
              <EntypoIcon
                name="circle-with-cross"
                style={styles.closeIcon2}
              ></EntypoIcon>
            </ImageBackground>  */}

          </View>
      </View>

      <Text style={styles.namelbl}>Item Name *</Text>
      <TextInput
        placeholder=""
        clearButtonMode="while-editing"
        autoCapitalize="sentences"
        returnKeyType="next"
        maxLength={40}
        style={styles.nametxt}
      ></TextInput>

      <Text style={styles.descriptionlbl}>Description</Text>
      <TextInput
        placeholder=""
        clearButtonMode="while-editing"
        numberOfLines={4}
        multiline={true}
        autoCapitalize="sentences"
        returnKeyType="next"
        style={styles.descriptiontxt}
      ></TextInput>
      
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

      <Text style={styles.totalAmountlbl}>Total Amount Available *</Text>
      <TextInput
        placeholder=""
        clearButtonMode="while-editing"
        returnKeyType="next"
        keyboardType="numbers-and-punctuation"
        style={styles.totalAmounttxt}
      ></TextInput>

      <Text style={styles.statuslbl}>Status *</Text>
      <View style={styles.availablityRow}>
      {/* radio buttons */}
        <MaterialRadio ></MaterialRadio>  
        {/* <Image source={isSelected ? icons.check_on : icons.check_off}
                 style={styles.availableRadioBtn}
          /> */}
        <Text style={styles.availablelbl}>Available</Text>

        <MaterialRadio ></MaterialRadio>
        {/* <Image source={isSelected ? icons.check_on : icons.check_off}
                 style={styles.availableRadioBtn}
          /> */}
        <Text style={styles.notAvailablelbl}>Not Available</Text>
      </View> 

      <Text style={styles.tradingMethodlbl}>Trading Method *</Text>
      <View style={styles.tradingMethodtxt}
      >
        <Picker itemStyle={{ backgroundColor: '#000', }}
            selectedValue={selectedValue}
            dropdownIconColor={'#DDDDDD'}
            style={{color: "rgba(255,255,255,1)", bottom: 7,fontFamily: "poppinsregular",  fontSize: 15, }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            {/* https://reactnative.dev/docs/picker */}
            <Picker.Item label="Cash" value="Cash" />
            <Picker.Item label="Barter" value="Barter" />
            <Picker.Item label="Free" value="Free" />
            <Picker.Item label="Rent" value="Rent" />
            <Picker.Item label="Borrow" value="Borrow" />
          </Picker>
        </View>

      <Text style={styles.pricelbl}>Price/Exchanged For *</Text>
      <TextInput
        placeholder=""
        clearButtonMode="while-editing"
        returnKeyType="done"
        selectionColor="rgba(255,255,255,1)"
        keyboardType="numbers-and-punctuation"
        style={styles.pricetxt}
      ></TextInput>  


      <TouchableOpacity style={styles.button} onPress={()=>{}}>
              <Text style={styles.submit}>SUBMIT</Text>
      </TouchableOpacity>

      <View style={{height:80}}></View>
      </View>

    }/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21,31,40,1)"
  },
  header: {
    height: 50,
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  backIcon: {
    color: '#BBBDC1',
    fontSize: 20,
    marginRight: 2,
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
  servicesRequest: {
    fontFamily: 'poppins700',
    textAlign: 'center',
    marginLeft: 60,
    marginTop: 7,
    color: '#9c8df0',
    fontSize: 17,
    letterSpacing: 0,
  },
  itemImagesScrollArea: {
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 20,
    marginHorizontal: 15, 
  },
  cameraFrameStack: {
    height: 122, 
    alignItems:'center', 
    justifyContent:'center',
  },
  cameraFrame: {
    top: 0,
    width: 122,
    height: 122,
    position: "absolute",
    borderWidth: 2,
    borderColor: "rgba(246,102,242,1)",
    borderRadius: 33,
    borderStyle: "dashed", 
    alignItems:'center',
  },
  cameraIcon: {
    color: "rgba(255,0,246,1)",
    fontSize: 40,
    height: 40,
    width: 40,
    marginTop: 38, 
  },
  image: {
    top: 0,
    left: 0,
    width: 140,
    height: 122,
    position: "absolute"
  },
  closeIcon: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    height: 33,
    width: 30,
    marginLeft: 108
  },
  image2: {
    top: 0,
    left: 142,
    width: 122,
    height: 122,
    position: "absolute"
  },
  closeIcon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    height: 33,
    width: 30,
    marginLeft: 91
  },
  namelbl: {
    fontFamily: "poppinsregular",
    color: "rgba(170,170,170,1)",
    marginTop: 20,
    marginHorizontal: 25
  },
  nametxt: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    height: 42,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "rgba(255,0,246,1)",
    fontSize: 15,
    marginHorizontal: 15, 
    paddingHorizontal:10
  },  
  descriptionlbl: {
    fontFamily: "poppinsregular",
    color: "rgba(170,170,170,1)",
    marginTop: 20,
    marginHorizontal: 25, 
  },
  descriptiontxt: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    height: 142,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "rgba(255,0,246,1)",
    fontSize: 15,
    marginHorizontal: 15, 
    paddingHorizontal:10,
    textAlignVertical: "top",
    paddingVertical:6
  },
  categorylbl: {
    fontFamily: "poppinsregular",
    color: "rgba(170,170,170,1)",
    marginTop: 20,
    marginHorizontal: 25, 
  },
  categorytxt: {
    color: 'rgba(255,255,255,1)',
    height: 42,
    paddingHorizontal:10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'rgba(255,0,246,1)',
    fontSize: 15,
    marginHorizontal: 15,
    flexDirection:'row', 
    alignItems:'center', 
  },
  cateRoundRow: {
    height: 30,
    flexDirection: "row",
    flex: 1,
    marginLeft: 5,
    marginTop: 3
  }, 
  cateRoundRow: {
    height: 30,
    flexDirection: "row",
    flex: 1,
    marginLeft: 5,
    marginTop: 3
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
  totalAmountlbl: {
    fontFamily: "poppinsregular",
    color: "rgba(170,170,170,1)",
    marginTop: 20,
    marginHorizontal: 25, 
  },
  totalAmounttxt: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    height: 42,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "rgba(255,0,246,1)",
    fontSize: 15,
    marginHorizontal: 15, 
    paddingHorizontal:10
  },
  statuslbl: {
    fontFamily: "poppinsregular",
    color: "rgba(170,170,170,1)",
    marginTop: 20,
    marginHorizontal: 25, 
  },
  availablityRow: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    height: 42,
    fontSize: 15,
    marginHorizontal: 15, 
    paddingHorizontal:10, 
    flexDirection: "row",
    alignItems:'center', 
  },
  availablelbl: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    height: 20,
    width: 120,
  },
  notAvailablelbl: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    height: 20,
  },
  tradingMethodlbl: {
    fontFamily: "poppinsregular",
    color: "rgba(170,170,170,1)",
    marginTop: 20,
    marginHorizontal: 25, 
  },
  tradingMethodtxt: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    height: 42,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "rgba(255,0,246,1)",
    fontSize: 15,
    marginHorizontal: 15, 
  },
  pricelbl: {
    fontFamily: "poppinsregular",
    color: "rgba(170,170,170,1)",
    marginTop: 20,
    marginHorizontal: 25, 
  },
  pricetxt: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    height: 42,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "rgba(255,0,246,1)",
    fontSize: 15,
    marginHorizontal: 15, 
    paddingHorizontal:10
  },
  button: {
    height: 47,
    backgroundColor: "rgba(123,0,255,1)",
    borderRadius: 8,
    marginTop: 82,
    marginLeft: 33,
    marginRight: 33
  },
  submit: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    marginTop: 10,
    marginLeft: 8,
    marginRight: 7,    
    letterSpacing:0.5, 
    fontSize:18,
  },  
});

export default AddEditItems;
