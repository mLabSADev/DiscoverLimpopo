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

  const [magazine, setMagazines] = useState(route.params.item);
  const [isLike, setLike] = useState('');
  const [magazineId, setMAgazineId] = useState(route.params.item.magazineId)
  const [likess, setLikess] = useState(route.params.item.like);
  const {user} = useAuth();
  

const onLikePress = () => {
    if(isLike === "") {
      setLike(magazineId)
      const newLike = likess + 1;
      setLikess(newLike);
      Magazines.onLikePress(magazineId, magazineId, newLike);
    } else {
      setLike("")
      const newLike = likess - 1;
      setLikess(newLike);
      Magazines.onLikePress("", magazineId, newLike);
    }
} 
  
  useEffect(() => {
    Magazines.getLikes(route.params.item.magazineId, like => {
        setLike(like);
        console.log({like})
      })
  }, []);


  return (
    <>
    <SafeAreaView >
   <ScrollView style={{ backgroundColor:"#FFFFFF", width:"100%", height:"100%" }} showsVerticalScrollIndicator={false}>
   <Box height={265} borderBottomLeftRadius={30} borderBottomRightRadius={30} width="100%">
       <Image alt='magazineCover' source={{uri: magazine.imageCover}} resizeMode="cover" width="100%" height="100%"  borderBottomLeftRadius={30} borderBottomRightRadius={30}/>   
   <Box width="95%" borderRadius={30} flexDirection="column" height="100%"
   justifyContent="space-between" alignContent="center" alignItems="center"
   style={{ marginVertical:"-65%",marginHorizontal:"2%",}}> 
   </Box>

   </Box>
{/*  */}
   
   <Box style={{width:"100%", height:100, flexDirection:"row"}}>
      <Box style={{flexDirection:"column", width:"75%", alignSelf:"flex-start", height:"100%"}}>
          <Text style={{fontFamily:"Plus Jakarta Sans", marginHorizontal:"4%", marginVertical:"4%", color:"rgb(0,0,0)", fontSize:12}}>{moment(magazine.timeStamp).format('DD MMMM, YYYY').toString()}</Text>
          <Text style={{fontFamily:"Plus Jakarta Sans", marginHorizontal:"4%", marginVertical:"-2%", color:"rgb(0,0,0)", fontSize:24, fontWeight:"bold"}}>{magazine.title}</Text>
      </Box>
      <Box style={{flexDirection:"column", width:"25%", alignSelf:"flex-end", height:"100%", alignItems:"center",}}>
        {  
           
            <TouchableOpacity
          activeOpacity={0.9} 
          onPress={() => onLikePress()}
          style={{ width:40, height:40, borderRadius:40, marginVertical:"10%", backgroundColor: magazine.magazineId === isLike ? 'rgb(239, 172, 50)' : '#F4FAFF', justifyContent:"center"}}>
                <AntDesign name='heart' size={20} color={ magazine.magazineId === isLike ? '#F4FAFF' : 'rgb(239, 172, 50)'} style={{alignSelf:"center"}}/>
          </TouchableOpacity>
          //  : 
          //  <TouchableOpacity
          //   activeOpacity={0.9} 
          //   onPress={onLikePress}
          //   style={{ width:40, height:40, borderRadius:40, marginVertical:"10%", backgroundColor:'rgb(239, 172, 50)', justifyContent:"center"}}>
          //         <AntDesign name='heart' size={20} color={'#F4FAFF'} style={{alignSelf:"center"}}/>
          //   </TouchableOpacity>
          }
          <Text fontFamily="Plus Jakarta Sans" color="grey" fontSize={16} alignSelf="center" style={{ marginVertical:"-3%", }}>{likess >= 1 ? (likess > 1 ? `${likess} likes` : `${likess} like`) : `` }</Text>
      </Box>
   </Box>
{/*  */}
<Box flexDirection="row" width="100%" height={50} justifyContent="flex-start">
    <Image alt='poster' source={{uri: magazine.posterDetails.image}} width={10} height={10} borderRadius={50} style={{ marginHorizontal:"2%",}}/>
    <Text fontFamily="Plus Jakarta Sans" color="rgba(42, 42, 42, 0.7)" fontSize={12} style={{ marginVertical:"3%"}}>{magazine.posterDetails.name}</Text>
</Box>
{/*  */}
    <Box with="100%" flexDirection="column">
    {magazine.magazineDetails.map((item, index) => {
      return(
        <>
        <Box key={item[index]}>
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