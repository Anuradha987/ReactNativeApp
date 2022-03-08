import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Image, Text, FlatList,  Dimensions, TouchableOpacity } from "react-native";
import { useFonts } from 'expo-font';
import dummyData from '../constants/dummyData'
const windowHeight = Dimensions.get('screen').height;
const windowWidth = Dimensions.get('window').width;
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { LinearGradient } from 'expo-linear-gradient';
import CrossIcon from "react-native-vector-icons/EvilIcons";

function Categories({navigation}) {
    //poppins insert
  const [loaded] = useFonts({
    poppinsregular: require('../assets/fonts/Poppins-Regular.ttf'),
    poppins700: require('../assets/fonts/poppins-700.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>

{/* header */}
      <View style={styles.header}>
      <TouchableOpacity style={styles.backBtn}
                  onPress={() => navigation.goBack()}>
                  <Icon name="arrow-left" style={styles.backIcon}></Icon>
      </TouchableOpacity>
        <Text style={styles.text}>Categories</Text>
      <TouchableOpacity style={styles.closeBtn}
                onPress={() => {}}>
                <CrossIcon name="close" style={styles.closeIcon}></CrossIcon>
    </TouchableOpacity>  
      </View>

      <LinearGradient  start = {{ x:0 , y:0.5 }} end = {{ x:0 , y:0 }}
                      colors={['transparent', 'rgba(19,18,18,1)']}
                        style= {{ left:0, right:0, height:15, }}
      />

{/* container */}
      <View style={styles.scrollArea}>
        <FlatList showsVerticalScrollIndicator={true} 
        ListHeaderComponent={
          <View>
            <FlatList
              onPress={()=>{}}
              columnWrapperStyle={{ justifyContent: 'space-between', marginHorizontal:20,  }}
              data={dummyData.categories}
              keyExtractor={(item) => `${item.id}`}
              showsVerticalScrollIndicator={true}
              numColumns={3}
              renderItem={({ item, index }) => {
                return (
                <View>
                  <View style={styles.agricultureCircleRowRow}>
                    <View style={styles.agricultureCircleRow}>
                      <TouchableOpacity style={styles.agricultureCircle}>
                        <Image
                          source={item.icon}
                          resizeMode="contain"
                          style={styles.agricultureIcon}
                        ></Image>
                      </TouchableOpacity> 
                    </View> 
                  </View>

                  <View style={styles.agricultureRowRow}>
                    <View style={styles.agricultureRow}>
                      <Text style={styles.agriculture}>{item.name}</Text>
                    </View>
                  </View>
                </View>                  
            )}}/>
          </View>
              }/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21,31,40,1)"
  },
  scrollArea: {

    width: windowWidth,
    borderWidth: 0,
    borderColor: "#000000",
    top: 10,
    marginBottom:100,
  },
  agricultureCircle: {
    width: 72,
    height: 72,
    backgroundColor: "rgba(81,81,81,0.69)",
    borderRadius: 36
  },
  agricultureIcon: {
    width: 38,
    height: 38,
    marginTop: 17,
    marginLeft: 17
  },
  agricultureCircleRow: {
    height: 72,
    flexDirection: "row"
  },
  agricultureCircleRowRow: {
    height: 72,
    flexDirection: "row",
    marginHorizontal: 0,
    justifyContent:'center', 

  },
  agriculture: {
    fontFamily: "poppinsregular",
    color: "rgba(178,178,178,1)",
    fontSize: 11,
    textAlign: "center"
  },
  agricultureRow: {
    height: 33,
    flexDirection: "row"
  },
  agricultureRowRow: {
    height: 33,
    flexDirection: "row",
    marginTop: 10,
    marginBottom:15,
    marginHorizontal: 2, 
    width:100, 
    alignItems:'center', 
    textAlign:'center', 
    justifyContent:'center', 
  },
  text: {
    fontFamily: "poppins700",
    color: '#9c8df0',
    textAlign: "center",
    //marginLeft: -30,
    marginTop: 7, 
    flex: 1,
    fontSize: 17,
    alignItems: 'center',
  },
  closeBtn: {
    width: 40,
    height: 40,
    marginTop: 0,
    marginLeft: 10,
    alignItems: 'center', 
    justifyContent: 'center', 
    borderWidth: 1, 
    borderColor:'#BBBDC1', 
    borderRadius: 12, 
  },
  closeIcon: {
    color: '#BBBDC1', 
    fontSize: 20,
    fontSize: 30,
  },
  header: {
    height: 50,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15, 
    textAlign:'center', 
  },
  backBtn: {
    width: 40,
    height: 40,
    marginTop: 0,
    marginLeft: 10,
    alignItems: 'center', 
    justifyContent: 'center', 
    borderWidth: 1, 
    borderColor:'#BBBDC1', 
    borderRadius: 12, 
  },
  backIcon:{
    color: '#BBBDC1', 
    fontSize: 20,
    marginRight:2
  },
});

export default Categories;
