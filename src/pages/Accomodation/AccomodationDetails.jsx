import React, { useState, useEffect } from 'react';
import { TouchableOpacity, SafeAreaView, Modal, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import ReviewComponent from '../../Components/ReviewComponent';
import MasonryList from '@react-native-seoul/masonry-list';
import { Box, Image, Text, ScrollView, FlatList } from 'native-base';
import { useAuth } from '../../context/auth.context';
import Accomodations from '../../services/accomodation';
import Amenities from '../../Components/accomodation/Amenities';
import Amenities2 from '../../Components/accomodation/Amenities2';

const profile = 'https://media.istockphoto.com/id/1364105164/photo/hologram-human-head-deep-learning-and-artificial-intelligence-abstract-background.jpg?b=1&s=170667a&w=0&k=20&c=i9-oulHCR0LCxqzqUW2Q7bKt3RrdbCZU0OXqXV2gw-o=';

const AccomodationDetails = ({navigation, route})  => {

  const {user} = useAuth();
const [accomodation, setAccomodation] = useState(route.params.item);
const [images, setImages] = useState(accomodation.images[0]);
const [reviews, setReviews] = useState([]);
const [rating, setRating] = useState(0);
const [modalVisible, setModalVisible] = useState(false);

const { restuarantId } = route.params;

const paymentData = {
      merchant_id: 10027888,
      merchant_key: 'm24urqvjpy2gb',
      amount: 60.00,
      item_name: 'Booking'
  };
  

useEffect(() => {
     Accomodations.getReview(accomodation?.accomodationId,((review, rating )=> {
        setReviews(review)
        setRating(rating)
    }))
    
}, []);


  return (
    
    <>
     <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            // Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
          style={styles.centeredBox}
        >
         
            <Box flex={3}></Box>
          <Box style={styles.modalView}>
              <Box style={{width:"80%", height:30, borderColor: 'rgb(239, 172, 50)', borderWidth:1, }}>
                <SafeAreaView>
                {/* <PayFastWebView title={'Pay Now'} data={paymentData} />                */}
                 </SafeAreaView>
              </Box>
            </Box>

      </Modal>
    <SafeAreaView >
   <ScrollView style={{ backgroundColor:"#FFFFFF", width:"100%", height:"100%" }} showsVerticalScrollIndicator={false}>
   <Box style={{ height:390, backgroundColor:"grey", borderBottomLeftRadius:30, borderBottomRightRadius:30, width:"100%"}}>
       <Image alt="accomodation" source={{uri: accomodation.accomodationImage}} resizeMode="cover" style={{width:"100%", height:"100%",  borderBottomLeftRadius:30, borderBottomRightRadius:30}}/>   
   <Box style={{width:"95%", borderRadius:30, flexDirection:"column", marginVertical:"-95%", height:"100%",marginHorizontal:"2%", justifyContent:"space-between", alignContent:"center", alignItems:"center"}}>
  <Box style={{width:"100%", borderRadius:30, flexDirection:"row", marginVertical:"5%",justifyContent:"space-between", alignContent:"center", alignItems:"center"}}>
  <Box>
          <TouchableOpacity activeOpacity={2} onPress={() => navigation.navigate('Home')} style={{backgroundColor:"rgb(239, 172, 50)", borderRadius:30, height:50, width:50, alignSelf:"center", justifyContent:"center"}}>
          <MaterialIcons name='keyboard-arrow-left' size={32} style={{alignSelf:"center",alignContent:"center" ,color:"#FFFFFF", marginHorizontal:"10%"}} />
          </TouchableOpacity>
  </Box>
  <Box style={{alignSelf:"flex-end"}}>
    <TouchableOpacity onPress={() => navigation.navigate('Account')}>
       <Image alt='profile' source={{uri:user?.imageUrl ? user?.imageUrl : profile}} style={{width:38, height:38, alignSelf:"flex-end", borderRadius:38, marginHorizontal:"10%"}}/>
       </TouchableOpacity>
  </Box>  
    </Box>  
     
    <Box style={{width:"42%", borderRadius:30,flexDirection:"row", marginVertical:"65%", height:40, backgroundColor:"#FFFFFF", alignSelf:"flex-end", justifyContent:"center", alignItems:"center", }}>
      <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:20, color:"rgb(0,0,0)", fontWeight:"bold" }}>
      R {accomodation.startingPrice}.00 pppn
      </Text>
   </Box>
   </Box>
   
   </Box>
   {/* Accomodation Details */}
   <Box style={{backgroundColor:"#F4FAFF"}}>
   <Box style={{width:"100%", marginHorizontal:"4%", marginVertical:"5%" }}>
       <Text fontFamily="Plus Jakarta Sans" fontSize={34} color="rgb(0,0,0)" fontWeight="bold">{accomodation.name}</Text>
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
               <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", width:"80%", marginHorizontal:"2%"}}>{accomodation.location}</Text>
       </Box>
       <Box style={{flexDirection:"row", marginVertical:"2%"}}>
               <MaterialIcons name='location-on' size={16}  style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"rgb(0,0,0)"}}/>
               <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", width:"80%", marginHorizontal:"2%"}}>{accomodation.phoneNumber}</Text>
       </Box>
       <Box style={{flexDirection:"column"}}>
       <Box style={{flexDirection:"row"}}>
               <MaterialIcons name='access-time' size={16}  style={{fontWeight:"500", justifyContent:"flex-start", alignSelf:"flex-start", color:"rgb(0,0,0)"}}/>
               <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", marginHorizontal:"2%"}}>Check in--{accomodation.checkIn}</Text>
               </Box>
                <Box style={{flexDirection:"row", marginHorizontal:"4%"}}>
               <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", marginHorizontal:"2%"}}>Check out--{accomodation.checkOut}</Text>
               </Box>
       </Box>
   </Box>

   <TouchableOpacity
                   activeOpacity={0.9} 
                   onPress={() => {setModalVisible(!modalVisible)}}
                       style={{alignSelf: "center", backgroundColor:"rgb(239, 172, 50)", width:"90%", height:50, opacity:3 ,justifyContent:"center", borderRadius:30,}}>
                           <Text style={{alignSelf:"center", color:"#FFFFFF", fontWeight:"bold", fontFamily:"Plus Jakarta Sans", fontSize:14}}>CHECK IN</Text>
   </TouchableOpacity>
   <Box style={{height:15}}></Box>
   </Box>
   {/*  */}
   <Box style={{ marginHorizontal:"4%", marginVertical:"2%"}}>
   <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:20, color:"rgb(0,0,0)", fontWeight:"bold"}}>Accommodation Details</Text>
   <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:14, color:"rgb(0,0,0)", marginVertical:"2%", width:"90%" }}>
    {accomodation.description}
       </Text>
   </Box>
   <Box style={{ marginHorizontal:"4%", marginVertical:"5%", width:"100%"}}>
   <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:20, color:"rgb(0,0,0)", fontWeight:"700"}}>Amenities</Text>
  
    {/* <Box style={{marginVertical:"-5%" ,flexDirection:"row", width:"80%", justifyContent:"space-around"}}>
      <Amenities/>       
    </Box> */}
    </Box>
    <Box style={{marginVertical:"-2%" ,flexDirection:"row", width:"100%", justifyContent:"space-around"}}>
      <Amenities line={1}/>
    </Box>
    <Box style={{marginVertical:"2%" ,flexDirection:"row", width:"100%", justifyContent:"space-around"}}>
      <Amenities2 
       line={2}/>
    </Box>
    <Image alt='resto1' source={{uri: images}} style={{width:"100%", height:438}}/>
    <Box style={{width:"84%", alignSelf:"center", marginVertical:"2%", marginHorizontal:"5%"}}>
<FlatList
            horizontal
            data={accomodation.images}
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
   <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:24, color:"rgb(0,0,0)", fontWeight:"bold"}}>Reviews</Text>
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


   <Box style={{marginVertical:"5%"}}>
     <TouchableOpacity
           activeOpacity={0.9} 
               onPress={() => {}}>
       <Text style={{alignSelf:"center", fontSize:14,fontFamily:"Plus Jakarta Sans",  fontWeight:"700", color:'rgb(239, 172, 50)'}}>LOAD MORE</Text>                
       </TouchableOpacity>
   </Box>
    </ScrollView></SafeAreaView></>
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


export default AccomodationDetails;