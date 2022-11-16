import React, { useState } from 'react';
import { Box, Text, ScrollView, Image} from 'native-base';
import {SafeAreaView, TouchableOpacity, ImageBackground, FlatList, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useAuth } from '../../context/auth.context';
import moment from 'moment';

export default function SpecialPackageDetails({navigation, route}) {

  // const {event} = route.params.item; 
  const [event, setEvents] = useState(route.params.item);
  // console.log(event);
  const {user} = useAuth();
  return (
      <>
       <SafeAreaView  style={{ backgroundColor:"#F4FAFF", width:"100%", height:"100%" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
    <Box style={{height:170, backgroundColor:"#2B2B2B", borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
      <Box justifyContent="space-between" alignContent="center" alignItems="center"  height={50}
      width="95%" backgroundColor='rgba(239, 172, 50, 0.05)' borderRadius={30} flexDirection="row"
      style={{ marginVertical:"3%",marginHorizontal:"2%",}}>
          <TouchableOpacity activeOpacity={2} onPress={() => navigation.navigate('SpecialPackages')}>
          <Ionicons name='chevron-back' size={32} style={{alignSelf:"flex-start", color:"rgb(239, 172, 50)", marginHorizontal:"10%"}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Account')}>
          <Image alt='profile' source={{uri: user.imageUrl}} width={38} height={38} alignSelf="flex-end" borderRadius={38} style={{ marginHorizontal:"10%"}}/>
          </TouchableOpacity>        
      </Box>

      <Text fontFamily="Plus Jakarta Sans" fontSize={14} color="#FFFFFF" fontWeight="bold" width="80%" style={{ marginHorizontal:"5%"}}>Special Packages</Text>
       <Text fontFamily="Plus Jakarta Sans" fontSize={24} color="#FFFFFF" fontWeight="bold" width="80%" style={{ marginHorizontal:"5%", }}>{event.eventName}</Text>
      </Box>

      <Box style={{marginVertical:"2%"}}>
        <Image alt='package' source={{uri: event.image}} height={466} width="100%"/>
      </Box>

      <Box style={{flexDirection:"column", marginHorizontal:"2%"}}>
        <Box borderColor="rgb(239, 172, 50)" borderWidth={1} width={90} alignItems="center" borderRadius={30}>
                <Text fontFamily="Plus Jakarta Sans" fontSize={14} color="rgb(239, 172, 50)">
                {event.host}
                </Text>
        </Box>
        <Text fontFamily="Plus Jakarta Sans" fontSize={20} color="rgb(0,0,0)" fontWeight="bold" style={{marginVertical:"2%"}}>
        {event.presenter} {event.eventName}
        </Text>
        <Text fontFamily="Plus Jakarta Sans" fontSize={14} color="rgb(0,0,0)" fontWeight="700" style={{marginVertical:"2%"}}>
        MC : {event.mc}
        </Text>

        <Text fontFamily="Plus Jakarta Sans" fontSize={16} color="rgb(0,0,0)" fontWeight="700" style={{ marginVertical:"2%"}}>
        DJ Line Up
        </Text>
        {event.lineUp.map((lineup) => {return(
              <Box style={{flexDirection:"row"}}
               key={lineup}>
              <AntDesign name='arrowright' size={20} color={'rgb(0,0,0)'} />
              <Text fontFamily="Plus Jakarta Sans" fontSize={14} color="rgb(0,0,0)" fontWeight="500">
              {lineup}
              </Text>
          </Box>
        )})
        }
        <Text fontFamily="Plus Jakarta Sans" fontSize={14} color="rgb(0,0,0)" fontWeight="500" style={{ marginVertical:"2%" }}>
            DATE : {event.dateOfEvent} {moment(event.dateOfEvent).weekday().toString()}</Text>

            <Text fontFamily="Plus Jakarta Sans" fontSize={14} color="rgb(0,0,0)" fontWeight="700" style={{ marginVertical:"4%" }}>
            VENUE : {event.venue}
            </Text>

            <Text fontFamily="Plus Jakarta Sans" fontSize={14} color="rgb(0,0,0)" fontWeight="600" style={{marginVertical:"2%" }}>
            ENTRY FEE : {event.entryFee}
            </Text>
          
      </Box>
      </ScrollView>
    </SafeAreaView>
    </>
    );

}