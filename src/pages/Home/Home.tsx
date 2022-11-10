import React from 'react';
import { Box, Text, ScrollView, Image, FlatList} from 'native-base';
import {SafeAreaView, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import RestaurantsComponent from '../../Components/restaurants/RestaurantsComponent';
import MasonryList from '@react-native-seoul/masonry-list';
import Carousel from 'react-native-snap-carousel';
import AccomodationComponent from '../../Components/restaurants/AccomodationComponent';


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


const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const Home = ({navigation, route}: any) => {
  
  return (
    <SafeAreaView style={{ backgroundColor:"#F4FAFF", width:"100%", height:"100%" }}>
    <ScrollView width={'100%'} height={"100%"} scrollEnabled={true} showsVerticalScrollIndicator={false}>
        <Box>
       <ImageBackground style={{width:"100%", height:125}} source={require("../../assets/images/advert.jpg")}>
        <Box style={{marginVertical:"2%", flexDirection:"column", marginHorizontal:"3%", height:"90%"}}>
                <Box style={{ borderWidth:1, borderColor:"rgb(239, 172, 50)", borderRadius:30, width:110, height:30 ,justifyContent:"center"}}>
                    <Text style={{fontFamily:"Plus Jakarta Sans", color:"#FFFFFF", alignSelf:"center", }}>advertisement</Text>
                </Box>
                <Box style={{width: "100%", flexDirection:"row", justifyContent:"center", height:"55%" }}>
                    <Text style={{fontFamily:"Plus Jakarta Sans", width:"80%", fontSize:24, fontWeight:"bold", color:"#FFFFFF"}}>PEERMONT GIN & NOMALI GIN LAUNCH</Text>
                    <Text style={{fontFamily:"Plus Jakarta Sans", color:"rgb(239, 172, 50)", width:"20%", alignSelf:"center", fontWeight:"bold"}}>VIEW</Text>
                </Box>
                <Text  style={{fontFamily:"Plus Jakarta Sans", color:"#FFFFFF"}}>DISCOVER LIMPOPO</Text>
        </Box>
       </ImageBackground>
       </Box>
        <Box style={{width:"95%", backgroundColor:'rgba(239, 172, 50, 0.05)', borderRadius:30, flexDirection:"row", marginVertical:"3%", height:50,marginHorizontal:"2%", justifyContent:"space-between", alignContent:"center", alignItems:"center"}}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Feather name='menu' size={32} style={{alignSelf:"flex-start", color:"rgb(239, 172, 50)", marginHorizontal:"10%"}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SpecialPackages')}>
            <Image source={require('../../assets/images/John-Doe.jpg')} alt={'profile'} style={{width:38, height:38, alignSelf:"flex-end", borderRadius:38, marginHorizontal:"10%"}}/>
            </TouchableOpacity>        
        </Box>
        {/* Accomodation */}
        <Box style={{width:"100%", flex:1}}>
        <Text style={{fontFamily:"Plus Jakarta Sans", fontWeight:"bold", fontSize:20, color:"rgb(0,0,0)", marginHorizontal:"3%"}}>Accomodation</Text>
  
        <Box style={{flexDirection:"row"}} width='100%' height={230}>
          {/* <FlatList
       
          horizontal
          data={data}
          renderItem={({item, index}) => {return(
            <TouchableOpacity activeOpacity={1}
            key={item.id}
        onPress={() => {navigation.navigate('AccomodationDetails', {item: item})}}
        style={{marginVertical:"2%", marginHorizontal:"1%"}}>
        <AccomodationComponent navigation={navigation} route={route}/>
        </TouchableOpacity>
          )}}
          /> */}
          
        {data.map((item, index) => {
          return(
            <TouchableOpacity activeOpacity={1}
            key={item.id}
        onPress={() => {navigation.navigate('AccomodationDetails', {item: item})}}
        style={{marginVertical:"2%", marginHorizontal:"1%"}}>
        <AccomodationComponent navigation={navigation} route={route}/>
        </TouchableOpacity>
              )
            })
            }
           
            </Box>
          <TouchableOpacity  onPress={() => {navigation.navigate('Accomodation')}}>
         <Text style={{fontFamily:"Plus Jakarta Sans", alignSelf:"center", color:"rgb(239, 172, 50)", fontWeight:"bold"}}> VIEW MORE</Text>
         </TouchableOpacity>
        </Box>
        {/* Restaurants */}
        <Box style={{width:"100%"}}>
        <Text style={{fontFamily:"Plus Jakarta Sans", fontWeight:"bold", fontSize:20, color:"rgb(0,0,0)", marginHorizontal:"3%"}}>Restaurant</Text>
        <Box style={{marginVertical:"2%"}}>
        <MasonryList
          style={{ width:"100%", height:"100%"}}
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
            data={data}
            keyExtractor={(item: { id: any; }) => item.id}
            numColumns={1}
            showsVerticalScrollIndicator={false}
            renderItem={(item: {item: any}) => {
              return(
          <>
          <TouchableOpacity activeOpacity={1}
          onPress={() => {navigation.navigate('RestaurantDetails', {item: item})}}
        style={{marginVertical:"2%",}}>
                  <RestaurantsComponent navigation={navigation} route={route}/>
        </TouchableOpacity>
          </>
        )
      }}
      // refreshing={isLoadingNext}
      // onRefresh={() => refetch({first: ITEM_CNT})}
      // onEndReachedThreshold={0.1}
      // onEndReached={() => loadNext(ITEM_CNT)}
      
    />
    <TouchableOpacity onPress={() => {navigation.navigate('Restaurants')}}>
    <Text style={{alignSelf:"center", color:"rgb(239, 172, 50)", fontWeight:"bold", marginVertical:"2%"}}>VIEW MORE</Text>
    </TouchableOpacity>
        </Box>
        </Box>

        {/* Magazines */}
        <Box style={{marginVertical:"4%"}}>
        
          <Box
          style={{ width:"95%", height: 290, backgroundColor:"rgba(42, 42, 42, 0.95)", alignSelf:"center", borderRadius:30}}>
         {/* <Carousel
         loop={false}
         style={{flex:0.9, marginVertical:"-5%",}}
                // loop
                
                // autoPlay={true}
                data={data}
                // scrollAnimationDuration={1000}
                // onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({item}) => { return (
                    <>
                        <TouchableOpacity activeOpacity={1}
              onPress={() => {navigation.navigate('MagazineDetails', {item: item})}}
            style={{marginVertical:"2%", marginHorizontal:"4%",}}>
             <Image source={require("../../assets/images/Accomodation.jpg")} alt={'accomodation'} style={{width:"60%" ,height:"100%", borderRadius:20, alignSelf:"center"}}/>
            </TouchableOpacity>
                    </>
                )}}
            /> */}
             <TouchableOpacity activeOpacity={1}
              onPress={() => {navigation.navigate('MagazineDetails')}}
            style={{marginVertical:"-7%", marginHorizontal:"4%",}}>
             <Image source={require("../../assets/images/Accomodation.jpg")} alt={'accomodation'} style={{width:"60%" ,height:200, borderRadius:20, alignSelf:"center"}}/>
            </TouchableOpacity>
          <Text style={{fontFamily:"Plus Jakarta Sans", color:"#FFFFFF", fontSize:24, fontWeight:"bold", marginHorizontal:"5%", marginVertical:"10%" }}>Our magazines are curated for travelling in mind</Text>
          <TouchableOpacity
                activeOpacity={0.9} 
                onPress={() => {navigation.navigate('Magazine')}}
                    style={{alignSelf: "center", borderColor:"rgb(239, 172, 50)", borderWidth:1 , width:"90%", height:50, marginVertical:"-9%" ,justifyContent:"center", borderRadius:30,}}>
                        <Text alignSelf="center" color="rgb(239, 172, 50)" fontWeight="bold" fontStyle="inter" fontSize={14}>VIEW ALL</Text>
                </TouchableOpacity>

          </Box>
        </Box>
        <Box style={{height:5}}></Box>
       </ScrollView>
    </SafeAreaView>
    )
}

export default Home;
