import React, { useState, useEffect } from 'react';
import { Text, Box, Image } from 'native-base';
import { ImageBackground, ScrollBox, SafeAreaView, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MasonryList from '@react-native-seoul/masonry-list';
import Magazine from '../../services/magazine';
import { useAuth } from '../../context/auth.context';

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

  const {user} = useAuth();
  const [magazines, setMagazines] = useState([]);
  const [isUser, setIsUser] = useState('');
  const [size, setSize] = useState(0);

  useEffect(() => {
      Magazine.getMagazine((magazin, size, isUser) => {
        setMagazines(magazin);
        setIsUser(isUser);
        setSize(size);
      // console.log(size, 'the size', isUser, 'the user')
      })
  },[]);

  return (
    <>
      <SafeAreaView  style={{ backgroundColor:"#F4FAFF", width:"100%", height:"100%" }}>
      <Box style={{height:180, backgroundColor:"#2B2B2B", borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
        <Box width="95%" backgroundColor='rgba(239, 172, 50, 0.05)' borderRadius={30} height={50} 
             justifyContent="space-between" alignContent="center" alignItems="center" flexDirection="row"
              style={{ marginVertical:"3%",marginHorizontal:"2%"}}>
            <TouchableOpacity activeOpacity={2} onPress={() => navigation.openDrawer('', {isScreen: true})}>
            <Feather name='menu' size={32} style={{alignSelf:"flex-start", color:"rgb(239, 172, 50)", marginHorizontal:"10%"}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Account')}>
            <Image alt='profile' source={{uri: user.imageUrl }} width={38} height={38} alignSelf="flex-end" borderRadius={38} style={{ marginHorizontal:"10%"}}/>
            </TouchableOpacity>        
        </Box>
         <Text fontFamily="Plus Jakarta Sans" fontSize={34} color="#FFFFFF" fontWeight="bold" width="80%" style={{ marginHorizontal:"5%", marginVertical:"-1%"}}>Magazines</Text>
         <Text fontFamily="Plus Jakarta Sans" fontSize={16} color="rgba(244, 250, 255, 0.6)" width="80%" style={{ marginHorizontal:"5%", marginVertical:"1%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>

        </Box>
{magazines?.length <= 0 ? <Box justifyContent={"center"} alignItems={"center"} alignSelf={"center"} marginTop={"4%"} height={400} width="90%" borderColor={"rgb(239, 172, 50)"} borderRadius={30} borderWidth={1}>
          <Text>
            No available Magazines!
          </Text>
    </Box> :
    <Box width={'100%'} height='100%'>
      <MasonryList
      horizontal={false}
          style={{ width:"100%", height:"100%"}}  
            data={magazines}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return(
          <>
          <TouchableOpacity activeOpacity={1}
            key={item.magazineId}
          onPress={() => {navigation.navigate('MagazineDetails', {item: item, size:size, isUser: isUser})}}
        style={{marginVertical:"2%", marginHorizontal:"4%"}}>
          <Box height={200} width="100%" backgroundColor="grey" borderRadius={20}>
                <Image source={{uri: item.imageCover
                 }}
                 alt={'magazines'}
                 width="100%" height={155} borderTopLeftRadius={20} borderTopRightRadius={20}
                />
                <Box width="100%" height={45} backgroundColor="#2B2B2B" borderBottomLeftRadius={20} borderBottomRightRadius={20} alignContent="center" justifyContent="center">
                  <Text width={'90%'} alignSelf="center" fontFamily="Plus Jakarta Sans" fontSize={16} fontWeight="700" color="#FFFFFF">{item.title}</Text>
                </Box>
          </Box>
        </TouchableOpacity>
          </>
        )
      }}
      keyExtractor={(item) => item.eventId}
    />
    </Box>
}
       
       </SafeAreaView>
    </>
  )
}