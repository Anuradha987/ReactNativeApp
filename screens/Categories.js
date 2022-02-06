import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Image, Text, FlatList } from "react-native";
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
// <ScrollView
//           contentContainerStyle={styles.scrollArea_contentContainerStyle}
//         >
function Categories(props) {
  return (
    <View style={styles.container}>
      <View style={styles.scrollArea}>
        <FlatList showsVerticalScrollIndicator={true} style={styles.scrollArea_contentContainerStyle} vertical
        ListHeaderComponent={
          <View>
          <View style={styles.agricultureCircleRowRow}>
            <View style={styles.agricultureCircleRow}>
              <View style={styles.agricultureCircle}>
                <Image
                  source={require("../assets/icons/Agricultural.png")}
                  resizeMode="contain"
                  style={styles.agricultureIcon}
                ></Image>
              </View>
              <View style={styles.businessCircle}>
                <Image
                  source={require("../assets/icons/business.png")}
                  resizeMode="contain"
                  style={styles.businessIcon}
                ></Image>
              </View>
            </View>
            <View style={styles.agricultureCircleRowFiller}></View>
            <View style={styles.clothingCircle}>
              <View style={styles.clothingIconFiller}></View>
              <Image
                source={require("../assets/icons/Clothes.png")}
                resizeMode="contain"
                style={styles.clothingIcon}
              ></Image>
            </View>
          </View>
          <View style={styles.agricultureRowRow}>
            <View style={styles.agricultureRow}>
              <Text style={styles.agriculture}>Agriculture</Text>
              <Text style={styles.businessFinance}>Business &amp; Finance</Text>
            </View>
            <View style={styles.agricultureRowFiller}></View>
            <Text style={styles.clothingFashion}>Clothing &amp; Fashion</Text>
          </View>
          <View style={styles.computingCircleRowRow}>
            <View style={styles.computingCircleRow}>
              <View style={styles.computingCircle}>
                <Image
                  source={require("../assets/icons/computing.png")}
                  resizeMode="contain"
                  style={styles.computingIcon}
                ></Image>
              </View>
              <View style={styles.educationalCircle}>
                <Image
                  source={require("../assets/icons/Education.png")}
                  resizeMode="contain"
                  style={styles.educationalIcon}
                ></Image>
              </View>
            </View>
            <View style={styles.computingCircleRowFiller}></View>
            <View style={styles.electronicsCircle}>
              <View style={styles.electronicIconFiller}></View>
              <Image
                source={require("../assets/icons/Electronics.png")}
                resizeMode="contain"
                style={styles.electronicIcon}
              ></Image>
            </View>
          </View>
          <View style={styles.computingMobileRowRow}>
            <View style={styles.computingMobileRow}>
              <Text style={styles.computingMobile}>Computing&amp; Mobile</Text>
              <Text style={styles.educational}>Educational</Text>
            </View>
            <View style={styles.computingMobileRowFiller}></View>
            <Text style={styles.electronicsElectrics}>
              Electronics &amp; Electrics
            </Text>
          </View>
          <View style={styles.entertainmentCircleRowRow}>
            <View style={styles.entertainmentCircleRow}>
              <View style={styles.entertainmentCircle}>
                <Image
                  source={require("../assets/icons/Entertainment.png")}
                  resizeMode="contain"
                  style={styles.entertainmentIcon}
                ></Image>
              </View>
              <View style={styles.environmentCircle}>
                <Image
                  source={require("../assets/icons/Environment.png")}
                  resizeMode="contain"
                  style={styles.environmentIcon}
                ></Image>
              </View>
            </View>
            <View style={styles.entertainmentCircleRowFiller}></View>
            <View style={styles.foodCircle}>
              <View style={styles.foodIconFiller}></View>
              <Image
                source={require("../assets/icons/foods.png")}
                resizeMode="contain"
                style={styles.foodIcon}
              ></Image>
            </View>
          </View>
          <View style={styles.entertainmentRowRow}>
            <View style={styles.entertainmentRow}>
              <Text style={styles.entertainment}>Entertainment</Text>
              <Text style={styles.environment}>Environment</Text>
            </View>
            <View style={styles.entertainmentRowFiller}></View>
            <Text style={styles.foodDrinks}>Food &amp; Drinks</Text>
          </View>
          <View style={styles.healthCircleRowRow}>
            <View style={styles.healthCircleRow}>
              <View style={styles.healthCircle}>
                <Image
                  source={require("../assets/icons/Health.png")}
                  resizeMode="contain"
                  style={styles.healthIcon}
                ></Image>
              </View>
              <View style={styles.homeCircle}>
                <Image
                  source={require("../assets/icons/homeGarden.png")}
                  resizeMode="contain"
                  style={styles.homeIcon}
                ></Image>
              </View>
            </View>
            <View style={styles.healthCircleRowFiller}></View>
            <View style={styles.kidsCircle}>
              <View style={styles.kidsIconFiller}></View>
              <Image
                source={require("../assets/icons/Kids.png")}
                resizeMode="contain"
                style={styles.kidsIcon}
              ></Image>
            </View>
          </View>
          <View style={styles.healthMedicationRowRow}>
            <View style={styles.healthMedicationRow}>
              <Text style={styles.healthMedication}>
                Health &amp; Medication
              </Text>
              <Text style={styles.homeGardening}>Home &amp; Gardening</Text>
            </View>
            <View style={styles.healthMedicationRowFiller}></View>
            <Text style={styles.kids}>Kids</Text>
          </View>
          <View style={styles.lawCircleRowRow}>
            <View style={styles.lawCircleRow}>
              <View style={styles.lawCircle}>
                <Image
                  source={require("../assets/icons/Law.png")}
                  resizeMode="contain"
                  style={styles.lawIcon}
                ></Image>
              </View>
              <View style={styles.petsCircle}>
                <Image
                  source={require("../assets/icons/pets.png")}
                  resizeMode="contain"
                  style={styles.petsIcon}
                ></Image>
              </View>
            </View>
            <View style={styles.lawCircleRowFiller}></View>
            <View style={styles.photographyCircle}>
              <View style={styles.photographyIconFiller}></View>
              <Image
                source={require("../assets/icons/photography.png")}
                resizeMode="contain"
                style={styles.photographyIcon}
              ></Image>
            </View>
          </View>
          <View style={styles.lawRow}>
            <Text style={styles.law}>Law</Text>
            <Text style={styles.pets}>Pets</Text>
            <Text style={styles.photography}>Photography</Text>
          </View>
          <View style={styles.sportsCircleRowRow}>
            <View style={styles.sportsCircleRow}>
              <View style={styles.sportsCircle}>
                <Image
                  source={require("../assets/icons/Sports.png")}
                  resizeMode="contain"
                  style={styles.sportsIcon}
                ></Image>
              </View>
              <View style={styles.travellingCircle}>
                <Image
                  source={require("../assets/icons/Traveling.png")}
                  resizeMode="contain"
                  style={styles.travellingIcon}
                ></Image>
              </View>
            </View>
            <View style={styles.sportsCircleRowFiller}></View>
            <View style={styles.otherCircle}>
              <View style={styles.otherIconFiller}></View>
              <Image
                source={require("../assets/icons/other.png")}
                resizeMode="contain"
                style={styles.otherIcon}
              ></Image>
            </View>
          </View>
          <View style={styles.sportsFitnessRowRow}>
            <View style={styles.sportsFitnessRow}>
              <Text style={styles.sportsFitness}>
                Sports &amp;{"\n"}Fitness
              </Text>
              <Text style={styles.travelingVehicles}>
                Traveling &amp; Vehicles
              </Text>
            </View>
            <View style={styles.sportsFitnessRowFiller}></View>
            <Text style={styles.other}>Other</Text>
          </View>
           </View>
        }/>
      </View>
      <View style={styles.backBtnRow}>
        <View style={styles.backBtn}></View>
        <Text style={styles.text}>Categories</Text>
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
    width: 344,
    height: 793,
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 117,
    marginHorizontal: 5
  },
  scrollArea_contentContainerStyle: {
    height: 793,
    width: windowWidth
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
  businessCircle: {
    width: 72,
    height: 72,
    backgroundColor: "rgba(81,81,81,0.69)",
    borderRadius: 36,
    marginLeft: 41
  },
  businessIcon: {
    width: 38,
    height: 38,
    marginTop: 17,
    marginLeft: 17
  },
  agricultureCircleRow: {
    height: 72,
    flexDirection: "row"
  },
  agricultureCircleRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  clothingCircle: {
    width: 72,
    height: 72,
    backgroundColor: "rgba(81,81,81,0.69)",
    borderRadius: 36,
    flexDirection: "row"
  },
  clothingIconFiller: {
    flex: 1,
    flexDirection: "row"
  },
  clothingIcon: {
    width: 38,
    height: 38,
    marginRight: 17,
    marginTop: 17
  },
  agricultureCircleRowRow: {
    height: 72,
    flexDirection: "row",
    marginLeft: 23,
    marginRight: 22,
  },
  agriculture: {
    fontFamily: "poppins-regular",
    color: "rgba(178,178,178,1)",
    fontSize: 11,
    textAlign: "center"
  },
  businessFinance: {
    fontFamily: "poppins-regular",
    color: "rgba(178,178,178,1)",
    fontSize: 11,
    textAlign: "center",
    marginLeft: 44,
    marginTop: 1
  },
  agricultureRow: {
    height: 33,
    flexDirection: "row"
  },
  agricultureRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  clothingFashion: {
    fontFamily: "poppins-regular",
    color: "rgba(178,178,178,1)",
    fontSize: 11,
    textAlign: "center",
    marginTop: 1
  },
  agricultureRowRow: {
    height: 33,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 25,
    marginRight: 23
  },
  computingCircle: {
    width: 72,
    height: 72,
    backgroundColor: "rgba(81,81,81,0.69)",
    borderRadius: 36
  },
  computingIcon: {
    width: 38,
    height: 38,
    marginTop: 17,
    marginLeft: 17
  },
  educationalCircle: {
    width: 72,
    height: 72,
    backgroundColor: "rgba(81,81,81,0.69)",
    borderRadius: 36,
    marginLeft: 41
  },
  educationalIcon: {
    width: 38,
    height: 38,
    marginTop: 17,
    marginLeft: 17
  },
  computingCircleRow: {
    height: 72,
    flexDirection: "row"
  },
  computingCircleRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  electronicsCircle: {
    width: 72,
    height: 72,
    backgroundColor: "rgba(81,81,81,0.69)",
    borderRadius: 36,
    flexDirection: "row"
  },
  electronicIconFiller: {
    flex: 1,
    flexDirection: "row"
  },
  electronicIcon: {
    width: 38,
    height: 38,
    marginRight: 17,
    marginTop: 17
  },
  computingCircleRowRow: {
    height: 72,
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 23,
    marginRight: 22
  },
  computingMobile: {
    fontFamily: "poppins-regular",
    color: "rgba(178,178,178,1)",
    fontSize: 11,
    textAlign: "center"
  },
  educational: {
    fontFamily: "poppins-regular",
    color: "rgba(178,178,178,1)",
    fontSize: 11,
    textAlign: "center",
    marginLeft: 44
  },
  computingMobileRow: {
    height: 32,
    flexDirection: "row"
  },
  computingMobileRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  electronicsElectrics: {
    fontFamily: "poppins-regular",
    color: "rgba(178,178,178,1)",
    fontSize: 11,
    textAlign: "center"
  },
  computingMobileRowRow: {
    height: 32,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 25,
    marginRight: 23
  },
  entertainmentCircle: {
    width: 72,
    height: 72,
    backgroundColor: "rgba(81,81,81,0.69)",
    borderRadius: 36
  },
  entertainmentIcon: {
    width: 38,
    height: 38,
    marginTop: 17,
    marginLeft: 17
  },
  environmentCircle: {
    width: 72,
    height: 72,
    backgroundColor: "rgba(81,81,81,0.69)",
    borderRadius: 36,
    marginLeft: 41
  },
  environmentIcon: {
    width: 38,
    height: 38,
    marginTop: 17,
    marginLeft: 17
  },
  entertainmentCircleRow: {
    height: 72,
    flexDirection: "row"
  },
  entertainmentCircleRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  foodCircle: {
    width: 72,
    height: 72,
    backgroundColor: "rgba(81,81,81,0.69)",
    borderRadius: 36,
    flexDirection: "row"
  },
  foodIconFiller: {
    flex: 1,
    flexDirection: "row"
  },
  foodIcon: {
    width: 38,
    height: 38,
    marginRight: 17,
    marginTop: 17
  },
  entertainmentCircleRowRow: {
    height: 72,
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 23,
    marginRight: 22
  },
  entertainment: {
    fontFamily: "poppins-regular",
    color: "rgba(178,178,178,1)",
    fontSize: 11,
    textAlign: "center"
  },
  environment: {
    fontFamily: "poppins-regular",
    color: "rgba(178,178,178,1)",
    fontSize: 11,
    textAlign: "center",
    marginLeft: 37,
    marginTop: 1
  },
  entertainmentRow: {
    height: 17,
    flexDirection: "row"
  },
  entertainmentRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  foodDrinks: {
    fontFamily: "poppins-regular",
    color: "rgba(178,178,178,1)",
    fontSize: 11,
    textAlign: "center",
    marginTop: 1
  },
  entertainmentRowRow: {
    height: 33,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 23
  },
  healthCircle: {
    width: 72,
    height: 72,
    backgroundColor: "rgba(81,81,81,0.69)",
    borderRadius: 36
  },
  healthIcon: {
    width: 38,
    height: 38,
    marginTop: 17,
    marginLeft: 17
  },
  homeCircle: {
    width: 72,
    height: 72,
    backgroundColor: "rgba(81,81,81,0.69)",
    borderRadius: 36,
    marginLeft: 41
  },
  homeIcon: {
    width: 38,
    height: 38,
    marginTop: 17,
    marginLeft: 17
  },
  healthCircleRow: {
    height: 72,
    flexDirection: "row"
  },
  healthCircleRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  kidsCircle: {
    width: 72,
    height: 72,
    backgroundColor: "rgba(81,81,81,0.69)",
    borderRadius: 36,
    flexDirection: "row"
  },
  kidsIconFiller: {
    flex: 1,
    flexDirection: "row"
  },
  kidsIcon: {
    width: 38,
    height: 38,
    marginRight: 17,
    marginTop: 17
  },
  healthCircleRowRow: {
    height: 72,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 23,
    marginRight: 22
  },
  healthMedication: {
    fontFamily: "poppins-regular",
    color: "rgba(178,178,178,1)",
    fontSize: 11,
    textAlign: "center"
  },
  homeGardening: {
    fontFamily: "poppins-regular",
    color: "rgba(178,178,178,1)",
    fontSize: 11,
    textAlign: "center",
    marginLeft: 45
  },
  healthMedicationRow: {
    height: 32,
    flexDirection: "row"
  },
  healthMedicationRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  kids: {
    fontFamily: "poppins-regular",
    color: "rgba(178,178,178,1)",
    fontSize: 11,
    textAlign: "center"
  },
  healthMedicationRowRow: {
    height: 32,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 25,
    marginRight: 22
  },
  lawCircle: {
    width: 72,
    height: 72,
    backgroundColor: "rgba(81,81,81,0.69)",
    borderRadius: 36
  },
  lawIcon: {
    width: 38,
    height: 38,
    marginTop: 17,
    marginLeft: 17
  },
  petsCircle: {
    width: 72,
    height: 72,
    backgroundColor: "rgba(81,81,81,0.69)",
    borderRadius: 36,
    marginLeft: 41
  },
  petsIcon: {
    width: 38,
    height: 38,
    marginTop: 17,
    marginLeft: 17
  },
  lawCircleRow: {
    height: 72,
    flexDirection: "row"
  },
  lawCircleRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  photographyCircle: {
    width: 72,
    height: 72,
    backgroundColor: "rgba(81,81,81,0.69)",
    borderRadius: 36,
    flexDirection: "row"
  },
  photographyIconFiller: {
    flex: 1,
    flexDirection: "row"
  },
  photographyIcon: {
    width: 38,
    height: 38,
    marginRight: 17,
    marginTop: 17
  },
  lawCircleRowRow: {
    height: 72,
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 23,
    marginRight: 22
  },
  law: {
    fontFamily: "poppins-regular",
    color: "rgba(178,178,178,1)",
    fontSize: 11,
    textAlign: "center"
  },
  pets: {
    fontFamily: "poppins-regular",
    color: "rgba(178,178,178,1)",
    fontSize: 11,
    textAlign: "center",
    marginLeft: 46
  },
  photography: {
    fontFamily: "poppins-regular",
    color: "rgba(178,178,178,1)",
    fontSize: 11,
    textAlign: "center",
    marginLeft: 36
  },
  lawRow: {
    height: 16,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 25,
    marginRight: 23
  },
  sportsCircle: {
    width: 72,
    height: 72,
    backgroundColor: "rgba(81,81,81,0.69)",
    borderRadius: 36
  },
  sportsIcon: {
    width: 38,
    height: 38,
    marginTop: 17,
    marginLeft: 17
  },
  travellingCircle: {
    width: 72,
    height: 72,
    backgroundColor: "rgba(81,81,81,0.69)",
    borderRadius: 36,
    marginLeft: 41
  },
  travellingIcon: {
    width: 38,
    height: 38,
    marginTop: 17,
    marginLeft: 17
  },
  sportsCircleRow: {
    height: 72,
    flexDirection: "row"
  },
  sportsCircleRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  otherCircle: {
    width: 72,
    height: 72,
    backgroundColor: "rgba(81,81,81,0.69)",
    borderRadius: 36,
    flexDirection: "row"
  },
  otherIconFiller: {
    flex: 1,
    flexDirection: "row"
  },
  otherIcon: {
    width: 38,
    height: 38,
    marginRight: 17,
    marginTop: 17
  },
  sportsCircleRowRow: {
    height: 72,
    flexDirection: "row",
    marginTop: 31,
    marginLeft: 23,
    marginRight: 22
  },
  sportsFitness: {
    fontFamily: "poppins-regular",
    color: "rgba(178,178,178,1)",
    fontSize: 11,
    textAlign: "center"
  },
  travelingVehicles: {
    fontFamily: "poppins-regular",
    color: "rgba(178,178,178,1)",
    fontSize: 11,
    textAlign: "center",
    marginLeft: 46
  },
  sportsFitnessRow: {
    height: 32,
    flexDirection: "row"
  },
  sportsFitnessRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  other: {
    fontFamily: "poppins-regular",
    color: "rgba(178,178,178,1)",
    fontSize: 11,
    textAlign: "center"
  },
  sportsFitnessRowRow: {
    height: 32,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 25,
    marginRight: 24
  },
  backBtn: {
    width: 40,
    height: 40,
    backgroundColor: "#E6E6E6"
  },
  text: {
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    marginLeft: -10,
    marginTop: 10, 
    flex: 1, alignItems: 'center',
  },
  backBtnRow: {
    height: 40,
    flexDirection: "row",
    marginTop: -873,
    marginLeft: 15,
    marginRight: 15, 
    textAlign:'center', 
    // flex:1
  }
});

export default Categories;
