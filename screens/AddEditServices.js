import React, { Component, useState, useMemo, useEffect } from "react";
import {
  StyleSheet,
  View,
  // ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  FlatList,
  TextInput,
  Pressable,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialRadio from "../components/MaterialRadio";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { dummyData, icons } from "../constants";
import * as ImagePicker from "expo-image-picker";
import { AssetsSelector } from "expo-image-picker";
import { MediaType } from "expo-media-library";
//import ImagePicker from 'react-native-image-crop-picker'
import RadioButtonAvailability from "../components/RadioButtonAvailability";
import RadioForm from "react-native-simple-radio-button";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";
import Categories from "./Categories";
import { ScrollView } from "react-native-gesture-handler";
import { ServicesService } from "../services/customer/Services";
import { AuthService } from "../services/AuthService";

const screenHeight = Dimensions.get("window").height;

// bottom sheet
const bs = React.createRef();
const fall = new Animated.Value(1);
const renderInner = () => (
  <View style={{ height: "100%", backgroundColor: "#FFFFFF", paddingTop: 0 }}>
    <ScrollView
      style={{
        height: "100%",
      }}
    >
      <Categories />
    </ScrollView>
  </View>
);
const renderHeader = () => {
  return (
    <View
      style={{
        shadowColor: "#333333",
        shadowColor: "#333333",
        shadowOffset: { width: -1, height: -3 },
        shadowOpacity: 1,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: "white",
      }}
    >
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            width: 40,
            height: 8,
            borderRadius: 4,
            marginBottom: 10,
            backgroundColor: "white",
          }}
        ></View>
      </View>
    </View>
  );
};

// function AddEditItems({item, navigation, isSelected}) {
const AddEditServices = ({ navigation }) => {

  const [data, setData] = useState({
    itemname: "",
    itemdescription: "",
    category: "",

    isValidTitle: true,
    check_textInputChangeItemTitle: false,

    isValidDescription: true,
    check_textInputChangeItemDescription: false,
  });

  const [selectedValue, setSelectedValue] = useState("Agriculture");

  //name validation
  const textInputChangeTitle = (val) => {
    if (val.trim().length >= 1) {
      setData({
        ...data,
        itemname: val,
        check_textInputChangeItemTitle: true,
        isValidTitle: true,
      });
    } else {
      setData({
        ...data,
        itemname: val,
        check_textInputChangeItemTitle: false,
        isValidTitle: false,
      });
    }
  };
  const handleValidTitle = (val) => {
    if (val.trim().length >= 1) {
      setData({
        ...data,
        isValidItemName: true,
      });
    } else {
      setData({
        ...data,
        isValidItemName: false,
      });
    }
  };

  const textInputChangeDescription = (val) => {
    if (val.trim().length >= 1) {
      setData({
        ...data,
        itemdescription: val,
        check_textInputChangeItemDescription: true,
        isValidItemDescription: true,
      });
    } else {
      setData({
        ...data,
        itemdescription: val,
        check_textInputChangeItemDescription: false,
        isValidItemDescription: false,
      });
    }
  };

  //poppins insert
  const [loaded] = useFonts({
    poppinsregular: require("../assets/fonts/Poppins-Regular.ttf"),
    poppins700: require("../assets/fonts/poppins-700.ttf"),
  });

  useEffect(() => {
    console.log("AddEditItems", AuthService.userToken);
  }, []);

  const setChangedCategory = (itemValue) => {
    setData({
      ...data,
      category: itemValue,
    });
  }

  const handleSubmitService = () => {
    console.log("submit")
    console.log(data)

    ServicesService.AddService(data, AuthService.userToken).then((res)=>{
      console.log(res.data);
    }).catch((error)=>{
      console.log(error);
    });
  }

  return !loaded ? (
    <View
      style={{
        flex: 4,
        backgroundColor: "rgba(21,31,40,1)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* https://github.com/n4kz/react-native-indicators */}
      <ActivityIndicator size="large" />
    </View>
  ) : (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={true}
        listKey="28.1"
        ListHeaderComponent={
          <BottomSheet
            ref={bs}
            //snapPoints={[430, screenHeight-100,0]}
            snapPoints={[400, screenHeight - 30, 0]}
            // renderContent={()=>renderInner}
            // renderHeader={renderHeader}
            initialSnap={1}
            callbackNode={fall}
            enabledGestureInteraction={true}
            enabledHeaderGestureInteraction={true}
            enabledContentGestureInteraction={false}
          />
        }
      />

      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" style={styles.backIcon}></Icon>
        </TouchableOpacity>
        <Text style={styles.servicesRequest}>ADD A NEW SERVICE</Text>
      </View>

      <LinearGradient
        start={{ x: 0, y: 0.5 }}
        end={{ x: 0, y: 0 }}
        colors={["transparent", "rgba(19,18,18,1)"]}
        style={{ left: 0, right: 0, height: 15 }}
      />

      <FlatList
        listKey="3.1"
        showsVerticalScrollIndicator={true}
        ListHeaderComponent={
          <View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.namelbl}>Title *</Text>
              {data.isValidTitle ? null : (
                <Text style={styles.errMsg}>Please enter the valid title</Text>
              )}
            </View>
            <TextInput
              placeholder=""
              clearButtonMode="while-editing"
              autoCapitalize="sentences"
              returnKeyType="next"
              maxLength={40}
              style={styles.nametxt}
              onChangeText={(val) => textInputChangeTitle(val)}
              onEndEditing={(e) => handleValidTitle(e.nativeEvent.text)}
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
              onChangeText={(val) => textInputChangeDescription(val)}
            ></TextInput>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.tradingMethodlbl}>Category *</Text>
            </View>
            <View style={styles.tradingMethodtxt}>
              <Picker
                itemStyle={{ backgroundColor: "#000" }}
                selectedValue={selectedValue}
                dropdownIconColor={"#DDDDDD"}
                style={{
                  color: "rgba(255,255,255,1)",
                  bottom: 7,
                  fontFamily: "poppinsregular",
                  fontSize: 15,
                }}
                onValueChange={(itemValue, itemIndex) => {
                  setSelectedValue(itemValue)
                  setChangedCategory(itemValue)
                }
                }
              >
                <Picker.Item label="Agriculture" value="Agriculture" />
                <Picker.Item label="Business and finance" value="Business_and_finance" />
                <Picker.Item label="Clothing and fashion" value="Clothing_and_fashion" />
                <Picker.Item label="Computing and mobile" value="Computing_and_mobile" />
                <Picker.Item label="Educational" value="Educational" />
                <Picker.Item label="Electronics and electrics" value="Electronics_and_electrics" />
                <Picker.Item label="Entertainment" value="Entertainment" />
                <Picker.Item label="Environment" value="Environment" />
                <Picker.Item label="Food and drinks" value="Food_and_drinks" />
                <Picker.Item label="Health and medication" value="Health_and_medication" />
                <Picker.Item label="Home and gardening" value="Home_and_gardening" />
                <Picker.Item label="Kids" value="Kids" />
                <Picker.Item label="Law" value="Law" />
                <Picker.Item label="Pets" value="Pets" />
                <Picker.Item label="Photography" value="Photography" />
                <Picker.Item label="Sports and fitness" value="Sports_and_fitness" />
                <Picker.Item label="Traveling and vehicles" value="Traveling_and_vehicles" />
              </Picker>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSubmitService}>
              <Text style={styles.submit}>SUBMIT</Text>
            </TouchableOpacity>

            <View style={{ height: 80 }}></View>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21,31,40,1)",
  },
  header: {
    height: 50,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  backIcon: {
    color: "#BBBDC1",
    fontSize: 20,
    marginRight: 2,
  },
  backBtn: {
    width: 40,
    height: 40,
    marginTop: 0,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#BBBDC1",
    borderRadius: 12,
  },
  servicesRequest: {
    fontFamily: "poppins700",
    textAlign: "center",
    marginLeft: 60,
    marginTop: 7,
    color: "#9c8df0",
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
    alignItems: "center",
    justifyContent: "center",
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
    alignItems: "center",
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
    position: "absolute",
  },
  closeIcon: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    height: 33,
    width: 30,
    marginLeft: 108,
  },
  image2: {
    top: 0,
    left: 142,
    width: 122,
    height: 122,
    position: "absolute",
  },
  closeIcon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    height: 33,
    width: 30,
    marginLeft: 91,
  },
  namelbl: {
    fontFamily: "poppinsregular",
    color: "rgba(170,170,170,1)",
    marginTop: 20,
    marginHorizontal: 25,
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
    paddingHorizontal: 10,
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
    paddingHorizontal: 10,
    textAlignVertical: "top",
    paddingVertical: 6,
  },
  categorylbl: {
    fontFamily: "poppinsregular",
    color: "rgba(170,170,170,1)",
    marginTop: 20,
    marginHorizontal: 25,
  },
  categorytxt: {
    color: "rgba(255,255,255,1)",
    height: 42,
    paddingHorizontal: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "rgba(255,0,246,1)",
    fontSize: 15,
    marginHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  cateRoundRow: {
    height: 30,
    flexDirection: "row",
    flex: 1,
    marginLeft: 5,
    marginTop: 3,
  },
  cateRoundRow: {
    height: 30,
    flexDirection: "row",
    flex: 1,
    marginLeft: 5,
    marginTop: 3,
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
    marginLeft: 2,
  },
  cateName2: {
    marginTop: 3,
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
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
    paddingHorizontal: 10,
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
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
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
    paddingHorizontal: 10,
  },
  button: {
    height: 47,
    backgroundColor: "rgba(123,0,255,1)",
    borderRadius: 8,
    marginTop: 82,
    marginLeft: 33,
    marginRight: 33,
  },
  submit: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    marginTop: 10,
    marginLeft: 8,
    marginRight: 7,
    letterSpacing: 0.5,
    fontSize: 18,
  },
  errMsg: {
    color: "red",
    fontFamily: "poppinsregular",
    fontSize: 10,
    marginTop: 25,
    marginRight: 28,
  },
});

export default AddEditServices;
