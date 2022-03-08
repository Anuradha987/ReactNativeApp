import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import SimpleLineIconsIcon from 'react-native-vector-icons/SimpleLineIcons';
import { useFonts } from 'expo-font';
import OtpInputView from '@twotalltotems/react-native-otp-input'

const Otp = ({navigation}) => {

const [timer, setTimer] = React.useState(60);

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

                <TouchableOpacity style={styles.backBtn}  onPress={()=>navigation.goBack()} >
                  <SimpleLineIconsIcon  name="arrow-left" style={styles.backIcon}></SimpleLineIconsIcon>
                </TouchableOpacity>

       <Image
        source={require('./../../assets/images/otp.png')}
        resizeMode="cover"
        style={styles.image1}
      ></Image>
     <Text style={styles.enterOtp}>Enter OTP</Text>
      <Text style={styles.text1}>
        An 4-digit code has been sent to{"\n"}example@gmail.com
      </Text>
      <View style={styles.codeGroup1Stack}>
        <OtpInputView 
        style={styles.codeGroup1} 
        inCount ={4} 
        codeInputFieldStyle={styles.rect}
        /> 
      </View>



      <View style={{flexDirection:'row', marginLeft: 32, marginTop:62 }}>
        <Text style={styles.text2}>Didn&#39;t received the code?</Text>
        <TouchableOpacity onPress={()=>{}}>
          <Text style={styles.resendText}>Resend (${timer}s)</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.confirmBtn}>
        <Text style={styles.confirm}>Confirm</Text>
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
    top: 20,
    marginLeft: 24,
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
  image1: {
    height: 200,
    borderRadius: 100,
    width: 200,
    alignSelf: "flex-end",
    marginTop: 6,
    marginRight: 86
  },
  enterOtp: {
    fontFamily: "poppinsregular",
    color: "rgba(156,141,240,1)",
    width: 292,
    fontSize: 30,
    height: 45,
    marginTop: 48,
    marginLeft: 34
  },
  text1: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    marginTop: 7,
    marginLeft: 34,
    marginRight: 39, 
  },
  codeGroup1: {
    top: 0,
    left: 0,
    height: 60,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    color: "rgba(255,255,255,1)",
    right: 1,
  },
  rect: {
    width: 60,
    height: 60,
    backgroundColor: "rgba(81,81,81,0.4)",
    borderColor:'rgba(81,81,81,0.4)',
    borderRadius: 8, 
    color:"white",
    fontSize:20,
  },
  textInput: {
    top: 22,
    left: 0,
    position: "absolute",
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    height: 18,
    width: 59,
    textAlign: "center"
  },
  rect1: {
    width: 60,
    height: 60,
    backgroundColor: "rgba(81,81,81,0.4)",
    borderRadius: 8
  },
  textInput1: {
    top: 22,
    left: 0,
    position: "absolute",
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    height: 18,
    width: 59,
    textAlign: "center"
  },
  rect2: {
    width: 60,
    height: 60,
    backgroundColor: "rgba(81,81,81,0.4)",
    borderRadius: 8
  },
  textInput2: {
    top: 22,
    left: 0,
    position: "absolute",
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    height: 18,
    width: 59,
    textAlign: "center",    
  },
  rect4: {
    width: 60,
    height: 60,
    backgroundColor: "rgba(81,81,81,0.4)",
    borderRadius: 8
  },
  textInput3: {
    top: 22,
    left: 0,
    position: "absolute",
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    height: 18,
    width: 59,
    textAlign: "center",
  },
  codeGroup1Stack: {
    height: 60,
    marginTop: 46,
    marginHorizontal: 29,
  },
  text2: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    marginRight:7,
  },
  resendText:{
    fontFamily: "poppinsregular",
    color: "#9c8df0",
    textDecorationLine: 'underline',
  },
  confirmBtn: {
    height: 47,
    backgroundColor: "rgba(123,0,255,1)",
    borderRadius: 8,
    marginTop: 33,
    marginLeft: 33,
    marginRight: 37
  },
  confirm: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    marginTop: 13,
    marginLeft: 7,
    marginRight: 9
  }
});

export default Otp;
