import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, Image, ScrollView} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import ReviewComponent from '../../Components/ReviewComponent';

export default function MagazineDetails({navigation, route}) {
  return (
    <>
    <SafeAreaView >
   <ScrollView style={{ backgroundColor:"#FFFFFF", width:"100%", height:"100%" }} showsVerticalScrollIndicator={false}>
   <View style={{ height:265, backgroundColor:"grey", borderBottomLeftRadius:30, borderBottomRightRadius:30, width:"100%"}}>
       <Image source={require('../../assets/images/Accomodation2.jpg')} resizeMode="cover" style={{width:"100%", height:"100%",  borderBottomLeftRadius:30, borderBottomRightRadius:30}}/>   
   <View style={{width:"95%", borderRadius:30, flexDirection:"column", marginVertical:"-65%", height:"100%",marginHorizontal:"2%", justifyContent:"space-between", alignContent:"center", alignItems:"center"}}>
  <View style={{width:"100%", borderRadius:30, flexDirection:"row", marginVertical:"5%",justifyContent:"space-between", alignContent:"center", alignItems:"center"}}>
  <View>
          <TouchableOpacity activeOpacity={2} onPress={() => navigation.goBack()} style={{backgroundColor:"rgb(239, 172, 50)", borderRadius:30, height:50, width:50, alignSelf:"center", justifyContent:"center"}}>
          <MaterialIcons name='keyboard-arrow-left' size={32} style={{alignSelf:"center",alignContent:"center" ,color:"#FFFFFF", marginHorizontal:"10%"}} />
          </TouchableOpacity>
  </View>
  <View style={{alignSelf:"flex-end"}}>
    <TouchableOpacity onPress={() => navigation.navigate('Account')}>
       <Image source={require('../../assets/images/John-Doe.jpg')} style={{width:38, height:38, alignSelf:"flex-end", borderRadius:38, marginHorizontal:"10%"}}/>
       </TouchableOpacity>
  </View>  
    </View>  
   </View>
   
   </View>
{/*  */}
   
   <View style={{width:"100%", height:100, flexDirection:"row"}}>
      <View style={{flexDirection:"column", width:"75%", alignSelf:"flex-start", height:"100%"}}>
          <Text style={{fontFamily:"Plus Jakarta Sans", marginHorizontal:"4%", marginVertical:"4%", color:"rgb(0,0,0)", fontSize:12}}>27 Jul, 202x</Text>
          <Text style={{fontFamily:"Plus Jakarta Sans", marginHorizontal:"4%", marginVertical:"-2%", color:"rgb(0,0,0)", fontSize:24, fontWeight:"bold"}}>A perfect travel edition</Text>
      </View>
      <View style={{flexDirection:"column", width:"25%", alignSelf:"flex-end", height:"100%", alignItems:"center",}}>
          <TouchableOpacity
          activeOpacity={0.9} 
          style={{ width:40, height:40, borderRadius:40, marginVertical:"10%", backgroundColor:"#F4FAFF", justifyContent:"center"}}>
                <AntDesign name='heart' size={20} color={'rgb(239, 172, 50)'} style={{alignSelf:"center"}}/>
          </TouchableOpacity>
          <Text style={{fontFamily:"Plus Jakarta Sans", marginVertical:"-1%", color:"grey", fontSize:16, alignSelf:"center"}}>15k likes</Text>
      </View>
   </View>
{/*  */}
<View style={{flexDirection:"row", width:"100%", height:50, justifyContent:"flex-start"}}>
    <Image source={require('../../assets/images/John-Doe.jpg')} style={{ marginHorizontal:"2%" ,width:40, height:40, borderRadius:50}}/>
    <Text style={{fontFamily:"Plus Jakarta Sans", color:"grey", fontSize:12, marginHorizontal:"2%", marginVertical:"3%"}}>Name Surname</Text>
</View>
{/*  */}
    <View style={{with:"100%", flexDirection:"column"}}>
    <Text style={{fontFamily:"Plus Jakarta Sans", color:"rgb(0,0,0)", fontSize:20, marginHorizontal:"2%", marginVertical:"3%", fontWeight:"bold"}}>Explore the tradition</Text>
    <Text style={{fontFamily:"Plus Jakarta Sans", color:"rgb(0,0,0)", fontSize:14, marginHorizontal:"2%", marginVertical:"3%"}}>
    In a commercial area off Golden Highway, 
    this unassuming hotel is 5 km from Gold Reef City amusement park, 
    9 km from Orlando Stadium and 12 km from Johannesburg's Central Business District.
    The straightforward rooms have free Wi-Fi, TVs,
     and tea and coffeemaking facilities, as well as desks.
    Amenities include an outdoor pool and complimentary secure parking.
    Breakfast is also available.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Nullam feugiat, nulla a varius ullamcorper, risus risus hendrerit ipsum, 
    et vulputate enim elit sit amet neque. Proin faucibus eros et elit commodo imperdiet faucibus a ligula.
     In vulputate orci id lorem dapibus scelerisque. Phasellus molestie,
      sapien sit amet efficitur vestibulum, eros orci dignissim sem, in blandit sem tellus et metus.
       Pellentesque eget turpis vel ligula volutpat volutpat. Aliquam ut molestie dolor.
        Morbi vestibulum leo et nunc suscipit, eget sagittis turpis consectetur.
         Nunc id gravida sapien. Maecenas pellentesque justo quis ullamcorper ultricies.
          Cras sodales leo ante, eu mattis mauris pretium at. Vestibulum ornare egestas ex,
           non consectetur augue viverra non.
    </Text>

    <Image source={require('../../assets/images/magazineDetailsImage1.jpg')} style={{width:"100%", height:250,}}/>

    <Text style={{fontFamily:"Plus Jakarta Sans", color:"rgb(0,0,0)", fontSize:20, marginHorizontal:"2%", marginVertical:"3%", fontWeight:"bold"}}>Explore the tradition</Text>
    <Text style={{fontFamily:"Plus Jakarta Sans", color:"rgb(0,0,0)", fontSize:14, marginHorizontal:"2%", marginVertical:"3%"}}>
    In a commercial area off Golden Highway, this unassuming hotel is 5 km from Gold Reef City amusement park,
     9 km from Orlando Stadium and 12 km from Johannesburg's Central Business District.
    The straightforward rooms have free Wi-Fi, TVs, and tea and coffeemaking facilities, as well as desks.
    Amenities include an outdoor pool and complimentary secure parking. Breakfast is also available.
    </Text>
    <Image source={require('../../assets/images/magazineDetailsImage2.jpg')} style={{width:"100%", height:250,}}/>
    </View>
      </ScrollView>
   </SafeAreaView>
   </>
  )
}