import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';
import {DrawerActions, useIsFocused} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomSidebarMenu = (props) => {
    
//{console.log(props.state.routeNames, 'these are the properties you can use')}
//{console.log(props, 'this is the current param that has ben sent back')}
  const BASE_PATH ='https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  const profileImage = 'react_logo.png';

/**
 * 

import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name="rocket" size={30} color="#900" />;
 * 
 * 
 * */   
  return (
    <SafeAreaView style={{flex:1}}>
      {/*Top Large Image */}
      
      <Image
        source={require('../../../assets/images/John-Doe.jpg')}
        style={styles.sideMenuProfileIcon}
      />
      <Text style={{alignSelf:"center", fontWeight:"bold", color:"rgb(0, 0, 0)"}}>John Doe</Text>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        
      </DrawerContentScrollView>
      <View style={{flex:0.4}}>
      <LinearGradient 
       start={{x: 0.25, y: 2.5}} end={{x: 1.8, y: 1.0}}
       locations={[0.0,0.3,0.7]}
      colors={['skyblue','rgba(239, 172, 50, 0.05)','#F0BF62']} style={{ width:"90%", height:"90%", alignSelf:"center", borderRadius:20, borderWidth:1, borderColor:"rgb(239, 172, 50)"}} >
                <View style={{flexDirection:"column", marginHorizontal:"9%", marginVertical:"8%"}}>
                        <View style={{flexDirection:"row"}}>
                            <Icon name='announcement' size={22} color={'rgb(0, 0, 0)'} />
                            <Text style={{ fontSize:20, fontWeight:"bold", color:"rgb(0,0,0)", marginVertical:"-2%", marginHorizontal:"3%"}}>Announcement</Text>
                        </View>
                        <View style={{width:"85%"}}>
                            <Text style={{color:"rgb(0,0,0)",}}>
                            Don't forget to complete your profile to make your bookings easier.
                            </Text>
                        </View>
                </View>
        </LinearGradient>
      </View>

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