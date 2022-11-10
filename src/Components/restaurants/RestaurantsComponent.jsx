import React, { useState } from 'react';
import { Text, Image, Box, Card} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';


const RestaurantsComponent = ({navigation, route}) => {


  const [email, setEmail] =useState();

  return (
    <>
    <Box style={{width:"95%", height: 125,alignSelf:"center", flexDirection:"row", borderRadius:30, backgroundColor:"#FFFFFF"}}>
            <Box style={{width: "80%", height:"100%", flexDirection:"column"}}>
                <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:20, fontWeight:"bold", color:"rgb(0,0,0)", marginHorizontal:"6%", marginVertical:"4%"}}>Grab & Go Rabb Meals</Text>
              <Box style={{marginHorizontal:"6%", marginVertical:"-4%", flexDirection:"row"}}>
                <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:12, color:"rgb(0,0,0)" }}>5.5</Text>
                <Box style={{flexDirection:"row", marginVertical:"2%", marginHorizontal:"2%"}}>
                <AntDesign name='star' size={7} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"lightgrey"}}/>
                <AntDesign name='star' size={7} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"lightgrey"}}/>
                <AntDesign name='star' size={7} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"lightgrey"}}/>
                <AntDesign name='star' size={7} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"lightgrey"}}/>
                <AntDesign name='star' size={7} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"lightgrey"}}/>
                </Box>

              </Box>
                <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, marginHorizontal:"6%", marginVertical:"5%", color:"rgb(0,0,0)", width:"100%" }}>1234x building name and long address...</Text>
              <Box style={{flexDirection:"row", width:"100%", marginHorizontal:"6%", marginVertical:"-1%", }}>
              <Box style={{borderColor:"rgb(239, 172, 50)", flexDirection:"row", borderRadius:30, borderWidth:1, justifyContent:"center", width:80 }}> 
              <Feather name='check' size={16} color={'rgb(239, 172, 50)'} style={{alignSelf:"center"}}/>
              <Text style={{fontFamily:"Plus Jakarta Sans", color:"rgb(239, 172, 50)", fontSize:14}}>dine in</Text>
              </Box>
              <Box style={{borderColor:"rgb(239, 172, 50)", flexDirection:"row", borderRadius:30, borderWidth:1, justifyContent:"center", width:80, marginHorizontal:"3%"}}> 
              <Feather name='check' size={16} color={'rgb(239, 172, 50)'} style={{alignSelf:"center"}}/>
              <Text style={{fontFamily:"Plus Jakarta Sans", color:"rgb(239, 172, 50)", fontSize:14}}>delivery</Text>
              </Box>
              <Box style={{borderColor:"rgb(239, 172, 50)", flexDirection:"row", borderRadius:30, borderWidth:1, justifyContent:"center", width:90,  }}> 
              <Feather name='check' size={16} color={'rgb(239, 172, 50)'} style={{alignSelf:"center"}}/>
              <Text style={{fontFamily:"Plus Jakarta Sans", color:"rgb(239, 172, 50)", fontSize:14}}>takeaway</Text>
              </Box>
            </Box>
           </Box>
            <Box style={{width:"20%", height:"100%"}}>
            <Image alt='resto' source={require("../../assets/images/RestaurantDetailBckground.jpg")} style={{resizeMode:"contain" ,width:"100%", height:"100%", borderTopRightRadius:30, borderBottomRightRadius:30}}/>
            </Box>
    </Box>
    </>
  )
}

export default RestaurantsComponent;