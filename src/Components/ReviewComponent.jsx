import React from 'react';
import { Box, Image, Text } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';



 const ReviewComponent = ({
    image,
    name,
    review,
    reviewDescription
}) => {
  return (
        <>
            <Box style={{width:"80%", height:"100%", flexDirection:"row"}}>
                <Box style={{width:"20%", height:"30%", alignItems:"center",}}>
                     <Image alt='profile' source={{uri: image}} style={{width:34, height:34, borderRadius:34}} />
                </Box>
                <Box style={{width:"80%", height:"100%", flexDirection:"column"}}>
                    <Box style={{marginVertical:"2%", flexDirection:"row", width:"100%", height:"20%"}}>
                        <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:20, color:"rgb(0,0,0)", fontWeight:"bold" }}>{name}</Text>
                        <Box style={{flexDirection:"row", marginHorizontal:"5%", marginVertical:"-.5%", height:"100%"}}>
                        <AntDesign name='star' size={7} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:`${review >= 1? "rgb(239, 172, 50)" : "rgba(120, 120, 120, 0.5)"}`}}/>
                        <AntDesign name='star' size={7} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:`${review >= 2? "rgb(239, 172, 50)" : "rgba(120, 120, 120, 0.5)"}`}}/>
                        <AntDesign name='star' size={7} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:`${review >= 3? "rgb(239, 172, 50)" : "rgba(120, 120, 120, 0.5)"}`}}/>
                        <AntDesign name='star' size={7} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:`${review >= 4? "rgb(239, 172, 50)" : "rgba(120, 120, 120, 0.5)"}`}}/>
                        <AntDesign name='star' size={7} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:`${review >= 5? "rgb(239, 172, 50)" : "rgba(120, 120, 120, 0.5)"}`}}/>
                        </Box>

                    </Box>
                    <Box style={{width:"100%", height:"70%"}}>
                        <Text fontFamily="Plus Jakarta Sans" fontSize={16} color="rgb(51, 51, 51)">
                        {reviewDescription}
                        </Text>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default ReviewComponent;