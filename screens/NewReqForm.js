import React, { Component, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
  Alert,
  ActivityIndicator
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import MaterialChipWithImageAndCloseButton from '../components/MaterialChipWithImageAndCloseButton';
import MaterialRadio from '../components/MaterialRadio';
import { useFonts } from 'expo-font';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { LinearGradient } from 'expo-linear-gradient';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {dummyData} from '../constants';

function NewReqForm({ navigation }) {
  const [selectedPriority, setSelectedPriority] = React.useState();
  const [option, setOption] = React.useState(null);

  const data1 = [
    {
        id: 1,
        priority: 'high',
        value:'high',
        color: 'rgba(255,51,51,1)',
    },
    {
        id: 2,
        priority: 'medium', 
        value:'medium',
        color: 'rgba(222,255,0,1)',
    },
    {
        id: 3,
        priority: 'low', 
        value:'low',
        color: 'rgba(71,214,56,1)',
    }
]

  const [data, setData] = React.useState({
    to: '',
    title: '',
    category: '',
    priority: '',
    location: '',
    isValidTo: true,
    isValidTitle: true,
    isValidCategory: true,
    isValidPriority: true,
    isValidLocation: true,
    check_textInputChangeTo: false,
    check_textInputChangeTitle: false,
    check_textInputChangeCategory: false,
    check_textInputChangePriority: false,
    check_textInputChangeLocation: false,
  });

    //email validation
  // onChangeText={(val) => textInputChangeTitle(val)}
  // onEndEditing={(e)=>handleValidTitle(e.nativeEvent.text)}
  const textInputChangeTitle = (val) => {
    if (val.trim().length >0) {
      setData({
        ...data,
        title: val,
        check_textInputChangeTitle: true,
        isValidTitle: true,
      });
    } else {
      setData({
        ...data,
        title: val,
        check_textInputChangeTitle: false,
        isValidTitle: false,
      });
    }
  };
  const handleValidTitle = (val) => {
    if (val.trim().length >0) {
      setData({
        ...data,
        isValidTitle: true,
      });
    } else {
      setData({
        ...data,
        isValidTitle: false,
      });
    }
  };


  //location validation
  const textInputChangeLocation = (val) => {
  // onChangeText={(val) => textInputChangeLocation(val)}
  // onEndEditing={(e)=>handleValidLocation(e.nativeEvent.text)}

    if (val.trim().length >0) {
      setData({
        ...data,
        location: val,
        check_textInputChangeLocation: true,
        isValidLocation: true,
      });
    } else {
      setData({
        ...data,
        location: val,
        check_textInputChangeLocation: false,
        isValidLocation: false,
      });
    }
  };
  const handleValidLocation = (val) => {
    if (val.trim().length >0) {
      setData({
        ...data,
        isValidLocation: true,
      });
    } else {
      setData({
        ...data,
        isValidLocation: false,
      });
    }
  };


//poppins insert
const [loaded] = useFonts({
  poppinsregular: require('../assets/fonts/Poppins-Regular.ttf'),
  poppins700: require('../assets/fonts/poppins-700.ttf'),
});

useEffect(() => {
  console.log("New req form");
 }, []);

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
  (<SafeAreaView style={styles.container}>
    <FlatList
          listKey="7.1"
      showsVerticalScrollIndicator={true}
      ListHeaderComponent={
        <View>

          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => navigation.goBack()}>
              <Icon name="arrow-left" style={styles.backIcon}></Icon>
            </TouchableOpacity>
            <Text style={styles.newRequest}>NEW REQUEST</Text>
          </View>

          <LinearGradient  start = {{ x:0 , y:0.5 }} end = {{ x:0 , y:0 }}
                      colors={['transparent', 'rgba(19,18,18,1)']}
                        style= {{ left:0, right:0, height:15, }}
      />

          <View style={styles.rect1}>
            <Text style={styles.pageTitle}>New Service or Trade Request</Text>
            <Text style={styles.paragraph}>
              Need a help? Couldn&#39;t find a solution? Let others know and
              help you!
            </Text>
            <View style={styles.br}></View>
          </View>

          <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:25,marginHorizontal:35}}>
            <Text style={styles.tolbl}>To</Text>
            <Text style={styles.errMsg}>Error To</Text>
          </View>

        <View style={styles.categorytxt}>
          
        {/* <Image source={'../assets/icons/Entertainment.png'} style={{height:20, width:20, backgroundColor:'green'}}/>
        <TextInput
            placeholder=""
            clearButtonMode="while-editing"
            returnKeyType="next"
            style={styles.totxt}
            //onSubmitEditing={() => { this.secondTextInput.focus(); }}
            >sssssssssssss
            </TextInput> */}

                <View style={styles.proPicRow}>
                  <View style={styles.proPicRound}>
                    <Image
                      source={require('../assets/icons/mine.png')}
                      resizeMode="contain"
                      style={styles.proPicImage}
                    ></Image>
                  </View>
                  <Text style={styles.recieverName}>Public</Text>
                </View>

                <TouchableOpacity style={styles.selectToWhomeIconArea} onPress={()=>{}}>
                <EntypoIcon
                  name="chevron-small-down"
                  style={styles.selectToWhomeIcon}></EntypoIcon>    
                </TouchableOpacity>
          </View>

         


          <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginTop:25,marginHorizontal:35}}>
            <Text style={styles.titlelbl}>Title *</Text>
            {data.isValidTitle ? null : (<Text style={styles.errMsg}>Enter the Title</Text>)}
          </View>          
          <TextInput
            placeholder=""
            clearButtonMode="while-editing"
            autoCapitalize="sentences"
            returnKeyType="next"
            maxLength={40}
            // ref={(input) => { this.secondTextInput = input; }}  
            // onSubmitEditing={() => { this.thirdTextInput.focus(); }}
            onChangeText={(val) => textInputChangeTitle(val)}
            onEndEditing={(e)=>handleValidTitle(e.nativeEvent.text)}
            style={styles.titletxt}></TextInput>

          <Text style={styles.descriptionlbl}>Description</Text>
          <TextInput
            placeholder=""
            clearButtonMode="while-editing"
           // maxLength={'null'}
            numberOfLines={4}
            multiline={true}
            autoCapitalize="sentences"
            returnKeyType="next"
            //ref={(input) => { this.thirdTextInput = input; }}  
            style={styles.descriptiontxt}></TextInput>



          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop:25, marginHorizontal:35}}>
            <Text style={styles.categorylbl}>Category *</Text>
            {/* {data.isValidName ? null : (<Text style={styles.errMsg}>Enter the valid name</Text>)} */}
            <Text style={styles.errMsg}>Enter the category</Text>
          </View>          

          <View style={styles.categorytxt}>
                <View style={styles.cateRoundRow}>
                  <View style={styles.cateRound}>
                    <Image
                      source={require('../assets/icons/Entertainment.png')}
                      resizeMode="contain"
                      style={styles.cateIcon2}
                    ></Image>
                  </View>
                  <Text style={styles.cateName2}>Environment</Text>
                </View>

                <TouchableOpacity style={styles.selectCategoryIconArea} onPress={()=>{}}>
                <EntypoIcon
                  name="chevron-small-down"
                  style={styles.selectCategoryIcon}></EntypoIcon>    
                </TouchableOpacity>
          </View>


          <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginTop:25, marginHorizontal:35}}>
          <Text style={styles.priority}>Priority *</Text>
            {/* {data.isValidName ? null : (<Text style={styles.errMsg}>Enter the valid name</Text>)} */}
            <Text style={styles.errMsg}>Enter the Priority</Text>
          </View>  
          <View style={styles.priorityRadioBtnRow}>
            <MaterialRadio data={dummyData.priorityCategory} style={{marginRight:0}} onSelect={(value) => setOption(value)}/>

            {/* <MaterialRadio style={styles.highRadioBtn} 
                           //radio_props={priorityCategory} 
                           //initial={0} 
                           onPress={ setChosenOption('high')}
                           >
            </MaterialRadio>
        
            <View style={styles.redDot}></View>
            <Text style={styles.high}>High</Text>

            <MaterialRadio style={styles.mediumRadioBtn} onPress={ setChosenOption('medium')}></MaterialRadio>
            <View style={styles.yellowDot}></View>
            <Text style={styles.medium}>Medium</Text>

            <MaterialRadio style={styles.lowRadioBtn} onPress={ setChosenOption('low')}></MaterialRadio>
            <View style={styles.greenDot}></View>
            <Text style={styles.low}>Low</Text> */}



          </View>


{/* Automatically fill the textinput from the user's location that have provided during the registration */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginTop:25, marginHorizontal:35}}>
            <Text style={styles.locationlbl}>Location *</Text>
            {data.isValidLocation ? null : (<Text style={styles.errMsg}>Invalid Location</Text>)}
          </View>   

          <View style={styles.locationContainer}>
          <TextInput
            placeholder=""
            clearButtonMode="while-editing"
            returnKeyType="done"
            onChangeText={(val) => textInputChangeLocation(val)}
            onEndEditing={(e)=>handleValidLocation(e.nativeEvent.text)}
            style={styles.locationtxt}>
          </TextInput>  
          
          <TouchableOpacity style={styles.locationIconArea} onPress={()=>{}}>
          <EntypoIcon
            name="location-pin"
            style={styles.locationIcon}></EntypoIcon>    
          </TouchableOpacity>                  
          </View>
            


          <Text style={styles.attachmentslbl}>Attachments</Text>

          <View style={styles.attachmentstxt}>
            <View style={{flex:1, overflow:'hidden'}}>
              <MaterialChipWithImageAndCloseButton style={styles.materialChipWithImageAndCloseButton}></MaterialChipWithImageAndCloseButton>
            </View>
          <TouchableOpacity style={styles.attachmentIconArea} onPress={()=>{}}>
          <EntypoIcon
            name="attachment"
            style={styles.attachmentIcon}></EntypoIcon>    
          </TouchableOpacity>                
          </View>

          <TouchableOpacity style={styles.button} onPress={()=>{}}>
              <Text style={styles.submit}>SUBMIT</Text>
          </TouchableOpacity>
          
<View style={{marginTop:80}}></View>
        </View>
      }
    />
  </SafeAreaView>)
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: 'rgba(21,31,40,1)',
},  
cateRound: {
    width: 30,
    height: 30,
    backgroundColor: "rgba(81,81,81,0.69)",
    borderRadius: 15,
  },
  cateIcon2: {
    width: 25,
    height: 25,
    marginTop: 2,
    marginLeft: 2
  },
  cateName2: {
    marginTop: 3,
    fontFamily: 'poppinsregular',
    color: 'rgba(255,255,255,1)',
    fontSize: 15,
    marginLeft: 12,
  },
  cateRoundRow: {
    height: 30,
    flexDirection: "row",
    flex: 1,
    marginLeft: 5,
    marginTop: 3, 
    overflow:'hidden',
  },
  selectCategoryIconArea :{
    height:42, 
    width:42, 
    justifyContent:'center', 
    alignItems:'center',
  },
  selectCategoryIcon:{  
    color: 'rgba(128,128,128,1)',
    fontSize: 28,
    position:'absolute'
  }, 
rect1: {
  height: 140,
  shadowColor: 'black',
  shadowOffset: {
    width: 3,
    height: 3,
  },
  elevation: 45,
  shadowOpacity: 1,
  shadowRadius: 15,
  borderWidth: 0,
  borderColor: '#000000',
  marginTop: 0,
},
pageTitle: {
  fontFamily: 'poppins700',
  color: 'rgba(224,224,224,1)',
  fontSize: 17,
  marginTop: 17,
  marginLeft: 30,
},
paragraph: {
  fontFamily: 'poppinsregular',
  color: 'rgba(234,234,234,1)',
  fontSize: 12,
  textAlign: 'justify',
  marginTop: 26,
  marginHorizontal: 30,
},
br: {
  height: 1,
  margin:15,
  backgroundColor: 'rgba(175,172,172,1)',
},
newRequest: {
  fontFamily:'poppins700',
  color: '#9c8df0',
  textAlign: 'center',
  flex: 1,
  marginRight: 35,
  marginTop: 7,
  fontSize: 17,
  letterSpacing: 0,
},
header: {
  flexDirection: 'row',
  marginTop: 20,
  marginBottom:10,
  marginLeft: 15,
  marginRight: 15,
},
backIcon: {
  color: '#BBBDC1',
  fontSize: 20,
  marginRight:2
},
backBtn: {
  width: 40,
  height: 40,
  marginLeft: 10,
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 1,
  borderColor: '#BBBDC1',
  borderRadius: 12,
},
tolbl: {
  fontFamily: 'poppinsregular',
  color: 'rgba(170,170,170,1)',
},
errMsg:{
  color: 'red', 
  fontFamily: 'poppinsregular',
  fontSize:10,
  marginTop:5,
},
proPicRound: {
  width: 30,
  height: 30,
  backgroundColor: "rgba(81,81,81,0.69)",
  borderRadius: 15,
  marginLeft:10,
},
proPicImage: {
  width: 25,
  height: 25,
  marginTop: 2,
  marginLeft: 2
},
recieverName: {
  marginTop: 3,
  fontFamily: 'poppinsregular',
  color: 'rgba(255,255,255,1)',
  fontSize: 15,
  marginLeft: 12,
},
proPicRow: {
  height: 30,
  flexDirection: "row",
  flex: 1,
  marginLeft: 5,
  marginTop: 3, 
  overflow:'hidden',
},
selectToWhomeIconArea :{
  height:37, 
  width:42, 
  justifyContent:'center', 
  alignItems:'center',
},
selectToWhomeIcon:{  
  color: 'rgba(128,128,128,1)',
  fontSize: 28,
  position:'absolute'
}, 
selectToWhome:{
   height:42, 
    width:42, 
    justifyContent:'center', 
    alignItems:'center',
},
titlelbl: {
  fontFamily: 'poppinsregular',
  color: 'rgba(170,170,170,1)',
},
titletxt: {
  fontFamily: 'poppinsregular',
  color: 'rgba(255,255,255,1)',
  height: 42,
  paddingHorizontal:10,
  borderRadius: 15,
  borderWidth: 2,
  borderColor: 'rgba(255,0,246,1)',
  fontSize: 15,
  marginHorizontal: 28,
},
descriptionlbl: {
  fontFamily: 'poppinsregular',
  color: 'rgba(170,170,170,1)',
  marginTop: 24,
  marginHorizontal: 35,
},
descriptiontxt: {
  fontFamily: 'poppinsregular',
  color: 'rgba(255,255,255,1)',
  height: 142,
  paddingHorizontal:10,
  borderRadius: 15,
  borderWidth: 2,
  borderColor: 'rgba(255,0,246,1)',
  fontSize: 15,
  marginHorizontal: 28,
  textAlignVertical: "top",
  paddingVertical:6
},
categorylbl: {
  fontFamily: 'poppinsregular',
  color: 'rgba(170,170,170,1)',
},
categorytxt: {
  height: 42,
  borderRadius: 15,
  borderWidth: 2,
  borderColor: 'rgba(255,0,246,1)',
  flexDirection:'row', 
  marginHorizontal: 28,
},
priority: {
  fontFamily: 'poppinsregular',
  color: 'rgba(170,170,170,1)',
},
locationlbl: {
  fontFamily: 'poppinsregular',
  color: 'rgba(170,170,170,1)',
},
locationView: {
  height: 43,
  backgroundColor: 'rgba(81,81,81,0.4)',
  borderRadius: 8,
  flexDirection: 'row',
  marginLeft: 16,
  marginRight: 16,
},
locationContainer:{  
  borderRadius: 15,
  borderWidth: 2,
  borderColor: 'rgba(255,0,246,1)',
  flexDirection:'row', 
  marginHorizontal: 28,
},
locationtxt: {
  fontFamily: 'poppinsregular',
  color: 'rgba(255,255,255,1)',
  height: 42,
  fontSize: 15,
  marginRight: 0,
  marginLeft:10,
  alignItems:'flex-end',
  justifyContent:'flex-end',
  overflow:'hidden', 
  flex:1,
},
locationIconArea:{
  height:42, 
  width:42, 
  justifyContent:'center', 
  alignItems:'center',
}, 
locationIcon: {
  color: 'rgba(128,128,128,1)',
  fontSize: 25,
  position:'absolute'
},
attachmentslbl: {
  fontFamily: 'poppinsregular',
  color: 'rgba(170,170,170,1)',
  marginTop: 24,
  marginHorizontal: 35,
},
materialChipWithImageAndCloseButton: {
  width: 200,
  height: 32,
  top: 2.5,
  elevation:90,
  marginLeft:10,
},
attachmentstxt: {
  height: 42,
  borderRadius: 15,
  borderWidth: 2,
  borderColor: 'rgba(255,0,246,1)',
  flexDirection:'row', 
  marginHorizontal: 28,
},
attachmentIconArea :{
  height:38, 
  width:42, 
  justifyContent:'center', 
  alignItems:'center',
},
attachmentIcon:{  
  color: 'rgba(128,128,128,1)',
  fontSize: 20,
  position:'absolute'
}, 
button: {
  height: 47,
  backgroundColor: "rgba(123,0,255,1)",
  borderRadius: 8,
  marginTop: 60,
  marginLeft: 37,
  marginRight: 37
},
submit: {
  fontFamily: "poppinsregular",
  color: "rgba(255,255,255,1)",
  textAlign: "center",
  marginTop: 9,
  marginLeft: 8,
  marginRight: 7,    
  letterSpacing:0.5, 
  fontSize:18,
},
highRadioBtn: {
  height: 34,
  width: 34,
},
redDot: {
  width: 12,
  height:12,
  backgroundColor: 'rgba(255,51,51,1)',
  borderRadius: 6,
  marginLeft: 10,
  marginTop: 12,

},
high: {
  fontFamily: 'poppinsregular',
  color: 'rgba(255,255,255,1)',
  fontSize: 12,
  height: 19,
  width: 49,
  marginLeft: 4,
  marginTop: 8,
},
mediumRadioBtn: {
  height: 34,
  width: 34, 
  marginLeft:10
},
yellowDot: {
  width: 12,
  height: 12,
  backgroundColor: 'rgba(255,238,51,1)',
  borderRadius: 6,
  marginLeft: 10,
  marginTop:12,
},
medium: {
  fontFamily: 'poppinsregular',
  color: 'rgba(255,255,255,1)',
  fontSize: 12,
  height: 19,
  width: 56,
  marginLeft: 5,
  marginTop: 8,
},
lowRadioBtn: {
  height: 34,
  width: 34,
  marginLeft:20,
},
greenDot: {
  width: 12,
  height: 12,
  backgroundColor: 'rgba(68,255,51,1)',
  borderRadius: 6,
  marginLeft: 10,
  marginTop:12,
},
low: {
  fontFamily: 'poppinsregular',
  color: 'rgba(255,255,255,1)',
  fontSize: 12,
  height: 19,
  width: 49,
  marginLeft: 4,
  marginTop: 8,
},
priorityRadioBtnRow: {
  height: 34,
  flexDirection: 'row',
  marginLeft: 10,
  marginRight: 4, 
},
});

export default NewReqForm;
