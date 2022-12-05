import React, { useState, useEffect} from 'react';
import {Box, Text, Image, TextArea, TextField } from 'native-base';
import { SafeAreaView, TouchableOpacity, StyleSheet, Modal, KeyboardAvoidingView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useAuth } from '../../context/auth.context';
import Toast from 'react-native-toast-message';
import BookingService from '../../services/booking';
import { TextInput } from 'react-native-gesture-handler';
import ReviewComponent from '../../Components/ReviewComponent';
import moment from 'moment';

const BookingDetails = ({navigation, route}) => {

      const { user } = useAuth();
      const [booking, setBooking] = useState(route.params.booking); 
      const [stars, setStars] = useState(0);
      const [modalVisible, setModalVisible] = useState(false);
      const [message, setMessage] = useState('');
      

      const handleStars = (star, isPressed) => {
        if (message !== "" && star === stars && isPressed === true) {
                  BookingService.updateBookingReview(
                        user?.userName, user?.imageUrl, message ,true, star, booking.accomodationId, booking.bookingId
                      ).then(() => {
                        setModalVisible(!modalVisible);
                        setTimeout(() => {Toast.show({type:"success", text2: 'Your review has been submitted!'});}, 1000)
                      }).catch((error) => {
                              console.log(error, 'after calling update booking review');
                      })   
                } else {
                BookingService.updateBookingReview(
                  user?.userName, user?.imageUrl, message ,false, star, booking.accomodationId, booking.bookingId
                ).then(() => {
                  Toast.show({type:"success", text2: 'Your review has been submitted!'});
                }).catch((error) => {
                        console.log(error, 'after calling update booking review');
                })
            }                      
      }


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
 
    <SafeAreaView  style={{ backgroundColor:"#F4FAFF", width:"100%", height:"100%" }}>
   <Box style={{width:"95%", backgroundColor:'rgba(239, 172, 50, 0.05)', borderRadius:30, flexDirection:"row", marginVertical:"3%", height:80,marginHorizontal:"2%", alignContent:"center", alignItems:"center"}}>
      <Box>
       <TouchableOpacity activeOpacity={2} onPress={() => navigation.navigate('Booking')} style={{backgroundColor:"rgb(239, 172, 50)", borderRadius:30, height:50, width:50, alignSelf:"center", justifyContent:"center"}}>
       <MaterialIcons name='keyboard-arrow-left' size={32} style={{alignSelf:"center",alignContent:"center" ,color:"#FFFFFF", marginHorizontal:"10%"}} />
       </TouchableOpacity>
    </Box>
       <Box style={{marginHorizontal:"5%"}}>
       <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:24, color:"rgb(0,0,0)", fontWeight:"700",}}>{booking.accomodationName}</Text>
        <Text>Booking Info</Text>
       </Box>
   </Box>

   <Box style={{flexDirection:"row", width:"100%", marginVertical:"5%"}}>
   <MaterialIcons name='access-time' size={18} style={{alignSelf:"center",alignContent:"center" ,color:"rgb(0,0,0)", marginHorizontal:"2%"}} />
            {/* <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgb(0,0,0)", fontWeight:"700",}}>Hotel Monica</Text> */}
           <Box style={{flexDirection:"row"}}>
            <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgb(0,0,0)",}}>{moment(booking.checkIn).format("DD MMM, YYYY").toString()}</Text> 
            <AntDesign name='arrowright' size={16} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center"}}/>
            <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgb(0,0,0)",}}>  {moment(booking.checkOut).format("DD MMM, YYYY").toString()}</Text>
            </Box>
      </Box>

      <Box style={{flexDirection:"row", width:"100%",}}>
      <Box style={{alignItems:"flex-start", flexDirection:"row", width:"70%", marginHorizontal:"1%",}}>
            <MaterialIcons name='bedtime' size={18} style={{alignSelf:"flex-start",alignContent:"center" ,color:"rgb(0,0,0)", marginHorizontal:"2%"}} />
            {/* <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgb(0,0,0)", fontWeight:"700",}}>Hotel Monica</Text> */}
            <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgb(0,0,0)", marginHorizontal:"1%"}}>{booking.nights} nights</Text> 
            </Box>
            <Text style={{alignSelf:"flex-end", fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgb(0,0,0)", width:"30%",}}>R{booking.roomPrice}.00 pppm</Text>
            
      </Box>

      <Box style={{flexDirection:"row", width:"100%", marginVertical:"5%"}}>
   <FontAwesome5 name='user' size={18} style={{alignSelf:"center",alignContent:"center" ,color:"rgb(0,0,0)", marginHorizontal:"2%"}} />
            {/* <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgb(0,0,0)", fontWeight:"700",}}>Hotel Monica</Text> */}
           <Box style={{flexDirection:"row"}}>
            <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgb(0,0,0)",}}>{booking.guest} Person </Text>
            <AntDesign name='arrowright' size={16} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center"}}/>
            <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgb(0,0,0)",}}> {booking.roomName} room</Text>
            </Box>
      </Box>
        <Box style={{width:"95%", height:15, marginHorizontal:"2%", borderColor:"grey", borderTopWidth:1}}>
            </Box>
      <Box style={{flexDirection:"row", width:"100%", marginVertical:"1%", marginHorizontal:"1%"}}>
      <Box style={{alignItems:"flex-start", flexDirection:"row", width:"60%", marginHorizontal:"1%"}}>
            {/* <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgb(0,0,0)", fontWeight:"700",}}>Hotel Monica</Text> */}
            <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgb(0,0,0)", marginHorizontal:"1%"}}>Amount</Text> 
     </Box>
     <Box style={{width:"30%", justifyContent:"flex-end"}}>
     <Text style={{alignSelf:"flex-end", fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgb(0,0,0)",}}>R{booking.roomPrice}.00</Text>
     </Box>
            
      </Box>

      <Box style={{flexDirection:"row", width:"100%", marginVertical:"1%", marginHorizontal:"1%"}}>
      <Box style={{alignItems:"flex-start", flexDirection:"row", width:"60%", marginHorizontal:"1%"}}>
            {/* <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgb(0,0,0)", fontWeight:"700",}}>Hotel Monica</Text> */}
            <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgb(0,0,0)", marginHorizontal:"1%"}}>Total Amount</Text> 
            </Box>
            <Box style={{width:"30%", justifyContent:"flex-end"}}>
            <Text style={{alignSelf:"flex-end", fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgb(0,0,0)",}}>R{booking.totalAmount}.00</Text>
            </Box>
            
      </Box>

      <Box style={{flexDirection:"row", width:"100%", marginVertical:"1%", marginHorizontal:"1%"}}>
      <Box style={{alignItems:"flex-start", flexDirection:"row", width:"60%", marginHorizontal:"1%"}}>
            {/* <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgb(0,0,0)", fontWeight:"700",}}>Hotel Monica</Text> */}
            <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgb(0,0,0)", marginHorizontal:"1%"}}>Payment Method</Text> 
            </Box>
            <Box style={{width:"40%", justifyContent:"flex-end", alignContent:"flex-end", alignItems:"flex-end"}}>
              { booking.paid ?
            <Image alt='payfast' source={require('../../assets/images/payfast.png')} style={{resizeMode:"contain" ,width:"100%", height:30, alignSelf:"flex-end", alignContent:"flex-end"}}/>
              : <Text style={{marginHorizontal:"15%"}}>Not Paid</Text>}
            </Box>
            
      </Box>
      <Box style={{flex:.4}}></Box>
      <Box style={{width:"100%", height:100}}>

      </Box>
     { booking.paid === true ?
     <>
      <Box style={{height:"20%", marginHorizontal:"1%"}}>
        <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:20, color:"rgb(0,0,0)", marginHorizontal:"1%", fontWeight:"bold"}}>
            Review
        </Text>
        {/* {console.log(booking.image)} */}
        { booking.image === undefined && booking.review === 0 ? 
        <>
        <Box>
          {/* {review stars} */}
        <Box style={{flexDirection:"row", marginVertical:"2%", marginHorizontal:"10%"}}>
        <TouchableOpacity activeOpacity={0.9}>
        <AntDesign name='star' size={30} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center"}} color={stars >=1 ? "rgb(239, 172, 50)" : "lightgrey"} onPress={() => {
            try{
              setStars(1)
              handleStars(1)
              } catch(error) {
                
              }
            }}/>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9}>
        <AntDesign name='star' size={30} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center"}} color={stars >=2 ? "rgb(239, 172, 50)" : "lightgrey"} onPress={() => {
             try{setStars(2)
              handleStars(2)
              } catch(error) {
                
              }
            }}/>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9}>
        <AntDesign name='star' size={30} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center"}} color={stars >=3 ? "rgb(239, 172, 50)" : "lightgrey"} onPress={() => {
           try{setStars(3)
            handleStars(3)
            } catch(error) {
              
            }
            }}/>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9}>
        <AntDesign name='star' size={30} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center"}} color={stars >=4 ? "rgb(239, 172, 50)" : "lightgrey"} onPress={() => {
            try{setStars(4)
              handleStars(4)
              } catch(error) {
                
              }
            }}/>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9}>
        <AntDesign name='star' size={30} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center"}} color={stars >=5 ? "rgb(239, 172, 50)" : "lightgrey"} onPress={() => {
            try{setStars(5)
            handleStars(5)
            } catch(error) {

            }
            }}/>
        </TouchableOpacity>
        </Box>

        <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgb(0,0,0)", marginHorizontal:"10%",}}>
        You have not made a review yet
        </Text>
        </Box>
        <TouchableOpacity
                activeOpacity={0.9} 
                onPress={() => {setModalVisible(!modalVisible)}}
                    style={{alignSelf: "center", backgroundColor:"rgb(239, 172, 50)", width:"90%", height:50, opacity:3 ,justifyContent:"center", marginVertical:"1.3%", borderRadius:30,}}>
                        <Text style={{alignSelf:"center", color:"#FFFFFF", fontWeight:"bold", fontFamily:"Plus Jakarta Sans", fontSize:14}}>LEAVE A REVIEW</Text>
        </TouchableOpacity>
        </>
          : 
          <>
          { booking.review >=1 ? 
          <Box style={{marginVertical:"3%"}}> 
            <ReviewComponent
            image={booking.image}
            name={booking.userName}
            review={booking.review}
            reviewDescription={booking.description}
            />
            
            </Box>
 : null}
          </>
        }
      </Box> 
      <Text style={{fontFamily:"Plus Jakarta Sans", marginVertical:15, fontSize:16, color:"rgb(239, 172, 50)", marginHorizontal:"1%",alignSelf:"center"}}>
            Thank you for staying at {booking.accomodationName}
        </Text>
        </>
        : null}
   </SafeAreaView>
   </>
  )
}


const styles = StyleSheet.create({
      centeredBox: {
        justifyContent: "center",
        alignItems: "center",
        width:"100%",
        height:"100%",
        
      },
      modalBox: {
        width:"100%",
        height:"100%",
        justifyContent:"center",
    
        flexDirection:"column",
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        alignItems: "center",
        shadowColor: "transparent",
       
        shadowOpacity: 0.25,
        elevation: 5
      },
      image:{
        
        borderRadius:300,
         height:"100%",
         width:"100%",
         justifyContent:"center",
         alignItems:"center"
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
      modalView:{
      width:"90%",
      height:322,
      margin: 20,
      flexDirection:"column",
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
    
    
    export default BookingDetails;