import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Image, Text, FlatList,  Dimensions, TouchableOpacity } from "react-native";
import { useFonts } from 'expo-font';
import dummyData from '../constants/dummyData'
const windowHeight = Dimensions.get('screen').height;
const windowWidth = Dimensions.get('window').width;

function Categories(props) {
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

      <View style={styles.backBtnRow}>
        <View style={styles.backBtn}></View>
        <Text style={styles.text}>Categories</Text>
      </View>

      <View style={styles.scrollArea}>
        <FlatList showsVerticalScrollIndicator={true} 
        ListHeaderComponent={
          <View>
            <FlatList
              onPress={()=>{}}
              columnWrapperStyle={{ justifyContent: 'space-between', marginHorizontal:20,  }}
              data={dummyData.categories}
              keyExtractor={(item) => `${item.id}`}
              showsHorizontalScrollIndicator={true}
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
    top: 40,
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
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    marginLeft: -20,
    marginTop: 10, 
    flex: 1, alignItems: 'center',
  },
  backBtnRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15, 
    textAlign:'center', 
  },
  backBtn: {
    width: 40,
    height: 40,
    backgroundColor: "#E6E6E6"
  },
});

export default Categories;
