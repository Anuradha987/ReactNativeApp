import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import { icons, dummyData } from '../../constants';
import { useFonts } from 'expo-font';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AuthContext } from '../../components/context';
import { AuthService, test } from '../../services/AuthService';

const { width, height } = Dimensions.get('window');

function Login({ navigation }, props) {
  const { login } = React.useContext(AuthContext);

  const [data, setData] = React.useState({
    username: '',
    password: '',
    isValidUsername: true,
    isValidPassword: true,
    check_textInputChangeUsername: false,
    check_textInputChangePassword: false,
    secureTextEntry: true,
  });

  //validating username
  const textInputChangeUsername = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChangeUsername: true,
        isValidUsername: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChangeUsername: false,
        isValidUsername: false,
      });
    }
  };
  const handleValidUsername = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUsername: true,
      });
    } else {
      setData({
        ...data,
        isValidUsername: false,
      });
    }
  };

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
  //password visibility
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };


  const loginHandle = (userName, password) => {
    // AuthService.test();
    console.log("Hello0");
    const foundUser = dummyData.Users.filter((item) => {
      return userName == item.username && password == item.password;
    });

    if (data.username.length == 0 || data.password.length == 0) {
      Alert.alert(
        'Login Failed!',
        'Username or Password fields cannot be empty',
        [{ text: 'Retry' }]
      );
      return;
    }

    // if (foundUser.length == 0) {
    //   Alert.alert('Login Failed!', 'Incorrect Username or Password', [
    //     { text: 'Retry' },
    //   ]);
    //   return;
    // }
    // login(foundUser);
    console.log(data);

    const user = {
      email:data.username,
      password:data.password
    }

    AuthService.login(user).then((res)=>{
      console.log(res.data);
      const foundUser ={
        userToken:res.data.data.token,
        username:res.data.user.username,
        id:res.data.user._id
      };
        login(foundUser);
    }).catch((error)=>{
      console.log(error);
    });
  };


  //poppins insert
  const [loaded] = useFonts({
    poppinsregular: require('./../../assets/fonts/Poppins-Regular.ttf'),
    poppins700: require('./../../assets/fonts/poppins-700.ttf'),
  });
  if (!loaded) {
    return null;
  }


  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('./../../assets/images/blob-scene-haikei(copy).png')}
        resizeMode="stretch"
        style={styles.backgroundImage}
        imageStyle={styles.backgroundImage_imageStyle}>

        <KeyboardAwareScrollView>
          <ScrollView contentContainerStyle={{ height: height }}>
            <Image
              source={require('./../../assets/images/1.png')}
              resizeMode="cover"
              style={styles.image1}></Image>
            <Text style={styles.text1}>Hey, Welcome Back!</Text>
            <Text style={styles.text2}>Let&#39;s SIgn You In</Text>
            <View style={styles.rect}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.usernamelbl}>Username</Text>
                {data.isValidUsername ? null : (
                  <Text style={styles.errMsg}>Invalid Username</Text>
                )}
              </View>
              <View style={styles.usernameView}>
                <TextInput
                  placeholder=""
                  placeholderTextColor="rgba(230, 230, 230,1)"
                  selectionColor="rgba(255,255,255,1)"
                  returnKeyType="next"
                  clearButtonMode="while-editing"
                  autoCapitalize="none"
                  //onSubmitEditing={() => { this.secondTextInput.focus(); }}
                  blurOnSubmit={false}
                  onChangeText={(val) => textInputChangeUsername(val)}
                  onEndEditing={(e) => handleValidUsername(e.nativeEvent.text)}
                  style={styles.usernametxt}></TextInput>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.passwordlbl}>Password</Text>
                {data.isValidPassword ? null : (
                  <Text style={styles.errMsg}>
                    Password must be 6 characters long
                  </Text>
                )}
              </View>
              <View style={styles.passwordView}>
                <TextInput
                  placeholder=""
                  placeholderTextColor="rgba(255,255,255,1)"
                  secureTextEntry={data.secureTextEntry ? true : false}
                  returnKeyType="done"
                  clearButtonMode="while-editing"
                  autoCapitalize="none"
                  // ref={(input) => { this.secondTextInput = input; }}
                  blurOnSubmit={false}
                  onChangeText={(val) => textInputChangePassword(val)}
                  onEndEditing={(e) => handleValidPassword(e.nativeEvent.text)}
                  style={styles.passwordtxt}></TextInput>
                <TouchableOpacity
                  style={styles.showPassword}
                  onPress={updateSecureTextEntry}>
                  <Image
                    source={data.secureTextEntry ? icons.eye_close : icons.eye}
                    style={styles.showPasswordIcon}
                  />
                </TouchableOpacity>
              </View>

              {/* forgot password? */}
              <TouchableOpacity
                onPressIn={() => navigation.navigate('PasswordRecovery')}>
                <Text style={styles.forgotPasswordtxt}>Forgot Password?</Text>
              </TouchableOpacity>

              {/* login button */}
              <TouchableOpacity
                style={styles.signInBtn}
                onPress={() => {
                  loginHandle(data.username, data.password);
                }}>
                <Text style={styles.signIn}>Sign In</Text>
              </TouchableOpacity>

              {/* GO to the register page  */}
              <View style={styles.goToRegister}>
                <Text style={styles.text3}>Don&#39;t have an account?</Text>
                <TouchableOpacity
                  onPressIn={() => navigation.navigate('Register')}>
                  <Text style={styles.registerText}>Create Account</Text>
                </TouchableOpacity>
              </View>
              
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(21,31,40,1)',
  },
  backgroundImage: {
    top: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(15,15, 15,0.74)',
    flexDirection: 'row',
    flex: 1,
  },
  backgroundImage_imageStyle: {
    opacity: 0.74,
  },
  image1Filler: {
    width: width,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image1: {
    height: 143,
    width: 112,
    marginLeft: 150,
    marginTop: 81,
  },
  text1: {
    top: 344,
    left: 42,
    position: 'absolute',
    fontFamily: 'poppinsregular',
    color: 'rgba(255,255,255,1)',
  },
  text2: {
    top: 361,
    // marginTop:30,
    left: 42,
    position: 'absolute',
    fontFamily: 'poppinsregular',
    color: 'rgba(156,141,240,1)',
    fontSize: 30,
  },
  rect: {
    bottom: 40,
    top: 424,
    left: 16,
    height: 352,
    position: 'absolute',
    backgroundColor: 'rgba(6,0,38,0.65)',
    borderRadius: 20,
    right: 16,
  },
  usernamelbl: {
    fontFamily: 'poppinsregular',
    color: 'rgba(170,170,170,1)',
    marginTop: 20,
    marginLeft: 26,
  },
  usernameView: {
    height: 43,
    backgroundColor: 'rgba(81,81,81,0.4)',
    borderRadius: 8,
    marginLeft: 19,
    marginRight: 19,
  },
  usernametxt: {
    fontFamily: 'poppinsregular',
    color: 'rgba(255,255,255,1)',
    height: 43,
    marginLeft: 14,
    marginRight: 15,
  },
  passwordlbl: {
    fontFamily: 'poppinsregular',
    color: 'rgba(170,170,170,1)',
    height: 21,
    marginTop: 25,
    marginLeft: 26,
  },
  passwordView: {
    height: 43,
    backgroundColor: 'rgba(81,81,81,0.4)',
    borderRadius: 8,
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 18,
  },
  passwordtxt: {
    fontFamily: 'poppinsregular',
    color: 'rgba(255,255,255,1)',
    height: 43,
    flex: 1,
    marginRight: 18,
    marginLeft: 14,
  },
  showPasswordIcon: {
    // color: 'rgba(128,128,128,1)',
    // fontSize: 15,
    height: 14,
    width: 14,
    marginRight: 15,
    marginTop: 14,
  },
  forgotPasswordtxt: {
    fontFamily: 'poppinsregular',
    color: 'rgba(137,137,137,1)',
    fontSize: 12,
    textAlign: 'right',
    alignSelf: 'flex-end',
    marginTop: 7,
    marginRight: 19,
  },
  signInBtn: {
    height: 47,
    backgroundColor: 'rgba(123,0,255,1)',
    borderRadius: 8,
    marginTop: 44,
    marginLeft: 18,
    marginRight: 20,
  },
  signIn: {
    fontFamily: 'poppinsregular',
    color: 'rgba(255,255,255,1)',
    textAlign: 'center',
    marginTop: 15,
    marginLeft: 8,
    marginRight: 7,
  },
  goToRegister: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  text3: {
    fontFamily: 'poppinsregular',
    color: 'rgba(137,137,137,1)',
    fontSize: 12,
    textAlign: 'center',
    alignSelf: 'flex-end',
    marginRight: 15,
  },
  registerText: {
    fontFamily: 'poppinsregular',
    color: 'rgba(156,141,240,1)',
    fontSize: 12,
    textDecorationLine: 'underline',
  },
  errMsg: {
    color: 'red',
    fontFamily: 'poppinsregular',
    fontSize: 10,
    marginTop: 25,
    marginRight: 28,
  },
});

export default Login;
