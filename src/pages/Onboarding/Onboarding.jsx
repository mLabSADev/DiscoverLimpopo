import React, { useState } from 'react';
import {View, Text, SafeAreaView, ImageBackground, Image, Button, TouchableOpacity} from 'react-native';
import Notification from '../Components/Notification';

export default function Onboarding({navigation}) {

  const [isVisible, setIsVisible] = useState();
  const [modalVisible, setModalVisible] = useState(false);  
  return (
<View style={{flex:6}}>
       <ImageBackground source={require('../../assets/images/onboarding.jpg')} style={{width:"100%", height:"100%"}}>
       <View style={{flex:4}}>
       {/* {modalVisible && (
                <Notification
                  isVisible={modalVisible}
                  color={"red"}
                  // onClose={() => setModalVisible(false)}
                />
              )} */}
       </View>
        <View style={{ flex:2, backgroundColor: "#FFFFFF", borderTopLeftRadius: 30, borderTopRightRadius: 30, height:"100%"}}>
        <View style={{display: "flex", flexDirection:"column", height:"100%", width:"100%"}}>
            <View style={{ flex:2, flexDirection:"row", width:"100%", height:"100%", alignSelf:"center", justifyContent:"center"}}>
              <Text style={{ display:"flex", alignSelf:"flex-start", fontSize:32, fontFamily:"inter", fontWeight:"bold", width:"60%", height:"100%", color:'#000000', marginVertical:"2%",}}>Exclusive Tour Packages</Text>
             <TouchableOpacity
               activeOpacity={0.9}
               onPress={() => setModalVisible(true) }>
              <Text style={{justifyContent:"center",textAlign:"center", textAlignVertical:"center", alignSelf:"flex-end", fontSize:14, marginVertical:"7%", width:"40%", marginHorizontal:"11%",color:"grey", fontWeight:"800", height:"100%" }}>SKIP</Text>
              </TouchableOpacity>
              </View>                
            <View style={{flex:1.5, flexDirection:"row", }}>
                <Text style={{display:"flex", alignSelf:"flex-start", fontSize:16, fontFamily:"inter", fontWeight:"100", width:"88%", height:"100%", color:'#2A2A2A', marginHorizontal:"5%", marginVertical:"1.2%"}}>
                Limpopo Guide users have access to different trip packages offered by our trusted and verified partners.</Text>
              </View>  
            <View style={{flex:1.5,  width:"100%", height:"100%"}}>
              <TouchableOpacity 
              activeOpacity={0.9}
              onPress={() => navigation.navigate('Onboarding2')}
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