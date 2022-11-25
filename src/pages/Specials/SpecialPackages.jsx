import React, {useEffect, useState} from 'react';
import { Box, Text, ScrollView, Image, FlatList, } from 'native-base';
import {SafeAreaView, TouchableOpacity, ImageBackground, Dimensions, ActivityIndicator } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MasonryList from '@react-native-seoul/masonry-list';
import Events from '../../services/events';
import { useAuth } from '../../context/auth.context';
import SpecialEvents from '../../Components/events/specialEvents';


export default function SpecialPackages({navigation, routes}) {

  const {user} = useAuth();

  const [events, setEvents] = useState([]);

  useEffect(() => {
        Events.getEvents(events =>{setEvents(events)})
  },[]);

  return (
    <>
    <SafeAreaView  style={{ backgroundColor:"#F4FAFF", width:"100%", height:"100%" }}>
    <Box height={130} backgroundColor="#2B2B2B" borderBottomLeftRadius={30} borderBottomRightRadius={30} style={{ elevation:.3}}>
      <Box width="95%" backgroundColor='rgba(239, 172, 50, 0.05)' borderRadius={30} flexDirection="row" 
      justifyContent="space-between" alignContent="center" alignItems="center" height={50}
      style={{ marginVertical:"3%",marginHorizontal:"2%",  elevation:.3}}>
          <TouchableOpacity activeOpacity={2} onPress={() => navigation.openDrawer('', {isScreen: true})}>
          <Feather name='menu' size={32} style={{alignSelf:"flex-start", color:"rgb(239, 172, 50)", marginHorizontal:"10%"}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Account')}>
          <Image width={38} height={38} alignSelf="flex-end" borderRadius={38} alt='profile' source={{uri: user.imageUrl}} style={{ marginHorizontal:"10%"}}/>
          </TouchableOpacity>        
      </Box>
       <Text fontFamily="Plus Jakarta Sans" fontSize={34} color="#FFFFFF" fontWeight="bold" width="80%" style={{marginHorizontal:"5%", marginVertical:"-1%", }}>Special Packages</Text>

      </Box>
    {events?.length <= 0 ? <Box justifyContent={"center"} alignItems={"center"} alignSelf={"center"} marginTop={"4%"} height={400} width="90%" borderColor={"rgb(239, 172, 50)"} borderRadius={30} borderWidth={1}>
          <Text>
            No available Event!
          </Text>
    </Box> :
    <Box width={'100%'} height='100%'>
      <MasonryList
      horizontal={false}
          style={{ width:"100%", height:"100%"}}  
            data={events}
            
            numColumns={1}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return(
          <>
          <TouchableOpacity activeOpacity={1}
          key={item?.eventId}
          onPress={() => {navigation.navigate('SpecialPackagesDetails', {item: item})}}
        style={{marginVertical:"2%", marginHorizontal:"4%", elevation:5,}}>
               <SpecialEvents
               image={item.image}
               title={item.title}
               email={item.email}
               date={item.date}
               subTitle={item.subTitle}
               />
        </TouchableOpacity>
          </>
        )
      }}
      keyExtractor={(item) => item.eventId}
    />
    </Box>
}  
      </SafeAreaView>

{/* 

keytool -genkeypair -v -storetype PKCS12 -keystore discover-limpopo.keystore -alias discover-limpopo -keyalg RSA -keysize 2048 -validity 10000
keystore password: Discover123
first: Discover
last: Limpopo
organization unit: mlab
What is the name of your organization?: mlab
What is the name of your City or Locality?: johannesburg
What is the name of your State or Province?: Gauteng
What is the two-letter country code for this unit?: ZA
*/}

      </>
    )
}