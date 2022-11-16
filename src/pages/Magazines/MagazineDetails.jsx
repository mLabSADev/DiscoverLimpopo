import React, { useState, useEffect } from 'react';
import { Text, Box, Image } from 'native-base';
import { TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import ReviewComponent from '../../Components/ReviewComponent';
import { useAuth } from '../../context/auth.context';
import moment from 'moment';
import Magazines from '../../services/magazine';
import  Toast  from 'react-native-toast-message';

export default function MagazineDetails({navigation, route}) {

  //  const {isUser, size} = route.params; 
  const [magazine, setMagazines] = useState(route.params.item);
  const [isUser, setIsUser] = useState();
  const [size, setSize] = useState(route.params.size);
  const [magazineId, setMAgazineId] = useState(`${route.params.item.magazineId}` || '')
      //  console.log(route.params.size, 'the size', 'the user')
  const {user} = useAuth();
  

  const onLikePress = () => {
    Magazines.onLikePress(magazineId, user?.name, user?.uid).then(() => {
      // Toast.show({type:'success'})
      // console.log('like')
        setIsUser(user?.uid);
        const newSize = size + 1;
        setSize(newSize)
    })
  } 
  
  const onDisLikePress = () => {
    Magazines.onDislikePress(magazineId, user?.uid).then(() => {
      // Toast.show({type:'error'})
      // console.log('dislike')
      setIsUser('')
      const newSize = size - 1;
        setSize(newSize)
      console.log('user set to empty string')
    })
  }
     
  useEffect(() => {
     const mag = () => {
    Magazines.getLikes((isUser, size) => {
      // console.log(isUser, );
        setIsUser(isUser);
        setSize(size);
      })
    }
    return () => {mag()}
  }, [isUser]);


  return (
    <>
    <SafeAreaView >
   <ScrollView style={{ backgroundColor:"#FFFFFF", width:"100%", height:"100%" }} showsVerticalScrollIndicator={false}>
   <Box height={265} borderBottomLeftRadius={30} borderBottomRightRadius={30} width="100%">
       <Image alt='magazineCover' source={{uri: magazine.imageCover}} resizeMode="cover" width="100%" height="100%"  borderBottomLeftRadius={30} borderBottomRightRadius={30}/>   
   <Box width="95%" borderRadius={30} flexDirection="column" height="100%"
   justifyContent="space-between" alignContent="center" alignItems="center"
   style={{ marginVertical:"-65%",marginHorizontal:"2%",}}>
  <Box width="100%" borderRadius={30} flexDirection="row" 
     justifyContent="space-between" alignContent="center" alignItems="center"
  style={{ marginVertical:"5%"}}>
  <Box>
          <TouchableOpacity activeOpacity={2} onPress={() => navigation.goBack()} style={{backgroundColor:"rgb(239, 172, 50)", borderRadius:30, height:50, width:50, alignSelf:"center", justifyContent:"center"}}>
          <MaterialIcons name='keyboard-arrow-left' size={32} style={{alignSelf:"center",alignContent:"center" ,color:"#FFFFFF", marginHorizontal:"10%"}} />
          </TouchableOpacity>
  </Box>
  <Box style={{alignSelf:"flex-end"}}>
    <TouchableOpacity onPress={() => navigation.navigate('Account')}>
       <Image alt='user' source={{uri: user.imageUrl}} style={{width:38, height:38, alignSelf:"flex-end", borderRadius:38, marginHorizontal:"10%"}}/>
       </TouchableOpacity>
  </Box>  
    </Box>  
   </Box>
   
   </Box>
{/*  */}
   
   <Box style={{width:"100%", height:100, flexDirection:"row"}}>
      <Box style={{flexDirection:"column", width:"75%", alignSelf:"flex-start", height:"100%"}}>
          <Text style={{fontFamily:"Plus Jakarta Sans", marginHorizontal:"4%", marginVertical:"4%", color:"rgb(0,0,0)", fontSize:12}}>{moment(magazine.timeStamp).format('DD MMMM, YYYY').toString()}</Text>
          <Text style={{fontFamily:"Plus Jakarta Sans", marginHorizontal:"4%", marginVertical:"-2%", color:"rgb(0,0,0)", fontSize:24, fontWeight:"bold"}}>{magazine.title}</Text>
      </Box>
      <Box style={{flexDirection:"column", width:"25%", alignSelf:"flex-end", height:"100%", alignItems:"center",}}>
        { isUser  === magazine.magazineId ? 
           
            <TouchableOpacity
          activeOpacity={0.9} 
          onPress={onLikePress}
          style={{ width:40, height:40, borderRadius:40, marginVertical:"10%", backgroundColor:'#F4FAFF', justifyContent:"center"}}>
                <AntDesign name='heart' size={20} color={'rgb(239, 172, 50)'} style={{alignSelf:"center"}}/>
          </TouchableOpacity>
           : 
           <TouchableOpacity
            activeOpacity={0.9} 
            onPress={onDisLikePress}
            style={{ width:40, height:40, borderRadius:40, marginVertical:"10%", backgroundColor:'rgb(239, 172, 50)', justifyContent:"center"}}>
                  <AntDesign name='heart' size={20} color={'#F4FAFF'} style={{alignSelf:"center"}}/>
            </TouchableOpacity>
          }
          <Text fontFamily="Plus Jakarta Sans" color="grey" fontSize={16} alignSelf="center" style={{ marginVertical:"-3%", }}>{size >= 1 ? (size > 1 ? `${size} likes` : `${size} like`) : `` }</Text>
      </Box>
   </Box>
{/*  */}
<Box flexDirection="row" width="100%" height={50} justifyContent="flex-start">
    <Image alt='poster' source={{uri: magazine.posterDetails.image}} width={10} height={10} borderRadius={50} style={{ marginHorizontal:"2%",}}/>
    <Text fontFamily="Plus Jakarta Sans" color="rgba(42, 42, 42, 0.7)" fontSize={12} style={{ marginVertical:"3%"}}>{magazine.posterDetails.name}</Text>
</Box>
{/*  */}
    <Box with="100%" flexDirection="column">
    {magazine.magazineDetails.map((item) => {
      return(
        <>
        <Box key={item.id}>
    <Text fontFamily="Plus Jakarta Sans" color="rgb(0,0,0)" fontSize={20} fontWeight="bold" style={{ marginHorizontal:"2%", marginVertical:"2%"}}>{item.title}</Text>
    <Text fontFamily="Plus Jakarta Sans" color="rgb(0,0,0)" fontSize={14} style={{ marginHorizontal:"2%", marginVertical:"2%"}}>
    {item.paragraph}
    </Text>
    <Image alt='magazine detail' source={{uri: item.image}} width="100%" height={250}/>
    </Box>
  </>
    )
  })
  }
    </Box>
      </ScrollView>
   </SafeAreaView>
   </>
  )
}