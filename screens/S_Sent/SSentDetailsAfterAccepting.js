import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import FeatherIcon from "react-native-vector-icons/Feather";

function SSentDetailsAfterAccepting(props) {
  return (
    <View style={styles.container}>
      <View style={styles.backBtn1Row}>
        <View style={styles.backBtn1}></View>
        <Text style={styles.servicesRequest}>Services Request</Text>
      </View>
      <View style={styles.scrollAreaStack}>
        <View style={styles.scrollArea}>
          <ScrollView
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <Text style={styles.reqTitle}>Preparing Birthday Cake.</Text>
            <View style={styles.cateIconStackStack}>
              <View style={styles.cateIconStack}>
                <EntypoIcon name="home" style={styles.cateIcon}></EntypoIcon>
                <Text style={styles.reqDescription}>
                  A small description about the request.Just click on a symbol
                  to copy any check mark or any tick to the clipboard and then
                  paste them where ever you like. The tick &amp; check mark
                  symbols are often used.
                </Text>
              </View>
              <Text style={styles.cateName}>Home &amp; Garden</Text>
            </View>
            <View style={styles.prioritylblRow}>
              <Text style={styles.prioritylbl}>Priority :</Text>
              <View style={styles.priorityColor}></View>
              <Text style={styles.priorityLevel}>Medium</Text>
            </View>
            <View style={styles.tolblRow}>
              <Text style={styles.tolbl}>To :</Text>
              <Text style={styles.toWhome}>Public</Text>
            </View>
            <Text style={styles.attachmentslbl}>Attachments:</Text>
            <View style={styles.attachFiles}></View>
            <View style={styles.group2Stack}>
              <View style={styles.group2}>
                <Text style={styles.statuslbl}>Status :</Text>
                <Text style={styles.viewslbl}>Views :</Text>
              </View>
              <Text style={styles.status}>17</Text>
              <Text style={styles.completed2}>Completed</Text>
            </View>
            <View style={styles.group1Row}>
              <View style={styles.group1}>
                <Text style={styles.postedDatelbl}>Posted Date :</Text>
                <Text style={styles.acceptedBylbl}>Accepted By :</Text>
                <Text style={styles.acceptedOnlbl}>Accepted On :</Text>
                <Text style={styles.completedOnlbl}>Completed On :</Text>
              </View>
              <View style={styles.postedDateColumn}>
                <Text style={styles.postedDate}>20/12/2021</Text>
                <Text style={styles.acceptedBy}>Manoja Gamage</Text>
                <Text style={styles.acceptedDate}>22/12/2021</Text>
                <Text style={styles.completedDate}>27/12/2021</Text>
              </View>
            </View>
          </ScrollView>
        </View>


        <ImageBackground
          style={styles.ratingPanel}
          imageStyle={styles.ratingPanel_imageStyle}
          source={require("./../../assets/images/Gradient_KeixSfJ.png")}
        >
          <View style={styles.imageRow}>
            <Image
              source={require("./../../assets/images/Nithya-V-Raman-1-e1346782184198.jpg")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <View style={styles.imageFiller}></View>
            <EvilIconsIcon name="close" style={styles.closeBtn}></EvilIconsIcon>
          </View>
          <Text style={styles.loremIpsum1}>What&#39;s your opinion about</Text>
          <Text style={styles.acceptedUserName1}>
            Manoja Gamage &#39;s service?
          </Text>
          <View style={styles.rect}>
            <FeatherIcon name="star" style={styles.star1}></FeatherIcon>
            <FeatherIcon name="star" style={styles.star2}></FeatherIcon>
            <FeatherIcon name="star" style={styles.star3}></FeatherIcon>
            <FeatherIcon name="star" style={styles.star4}></FeatherIcon>
            <FeatherIcon name="star" style={styles.star5}></FeatherIcon>
          </View>
        </ImageBackground>


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(15,30,69,1)"
  },
  backBtn1: {
    width: 40,
    height: 40,
    backgroundColor: "#E6E6E6"
  },
  servicesRequest: {
    fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    marginLeft: 22,
    marginTop: 10
  },
  backBtn1Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 37,
    marginLeft: 15,
    marginRight: 76
  },
  scrollArea: {
    left: 0,
    height: 969,
    position: "absolute",
    right: 0,
    top: 0,
    backgroundColor: "rgba(15,30,69,1)"
  },
  scrollArea_contentContainerStyle: {
    height: 969
  },
  reqTitle: {
    fontFamily: "poppins-regular",
    color: "rgba(216,148,255,1)",
    fontSize: 20,
    marginTop: 26,
    marginLeft: 26
  },
  cateIcon: {
    top: 129,
    left: 15,
    position: "absolute",
    color: "rgba(220,162,76,1)",
    fontSize: 18,
    height: 20,
    width: 18
  },
  reqDescription: {
    top: 0,
    position: "absolute",
    fontFamily: "poppins-regular",
    color: "rgba(205,204,204,1)",
    textAlign: "justify",
    left: 0,
    right: 0
  },
  cateIconStack: {
    top: 0,
    left: 0,
    height: 149,
    position: "absolute",
    right: 0
  },
  cateName: {
    top: 132,
    left: 48,
    position: "absolute",
    fontFamily: "poppins-regular",
    color: "rgba(220,162,76,1)",
    fontSize: 14
  },
  cateIconStackStack: {
    height: 153,
    marginTop: 30,
    marginLeft: 26,
    marginRight: 26
  },
  prioritylbl: {
    fontFamily: "poppins-regular",
    color: "rgba(210,205,205,1)"
  },
  priorityColor: {
    width: 14,
    height: 14,
    backgroundColor: "rgba(222,255,0,1)",
    borderRadius: 7,
    marginLeft: 33,
    marginTop: 4
  },
  priorityLevel: {
    fontFamily: "poppins-regular",
    color: "rgba(210,205,205,1)",
    marginLeft: 8
  },
  prioritylblRow: {
    height: 21,
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 60,
    marginRight: 14
  },
  tolbl: {
    fontFamily: "poppins-regular",
    color: "rgba(210,205,205,1)"
  },
  toWhome: {
    fontFamily: "poppins-regular",
    color: "rgba(210,205,205,1)",
    marginLeft: 33
  },
  tolblRow: {
    height: 21,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 61,
    marginRight: 14
  },
  attachmentslbl: {
    fontFamily: "poppins-regular",
    color: "rgba(210,205,205,1)",
    marginTop: 36,
    marginLeft: 31
  },
  attachFiles: {
    height: 91,
    borderWidth: 2,
    borderColor: "rgba(194,163,254,1)",
    marginTop: 12,
    marginLeft: 35,
    marginRight: 38
  },
  group2: {
    top: 0,
    left: 0,
    width: 138,
    height: 52,
    position: "absolute",
    justifyContent: "space-between"
  },
  statuslbl: {
    fontFamily: "poppins-regular",
    color: "rgba(210,205,205,1)",
    width: 138
  },
  viewslbl: {
    fontFamily: "poppins-regular",
    color: "rgba(210,205,205,1)",
    width: 138
  },
  status: {
    top: 33,
    left: 129,
    position: "absolute",
    fontFamily: "poppins-regular",
    color: "rgba(210,205,205,1)"
  },
  completed2: {
    top: 0,
    left: 129,
    position: "absolute",
    fontFamily: "poppins-regular",
    color: "rgba(210,205,205,1)"
  },
  group2Stack: {
    width: 366,
    height: 54,
    marginTop: 63,
    marginLeft: 32
  },
  group1: {
    width: 118,
    height: 128
  },
  postedDatelbl: {
    fontFamily: "poppins-regular",
    color: "rgba(210,205,205,1)",
    height: 21,
    width: 110
  },
  acceptedBylbl: {
    fontFamily: "poppins-regular",
    color: "rgba(210,205,205,1)",
    height: 21,
    width: 110,
    marginTop: 15
  },
  acceptedOnlbl: {
    fontFamily: "poppins-regular",
    color: "rgba(210,205,205,1)",
    height: 21,
    width: 110,
    marginTop: 14
  },
  completedOnlbl: {
    fontFamily: "poppins-regular",
    color: "rgba(210,205,205,1)",
    height: 21,
    width: 110,
    marginTop: 15
  },
  postedDate: {
    fontFamily: "poppins-regular",
    color: "rgba(210,205,205,1)"
  },
  acceptedBy: {
    fontFamily: "poppins-700",
    color: "rgba(210,205,205,1)",
    marginTop: 15
  },
  acceptedDate: {
    fontFamily: "poppins-regular",
    color: "rgba(210,205,205,1)",
    marginTop: 14,
    marginLeft: 1
  },
  completedDate: {
    fontFamily: "poppins-regular",
    color: "rgba(210,205,205,1)",
    marginTop: 15,
    marginLeft: 1
  },
  postedDateColumn: {
    width: 238,
    marginLeft: 11
  },
  group1Row: {
    height: 128,
    flexDirection: "row",
    marginTop: 24,
    marginLeft: 32,
    marginRight: 12
  },
  ratingPanel: {
    top: 794,
    left: 17,
    height: 238,
    position: "absolute",
    borderRadius: 23,
    right: 17,
    overflow: "hidden", 
  },
  ratingPanel_imageStyle: {},
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: 16, 
    alignItems:'center', 
  },
  imageFiller: {
    flex: 1,
    flexDirection: "row", 

  },
  closeBtn: {
    color: "rgba(115,115,115,1)",
    fontSize: 29,
    height: 32,
    width: 29
  },
  imageRow: {
    height: 96,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: '36%',
    marginRight: 12,
  },
  loremIpsum1: {
    fontFamily: "poppins-regular",
    color: "#121212",
    textAlign: "center",
    marginTop: 7,
    marginLeft: 8
  },
  acceptedUserName1: {
    fontFamily: "poppins-700",
    color: "#121212",
    textAlign: "center",
    marginLeft: 12
  },
  rect: {
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 22,
    marginLeft: 65,
    marginRight: 65
  },
  star1: {
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  star2: {
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  star3: {
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  star4: {
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  star5: {
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  scrollAreaStack: {
    height: 1032,
    marginTop: 29
  }
});

export default SSentDetailsAfterAccepting;
