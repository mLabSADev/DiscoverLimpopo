import React from 'react';
import { Text, Box, Image } from 'native-base';
import { KeyboardAvoidingView, TouchableOpacity, ImageBackground, ScrollView, SafeAreaView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';


const AccomodationComponent = ({
  name,
  amenities,
  description,
  image,
  loggoImage
  
})  => {
  return (
    <Box style={{ width:"95%", height:293, borderRadius:30, flexDirection:"column" ,backgroundColor:"#FFFFFF", marginHorizontal:"2%", marginVertical:".2%", alignSelf:"center"}}> 
            <Image alt='accomodation' source={{uri:image}} style={{borderTopRightRadius:30, borderTopLeftRadius:30 ,width:"100%", height:120}}/>
    <Box width="100%" height={172} flexDirection="row" borderBottomLeftRadius={30} borderBottomRightRadius={30}>
      <Box style={{width:"80%", height:"100%" }}>
        <Box>
          <Text style={{fontSize:16, fontWeight:"bold", marginHorizontal:"5%", marginVertical:"4%", color:"rgb(0,0,0)" }}>{name}</Text>
          <Box style={{marginHorizontal:"6%", marginVertical:"-3%", flexDirection:"row"}}>
                <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:12, color:"rgb(0,0,0)" }}>5.5</Text>
                <Box style={{flexDirection:"row", marginVertical:"2%", marginHorizontal:"2%"}}>
                <AntDesign name='star' size={7} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"lightgrey"}}/>
                <AntDesign name='star' size={7} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"lightgrey"}}/>
                <AntDesign name='star' size={7} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"lightgrey"}}/>
                <AntDesign name='star' size={7} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"lightgrey"}}/>
                <AntDesign name='star' size={7} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"lightgrey"}}/>
                </Box>
          </Box>
          
          <Text  color="rgb(0,0,0)" fontSize={14} width="100%" style={{ marginHorizontal:"5%", marginVertical:"2%", height:"50%"}}>
          {description}
        </Text>
        <Box style={{flexDirection:"row", width:"80%", marginHorizontal:"5%" }}>
          {amenities.pool ?
          <Box borderColor="rgb(239, 172, 50)" flexDirection="row" borderRadius={30} justifyContent="center" width={70} > 
          <MaterialIcons name='pool' size={24} color={'rgb(239, 172, 50)'}/>
          <Text color="rgb(239, 172, 50)">pool</Text>
          </Box>
          : <Box></Box>
}
        </Box>
        </Box>
      </Box>
      <Box width="20%" height={100}>
      <Image alt='loggo' source={{uri: loggoImage}} style={{width:40, height:40, alignSelf:"flex-start"}}/>

        </Box>  
    </Box>
    </Box>
  )
}

export default  AccomodationComponent;