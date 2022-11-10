import React, { useState } from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image, SafeAreaView, TextInput, KeyboardAvoidingView} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Bookings({navigation, routes}) {

  const [search, setSearch] = useState('');
  return (
    <>
       <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{flex:1, height:"100%"}}
      >
    <SafeAreaView  style={{ backgroundColor:"#F4FAFF", width:"100%", height:"100%" }}>
 <View style={{height:130, backgroundColor:"#2B2B2B", borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
   <View style={{width:"95%", backgroundColor:'rgba(239, 172, 50, 0.05)', borderRadius:30, flexDirection:"row", marginVertical:"3%", height:50,marginHorizontal:"2%", justifyContent:"space-between", alignContent:"center", alignItems:"center"}}>
       <TouchableOpacity activeOpacity={2} onPress={() => navigation.openDrawer()}>
       <Feather name='menu' size={32} style={{alignSelf:"flex-start", color:"rgb(239, 172, 50)", marginHorizontal:"10%"}} />
       </TouchableOpacity>
       <TouchableOpacity onPress={() => navigation.openDrawer('')}>
       <Image source={require('../../assets/images/John-Doe.jpg')} style={{width:38, height:38, alignSelf:"flex-end", borderRadius:38, marginHorizontal:"10%"}}/>
       </TouchableOpacity>        
   </View>

   <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:34, color:"#FFFFFF", fontWeight:"bold", marginHorizontal:"5%", marginVertical:"-1%", width:"80%"}}>Booking History</Text>
   </View>

   <View style={{flexDirection:"row", marginVertical:"2%", justifyContent:"space-between", marginHorizontal:"2%"}}>
   <View style={{backgroundColor:"rgba(239, 172, 50, 0.05)", alignSelf:"center", width:"100%", borderRadius: 30, height:50, flexDirection:"row"}}>
                    <View style={{backgroundColor:"rgba(120, 120, 120, 0.1)", alignSelf:"center", width:"90%", borderRadius: 30, height:50, flexDirection:"row"}}>
                    <View style={{backgroundColor:"rgba(120, 120, 120, 0.1)", alignSelf:"center", width:"85%", borderRadius: 30, height:50, flexDirection:"row", justifyContent:"center"}}>
                    <TextInput placeholder='Search' style={{alignSelf:"flex-start", width:"95%", }} 
                    onChangeText={(search) => setSearch(search)}
                    value={search}
                    textContentType="search"
                    /> 
                    </View>
                    <Ionicons name='ios-search-outline' size={20} style={{alignSelf:"flex-start", color:"rgb(239, 172, 50)", alignSelf:"center", marginHorizontal:"4%"}} />
                    </View>
                    <Ionicons name='filter' size={20} style={{alignSelf:"flex-start", color:"rgb(239, 172, 50)",marginHorizontal:"2%",alignSelf:"center" }} />
                    </View>
   </View>
   <ScrollView>
    {/* 
       <View style={{alignSelf:"center", backgroundColor:"#FFFFFF", alignContent:"center", justifyContent:"center", alignItems:"center" ,marginHorizontal:"2%", width:"90%", height:"100%", borderRadius:30, flexDirection:"row"}}>
    </View>
    No bookings have been made.
    
    */}
   <View style={{alignSelf:"center", backgroundColor:"#FFFFFF", alignContent:"center", justifyContent:"center", alignItems:"center" ,marginHorizontal:"2%", width:"90%", height:80, borderRadius:30, flexDirection:"row"}}>
      <View style={{flexDirection:"column", width:"70%", height:"100%",justifyContent:"center"}}>
            <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgb(0,0,0)", fontWeight:"700",}}>Hotel Monica</Text>
           <View style={{flexDirection:"row"}}>
            <Text>27 Jul, 202x </Text> 
            <AntDesign name='arrowright' size={20} style={{fontWeight:"500"}}/>
            <Text> 17 Aug, 202x</Text>
            </View>
      </View>
      <View style={{width:"20%", height:"100%", justifyContent:"center"}}>
        <TouchableOpacity style={{width:50, height:50, borderRadius:50, justifyContent:"center", backgroundColor:"rgb(239, 172, 50)", alignSelf:"flex-end"}}>
            <MaterialIcons name='keyboard-arrow-right' size={34} color={'#FFFFFF'} style={{alignSelf:"center"}}/>
        </TouchableOpacity>
      </View>
   </View>
   <View style={{alignSelf:"center", backgroundColor:"#FFFFFF", alignContent:"center", justifyContent:"center", alignItems:"center" ,marginHorizontal:"2%", width:"90%", height:80, borderRadius:30, flexDirection:"row", marginVertical:"2%"}}>
      <View style={{flexDirection:"column", width:"70%", height:"100%",justifyContent:"center"}}>
            <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgb(0,0,0)", fontWeight:"700",}}>Hotel Monica</Text>
           <View style={{flexDirection:"row"}}>
            <Text>27 Jul, 202x </Text> 
            <AntDesign name='arrowright' size={20} style={{fontWeight:"500"}}/>
            <Text> 17 Aug, 202x</Text>
            </View>
      </View>
      <View style={{width:"20%", height:"100%", justifyContent:"center"}}>
        <TouchableOpacity activeOpacity={0.9}
         style={{width:50, height:50, borderRadius:50, justifyContent:"center", backgroundColor:"rgb(239, 172, 50)", alignSelf:"flex-end"}}
          onPress={() => {navigation.navigate('BookingDetails', {details: 'details'})}}
        >
            <MaterialIcons name='keyboard-arrow-right' size={34} color={'#FFFFFF'} style={{alignSelf:"center"}}/>
        </TouchableOpacity>
      </View>
   </View>
   </ScrollView>

        <View>
        </View>
   </SafeAreaView>
   </KeyboardAvoidingView>
</>
  )
}