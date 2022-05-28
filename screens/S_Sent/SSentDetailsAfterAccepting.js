import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { Rating, AirbnbRating } from "react-native-ratings";

function SSentDetailsAfterAccepting({ route, navigation }) {
  const { user } = route.params;
  const [modalVisible, setModalVisible] = useState(true);

  const windowWidth = Dimensions.get("window").width;
  const ratingCompleted = (rating) => {
    console.log("Rating is: " + rating);
  };

  //poppins insert
  const [loaded] = useFonts({
    poppinsregular: require("../../assets/fonts/Poppins-Regular.ttf"),
    poppins700: require("../../assets/fonts/poppins-700.ttf"),
  });

  useEffect(() => {
    console.log("SSentDetailsAfterAccepting", user);
  }, []);

  const created_date = new Date(user.created_date);
  const accept_date = new Date(user.created_date);
  const complete_date = new Date(user.created_date);

  return !loaded ? (
    <View
      style={{
        flex: 4,
        backgroundColor: "rgba(21,31,40,1)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* https://github.com/n4kz/react-native-indicators */}
      <ActivityIndicator size="large" />
    </View>
  ) : (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" style={styles.backIcon}></Icon>
        </TouchableOpacity>
        <Text style={styles.servicesRequest}>REQUEST DETAILS</Text>
      </View>

      <LinearGradient
        start={{ x: 0, y: 0.5 }}
        end={{ x: 0, y: 0 }}
        colors={["transparent", "rgba(19,18,18,1)"]}
        style={{ left: 0, right: 0, height: 15 }}
      />
      <FlatList
        listKey="24.1"
        showsVerticalScrollIndicator={true}
        ListHeaderComponent={
          <View>
            {user && (
              <View style={styles.scrollAreaStack}>
                <View style={styles.scrollArea}>
                  <ScrollView
                    contentContainerStyle={
                      styles.scrollArea_contentContainerStyle
                    }
                  >
                    {/* accepted request title and description */}
                    <Text style={styles.reqTitle}>{user.title}</Text>
                    <Text style={styles.reqDescription}>
                     {user.description}
                    </Text>

                    {/* request category */}
                    <View style={styles.requestCategory}>
                      <EntypoIcon
                        name="home"
                        style={styles.cateIcon}
                      ></EntypoIcon>
                      <Text style={styles.cateName}>{user.category}</Text>
                    </View>

                    {/* request priority */}
                    <View style={styles.prioritylblRow}>
                      <Text style={styles.prioritylbl}>Priority :</Text>
                      {user.priority === "High" ? (
                        <View style={styles.high}></View>
                      ) : user.priority === "Medium" ? (
                        <View style={styles.medium}></View>
                      ) : (
                        <View style={styles.low}></View>
                      )}
                      <Text style={styles.priorityLevel}>{user.priority}</Text>
                    </View>

                    {/* to whome? */}
                    <View style={styles.tolblRow}>
                      <Text style={styles.tolbl}>To :</Text>
                      {user.to === "" ? (
                        <Text style={styles.toWhome}>Public</Text>
                      ) : (
                        // <Text style={styles.toWhome}>{user.to.username}</Text>
                        <Text style={styles.toWhome}>yay!</Text>
                      )}
                    </View>

                    {/* <Text style={styles.attachmentslbl}>Attachments:</Text>
                  <View style={styles.attachFiles}></View> */}

                    <View style={styles.group2Stack}>
                      <View style={styles.group2}>
                        <Text style={styles.statuslbl}>Status : </Text>
                        <Text style={styles.viewslbl}>Views :</Text>
                      </View>
                      <Text style={styles.views}>17</Text>
                      <Text style={styles.status}>{user.status}</Text>
                    </View>

                    <View style={styles.group1Row}>
                      <View style={styles.group1}>
                        <Text style={styles.postedDatelbl}>Posted Date :</Text>
                        <Text style={styles.acceptedBylbl}>Accepted By :</Text>
                        {user.accept_date ? <Text style={styles.acceptedOnlbl}>Accepted On :</Text> : null}
                        {user.complete_date ? <Text style={styles.completedOnlbl}>
                          Completed On :
                        </Text> : null}
                      </View>

                      <View style={styles.postedDateColumn}>
                        <Text style={styles.postedDate}>{created_date.toISOString().substring(0, 10)}</Text>
                        <Text style={styles.acceptedBy}>{user.to.username} name</Text>
                        {user.accept_date ? <Text style={styles.acceptedDate}>{accept_date.toISOString().substring(0, 10)}</Text> : null}
                        {user.complete_date ? <Text style={styles.completedDate}>{complete_date.toISOString().substring(0, 10)}</Text> : null}
                      </View>
                    </View>

                    {/* User Rating */}
                    <ImageBackground
                      style={styles.ratingPanel}
                      imageStyle={styles.ratingPanel_imageStyle}
                      source={require("../../assets/images/Gradient_KeixSfJ.png")}
                    >
                      <View style={styles.imageRow}>
                        <Image
                          source={require("../../assets/images/Nithya-V-Raman-1-e1346782184198.jpg")}
                          resizeMode="cover"
                          style={styles.image}
                        ></Image>
                        <View style={styles.imageFiller}></View>
                      </View>
                      <Text style={styles.loremIpsum1}>
                        What&#39;s your opinion about
                      </Text>
                      <Text style={styles.acceptedUserName1}>
                        {user.user_id.username} &#39;s service?
                      </Text>
                      <View style={styles.rect}>
                        <AirbnbRating
                          starContainerStyle={{
                            justifyContent: "space-between",
                            width: 300,
                          }}
                          showRating={false}
                          count={5}
                          defaultRating={0}
                          size={30}
                          onFinishRating={ratingCompleted}
                        />
                      </View>
                    </ImageBackground>
                  </ScrollView>
                </View>
              </View>
            )}
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21,31,40,1)",
  },
  backIcon: {
    color: "#BBBDC1",
    // fontSize: 20,
    marginRight: 2,
  },
  backBtn: {
    width: 40,
    height: 40,
    marginTop: 0,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#BBBDC1",
    borderRadius: 12,
  },
  servicesRequest: {
    fontFamily: "poppins700",
    textAlign: "center",
    marginLeft: 60,
    marginTop: 7,
    color: "#9c8df0",
    fontSize: 17,
    letterSpacing: 0,
  },
  header: {
    height: 50,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  scrollArea: {
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },
  scrollArea_contentContainerStyle: {
    height: 1050,
  },
  reqTitle: {
    fontFamily: "poppinsregular",
    color: "rgba(216,148,255,1)",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 26,
  },
  cateIcon: {
    left: 15,
    position: "absolute",
    color: "rgba(220,162,76,1)",
    fontSize: 18,
    height: 20,
    width: 18,
  },
  reqDescription: {
    fontFamily: "poppinsregular",
    color: "rgba(205,204,204,1)",
    textAlign: "justify",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  requestCategory: {
    marginTop: 20,
    marginLeft: 20,
    flexDirection: "row",
  },
  cateName: {
    left: 48,
    position: "absolute",
    fontFamily: "poppinsregular",
    color: "rgba(220,162,76,1)",
    fontSize: 14,
  },
  prioritylbl: {
    fontFamily: "poppinsregular",
    color: "rgba(210,205,205,1)",
  },
  high: {
    width: 14,
    height: 14,
    backgroundColor: "rgba(255,51,51,1)",
    borderRadius: 7,
    marginLeft: 33,
    marginTop: 4,
  },
  medium: {
    width: 14,
    height: 14,
    backgroundColor: "rgba(222,255,0,1)",
    borderRadius: 7,
    marginLeft: 33,
    marginTop: 4,
  },
  low: {
    width: 14,
    height: 14,
    backgroundColor: "rgba(71,214,56,1)",
    borderRadius: 7,
    marginLeft: 33,
    marginTop: 4,
  },
  priorityLevel: {
    fontFamily: "poppinsregular",
    color: "rgba(210,205,205,1)",
    marginLeft: 8,
  },
  prioritylblRow: {
    height: 21,
    flexDirection: "row",
    marginTop: 50,
    marginLeft: 40,
    marginRight: 14,
  },
  tolbl: {
    fontFamily: "poppinsregular",
    color: "rgba(210,205,205,1)",
  },
  toWhome: {
    fontFamily: "poppinsregular",
    color: "rgba(210,205,205,1)",
    marginLeft: 90,
  },
  tolblRow: {
    height: 21,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 40,
    marginRight: 14,
  },
  attachmentslbl: {
    fontFamily: "poppinsregular",
    color: "rgba(210,205,205,1)",
    marginTop: 36,
    marginLeft: 31,
  },
  attachFiles: {
    height: 91,
    borderWidth: 2,
    borderColor: "rgba(194,163,254,1)",
    marginTop: 12,
    marginLeft: 35,
    marginRight: 38,
  },
  group2: {
    top: 0,
    left: 0,
    width: 338,
    height: 52,
    position: "absolute",
    justifyContent: "space-between",
  },
  statuslbl: {
    fontFamily: "poppinsregular",
    color: "rgba(210,205,205,1)",
    width: 138,
  },
  viewslbl: {
    fontFamily: "poppinsregular",
    color: "rgba(210,205,205,1)",
    width: 138,
  },
  views: {
    top: 28,
    left: 140,
    position: "absolute",
    fontFamily: "poppinsregular",
    color: "rgba(210,205,205,1)",
  },
  status: {
    top: 0,
    left: 140,
    position: "absolute",
    fontFamily: "poppinsregular",
    color: "rgba(210,205,205,1)",
  },
  group2Stack: {
    width: 366,
    height: 54,
    marginTop: 35,
    marginLeft: 32,
  },
  group1: {
    width: 130,
    height: 128,
  },
  postedDatelbl: {
    fontFamily: "poppinsregular",
    color: "rgba(210,205,205,1)",
    height: 21,
  },
  acceptedBylbl: {
    fontFamily: "poppinsregular",
    color: "rgba(210,205,205,1)",
    height: 21,
    marginTop: 15,
  },
  acceptedOnlbl: {
    fontFamily: "poppinsregular",
    color: "rgba(210,205,205,1)",
    height: 21,
    marginTop: 14,
  },
  completedOnlbl: {
    fontFamily: "poppinsregular",
    color: "rgba(210,205,205,1)",
    height: 21,
    marginTop: 15,
  },
  postedDate: {
    fontFamily: "poppinsregular",
    color: "rgba(210,205,205,1)",
    height: 21,
    //width: 110,
  },
  acceptedBy: {
    fontFamily: "poppins700",
    color: "rgba(210,205,205,1)",
    marginTop: 15,
    height: 21,
  },
  acceptedDate: {
    fontFamily: "poppinsregular",
    color: "rgba(210,205,205,1)",
    marginTop: 14,
    marginLeft: 1,
  },
  completedDate: {
    fontFamily: "poppinsregular",
    color: "rgba(210,205,205,1)",
    marginTop: 10,
    height: 21,
  },
  postedDateColumn: {
    width: 245,
    marginLeft: 11,
  },
  group1Row: {
    height: 128,
    flexDirection: "row",
    marginTop: 24,
    marginLeft: 32,
    marginRight: 12,
  },
  scrollAreaStack: {
    height: 1050,
    marginTop: 20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: 16,
  },
  imageFiller: {
    flex: 1,
    flexDirection: "row",
  },
  closeBtn: {
    color: "rgba(115,115,115,1)",
    fontSize: 29,
    height: 32,
    width: 29,
  },
  ratingPanel: {
    marginHorizontal: 17,
    height: 238,
    borderRadius: 23,
    overflow: "hidden",
    marginTop: 40,
  },
  imageRow: {
    height: 96,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 144,
    marginRight: 12,
  },
  loremIpsum1: {
    fontFamily: "poppinsregular",
    color: "#121212",
    textAlign: "center",
    marginTop: 7,
    marginLeft: 8,
  },
  acceptedUserName1: {
    fontFamily: "poppins700",
    color: "#121212",
    textAlign: "center",
    marginLeft: 12,
  },
  rect: {
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
    marginHorizontal: 40,
  },
});

export default SSentDetailsAfterAccepting;
