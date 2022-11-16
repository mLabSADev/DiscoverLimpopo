import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, Image, TextInput, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MasonryList from '@react-native-seoul/masonry-list';
import AccomodationComponent from '../../Components/restaurants/AccomodationComponent';
import { Box, Center } from 'native-base';
import Accomodations from '../../services/accomodation';

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
  }];

  
const Accomodation = ({navigation, route}) => {

    const [search, setSearch] = useState('');
    const [accomodation, setAccomodation] = useState([]);

    useEffect(() => {
    
      Accomodations.getAccomodation((accomodation, reviews) => {
        setAccomodation(accomodation);
  
      })
    
    }, []);
    
    return(
        <>
     <SafeAreaView  style={{ backgroundColor:"#F4FAFF", width:"100%", height:"100%" }}>
  <Box style={{height:170, backgroundColor:"#2B2B2B", borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
    <Center style={{width:"95%", backgroundColor:'rgba(239, 172, 50, 0.05)', borderRadius:30, flexDirection:"row", marginVertical:"3%", height:50,marginHorizontal:"2%", justifyContent:"space-between", alignContent:"center", alignItems:"center"}}>
        <TouchableOpacity activeOpacity={2} onPress={() => navigation.openDrawer('')}>
        <Feather name='menu' size={32} style={{alignSelf:"flex-start", color:"rgb(239, 172, 50)", marginHorizontal:"10%"}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Account')}>
        <Image source={require('../../assets/images/John-Doe.jpg')} style={{width:38, height:38, alignSelf:"flex-end", borderRadius:38, marginHorizontal:"10%"}}/>
        </TouchableOpacity>        
    </Center>
 
    <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:34, color:"#FFFFFF", fontWeight:"bold", marginHorizontal:"5%", marginVertical:"-1%", width:"80%"}}>Accommodation</Text>
    <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgba(244, 250, 255, 0.6)", marginHorizontal:"5%", marginVertical:"1%", width:"80%"}}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     </Text>
    </Box>
 
    <View style={{flexDirection:"row", marginVertical:"2%", justifyContent:"space-between", marginHorizontal:"2%",}}>
         <View style={{backgroundColor:"rgba(239, 172, 50, 0.05)", alignSelf:"center", width:"100%", borderRadius: 30, height:50, flexDirection:"row"}}>
                 <View style={{backgroundColor:"rgba(120, 120, 120, 0.1)", alignSelf:"center", width:"90%", borderRadius: 30, height:50, flexDirection:"row"}}>
                 <View style={{backgroundColor:"rgba(120, 120, 120, 0.1)", alignSelf:"center", width:"85%", borderRadius: 30, height:50, flexDirection:"row", justifyContent:"center"}}>
                 <TextInput placeholder='Search' style={{alignSelf:"flex-start", width:"95%", }} 
                 onChangeText={(search) => setSearch(search)}
                 value={search}
                 textContentType="search"
                 /> 
                 </View>
                 <Ionicons name='ios-search-outline' size={20} style={{alignSelf:"flex-start", color:"rgb(34, 149, 59)", alignSelf:"center", marginHorizontal:"4%"}} />
                 </View>
                 <Ionicons name='filter' size={20} style={{alignSelf:"flex-start", color:"rgb(239, 172, 50)",marginHorizontal:"2%",alignSelf:"center" }} />
                 </View>
    </View>
 <ScrollView showsVerticalScrollIndicator={false}>
 {accomodation?.length <= 0 ? <Box justifyContent={"center"} alignItems={"center"} alignSelf={"center"} marginTop={"4%"} height={300} width="90%" borderColor={"rgb(239, 172, 50)"} borderRadius={30} borderWidth={1}>
          <Text>
            No available Accomodation
          </Text>
    </Box> :
        <Box width='100%' height={300}>
        <MasonryList
            horizontal
            data={accomodation}
            style={{ width:"100%", height:"100%", alignSelf:"center"}}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            legacyImplementation={false}
            // keyExtractor={(item) => item.id}
            renderItem={({item}) =>(
              <TouchableOpacity
              activeOpacity={0.9} 
              onPress={() => {navigation.navigate('AccomodationDetails', {item: item})}}
              style={{width:310, height:300}}
              key={item.accomodationId}>  
              <AccomodationComponent
              name={item.name}
              amenities={item.amenities}
              description={item.description}
              image={item.accomodationImage}
              loggoImage={item.accomodationLoggo}
              />
            </TouchableOpacity>
            )
          }
          />
           
            </Box>
}
 </ScrollView>
     </SafeAreaView>
     </>
    )
}

export default  Accomodation;