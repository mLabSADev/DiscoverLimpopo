import React, { useState, useEffect } from 'react';
import { TouchableOpacity, SafeAreaView, Modal, StyleSheet, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import ReviewComponent from '../../Components/ReviewComponent';
import MasonryList from '@react-native-seoul/masonry-list';
import { Box, Image, Text, ScrollView, FlatList } from 'native-base';
import { Chip } from 'react-native-paper';
import { useAuth } from '../../context/auth.context';
import Accomodations from '../../services/accomodation';
import Amenities from '../../Components/accomodation/Amenities';
import Amenities2 from '../../Components/accomodation/Amenities2';

const profile = 'https://media.istockphoto.com/id/1364105164/photo/hologram-human-head-deep-learning-and-artificial-intelligence-abstract-background.jpg?b=1&s=170667a&w=0&k=20&c=i9-oulHCR0LCxqzqUW2Q7bKt3RrdbCZU0OXqXV2gw-o=';

const dataSource = ["Volvo", "Alpha Sports", "Ford", "Gräf & Stift", "Aston Martin", "BMW", "Tarrant Automobile","Push", "Österreichische Austro-Fiat", "Mazda", "Rosenbauer"]

const AccomodationDetails = ({ navigation, route }) => {

  const { user } = useAuth();
  const [accomodation, setAccomodation] = useState(route.params.item);
  const [images, setImages] = useState(accomodation.images[0]);
  const [reviews, setReviews] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [accomodationId, setAccomodationId] = useState(route.params.item.accomodationId)
  // console.log(accomodationId);

  const paymentData = {
    merchant_id: 10027888,
    merchant_key: 'm24urqvjpy2gb',
    amount: 60.00,
    item_name: 'Booking'
  };

  useEffect(() => {

    Accomodations.getReview(accomodationId, (review) => {
      setReviews(review)
      //  console.log({review})
    })

  }, []);


  return (

    <>
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
        style={styles.centeredBox}
      >

        <Box flex={2}></Box>


      </Modal> */}
      <SafeAreaView >
        <ScrollView style={{ backgroundColor: "#FFFFFF", width: "100%", height: "100%" }} showsVerticalScrollIndicator={false}>
          <Box style={{ height: 390, backgroundColor: "grey", borderBottomLeftRadius: 30, borderBottomRightRadius: 30, width: "100%" }}>
            <Image alt="accomodation" source={{ uri: accomodation.accomodationImage }} resizeMode="cover" style={{ width: "100%", height: "100%", borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }} />
            <Box style={{ width: "95%", borderRadius: 30, flexDirection: "column", marginVertical: "-95%", height: "100%", marginHorizontal: "2%", justifyContent: "space-between", alignContent: "center", alignItems: "center" }}>
             {/* top navigation */}
            
              {accomodation.startingPrice ?
                <Box style={{ width: "42%", borderRadius: 30, flexDirection: "row", marginVertical: "87%", height: 40, backgroundColor: "#FFFFFF", alignSelf: "flex-end", justifyContent: "center", alignItems: "center", }}>
                  <Text style={{ fontFamily: "Plus Jakarta Sans", fontSize: 20, color: "rgb(0,0,0)", fontWeight: "bold" }}>
                    R {accomodation.startingPrice}.00 pppn
                  </Text>
                </Box> : null
              }
            </Box>

          </Box>
          {/* Accomodation Details */}
          <Box style={{ backgroundColor: "#F4FAFF" }}>
            <Box style={{ width: "100%", marginHorizontal: "4%", marginVertical: "5%" }}>
              <Text fontFamily="Plus Jakarta Sans" fontSize={34} color="rgb(0,0,0)" fontWeight="bold">{accomodation.name}</Text>
              <Box style={{ marginVertical: "4%", flexDirection: "row" }}>
                <Box>
                <Text style={{ fontFamily: "Plus Jakarta Sans", fontSize: 20, color: "rgb(0,0,0)" }}>{parseFloat(accomodation.overAllReview).toFixed(1) ? parseFloat(accomodation.overAllReview).toFixed(1) : 'not reviewed'}</Text>
                </Box>
                {accomodation?.overAllReview ?
                <Box style={{ flexDirection: "row", marginHorizontal: "2%" }}>
                  <AntDesign name='star' size={20} style={{ fontWeight: "500", justifyContent: "center", alignSelf: "center", color: accomodation.overAllReview >= 1 ? "rgb(239, 172, 50)" : "rgba(120, 120, 120, 0.5)" }} />
                  <AntDesign name='star' size={20} style={{ fontWeight: "500", justifyContent: "center", alignSelf: "center", color: accomodation.overAllReview >= 2 ? "rgb(239, 172, 50)" : "rgba(120, 120, 120, 0.5)" }} />
                  <AntDesign name='star' size={20} style={{ fontWeight: "500", justifyContent: "center", alignSelf: "center", color: accomodation.overAllReview >= 3 ? "rgb(239, 172, 50)" : "rgba(120, 120, 120, 0.5)" }} />
                  <AntDesign name='star' size={20} style={{ fontWeight: "500", justifyContent: "center", alignSelf: "center", color: accomodation.overAllReview >= 4 ? "rgb(239, 172, 50)" : "rgba(120, 120, 120, 0.5)" }} />
                  <AntDesign name='star' size={20} style={{ fontWeight: "500", justifyContent: "center", alignSelf: "center", color: accomodation.overAllReview >= 5 ? "rgb(239, 172, 50)" : "rgba(120, 120, 120, 0.5)" }} />
                  <Entypo name='dot-single' size={20} style={{ fontWeight: "500", justifyContent: "center", alignSelf: "center", color: accomodation.reviewSize > 1 ? "rgb(239, 172, 50)" : "rgba(120, 120, 120, 0.5)" }} />
                  <Text style={{ fontFamily: "Plus Jakarta Sans", fontSize: 20, color: "rgb(239, 172, 50)", justifyContent: "center" }}>{accomodation.reviewSize >= 1 ? (accomodation.reviewSize > 1 ? `${accomodation.reviewSize} Reviews` : `${accomodation.reviewSize} Review`) : ``}</Text>
                </Box>
                  : null}
              </Box>
              <Box style={{ flexDirection: "row" }}>
                <MaterialIcons name='location-on' size={16} style={{ fontWeight: "500", justifyContent: "center", alignSelf: "center", color: "rgb(0,0,0)" }} />
                <Text style={{ fontFamily: "Plus Jakarta Sans", fontSize: 14, color: "rgb(0,0,0)", width: "80%", marginHorizontal: "2%" }}>{accomodation.location}</Text>
              </Box>
              <Box style={{ flexDirection: "row", marginVertical: "2%" }}>
                <MaterialIcons name='location-on' size={16} style={{ fontWeight: "500", justifyContent: "center", alignSelf: "center", color: "rgb(0,0,0)" }} />
                <Text style={{ fontFamily: "Plus Jakarta Sans", fontSize: 14, color: "rgb(0,0,0)", width: "80%", marginHorizontal: "2%" }}>{accomodation.phoneNumber}</Text>
              </Box>
              <Box style={{ flexDirection: "column" }}>
                <Box style={{ flexDirection: "row" }}>
                  <MaterialIcons name='access-time' size={16} style={{ fontWeight: "500", justifyContent: "flex-start", alignSelf: "flex-start", color: "rgb(0,0,0)" }} />
                  <Text style={{ fontFamily: "Plus Jakarta Sans", fontSize: 14, color: "rgb(0,0,0)", marginHorizontal: "2%" }}>Check in--{accomodation.checkIn}</Text>
                </Box>
                <Box style={{ flexDirection: "row", marginHorizontal: "4%" }}>
                  <Text style={{ fontFamily: "Plus Jakarta Sans", fontSize: 14, color: "rgb(0,0,0)", marginHorizontal: "2%" }}>Check out--{accomodation.checkOut}</Text>
                </Box>
              </Box>
            </Box>

            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation.navigate('BookingProcess', {accomodation: accomodation})}
              style={{ alignSelf: "center", backgroundColor: "rgb(239, 172, 50)", width: "90%", height: 50, opacity: 3, justifyContent: "center", borderRadius: 30, }}>
              <Text style={{ alignSelf: "center", color: "#FFFFFF", fontWeight: "bold", fontFamily: "Plus Jakarta Sans", fontSize: 14 }}>CHECK IN</Text>
            </TouchableOpacity>
            <Box style={{ height: 15 }}></Box>
          </Box>
          {/*  */}
          <Box style={{ marginHorizontal: "4%", marginVertical: "2%" }}>
            <Text style={{ fontFamily: "Plus Jakarta Sans", fontSize: 20, color: "rgb(0,0,0)", fontWeight: "bold" }}>Accommodation Details</Text>
            <Text style={{ fontFamily: "Plus Jakarta Sans", fontSize: 14, color: "rgb(0,0,0)", marginVertical: "2%", width: "90%" }}>
              {accomodation.description}
            </Text>
          </Box>
          <Box style={{ marginHorizontal: "4%", marginVertical: "5%", width: "100%" }}>
            <Text style={{ fontFamily: "Plus Jakarta Sans", fontSize: 20, color: "rgb(0,0,0)", fontWeight: "700" }}>Amenities</Text>
          </Box>
          <Box>

          </Box>
          <Box width={'100%'} style={{ height: 110, alignSelf:"center", marginHorizontal:"4%" }}>
                  <MasonryList
                 showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    style={{ width:"95%",}}
                    data={accomodation.amenities}
                    // numColumns={3}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                      return (
                        <>
                        <Box style={{flexWrap:"wrap",  height:20, width:"90%"}}>
                         <Chip 
                         icon={item.icon !== undefined ? item.icon : "information"}
                         key={index}    
                         mode="outlined" //changing display mode, default is flat.       
                         height={20} //give desirable height to chip       
                         textStyle={{ color:'white',fontSize: 10,  }} //label properties       
                         style={{ borderColor: 'rgb(239, 172, 50)', borderWidth:1, marginHorizontal:5}} //display diff color BG       
                         >  
                        <Text> {item.label}</Text>      
                        </Chip>
                        </Box>
                        </>
                        )}}/>
          </Box>
          <Image alt='resto1' source={{ uri: images }} style={{ width: "100%", height: 438 }} />
          <Box style={{ width: "84%", alignSelf: "center", marginVertical: "2%", marginHorizontal: "5%" }}>
            <FlatList
              horizontal
              data={accomodation.images}
              style={{ width: "100%" }}
              pagingEnabled={true}

              showsHorizontalScrollIndicator={false}
              legacyImplementation={false}
              renderItem={({ item, index }) => {
                return (
                  <Box margin={1}

                    key={item.restaurantId}>
                    <TouchableOpacity onPress={() => setImages(item)} >
                      <Image alt='room' source={{ uri: item }} style={{ width: 49, height: 49, borderRadius: 10, borderColor: `${item === images ? "rgb(239, 172, 50)" : '#F4FAFF'}`, borderWidth: 1.5 }} />
                    </TouchableOpacity>
                  </Box>

                )
              }
              }
            />
          </Box>
          <Box height={15}></Box>
            <Text fontFamily= "Plus Jakarta Sans" fontSize= {24} color= "rgb(0,0,0)" fontWeight= "bold" style={{ marginVertical: "4%", marginHorizontal: "3%" }}>Reviews</Text>
              {/* <ReviewComponent

        /> */}
              {reviews?.length <= 0 ? <Box justifyContent={"center"} alignItems={"center"} alignSelf={"center"} marginTop={"2%"} height={140} width="90%" borderColor={"rgb(239, 172, 50)"} borderRadius={30} borderWidth={1}>
                <Text>
                  Be the first one to add a review
                </Text>
              </Box>:
                
                  <>
                    <Box width={'90%'} style={{marginVertical: "2%", marginHorizontal: "3%", height:300,}}>
                      <MasonryList
                        scrollEnabled={true}
                        style={{ width: "100%" }}
                        data={reviews}
                        numColumns={1}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item}) => {
                          return(
                            <>
                              <TouchableOpacity activeOpacity={1}
                                key={item.reviewId}
                                style={{marginVertical:10}}
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
                          }
                        }
                      />
                    </Box>
                  </>
              }
            
          <Box style={{ marginVertical: "5%" }}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => { }}>
              <Text style={{ alignSelf: "center", fontSize: 14, fontFamily: "Plus Jakarta Sans", fontWeight: "700", color: 'rgb(239, 172, 50)' }}>LOAD MORE</Text>
            </TouchableOpacity>
          </Box>
        </ScrollView></SafeAreaView></>
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
    height: 522,
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


export default AccomodationDetails;