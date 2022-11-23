import React, { useState, useEffect } from 'react';
import { Text, Image, Box, Card, Button, Center, FlatList} from 'native-base';
import { View, SafeAreaView, TouchableOpacity, ImageBackground, ScrollView, PermissionsAndroid, Linking } from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import ReviewComponent from '../../Components/ReviewComponent';
import { useAuth } from '../../context/auth.context';
import Restaurants from '../../services/restaurant';
import { InAppBrowser } from 'react-native-inappbrowser-reborn';
import Geolocation from 'react-native-geolocation-service';
import Toast from 'react-native-toast-message';
import geocoder from 'react-native-geocoder-reborn';


const RestaurantDetails = ({navigation, route}) => {

const {user} = useAuth();
const [restaurant, setRestaurant] = useState(route.params.item);
const [images, setImages] = useState(restaurant.images[0]);
const [reviews, setReviews] = useState([]);
const [rating, setRating] = useState(0);
const { restuarantId } = route.params.item;


const openMap = (address) => {
  const permission = PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
    title:"Discover Limpopo",
    message:"Allow Discover Limpopo to access this device's location?",
    buttonNeutral: "Ask Me Later",
    buttonNegative: "Cancel",
    buttonPositive: "OK"
  }).then((results) => {
    // console.log(results)
    if(results === 'granted') {
      const currentLocation = Geolocation.getCurrentPosition(
        (position) => {
            // console.log({position});
        },
        (error) => {
            // See error code charts below.
            console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );

      const geoCodeAddress = geocoder.geocodeAddress(address).then((response) => {
          response.map((location) => {
            // console.log(location.position.lat, "coord of the address", location.position.lng, address);

            const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
            const latLng = `${location.position.lat},${location.position.lng}`;
            const label = address;
            const url = Platform.select({
              ios: `${scheme}${label}@${latLng}`,
              android: `${scheme}${latLng}(${label})`
            });

          Linking.openURL(url)
      
          })

      })
     


    } else if(results === 'denied') {
      Toast.show({type:"", text2:"Permission to access location denied"})


    } else if( results === 'never_ask_again') {
      Toast.show({text2:"Permission to access location denied"})
    }
    
  }).catch((error) => console.log(error))

}


useEffect(() => {
     Restaurants.getReview(restuarantId,((review, rating )=> {
      setReviews(review)
      setRating(rating)
  }))
  
}, []);

  return (
    <>


 <SafeAreaView >
<ScrollView style={{ backgroundColor:"#F4FAFF" }} showsVerticalScrollIndicator={false}>
<Box style={{ height:336, backgroundColor:"grey", borderBottomLeftRadius:30, borderBottomRightRadius:30, width:"100%"}}>
    <Image alt='background' source={{uri: restaurant.loggoImage}} resizeMode="cover" style={{width:"100%", height:"100%",  borderBottomLeftRadius:30, borderBottomRightRadius:30}}/>   
<Box style={{width:"95%", borderRadius:30, flexDirection:"row", marginVertical:"-73%", height:50,marginHorizontal:"2%", justifyContent:"space-between", alignContent:"center", alignItems:"center"}}>
<Box>
       <TouchableOpacity activeOpacity={2} onPress={() => navigation.goBack()} style={{backgroundColor:"rgb(239, 172, 50)", borderRadius:30, height:50, width:50, alignSelf:"center", justifyContent:"center"}}>
       <MaterialIcons name='keyboard-arrow-left' size={32} style={{alignSelf:"center",alignContent:"center" ,color:"#FFFFFF", marginHorizontal:"10%"}} />
       </TouchableOpacity>
    </Box>
    <TouchableOpacity onPress={() => navigation.navigate('Account')}>
    <Image alt='profile' source={{uri: user?.imageUrl}} style={{width:38, height:38, alignSelf:"flex-end", borderRadius:38, marginHorizontal:"10%"}}/>
    </TouchableOpacity>        
</Box>
</Box>

<Box style={{width:"100%", marginHorizontal:"4%", marginVertical:"5%" }}>
    <Text fontFamily="Plus Jakarta Sans" fontSize={34} color="rgb(0,0,0)" fontWeight="bold">{restaurant.name}</Text>
    <Box style={{marginVertical:"4%", flexDirection:"row"}}>
                   <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:20, color:"rgb(0,0,0)" }}>{reviews.length ? rating : 'not reviewed'}</Text>
                   <Box style={{flexDirection:"row", marginHorizontal:"2%"}}>
                   <AntDesign name='star' size={20} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:rating >= 1 ? "rgb(239, 172, 50)" :"rgba(120, 120, 120, 0.5)"}}/>
                   <AntDesign name='star' size={20} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", colorrating: rating >= 2 ? "rgb(239, 172, 50)" :"rgba(120, 120, 120, 0.5)"}}/>
                   <AntDesign name='star' size={20} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", colorrating: rating >= 3 ? "rgb(239, 172, 50)" :"rgba(120, 120, 120, 0.5)"}}/>
                   <AntDesign name='star' size={20} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", colorrating: rating >= 4 ? "rgb(239, 172, 50)" :"rgba(120, 120, 120, 0.5)"}}/>
                   <AntDesign name='star' size={20} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", colorrating: rating >= 5 ? "rgb(239, 172, 50)" :"rgba(120, 120, 120, 0.5)"}}/>
                 
                   <Entypo name='dot-single' size={20} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", colorrating: rating >= 1 ? "rgb(239, 172, 50)" :"rgba(120, 120, 120, 0.5)"}}/>
                   <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:20, color:"rgb(239, 172, 50)", justifyContent:"center" }}>{reviews.length >= 1 ? (reviews.length > 1 ? `${reviews.length} Reviews` : `${reviews.length} Review`) : `` }</Text>
                   </Box>
       </Box>
    <Box style={{flexDirection:"row"}}>
            <MaterialIcons name='location-on' size={16}  style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"rgb(0,0,0)"}}/>
            <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", width:"80%", marginHorizontal:"2%"}}>{restaurant.location}</Text>
    </Box>
    <Box style={{flexDirection:"row", marginVertical:"2%"}}>
            <MaterialIcons name='location-on' size={16}  style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"rgb(0,0,0)"}}/>
            <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", width:"80%", marginHorizontal:"2%"}}>{restaurant.phoneNumber}</Text>
    </Box>
    <Box style={{flexDirection:"row"}}>
            <MaterialIcons name='location-on' size={16}  style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"rgb(0,0,0)"}}/>
            <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(102, 187, 102)", marginHorizontal:"2%"}}>Open</Text>
            <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", }}>{`${restaurant.isOpen.timeOpen} - ${restaurant.isOpen.timeClose}`}</Text>

    </Box>
</Box>
<TouchableOpacity
                activeOpacity={0.9} 
                onPress={() => {openMap(restaurant.location)}}
                    style={{alignSelf: "center", backgroundColor:"rgb(239, 172, 50)", width:"90%", height:50, opacity:3 ,justifyContent:"center", borderRadius:30,}}>
                        <Text style={{alignSelf:"center", color:"#FFFFFF", fontWeight:"bold", fontFamily:"Plus Jakarta Sans", fontSize:14}}>TAKE ME HERE</Text>
</TouchableOpacity>

<Box style={{ marginHorizontal:"4%", marginVertical:"5%"}}>
<Text style={{fontFamily:"Plus Jakarta Sans", fontSize:20, color:"rgb(0,0,0)", fontWeight:"bold"}}>About</Text>
<Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", marginVertical:"2%", width:"90%" }}>{restaurant.About}</Text>
</Box>

<Image alt='resto2' source={{uri: images}} style={{width:"100%", height:438}}/>
<Box style={{width:"84%", alignSelf:"center", marginVertical:"2%", marginHorizontal:"5%"}}>
<FlatList
            horizontal
            data={restaurant.images}
            style={{width:"100%"}}
            pagingEnabled={true}
            
            showsHorizontalScrollIndicator={false}
            legacyImplementation={false}
            renderItem={({item, index}) =>{
                return (
              <Box margin={1}
              
              key={item.restaurantId}>  
              <TouchableOpacity onPress={() => setImages(item)} >
                <Image alt='resto' source={{uri: item}} style={{width:49, height:49, borderRadius:10, borderColor:`${item === images ? "rgb(239, 172, 50)" : '#F4FAFF'}`, borderWidth:1.5}}/>
                </TouchableOpacity>
            </Box>
            
  )}
          }
          />
</Box>
<Box style={{width:"100%", marginHorizontal:"4%", marginVertical:"4%"}}>
<Text fontFamily="Plus Jakarta Sans" fontSize={24} color="rgb(0,0,0)" fontWeight="bold">Reviews</Text>

    <Box style={{height:110, marginVertical:"4%", marginHorizontal:"-3%"}}>
        {/* <ReviewComponent

        /> */}
         {reviews?.length <= 0 ? <Box justifyContent={"center"} alignItems={"center"} alignSelf={"center"} marginTop={"4%"} height={150} width="90%" borderColor={"rgb(239, 172, 50)"} borderRadius={30} borderWidth={1}>
          <Text>
            Be the first one to add a review
          </Text>
    </Box> :
   (
    <>
    <Box width={'100%'} height={'100%'}>
      <MasonryList
      scrollEnabled={true}
          style={{ width:"100%", height:"100%"}}  
            data={reviews}
            numColumns={1}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return(
          <>
          <TouchableOpacity activeOpacity={1}
            key={item.reviewId}
          >
            <ReviewComponent
                image={item.image}
                name={item.name}
                review={item.review}
                reviewDescription={item.reviewDescription}
                />
        </TouchableOpacity>
          </>
        )
      }}
    />
    </Box>
    </>)

}
    </Box>
    
</Box>
<Box>
        <TouchableOpacity
        activeOpacity={0.9} 
            onPress={() => {}}>
    <Text style={{alignSelf:"center", fontSize:14,fontFamily:"Plus Jakarta Sans",  fontWeight:"700", color:'rgb(239, 172, 50)', marginVertical:"-1%"}}>LOAD MORE</Text>                
    </TouchableOpacity>
    <TouchableOpacity
        activeOpacity={0.9} 
        onPress={() => {}}
            style={{alignSelf: "center", borderColor:"rgb(239, 172, 50)", borderWidth:1, width:"90%", height:50, opacity:3 ,justifyContent:"center", marginVertical:"4%", borderRadius:30,}}>
                <Text style={{alignSelf:"center", color:"rgb(239, 172, 50)", fontWeight:"bold", fontFamily:"Plus Jakarta Sans", fontSize:14}}>LEAVE A REVIEW</Text>
        </TouchableOpacity>
</Box>
</ScrollView>
</SafeAreaView>
</>
)
}

export default RestaurantDetails;

