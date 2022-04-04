import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import SimpleLineIconsIcon from 'react-native-vector-icons/SimpleLineIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { useFonts } from 'expo-font';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { icons } from '../../constants';

const { width, height } = Dimensions.get('window');

function ResetPassword({ navigation }) {
  //poppins insert
  const [loaded] = useFonts({
    poppinsregular: require('./../../assets/fonts/Poppins-Regular.ttf'),
    poppins700: require('./../../assets/fonts/poppins-700.ttf'),
  });

  const [data, setData] = React.useState({
    password: '',
    confirmPassword: '',    
    isValidPassword: true,
    isValidConfirmPassword: true,
    check_textInputChangePassword: false,
    check_textInputChangeConfirmPassword: false,
    secureTextEntry: true,
    confirmSecureTextEntry: true,
  });

  //validating password
  const textInputChangePassword = (val) => {
    if (val.trim().length >= 6) {
      setData({
        ...data,
        password: val,
        check_textInputChangePassword: true,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        check_textInputChangePassword: false,
        isValidPassword: false,
      });
    }
  };
  const handleValidPassword = (val) => {
    if (val.trim().length >= 6) {
      setData({
        ...data,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        isValidPassword: false,
      });
    }
  };


  //validating password
  // onChangeText={(val) => textInputChangeConfirmPassword(val)}
  // onEndEditing={(e) => handleValidConfirmPassword(e.nativeEvent.text)}

  const textInputChangeConfirmPassword = (val) => {
    if (val.trim().length >= 6) {
      setData({
        ...data,
        confirmPassword: val,
        check_textInputChangeConfirmPassword: true,
        isValidConfirmPassword: true,
      });
    } else {
      setData({
        ...data,
        confirmPassword: val,
        check_textInputChangeConfirmPassword: false,
        isValidConfirmPassword: false,
      });
    }
  };
  const handleValidConfirmPassword = (val) => {
    if (val.trim().length >= 6) {
      setData({
        ...data,
        isValidConfirmPassword: true,
      });
    } else {
      setData({
        ...data,
        isValidConfirmPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirmSecureTextEntry: !data.confirmSecureTextEntry,
    });
  };

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}>
        <SimpleLineIconsIcon
          name="arrow-left"
          style={styles.backIcon}></SimpleLineIconsIcon>
      </TouchableOpacity>

      <KeyboardAwareScrollView>
        <ScrollView contentContainerStyle={{ height: height }}>
          <Image
            source={require('./../../assets/images/resetPassword.png')}
            resizeMode="cover"
            style={styles.image1}></Image>
          <Text style={styles.resetPassword}>Reset Password</Text>

          {/* Password */}
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.newPasswordlbl}>New Password</Text>
            {data.isValidPassword ? null : (<Text style={styles.errMsg}>Invalid Password</Text>)}
          </View>
          <View style={styles.newPasswordView}>
            <TextInput
              placeholder=""
              placeholderTextColor="rgba(230, 230, 230,1)"
              selectionColor="rgba(255,255,255,1)"
              returnKeyType="next"
              clearButtonMode="while-editing"
              secureTextEntry={data.secureTextEntry ? true : false}
              blurOnSubmit={false}
              onChangeText={(val) => textInputChangePassword(val)}
              onEndEditing={(e) => handleValidPassword(e.nativeEvent.text)}
              autoCapitalize="none"
              //onSubmitEditing={() => { this.secondTextInput.focus(); }}
              style={styles.newPasswordtxt}></TextInput>
            <TouchableOpacity
              style={styles.showPassword}
              onPress={updateSecureTextEntry}>
              <Image
                source={data.secureTextEntry ? icons.eye_close : icons.eye}
                style={styles.showPasswordIcon}
              />
            </TouchableOpacity>
          </View>

          {/* Confirm password */}
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.confirmPasswordlbl}>Confirm Password</Text>
            {data.isValidConfirmPassword ? null : (<Text style={styles.errMsg}>Invalid Password</Text>)}
          </View>
          <View style={styles.confirmPasswordView}>
            <TextInput
              placeholder=""
              placeholderTextColor="rgba(230, 230, 230,1)"
              selectionColor="rgba(255,255,255,1)"
              returnKeyType="done"
              clearButtonMode="while-editing"
              secureTextEntry={data.confirmSecureTextEntry ? true : false}
              blurOnSubmit={false}
              autoCapitalize="none"
              onChangeText={(val) => textInputChangeConfirmPassword(val)}
              onEndEditing={(e) => handleValidConfirmPassword(e.nativeEvent.text)}
              style={styles.conformPasswordtxt}
              //ref={(input) => { this.secondTextInput = input; }}
            ></TextInput>
            <TouchableOpacity
              style={styles.showPassword}
              onPress={updateConfirmSecureTextEntry}>
              <Image
                source={
                  data.confirmSecureTextEntry ? icons.eye_close : icons.eye
                }
                style={styles.showPasswordIcon}
              />
            </TouchableOpacity>
          </View>

          {/* Submit button */}
          <TouchableOpacity style={styles.submitBtn}>
            <Text style={styles.submit}>Submit</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(21,31,40,1)',
  },
  backBtn: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: 'rgba(187,189,193,1)',
    borderRadius: 12,
    marginTop: 20,
    marginLeft: 27,
  },
  backIcon: {
    color: '#BBBDC1',
    fontSize: 20,
    height: 22,
    width: 20,
    marginTop: 9,
    marginLeft: 8,
  },
  image1: {
    height: 200,
    borderRadius: 100,
    width: 200,
    marginTop: 6,
    marginLeft: 105,
  },
  resetPassword: {
    fontFamily: 'poppinsregular',
    color: 'rgba(156,141,240,1)',
    width: 292,
    fontSize: 30,
    height: 45,
    marginTop: 48,
    marginLeft: 37,
  },
  newPasswordlbl: {
    fontFamily: 'poppinsregular',
    color: 'rgba(170,170,170,1)',
    height: 21,
    marginTop: 25,
    marginLeft: 41,
  },
  newPasswordView: {
    height: 43,
    backgroundColor: 'rgba(81,81,81,0.4)',
    borderRadius: 8,
    flexDirection: 'row',
    marginLeft: 33,
    marginRight: 38,
  },
  newPasswordtxt: {
    fontFamily: 'poppinsregular',
    color: 'rgba(255,255,255,1)',
    height: 43,
    flex: 1,
    marginRight: 15,
    marginLeft: 11,
  },
  showPasswordIcon2: {
    color: 'rgba(128,128,128,1)',
    fontSize: 15,
    height: 16,
    width: 14,
    marginRight: 10,
    marginTop: 13,
  },
  confirmPasswordlbl: {
    fontFamily: 'poppinsregular',
    color: 'rgba(170,170,170,1)',
    height: 21,
    marginTop: 25,
    marginLeft: 41,
  },
  confirmPasswordView: {
    height: 43,
    backgroundColor: 'rgba(81,81,81,0.4)',
    borderRadius: 8,
    flexDirection: 'row',
    marginLeft: 33,
    marginRight: 38,
  },
  conformPasswordtxt: {
    fontFamily: 'poppinsregular',
    color: 'rgba(255,255,255,1)',
    height: 43,
    flex: 1,
    marginRight: 15,
    marginLeft: 10,
  },
  showPassword: {
    marginRight: 14,
    height: 43,
    width: 35,
  },
  showPasswordIcon: {
    color: 'rgba(128,128,128,1)',
    width: 18,
    height: 18,
    marginLeft: 16,
    marginTop: 13,
  },
  submitBtn: {
    height: 47,
    backgroundColor: 'rgba(123,0,255,1)',
    borderRadius: 8,
    marginTop: 86,
    marginLeft: 33,
    marginRight: 37,
  },
  submit: {
    fontFamily: 'poppinsregular',
    color: 'rgba(255,255,255,1)',
    textAlign: 'center',
    marginTop: 15,
    marginLeft: 8,
    marginRight: 7,
  },
  errMsg: {
    color: 'red',
    fontFamily: 'poppinsregular',
    fontSize: 10,
    marginTop: 25,
    marginRight: 38,
  },
});

export default ResetPassword;
