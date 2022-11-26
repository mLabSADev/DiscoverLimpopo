import { Box, Text } from 'native-base';
import React from 'react';
import {View, TextInput} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

export function DropDown1  ({value, setDropdown1}) {
    return(
            <Box style={{flexDirection:"column", width:"50%"}}>
            <Text style={{ alignSelf: "flex-start", fontSize: 14, fontFamily: "Plus Jakarta Sans", fontWeight: "600", color: '#000000', marginVertical: "3%", marginHorizontal: "9%" }}>People</Text>
            <View style={{flexDirection:"row", backgroundColor:"rgba(120, 120, 120, 0.3)", alignSelf:"center", width:"90%", borderRadius: 30, height:50, }}>
            <TextInput placeholder='People' style={{alignSelf:"flex-start", width:"80%", marginHorizontal:"5%"}} 
            onChangeText={(num) => setDropdown1(num)}
             value={value}
          /> 
                       
          </View>
            </Box>
    )
}
 

export function DropDown2  ({value, setDropdown2}) {
  return(
          <Box style={{flexDirection:"column", width:"50%", alignContent:"flex-end"}}>
          <Text style={{ alignSelf: "flex-start", fontSize: 14, fontFamily: "Plus Jakarta Sans", fontWeight: "600", color: '#000000', marginVertical: "3%", marginHorizontal: "9%" }}>Room</Text>
          <View style={{display:"flex", backgroundColor:"rgba(120, 120, 120, 0.3)", alignSelf:"center", width:"90%", borderRadius: 30, height:50}}>
          <TextInput placeholder='Room' style={{alignSelf:"flex-start", width:"80%", marginHorizontal:"5%"}} 
          onChangeText={(num) => setDropdown2(num)}
           value={value}
        />              
        </View>
          </Box>
  )
}


{

  /**
   * import { Box, Text } from 'native-base';
import React from 'react';
import {View, TextInput} from 'react-native';


const DropDown = { 

dropDown1: (value: any, setDropdown1: (dropdown1: string | 0) => void ) => {
    return(
            <Box style={{flexDirection:"column"}}>
            <Text style={{ alignSelf: "flex-start", fontSize: 14, fontFamily: "Plus Jakarta Sans", fontWeight: "600", color: '#000000', marginVertical: "3%", marginHorizontal: "9%" }}>Email</Text>
            <View style={{display:"flex", backgroundColor:"rgba(120, 120, 120, 0.3)", alignSelf:"center", width:"90%", borderRadius: 30, height:50}}>
            <TextInput placeholder='Email' style={{alignSelf:"flex-start", width:"80%", marginHorizontal:"5%"}} 
            // onChangeText={(email) => setEmail(email)}
            testID='email'
            nativeID='email'
            onChangeText={(num: string) => setDropdown1(num)}
            value={value}
          />              
          </View>
            </Box>
    )
}

}

export default DropDown;
  */
} 