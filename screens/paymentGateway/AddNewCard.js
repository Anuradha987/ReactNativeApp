import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions, 
  ScrollView,
  ActivityIndicator
} from "react-native";
import { useFonts } from 'expo-font';
import DatePicker from 'react-native-datepicker'
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { LinearGradient } from 'expo-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const { width, height } = Dimensions.get('window');

function AddNewCard({navigation}) {
   const [date, setDate] = useState('09-10-2020');
       //poppins insert
  const [loaded] = useFonts({
    poppinsregular: require('./../../assets/fonts/Poppins-Regular.ttf'),
    poppins700: require('./../../assets/fonts/poppins-700.ttf'),
  });

  const [data, setData] = React.useState({
    cardno:'',
    cardholdername:'',
    expiredate:'',
    cvc: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidcvc: true,
  });
  const textInputChange = (val) => {
    if( val.trim().length !== 0 ) {
        setData({
            ...data,
            username: val,
            check_textInputChange: true,
            isValidUser: true
        });
    } else {
        setData({
            ...data,
            username: val,
            check_textInputChange: false,
            isValidUser: false
        });
    }
  }
  const handlecvcChange = (val) => {
    if( val.trim().length >= 8 ) {
        setData({
            ...data,
            cvc: val,
            isValidcvc: true
        });
    } else {
        setData({
            ...data,
            cvc: val,
            isValidcvc: false
        });
    }
  }

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

    {/*header*/}
    <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={()=>navigation.goBack()}>
          <Icon name="arrow-left" style={styles.backIcon}></Icon>
        </TouchableOpacity>
        <Text style={styles.text}>ADD A NEW CARD</Text>
      </View>

      <LinearGradient
        start={{ x: 0, y: 0.5 }}
        end={{ x: 0, y: 0 }}
        colors={['transparent', 'rgba(19,18,18,1)']}
        style={{ left: 0, right: 0, height: 20 }}
      />
      
      <KeyboardAwareScrollView>
        <ScrollView contentContainerStyle={{height:height,}}>
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
         // onSubmitEditing={() => { this.secondTextInput.focus(); }}
          onChangeText={(val) => textInputChange(val)}
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
         // ref={(input) => { this.secondTextInput = input; }}
          //onSubmitEditing={() => { this.thirdTextInput.focus(); }}
          onChangeText={(val) => textInputChange(val)}
          style={styles.cardHoldertxt}  
        ></TextInput>
      </View>


      <View style={styles.expireDatelblRow}>
        <Text style={styles.expireDatelbl}>Expire Date*</Text>
        <Text style={styles.cvvCvclbl}>CVV/CVC*</Text>
        <Text style={styles.errMsg}>{data.check_textInputChangeName ? "Correct" : "Invalid Name"}</Text>
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
                      //ref={(input) => { this.thirdTextInput = input; }} 
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
            returnKeyType="done"
            clearButtonMode="while-editing"
            secureTextEntry={true}
            maxLength={4}
            //keyboardType="phone-pad"
            onChangeText={(val)=> handlecvcChange(val)}
            style={styles.cvcViewtxt} 
          ></TextInput>
        </View>
      </View>
      <TouchableOpacity style={styles.addNewCardBtn}>
        <Text style={styles.addCard}>Add Card</Text>
      </TouchableOpacity>
      </ScrollView>
      </KeyboardAwareScrollView>
    </View>)
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
  text: {
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
  image1: {
    height: 200,
    borderRadius: 100,
    width: 200,
    alignSelf: "flex-end",
    marginTop: 25,
    marginRight: 105
  },
  cardNolbl: {
    fontFamily: "poppinsregular",
    color: "rgba(170,170,170,1)",
    width: 290,
    height: 21,
    marginTop: 48,
    marginLeft: 43, 
    marginBottom:3,
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
    marginRight: 10
  },
  cardholderNamelbl: {
    fontFamily: "poppinsregular",
    color: "rgba(170,170,170,1)",
    width: 290,
    height: 21,
    marginTop: 22,
    marginLeft: 45, 
    marginBottom:3,
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
    marginLeft: 10,
    marginRight: 10
  },
  expireDatelbl: {
    fontFamily: "poppinsregular",
    color: "rgba(170,170,170,1)",
    //width: 103,
    height: 21, 
  },
  cvvCvclbl: {
    fontFamily: "poppinsregular",
    color: "rgba(170,170,170,1)",
    flex: 1,
    marginLeft: 90,
  },
  expireDatelblRow: {
    height: 21,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 42,
    marginRight: 63, 
    marginBottom:3,
  },
  expDateView: {
    height: 43,
    backgroundColor: "rgba(81,81,81,0.4)",
    borderRadius: 8,
    width: 160,
    flexDirection: "row"
  },
  expDatetxt: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    height: 43,
    width: 150,
    marginLeft:-3,
    top:2,
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
    width: 160,
    height: 43,
    backgroundColor: "rgba(81,81,81,0.4)",
    borderRadius: 8,
    flexDirection: "row"
  },
  cvcViewtxtFiller: {
    // flex: 1,
    // flexDirection: "row"
  },
  cvcViewtxt: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    height: 43,
    width: 140,
    //marginRight: 14
    marginHorizontal:10,
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
    marginTop: 12,
    marginLeft: 8,
    marginRight: 7
  }
});

export default AddNewCard;
