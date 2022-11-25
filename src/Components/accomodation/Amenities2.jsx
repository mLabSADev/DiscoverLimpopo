import React from 'react';
import { Box, Text } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Amenities2 = ({
  line,
  amenities
}) => {

  return (
    <>{line === 2 && amenities.parking === true ?
      <Box style={{ flexDirection: "column", alignItems: "center", width: 100, height: 100, }}>
        <Box style={{ backgroundColor: "#F4FAFF", justifyContent: "center", width: 50, height: 50, borderRadius: 30, alignItems: "center" }}>
          <MaterialCommunityIcons name='parking' size={24} color="rgb(0,0,0)" />
        </Box>
        <Text style={{ fontFamily: "Plus Jakarta Sans", fontSize: 14, color: "rgb(0,0,0)", marginVertical: "3%", }}>      2{'\n'}VIHICLES</Text>
      </Box>
      : null}

      {line === 2 && amenities.parking === true ?
        <Box style={{ flexDirection: "column", alignItems: "center", width: 100, height: 100, }}>
          <Box style={{ backgroundColor: "#F4FAFF", justifyContent: "center", width: 50, height: 50, borderRadius: 30, alignItems: "center" }}>
            <MaterialCommunityIcons name='dumbbell' size={24} color="rgb(0,0,0)" />
          </Box>
          <Text style={{ fontFamily: "Plus Jakarta Sans", fontSize: 14, color: "rgb(0,0,0)", marginVertical: "3%", }}>GYM AREA</Text>
        </Box>
        : null}

      {line === 2 ?
        <Box style={{ flexDirection: "column", alignItems: "center", width: 100, height: 100, }}>
          {/* <Box style={{backgroundColor:"#F4FAFF", justifyContent:"center", width:50, height:50, borderRadius:30, alignItems:"center" }}>
            <MaterialCommunityIcons name='parking' size={24} color="rgb(0,0,0)"/>
          </Box>
          <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", marginVertical:"3%",}}>      2{'\n'}VIHICLES</Text> */}
        </Box>
        : <Box></Box>}

      {line === 2 ?
        <Box style={{ flexDirection: "column", alignItems: "center", width: 100, height: 100, }}>
          {/* <Box style={{backgroundColor:"#F4FAFF", justifyContent:"center", width:50, height:50, borderRadius:30, alignItems:"center" }}>
            <MaterialCommunityIcons name='dumbbell' size={24} color="rgb(0,0,0)"/>
          </Box>
          <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", marginVertical:"3%",}}>GYM AREA</Text> */}
        </Box>
        : <Box></Box>}
    </>
  )
}

export default Amenities2;