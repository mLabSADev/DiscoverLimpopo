import React from 'react';
import { Text, View, KeyboardAvoidingView, SafeAreaView, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import ReviewComponent from '../../Components/ReviewComponent';
import { Box, Image } from 'native-base';


const AccomodationComponent = ({navigation, route})  => {
  return (
    <SafeAreaView>
        <ScrollView >
    <Box style={{width:"100%", alignSelf:"center"}}>
    <Box style={{ width:"90%", height:275, borderRadius:30, flexDirection:"column" ,backgroundColor:"grey", marginHorizontal:"2%", marginVertical:"2%", alignSelf:"center"}}> 
            <Image alt='accomodation' source={require("../../assets/images/Accomodation.jpg")} style={{borderTopRightRadius:30, borderTopLeftRadius:30 ,width:"100%", height:120}}/>
    <Box style={{width:"100%", height:155, flexDirection:"row", backgroundColor:"#FFFFFF", borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
      <Box style={{width:"80%", height:120 }}>
        <Box>
          <Text style={{fontSize:16, fontWeight:"bold", marginHorizontal:"5%", marginVertical:"5%", color:"rgb(0,0,0)" }}>Opens in new window Flying Falcon</Text>
          <Box style={{marginHorizontal:"6%", marginVertical:"-2%", flexDirection:"row"}}>
                <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:12, color:"rgb(0,0,0)" }}>5.5</Text>
                <Box style={{flexDirection:"row", marginVertical:"2%", marginHorizontal:"2%"}}>
                <AntDesign name='star' size={7} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"lightgrey"}}/>
                <AntDesign name='star' size={7} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"lightgrey"}}/>
                <AntDesign name='star' size={7} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"lightgrey"}}/>
                <AntDesign name='star' size={7} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"lightgrey"}}/>
                <AntDesign name='star' size={7} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"lightgrey"}}/>
                </Box>
          </Box>
          <Text style={{fontSize:14, width:"100%", marginHorizontal:"5%", marginVertical:"3%", color:"rgb(0,0,0)" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse…
        </Text>
        <Box style={{flexDirection:"row", width:"80%", marginHorizontal:"5%" }}>
          <Box style={{borderColor:"rgb(239, 172, 50)", flexDirection:"row", borderRadius:30, justifyContent:"center", width:70 }}> 
          <MaterialIcons name='pool' size={24} color={'rgb(239, 172, 50)'}/>
          <Text style={{color:"rgb(239, 172, 50)"}}>pool</Text></Box>
        </Box>
        </Box>
      </Box>
      <Box style={{width:"20%", height:100}}>
      <Image alt='loggo' source={require("../../assets/images/discover-logo.png")} style={{width:40, height:40, alignSelf:"flex-start"}}/>

        </Box>  
    </Box>
    </Box>
    </Box>
    </ScrollView>
    </SafeAreaView>
  )
}

export default  AccomodationComponent;