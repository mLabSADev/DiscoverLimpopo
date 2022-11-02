import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image, ImageBackground, ScrollView, FlatList } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';


export default function Home({navigation}) {

  return (
    <SafeAreaView  style={{ backgroundColor:"#F4FAFF", width:"100%", height:"100%" }}>
    <ScrollView style={{width:"100%", height:"100%"}} scrollEnabled={true} showsVerticalScrollIndicator={false}>
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
            <Feather name='menu' size={32} style={{alignSelf:"flex-start", color:"rgb(239, 172, 50)", marginHorizontal:"10%"}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Account')}>
            <Image source={require('../../assets/images/John-Doe.jpg')} style={{width:38, height:38, alignSelf:"flex-end", borderRadius:38, marginHorizontal:"10%"}}/>
            </TouchableOpacity>        
        </View>
        {/* Accomodation */}
        <View style={{width:"100%"}}>
        <Text style={{fontWeight:"bold", fontSize:20, color:"rgb(0,0,0)", marginHorizontal:"3%"}}>Accomodation</Text>
        <View style={{ width:"70%", height:285, borderRadius:30, flexDirection:"column" ,backgroundColor:"grey", marginHorizontal:"2%", marginVertical:"2%"}}> 
                <Image source={require("../../assets/images/Accomodation.jpg")} style={{borderTopRightRadius:30, borderTopLeftRadius:30 ,width:"100%", height:120}}/>
        <View style={{width:"100%", height:165, flexDirection:"row", backgroundColor:"#FFFFFF", borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
          <View style={{width:"80%", height:130 }}>
            <View>
              <Text style={{fontSize:16, fontWeight:"bold", marginHorizontal:"5%", marginVertical:"5%", color:"rgb(0,0,0)" }}>Opens in new window Flying Falcon</Text>
              <Text style={{marginHorizontal:"5%", marginVertical:"-4%", color:"rgb(0,0,0)" }}>5.5</Text>
              <Text style={{fontSize:14, width:"95%", marginHorizontal:"5%", marginVertical:"3%", color:"rgb(0,0,0)" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse…
            </Text>
            <View style={{flexDirection:"row", width:"80%", marginHorizontal:"5%" }}>
              <View style={{borderColor:"rgb(239, 172, 50)", flexDirection:"row", borderRadius:30, borderWidth:1, justifyContent:"center", width:70 }}> 
              <MaterialIcons name='pool' size={24} color={'rgb(239, 172, 50)'}/>
              <Text style={{color:"rgb(239, 172, 50)"}}>pool</Text></View>
            </View>
            </View>
          </View>
          <View style={{width:"20%", height:100}}>
          <Image source={require("../../assets/images/Accomodation.jpg")} style={{width:40, height:40, alignSelf:"flex-start"}}/>

            </View>  
        </View>
        </View>
                  <Text style={{alignSelf:"center", color:"rgb(239, 172, 50)", fontWeight:"bold"}}> VIEW MORE</Text>
        </View>
        {/* Restaurants */}
        <View style={{width:"100%"}}>
        <Text style={{fontWeight:"bold", fontSize:20, color:"rgb(0,0,0)", marginHorizontal:"3%"}}>Restaurant</Text>
        <View style={{marginVertical:"2%"}}>
          <View style={{width:"95%", height: 125,alignSelf:"center", flexDirection:"row", borderRadius:30, backgroundColor:"grey"}}>
            <View style={{width: "75%", height:"100%", flexDirection:"column"}}>
                <Text style={{fontSize:16, fontWeight:"bold", color:"rgb(0,0,0)", marginHorizontal:"7%", marginVertical:"5%"}}>Grab & Go Rabb Meals</Text>
                <Text style={{marginHorizontal:"7%", marginVertical:"-4%", color:"rgb(0,0,0)" }}>5.5</Text>
                <Text style={{marginHorizontal:"7%", marginVertical:"5%", color:"rgb(0,0,0)", width:"100%" }}>1234x building name and long address...</Text>
              <View style={{flexDirection:"row", width:"100%", marginHorizontal:"7%", marginVertical:"-1%", }}>
              <View style={{borderColor:"rgb(239, 172, 50)", flexDirection:"row", borderRadius:30, borderWidth:1, justifyContent:"center", width:80 }}> 
              <Feather name='check' size={22} color={'rgb(239, 172, 50)'}/>
              <Text style={{color:"rgb(239, 172, 50)"}}>dine in</Text>
              </View>
              <View style={{borderColor:"rgb(239, 172, 50)", flexDirection:"row", borderRadius:30, borderWidth:1, justifyContent:"center", width:80, marginHorizontal:"3%"}}> 
              <Feather name='check' size={22} color={'rgb(239, 172, 50)'}/>
              <Text style={{color:"rgb(239, 172, 50)"}}>delivery</Text>
              </View>
              <View style={{borderColor:"rgb(239, 172, 50)", flexDirection:"row", borderRadius:30, borderWidth:1, justifyContent:"center", width:90,  }}> 
              <Feather name='check' size={22} color={'rgb(239, 172, 50)'}/>
              <Text style={{color:"rgb(239, 172, 50)"}}>takeaway</Text>
              </View>
            </View>
            </View>
            <View style={{width:"25%", height:"100%"}}>
            <Image source={require("../../assets/images/Accomodation.jpg")} style={{width:"100%", height:"100%", borderTopRightRadius:30, borderBottomRightRadius:30}}/>
            </View>
          </View>
          <Text style={{alignSelf:"center", color:"rgb(239, 172, 50)", fontWeight:"bold", marginVertical:"2%"}}> VIEW MORE</Text>

        </View>
        </View>

        {/* Magazines */}
        <View style={{marginVertical:"4%"}}>
          <View
          style={{width:"95%", height: 290, backgroundColor:"rgba(42, 42, 42, 0.95)", alignSelf:"center", borderRadius:30}}>
          <Image source={require("../../assets/images/Accomodation.jpg")} style={{width:"40%", height:"60%", borderRadius:20, marginVertical:"-5%", alignSelf:"center"}}/>
          <Text style={{color:"#FFFFFF", fontSize:24, fontWeight:"bold", marginHorizontal:"5%", marginVertical:"6%" }}>Our magazines are curated for travelling in mind</Text>
          <TouchableOpacity
                activeOpacity={0.9} 
                onPress={() => {navigation.navigate('Magazine')}}
                    style={{alignSelf: "center", borderColor:"rgb(239, 172, 50)", borderWidth:1 , width:"90%", height:50, marginVertical:"-3%" ,justifyContent:"center", borderRadius:30,}}>
                        <Text style={{alignSelf:"center", color:"rgb(239, 172, 50)", fontWeight:"bold", fontStyle:"inter", fontSize:14}}>VIEW ALL</Text>
                </TouchableOpacity>

          </View>
        </View>
        <View style={{height:5}}></View>
       </ScrollView>
    </SafeAreaView>
    )

}
