import React from 'react';
import {View, Text, ImageBackground, ScrollView, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MasonryList from '@react-native-seoul/masonry-list';


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



export default function Magazines({navigation, routes}) {
    
  return (
    <>
      <SafeAreaView  style={{ backgroundColor:"#F4FAFF", width:"100%", height:"100%" }}>
      <View style={{height:180, backgroundColor:"#2B2B2B", borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
        <View style={{width:"95%", backgroundColor:'rgba(239, 172, 50, 0.05)', borderRadius:30, flexDirection:"row", marginVertical:"3%", height:50,marginHorizontal:"2%", justifyContent:"space-between", alignContent:"center", alignItems:"center"}}>
            <TouchableOpacity activeOpacity={2} onPress={() => navigation.openDrawer('', {isScreen: true})}>
            <Feather name='menu' size={32} style={{alignSelf:"flex-start", color:"rgb(239, 172, 50)", marginHorizontal:"10%"}} />
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Account')}>
            <Image source={require('../../assets/images/John-Doe.jpg')} style={{width:38, height:38, alignSelf:"flex-end", borderRadius:38, marginHorizontal:"10%"}}/>
            </TouchableOpacity>         */}
        </View>
         <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:34, color:"#FFFFFF", fontWeight:"bold", marginHorizontal:"5%", marginVertical:"-1%", width:"80%"}}>Magazines</Text>
         <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgba(244, 250, 255, 0.6)", marginHorizontal:"5%", marginVertical:"2%", width:"80%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>

        </View>
    <MasonryList
    style={{ width:"100%", height:"100%"}}
    scrollEnabled={true}
    showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={(item) => item.id}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => {
        return(
          <TouchableOpacity activeOpacity={1}
          onPress={() => {navigation.navigate('MagazineDetails', {item: item})}}
        style={{marginVertical:"2%", marginHorizontal:"4%"}}>
          <View style={{ height:200, width:"100%", backgroundColor:"grey", borderRadius:20}}>
                <Image source={ item.image} 
                 style={{width:"100%", height:155, borderTopLeftRadius:20, borderTopRightRadius:20}}
                />
                <View style={{width:"100%", height:45, backgroundColor:"#2B2B2B", borderBottomLeftRadius:20, borderBottomRightRadius:20, alignContent:"center", justifyContent:"center"}}>
                  <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:16, fontWeight:"700", color:"#FFFFFF", marginHorizontal:"10%"}}>{item.title}</Text>
                </View>
          </View>
        </TouchableOpacity>
        )
      }}
      // refreshing={isLoadingNext}
      // onRefresh={() => refetch({first: ITEM_CNT})}
      // onEndReachedThreshold={0.1}
      // onEndReached={() => loadNext(ITEM_CNT)}
      
    />
       
       </SafeAreaView>
    </>
  )
}