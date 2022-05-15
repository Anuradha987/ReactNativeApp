import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { icons, dummyData,} from '../constants';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

const Notification = () => {
  const navigation = useNavigation();

  //poppins insert
  const [loaded] = useFonts({
    poppinsregular: require('./../assets/fonts/Poppins-Regular.ttf'),
    poppins700: require('./../assets/fonts/poppins-700.ttf'),
  });

  // if (!loaded) {
  //   return null;
  // }
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
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" style={styles.backIcon}></Icon>
        </TouchableOpacity>
        <Text style={styles.title}>REQUEST DETAILS</Text>
      </View>

      <LinearGradient
        start={{ x: 0, y: 0.5 }}
        end={{ x: 0, y: 0 }}
        colors={['transparent', 'rgba(19,18,18,1)']}
        style={{ left: 0, right: 0, height: 15 }}
      />

      {/* content */}


    </View>)
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(21,31,40,1)',
  },
  header: {
    height: 50,
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
  },  backIcon: {
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
  title: {
    fontFamily: 'poppins700',
    textAlign: 'center',
    marginLeft: 60,
    marginTop: 7,
    color: '#9c8df0',
    fontSize: 17,
    letterSpacing: 0,
  },
});

export default Notification;
