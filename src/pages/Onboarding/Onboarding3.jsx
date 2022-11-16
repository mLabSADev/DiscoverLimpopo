import React, { Component } from 'react';
import {View, Text, SafeAreaView, ImageBackground, Image, Button, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';




export default function Onboarding3 ({navigation}){


    return (
        <View style={{flex:6}}>
        <ImageBackground source={require('../../assets/images/Breakpoint-3.png')} style={{width:"100%", height:"100%"}}>
        <View style={{flex:4}}></View>
         <View style={{ flex:2, backgroundColor: "#FFFFFF", borderTopLeftRadius: 30, borderTopRightRadius: 30, height:"100%"}}>
         <View style={{flexDirection:"column", height:"100%", width:"100%"}}>
             <View style={{ flex:1, flexDirection:"row", width:"100%", height:"100%", justifyContent:"space-between"}}>
               <Text style={{ alignSelf:"flex-start", fontSize:32,fontFamily:"Plus Jakarta Sans", fontWeight:"bold", width:"100%", color:'#000000', marginVertical:"1.7%", marginHorizontal:"5%"}}>
               You can make a booking
                </Text>
              {/* <TouchableWithoutFeedback
              activeOpacity={0.9}
              onPress={() => navigation.navigate('Signin')}
              >
               <Text style={{ display:"flex", alignSelf:"flex-end", fontSize:18, marginVertical:"7%", width:"50%", marginHorizontal:"20%",color:"grey", fontWeight:"800"  }}>SKIP</Text>
               </TouchableWithoutFeedback> */}
               </View>                
             <View style={{flex:1.5, flexDirection:"row", }}>
                 <Text style={{display:"flex", alignSelf:"flex-start", fontSize:16,fontFamily:"Plus Jakarta Sans", fontWeight:"100", width:"100%", height:"100%", color:'#2A2A2A', marginHorizontal:"5%"}}>
                 If you're planning on travelling anytime soon, we accommodate booking trough the app to your most convenient location.</Text>               
                 </View>  
             <View style={{flex:1.5,  width:"100%", height:"100%"}}>
               <TouchableOpacity 
               activeOpacity={0.9}
               onPress={() => navigation.navigate('Signin')}
               style={{alignSelf: "center", opacity:0.8, backgroundColor:"rgb(239, 172, 50)", width:"90%", height:"65%", justifyContent:"center", borderRadius:30,}}>
                 <Text style={{alignSelf:"center", color:"#FFFFFF", fontWeight:"800", fontFamily:"Plus Jakarta Sans", fontSize:14}}>NEXT</Text>
                 </TouchableOpacity>
               </View>                  
             </View>
         </View>
     </ImageBackground>
 </View>
    )

}