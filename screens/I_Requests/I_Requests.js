import React from 'react'
import {Text,View,Image} from 'react-native';
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, dummyData, FONTS, icons, SIZES } from '../../constants';

function itemRequestsForMe(){
    return(
        <View>
            {/* header */}
            <View style={{flexDirection: 'row', marginHorizontal: SIZES.padding, marginTop: 30, marginBottom:20}}>
                <Text style={{flex:1, ...FONTS.h3}}>Requests For You</Text></View>
        <FlatList data={dummyData.itemsRequestList}
                horizontal
                keyExtractor={(item) => `${item.id}`}
                showsHorizontalScrollIndicator={true}

                renderItem = {({item, index}) => {
                  return(
                      
                      <TouchableOpacity 
                          style={{ 
                              height: 160, paddingRight : SIZES.radius,alignItems: 'center', width: SIZES.width * 0.8,backgroundColor: COLORS.lightGray2,borderRadius: SIZES.radius, flexDirection:'row',
                              marginRight: index == dummyData.itemsRequestList.length - 1 ? SIZES.padding: 5, 
                              marginLeft: index == 0 ? 15: 5}}
                              onPress = {()=> {}}
                      >
                                    <Image source={item.profilePic}
                                            style={{ height: 70, width:70, marginHorizontal:10,marginTop: -5, }}
                                    />
                                    <Text style={{color: COLORS.black, ...FONTS.h3, marginTop: -110, fontWeight: 'bold', textAlign:'center'}}>{item.itemName}</Text>  
                                      
                                    {/* accept or decline buttons */}
                                    {/* category */}
                                    {/* discription */}
                                    {/* posted date */}
                                    {/* prority */}
                                    {/* publish date */}
                                    {/* ending date */}
                      </TouchableOpacity>
                    )}}
        /></View>
    )
}

function allItemsReq() {
    return(
        <View>
            <FlatList data={dummyData.itemsRequestList}
                    keyExtractor={(item) => `${item.id}`}
                    showsVerticalScrollIndicator={true}
                    renderItem ={({item, index})=> {
                        return(
                            <TouchableOpacity style={{flexDirection: 'row', borderRadius: SIZES.radius, backgroundColor: COLORS.lightGray2, height: 80, padding: 10, marginHorizontal: 10, marginBottom:index== dummyData.itemsRequestList.length-1 ? 50: 5}}
                            >
                                        {/* profile Pic */}
                                        <Image source={item.profilePic}
                                                style={{ height: 70, width:70, marginRight:5}}
                                        />

                                        <View style={{flex:1}}>
                                        {/* title */}
                                        <Text style={{fontWeight: 'bold', fontSize: 18}}>{item.itemName}</Text>

                                        {/* published date */}
                                        <Text style={{textAlign: 'right', right:SIZES.radius, position:'absolute'}}>{item.publishedDate}</Text>
                                        {/* priority */}
                                        <View style={{height: 20, width:20, borderRadius: 10, position:'absolute', alignItems: 'flex-end', right: 10, top:30, backgroundColor: 'green',}}></View>
                                        {/* Category */}
                                        <View style={{flexDirection: 'row', flex:1}}><Image source={dummyData.categories.icon} style={{width: 5, height: 5,}}/><Text>{item.itemCategory}</Text></View>
                                        {/* publisher Name */}
                                        <Text style={{color:'black'}}>{item.publisherName}</Text>
                                    </View>
                            </TouchableOpacity>
                        )
                    }
                }
            />
        </View>
    )
    
}

const I_Requests = () => {
    return (
        <View>
                        <FlatList data={dummyData.itemsRequestList}
                    showsVerticalScrollIndicator={true}
                    ListHeaderComponent ={
                        <View>            
                            {/* requests for me */}
                            {itemRequestsForMe()}

                             <Text style={{...FONTS.h3, paddingTop:30, padding:20}}>Requests</Text>
                            {allItemsReq()}
                          
                        </View>
                    }

                    
            />
        </View>
    )
}


export default I_Requests
