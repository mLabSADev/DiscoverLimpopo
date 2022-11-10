import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Linking,
} from 'react-native';
import {Box, Image, Text} from 'native-base';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';
import {DrawerActions, useIsFocused} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useAuth } from '../../context/auth.context';

const CustomSidebarMenu = (props) => {


  const { user } = useAuth();
  // console.log(user);
  const BASE_PATH ='https://raw.githubusercontent.com/AboutReact/sampleresource/master/';


  return (
    <SafeAreaView style={{flex:1}}>
      {/*Top Large Image */}
      
      <Image alt='profile'
      resizeMode="contain"
        source={{uri: user.imageUrl}}
        style={styles.sideMenuProfileIcon}
      />
      <Text fontFamily="Plus Jakarta Sans" fontWeight="bold" color="rgb(0, 0, 0)"  fontSize={20} style={{alignSelf:"center"}}>{user.userName}</Text>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        
      </DrawerContentScrollView>
      <Box style={{flex:0.4}}>
      <LinearGradient 
       start={{x: 0.25, y: 2.5}} end={{x: 1.8, y: 1.0}}
       locations={[0.0,0.3,0.7]}
      colors={['skyblue','rgba(239, 172, 50, 0.05)','#F0BF62']} style={{ width:"90%", height:"90%", alignSelf:"center", borderRadius:20, borderWidth:1, borderColor:"rgb(239, 172, 50)"}} >
                <Box style={{flexDirection:"column", marginHorizontal:"9%", marginVertical:"8%"}}>
                        <Box style={{flexDirection:"row"}}>
                            <Icon name='announcement' size={18} color={'rgb(0, 0, 0)'} />
                            <Text fontFamily="Plus Jakarta Sans" fontSize={20} fontWeight="bold" color="rgb(0,0,0)"  style={{ marginVertical:"-3%", marginHorizontal:"3%"}}>Announcement</Text>
                        </Box>
                        <Box style={{width:"85%"}}>
                            <Text fontFamily="Plus Jakarta Sans" fontSize={14} color="rgb(0,0,0)">
                            Don't forget to complete your profile to make your bookings easier.
                            </Text>
                        </Box>
                </Box>
        </LinearGradient>
      </Box>

    </SafeAreaView>
  );
};

 

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 175,
    height: 175,
    borderRadius: 98,
    alignSelf: 'center',
    marginVertical:"2%",
    
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    textAlign:"center", 
    alignSelf:"center", 
    backgroundColor:"white",
    width:"90%"
},

});

export default CustomSidebarMenu;