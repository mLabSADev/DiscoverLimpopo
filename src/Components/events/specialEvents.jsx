import React, {useEffect, useState} from 'react';
import { Box, Text, ScrollView, Image} from 'native-base';
import {SafeAreaView, TouchableOpacity, ImageBackground, FlatList, Dimensions } from 'react-native';
import moment from 'moment';

const SpecialEvents = ({
    image,
    title,
    email,
    date,
    subTitle,
    item
}) =>  {

  return (
    <>
    <Box backgroundColor="#FFFFFF" height={350} width="100%" alignSelf="center" marginVertical="2%" borderRadius={30}>
    <Image alt='magizine image' source={{uri: image}} style={{width:"100%", height:188, borderTopLeftRadius:30, borderTopRightRadius:30}}/>
    <Box style={{marginHorizontal:"5%", marginVertical:"2%"}}>
        <Text fontFamily="Plus Jakarta Sans" fontWeight="500" color="#878787" fontSize={14}>{subTitle} </Text>
        <Text fontFamily="Plus Jakarta Sans" fontWeight="500" color="rgb(0,0,0)" fontSize={16} style={{marginVertical:"2%"}}>{title}</Text>
        <Box flexDirection="row" justifyContent="space-between">
        <Text color="rgb(239, 172, 50)" fontFamily="Plus Jakarta Sans">{moment(date).format('DD MMMM, YYYY, DDDD').toString()}</Text>
        <Text color="rgb(239, 172, 50)" fontFamily="Plus Jakarta Sans">{email}</Text>
            </Box>  
    </Box>
  </Box>
  </>
  )
}

export default SpecialEvents;