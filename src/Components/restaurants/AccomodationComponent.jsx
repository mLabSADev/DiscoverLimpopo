import React from 'react';
import { Text, Box, Image } from 'native-base';
import { KeyboardAvoidingView, TouchableOpacity, ImageBackground, ScrollView, SafeAreaView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MasonryList from '@react-native-seoul/masonry-list';
import { Chip } from 'react-native-paper';



const AccomodationComponent = ({
  name,
  amenities,
  description,
  image,
  loggoImage,
  review,  
})  => {
  return (
    <Box style={{ width:"95%", height:293, borderRadius:30, flexDirection:"column" ,backgroundColor:"#FFFFFF", marginHorizontal:"2%", marginVertical:".2%", alignSelf:"center"}}> 
            <Image alt='accomodation' source={{uri:image}} style={{borderTopRightRadius:30, borderTopLeftRadius:30 ,width:"100%", height:120}}/>
    <Box width="100%" height={172} flexDirection="row" borderBottomLeftRadius={30} borderBottomRightRadius={30}>
      <Box style={{width:"80%", height:"100%" }}>
        <Box>
          <Text style={{fontSize:16, fontWeight:"bold", marginHorizontal:"5%", marginVertical:"4%", color:"rgb(0,0,0)" }}>{name}</Text>
          <Box style={{marginHorizontal:"6%", marginVertical:"-3%", flexDirection:"row"}}>
                <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:12, color:"rgb(0,0,0)" }}>{review ? review : 'not reviewed'}</Text>
                <Box style={{flexDirection:"row", marginVertical:"2%", marginHorizontal:"2%"}}>
                { review > 0 ? 
                <>
                <AntDesign name='star' size={7} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color: review >= 1  ? "rgb(239, 172, 50)" : "lightgrey"}}/>
                <AntDesign name='star' size={7} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color: review >= 2  ? "rgb(239, 172, 50)" : "lightgrey"}}/>
                <AntDesign name='star' size={7} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color: review >= 3  ? "rgb(239, 172, 50)" : "lightgrey"}}/>
                <AntDesign name='star' size={7} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color: review >= 4  ? "rgb(239, 172, 50)" : "lightgrey"}}/>
                <AntDesign name='star' size={7} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color: review >= 5  ? "rgb(239, 172, 50)" : "lightgrey"}}/>
                </>
                : <Box></Box>}
                </Box>
          </Box>
          
          <Text numberOfLines={3} color="rgb(0,0,0)" fontSize={14} width="95%" style={{ marginHorizontal:"5%", marginVertical:"2%", height:"50%"}}>
          {description}
        </Text>
        <Box style={{flexDirection:"row", width:"80%", marginHorizontal:"5%" }}>
          {console.log({amenities})}
          {amenities !== [] ?
          <MasonryList
          showsHorizontalScrollIndicator={false}
             horizontal={true}
             style={{ width:"95%",}}
             data={amenities}
              numColumns={1}
             showsVerticalScrollIndicator={false}
             renderItem={({ item, index }) => {
               return (
                 <>
                 <Box style={{flexWrap:"wrap",  height:20, width:"90%"}}>
                  <Chip 
                  icon={item.icon !== undefined ? item.icon : "information"}
                  key={index}    
                  mode="outlined" //changing display mode, default is flat.       
                  height={20} //give desirable height to chip       
                  textStyle={{ color:'white',fontSize: 10,  }} //label properties       
                  style={{ borderColor: 'rgb(239, 172, 50)', borderWidth:1, marginHorizontal:5}} //display diff color BG       
                  >  
                 <Text> {item.label}</Text>      
                 </Chip>
                 </Box>
                 </>
                 )}}/>
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