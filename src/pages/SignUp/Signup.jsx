import React, {useState} from 'react';
import { View, TouchableOpacity, Text, KeyboardAvoidingView, TouchableWithoutFeedback, ImageBackground, ScrollView, TextInput, Keyboard, Image } from 'react-native';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';

export default function Signup ({navigation}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [border, setBorder] = useState("#4285F4");
  

   const validate = () => {
   
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    const lowReg = new RegExp("^(?=.*[a-z])");
    const uppReg = new RegExp("^(?=.*[A-Z])");
    const charReg = new RegExp("^(?=.*[!@#\$%\^&\*])");
    const lenReg = new RegExp("^(?=.{8,})");
    const numReg = new RegExp("^(?=.*[0-9])");

    if (email == "" && password == "") {
    Toast.show({type: 'error', text2: 'Both fields are empty'})
      // alert("Both fields are empty");
    } else if (reg.test(email) === false) { 
        Toast.show({type: 'error', text2: 'Email is not valid'})
    } else if(lenReg.test(password) === false) {
      Toast.show({type: 'error', text2: 'Password must contain min of 8 letters'})
    }else if(lowReg.test(password) === false) {
      Toast.show({type: 'error', text2: 'Password must contain lowercase letter'})
    }else if(uppReg.test(password) === false) {
      Toast.show({type: 'error', text2: 'Password must contain uppercase letter'})
    }else if(numReg.test(password) === false) {
      Toast.show({type: 'error', text2: 'Password must contain 1 numeric value'})
    } else if(charReg.test(password) === false) {
      Toast.show({type: 'error', text2: 'Password must contain 1 Character'})
    } else {
     singUp();
   } 
}

   const singUp = () => {
      if (email !== "" && password !== "") {
         auth()
         .createUserWithEmailAndPassword(email, password).then((userCredetial) => {
            Toast.show({type:"success", text2:"Email is successfully registered!"})
           const user = userCredetial.user.email;
             navigation.navigate("Signin", {user: user})
         }).catch((error) => {
           if(error.code === "auth/email-already-in-use"){
             Toast.show({type:'error', text2:"email address is already in use!"});
           } 
           if (error.code === 'auth/invalid-email') {
             console.log('That email address is invalid!');
           }else {
             console.log(error)
           }
         });  
     }
 
   
}

  return (

    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={{flex:1, height:"100%"}}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground source={require('../../assets/images/onboarding.jpg')} style={{width:"100%", height:"100%"}}>
      <View style={{justifyContent: "center"}}>
          <Image source={require("../../assets/images/discover-logo.png")} style={{width:"30%", height:"30%", alignSelf:"center"}}/>
      </View>
      <ScrollView scrollEnabled={false} 
       style={{ backgroundColor: "#FFFFFF", borderTopLeftRadius: 30, borderTopRightRadius: 30, height:"100%", flexDirection:"column",flexDirection:"column", marginTop:40}}
      >
       <View style={{alignSelf:"center",  width:"100%", alignItems:"center", }}>
          <Text style={{alignSelf:"center", fontSize:32, fontFamily:"inter", fontWeight:"bold", color:'#000000'}}>Sign Up</Text>             
          <Text style={{alignSelf:"center", fontSize:14, fontFamily:"inter", fontWeight:"100", color:'#000000'}}>Welcome to Discover Limpopo</Text>                
      </View>
      <View style={{alignSelf:"center",width:"100%", backgroundColor:"#FFFFFF", flexDirection:"column"}}>
      <Text style={{alignSelf:"flex-start", fontSize:14, fontFamily:"inter", fontWeight:"600", color:'#000000', marginVertical:"3%", marginHorizontal:"9%"}}>Email</Text>  
     <View style={{display:"flex", backgroundColor:"lightgrey", alignSelf:"center", width:"90%", borderRadius: 30, height:50}}>
     <TextInput placeholder='Email' style={{alignSelf:"flex-start", width:"80%", marginHorizontal:"5%"}} 
       onChangeText={(email) => setEmail(email)}
       textContentType='emailAddress'
      value={email}
     />              
     </View>
     <Text style={{alignSelf:"flex-start", fontSize:14, fontFamily:"inter", fontWeight:"600", color:'#000000', marginVertical:"3%", marginHorizontal:"9%"}}>Password</Text>  
             <View style={{backgroundColor:"lightgrey", alignSelf:"center", width:"90%", borderRadius: 30, height:50, flexDirection:"row"}}>
             <TextInput placeholder='Password' style={{alignSelf:"flex-start", width:"80%", marginHorizontal:"5%",}} 
             onChangeText={(password) => setPassword(password)}
             textContentType="password"
             secureTextEntry={true}
             value={password}
             />              
             </View>
              <TouchableOpacity
              activeOpacity={0.9} 
                  onPress={() => validate()}
                  style={{alignSelf: "center", backgroundColor:"rgb(239, 172, 50)", width:"90%", height:50, opacity:3 ,justifyContent:"center", marginVertical:"3%", borderRadius:30,}}>
                      <Text style={{alignSelf:"center", color:"#FFFFFF", fontWeight:"bold", fontStyle:"inter", fontSize:14}}>SIGN UP</Text>
              </TouchableOpacity>
          {/* <View style={{ width:"90%", alignSelf:"center", justifyContent:"center", }}>
           <Text style={{alignSelf:"center", fontSize:14, fontFamily:"inter", fontWeight:"100", color:'#000000'}}>or continue using</Text>                
           <View style={{alignSelf:"center", flexDirection:"row", justifyContent:"space-between", width:"50%", marginVertical:"5%"}}>
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
          </View> */}
          <TouchableOpacity
              activeOpacity={0.9} 
                  onPress={() => { return navigation.navigate('Signin')}}>
          <Text style={{alignSelf:"center", fontSize:14, fontFamily:"inter", fontWeight:"700", color:'rgb(239, 172, 50)', marginVertical:"5%"}}>I ALREADY HAVE AN ACCOUNT</Text>                
         </TouchableOpacity>
          </View>
      </ScrollView>
   </ImageBackground>
</TouchableWithoutFeedback>
</KeyboardAvoidingView>
  )
}

