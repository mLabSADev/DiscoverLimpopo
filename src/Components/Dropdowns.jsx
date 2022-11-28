import { Box, Text } from 'native-base';
import React, { useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

const data = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
  { label: '6', value: '6' },
  { label: '7', value: '7' },
  { label: '8', value: '8' },
  { label: '9', value: '9' },
  { label: '10', value: '10' },
  { label: '11', value: '11' },
  { label: '12', value: '12' },
  { label: '13', value: '13' },
  { label: '14', value: '14' },
  { label: '15', value: '15' },
  { label: '16', value: '16' },
  { label: '17', value: '17' },
  { label: '18', value: '18' },
  { label: '19', value: '19' },
  { label: '20', value: '20' },

];



export function DropDown1  ({value, setDropdown1}) {
    return(
            <Box style={{flexDirection:"column", width:"50%"}}>
            <Text style={{ alignSelf: "flex-start", fontSize: 14, fontFamily: "Plus Jakarta Sans", fontWeight: "600", color: '#000000', marginVertical: "3%", marginHorizontal: "9%" }}>People</Text>
            <View style={{flexDirection:"row", backgroundColor:"rgba(120, 120, 120, 0.3)", alignSelf:"center", width:"90%", borderRadius: 30, height:50, }}>
            <Dropdown
              style={{alignSelf:"center", width:"80%", marginHorizontal:20}}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Select People"
              searchPlaceholder="Search..."
              value={value}
              onChange={item => {
                setDropdown1(item.value);
              }}
              
            />   
          </View>
            </Box>
    )
}
 


export function DropDown2  ({value, setDropdown2, roomValue}) {

  const [values, setValue] = useState(value);
  // console.log(value, 'these are vale')

  return(
          <Box style={{flexDirection:"column", width:"50%", alignContent:"flex-end"}}>
          <Text style={{ alignSelf: "flex-start", fontSize: 14, fontFamily: "Plus Jakarta Sans", fontWeight: "600", color: '#000000', marginVertical: "3%", marginHorizontal: "9%" }}>Room</Text>
          <View style={{flexDirection:"row", backgroundColor:"rgba(120, 120, 120, 0.3)", alignSelf:"center", width:"90%", borderRadius: 30, height:50}}>
          <Dropdown
              style={{alignSelf:"center", width:"80%", marginHorizontal:20}}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={value}
              maxHeight={300}
              labelField="name"
              valueField="name"
              placeholder="Select Room"
              value={roomValue}
              onChange={item => {
                setDropdown2(item);
                // {console.log(item, `onchange to ${item.price}`)}
              }
            
            }

            />   

        </View>
          </Box>
  )
}


const styles = StyleSheet.create({
  dropdown: {
   
    // margin: 16,
    // height: 50,
    // width:"40%",
    // backgroundColor:"grey",
    // borderRadius:30,
    // borderBottomColor: 'gray',
    // borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 30,
    height: 30,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});