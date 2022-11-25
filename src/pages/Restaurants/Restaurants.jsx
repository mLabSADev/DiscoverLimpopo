import React, { useEffect, useState } from 'react';
import {View, KeyboardAvoidingView, TouchableOpacity, SafeAreaView, TextInput, ImageBackground, Linking } from 'react-native';
import { Box, Text, ScrollView, Image, TextField, FlatLis,} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MasonryList from '@react-native-seoul/masonry-list';
import RestaurantsComponent from '../../Components/restaurants/RestaurantsComponent';
import Restaurant from '../../services/restaurant';
import { useAuth } from '../../context/auth.context';
import Toast from 'react-native-toast-message';



const data = [{
  id: 1,
  title: 'First Edition',
  image:require('../../assets/images/magazine1.jpg')
},{
  id: 2,
  title: 'First Edition',
  image:require('../../assets/images/magazine1.jpg')
},{
  id: 3,
  title: 'First Edition',
  image:require('../../assets/images/magazine1.jpg')
},{
  id: 4,
  title: 'First Edition',
  image:require('../../assets/images/magazine1.jpg')
},{
  id: 5,
  title: 'First Edition',
  image:require('../../assets/images/magazine1.jpg')
}];


const Restaurants = ({navigation, route}) => {

  const {user} = useAuth();
  const [restaurant] = route.params.item;

  const [search, setSearch] = useState('');
  const [restaurants, setRestaurants] = useState([restaurant]);
  const [restoReview, setRestoReview] = useState(0);
  const [specials, SetSpecial] = useState([]);
  const [specialReview, setSpecialReview] = useState(0);

  // console.log(restaurant, 'resto ntwana yahm');

  // const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter((item) => {
          const itemData = item.name
            ? item.name.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
      });
      setRestaurants(newData);
      setSearch(text);
      if(text === '') {
        Toast.show({type:"warn", text2:"no results"})
        // setRestaurants(masterDataSource);
      }
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setRestaurants(masterDataSource);
      setSearch(text);
    }
  };

  useEffect(() => {
      Restaurant.getRestaurant((restaurant, review) => {
      setRestaurants(restaurant);
      setRestoReview(review);
      // setFilteredDataSource(restaurant);
        setMasterDataSource(restaurant);
    })

      Restaurant.getSpecials((details) => {
      SetSpecial(details);
      console.log({details})
    })

  }, []);
  
  return (
    <>
       <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{flex:1, height:"100%"}}
      >
    <SafeAreaView  style={{ backgroundColor:"#F4FAFF", width:"100%", height:"100%" }}>
 <Box height={170} backgroundColor="#2B2B2B" borderBottomLeftRadius={30} borderBottomRightRadius={30}>
   <Box width="95%" backgroundColor='rgba(239, 172, 50, 0.05)' borderRadius={30} flexDirection="row" height={50} 
        justifyContent="space-between" alignContent="center" alignItems="center"
        style={{marginVertical:"3%",marginHorizontal:"2%"}}>
       <TouchableOpacity activeOpacity={2} onPress={() => navigation.openDrawer('')}>
       <Feather name='menu' size={32} style={{alignSelf:"flex-start", color:"rgb(239, 172, 50)", marginHorizontal:"10%"}} />
       </TouchableOpacity>
       <TouchableOpacity onPress={() => navigation.navigate('Account')}>
       <Image alt='profile' source={{uri: user?.imageUrl}} style={{width:38, height:38, alignSelf:"flex-end", borderRadius:38, marginHorizontal:"10%"}}/>
       </TouchableOpacity>        
   </Box>

   <Text fontFamily="Plus Jakarta Sans" fontSize={34} color="#FFFFFF" fontWeight="bold" width="80%" style={{marginHorizontal:"5%", marginVertical:"-1%"}}>Restaurants</Text>
   <Text fontFamily="Plus Jakarta Sans" fontSize={16} color="rgba(244, 250, 255, 0.6)" width="80%" style={{ marginHorizontal:"5%",}}>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Text>
   </Box>

   <Box style={{flexDirection:"row", marginVertical:"2%", justifyContent:"space-between", marginHorizontal:"2%",}}>
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
                <Ionicons name='ios-search-outline' size={20} style={{alignSelf:"flex-start", color:"rgb(34, 149, 59)", alignSelf:"center", marginHorizontal:"4%"}} 
                onPress={() => {searchFilterFunction(search)}}/>
                </Box>
                <Ionicons name='filter' size={20} style={{alignSelf:"flex-start", color:"rgb(239, 172, 50)",marginHorizontal:"2%",alignSelf:"center" }} />
                </Box>
   </Box>
<ScrollView showsVerticalScrollIndicator={false}>
{restaurants?.length <= 0 ? <Box justifyContent={"center"} alignItems={"center"} alignSelf={"center"} marginTop={"4%"} height={150} width="90%" borderColor={"rgb(239, 172, 50)"} borderRadius={30} borderWidth={1}>
          <Text>
            No available restaurant
          </Text>
    </Box> :
    <Box width={'100%'}>
      <MasonryList
      horizontal={false}
          style={{ width:"100%", height:"100%"}}  
            data={restaurants}
            numColumns={1}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return(
          <>
          {/* <Text>tt</Text> */}
          <TouchableOpacity activeOpacity={1}
            key={item.magazineId}
          onPress={() => {navigation.navigate('RestaurantDetails', {item: item})}}
        style={{marginVertical:"2%", width:"100%"}}>
          <RestaurantsComponent
          name={item.name}
          review={item.review}
          location={item.location}
          loggoImage={item.loggoImage}
          availabilityOptions={item.availabilityOptions}
          />
        </TouchableOpacity>
          </>
        )
      }}
      keyExtractor={(item) => item.eventId}
    />
    </Box>
}
      <Box style={{marginVertical:"2%"}}>
            <ImageBackground style={{width:"100%", height:125}} source={require("../../assets/images/advert.jpg")} blurRadius={3} >
              <Box flexDirection="column" height="90%" style={{marginVertical:"2%", marginHorizontal:"3%", }}>
                      <Box style={{ borderWidth:1, borderColor:"rgb(239, 172, 50)", borderRadius:30, width:110, height:30 ,justifyContent:"center"}}>
                          <Text fontFamily="Plus Jakarta Sans" color="#FFFFFF" alignSelf="center">advertisement</Text>
                      </Box>
                      <Box style={{width: "100%", flexDirection:"row", justifyContent:"center", height:"55%" }}>
                          <Text fontFamily="Plus Jakarta Sans" width="80%" height={40} fontSize={24} fontWeight="bold" color="#FFFFFF">Buy 1 get 1 free special deals</Text>
                          <Text fontFamily="Plus Jakarta Sans" color="rgb(239, 172, 50)" width="20%" alignSelf="center" fontWeight="bold">VIEW</Text>
                      </Box>
                      <Text fontFamily="Plus Jakarta Sans" color="#FFFFFF" marginTop={1}>DISCOVER LIMPOPO</Text>
              </Box>
            </ImageBackground>
      </Box>

{specials?.length <= 0 ? <Box justifyContent={"center"} alignItems={"center"} alignSelf={"center"} marginTop={"4%"} height={150} width="90%" borderColor={"rgb(239, 172, 50)"} borderRadius={30} borderWidth={1}>
          <Text>
            No available restaurant
          </Text>
    </Box> :
    <Box width={'100%'}>
      <MasonryList
      horizontal={false}
          style={{ width:"100%", height:"100%"}}  
            data={specials}
             numColumns={1}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return(
          <>
          <TouchableOpacity activeOpacity={1}
            key={item.magazineId}
          onPress={() => {navigation.navigate('RestaurantDetails', {item: item})}}
        style={{marginVertical:"2%", width:"100%"}}>
          <RestaurantsComponent
          name={item.name}
          review={item.review}
          location={item.location}
          loggoImage={item.loggoImage}
          availabilityOptions={item.availabilityOptions}
          />
        </TouchableOpacity>
          </>
        )
      }}
      keyExtractor={(item) => item.eventId}
    />
    </Box>
}
</ScrollView>
    </SafeAreaView>
    </KeyboardAvoidingView>
    </>
  )
}

export default Restaurants;