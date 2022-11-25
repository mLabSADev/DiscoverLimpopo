import React, { useState } from 'react';
import { Image } from 'native-base';
import { View,Modal, TouchableOpacity, Text, KeyboardAvoidingView,StyleSheet, TouchableWithoutFeedback, ImageBackground, ScrollView, TextInput, Keyboard, ActivityIndicator } from 'react-native';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';
import AuthService from '../../services/auth';
import { Formik } from 'formik';
import { colorTheme } from '../../../App';

export default function Signup({ navigation }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [border, setBorder] = useState("#4285F4");
  const [isModalVisible, setModalVisible] = useState(false);


  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, height: "100%" }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground source={require('../../assets/images/onboarding.jpg')} style={{ width: "100%", height: "100%" }}>
          <View style={{ width: "100%", height: "35%", justifyContent: "center" }}>
            <Image alt='loggo' source={require("../../assets/images/discover-logo.png")} style={{ width: 120, height: 40, alignSelf: "center" }} />
          </View>
         {isModalVisible && (
          <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!isModalVisible);
          }}
        >
          <View style={{flex:.5}}></View>
          <ActivityIndicator size={54} color={'rgb(239, 172, 50)'}/>          
          </Modal>)}

          <ScrollView scrollEnabled={false}
            style={{ backgroundColor: "#FFFFFF", borderTopLeftRadius: 30, borderTopRightRadius: 30, height: "100%", flexDirection: "column", flexDirection: "column", marginTop: 40 }}
          >
            <View style={{ alignSelf: "center", width: "100%", alignItems: "center", }}>
              <Text style={{ alignSelf: "center", fontSize: 32, fontFamily: "Plus Jakarta Sans", fontWeight: "bold", color: '#000000' }}>Sign Up</Text>
              <Text style={{ alignSelf: "center", fontSize: 14, fontFamily: "Plus Jakarta Sans", fontWeight: "100", color: '#000000' }}>Welcome to Discover Limpopo</Text>
            </View>
            <View style={{ alignSelf: "center", width: "100%", backgroundColor: "#FFFFFF", flexDirection: "column" }}>
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
                    setModalVisible(true)
                    AuthService.signup('', values.email, values.password).then(() => {
                      setModalVisible(false);
                      Toast.show({type:"success", text2:"Account registered Successfully"})
                      navigation.navigate("Signin");
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
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={handleSubmit}
                style={{ alignSelf: "center", backgroundColor: "rgb(239, 172, 50)", width: "90%", height: 50, opacity: 3, justifyContent: "center", marginVertical: "3%", borderRadius: 30, }}>
                <Text style={{ alignSelf: "center", color: "#FFFFFF", fontWeight: "bold", fontFamily: "Plus Jakarta Sans", fontSize: 14 }}>SIGN UP</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => { return navigation.navigate('Signin') }}>
                <Text style={{ alignSelf: "center", fontSize: 14, fontFamily: "Plus Jakarta Sans", fontWeight: "700", color: 'rgb(239, 172, 50)', marginVertical: "-1%" }}>I ALREADY HAVE AN ACCOUNT</Text>
              </TouchableOpacity>
                  </View>
                )}

              </Formik>
            </View>
          </ScrollView>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  centeredBox: {
    justifyContent: "center",
    alignItems: "center",
    width:"100%",
    height:"100%",
  },
  modalBox: {
    width:"100%",
    height:"100%",
    justifyContent:"center",

    flexDirection:"column",
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    alignItems: "center",
    shadowColor: "transparent",
   
    shadowOpacity: 0.25,
    elevation: 5
  },
  image:{
    
    borderRadius:300,
     height:"100%",
     width:"100%",
     justifyContent:"center",
     alignItems:"center"
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