import React, { Component, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";

function PlacingOrders(props) {

  useEffect(() => {
    console.log("Placing orders");
   }, []);

  return (
    <FlatList
    listKey="70.1"
showsVerticalScrollIndicator={true}
ListHeaderComponent={
    <View style={styles.container}>

      <View style={styles.cashPopup}>
        <View style={styles.popupBoxFiller}></View>
        <View style={styles.popupBox}>
          <View style={styles.transactionMethod1Row}>
            <Text style={styles.transactionMethod1}>Cash</Text>
            <View style={styles.transactionMethod1Filler}></View>
            <EvilIconsIcon
              name="close"
              style={styles.closeBtn1}
            ></EvilIconsIcon>
          </View>
          <Text style={styles.buyquantitytxt1}>Quantity I want to buy</Text>
          <TextInput
            placeholder="Ex: 5, 100g, 500ml"
            clearButtonMode="while-editing"
            autoCapitalize="sentences"
            returnKeyType="done"
            // maxLength={"null"}
            selectTextOnFocus={false}
            placeholderTextColor="rgba(138,138,138,1)"
            selectionColor="rgba(255,255,255,1)"
            style={styles.quantity2}
          ></TextInput>
          <TouchableOpacity style={styles.orderBtn1}>
            <Text style={styles.send}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>


      <View style={styles.freePopup}>
        <View style={styles.popupBox1Filler}></View>
        <View style={styles.popupBox1}>
          <View style={styles.freeRow}>
            <Text style={styles.free}>Free</Text>
            <View style={styles.freeFiller}></View>
            <EvilIconsIcon
              name="close"
              style={styles.closeBtn2}
            ></EvilIconsIcon>
          </View>
          <Text style={styles.quantityIWant}>Quantity I want</Text>
          <TextInput
            placeholder="Ex: 5, 100g, 500ml"
            clearButtonMode="while-editing"
            autoCapitalize="sentences"
            returnKeyType="done"
            // maxLength={"null"}
            selectTextOnFocus={false}
            placeholderTextColor="rgba(138,138,138,1)"
            selectionColor="rgba(255,255,255,1)"
            style={styles.quantity3}
          ></TextInput>
          <TouchableOpacity style={styles.orderBtn2}>
            <Text style={styles.send1}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>


      <View style={styles.barterPopup}>
        <View style={styles.popupBox2Filler}></View>
        <View style={styles.popupBox2}>
          <View style={styles.barterRow}>
            <Text style={styles.barter}>Barter</Text>
            <View style={styles.barterFiller}></View>
            <EvilIconsIcon
              name="close"
              style={styles.closeBtn3}
            ></EvilIconsIcon>
          </View>
          <Text style={styles.quantityIWant2}>Quantity I want</Text>
          <TextInput
            placeholder="Ex: 5, 100g, 500ml"
            clearButtonMode="while-editing"
            autoCapitalize="sentences"
            returnKeyType="done"
            // maxLength={"null"}
            selectTextOnFocus={false}
            placeholderTextColor="rgba(138,138,138,1)"
            selectionColor="rgba(255,255,255,1)"
            style={styles.quantity4}
          ></TextInput>
          <Text style={styles.exchangedFor}>Exchanged for</Text>
          <TextInput
            placeholder="Ex: Paddy, Flour, Flower plant"
            clearButtonMode="while-editing"
            autoCapitalize="sentences"
            returnKeyType="done"
            // maxLength={"null"}
            selectTextOnFocus={false}
            placeholderTextColor="rgba(138,138,138,1)"
            selectionColor="rgba(255,255,255,1)"
            style={styles.exchangetxt}
          ></TextInput>
          <TouchableOpacity style={styles.orderBtn3}>
            <Text style={styles.send2}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>


      <View style={styles.rentPopup}>
        <View style={styles.popupBox3Filler}></View>
        <View style={styles.popupBox3}>
          <View style={styles.rentRow}>
            <Text style={styles.rent}>Rent</Text>
            <View style={styles.rentFiller}></View>
            <EvilIconsIcon
              name="close"
              style={styles.closeBtn4}
            ></EvilIconsIcon>
          </View>
          <Text style={styles.quantityIWant3}>Quantity I want</Text>
          <TextInput
            placeholder="Ex: 5, 100g, 500ml"
            clearButtonMode="while-editing"
            autoCapitalize="sentences"
            returnKeyType="done"
            // maxLength={"null"}
            selectTextOnFocus={false}
            placeholderTextColor="rgba(138,138,138,1)"
            selectionColor="rgba(255,255,255,1)"
            style={styles.quantity6}
          ></TextInput>
          <Text style={styles.returningDate2}>Returning Date</Text>
          <TextInput
            placeholder="Ex: 12PM, Tommorow, 12/21/21"
            clearButtonMode="while-editing"
            autoCapitalize="sentences"
            returnKeyType="done"
            // maxLength={"null"}
            selectTextOnFocus={false}
            placeholderTextColor="rgba(138,138,138,1)"
            selectionColor="rgba(255,255,255,1)"
            style={styles.returningDatetxt}
          ></TextInput>
          <TouchableOpacity style={styles.orderBtn4}>
            <Text style={styles.send3}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>


      <View style={styles.borrowPopup}>
        <View style={styles.popupBox4Filler}></View>
        <View style={styles.popupBox4}>
          <View style={styles.borrowRow}>
            <Text style={styles.borrow}>Borrow</Text>
            <View style={styles.borrowFiller}></View>
            <EvilIconsIcon
              name="close"
              style={styles.closeBtn5}
            ></EvilIconsIcon>
          </View>
          <Text style={styles.quantityIWant4}>Quantity I want</Text>
          <TextInput
            placeholder="Ex: 5, 100g, 500ml"
            clearButtonMode="while-editing"
            autoCapitalize="sentences"
            returnKeyType="done"
            // maxLength={"null"}
            selectTextOnFocus={false}
            placeholderTextColor="rgba(138,138,138,1)"
            selectionColor="rgba(255,255,255,1)"
            style={styles.quantity8}
          ></TextInput>
          <Text style={styles.returningDate3}>Returning Date</Text>
          <TextInput
            placeholder="Ex: 12PM, Tommorow, 12/21/21"
            clearButtonMode="while-editing"
            autoCapitalize="sentences"
            returnKeyType="done"
            // maxLength={"null"}
            selectTextOnFocus={false}
            placeholderTextColor="rgba(138,138,138,1)"
            selectionColor="rgba(255,255,255,1)"
            style={styles.returningDatetxt1}
          ></TextInput>
          <TouchableOpacity style={styles.orderBtn5}>
            <Text style={styles.send4}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>


    </View>}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cashPopup: {
    height: 260,
    marginTop: 10,
    marginRight: 1
  },
  popupBoxFiller: {
    flex: 1
  },
  popupBox: {
    height: 260,
    backgroundColor: "rgba(33,46,57,1)",
    shadowColor: "rgba(14,14,14,1)",
    shadowOffset: {
      width: 3,
      height: -5
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
    borderRadius: 42
  },
  transactionMethod1: {
    // fontFamily: "poppins-regular",
    color: "rgba(206,144,230,1)",
    fontSize: 17,
    textAlign: "center",
    marginTop: 8
  },
  transactionMethod1Filler: {
    flex: 1,
    flexDirection: "row"
  },
  closeBtn1: {
    color: "rgba(255,255,255,1)",
    fontSize: 29,
    height: 32,
    width: 29
  },
  transactionMethod1Row: {
    height: 33,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 111,
    marginRight: 25
  },
  buyquantitytxt1: {
    // fontFamily: "poppins-regular",
    color: "rgba(207,205,205,1)",
    marginTop: 25,
    marginLeft: 29
  },
  quantity2: {
    // fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    height: 42,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "rgba(255,0,246,1)",
    fontSize: 15,
     marginTop: 8,
    marginHorizontal: 24, 
  },
  orderBtn1: {
    height: 46,
    backgroundColor: "rgba(123,0,255,1)",
    borderRadius: 25,
    width: 200,
    shadowColor: "rgba(123,0,255,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    alignSelf: "center",
    marginTop: 34,
    
  },
  send: {
    // fontFamily: "poppins-700",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    textAlign: "center",
    width: 185,
    height: 27,
    marginTop: 9,
    marginLeft: 8
  },
  freePopup: {
    height: 260,
    marginTop: 7,
    marginRight: 1
  },
  popupBox1Filler: {
    flex: 1
  },
  popupBox1: {
    height: 260,
    backgroundColor: "rgba(33,46,57,1)",
    shadowColor: "rgba(14,14,14,1)",
    shadowOffset: {
      width: 3,
      height: -5
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
    borderRadius: 42
  },
  free: {
    // fontFamily: "poppins-regular",
    color: "rgba(206,144,230,1)",
    fontSize: 17,
    textAlign: "center",
    marginTop: 8
  },
  freeFiller: {
    flex: 1,
    flexDirection: "row"
  },
  closeBtn2: {
    color: "rgba(255,255,255,1)",
    fontSize: 29,
    height: 32,
    width: 29
  },
  freeRow: {
    height: 33,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 111,
    marginRight: 25
  },
  quantityIWant: {
    // fontFamily: "poppins-regular",
    color: "rgba(207,205,205,1)",
    marginTop: 25,
    marginLeft: 29
  },
  quantity3: {
    // fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    height: 42,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "rgba(255,0,246,1)",
    fontSize: 15,
    marginTop: 8,
    marginHorizontal: 24
  },
  orderBtn2: {
    height: 46,
    backgroundColor: "rgba(123,0,255,1)",
    borderRadius: 25,
    width: 200,
    shadowColor: "rgba(123,0,255,1)",
    shadowOffset: {
      height: 0,
      width: 0
    },
    elevation: 30,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    alignSelf: "center",
    marginTop: 34,
  
  },
  send1: {
    // fontFamily: "poppins-700",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    textAlign: "center",
    width: 185,
    height: 27,
    marginTop: 9,
    marginLeft: 8
  },
  barterPopup: {
    height: 354,
    marginTop: 10
  },
  popupBox2Filler: {
    flex: 1
  },
  popupBox2: {
    height: 354,
    backgroundColor: "rgba(33,46,57,1)",
    shadowColor: "rgba(14,14,14,1)",
    shadowOffset: {
      height: -5,
      width: 0
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
    borderRadius: 42,
    marginLeft: -1,
    marginRight: -1
  },
  barter: {
    // fontFamily: "poppins-regular",
    color: "rgba(206,144,230,1)",
    fontSize: 17,
    textAlign: "center",
    marginTop: 8
  },
  barterFiller: {
    flex: 1,
    flexDirection: "row"
  },
  closeBtn3: {
    color: "rgba(255,255,255,1)",
    fontSize: 29,
    height: 32,
    width: 29
  },
  barterRow: {
    height: 33,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 112,
    marginRight: 26
  },
  quantityIWant2: {
    // fontFamily: "poppins-regular",
    color: "rgba(207,205,205,1)",
    marginTop: 25,
    marginLeft: 30
  },
  quantity4: {
    // fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    height: 42,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "rgba(255,0,246,1)",
    fontSize: 15,
    marginTop: 8,
    marginHorizontal: 24
  },
  exchangedFor: {
    // fontFamily: "poppins-regular",
    color: "rgba(207,205,205,1)",
    marginTop: 33,
    marginLeft: 31
  },
  exchangetxt: {
    // fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    height: 42,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "rgba(255,0,246,1)",
    fontSize: 15,
    marginTop: 9,
    marginHorizontal: 24
  },
  orderBtn3: {
    height: 46,
    backgroundColor: "rgba(123,0,255,1)",
    borderRadius: 25,
    width: 200,
    shadowColor: "rgba(123,0,255,1)",
    shadowOffset: {
      width: 0,
      height: 0
    },
    elevation: 30,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    alignSelf: "center",
    marginTop: 32,
  },
  send2: {
    // fontFamily: "poppins-700",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    textAlign: "center",
    width: 187,
    height: 27,
    marginTop: 9,
    marginLeft: 4
  },
  rentPopup: {
    height: 354,
    marginTop: 8,
    marginRight: 1
  },
  popupBox3Filler: {
    flex: 1
  },
  popupBox3: {
    height: 354,
    backgroundColor: "rgba(33,46,57,1)",
    shadowColor: "rgba(14,14,14,1)",
    shadowOffset: {
      width: 3,
      height: -5
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
    borderRadius: 42,
    marginLeft: -1,
    marginRight: -1
  },
  rent: {
    // fontFamily: "poppins-regular",
    color: "rgba(206,144,230,1)",
    fontSize: 17,
    textAlign: "center",
    marginTop: 8
  },
  rentFiller: {
    flex: 1,
    flexDirection: "row"
  },
  closeBtn4: {
    color: "rgba(255,255,255,1)",
    fontSize: 29,
    height: 32,
    width: 29
  },
  rentRow: {
    height: 33,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 112,
    marginRight: 26
  },
  quantityIWant3: {
    // fontFamily: "poppins-regular",
    color: "rgba(207,205,205,1)",
    marginTop: 25,
    marginLeft: 30
  },
  quantity6: {
    // fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    height: 42,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "rgba(255,0,246,1)",
    fontSize: 15,
    marginTop: 9,
    marginHorizontal: 24
  },
  returningDate2: {
    // fontFamily: "poppins-regular",
    color: "rgba(207,205,205,1)",
    marginTop: 33,
    marginLeft: 31
  },
  returningDatetxt: {
    // fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    height: 42,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "rgba(255,0,246,1)",
    fontSize: 15,
    marginTop: 9,
    marginHorizontal: 24
  },
  orderBtn4: {
    height: 46,
    backgroundColor: "rgba(123,0,255,1)",
    borderRadius: 25,
    width: 200,
    alignSelf: "center",
    marginTop: 32,
  },
  send3: {
    // fontFamily: "poppins-700",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    textAlign: "center",
    width: 187,
    height: 27,
    marginTop: 9,
    marginLeft: 4
  },
  borrowPopup: {
    height: 354,
    marginTop: 24,
    marginRight: 1
  },
  popupBox4Filler: {
    flex: 1
  },
  popupBox4: {
    height: 354,
    backgroundColor: "rgba(33,46,57,1)",
    shadowColor: "rgba(14,14,14,1)",
    shadowOffset: {
      width: 3,
      height: -5
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
    borderRadius: 42,
    marginLeft: -1,
    marginRight: -1
  },
  borrow: {
    // fontFamily: "poppins-regular",
    color: "rgba(206,144,230,1)",
    fontSize: 17,
    textAlign: "center",
    marginTop: 8
  },
  borrowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  closeBtn5: {
    color: "rgba(255,255,255,1)",
    fontSize: 29,
    height: 32,
    width: 29
  },
  borrowRow: {
    height: 33,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 112,
    marginRight: 26
  },
  quantityIWant4: {
    // fontFamily: "poppins-regular",
    color: "rgba(207,205,205,1)",
    marginTop: 25,
    marginLeft: 30
  },
  quantity8: {
    // fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    height: 42,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "rgba(255,0,246,1)",
    fontSize: 15,
    marginTop: 8,
    marginHorizontal: 24
  },
  returningDate3: {
    // fontFamily: "poppins-regular",
    color: "rgba(207,205,205,1)",
    marginTop: 33,
    marginLeft: 31
  },
  returningDatetxt1: {
    // fontFamily: "poppins-regular",
    color: "rgba(255,255,255,1)",
    height: 42,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "rgba(255,0,246,1)",
    fontSize: 15,
    marginTop: 9,
    marginHorizontal: 24
  },
  orderBtn5: {
    height: 46,
    backgroundColor: "rgba(123,0,255,1)",
    borderRadius: 25,
    width: 200,
    alignSelf: "center",
    marginTop: 32,
  },
  send4: {
    // fontFamily: "poppins-700",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    textAlign: "center",
    width: 187,
    height: 27,
    marginTop: 9,
    marginLeft: 4
  }
});

export default PlacingOrders;
