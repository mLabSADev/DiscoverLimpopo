import React, { useState } from 'react';
import { Text, Image, Box, Card} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';


const RestaurantsComponent = ({
  name,
  review,
  location,
  loggoImage,
  availabilityOptions
}) => {


  // console.log(item, 'the item')

  const [email, setEmail] =useState();
// double
  return (
    <>
    <Box style={{width:"95%", height: 125,alignSelf:"center", flexDirection:"row", borderRadius:30, backgroundColor:"#FFFFFF"}}>
            <Box style={{width: "80%", height:"100%", flexDirection:"column"}}>
                <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:20, fontWeight:"bold", color:"rgb(0,0,0)", marginHorizontal:"6%", marginVertical:"4%"}}>{name}</Text>
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
              <Box flexDirection={'row'} width='90%' style={{ marginHorizontal:"6%", marginVertical:"5%",}}>
              <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", width:"100%", height:20, }}>{location}</Text>
              <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", width:"20%", marginHorizontal:-20, height:20, }}>...</Text>
              </Box>
              <Box style={{flexDirection:"row", width:"100%", marginHorizontal:"6%", marginVertical:"-1%", }}>
                 <>
              {availabilityOptions?.dineIn? (<Box style={{borderColor:"rgb(239, 172, 50)", flexDirection:"row", borderRadius:30, borderWidth:1, justifyContent:"center", width:80 }}> 
              <Feather name='check' size={16} color={'rgb(239, 172, 50)'} style={{alignSelf:"center"}}/>
              <Text style={{fontFamily:"Plus Jakarta Sans", color:"rgb(239, 172, 50)", fontSize:14}}>dine in</Text>
              </Box>)
              : <Box></Box>
              }
                 </>
                <>
              {availabilityOptions?.delivery ? (
              <Box style={{borderColor:"rgb(239, 172, 50)", flexDirection:"row", borderRadius:30, borderWidth:1, justifyContent:"center", width:80, marginHorizontal:"3%"}}> 
              <Feather name='check' size={16} color={'rgb(239, 172, 50)'} style={{alignSelf:"center"}}/>
              <Text style={{fontFamily:"Plus Jakarta Sans", color:"rgb(239, 172, 50)", fontSize:14}}>delivery</Text>
              </Box>)
              : <Box></Box>
            }
                </>
                <>
             {availabilityOptions.takeaway ? (
              <Box style={{borderColor:"rgb(239, 172, 50)", flexDirection:"row", borderRadius:30, borderWidth:1, justifyContent:"center", width:90,marginHorizontal:`${availabilityOptions?.delivery ? "0%" : "2%" }`  }}> 
              <Feather name='check' size={16} color={'rgb(239, 172, 50)'} style={{alignSelf:"center"}}/>
              <Text style={{fontFamily:"Plus Jakarta Sans", color:"rgb(239, 172, 50)", fontSize:14}}>takeaway</Text>
              </Box>)
              : <Box></Box>
            }
              </>
            </Box>
           </Box>
            <Box style={{width:"20%", height:"100%"}}>
            <Image alt='resto' source={{uri:loggoImage}} resizeMode={'cover'} style={{width:"100%", height:"100%", borderTopRightRadius:30, borderBottomRightRadius:30}}/>
            </Box>
    </Box>
    </>
  )
}

export default RestaurantsComponent;