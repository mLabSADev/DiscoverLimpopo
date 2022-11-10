import React, { useState } from 'react';
import {View, KeyboardAvoidingView, TouchableOpacity, SafeAreaView, TextInput, ImageBackground } from 'react-native';
import { Box, Text, ScrollView, Image, TextField} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MasonryList from '@react-native-seoul/masonry-list';
import RestaurantsComponent from '../../Components/restaurants/RestaurantsComponent';


const data = [{
  id: 1,
  title: 'First Edition',
  image:require('../../assets/images/magazine1.jpg')
},{
  id: 2,
  title: 'First Edition',
  image:require('../../assets/images/magazine1.jpg')
},{
  id: 3,
  title: 'First Edition',
  image:require('../../assets/images/magazine1.jpg')
},{
  id: 4,
  title: 'First Edition',
  image:require('../../assets/images/magazine1.jpg')
},{
  id: 5,
  title: 'First Edition',
  image:require('../../assets/images/magazine1.jpg')
}];


export default function Restaurants({navigation}) {

  const [search, setSearch] = useState('');

  

  return (
    <>
       <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{flex:1, height:"100%"}}
      >
    <SafeAreaView  style={{ backgroundColor:"#F4FAFF", width:"100%", height:"100%" }}>
 <Box style={{height:170, backgroundColor:"#2B2B2B", borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
   <Box style={{width:"95%", backgroundColor:'rgba(239, 172, 50, 0.05)', borderRadius:30, flexDirection:"row", marginVertical:"3%", height:50,marginHorizontal:"2%", justifyContent:"space-between", alignContent:"center", alignItems:"center"}}>
       <TouchableOpacity activeOpacity={2} onPress={() => navigation.openDrawer('')}>
       <Feather name='menu' size={32} style={{alignSelf:"flex-start", color:"rgb(239, 172, 50)", marginHorizontal:"10%"}} />
       </TouchableOpacity>
       <TouchableOpacity onPress={() => navigation.navigate('Account')}>
       <Image alt='profile' source={require('../../assets/images/John-Doe.jpg')} style={{width:38, height:38, alignSelf:"flex-end", borderRadius:38, marginHorizontal:"10%"}}/>
       </TouchableOpacity>        
   </Box>

   <Text fontFamily="Plus Jakarta Sans" fontSize={34} color="#FFFFFF" fontWeight="bold" width="80%" style={{marginHorizontal:"5%", marginVertical:"-1%"}}>Restaurants</Text>
   <Text fontFamily="Plus Jakarta Sans" fontSize={16} color="rgba(244, 250, 255, 0.6)" width="80%" style={{ marginHorizontal:"5%",}}>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Text>
   </Box>

   <Box style={{flexDirection:"row", marginVertical:"2%", justifyContent:"space-between", marginHorizontal:"2%",}}>
        <Box style={{backgroundColor:"rgba(239, 172, 50, 0.05)", alignSelf:"center", width:"100%", borderRadius: 30, height:50, flexDirection:"row"}}>
                <Box style={{backgroundColor:"rgba(120, 120, 120, 0.1)", alignSelf:"center", width:"90%", borderRadius: 30, height:50, flexDirection:"row"}}>
                <Box style={{backgroundColor:"rgba(120, 120, 120, 0.1)", alignSelf:"center", width:"85%", borderRadius: 30, height:50, flexDirection:"row", justifyContent:"center"}}>
                <TextInput placeholder='Search' style={{alignSelf:"flex-start", width:"95%", }} 
                onChangeText={(search) => setSearch(search)}
                value={search}
                textContentType="search"
                /> 
                </Box>
                <Ionicons name='ios-search-outline' size={20} style={{alignSelf:"flex-start", color:"rgb(34, 149, 59)", alignSelf:"center", marginHorizontal:"4%"}} />
                </Box>
                <Ionicons name='filter' size={20} style={{alignSelf:"flex-start", color:"rgb(239, 172, 50)",marginHorizontal:"2%",alignSelf:"center" }} />
                </Box>
   </Box>
<ScrollView showsVerticalScrollIndicator={false}>
                <MasonryList
                        style={{ width:"100%", height:"100%", alignSelf:"center"}}
                        scrollEnabled={true}
                        showsHorizontalScrollIndicator={false}
                          data={data}
                          keyExtractor={(item) => item.id}
                          numColumns={1}
                          showsVerticalScrollIndicator={false}
                          renderItem={({item}) => {
                            return(
                              <>
                              <TouchableOpacity activeOpacity={1}
                              onPress={() => {navigation.navigate('RestaurantDetails', {item: item})}}
                            style={{marginVertical:"2%"}}>
                                      <RestaurantsComponent navigation={navigation} route={route}/>
                            </TouchableOpacity>
                            </>
                        )
                      }}
                />
                
      <Box style={{marginVertical:"2%"}}>
            <ImageBackground style={{width:"100%", height:125}} source={require("../../assets/images/advert.jpg")}>
              <Box style={{marginVertical:"2%", flexDirection:"column", marginHorizontal:"3%", height:"90%"}}>
                      <Box style={{ borderWidth:1, borderColor:"rgb(239, 172, 50)", borderRadius:30, width:110, height:30 ,justifyContent:"center"}}>
                          <Text style={{fontFamily:"Plus Jakarta Sans", color:"#FFFFFF", alignSelf:"center", }}>advertisement</Text>
                      </Box>
                      <Box style={{width: "100%", flexDirection:"row", justifyContent:"center", height:"55%" }}>
                          <Text style={{fontFamily:"Plus Jakarta Sans", width:"80%", fontSize:24, fontWeight:"bold", color:"#FFFFFF"}}>Buy 1 get 1 free special deals</Text>
                          <Text style={{fontFamily:"Plus Jakarta Sans", color:"rgb(239, 172, 50)", width:"20%", alignSelf:"center", fontWeight:"bold"}}>VIEW</Text>
                      </Box>
                      <Text  style={{fontFamily:"Plus Jakarta Sans", color:"#FFFFFF"}}>DISCOVER LIMPOPO</Text>
              </Box>
            </ImageBackground>
      </Box>

      <MasonryList
                        style={{ width:"100%", height:"100%", alignSelf:"center"}}
                        scrollEnabled={true}
                        showsHorizontalScrollIndicator={false}
                          data={data}
                          keyExtractor={(item) => item.id}
                          numColumns={1}
                          showsVerticalScrollIndicator={false}
                          renderItem={({item}) => {
                            return(
                              <>
                              <TouchableOpacity activeOpacity={1}
                              onPress={() => {navigation.navigate('RestaurantDetails', {item: item})}}
                            style={{marginVertical:"2%"}}>
                                      <RestaurantsComponent/>
                            </TouchableOpacity>
                            </>
                        )
                      }}
                />
</ScrollView>
    </SafeAreaView>
    </KeyboardAvoidingView>
    </>
  )
}