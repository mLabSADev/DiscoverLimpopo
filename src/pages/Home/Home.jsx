import React, { useState, useEffect, useRef } from 'react';
import { Box, Text, ScrollView, Image, FlatList } from 'native-base';
import { SafeAreaView, TouchableOpacity, ImageBackground, Dimensions, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import RestaurantsComponent from '../../Components/restaurants/RestaurantsComponent';
import MasonryList from '@react-native-seoul/masonry-list';
// import Carousel from 'react-native-snap-carousel';
import AccomodationComponent from '../../Components/restaurants/AccomodationComponent';
import { useAuth } from '../../context/auth.context';
import Homes from '../../services/home';
import Magazines from '../../services/magazine';

const image = 'https://media.istockphoto.com/id/1364105164/photo/hologram-human-head-deep-learning-and-artificial-intelligence-abstract-background.jpg?b=1&s=170667a&w=0&k=20&c=i9-oulHCR0LCxqzqUW2Q7bKt3RrdbCZU0OXqXV2gw-o=';

const data = [{
  id: 1,
  title: 'First Edition',
  image: require('../../assets/images/magazine1.jpg')
}, {
  id: 2,
  title: 'First Edition',
  image: require('../../assets/images/magazine1.jpg')
}, {
  id: 3,
  title: 'First Edition',
  image: require('../../assets/images/magazine1.jpg')
}, {
  id: 4,
  title: 'First Edition',
  image: require('../../assets/images/magazine1.jpg')
}, {
  id: 5,
  title: 'First Edition',
  image: require('../../assets/images/magazine1.jpg')
}];

const arr = [];

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const Home = ({ navigation, route }) => {

  const { user } = useAuth();
  const [restaurants, setRestaurants] = useState([]);
  const [reviewRestuarant, setReviewRestuarant] = useState(0);
  const [reviewAccomodation, setReviewAccomodation] = useState(0);
  const [accomodation, setAccomodation] = useState([]);
  const [magazine, setMagazine] = useState([]);

  const fetchRestaurant = async () => {
   await Homes.getRestaurant((restaurant, review) => {
      setRestaurants(restaurant);
      setReviewRestuarant(review);
      // console.log(review)
    });

  }

const fetchAccomodation = async () => {
 await  Homes.getAccomodation((accomodation) => {
      setAccomodation(accomodation);
   // setReviewAccomodation(reviews)
   console.log(accomodation, 'the aaray')
 });;

}

const fetchMagazines = async () => {
  Magazines.getMagazine((magazine, size, id) => {
    setMagazine(magazine);
    // console.log({magazine})
  });

}

  useEffect(() => {
      fetchRestaurant();
      fetchAccomodation();
      fetchMagazines();
      
 
    
  }, []); 


  return (
    <SafeAreaView style={{ backgroundColor: "#F4FAFF", }}>
      <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false} style={{ height: "100%" }}>

        <Box>
          <ImageBackground style={{ width: "100%", height: 125 }} source={require("../../assets/images/advert.jpg")} blurRadius={3}>
            <Box style={{ marginVertical: "2%", flexDirection: "column", marginHorizontal: "3%", height: "90%" }}>
              <Box style={{ borderWidth: 1, borderColor: "rgb(239, 172, 50)", borderRadius: 30, width: 110, height: 30, justifyContent: "center" }}>
                <Text style={{ fontFamily: "Plus Jakarta Sans", color: "#FFFFFF", alignSelf: "center", }}>advertisement</Text>
              </Box>
              <Box style={{ width: "100%", flexDirection: "row", justifyContent: "center", height: "55%" }}>
                <Text fontFamily="Plus Jakarta Sans" width="80%" fontSize={24} fontWeight="bold" color="#FFFFFF" style={{ marginVertical: "-1%" }}>PEERMONT GIN & NOMALI GIN LAUNCH</Text>
                <Text style={{ fontFamily: "Plus Jakarta Sans", color: "rgb(239, 172, 50)", width: "20%", alignSelf: "center", fontWeight: "bold" }}>VIEW</Text>
              </Box>
              <Text style={{ fontFamily: "Plus Jakarta Sans", color: "#FFFFFF", marginVertical: ".5%" }}>DISCOVER LIMPOPO</Text>
            </Box>
          </ImageBackground>
        </Box>

        <Box style={{ width: "95%", backgroundColor: 'rgba(239, 172, 50, 0.05)', borderRadius: 30, flexDirection: "row", marginVertical: "3%", height: 50, marginHorizontal: "2%", justifyContent: "space-between", alignContent: "center", alignItems: "center", elevation: .3, shadowColor: "lightgrey", }}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Feather name='menu' size={32} style={{ alignSelf: "flex-start", color: "rgb(239, 172, 50)", marginHorizontal: "10%" }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Account')}>
            <Image source={{ uri: user?.imageUrl ? user?.imageUrl : image }} alt={'profile'} style={{ width: 38, height: 38, alignSelf: "flex-end", borderRadius: 38, marginHorizontal: "10%" }} />
          </TouchableOpacity>
        </Box>

        <Box height={1}></Box>
        {/* Accomodation */}
        <Box style={{ width: "100%" }}>
          <Text style={{ fontFamily: "Plus Jakarta Sans", fontWeight: "bold", fontSize: 20, color: "rgb(0,0,0)", marginHorizontal: "3%", }}>Accomodation</Text>
          <Box height={3}></Box>
          {accomodation?.length <= 0 ? <Box justifyContent={"center"} alignItems={"center"} alignSelf={"center"} marginTop={"4%"} height={300} width="90%" borderColor={"rgb(239, 172, 50)"} borderRadius={30} borderWidth={1}>
            <Text>
              No available Accomodation
            </Text>
          </Box> :
            <Box width='100%' height={300} >
              <FlatList
                horizontal
                data={accomodation}
                style={{ width: "100%", marginVertical: ".5%", }}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                legacyImplementation={false}
                // keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => { navigation.navigate('AccomodationDetails', { item: item }) }}
                    style={{ width: 310, height: 300, elevation: 15, shadowColor: "grey", shadowOpacity: 2 }}
                    key={item.accomodationId}>
                    <AccomodationComponent
                      name={item.name}
                      amenities={item.amenities}
                      description={item.description}
                      image={item.accomodationImage}
                      loggoImage={item.accomodationLoggo}
                      review={item.review}
                    />
                  </TouchableOpacity>
                )
                }
              />

            </Box>
          }
          <Box height={3}></Box>
          <TouchableOpacity onPress={() => { navigation.navigate('Accomodation') }}>
            <Text style={{ fontFamily: "Plus Jakarta Sans", alignSelf: "center", color: "rgb(239, 172, 50)", fontWeight: "bold", }}> VIEW MORE</Text>
          </TouchableOpacity>
        </Box>

        <Box height={3}></Box>
        {/* Restaurants */}
        <Box style={{ width: "100%" }}>
          <Text style={{ fontFamily: "Plus Jakarta Sans", fontWeight: "bold", fontSize: 20, color: "rgb(0,0,0)", marginHorizontal: "3%" }}>Restaurant</Text>
          <Box height={3}></Box>
          {restaurants?.length <= 0 ? <Box justifyContent={"center"} alignItems={"center"} alignSelf={"center"} marginTop={"4%"} height={150} width="90%" borderColor={"rgb(239, 172, 50)"} borderRadius={30} borderWidth={1}>
            <Text>
              No available restaurant
            </Text>
          </Box> :
            (
              <>
                <Box width={'100%'} style={{ height: 300 }}>
                  <MasonryList
                    horizontal={false}
                    style={{ width: "100%", height: "100%", elevation: 15, shadowColor: "grey", shadowOpacity: 2 }}
                    data={restaurants}
                    numColumns={1}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                      return (
                        <>
                          {/* <Text>{item.phoneNumber}</Text> */}
                          <TouchableOpacity activeOpacity={1}
                            key={item.restuarantId}
                            onPress={() => { navigation.navigate('RestaurantDetails', { item: item, restuarantId: item.restuarantId }) }}
                            style={{ marginVertical: "2%", width: "100%" }}>
                            <RestaurantsComponent
                              name={item.name}
                              review={reviewRestuarant}
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
                <Box height={3}></Box>
                <TouchableOpacity onPress={() => { navigation.navigate('Restaurants', { item: restaurants }) }}>
                  <Text style={{ fontFamily: "Plus Jakarta Sans", alignSelf: "center", color: "rgb(239, 172, 50)", fontWeight: "bold", }}> VIEW MORE</Text>
                </TouchableOpacity>

              </>
            )
          }
        </Box>

        {/* Magazines */}

        <Box
          style={{ width: "95%", height: 290, backgroundColor: "rgba(42, 42, 42, 0.95)", alignSelf: "center", borderRadius: 30, marginVertical: "11%" }}>
          <Box height={3}></Box>
          {magazine?.length <= 0 ? <Box justifyContent={"center"} alignItems={"center"} alignSelf={"center"} marginTop={"1%"} height={100} width="90%" borderColor={"rgb(239, 172, 50)"} borderRadius={30} borderWidth={1}>
            <Text>
              No available Magazines
            </Text>
          </Box> :
            <>
              <Box height={180} style={{ marginVertical: "-9%", width: '90%', marginHorizontal: "5%", flexDirection: "row", justifyContent: "space-between", }}>

                <TouchableOpacity activeOpacity={1}
                  style={{ marginVertical: "5%" }}
                  onPress={() => { navigation.navigate('MagazineDetails', { item: magazine[0] }) }}
                >
                  <Image source={{ uri: magazine[0].imageCover }} alt={'accomodation'} style={{ width: 100, height: 140, borderRadius: 20, alignSelf: "flex-start" }} />

                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1}
                  // style={{alignSelf:"center"}}

                  onPress={() => { navigation.navigate('MagazineDetails', { item: magazine[0] }) }}
                >
                  <Image source={{ uri: magazine[0].imageCover }} alt={'accomodation'} style={{ width: 115, height: 171, borderRadius: 20, alignSelf: "center" }} />

                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1}
                  style={{ marginVertical: "5%" }}

                  onPress={() => { navigation.navigate('MagazineDetails', { item: magazine[0] }) }}
                >
                  <Image source={{ uri: magazine[0].imageCover }} alt={'accomodation'} style={{ width: 100, height: 140, borderRadius: 20, alignSelf: "flex-end" }} />

                </TouchableOpacity>
              </Box>
            </>
          }
          <Box height={7}></Box>
          <Text fontFamily="Plus Jakarta Sans" color="#FFFFFF" fontSize={24} fontWeight="bold" style={{ marginHorizontal: "5%", }}>Our magazines are curated for travelling in mind</Text>
          <Box height={2}></Box>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => { navigation.navigate('Magazine') }}
            style={{ alignSelf: "center", borderColor: "rgb(239, 172, 50)", borderWidth: 1, width: "90%", height: 50, justifyContent: "center", borderRadius: 30, }}>
            <Text alignSelf="center" color="rgb(239, 172, 50)" fontWeight="bold" fontStyle="inter" fontSize={14}>VIEW ALL</Text>
          </TouchableOpacity>
        </Box>

      </ScrollView>
    </SafeAreaView>
  )
}

export default Home;
