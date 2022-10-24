import React from 'react';
import {View, Text, SafeAreaView, ImageBackground, Image, Button, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

export default function Onboarding2({navigation}) {
  return (
    <View style={{flex:6}}>
       <ImageBackground source={require('../../assets/images/onboarding.jpg')} style={{width:"100%", height:"100%"}}>
       <View style={{flex:4}}></View>
        <View style={{ flex:2, backgroundColor: "#FFFFFF", borderTopLeftRadius: 30, borderTopRightRadius: 30, height:"100%"}}>
        <View style={{display: "flex", flexDirection:"column", height:"100%", width:"100%"}}>
            <View style={{ displayL:"flex", flex:2, flexDirection:"row", width:"100%", height:"100%", justifyContent:"space-between"}}>
              <Text style={{ display:"flex", alignSelf:"flex-start", fontSize:32, fontFamily:"inter", fontWeight:"bold", width:"50%", height:"100%", color:'#000000', marginVertical:"2%", marginHorizontal:"5%"}}>
              Exciting Competitions
                </Text>
             <TouchableWithoutFeedback
             activeOpacity={0.9}
             onPress={() => navigation.navigate('Signin')}
             >
              <Text style={{ display:"flex", alignSelf:"flex-end", fontSize:14, marginVertical:"7%", width:"50%", marginHorizontal:"20%",color:"grey", fontWeight:"800"  }}>SKIP</Text>
              </TouchableWithoutFeedback>
              </View>                
            <View style={{flex:1.5, flexDirection:"row", }}>
                <Text style={{display:"flex", alignSelf:"flex-start", fontSize:14, fontFamily:"inter", fontWeight:"100", width:"88%", height:"100%", color:'#2A2A2A', marginHorizontal:"5%",}}>
                An opportunity to win various prizes awarded by our trusted partners, includes vouchers (travel, food, spa treatments), travel accessories and various consumer products.</Text>
              </View>  
            <View style={{flex:1.5,  width:"100%", height:"100%"}}>
              <TouchableOpacity 
              activeOpacity={0.9}
              onPress={() => navigation.navigate('Onboarding3')}
              style={{alignSelf: "center", opacity:0.8, backgroundColor:"rgb(239, 172, 50)", width:"90%", height:"65%", justifyContent:"center", marginVertical:"1.5%", borderRadius:30,}}>
                <Text style={{alignSelf:"center", color:"#FFFFFF", fontWeight:"800", font:"inter", fontSize:14}}>NEXT</Text>
                </TouchableOpacity>
              </View>                  
            </View>
        </View>
    </ImageBackground>
</View>
  )
}