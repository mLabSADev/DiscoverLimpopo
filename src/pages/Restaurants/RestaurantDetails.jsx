import React, { useState, useEffect } from 'react';
import { Text, Image, Box, Card, Button, Center, FlatList, Alert, TextArea } from 'native-base';
import { View, SafeAreaView, TouchableOpacity, ImageBackground, ScrollView, KeyboardAvoidingView, PermissionsAndroid, Linking, StyleSheet, Modal } from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import ReviewComponent from '../../Components/ReviewComponent';
import { useAuth } from '../../context/auth.context';
import Restaurants from '../../services/restaurant';
import Geolocation from 'react-native-geolocation-service';
import Toast from 'react-native-toast-message';
import geocoder from 'react-native-geocoder-reborn';


const RestaurantDetails = ({ navigation, route }) => {

  const { user } = useAuth();
  const [restaurant, setRestaurant] = useState(route.params.item);
  const [images, setImages] = useState(restaurant.images[0]);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [restaurantId, setRestaurantId] = useState(route.params.item.restaurantId);
  const [stars, setStars] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState('');

console.log(route.params.item.id, 'id is this value')

  const openMap = (address) => {
    const permission = PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
      title: "Discover Limpopo",
      message: "Allow Discover Limpopo to access this device's location?",
      buttonNeutral: "Ask Me Later",
      buttonNegative: "Cancel",
      buttonPositive: "OK"
    }).then((results) => {
      // console.log(results)
      if (results === 'granted') {
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



      } else if (results === 'denied') {
        Toast.show({ text2: "Permission to access location denied" })


      } else if (results === 'never_ask_again') {
        Toast.show({ text2: "Permission to access location denied" })
      }

    }).catch((error) => console.log(error))

  }

  const handleStars = (star, isPressed) => {
      if (message !== "" && star === stars && isPressed === true) {
        Restaurants.sendRestaurantReview(
          user.userName, user.imageUrl, message, true, stars, route.params.item.id, user.uid
        ).then(() => {
          setModalVisible(!modalVisible);
          setTimeout(() => { Toast.show({ type: "success", text2: 'Your review has been submitted!' }); }, 500)
        }).catch((error) => {
          console.log(star, 'after calling update booking review');
          console.log( user.userName, user.imageUrl, message, true, star, route.params.item.id, user.uid
            )
        })

      } else if (star === 0) {
        Toast.show({text2:"Please leave a message"});
      }
  }

  useEffect(() => {
    Restaurants.getReview(route.params.item.id, (review) => {
      setReviews(review)
      console.log({review})
    })

  }, []);

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
        style={styles.centeredBox}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1, height: "100%" }}
        >
          <Box flex={3}></Box>
          <Box style={styles.modalView}>
            <Text fontSize={16} color={'rgb(119, 119, 119)'} fontFamily="Plus Jakarta Sans" fontWeight={'bold'} style={{ marginVertical: "2%" }}>Please help us improve</Text>
            <Text fontSize={24} color={'rgb(119, 119, 119)'} fontFamily="Plus Jakarta Sans" fontWeight={'bold'} style={{ marginVertical: "-3%" }}
              alignSelf={'center'} width={'80%'}
            >
              {`How was your experience 
                with us?`}
            </Text>
            <Box style={{ flexDirection: "row", marginVertical: "3%", marginHorizontal: "10%" }}>
              <TouchableOpacity activeOpacity={0.9}>
                <AntDesign name='star' size={30} style={{ fontWeight: "500", justifyContent: "center", alignSelf: "center" }} color={stars >= 1 ? "rgb(239, 172, 50)" : "lightgrey"} onPress={() => {
                  try {
                    setStars(1);
                    handleStars(1);
                   }
                    catch(error) {
                      
                    }
                }} />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.9}>
                <AntDesign name='star' size={30} style={{ fontWeight: "500", justifyContent: "center", alignSelf: "center" }} color={stars >= 2 ? "rgb(239, 172, 50)" : "lightgrey"} onPress={() => {
                 try {
                  setStars(2);
                  handleStars(2);
                 }
                  catch(error) {
                    
                  }
                }} />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.9}>
                <AntDesign name='star' size={30} style={{ fontWeight: "500", justifyContent: "center", alignSelf: "center" }} color={stars >= 3 ? "rgb(239, 172, 50)" : "lightgrey"} onPress={() => {
                  try {
                    setStars(3);
                    handleStars(3);
                   }
                    catch(error) {
                      
                    }
                }} />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.9}>
                <AntDesign name='star' size={30} style={{ fontWeight: "500", justifyContent: "center", alignSelf: "center" }} color={stars >= 4 ? "rgb(239, 172, 50)" : "lightgrey"} onPress={() => {
                   try {
                    setStars(4);
                    handleStars(4);
                   }
                    catch(error) {
                      
                    }
                }} />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.9}>
                <AntDesign name='star' size={30} style={{ fontWeight: "500", justifyContent: "center", alignSelf: "center" }} color={stars >= 5 ? "rgb(239, 172, 50)" : "lightgrey"} onPress={() => {
                   try {
                    setStars(5);
                    handleStars(5);
                   }
                    catch(error) {
                      
                    }
                }} />
              </TouchableOpacity>
            </Box>

            <TextArea placeholder='Write your review...' alignSelf="center" width="90%" marginHorizontal="5%" height={150}
              backgroundColor="lightgrey" borderRadius={20} bg={'primary.600'}
              onChangeText={(message) => setMessage(message)}
              textContentType='text'
              value={message}
            />

            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => { handleStars(stars, true) }}
              style={{ alignSelf: "center", backgroundColor: "rgb(239, 172, 50)", width: "90%", height: 45, opacity: 3, justifyContent: "center", borderRadius: 30, marginVertical: "5%" }}>
              <Text alignSelf="center" color="#FFFFFF" fontWeight="bold" fontFamily="Plus Jakarta Sans" fontSize={14}>SUBMIT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => { setModalVisible(!modalVisible) }}>
              <Text alignSelf="center" fontSize={14} fontFamily="Plus Jakarta Sans" fontWeight="700" color='rgb(239, 172, 50)' style={{ marginVertical: "-2%" }}>NOT NOW</Text>
            </TouchableOpacity>
          </Box>
        </KeyboardAvoidingView>
      </Modal>

      <SafeAreaView >
        <ScrollView style={{ backgroundColor: "#F4FAFF" }} showsVerticalScrollIndicator={false}>
          <Box style={{ height: 336, backgroundColor: "grey", borderBottomLeftRadius: 30, borderBottomRightRadius: 30, width: "100%" }}>
            <Image alt='background' source={{ uri: restaurant.loggoImage }} resizeMode="cover" style={{ width: "100%", height: "100%", borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }} />
          </Box>

          <Box style={{ width: "100%", marginHorizontal: "4%", marginVertical: "5%" }}>
            <Text fontFamily="Plus Jakarta Sans" fontSize={34} color="rgb(0,0,0)" fontWeight="bold">{restaurant.name}</Text>
            <Box style={{ marginVertical: "4%", flexDirection: "row" }}>
              <Text style={{ fontFamily: "Plus Jakarta Sans", fontSize: 20, color: "rgb(0,0,0)" }}>{parseFloat(restaurant.review).toFixed(1) ? parseFloat(restaurant.review).toFixed(1) : 'not reviewed'}</Text>
              <Box style={{ flexDirection: "row", marginHorizontal: "2%" }}>
                <AntDesign name='star' size={20} style={{ fontWeight: "500", justifyContent: "center", alignSelf: "center", color: restaurant.review >= 1 ? "rgb(239, 172, 50)" : "rgba(120, 120, 120, 0.5)" }} />
                <AntDesign name='star' size={20} style={{ fontWeight: "500", justifyContent: "center", alignSelf: "center", color: restaurant.review >= 2 ? "rgb(239, 172, 50)" : "rgba(120, 120, 120, 0.5)" }} />
                <AntDesign name='star' size={20} style={{ fontWeight: "500", justifyContent: "center", alignSelf: "center", color: restaurant.review >= 3 ? "rgb(239, 172, 50)" : "rgba(120, 120, 120, 0.5)" }} />
                <AntDesign name='star' size={20} style={{ fontWeight: "500", justifyContent: "center", alignSelf: "center", color: restaurant.review >= 4 ? "rgb(239, 172, 50)" : "rgba(120, 120, 120, 0.5)" }} />
                <AntDesign name='star' size={20} style={{ fontWeight: "500", justifyContent: "center", alignSelf: "center", color: restaurant.review >= 5 ? "rgb(239, 172, 50)" : "rgba(120, 120, 120, 0.5)" }} />

                <Entypo name='dot-single' size={20} style={{ fontWeight: "500", justifyContent: "center", alignSelf: "center", color: restaurant.review >= 1 ? "rgb(239, 172, 50)" : "rgba(120, 120, 120, 0.5)" }} />
                <Text style={{ fontFamily: "Plus Jakarta Sans", fontSize: 20, color: "rgb(239, 172, 50)", justifyContent: "center" }}>{restaurant.size >= 1 ? (restaurant.size > 1 ? `${restaurant.size} Reviews` : `${restaurant.size} Review`) : ``}</Text>
              </Box>
            </Box>
            <Box style={{ flexDirection: "row" }}>
              <MaterialIcons name='location-on' size={16} style={{ fontWeight: "500", justifyContent: "center", alignSelf: "center", color: "rgb(0,0,0)" }} />
              <Text style={{ fontFamily: "Plus Jakarta Sans", fontSize: 14, color: "rgb(0,0,0)", width: "80%", marginHorizontal: "2%" }}>{restaurant.location}</Text>
            </Box>
            <Box style={{ flexDirection: "row", marginVertical: "2%" }}>
              <MaterialIcons name='location-on' size={16} style={{ fontWeight: "500", justifyContent: "center", alignSelf: "center", color: "rgb(0,0,0)" }} />
              <Text style={{ fontFamily: "Plus Jakarta Sans", fontSize: 14, color: "rgb(0,0,0)", width: "80%", marginHorizontal: "2%" }}>{restaurant.phoneNumber}</Text>
            </Box>
            <Box style={{ flexDirection: "row" }}>
              <MaterialIcons name='location-on' size={16} style={{ fontWeight: "500", justifyContent: "center", alignSelf: "center", color: "rgb(0,0,0)" }} />
              <Text style={{ fontFamily: "Plus Jakarta Sans", fontSize: 14, color: "rgb(102, 187, 102)", marginHorizontal: "2%" }}>Open</Text>
              <Text style={{ fontFamily: "Plus Jakarta Sans", fontSize: 14, color: "rgb(0,0,0)", }}>{`${restaurant.isOpen.timeOpen} - ${restaurant.isOpen.timeClose}`}</Text>

            </Box>
          </Box>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => { openMap(restaurant.location) }}
            style={{ alignSelf: "center", backgroundColor: "rgb(239, 172, 50)", width: "90%", height: 50, opacity: 3, justifyContent: "center", borderRadius: 30, }}>
            <Text style={{ alignSelf: "center", color: "#FFFFFF", fontWeight: "bold", fontFamily: "Plus Jakarta Sans", fontSize: 14 }}>TAKE ME HERE</Text>
          </TouchableOpacity>

          <Box style={{ marginHorizontal: "4%", marginVertical: "5%" }}>
            <Text style={{ fontFamily: "Plus Jakarta Sans", fontSize: 20, color: "rgb(0,0,0)", fontWeight: "bold" }}>About</Text>
            <Text style={{ fontFamily: "Plus Jakarta Sans", fontSize: 14, color: "rgb(0,0,0)", marginVertical: "2%", width: "90%" }}>{restaurant.About}</Text>
          </Box>

          <Image alt='resto2' source={{ uri: images }} style={{ width: "100%", height: 438 }} />
          <Box style={{ width: "84%", alignSelf: "center", marginVertical: "2%", marginHorizontal: "5%" }}>
            <FlatList
              horizontal
              data={restaurant.images}
              style={{ width: "100%" }}
              pagingEnabled={true}

              showsHorizontalScrollIndicator={false}
              legacyImplementation={false}
              renderItem={({ item, index }) => {
                return (
                  <Box margin={1}

                    key={item.restaurantId}>
                    <TouchableOpacity onPress={() => setImages(item)} >
                      <Image alt='resto' source={{ uri: item }} style={{ width: 49, height: 49, borderRadius: 10, borderColor: `${item === images ? "rgb(239, 172, 50)" : '#F4FAFF'}`, borderWidth: 1.5 }} />
                    </TouchableOpacity>
                  </Box>

                )
              }
              }
            />
          </Box>
          <Box height={15}></Box>
          <Text fontFamily="Plus Jakarta Sans" fontSize={24} color="rgb(0,0,0)" fontWeight="bold" style={{ marginVertical: "4%", marginHorizontal: "3%" }}>Reviews</Text>
          <Box height={15}></Box>

          {/* <ReviewComponent

        /> */}
          {reviews?.length <= 0 ? <Box justifyContent={"center"} alignItems={"center"} alignSelf={"center"} height={140} width="90%" borderColor={"rgb(239, 172, 50)"} borderRadius={30} borderWidth={1}>
            <Text>
              Be the first one to add a review
            </Text>
          </Box> :
            (
              <>
                <Box width={'100%'} style={{height:300}}>
                  <MasonryList
                    scrollEnabled={true}
                    style={{ width: "100%", height: "100%" }}
                    data={reviews}
                    numColumns={1}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                      return (
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
            <Box height={15}></Box>

          <Box>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => { }}>
              <Text style={{ alignSelf: "center", fontSize: 14, fontFamily: "Plus Jakarta Sans", fontWeight: "700", color: 'rgb(239, 172, 50)', marginVertical: "-1%" }}>LOAD MORE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => { setModalVisible(!modalVisible) }}
              style={{ alignSelf: "center", borderColor: "rgb(239, 172, 50)", borderWidth: 1, width: "90%", height: 50, opacity: 3, justifyContent: "center", marginVertical: "4%", borderRadius: 30, }}>
              <Text style={{ alignSelf: "center", color: "rgb(239, 172, 50)", fontWeight: "bold", fontFamily: "Plus Jakarta Sans", fontSize: 14 }}>LEAVE A REVIEW</Text>
            </TouchableOpacity>
          </Box>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  centeredBox: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",

  },
  modalBox: {
    width: "100%",
    height: "100%",
    justifyContent: "center",

    flexDirection: "column",
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    alignItems: "center",
    shadowColor: "transparent",

    shadowOpacity: 0.25,
    elevation: 5
  },
  image: {

    borderRadius: 300,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  modalView: {
    width: "90%",
    height: 322,
    margin: 20,
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  }

});

export default RestaurantDetails;

