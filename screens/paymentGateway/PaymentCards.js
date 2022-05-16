import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity,
  ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import CardItem from './../../components/CardItem';
import dummyData from '../../constants/dummyData';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';

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
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={()=>navigation.goBack()}>
          <Icon name="arrow-left" style={styles.backIcon}></Icon>
        </TouchableOpacity>
        <Text style={styles.myCards}>MY CARDS</Text>
      </View>

      <LinearGradient
        start={{ x: 0, y: 0.5 }}
        end={{ x: 0, y: 0 }}
        colors={['transparent', 'rgba(19,18,18,1)']}
        style={{ left: 0, right: 0, height: 20 }}
      />

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
    marginTop: 0,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#BBBDC1',
    borderRadius: 12,
  },
  backIcon: {
    color: '#BBBDC1',
    fontSize: 20,
    marginRight: 2,
  },
  myCards: {
    fontFamily: 'poppins700',
    textAlign: 'center',
    marginLeft: 100,
    marginTop: 7,
    color: '#9c8df0',
    fontSize: 17,
    letterSpacing: 0,
  },
  header: {
    height: 50,
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
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
