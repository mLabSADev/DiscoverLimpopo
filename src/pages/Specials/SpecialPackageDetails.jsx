import React from 'react';
import { Box, Text, ScrollView, Image} from 'native-base';
import {SafeAreaView, TouchableOpacity, ImageBackground, FlatList, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function SpecialPackageDetails({navigation, routes}) {
  return (
      <>
       <SafeAreaView  style={{ backgroundColor:"#F4FAFF", width:"100%", height:"100%" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
    <Box style={{height:150, backgroundColor:"#2B2B2B", borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
      <Box style={{width:"95%", backgroundColor:'rgba(239, 172, 50, 0.05)', borderRadius:30, flexDirection:"row", marginVertical:"3%", height:50,marginHorizontal:"2%", justifyContent:"space-between", alignContent:"center", alignItems:"center"}}>
          <TouchableOpacity activeOpacity={2} onPress={() => navigation.navigate('SpecialPackages')}>
          <Ionicons name='chevron-back' size={32} style={{alignSelf:"flex-start", color:"rgb(239, 172, 50)", marginHorizontal:"10%"}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Account')}>
          <Image alt='profile' source={require('../../assets/images/John-Doe.jpg')} style={{width:38, height:38, alignSelf:"flex-end", borderRadius:38, marginHorizontal:"10%"}}/>
          </TouchableOpacity>        
      </Box>

      <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"#FFFFFF", fontWeight:"bold", marginHorizontal:"5%", width:"80%"}}>Special Packages</Text>
       <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:24, color:"#FFFFFF", fontWeight:"bold", marginHorizontal:"5%", marginVertical:"1%", width:"80%"}}>PEERMONT GIN & NOMALI GIN LAUNCH</Text>
      </Box>

      <Box style={{marginVertical:"2%"}}>
        <Image alt='package' source={require('../../assets/images/Package1.jpg')} style={{height:466, width:"100%"}}/>
      </Box>

      <Box style={{flexDirection:"column", marginHorizontal:"2%"}}>
        <Box style={{borderColor:"rgb(239, 172, 50)", borderWidth:1, width:90, alignItems:"center", borderRadius:30 }}>
                <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(239, 172, 50)",}}>
                gin launch
                </Text>
        </Box>
        <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:20, color:"rgb(0,0,0)", fontWeight:"bold", marginVertical:"2%"}}>
        MANATION HOLDINGS PRESENTSPEERMONT GIN & NOMALI GIN LAUNCH
        </Text>
        <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", fontWeight:"700", marginVertical:"2%"}}>
        MC : ASHIFASHABA (Energy FM)
        </Text>

        <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgb(0,0,0)", fontWeight:"700", marginVertical:"2%"}}>
        DJ Line Up
        </Text>
        <Box style={{flexDirection:"row"}}>
            <AntDesign name='arrowright' size={20} color={'rgb(0,0,0)'} />
            <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", fontWeight:"500", }}>
            Toy Souljah
            </Text>
        </Box>
        <Box style={{flexDirection:"row"}}>
            <AntDesign name='arrowright' size={20} color={'rgb(0,0,0)'} />
            <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", fontWeight:"500", }}>
            Toy Souljah
            </Text>
        </Box>
        <Box style={{flexDirection:"row"}}>
            <AntDesign name='arrowright' size={20} color={'rgb(0,0,0)'} />
            <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", fontWeight:"500", }}>
            Toy Souljah
            </Text>
        </Box>
        <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", fontWeight:"500", marginVertical:"2%" }}>
            DATE : 24 SEP 2021 (FRIDAY)</Text>

            <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", fontWeight:"700", marginVertical:"4%" }}>
            VENUE : R555 THABA MOSHATE
            </Text>

            <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", fontWeight:"600", marginVertical:"2%" }}>
            ENTRY FEE : R150
            </Text>
            <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", fontWeight:"600", marginVertical:"2%" }}>
            ENTRY FEE : R150
            </Text>
      </Box>
      </ScrollView>
    </SafeAreaView>
    </>
    );

}