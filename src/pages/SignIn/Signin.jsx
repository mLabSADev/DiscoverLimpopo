import React from 'react'
import { Text, View, ImageBackground, ScrollView ,TouchableOpacity, Image, TextInput, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native'


const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};


export default function Signin({navigation}) {

    return (
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{flex:1, height:"100%"}}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground source={require('../../assets/images/sign-in-fill.jpg')} style={{width:"100%", height:"100%"}}>
        <View style={{justifyContent: "center"}}>
            <Image source={require("../../assets/images/discover-logo.png")} style={{width:"30%", height:"30%", alignSelf:"center"}}/>
        </View>
        <ScrollView scrollEnabled={false} 
         style={{ backgroundColor: "#FFFFFF", borderTopLeftRadius: 30, borderTopRightRadius: 30, height:"100%", flexDirection:"column",flexDirection:"column",}}
        >
         <View style={{alignSelf:"center",  width:"100%", alignItems:"center", }}>
            <Text style={{alignSelf:"center", fontSize:32, fontFamily:"inter", fontWeight:"bold", color:'#000000'}}>Sign in</Text>             
            <Text style={{alignSelf:"center", fontSize:14, fontFamily:"inter", fontWeight:"100", color:'#000000'}}>Welcome back</Text>                
        </View>
        <View style={{alignSelf:"center",width:"100%", backgroundColor:"#FFFFFF", flexDirection:"column"}}>
        <Text style={{alignSelf:"flex-start", fontSize:14, fontFamily:"inter", fontWeight:"600", color:'#000000', marginVertical:"3%", marginHorizontal:"9%"}}>Email</Text>  
       <View style={{display:"flex", backgroundColor:"lightgrey", alignSelf:"center", width:"90%", borderRadius: 30, height:50}}>
       <TextInput placeholder='Email' style={{alignSelf:"flex-start", width:"80%", marginHorizontal:"5%"}} 
         onBlur={(email) => {
            if (!validateEmail(email)) {
               // not a valid email
            } else {
               // valid email
            }
          }}
       />              
       </View>
       <Text style={{alignSelf:"flex-start", fontSize:14, fontFamily:"inter", fontWeight:"600", color:'#000000', marginVertical:"3%", marginHorizontal:"9%"}}>Password</Text>  
               <View style={{backgroundColor:"lightgrey", alignSelf:"center", width:"90%", borderRadius: 30, height:50, flexDirection:"row"}}>
               <TextInput placeholder='Password' style={{alignSelf:"flex-start", width:"80%", marginHorizontal:"5%",}} 
               onBlur={(email) => {
                // if (!this.validateEmail(this.state.text_input_email)) {
                //    // not a valid email
                // } else {
                //    // valid email
                // }
              }}
               />              
               </View>
                <Text style={{alignSelf:"flex-end", fontSize:14, fontFamily:"inter", fontWeight:"bold", color:'grey', marginVertical:"3%", marginHorizontal:"10%"}}>FORGOT PASSWORD</Text>  
                <TouchableOpacity
                activeOpacity={0.9} 
                    onPress={() => { return navigation.navigate('Home')}}
                    style={{alignSelf: "center", backgroundColor:"rgb(239, 172, 50)", width:"90%", height:50, opacity:3 ,justifyContent:"center", marginVertical:"1.3%", borderRadius:30,}}>
                        <Text style={{alignSelf:"center", color:"#FFFFFF", fontWeight:"bold", fontStyle:"inter", fontSize:14}}>SIGN IN</Text>
                </TouchableOpacity>
            <View style={{ width:"90%", alignSelf:"center", justifyContent:"center", }}>
             <Text style={{alignSelf:"center", fontSize:14, fontFamily:"inter", fontWeight:"100", color:'#000000'}}>or continue using</Text>                
             <View style={{alignSelf:"center", flexDirection:"row", justifyContent:"space-between", width:"50%", marginVertical:"1.5%"}}>
             <TouchableOpacity activeOpacity={0.9} style={{ backgroundColor:'rgb(238, 68, 68)', borderRadius:50, width:50, height:50, justifyContent:"center"}}>
                        <Image source={require('../../assets/images/Google.png')}
                         style={{width:35, height:35, alignSelf:"center", alignItems:"center"}}/>
                      </TouchableOpacity>
                      <TouchableOpacity style={{ backgroundColor:'rgb(85, 204, 255)', borderRadius:50, width:50, height:50, justifyContent:"center"}}>
                        <Image source={require('../../assets/images/Twitter.png')}
                         style={{width:35, height:35, alignSelf:"center", alignItems:"center"}}/>
                      </TouchableOpacity>
                      <TouchableOpacity style={{ backgroundColor:'rgb(17, 153, 238)', borderRadius:50, width:50, height:50, justifyContent:"center"}}>
                      <Image source={require('../../assets/images/Facebook.png')}
                      style={{width:35, height:35, alignSelf:"center", alignItems:"center"}}/>
                      </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity
              activeOpacity={0.9} 
                  onPress={() => { return navigation.navigate('Signup')}}>
            <Text style={{alignSelf:"center", fontSize:14, fontFamily:"inter", fontWeight:"700", color:'rgb(239, 172, 50)'}}>I DON'T HAVE AN ACCOUNT</Text>                
           </TouchableOpacity>
            </View>
        </ScrollView>
     </ImageBackground>
 </TouchableWithoutFeedback>
</KeyboardAvoidingView>
  )

}


/**
 * 
 *      
 * 
 * 
 */

 