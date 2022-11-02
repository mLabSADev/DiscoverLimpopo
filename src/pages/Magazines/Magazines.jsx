import React from 'react';
import {View, Text, ImageBackground, ScrollView, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
export default function Magazines({navigation, routes}) {

    
  return (
    <>
      <SafeAreaView  style={{ backgroundColor:"#F4FAFF", width:"100%", height:"100%" }}>
      <View style={{height:180, backgroundColor:"#2B2B2B", borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
        <View style={{width:"95%", backgroundColor:'rgba(239, 172, 50, 0.05)', borderRadius:30, flexDirection:"row", marginVertical:"3%", height:50,marginHorizontal:"2%", justifyContent:"space-between", alignContent:"center", alignItems:"center"}}>
            <TouchableOpacity activeOpacity={2} onPress={() => navigation.openDrawer('', {isScreen: true})}>
            <Feather name='menu' size={32} style={{alignSelf:"flex-start", color:"rgb(239, 172, 50)", marginHorizontal:"10%"}} />
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Account')}>
            <Image source={require('../../assets/images/John-Doe.jpg')} style={{width:38, height:38, alignSelf:"flex-end", borderRadius:38, marginHorizontal:"10%"}}/>
            </TouchableOpacity>         */}
        </View>
         <Text style={{fontSize:34, color:"#FFFFFF", fontWeight:"bold", marginHorizontal:"5%", marginVertical:"-1%", width:"80%"}}>Magazines</Text>
         <Text style={{fontSize:16, color:"#FFFFFF", marginHorizontal:"5%", marginVertical:"2%", width:"80%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>

        </View>
    <ScrollView style={{ width:"100%", height:"100%"}} scrollEnabled={true} showsVerticalScrollIndicator={false}>
      <TouchableOpacity activeOpacity={1}
        onPress={() => {navigation.navigate('MagazineDetails')}}
      style={{marginVertical:"2%", marginHorizontal:"4%"}}>
        <View style={{ height:200, width:"50%", backgroundColor:"grey", borderRadius:20}}>
              <Image source={require('../../assets/images/magazine1.jpg')} 
               style={{width:"100%", height:155, borderTopLeftRadius:20, borderTopRightRadius:20}}
              />
              <View style={{width:"100%", height:45, backgroundColor:"#2B2B2B", borderBottomLeftRadius:20, borderBottomRightRadius:20, alignContent:"center", justifyContent:"center"}}>
                <Text style={{fontSize:16, fontWeight:"700", color:"#FFFFFF", marginHorizontal:"10%"}}>First Edition</Text>
              </View>
        </View>
      </TouchableOpacity>
       </ScrollView>
       </SafeAreaView>
    </>
  )
}