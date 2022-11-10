import React from 'react';
import { TouchableOpacity, SafeAreaView, } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import ReviewComponent from '../../Components/ReviewComponent';
import MasonryList from '@react-native-seoul/masonry-list';
import { Box, Image, Text, ScrollView } from 'native-base';


export default function AccomodationDetails({navigation, route}) {

  return (
    
    <>
    <SafeAreaView >
   <ScrollView style={{ backgroundColor:"#FFFFFF", width:"100%", height:"100%" }} showsVerticalScrollIndicator={false}>
   <Box style={{ height:390, backgroundColor:"grey", borderBottomLeftRadius:30, borderBottomRightRadius:30, width:"100%"}}>
       <Image alt="accomodation" source={require('../../assets/images/Accomodation2.jpg')} resizeMode="cover" style={{width:"100%", height:"100%",  borderBottomLeftRadius:30, borderBottomRightRadius:30}}/>   
   <Box style={{width:"95%", borderRadius:30, flexDirection:"column", marginVertical:"-95%", height:"100%",marginHorizontal:"2%", justifyContent:"space-between", alignContent:"center", alignItems:"center"}}>
  <Box style={{width:"100%", borderRadius:30, flexDirection:"row", marginVertical:"5%",justifyContent:"space-between", alignContent:"center", alignItems:"center"}}>
  <Box>
          <TouchableOpacity activeOpacity={2} onPress={() => navigation.navigate('Home')} style={{backgroundColor:"rgb(239, 172, 50)", borderRadius:30, height:50, width:50, alignSelf:"center", justifyContent:"center"}}>
          <MaterialIcons name='keyboard-arrow-left' size={32} style={{alignSelf:"center",alignContent:"center" ,color:"#FFFFFF", marginHorizontal:"10%"}} />
          </TouchableOpacity>
  </Box>
  <Box style={{alignSelf:"flex-end"}}>
    <TouchableOpacity onPress={() => navigation.navigate('Account')}>
       <Image alt='profile' source={require('../../assets/images/John-Doe.jpg')} style={{width:38, height:38, alignSelf:"flex-end", borderRadius:38, marginHorizontal:"10%"}}/>
       </TouchableOpacity>
  </Box>  
    </Box>  
     
    <Box style={{width:"42%", borderRadius:30,flexDirection:"row", marginVertical:"65%", height:40, backgroundColor:"#FFFFFF", alignSelf:"flex-end", justifyContent:"center", alignItems:"center", }}>
      <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:20, color:"rgb(0,0,0)", fontWeight:"bold" }}>
      R 50000.00 pppn
      </Text>
   </Box>
   </Box>
   
   </Box>
   {/*  */}
   <Box style={{backgroundColor:"#F4FAFF"}}>
   <Box style={{width:"100%", marginHorizontal:"4%", marginVertical:"5%" }}>
       <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:34, color:"rgb(0,0,0)", fontWeight:"bold"}}>Opens in new window Flying Falcon</Text>
       <Box style={{marginVertical:"4%", flexDirection:"row"}}>
                   <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:20, color:"rgb(0,0,0)" }}>5.5</Text>
                   <Box style={{flexDirection:"row", marginHorizontal:"2%"}}>
                   <AntDesign name='star' size={20} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"rgba(120, 120, 120, 0.5)"}}/>
                   <AntDesign name='star' size={20} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"rgba(120, 120, 120, 0.5)"}}/>
                   <AntDesign name='star' size={20} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"rgba(120, 120, 120, 0.5)"}}/>
                   <AntDesign name='star' size={20} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"rgba(120, 120, 120, 0.5)"}}/>
                   <AntDesign name='star' size={20} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"rgba(120, 120, 120, 0.5)"}}/>
                 
                   <Entypo name='dot-single' size={20} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"rgba(120, 120, 120, 0.5)"}}/>
                   <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:20, color:"rgb(239, 172, 50)", justifyContent:"center" }}>300 reviews</Text>
                   </Box>
       </Box>
       <Box style={{flexDirection:"row"}}>
               <MaterialIcons name='location-on' size={16}  style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"rgb(0,0,0)"}}/>
               <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", width:"80%", marginHorizontal:"2%"}}>Columbine Ave &, Golden Hwy, Southgate, Johannesburg, 2082</Text>
       </Box>
       <Box style={{flexDirection:"row", marginVertical:"2%"}}>
               <MaterialIcons name='location-on' size={16}  style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"rgb(0,0,0)"}}/>
               <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", width:"80%", marginHorizontal:"2%"}}>064 222 5557</Text>
       </Box>
       <Box style={{flexDirection:"column"}}>
       <Box style={{flexDirection:"row"}}>
               <MaterialIcons name='access-time' size={16}  style={{fontWeight:"500", justifyContent:"flex-start", alignSelf:"flex-start", color:"rgb(0,0,0)"}}/>
               <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", marginHorizontal:"2%"}}>Check in--14:00</Text>
               </Box>
                <Box style={{flexDirection:"row", marginHorizontal:"4%"}}>
               <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", marginHorizontal:"2%"}}>Check out--11:00</Text>
               </Box>
       </Box>
   </Box>

   <TouchableOpacity
                   activeOpacity={0.9} 
                   onPress={() => {}}
                       style={{alignSelf: "center", backgroundColor:"rgb(239, 172, 50)", width:"90%", height:50, opacity:3 ,justifyContent:"center", borderRadius:30,}}>
                           <Text style={{alignSelf:"center", color:"#FFFFFF", fontWeight:"bold", fontFamily:"Plus Jakarta Sans", fontSize:14}}>CHECK IN</Text>
   </TouchableOpacity>
   <Box style={{height:15}}></Box>
   </Box>
   {/*  */}
   <Box style={{ marginHorizontal:"4%", marginVertical:"2%"}}>
   <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:20, color:"rgb(0,0,0)", fontWeight:"bold"}}>Accommodation Details</Text>
   <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", marginVertical:"2%", width:"90%" }}>
   In a commercial area off Golden Highway, this unassuming hotel is 5 km from Gold Reef City amusement park, 
   9 km from Orlando Stadium and 12 km from Johannesburg's Central Business District.
The straightforward rooms have free Wi-Fi, TVs, and tea and coffeemaking facilities, as well as desks.
Amenities include an outdoor pool and complimentary secure parking. Breakfast is also available.
       </Text>
   </Box>
   <Box style={{ marginHorizontal:"4%", marginVertical:"5%", height:"11%"}}>
   <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:20, color:"rgb(0,0,0)", fontWeight:"700"}}>Amenities</Text>
  
   <Box style={{marginVertical:"4%" ,flexDirection:"row", with:"80%", justifyContent:"space-around"}}>
                                <Box style={{flexDirection:"column", alignItems:"center", with:"100%",}}>
                                  <Box style={{backgroundColor:"#F4FAFF", justifyContent:"center", width:50, height:50, borderRadius:30, alignItems:"center" }}>
                                    <MaterialIcons name='tv' size={24} color="rgb(0,0,0)"/>
                                  </Box>
                                  <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", marginVertical:"5%",}}>TV</Text>
                                </Box>
                                <Box style={{flexDirection:"column", alignItems:"center", with:"100%",}}>
                                  <Box style={{backgroundColor:"#F4FAFF", justifyContent:"center", width:50, height:50, borderRadius:30, alignItems:"center" }}>
                                    <MaterialIcons name='tv' size={24} color="rgb(0,0,0)"/>
                                  </Box>
                                  <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", marginVertical:"5%",}}>TV</Text>
                                </Box>
                                <Box style={{flexDirection:"column", alignItems:"center", with:"100%",}}>
                                  <Box style={{backgroundColor:"#F4FAFF", justifyContent:"center", width:50, height:50, borderRadius:30, alignItems:"center" }}>
                                    <MaterialIcons name='tv' size={24} color="rgb(0,0,0)"/>
                                  </Box>
                                  <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", marginVertical:"5%",}}>TV</Text>
                                </Box>
                                <Box style={{flexDirection:"column", alignItems:"center", with:"100%",}}>
                                  <Box style={{backgroundColor:"#F4FAFF", justifyContent:"center", width:50, height:50, borderRadius:30, alignItems:"center" }}>
                                    <MaterialIcons name='tv' size={24} color="rgb(0,0,0)"/>
                                  </Box>
                                  <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", marginVertical:"5%",}}>TV</Text>
                                </Box>
    </Box>
    <Box style={{marginVertical:"4%" ,flexDirection:"row", with:"80%", justifyContent:"space-around"}}>
                                <Box style={{flexDirection:"column", alignItems:"center", with:"100%",}}>
                                  <Box style={{backgroundColor:"#F4FAFF" ,justifyContent:"center", width:50, height:50, borderRadius:30, alignItems:"center" }}>
                                    <MaterialIcons name='tv' size={24} color="rgb(0,0,0)"/>
                                  </Box>
                                  <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", marginVertical:"5%",}}>TV</Text>
                                </Box>
                                <Box style={{flexDirection:"column", alignItems:"center", with:"100%",}}>
                                  <Box style={{backgroundColor:"#F4FAFF", justifyContent:"center", width:50, height:50, borderRadius:30, alignItems:"center" }}>
                                    <MaterialIcons name='tv' size={24} color="rgb(0,0,0)"/>
                                  </Box>
                                  <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", marginVertical:"5%",}}>TV</Text>
                                </Box>
                                <Box style={{flexDirection:"column", alignItems:"center", with:"100%",}}>
                                  <Box style={{backgroundColor:"#F4FAFF", justifyContent:"center", width:50, height:50, borderRadius:30, alignItems:"center" }}>
                                    <MaterialIcons name='tv' size={24} color="rgb(0,0,0)"/>
                                  </Box>
                                  <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", marginVertical:"5%",}}>TV</Text>
                                </Box>
                                <Box style={{flexDirection:"column", alignItems:"center", with:"100%",}}>
                                  <Box style={{backgroundColor:"#F4FAFF", justifyContent:"center", width:50, height:50, borderRadius:30, alignItems:"center" }}>
                                    <MaterialIcons name='tv' size={24} color="rgb(0,0,0)"/>
                                  </Box>
                                  <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", marginVertical:"5%",}}>TV</Text>
                                </Box>
    </Box>
    </Box>
    <Image alt='resto1' source={require('../../assets/images/RestoDetails1.jpg')} style={{width:"100%", height:438}}/>
   <Box style={{width:"80%", alignSelf:"center", marginVertical:"2%"}}>
       <Image alt='resto2' source={require('../../assets/images/RestoDetails1.jpg')} style={{width:49, height:49, borderRadius:10, borderColor: 'rgb(239, 172, 50)', borderWidth:1}}/>
   </Box>
   <Box style={{width:"100%", marginHorizontal:"4%", marginVertical:"4%"}}>
   <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:24, color:"rgb(0,0,0)", fontWeight:"bold"}}>Reviews</Text>
       <Box style={{height:110, marginVertical:"4%", marginHorizontal:"-3%"}}>
           <ReviewComponent/>
       </Box>
   </Box>


   <Box>
     <TouchableOpacity
           activeOpacity={0.9} 
               onPress={() => {}}>
       <Text style={{alignSelf:"center", fontSize:14,fontFamily:"Plus Jakarta Sans",  fontWeight:"700", color:'rgb(239, 172, 50)', marginVertical:"-1%"}}>LOAD MORE</Text>                
       </TouchableOpacity>
   </Box>
    </ScrollView></SafeAreaView></>
  )
}