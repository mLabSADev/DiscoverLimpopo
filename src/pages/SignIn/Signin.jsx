import React, { useState } from 'react'
import { Text, View, ImageBackground, ScrollView, StyleSheet, Pressable, Modal ,TouchableOpacity, Image, TextInput, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native'
import auth from '@react-native-firebase/auth';
import Toast  from 'react-native-toast-message';
import AuthService from '../../services/auth';

export default function Signin({navigation}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);
  const [border, setBorder] = useState("lightgrey");
  
  // firebase.initializeApp();
  const validate = () => {

    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (email.trim() == "" && password.trim() == "") {
       Toast.show({
        type: 'error',
        text2: 'Both fields are empty',
     })
      // alert("Both fields are empty");
    } else if (reg.test(email.trim()) === false) { 
  
        Toast.show({
          type: 'error',
          text2: 'Email is not valid',
       })
      
    } else if (password.trim() == "") {
       Toast.show({type:'error', text2:"Password cannot be empty"});
      // alert("Password is empty");
    } else {
     signin();
    }
  }


  const signin = () => {
    if (email.trim() !== "" && password.trim() !== "") {

      AuthService.signin(email.trim(), password.trim());
      // auth()
      // .signInWithEmailAndPassword(email.trim(), password.trim()).then((userCredetial) => {
      //   Toast.show({type:"success", text2:"You're now logged in!"})
      //   const user = userCredetial.user;
      //     // navigation.navigate('Home');
      // }).catch((error) => {
      //   if(error.code === "auth/user-not-found"){
      //     Toast.show({type:'error', text2:"Email is not registered"});
      //   } if (error.code === "auth/wrong-password") {
      //     Toast.show({type:'error', text2:"Password is incorrect"});
      //   } else {
      //     console.log(error)
      //   }
      // });  
  }
}

const validateLink = () => {
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
   if (reg.test(resetPassword) === false) { 
        setBorder("red");
    //   Toast.show({
    //     type: 'error',
    //     text2: 'Email is not valid',
    //  })
  } else {
    setBorder("green");
   auth().sendPasswordResetEmail(resetPassword).then((results) => {
    setModalVisible(!modalVisible);
    alert();
   }).catch((error) => {

   })
  }

  const alert = () => {
    Toast.show({type:"success", text2:"Please check your Email to reset!"})
  }

}
 
    return (
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{flex:1, height:"100%"}}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground source={require('../../assets/images/sign-in-fill.jpg')} style={{width:"100%", height:"100%"}}>
        <View style={{justifyContent: "center"}}>
          <View style={{width:"100%", height:"40%"}}>
          <Image source={require("../../assets/images/discover-logo.png")} style={{width:120, height:40, alignSelf:"center"}}/>            
          </View>
        
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <Toast />
          <View style={{flex:3}}></View>
          <View style={styles.modalView}>
            <Text style={{alignSelf:"flex-start", fontSize:32, fontFamily:"Plus Jakarta Sans", fontWeight:"bold", color:'#000000'}}>Reset Email</Text>
            <Text style={{alignSelf:"flex-start", fontSize:14, fontFamily:"Plus Jakarta Sans", fontWeight:"600", color:'#000000', marginVertical:"3%"}}>Email</Text>  
             <View style={{backgroundColor:"rgba(120, 120, 120, 0.3)", alignSelf:"flex-start", width:"100%", borderRadius: 30, height:50, flexDirection:"row", marginVertical:"3%", borderWidth:1, borderColor:border}}>
             <TextInput placeholder='Enter email address...' style={{alignSelf:"flex-start", width:"80%", marginHorizontal:"5%",}} 
             onChangeText={(password) => setResetPassword(password)}
             textContentType="email"
             value={resetPassword}
             />              
             </View>
              <TouchableOpacity
              activeOpacity={0.9} 
                  onPress={() => validateLink()}
                  style={{alignSelf: "flex-start", backgroundColor:"rgb(239, 172, 50)", width:"100%", height:50, opacity:3 ,justifyContent:"center", borderRadius:30,}}>
                      <Text style={{alignSelf:"center", color:"#FFFFFF", fontWeight:"bold",fontFamily:"Plus Jakarta Sans", fontSize:14}}>SEND LINK</Text>
              </TouchableOpacity>
              <TouchableOpacity
              activeOpacity={0.9} 
                  onPress={() => { setModalVisible(!modalVisible)}}>
            <Text style={{alignSelf:"center", fontSize:14, fontFamily:"Plus Jakarta Sans", fontWeight:"700", color:'rgb(239, 172, 50)', marginVertical:"2%"}}>CANCEL</Text>                
           </TouchableOpacity>
          </View>
      </Modal>        
        </View>
        <ScrollView scrollEnabled={false} 
         style={{ backgroundColor: "#FFFFFF", borderTopLeftRadius: 30, borderTopRightRadius: 30, height:"100%", flexDirection:"column",flexDirection:"column",}}
        >
         <View style={{alignSelf:"center",  width:"100%", alignItems:"center", }}>
            <Text style={{alignSelf:"center", fontSize:32, fontFamily:"Plus Jakarta Sans", fontWeight:"bold", color:'#000000'}}>Sign in</Text>             
            <Text style={{alignSelf:"center", fontSize:14, fontFamily:"Plus Jakarta Sans", fontWeight:"100", color:'#000000'}}>Welcome back</Text>                
        </View>
        <View style={{alignSelf:"center",width:"100%", backgroundColor:"#FFFFFF", flexDirection:"column",}}>
        <Text style={{alignSelf:"flex-start", fontSize:14, fontFamily:"Plus Jakarta Sans", fontWeight:"600", color:'#000000', marginVertical:"3%", marginHorizontal:"9%"}}>Email</Text>  
       <View style={{display:"flex", backgroundColor:"rgba(120, 120, 120, 0.3)", alignSelf:"center", width:"90%", borderRadius: 30, height:50 }}>

       <TextInput placeholder='Email' style={{alignSelf:"flex-start", width:"80%", marginHorizontal:"5%"}} 
          onChangeText={(email) => setEmail(email)}
          textContentType='emailAddress'
         value={email}
       />              
       </View>
       <Text style={{alignSelf:"flex-start", fontSize:14, fontFamily:"Plus Jakarta Sans", fontWeight:"600", color:'#000000', marginVertical:"3%", marginHorizontal:"9%"}}>Password</Text>  
               <View style={{backgroundColor:"rgba(120, 120, 120, 0.3)", alignSelf:"center", width:"90%", borderRadius: 30, height:50, flexDirection:"row"}}>
               <TextInput placeholder='Password' style={{alignSelf:"flex-start", width:"80%", marginHorizontal:"5%",}} 
               onChangeText={(password) => setPassword(password)}
               value={password}
               textContentType="password"
               secureTextEntry={true}
               />              
               </View>
               <TouchableOpacity onPress={() => {setModalVisible(!modalVisible)}}>
                <Text style={{alignSelf:"flex-end", fontSize:14, fontFamily:"Plus Jakarta Sans", fontWeight:"bold", color:'rgba(120, 120, 120, 0.9)', marginVertical:"3%", marginHorizontal:"10%"}}>FORGOT PASSWORD</Text>  
                </TouchableOpacity>
                <TouchableOpacity
                activeOpacity={0.9} 
                onPress={() => {
                  console.log("dfdsfsdssfdfsdfsf")
                  validate();}}
                    style={{alignSelf: "center", backgroundColor:"rgb(239, 172, 50)", width:"90%", height:50, opacity:3 ,justifyContent:"center", marginVertical:"1%", borderRadius:30,}}>
                        <Text style={{alignSelf:"center", color:"#FFFFFF", fontWeight:"bold",fontFamily:"Plus Jakarta Sans", fontSize:14}}>SIGN IN</Text>
                </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.9} 
                  onPress={() => { return navigation.navigate('Signup')}}>
            <Text style={{alignSelf:"center", fontSize:14, fontFamily:"Plus Jakarta Sans", fontWeight:"700", color:'rgb(239, 172, 50)', marginVertical:"3%"}}>I DON'T HAVE AN ACCOUNT</Text>                
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

 
 const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop:2,
  },
  modalView: {
    width:"90%",
    height:270,
    margin: 20,
    flexDirection:"column",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

