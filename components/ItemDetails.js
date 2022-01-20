import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";

function ItemDetails(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <View style={styles.imageRow}>
        <Image
          source={require("../assets/images/shoes1.jpg")}
          resizeMode="cover"
          style={styles.image}
        ></Image>
        <View style={styles.reqTitle1Column}>
          <Text style={styles.reqTitle1}>UMYOGO Women&#39;s Runni...</Text>
          <Text style={styles.sportsFitness}>Sports &amp; Fitness</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(65,58,100,1)",
    borderRadius: 20,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 2
    },
    elevation: 18,
    shadowOpacity: 0.83,
    shadowRadius: 6
  },
  image: {
    width: 126,
    height: 126,
    borderRadius: 20
  },
  reqTitle1: {
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    textAlign: "right"
  },
  sportsFitness: {
    fontFamily: "poppins-regular",
    color: "#121212",
    textAlign: "right",
    marginTop: 5,
    marginLeft: 53
  },
  reqTitle1Column: {
    width: 212,
    marginLeft: 6,
    marginTop: 81,
    marginBottom: 4
  },
  imageRow: {
    height: 126,
    flexDirection: "row",
    marginTop: -61
  }
});

export default ItemDetails;
