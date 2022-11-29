import React, { useState, useEffect } from 'react';
import { Box, Text, Image } from 'native-base';
import { ScrollView, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MasonryList from '@react-native-seoul/masonry-list';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useAuth } from '../../context/auth.context';
import moment from 'moment';
import BookingService from '../../services/booking';

const profile = 'https://media.istockphoto.com/id/1364105164/photo/hologram-human-head-deep-learning-and-artificial-intelligence-abstract-background.jpg?b=1&s=170667a&w=0&k=20&c=i9-oulHCR0LCxqzqUW2Q7bKt3RrdbCZU0OXqXV2gw-o=';

export default function Bookings({navigation, routes}) {


  const {user} = useAuth();
  const [search, setSearch] = useState('');
  const [booking, setBooking] = useState([]);
  const [restoReview, setRestoReview] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);


  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter((item) => {
          const itemData = item.accomodationName
            ? item.accomodationName.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
      });
      setBooking(newData);
      setSearch(text);
      if(text === '') {
        Toast.show({type:"warn", text2:"no results"})
        // setRestaurants(masterDataSource);
      }
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setBooking(masterDataSource);
      setSearch(text);
    }
  };

  useEffect(() => {
      BookingService.getBooking((booking, review) => {
        setBooking(booking);
        setMasterDataSource(booking);
      })
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
                      onChangeText={(search) => {
                        searchFilterFunction(search);
                        setSearch(search);
                      }}
                    value={search}
                    textContentType="search"
                    /> 
                    </Box>
                    <Ionicons name='ios-search-outline' size={20} style={{alignSelf:"flex-start", color:"rgb(239, 172, 50)", alignSelf:"center", marginHorizontal:"4%"}} 
                     onPress={() => {searchFilterFunction(search)}}/>
                    </Box>
                    <Ionicons name='filter' size={20} style={{alignSelf:"flex-start", color:"rgb(239, 172, 50)",marginHorizontal:"2%",alignSelf:"center" }} />
                    </Box>
   </Box>
   <ScrollView style={{width:"100%"}}>
   
   {booking?.length <= 0 ? <Box justifyContent={"center"} alignItems={"center"} alignContent='center' 
    alignSelf={"center"} marginTop={"4%"} height={400} width="90%" borderColor={"rgb(239, 172, 50)"} borderRadius={30} borderWidth={1}>
          <Text size={16} fontFamily="Plus Jakarta Sans" alignSelf="center" style={{width:"60%"}} >
          No bookings have been found.
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
        style={{marginVertical:"2%", marginHorizontal:"4%"}}>
           <Box style={{alignSelf:"center", backgroundColor:"#FFFFFF", alignContent:"center", justifyContent:"center", alignItems:"center" ,marginHorizontal:"2%", width:"100%", height:80, borderRadius:30, flexDirection:"row"}}>
      <Box style={{flexDirection:"column", width:"70%", height:"100%",justifyContent:"center"}}>
            <Text fontFamily="Plus Jakarta Sans" fontSize={16} color="rgb(0,0,0)" fontWeight="700">{item.accomodationName}</Text>
           <Box style={{flexDirection:"row"}}>
            <Text>{moment(item.checkIn).format("DD MMM, YYYY").toString()}</Text> 
            <AntDesign name='arrowright' size={20} style={{fontWeight:"500"}}/>
            <Text>{moment(item.checkIn).format("DD MMM, YYYY").toString()}</Text>
            </Box>
      </Box>
      <Box style={{width:"20%", height:"100%", justifyContent:"center"}}>
        <TouchableOpacity onPress={() => {navigation.navigate('BookingDetails', {booking: item})}}
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