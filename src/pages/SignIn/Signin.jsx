import React, { useState } from 'react'
import { Text, View, ImageBackground, ScrollView, StyleSheet, ActivityIndicator, Modal ,TouchableOpacity, Image, TextInput, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native'
import auth from '@react-native-firebase/auth';
import Toast  from 'react-native-toast-message';
import AuthService from '../../services/auth';
import { Formik } from 'formik';
import { colorTheme } from '../../../App';


export default function Signin({navigation}) {


  const [email, setEmail] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);
  const [border, setBorder] = useState("lightgrey");


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
          <View style={{width:"100%", height:"36%"}}>
          <Image source={require("../../assets/images/discover-logo.png")} style={{width:120, height:40, alignSelf:"center"}}/>            
          </View>
          {isModalVisible && (
          <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setIsModalVisible(!isModalVisible);
          }}
        >
          <View style={{flex:.5}}></View>
          <ActivityIndicator size={54} color={'rgb(239, 172, 50)'}/>
          </Modal>)}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
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
        <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                  const errors = {};
                  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
                  const lowReg = new RegExp("^(?=.*[a-z])");
                  const uppReg = new RegExp("^(?=.*[A-Z])");
                  const charReg = new RegExp("^(?=.*[!@#\$%\^&\*])");
                  const lenReg = new RegExp("^(?=.{8,})");
                  const numReg = new RegExp("^(?=.*[0-9])");
                 
                  if (!values.email) {
                    errors.email = 'Required';
                  } if(!values.password){
                    errors.password = 'Required';
                  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/.test(values.email.trim())) {
                    errors.email = 'Invalid email address';
                  } else if (!lenReg.test(values.password.trim())) {
                    errors.password = 'Password must contain min of 8 letters';
                  } else if (!lowReg.test(values.password.trim())) {
                    errors.password = 'Password must contain lowercase letter';
                  } else if (!uppReg.test(values.password.trim())) {
                    errors.password = 'Password must contain uppercase letter';
                  } else if (!numReg.test(values.password.trim())) {
                    errors.password = 'Password must contain 1 numeric value';
                  } else if (!charReg.test(values.password.trim())) {
                    errors.password = 'Password must contain 1 Character' ;
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  try{
                    setIsModalVisible(true)
                    AuthService.signin(values.email, values.password).then(() => {
                      setIsModalVisible(false);
                      // Toast.show({type:"success", text2:"you're now logged-in!"})
                    }).catch((error) => {
                      console.log(error);
                    })
                  } catch(error) {
                      console.log(error);
                  }
                      
                  }
                }
              >
                {({errors, touched, handleChange, handleBlur, handleSubmit, values }) => (

                  <View>
                    <Text style={{ alignSelf: "flex-start", fontSize: 14, fontFamily: "Plus Jakarta Sans", fontWeight: "600", color: '#000000', marginVertical: "3%", marginHorizontal: "9%" }}>Email</Text>
                    <View style={{display:"flex", backgroundColor:"rgba(120, 120, 120, 0.3)", alignSelf:"center", width:"90%", borderRadius: 30, height:50}}>
          <TextInput placeholder='Email' style={{alignSelf:"flex-start", width:"80%", marginHorizontal:"5%"}} 
            // onChangeText={(email) => setEmail(email)}
            testID='email'
            nativeID='email'
            validate={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
             value={values.email}
          />              
          </View>
                    <Text style={{ alignSelf: "flex-start", fontSize: 14, fontFamily: "Plus Jakarta Sans", fontWeight: "600", color: colorTheme.primary[600], marginVertical: "1%", marginHorizontal: "9%"}}>{errors.email && touched.email ? errors.email : null}</Text>
                    <Text style={{ alignSelf: "flex-start", fontSize: 14, fontFamily: "Plus Jakarta Sans", fontWeight: "600", color: '#000000', marginVertical: "1%", marginHorizontal: "9%" }}>Password</Text>
              <View style={{ backgroundColor: "rgba(120, 120, 120, 0.3)", alignSelf: "center", width: "90%", borderRadius: 30, height: 50, flexDirection: "row" }}>
                <TextInput placeholder='Password' style={{ alignSelf: "flex-start", width: "80%", marginHorizontal: "5%", }}
                testID='password'
                 nativeID='passowrd'
                 onChangeText={handleChange('password')}
                  onBlur={handleBlur('passowrd')}
                  value={values.password}
                  textContentType="password"
                  secureTextEntry={true}
                />
              </View>
              <Text style={{ alignSelf: "flex-start", fontSize: 14, fontFamily: "Plus Jakarta Sans", fontWeight: "600", color: colorTheme.primary[600], marginVertical: "1%", marginHorizontal: "9%"}}>{errors.password && touched.email ? errors.password : null }</Text>
              <TouchableOpacity onPress={() => {setModalVisible(!modalVisible)}}>
                <Text style={{alignSelf:"flex-end", fontSize:14, fontFamily:"Plus Jakarta Sans", fontWeight:"bold", color:'rgba(120, 120, 120, 0.9)', marginVertical:"1%", marginHorizontal:"10%"}}>FORGOT PASSWORD</Text>  
                </TouchableOpacity>
                <TouchableOpacity
                activeOpacity={0.9} 
                onPress={handleSubmit}
                    style={{alignSelf: "center", backgroundColor:"rgb(239, 172, 50)", width:"90%", height:50, opacity:3 ,justifyContent:"center", marginVertical:"1%", borderRadius:30,}}>
                        <Text style={{alignSelf:"center", color:"#FFFFFF", fontWeight:"bold",fontFamily:"Plus Jakarta Sans", fontSize:14}}>SIGN IN</Text>
                </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.9} 
                  onPress={() => { return navigation.navigate('Signup')}}>
            <Text style={{alignSelf:"center", fontSize:14, fontFamily:"Plus Jakarta Sans", fontWeight:"700", color:'rgb(239, 172, 50)', marginVertical:"3%"}}>I DON'T HAVE AN ACCOUNT</Text>                
           </TouchableOpacity>
                  </View>
                )}

              </Formik>
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
  modalIndicator: {
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

