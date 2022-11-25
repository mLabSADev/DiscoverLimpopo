import React from 'react';
import {Box, Text} from 'native-base';
import { View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Amenities = ({
line,
amenities
}) => {

  return (
    <>
    <View style={{ flexDirection:"row", justifyContent:"space-evenly", width:"100%" }}>
   { line === 1 && amenities.tv === true ? 
  <Box style={{flexDirection:"column", alignItems:"center", width:100, height:100, }}>
    <Box style={{backgroundColor:"#F4FAFF", justifyContent:"center", width:50, height:50, borderRadius:30, alignItems:"center" }}>
      <MaterialIcons name='tv' size={24} color="rgb(0,0,0)"/>
    </Box>
    <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", marginVertical:"3%",}}>HD TV</Text>
  </Box>

   : null}

{  line === 1 && amenities.pool === true? 
<Box style={{flexDirection:"column", alignItems:"center", width:100, height:100, }}>
    <Box style={{backgroundColor:"#F4FAFF", justifyContent:"center", width:50, height:50, borderRadius:30, alignItems:"center" }}>
      <MaterialIcons name='pool' size={24} color="rgb(0,0,0)"/>
    </Box>
    <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", marginVertical:"3%",}}>SWIMMING{'\n'}      POOL</Text>
  </Box>
     : null}

{  line === 1 && amenities.shower === true ? 
  <Box style={{flexDirection:"column", alignItems:"center", width:100, height:100, }}>
    <Box style={{backgroundColor:"#F4FAFF", justifyContent:"center", width:50, height:50, borderRadius:30, alignItems:"center" }}>
      <MaterialCommunityIcons name='shower-head' size={24} color="rgb(0,0,0)"/>
    </Box>
    <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", marginVertical:"3%",}}>SHOWER</Text>
  </Box>
  : null}

{  line === 1 && amenities.tv === true ? 
  <Box style={{flexDirection:"column", alignItems:"center", width:100, height:100, }}>
  <Box style={{backgroundColor:"#F4FAFF", justifyContent:"center", width:50, height:50, borderRadius:30, alignItems:"center" }}>
      <MaterialCommunityIcons name='bed-king-outline' size={24} color="rgb(0,0,0)"/>
    </Box>
    <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", marginVertical:"3%",}}>        2{'\n'}BEDROOM</Text>
  </Box>
    : null}

</View>
  </>
  )
}

export default  Amenities;