import React, { Component, useRef, useState } from 'react';
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
  Button, 
  Modal,
  Pressable
} from 'react-native';
import SimpleLineIconsIcon from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { useFonts } from 'expo-font';
import { icons } from '../../constants';
import * as ImagePicker from 'expo-image-picker';
import { AuthService } from '../../services/AuthService';

// https://github.com/RafaelAugustoS/react-native-popup-ui

function Register({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const [pickedImagePath, setPickedImagePath] = useState('');
  
  //image picker
  const [cimage, setcimage] = React.useState(null);
  const [pimage, setpimage] = React.useState(null);

  // This function is triggered when the "Select an image" button pressed
  // const profileImage = async () => {
  //   // Ask the user for the permission to access the media library 
  //   const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [1, 1],
  //     quality: 1,
  //   });

  //   if (permissionResult.granted === false) {
  //     alert("You've refused to allow this appp to access your photos!");
  //     return;
  //   }

  //   const result = await ImagePicker.launchImageLibraryAsync();

  //   // Explore the result
  //   console.log(result);

  //   if (!result.cancelled) {
  //     setpimage(result.uri);
  //     console.log(result.uri);
  //   }
  // }

  const coverImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      //aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setcimage(result.uri);
    }
  };
  const profileImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);
    setModalVisible(!modalVisible)

    if (!result.cancelled) {
      setpimage(result.uri);
    }
  };

// This function is triggered when the "Open camera" button pressed. used for setting the profile picture
const openCamera = async () => {
  // Ask the user for the permission to access the camera
  const permissionResult = await ImagePicker.requestCameraPermissionsAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      cropping: true
  });

  if (permissionResult.granted === false) {
    alert("You've refused to allow this appp to access your camera!");
    return;
  }

  const result = await ImagePicker.launchCameraAsync();

  // Explore the result
  console.log(result);

  if (!result.cancelled) {
    setpimage(result.uri);
    console.log(result.uri);
    setModalVisible(!modalVisible)
  }
}

  // https://www.youtube.com/watch?v=PEJcjbhhHeg
  const [data, setData] = React.useState({
    name: '',
    email: '',
    phoneNo: '',
    location: '',
    username: '',
    password: '',
    description:'',
    secureTextEntry: true,
    isValidName: true,
    isValidEmail: true,
    isValidPhone: true,
    isValidLocation: true,
    isValidUsername: true,
    isValidPassword: true,
    check_textInputChangeName: false,
    check_textInputChangeEmail: false,
    check_textInputChangePhone: false,
    check_textInputChangeLocation: false,
    check_textInputChangeUsername: false,
    check_textInputChangePassword: false,
  });

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });

    const userdata = {
      name: data.name,
      email: data.email,
      phone: data.phoneNo,
      location: data.location,
      username: data.username,
      userType: "Customer",
      password: data.password,
      profile_img:"test",
      cover_img:"test",
      description:"test",
      userCategories:["Pets", "Law", "Environment", "Photography"]
    }

    console.log(userdata);

    AuthService.register(userdata).then((res)=>{
      console.log(res.data);
      navigation.navigate('Login');
    }).catch((error)=>{
      console.log(error);
    });
  };

  //name validation
  const textInputChangeName = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        name: val,
        check_textInputChangeName: true,
        isValidName: true,
      });
    } else {
      setData({
        ...data,
        name: val,
        check_textInputChangeName: false,
        isValidName: false,
      });
    }
  };
  const handleValidName = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidName: true,
      });
    } else {
      setData({
        ...data,
        isValidName: false,
      });
    }
  };

    //name validation
    const textInputChangeAboutMe = (val) => {
      if (val.trim().length >= 4) {
        setData({
          ...data,
          name: val,
          check_textInputChangeName: true,
          isValidName: true,
        });
      } else {
        setData({
          ...data,
          name: val,
          check_textInputChangeName: false,
          isValidName: false,
        });
      }
    };
    const handleValidAboutMe = (val) => {
      if (val.trim().length >= 4) {
        setData({
          ...data,
          isValidName: true,
        });
      } else {
        setData({
          ...data,
          isValidName: false,
        });
      }
    };

  //email validation
  // onChangeText={(val) => textInputChangeEmail(val)}
  //                       onEndEditing={(e)=>handleValidEmail(e.nativeEvent.text)}
  function emailCheck(val) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(val).toLowerCase());
}
  const textInputChangeEmail = (val) => {
    if (val.trim().length >= 3) {
      setData({
        ...data,
        email: val,
        check_textInputChangeEmail: true,
        isValidEmail: true,
      });
    } 
    else if (emailCheck(val)) {
      setData({
        ...data,
        email: val,
        check_textInputChangeEmail: true,
        isValidEmail: true,
      });
    }
    else {
      setData({
        ...data,
        email: val,
        check_textInputChangeEmail: false,
        isValidEmail: false,
      });
    }
  };
  const handleValidEmail = (val) => {
    if (val.trim().length >= 3) {
      setData({
        ...data,
        isValidEmail: true,
      });
    } else {
      setData({
        ...data,
        isValidEmail: false,
      });
    }
  };

  //location validation
  const textInputChangeLocation = (val) => {
    if (val.trim().length != 0) {
      setData({
        ...data,
        location: val,
        check_textInputChangeEmail: true,
        isValidLocation: true,
      });
    } else {
      setData({
        ...data,
        location: val,
        check_textInputChangeEmail: false,
        isValidLocation: false,
      });
    }
  };
  const handleValidLocation = (val) => {
    if (val.trim().length != 0) {
      setData({
        ...data,
        isValidLocation: true,
      });
    } else {
      setData({
        ...data,
        isValidLocation: false,
      });
    }
  };

  //phone validation
  const textInputChangePhone = (val) => {
    if (val.trim().length == 10) {
      setData({
        ...data,
        phoneNo: val,
        check_textInputChangePhone: true,
        isValidPhone: true,
      });
    } else {
      setData({
        ...data,
        phoneNo: val,
        check_textInputChangePhone: false,
        isValidPhone: false,
      });
    }
  };
  const handleValidPhone = (val) => {
    if (val.trim().length == 10) {
      setData({
        ...data,
        isValidPhone: true,
      });
    } else {
      setData({
        ...data,
        isValidPhone: false,
      });
    }
  };

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

        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
           <View style={{ flex: 1, justifyContent: "center",  }}>
            <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity style={styles.panelButton} onPress={openCamera} >
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton} onPress={profileImage}>
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton} onPress={() => setModalVisible(!modalVisible)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
    </View>
      </Modal>


      <ImageBackground
        source={require('./../../assets/images/blob-scene-haikei.png')}
        resizeMode="cover"
        style={styles.image}
        imageStyle={styles.image_imageStyle}>
        <FlatList
          showsVerticalScrollIndicator={true}
          ListHeaderComponent={
            <View>
              {/* back button */}
              <TouchableOpacity
                style={styles.backBtn}
                onPress={() => navigation.goBack()}>
                <SimpleLineIconsIcon
                  name="arrow-left"
                  style={styles.backIcon}></SimpleLineIconsIcon>
              </TouchableOpacity>

              <Text style={styles.text1}>
                Hello! Welcome to Quiky App. Get registered and explore what you
                want.
              </Text>
              <Text style={styles.text2}>Let&#39;s get Started!</Text>

              {/* registration form box */}
              <View style={styles.rect}>
                {/* cover and profile picture */}
                <View style={styles.coverImageStack}>
                  <TouchableOpacity style={styles.coverImage} onPress={coverImage}>
                    <MaterialCommunityIconsIcon name="image-plus" style={styles.addCoverPhotoIcon}></MaterialCommunityIconsIcon>
                    <View style={styles.buttonContainer}>
        {/* <Button onPress={showImagePicker} title="Select an image" />
        <Button onPress={openCamera} title="Open camera" /> */}
         
      </View>

      {/* <View style={styles.imageContainer}>
        {
          pickedImagePath !== '' && <Image
            source={{ uri: pickedImagePath }}
            style={styles.image}
          />
        }
      </View> */}
                    {cimage && (
                      <Image
                        source={{ uri: cimage }}
                        resizeMode="cover"
                        style={{
                          right: 0,
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: 154,
                          borderRadius: 20,
                        }}
                      />
                    )}
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={styles.proPicCircle} onPress={() => setModalVisible(true)}>
                    <EntypoIcon name="camera" style={styles.camIcon}></EntypoIcon>
                    {pimage && (
                      <Image
                        source={{ uri: pimage,  }}
                        resizeMode="cover" 
                        style={{
                          right: 0,
                          top: 0,
                          left: 0,
                          width: 110,
                          height: 110,
                          borderRadius: 50,
                          position: 'absolute',
                        }}
                      />
                    )}
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.namelbl}>Name *</Text>
                  {data.isValidName ? null : (<Text style={styles.errMsg}>Enter the valid name</Text>)}
                </View>
                <View style={styles.nameView}>
                  <TextInput
                    placeholder=""
                    placeholderTextColor="rgba(230, 230, 230,1)"
                    selectionColor="rgba(255,255,255,1)"
                    returnKeyType="next"
                    clearButtonMode="while-editing"
                    autoCapitalize="sentences"
                    // onSubmitEditing={() => { this.secondTextInput.focus(); }}
                    blurOnSubmit={false}
                    onChangeText={(val) => textInputChangeName(val)}
                    onEndEditing={(e) => handleValidName(e.nativeEvent.text)}
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
                    // ref={(input) => { secondTextInput = input; }}
                    blurOnSubmit={false}
                    // onSubmitEditing={() => { this.thirdTextInput.focus(); }}
                    multiline={true}
                    style={styles.aboutMetxt}></TextInput>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.emaillbl}>Email *</Text>
                  {data.isValidEmail ? null : ( <Text style={styles.errMsg}>Invalid Email</Text>)}
                </View>
                <View style={styles.emailView}>
                  <TextInput
                    placeholder=""
                    placeholderTextColor="rgba(230, 230, 230,1)"
                    selectionColor="rgba(255,255,255,1)"
                    returnKeyType="next"
                    clearButtonMode="while-editing"
                    autoCapitalize="none"
                    // ref={(input) => { this.thirdTextInput = input; }}
                    // onSubmitEditing={() => { this.forthTextInput.focus(); }}
                    blurOnSubmit={false}
                    keyboardType="email-address"
                    onChangeText={(val) => textInputChangeEmail(val)}
                    onEndEditing={(e) => handleValidEmail(e.nativeEvent.text)}
                    style={styles.emailtxt}></TextInput>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.phoneNolbl}>Phone Number *</Text>
                  {data.isValidPhone ? null : ( <Text style={styles.errMsg}>Invalid Phone number</Text>)}
                </View>
                <View style={styles.phoneNoView}>
                  <TextInput
                    placeholder=""
                    placeholderTextColor="rgba(230, 230, 230,1)"
                    selectionColor="rgba(255,255,255,1)"
                    returnKeyType="next"
                    clearButtonMode="while-editing"
                    // ref={(input) => { this.forthTextInput = input; }}
                    // onSubmitEditing={() => { this.fifthTextInput.focus(); }}
                    blurOnSubmit={false}
                    keyboardType="phone-pad"
                    onChangeText={(val) => textInputChangePhone(val)}
                    onEndEditing={(e) => handleValidPhone(e.nativeEvent.text)}
                    style={styles.phoneNotxt}></TextInput>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.locationlbl}>Location *</Text>
                  {data.isValidLocation ? null : ( <Text style={styles.errMsg}>Invalid Location</Text>)}
                </View>
                <View style={styles.locationView}>
                  <TextInput
                    placeholder=""
                    placeholderTextColor="rgba(230, 230, 230,1)"
                    selectionColor="rgba(255,255,255,1)"
                    returnKeyType="next"
                    clearButtonMode="while-editing"
                    autoCapitalize="none"
                    // ref={(input) => { this.fifthTextInput = input; }}
                    // onSubmitEditing={() => { this.sixthTextInput.focus(); }}
                    blurOnSubmit={false}
                    onChangeText={(val) => textInputChangeLocation(val)}
                    onEndEditing={(e) =>
                      handleValidLocation(e.nativeEvent.text)
                    }
                    style={styles.locationtxt}></TextInput>
                  <EntypoIcon
                    name="location-pin"
                    style={styles.locationIcon}></EntypoIcon>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.usernamelbl}>Username *</Text>
                  {data.isValidUsername ? null : (<Text style={styles.errMsg}>Invalid Username</Text> )}
                </View>
                <View style={styles.usernameView}>
                  <TextInput
                    placeholder=""
                    placeholderTextColor="rgba(230, 230, 230,1)"
                    selectionColor="rgba(255,255,255,1)"
                    returnKeyType="next"
                    clearButtonMode="while-editing"
                    autoCapitalize="none"
                    // ref={(input) => { this.sixthTextInput = input; }}
                    // onSubmitEditing={() => { this.seventhTextInput.focus(); }}
                    blurOnSubmit={false}
                    onChangeText={(val) => textInputChangeUsername(val)}
                    onEndEditing={(e) =>
                      handleValidUsername(e.nativeEvent.text)
                    }
                    style={styles.usernametxt}></TextInput>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.passwordlbl}>Password *</Text>
                  {data.isValidPassword ? null : ( <Text style={styles.errMsg}>Password must be 6 characters long</Text>)}
                </View>
                <View style={styles.passwordView}>
                  <TextInput
                    placeholder=""
                    placeholderTextColor="rgba(230, 230, 230,1)"
                    selectionColor="rgba(255,255,255,1)"
                    returnKeyType="done"
                    clearButtonMode="while-editing"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    autoCapitalize="none"
                    // ref={(input) => { this.seventhTextInput = input; }}
                    blurOnSubmit={false}
                    onChangeText={(val) => textInputChangePassword(val)}
                    onEndEditing={(e) =>
                      handleValidPassword(e.nativeEvent.text)
                    }
                    style={styles.passwordtxt}></TextInput>
                  <TouchableOpacity
                    style={styles.showPassword}
                    onPress={updateSecureTextEntry}>
                    <Image
                      source={
                        data.secureTextEntry ? icons.eye_close : icons.eye
                      }
                      style={styles.showPasswordIcon}
                    />
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  style={styles.signInBtn}
                  onPress={updateSecureTextEntry}>
                  <Text style={styles.signIn}>Create Account</Text>
                </TouchableOpacity>

                <Text style={styles.text3}>
                  By creating account, you agree to our {'\n'}Terms and
                  Conditions.
                </Text>

                <View style={styles.goToSignIn}>
                  <Text style={styles.text4}>Already have an account?</Text>
                  <TouchableOpacity
                    onPressIn={() => navigation.navigate('Login')}>
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
    marginTop: 230,
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
    marginTop: 10,
    position: 'absolute',
    alignItems: 'flex-end',
    right: 10,
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
    marginTop: 16,
    marginHorizontal: 16,
  },
  namelbl: {
    fontFamily: 'poppinsregular',
    color: 'rgba(170,170,170,1)',
    height: 21,
    marginTop: 25,
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
    paddingVertical: 7,
  },
  aboutMetxt: {
    textAlignVertical: 'top',
    fontFamily: 'poppinsregular',
    color: 'rgba(255,255,255,1)',
    height: 146,
    marginLeft: 12,
    marginRight: 16,
    marginVertical: 3,
  },
  emaillbl: {
    fontFamily: 'poppinsregular',
    color: 'rgba(170,170,170,1)',
    height: 21,
    marginTop: 25,
    marginLeft: 28,
  },
  errMsg: {
    color: 'red',
    fontFamily: 'poppinsregular',
    fontSize: 10,
    marginTop: 25,
    marginRight: 28,
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
    //marginRight: 14,
  },
  phoneNolbl: {
    fontFamily: 'poppinsregular',
    color: 'rgba(170,170,170,1)',
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
  showPassword: {
    marginRight: 14,
    height: 43,
    width: 35,
  },
  showPasswordIcon: {
    fontSize: 15,
    width: 16,
    height: 16,
    marginLeft: 16,
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
  goToSignIn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 31,
  },
  text4: {
    fontFamily: 'poppinsregular',
    color: 'rgba(170,170,170,1)',
    fontSize: 12,
    marginRight: 7,
  },
  signInText: {
    fontFamily: 'poppinsregular',
    color: 'rgba(156,141,240,1)',
    fontSize: 12,
    textDecorationLine: 'underline',
  },
  backBtn: {
    top: 20,
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
    top: 100,
    left: 37,
    position: 'absolute',
    fontFamily: 'poppinsregular',
    color: 'rgba(255,255,255,1)',
    right: 32,
  },
  text2: {
    top: 150,
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
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 20,
    marginHorizontal:15,
  }, 
  panelTitle: {
    fontSize: 27,
    height: 35,
    fontFamily: 'poppinsregular',
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
    fontFamily: 'poppinsregular',
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: 'rgba(123,0,255,1)',
    alignItems: 'center',
    marginVertical: 7,
    marginHorizontal:10, 
  },
  panelButtonTitle: {
    fontSize: 15,
    color: 'white',
    fontFamily: 'poppins700',
    letterSpacing:0.2
  },
});

export default Register;
