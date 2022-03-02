import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { useFonts } from 'expo-font';
//import DatePicker from 'react-native-datepicker';
import DatePicker from '@react-native-community/datetimepicker';

function AddNewCard({navigation}) {
   const [date, setDate] = useState('09-10-2020');
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
      <View style={styles.backBtnRow}>
        <TouchableOpacity style={styles.backBtn}
            onPress={()=>navigation.goBack()}
        >
          <SimpleLineIconsIcon
            name="arrow-left"
            style={styles.backIcon}
          ></SimpleLineIconsIcon>
        </TouchableOpacity>
        <Text style={styles.text}>Add New Card</Text>
      </View>
      <Image
        source={require("./../../assets/images/addNewCard.png")}
        resizeMode="cover"
        style={styles.image1}
      ></Image>
      <Text style={styles.cardNolbl}>Card Number*</Text>
      <View style={styles.cardNoView}>
        <TextInput
          placeholder=""
          placeholderTextColor="rgba(230, 230, 230,1)"
          selectionColor="rgba(255,255,255,1)"
          returnKeyType="next"
          clearButtonMode="while-editing"
          secureTextEntry={false}
          keyboardType="phone-pad"
          maxLength={16}
          style={styles.cardNotxt}
        ></TextInput>
      </View>
      <Text style={styles.cardholderNamelbl}>Cardholder Name*</Text>
      <View style={styles.cardHolderView}>
        <TextInput
          placeholder=""
          placeholderTextColor="rgba(230, 230, 230,1)"
          selectionColor="rgba(255,255,255,1)"
          returnKeyType="next"
          clearButtonMode="while-editing"
          secureTextEntry={false}
          style={styles.cardHoldertxt}
        ></TextInput>
      </View>
      <View style={styles.expireDatelblRow}>
        <Text style={styles.expireDatelbl}>Expire Date*</Text>
        <Text style={styles.cvvCvclbl}>CVV/CVC*</Text>
      </View>
      <View style={styles.expDateViewRow}>
        <View style={styles.expDateView}>
          <View style={styles.expDatetxtRow}>
            {/*<TextInput
              placeholder="DD/MM"
              placeholderTextColor="rgba(230, 230, 230,1)"
              selectionColor="rgba(255,255,255,1)"
              returnKeyType="next"
              clearButtonMode="while-editing"
              secureTextEntry={false}
              dataDetector="calendarEvent"
              style={styles.expDatetxt}
            ></TextInput>           
            <FontAwesomeIcon
              name="calendar"
              style={styles.calenderIcon}
            ></FontAwesomeIcon>*/}

             <DatePicker style={styles.expDatetxt}
                      date={date} //initial date from state
                      mode="date" //The enum of date, datetime and time
                      placeholder=""
                      format="DD/MM/YYYY"
                      minDate="01-01-2016"
                      maxDate="31-12-2040"
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                      customStyles={{               
                        dateInput: {
                          borderColor:'transparent',
                          alignItems: "flex-start"
                        },
                        dateText: {
                          color: '#fff',
                          fontFamily: "poppinsregular",
                        },
                      }}
                      onDateChange={(date) => {
                        setDate(date);
                      }}
            />
          </View>
        </View>
        <View style={styles.expDateViewFiller}></View>
        <View style={styles.cvcView}>
          <View style={styles.cvcViewtxtFiller}></View>
          <TextInput
            placeholder=""
            placeholderTextColor="rgba(230, 230, 230,1)"
            selectionColor="rgba(255,255,255,1)"
            returnKeyType="next"
            clearButtonMode="while-editing"
            secureTextEntry={true}
            maxLength={4}
            keyboardType="phone-pad"
            style={styles.cvcViewtxt}
          ></TextInput>
        </View>
      </View>
      <TouchableOpacity style={styles.addNewCardBtn}>
        <Text style={styles.addCard}>Add Card</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21,31,40,1)"
  },
  backBtn: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "rgba(187,189,193,1)",
    borderRadius: 12
  },
  backIcon: {
    color: '#BBBDC1',
    fontSize: 20,
    height: 22,
    width: 20,
    marginTop: 9,
    marginLeft: 8,
  },
  text: {
    fontFamily: "poppins700",
    color: "rgba(156,141,240,1)",
    textAlign: "center",
    letterSpacing: 0.5,
    fontSize: 18,
    flex: 1,
    marginLeft: 5,
    marginTop: 8
  },
  backBtnRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 60,
    marginLeft: 27,
    marginRight: 73
  },
  image1: {
    height: 200,
    borderRadius: 100,
    width: 200,
    alignSelf: "flex-end",
    marginTop: 25,
    marginRight: 86
  },
  cardNolbl: {
    fontFamily: "poppinsregular",
    color: "rgba(170,170,170,1)",
    width: 290,
    height: 21,
    marginTop: 48,
    marginLeft: 43
  },
  cardNoView: {
    height: 43,
    backgroundColor: "rgba(81,81,81,0.4)",
    borderRadius: 8,
    marginLeft: 35,
    marginRight: 35
  },
  cardNotxt: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    height: 43,
    marginLeft: 10,
    marginRight: 13
  },
  cardholderNamelbl: {
    fontFamily: "poppinsregular",
    color: "rgba(170,170,170,1)",
    width: 290,
    height: 21,
    marginTop: 22,
    marginLeft: 45
  },
  cardHolderView: {
    height: 43,
    backgroundColor: "rgba(81,81,81,0.4)",
    borderRadius: 8,
    marginLeft: 33,
    marginRight: 37
  },
  cardHoldertxt: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    height: 43,
    marginLeft: 12,
    marginRight: 11
  },
  expireDatelbl: {
    fontFamily: "poppinsregular",
    color: "rgba(170,170,170,1)",
    width: 103,
    height: 21
  },
  cvvCvclbl: {
    fontFamily: "poppinsregular",
    color: "rgba(170,170,170,1)",
    flex: 1,
    marginLeft: 64
  },
  expireDatelblRow: {
    height: 21,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 42,
    marginRight: 63
  },
  expDateView: {
    height: 43,
    backgroundColor: "rgba(81,81,81,0.4)",
    borderRadius: 8,
    width: 152,
    flexDirection: "row"
  },
  expDatetxt: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    height: 43,
    width: 140,
  },
  calenderIcon: {
    color: "rgba(128,128,128,1)",
    fontSize: 20,
    height: 20,
    width: 18,
    marginLeft: 12,
    marginTop: 12
  },
  expDatetxtRow: {
    height: 43,
    flexDirection: "row",
    flex: 1,
    marginRight: 10,
    marginLeft: 12
  },
  expDateViewFiller: {
    flex: 1,
    flexDirection: "row"
  },
  cvcView: {
    width: 140,
    height: 43,
    backgroundColor: "rgba(81,81,81,0.4)",
    borderRadius: 8,
    flexDirection: "row"
  },
  cvcViewtxtFiller: {
    flex: 1,
    flexDirection: "row"
  },
  cvcViewtxt: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    height: 43,
    width: 118,
    marginRight: 14
  },
  expDateViewRow: {
    height: 43,
    flexDirection: "row",
    marginLeft: 34,
    marginRight: 34
  },
  addNewCardBtn: {
    height: 47,
    backgroundColor: "rgba(123,0,255,1)",
    borderRadius: 8,
    marginTop: 82,
    marginLeft: 33,
    marginRight: 37
  },
  addCard: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    marginTop: 15,
    marginLeft: 8,
    marginRight: 7
  }
});

export default AddNewCard;
