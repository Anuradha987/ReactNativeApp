import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import CardItem from './../../components/CardItem';
import dummyData from '../../constants/dummyData';
import { useFonts } from 'expo-font';

const PaymentCards = ({navigation}) => {
  const [selectedCard, setSelectedCard] = React.useState(null);

         //poppins insert
  const [loaded] = useFonts({
    poppinsregular: require('./../../assets/fonts/Poppins-Regular.ttf'),
    poppins700: require('./../../assets/fonts/poppins-700.ttf'),
  });

  if (!loaded) {
       return null;
  }
  return (
    <View style={styles.container}>

    {/*header*/}
      <View style={styles.backBtnRow}>
        <TouchableOpacity style={styles.backBtn} onPress={()=>navigation.goBack()}>
          <Icon name="arrow-left" style={styles.backIcon}></Icon>
        </TouchableOpacity>
        <Text style={styles.myCards}>My Cards</Text>
      </View>


      <ScrollView >
        {/*My carts*/}
        <View>
          {dummyData.myCards.map((item, index) => {
            return(
              <CardItem
                key={`MyCard-${item.id}`}
                item={item}
                isSelected={
                  `${selectedCard?.key}-${selectedCard?.id}` == `MyCard-${item.id}`
                }
                onPress={() => setSelectedCard({ ...item, key:"MyCard" })}
              />
            );
          })}
        </View>

          {/*new carts*/}
            <Text style={styles.addNewCard}>Add new card</Text>

            {dummyData.allCards.map((item, index) => {
              return(
              <CardItem
                key={`NewCard-${item.id}`}
                item={item}
               isSelected={
                 `${selectedCard?.key}-${selectedCard?.id}`==`NewCard-${item.id}`
                 }   
                onPress={()=> setSelectedCard({...item, key:"NewCard"})}
              />
            )})}


        {/*footer*/}
      <TouchableOpacity disabled={selectedCard == null}
                        style={{height: 47,
                                backgroundColor: selectedCard == null ? 'gray' : "rgba(123,0,255,1)",
                                borderRadius: 8,
                                marginTop: 30, 
                                marginLeft: 33,
                                marginRight: 37}}
      >
        <Text style={styles.addCard}>
          {selectedCard?.key == "NewCard" ? "Add" : "Place your order"}
        </Text>
      </TouchableOpacity>

      <View style={{height:60}}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(21,31,40,1)',
  },
  backBtn: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: 'rgba(187,189,193,1)',
    borderRadius: 12,
  },
  backIcon: {
    color: 'rgba(128,128,128,1)',
    fontSize: 20,
    height: 22,
    width: 20,
    marginTop: 9,
    marginLeft: 8,
  },
  myCards: {
    fontFamily: 'poppins700',
    color: 'rgba(156,141,240,1)',
    textAlign: 'center',
    letterSpacing: 0.5,
    fontSize: 18,
    flex: 1,
    marginLeft: 11,
    marginTop: 9,
  },
  backBtnRow: {
   // height: 40,
    flexDirection: 'row',
    marginTop: 60,
    marginLeft: 27,
    marginRight: 73,
    marginBottom:15, 
  },
  addNewCard: {
    fontFamily: "poppins700",
    color: "rgba(176,176,176,1)",
    fontSize: 16,
    marginTop: 50,
    marginLeft: 30
  },
  addCard: {
    fontFamily: "poppinsregular",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    marginTop: 12,
    marginLeft: 8,
    marginRight: 7
  }, 
});

export default PaymentCards;
