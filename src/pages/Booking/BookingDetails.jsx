import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function BookingDetails({navigation, routes}) {
  return (

    <>
    <SafeAreaView  style={{ backgroundColor:"#F4FAFF", width:"100%", height:"100%" }}>
   <View style={{width:"95%", backgroundColor:'rgba(239, 172, 50, 0.05)', borderRadius:30, flexDirection:"row", marginVertical:"3%", height:80,marginHorizontal:"2%", alignContent:"center", alignItems:"center"}}>
      <View>
       <TouchableOpacity activeOpacity={2} onPress={() => navigation.navigate('Booking')} style={{backgroundColor:"rgb(239, 172, 50)", borderRadius:30, height:50, width:50, alignSelf:"center", justifyContent:"center"}}>
       <MaterialIcons name='keyboard-arrow-left' size={32} style={{alignSelf:"center",alignContent:"center" ,color:"#FFFFFF", marginHorizontal:"10%"}} />
       </TouchableOpacity>
    </View>
       <View style={{marginHorizontal:"5%"}}>
       <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:24, color:"rgb(0,0,0)", fontWeight:"700",}}>Hotel Monica</Text>
        <Text>Booking Info</Text>
       </View>
   </View>

   <View style={{flexDirection:"row", width:"100%", marginVertical:"5%"}}>
   <MaterialIcons name='access-time' size={18} style={{alignSelf:"center",alignContent:"center" ,color:"rgb(0,0,0)", marginHorizontal:"2%"}} />
            {/* <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgb(0,0,0)", fontWeight:"700",}}>Hotel Monica</Text> */}
           <View style={{flexDirection:"row"}}>
            <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgb(0,0,0)",}}>27 Jul, 202x </Text> 
            <AntDesign name='arrowright' size={16} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center"}}/>
            <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgb(0,0,0)",}}> 17 Aug, 202x</Text>
            </View>
      </View>

      <View style={{flexDirection:"row", width:"100%"}}>
      <View style={{alignItems:"flex-start", flexDirection:"row", width:"60%", marginHorizontal:"1%"}}>
            <MaterialIcons name='bedtime' size={18} style={{alignSelf:"flex-start",alignContent:"center" ,color:"rgb(0,0,0)", marginHorizontal:"2%"}} />
            {/* <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgb(0,0,0)", fontWeight:"700",}}>Hotel Monica</Text> */}
            <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgb(0,0,0)", marginHorizontal:"1%"}}>6 nights </Text> 
            </View>
            <Text style={{alignSelf:"flex-end", fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgb(0,0,0)",}}>R300.00 pppm</Text>
            
      </View>

      <View style={{flexDirection:"row", width:"100%", marginVertical:"5%"}}>
   <FontAwesome5 name='user' size={18} style={{alignSelf:"center",alignContent:"center" ,color:"rgb(0,0,0)", marginHorizontal:"2%"}} />
            {/* <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgb(0,0,0)", fontWeight:"700",}}>Hotel Monica</Text> */}
           <View style={{flexDirection:"row"}}>
            <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgb(0,0,0)",}}>1 Person </Text>
            <AntDesign name='arrowright' size={16} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center"}}/>
            <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgb(0,0,0)",}}> single room</Text>
            </View>
      </View>
        <View style={{width:"95%", height:15, marginHorizontal:"2%", borderColor:"grey", borderTopWidth:1}}>
            </View>
      <View style={{flexDirection:"row", width:"100%", marginVertical:"1%", marginHorizontal:"1%"}}>
      <View style={{alignItems:"flex-start", flexDirection:"row", width:"60%", marginHorizontal:"1%"}}>
            {/* <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgb(0,0,0)", fontWeight:"700",}}>Hotel Monica</Text> */}
            <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgb(0,0,0)", marginHorizontal:"1%"}}>Amount</Text> 
     </View>
     <View style={{width:"30%", justifyContent:"flex-end"}}>
     <Text style={{alignSelf:"flex-end", fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgb(0,0,0)",}}>R300.00</Text>
     </View>
            
      </View>

      <View style={{flexDirection:"row", width:"100%", marginVertical:"1%", marginHorizontal:"1%"}}>
      <View style={{alignItems:"flex-start", flexDirection:"row", width:"60%", marginHorizontal:"1%"}}>
            {/* <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgb(0,0,0)", fontWeight:"700",}}>Hotel Monica</Text> */}
            <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgb(0,0,0)", marginHorizontal:"1%"}}>Total Amount</Text> 
            </View>
            <View style={{width:"30%", justifyContent:"flex-end"}}>
            <Text style={{alignSelf:"flex-end", fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgb(0,0,0)",}}>R1800.00</Text>
            </View>
            
      </View>

      <View style={{flexDirection:"row", width:"100%", marginVertical:"1%", marginHorizontal:"1%"}}>
      <View style={{alignItems:"flex-start", flexDirection:"row", width:"60%", marginHorizontal:"1%"}}>
            {/* <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgb(0,0,0)", fontWeight:"700",}}>Hotel Monica</Text> */}
            <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgb(0,0,0)", marginHorizontal:"1%"}}>Payment Method</Text> 
            </View>
            <View style={{width:"40%", justifyContent:"flex-end", alignContent:"flex-end", alignItems:"flex-end"}}>
            <Image source={require('../../assets/images/yocologo.png')} style={{resizeMode:"contain" ,width:"100%", height:30, alignSelf:"flex-end", alignContent:"flex-end"}}/>
            </View>
            
      </View>
      <View style={{flex:.1}}></View>
      <View style={{width:"100%", height:100}}>

      </View>
      <View style={{height:"20%", marginHorizontal:"1%"}}>
        <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:20, color:"rgb(0,0,0)", marginHorizontal:"1%", fontWeight:"bold"}}>
            Review
        </Text>
        <View>
        <View style={{flexDirection:"row", marginVertical:"2%", marginHorizontal:"10%"}}>
        <TouchableOpacity>
        <AntDesign name='star' size={30} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"lightgrey"}}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <AntDesign name='star' size={30} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"lightgrey"}}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <AntDesign name='star' size={30} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"lightgrey"}}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <AntDesign name='star' size={30} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"lightgrey"}}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <AntDesign name='star' size={30} style={{fontWeight:"500", justifyContent:"center", alignSelf:"center", color:"lightgrey"}}/>
        </TouchableOpacity>
        </View>

        <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgb(0,0,0)", marginHorizontal:"10%",}}>
        You have not made a review yet
        </Text>
        </View>

        <TouchableOpacity
                activeOpacity={0.9} 
                onPress={() => {}}
                    style={{alignSelf: "center", backgroundColor:"rgb(239, 172, 50)", width:"90%", height:50, opacity:3 ,justifyContent:"center", marginVertical:"1.3%", borderRadius:30,}}>
                        <Text style={{alignSelf:"center", color:"#FFFFFF", fontWeight:"bold", fontFamily:"Plus Jakarta Sans", fontSize:14}}>LEAVE A REVIEW</Text>
        </TouchableOpacity>


        <Text style={{fontFamily:"Plus Jakarta Sans", fontSize:16, color:"rgb(239, 172, 50)", marginHorizontal:"1%",alignSelf:"center"}}>
            Thank you for staying at Hotel Monica
        </Text>
      </View>
   </SafeAreaView>
   </>
  )
}