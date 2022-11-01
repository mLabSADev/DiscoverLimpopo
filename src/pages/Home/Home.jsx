import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image, ImageBackground, ScrollView, FlatList } from 'react-native';

export default function Home({navigation}) {

  return (
    <SafeAreaView  style={{ backgroundColor:"#F4FAFF", width:"100%", height:"100%" }}>
    <ScrollView style={{width:"100%", height:"100%"}} scrollEnabled={true}>
        <View>
       <ImageBackground style={{width:"100%", height:125}} source={require("../../assets/images/advert.jpg")}>
        <View style={{marginVertical:"2%", flexDirection:"column", marginHorizontal:"3%", height:"90%"}}>
                <View style={{ borderWidth:1, borderColor:"rgb(239, 172, 50)", borderRadius:30, width:110, height:30 ,justifyContent:"center"}}>
                    <Text style={{color:"#FFFFFF", alignSelf:"center", }}>advertisement</Text>
                </View>
                <View style={{width: "100%", flexDirection:"row", justifyContent:"center", height:"55%" }}>
                    <Text style={{ width:"80%", fontSize:24, fontWeight:"bold", color:"#FFFFFF"}}>PEERMONT GIN & NOMALI GIN LAUNCH</Text>
                    <Text style={{color:"rgb(239, 172, 50)", width:"20%", alignSelf:"center", fontWeight:"bold"}}>VIEW</Text>
                </View>
                <Text  style={{color:"#FFFFFF"}}>DISCOVER LIMPOPO</Text>
        </View>

       </ImageBackground>
       </View>
        <View style={{width:"95%", backgroundColor:'rgba(239, 172, 50, 0.05)', borderRadius:30, flexDirection:"row", marginVertical:"3%", height:50,marginHorizontal:"2%", justifyContent:"space-between", alignContent:"center", alignItems:"center"}}>
            <TouchableOpacity onPress={() => navigation.openDrawer('', {isScreen: true})}>
            <Image source={require('../../assets/images/Menu-Rounded.png')} style={{width:38, height:38, alignSelf:"flex-start", backgroundColor:"rgba(239, 172, 50, 0.05)", marginHorizontal:"10%"}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Account')}>
            <Image source={require('../../assets/images/John-Doe.jpg')} style={{width:38, height:38, alignSelf:"flex-end", borderRadius:38, marginHorizontal:"10%"}}/>
            </TouchableOpacity>        
        </View>
        <View>
        <Text style={{fontWeight:"bold", fontSize:20, color:"rgb(0,0,0)", marginHorizontal:"3%"}}>Accomodation</Text>
        <View style={{ width:"80%", height:200, borderRadius:30, flexDirection:"column" ,backgroundColor:"grey", marginHorizontal:"2%"}}> 
                <Image source={require("../../assets/images/Accomodation.jpg")} style={{borderTopRightRadius:30, borderTopLeftRadius:30 ,width:"100%", height:100}}/>
        <View style={{width:"100%", height:100,borderRadius:30, flexDirection:"row", backgroundColor:"red"}}>
          <View style={{width:"80%", height:100, backgroundColor:"skyblue" }}>
            <View>
              <Text style={{fontSize:18, fontWeight:"bold", marginHorizontal:"5%", marginVertical:"5%" }}>Opens in new window Flying Falcon</Text>

            </View>
          </View>
          <View style={{width:"20%", height:100}}></View>  
        </View>
        </View>
        
        </View>
       </ScrollView>
    </SafeAreaView>
    )

}
