import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

export default function Profile({navigation}) {
  return (
    <>
        <View style={{flex:1, backgroundColor:"#2B2B2B", borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
        <View style={{width:"95%", backgroundColor:'rgba(239, 172, 50, 0.05)', borderRadius:30, flexDirection:"row", marginVertical:"3%", height:50,marginHorizontal:"2%", justifyContent:"space-between", alignContent:"center", alignItems:"center"}}>
            <TouchableOpacity onPress={() => navigation.openDrawer('', {isScreen: true})}>
            <Image source={require('../../assets/images/Menu-Rounded.png')} style={{width:38, height:38, alignSelf:"flex-start", backgroundColor:"rgba(239, 172, 50, 0.05)", marginHorizontal:"10%"}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Account')}>
            <Image source={require('../../assets/images/John-Doe.jpg')} style={{width:38, height:38, alignSelf:"flex-end", borderRadius:38, marginHorizontal:"10%"}}/>
            </TouchableOpacity>        
        </View>
         <Text style={{fontSize:34, color:"#FFFFFF", fontWeight:"bold", marginHorizontal:"5%", marginVertical:"1%", width:"80%"}}>Profile Details</Text>
        </View>
        <View style={{flex:4, flexDirection:"column"}}>
            <View style={{flexDirection:"row", width:"90%", marginVertical:"5%", marginHorizontal:"4%"}}>
              <Image source={require("../../assets/images/John-Doe.jpg")} style={{borderRadius:90, height:90, width:90}}/>
              <View style={{marginHorizontal:"3%", marginVertical:"7%"}}>
                <Text style={{fontSize:14, color:"grey", fontWeight:"bold",}}>Display Name</Text>
                <Text style={{fontSize:18, color:"rgb(0,0,0)", fontWeight:"bold", marginVertical:"1%"}}>Gift Doe</Text>
              </View>
            </View>
            <View style={{marginHorizontal:"4%", marginVertical:"-3%"}}>
                <Text style={{fontSize:14, color:"grey", fontWeight:"bold",}}>Name</Text>
                <Text style={{fontSize:18, color:"rgb(0,0,0)", fontWeight:"bold", marginVertical:"1%"}}>Gift</Text>
              </View>
              <View style={{marginHorizontal:"4%", marginVertical:"3%"}}>
                <Text style={{fontSize:14, color:"grey", fontWeight:"bold",}}>Email Address</Text>
                <Text style={{fontSize:18, color:"rgb(0,0,0)", fontWeight:"bold", marginVertical:"1%"}}>Gift</Text>
              </View>
              <View style={{marginHorizontal:"4%", marginVertical:"2%"}}>
                <Text style={{fontSize:14, color:"grey", fontWeight:"bold",}}>Name</Text>
                <Text style={{fontSize:18, color:"rgb(0,0,0)", fontWeight:"bold", marginVertical:"1%"}}>Gift</Text>
              </View>
              <View style={{marginHorizontal:"4%", marginVertical:"0%"}}>
                <Text style={{fontSize:14, color:"grey", fontWeight:"bold",}}>Name</Text>
                <Text style={{fontSize:18, color:"rgb(0,0,0)", fontWeight:"bold", marginVertical:"1%"}}>Gift</Text>
              </View>
        </View>
        </>
  )
}