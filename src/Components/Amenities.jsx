import React from 'react';
import {Box, Text} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Amenities = ({
line
}) => {

  return (
    <>

   { line === 1 ? <Box style={{flexDirection:"column", alignItems:"center", width:"80%", height:"100%", alignSelf:"center"}}>
    <Box style={{backgroundColor:"#F4FAFF", justifyContent:"center", width:50, height:50, borderRadius:30, alignItems:"center" }}>
      <MaterialIcons name='tv' size={24} color="rgb(0,0,0)"/>
    </Box>
    <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", marginVertical:"3%",}}>HD TV</Text>
  </Box>
   : <Box></Box>}

{  line === 1 ? 
<Box style={{flexDirection:"column", alignItems:"center", width:"80%",}}>
    <Box style={{backgroundColor:"#F4FAFF", justifyContent:"center", width:50, height:50, borderRadius:30, alignItems:"center" }}>
      <MaterialIcons name='pool' size={24} color="rgb(0,0,0)"/>
    </Box>
    <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", marginVertical:"3%",}}>SWIMMING{'\n'}      POOL</Text>
  </Box>
     : <Box></Box>}

{  line === 1 ? 
  <Box style={{flexDirection:"column", alignItems:"center", width:"80%",}}>
    <Box style={{backgroundColor:"#F4FAFF", justifyContent:"center", width:50, height:50, borderRadius:30, alignItems:"center" }}>
      <MaterialCommunityIcons name='shower-head' size={24} color="rgb(0,0,0)"/>
    </Box>
    <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", marginVertical:"3%",}}>SHOWER</Text>
  </Box>
  : <Box></Box>}

{  line === 1 ? 
  <Box style={{flexDirection:"column", alignItems:"center", width:"80%",}}>
    <Box style={{backgroundColor:"#F4FAFF", justifyContent:"center", width:50, height:50, borderRadius:30, alignItems:"center" }}>
      <MaterialCommunityIcons name='bed-king-outline' size={24} color="rgb(0,0,0)"/>
    </Box>
    <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", marginVertical:"3%",}}>        2{'\n'}BEDROOM</Text>
  </Box>
    : <Box></Box>}



  </>
  )
}

export default  Amenities;