import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import SimpleLineIconsIcon from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { useFonts } from 'expo-font';



function Register({ navigation }) {
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
          source={require('./../../assets/images/blob-scene-haikei.png')}
          resizeMode="cover"
          style={styles.image}
          imageStyle={styles.image_imageStyle}>
          <FlatList
            showsVerticalScrollIndicator={true}
            ListHeaderComponent={
              <View>

                <TouchableOpacity style={styles.backBtn}
                  onPress={()=>navigation.goBack()}
                >
                  <SimpleLineIconsIcon
                    name="arrow-left"
                    style={styles.backIcon}></SimpleLineIconsIcon>
                </TouchableOpacity>
                
                <Text style={styles.text1}>
                  Hello! Welcome to Quiky App. Get registered and explore what
                  you want.
                </Text>
                <Text style={styles.text2}>Let&#39;s get Started!</Text>
                <View style={styles.rect}>
                  <View style={styles.coverImageStack}>
                    <View style={styles.coverImage}>
                      <View style={styles.addCoverPhotoIconFiller}></View>
                      <MaterialCommunityIconsIcon
                        name="image-plus"
                        style={
                          styles.addCoverPhotoIcon
                        }></MaterialCommunityIconsIcon>
                    </View>
                    <View style={styles.proPicCircle}>
                      <EntypoIcon
                        name="camera"
                        style={styles.camIcon}></EntypoIcon>
                    </View>
                  </View>

                  <Text style={styles.namelbl}>Name</Text>
                  <View style={styles.nameView}>
                    <TextInput
                      placeholder=""
                      placeholderTextColor="rgba(230, 230, 230,1)"
                      selectionColor="rgba(255,255,255,1)"
                      returnKeyType="next"
                      clearButtonMode="while-editing"
                      autoCapitalize="sentences"
                      // maxLength={'null'}
                      style={styles.nametxt}></TextInput>
                  </View>

                  <Text style={styles.aboutMelbl}>About me</Text>
                  <View style={styles.aboutMeView}>
                    <TextInput
                      placeholder=""
                      placeholderTextColor="rgba(230, 230, 230,1)"
                      selectionColor="rgba(255,255,255,1)"
                      returnKeyType="next"
                      clearButtonMode="while-editing"
                      autoCapitalize="sentences"
                      // maxLength={'null'}
                      multiline={true}
                      style={styles.aboutMetxt}></TextInput>
                  </View>
                  <Text style={styles.emaillbl}>Email</Text>
                  <View style={styles.emailView}>
                    <TextInput
                      placeholder=""
                      placeholderTextColor="rgba(230, 230, 230,1)"
                      selectionColor="rgba(255,255,255,1)"
                      returnKeyType="next"
                      clearButtonMode="while-editing"
                      // maxLength={'null'}
                      keyboardType="email-address"
                      style={styles.emailtxt}></TextInput>
                  </View>
                  <Text style={styles.phoneNolbl}>Phone Number</Text>
                  <View style={styles.phoneNoView}>
                    <TextInput
                      placeholder=""
                      placeholderTextColor="rgba(230, 230, 230,1)"
                      selectionColor="rgba(255,255,255,1)"
                      returnKeyType="next"
                      clearButtonMode="while-editing"
                      // maxLength={'null'}
                      keyboardType="phone-pad"
                      style={styles.phoneNotxt}></TextInput>
                  </View>
                  <Text style={styles.locationlbl}>Location</Text>
                  <View style={styles.locationView}>
                    <TextInput
                      placeholder=""
                      placeholderTextColor="rgba(230, 230, 230,1)"
                      selectionColor="rgba(255,255,255,1)"
                      returnKeyType="next"
                      clearButtonMode="while-editing"
                      // maxLength={'null'}
                      style={styles.locationtxt}></TextInput>
                    <EntypoIcon
                      name="location-pin"
                      style={styles.locationIcon}></EntypoIcon>
                  </View>
                  <Text style={styles.usernamelbl}>Username</Text>
                  <View style={styles.usernameView}>
                    <TextInput
                      placeholder=""
                      placeholderTextColor="rgba(230, 230, 230,1)"
                      selectionColor="rgba(255,255,255,1)"
                      returnKeyType="next"
                      clearButtonMode="while-editing"
                      // maxLength={'null'}
                      style={styles.usernametxt}></TextInput>
                  </View>
                  <Text style={styles.passwordlbl}>Password</Text>
                  <View style={styles.passwordView}>
                    <TextInput
                      placeholder=""
                      placeholderTextColor="rgba(230, 230, 230,1)"
                      selectionColor="rgba(255,255,255,1)"
                      returnKeyType="done"
                      clearButtonMode="while-editing"
                      secureTextEntry={true}
                      // maxLength={'null'}
                      style={styles.passwordtxt}></TextInput>
                    <EntypoIcon
                      name="cake"
                      style={styles.showPasswordIcon}></EntypoIcon>
                  </View>

                  <TouchableOpacity style={styles.signInBtn} onPress = {()=>{}}>
                    <Text style={styles.signIn}>Create Account</Text>
                  </TouchableOpacity>

                  <Text style={styles.text3}>
                    By creating account, you agree to our {'\n'}Terms and
                    Conditions.
                  </Text>

                  <View style={styles.goToSignIn}>
                    <Text style={styles.text4}>Already have an account?</Text>
                    <TouchableOpacity onPressIn={()=>navigation.navigate('Login')}>
                      <Text style={styles.signInText}>Sign In</Text>
                    </TouchableOpacity>
                  </View>

                </View>
              </View>
            }
          />
        </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151f28',
  },
  image: {
    top: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  image_imageStyle: {
    opacity: 0.74,
  },
  rect: {
    height: 1216,
    backgroundColor: 'rgba(6,0,38,0.65)',
    borderRadius: 20,
    marginTop: 250,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 50,
  },
  coverImage: {
    top: 0,
    left: 0,
    height: 154,
    position: 'absolute',
    backgroundColor: 'rgba(81,81,81,0.4)',
    right: 0,
    borderRadius: 20,
    overflow: 'visible',
    flexDirection: 'row',
  },
  addCoverPhotoIconFiller: {
    flex: 1,
    flexDirection: 'row',
  },
  addCoverPhotoIcon: {
    color: 'rgba(128,128,128,1)',
    fontSize: 30,
    height: 33,
    width: 33,
    marginRight: 15,
    marginTop: 14,
  },
  proPicCircle: {
    top: 82,
    width: 110,
    height: 110,
    position: 'absolute',
    backgroundColor: 'rgba(39,39,55,1)',
    borderRadius: 50,
    right: 115,
    overflow: 'visible',
    borderWidth: 1,
    borderColor: 'rgba(113,108,108,1)',
  },
  camIcon: {
    color: 'rgba(128,128,128,1)',
    fontSize: 30,
    height: 33,
    width: 33,
    marginTop: 39,
    marginLeft: 40,
  },
  coverImageStack: {
    height: 192,
    marginTop: 18,
    marginLeft: 20,
    marginRight: 11,
  },
  namelbl: {
    fontFamily: 'poppinsregular',
    color: 'rgba(170,170,170,1)',
    width: 290,
    height: 21,
    marginTop: 29,
    marginLeft: 28,
  },
  nameView: {
    height: 43,
    backgroundColor: 'rgba(81,81,81,0.4)',
    borderRadius: 8,
    marginLeft: 16,
    marginRight: 16,
  },
  nametxt: {
    fontFamily: 'poppinsregular',
    color: 'rgba(255,255,255,1)',
    height: 43,
    marginLeft: 12,
    marginRight: 9,
  },
  aboutMelbl: {
    fontFamily: 'poppinsregular',
    color: 'rgba(170,170,170,1)',
    width: 290,
    height: 21,
    marginTop: 25,
    marginLeft: 28,
  },
  aboutMeView: {
    height: 152,
    backgroundColor: 'rgba(81,81,81,0.4)',
    borderRadius: 20,
    marginLeft: 16,
    marginRight: 16,
    paddingVertical:7,
  },
  aboutMetxt: {textAlignVertical: "top",
    fontFamily: 'poppinsregular',
    color: 'rgba(255,255,255,1)',
    height: 146,
    marginLeft: 12,
    marginRight: 16,
    marginVertical:3,
  },
  emaillbl: {
    fontFamily: 'poppinsregular',
    color: 'rgba(170,170,170,1)',
    width: 290,
    height: 21,
    marginTop: 25,
    marginLeft: 28,
  },
  emailView: {
    height: 43,
    backgroundColor: 'rgba(81,81,81,0.4)',
    borderRadius: 8,  
    marginLeft: 16,
    marginRight: 16,
  },
  emailtxt: {
    fontFamily: 'poppinsregular',
    color: 'rgba(255,255,255,1)',
    height: 43,
    marginLeft: 12,
    marginRight: 9,
  },
  phoneNolbl: {
    fontFamily: 'poppinsregular',
    color: 'rgba(170,170,170,1)',
    width: 290,
    height: 21,
    marginTop: 25,
    marginLeft: 28,
  },
  phoneNoView: {
    height: 43,
    backgroundColor: 'rgba(81,81,81,0.4)',
    borderRadius: 8,
    marginLeft: 16,
    marginRight: 16,
  },
  phoneNotxt: {
    fontFamily: 'poppinsregular',
    color: 'rgba(255,255,255,1)',
    height: 43,
    marginLeft: 12,
    marginRight: 9,
  },
  locationlbl: {
    fontFamily: 'poppinsregular',
    color: 'rgba(170,170,170,1)',
    width: 290,
    height: 21,
    marginTop: 25,
    marginLeft: 28,
  },
  locationView: {
    height: 43,
    backgroundColor: 'rgba(81,81,81,0.4)',
    borderRadius: 8,
    flexDirection: 'row',
    marginLeft: 16,
    marginRight: 16,
  },
  locationtxt: {
    fontFamily: 'poppinsregular',
    color: 'rgba(255,255,255,1)',
    height: 43,
    flex: 1,
    marginRight: 10,
    marginLeft: 12,
  },
  locationIcon: {
    color: 'rgba(128,128,128,1)',
    fontSize: 20,
    width: 22,
    height: 22,
    marginRight: 14,
    marginTop: 11,
  },
  usernamelbl: {
    fontFamily: 'poppinsregular',
    color: 'rgba(170,170,170,1)',
    width: 290,
    height: 21,
    marginTop: 25,
    marginLeft: 28,
  },
  usernameView: {
    height: 43,
    backgroundColor: 'rgba(81,81,81,0.4)',
    borderRadius: 8,
    marginLeft: 16,
    marginRight: 16,
  },
  usernametxt: {
    fontFamily: 'poppinsregular',
    color: 'rgba(255,255,255,1)',
    height: 43,
    marginLeft: 12,
    marginRight: 9,
  },
  passwordlbl: {
    fontFamily: 'poppinsregular',
    color: 'rgba(170,170,170,1)',
    width: 290,
    height: 21,
    marginTop: 25,
    marginLeft: 28,
  },
  passwordView: {
    height: 43,
    backgroundColor: 'rgba(81,81,81,0.4)',
    borderRadius: 8,
    flexDirection: 'row',
    marginLeft: 16,
    marginRight: 16,
  },
  passwordtxt: {
    fontFamily: 'poppinsregular',
    color: 'rgba(255,255,255,1)',
    height: 43,
    flex: 1,
    marginRight: 14,
    marginLeft: 13,
  },
  showPasswordIcon: {
    color: 'rgba(128,128,128,1)',
    fontSize: 15,
    width: 16,
    height: 16,
        marginRight: 14,
    marginTop: 14,
  },
  signInBtn: {
    height: 47,
    backgroundColor: 'rgba(123,0,255,1)',
    borderRadius: 8,
    marginTop: 60,
    marginLeft: 23,
    marginRight: 15,
  },
  signIn: {
    fontFamily: 'poppinsregular',
    color: 'rgba(255,255,255,1)',
    textAlign: 'center',
    marginTop: 13,
    marginLeft: 8,
    marginRight: 7,
  },
  text3: {
    fontFamily: 'poppinsregular',
    color: 'rgba(137,135,135,1)',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 9,
    marginLeft: 30,
    marginRight: 15,
  },
  goToSignIn:{
    flexDirection:'row',
    alignItems:'center', 
    justifyContent:'center', 
    marginTop: 31,
  },
  text4: {
    fontFamily: 'poppinsregular',
    color: 'rgba(170,170,170,1)',
    fontSize: 12,   
     marginRight:7,
  },
  signInText:{
    fontFamily: 'poppinsregular',
    color: 'rgba(156,141,240,1)',
    fontSize: 12, 
   textDecorationLine: 'underline', 
  },
  backBtn: {
    top: 50,
    left: 27,
    width: 40,
    height: 40,
    position: 'absolute',
    borderWidth: 1,
    borderColor: '#BBBDC1',
    borderRadius: 12,
  },
  backIcon: {
    color: '#BBBDC1',
    fontSize: 20,
    height: 22,
    width: 20,
    marginTop: 9,
    marginLeft: 8,
  },
  text1: {
    top: 125,
    left: 37,
    position: 'absolute',
    fontFamily: 'poppinsregular',
    color: 'rgba(255,255,255,1)',
    right: 32,
  },
  text2: {
    top: 180,
    left: 37,
    position: 'absolute',
    fontFamily: 'poppinsregular',
    color: 'rgba(156,141,240,1)',
    width: 306,
    fontSize: 30,
    height: 45,
  },
  imageStack: {
    flex: 1,
  },
});

export default Register;
