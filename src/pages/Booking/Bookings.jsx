import React, { useState, useEffect } from 'react';
import { Box, Text, Image } from 'native-base';
import { ScrollView, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useAuth } from '../../context/auth.context';
import BookingService from '../../services/booking';

export default function Bookings({navigation, routes}) {

  const {user} = useAuth();
  const [search, setSearch] = useState('');
  const [booking, setBooking] = useState([]);
  const [restoReview, setRestoReview] = useState([]);


  useEffect(() => {
    const getBookings = () => {
      BookingService.getBooking((booking, review) => {
        setBooking(booking);
        console.log(booking)
      })
  }

  return () => {
    getBookings() 
  }
  }, []);


  return (
    <>
       <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{flex:1, height:"100%"}}
      >
    <SafeAreaView  style={{ backgroundColor:"#F4FAFF", width:"100%", height:"100%" }}>
 <Box height={130} backgroundColor="#2B2B2B" borderBottomLeftRadius={30} borderBottomRightRadius={30}>
   <Box style={{width:"95%", backgroundColor:'rgba(239, 172, 50, 0.05)', borderRadius:30, flexDirection:"row", marginVertical:"3%", height:50,marginHorizontal:"2%", justifyContent:"space-between", alignContent:"center", alignItems:"center"}}>
       <TouchableOpacity activeOpacity={2} onPress={() => navigation.openDrawer()}>
       <Feather name='menu' size={32} style={{alignSelf:"flex-start", color:"rgb(239, 172, 50)", marginHorizontal:"10%"}} />
       </TouchableOpacity>
       <TouchableOpacity onPress={() => navigation.openDrawer('')}>
       <Image alt='profile' source={{uri: user?.imageUrl}} style={{width:38, height:38, alignSelf:"flex-end", borderRadius:38, marginHorizontal:"10%"}}/>
       </TouchableOpacity>        
   </Box>

   <Text fontFamily="Plus Jakarta Sans" fontSize={34} color="#FFFFFF" fontWeight="bold" width="80%" style={{ marginHorizontal:"5%", marginVertical:"-1%", }}>Booking History</Text>
   </Box>

   <Box style={{flexDirection:"row", marginVertical:"2%", justifyContent:"space-between", marginHorizontal:"2%"}}>
   <Box style={{backgroundColor:"rgba(239, 172, 50, 0.05)", alignSelf:"center", width:"100%", borderRadius: 30, height:50, flexDirection:"row"}}>
                    <Box style={{backgroundColor:"rgba(120, 120, 120, 0.1)", alignSelf:"center", width:"90%", borderRadius: 30, height:50, flexDirection:"row"}}>
                    <Box style={{backgroundColor:"rgba(120, 120, 120, 0.1)", alignSelf:"center", width:"85%", borderRadius: 30, height:50, flexDirection:"row", justifyContent:"center"}}>
                    <TextInput placeholder='Search' style={{alignSelf:"flex-start", width:"95%", }} 
                    onChangeText={(search) => setSearch(search)}
                    value={search}
                    textContentType="search"
                    /> 
                    </Box>
                    <Ionicons name='ios-search-outline' size={20} style={{alignSelf:"flex-start", color:"rgb(239, 172, 50)", alignSelf:"center", marginHorizontal:"4%"}} />
                    </Box>
                    <Ionicons name='filter' size={20} style={{alignSelf:"flex-start", color:"rgb(239, 172, 50)",marginHorizontal:"2%",alignSelf:"center" }} />
                    </Box>
   </Box>
   <ScrollView>
   
   {booking?.length <= 0 ? <Box justifyContent={"center"} alignItems={"center"} alignContent='center'
    alignSelf={"center"} marginTop={"4%"} height={400} width="90%" borderColor={"rgb(239, 172, 50)"} borderRadius={30} borderWidth={1}>
          <Text size={16} fontFamily="Plus Jakarta Sans" alignSelf="center" style={{width:"100%", backgroundColor:"grey"}} >
          No bookings have been made.
          </Text>
    </Box> :
    <Box width={'100%'} height='100%'>
      <MasonryList
      horizontal={false}
          style={{ width:"100%", height:"100%"}}  
            data={booking}
            numColumns={1}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return(
          <>
          <TouchableOpacity activeOpacity={1}
          key={item?.bookingId}
          onPress={() => {navigation.navigate('SpecialPackagesDetails', {item: item})}}
        style={{marginVertical:"2%", marginHorizontal:"4%"}}>
           <Box style={{alignSelf:"center", backgroundColor:"#FFFFFF", alignContent:"center", justifyContent:"center", alignItems:"center" ,marginHorizontal:"2%", width:"90%", height:80, borderRadius:30, flexDirection:"row"}}>
      <Box style={{flexDirection:"column", width:"70%", height:"100%",justifyContent:"center"}}>
            <Text fontFamily="Plus Jakarta Sans" fontSize={16} color="rgb(0,0,0)" fontWeight="700">Hotel Monica</Text>
           <Box style={{flexDirection:"row"}}>
            <Text>27 Jul, 202x </Text> 
            <AntDesign name='arrowright' size={20} style={{fontWeight:"500"}}/>
            <Text> 17 Aug, 202x</Text>
            </Box>
      </Box>
      <Box style={{width:"20%", height:"100%", justifyContent:"center"}}>
        <TouchableOpacity onPress={() => {navigation.navigate('BookingDetails', {booking: booking})}}
        style={{width:50, height:50, borderRadius:50, justifyContent:"center", backgroundColor:"rgb(239, 172, 50)", alignSelf:"flex-end"}}>
            <MaterialIcons name='keyboard-arrow-right' size={34} color={'#FFFFFF'} style={{alignSelf:"center"}}/>
        </TouchableOpacity>
      </Box>
   </Box>
        </TouchableOpacity>
          </>
        )
      }}
    />
    </Box>
}  
   </ScrollView>

        <Box>
        </Box>
   </SafeAreaView>
   </KeyboardAvoidingView>
</>
  )
}