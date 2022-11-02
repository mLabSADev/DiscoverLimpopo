import React, { useState } from 'react'
import { ScrollView, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import Toast  from 'react-native-toast-message';


export default function EditProfileDetails({navigation, routes}) {

    const [displayName, setDisplayName] = useState('');
    const [name, SetName] = useState('');
    const [email, SetEmail] = useState('');
    const [nationality, setNationality] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(0);
    const [dateOfBirth, setDateOfBirth] = useState('');

    const validate = () => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        const lenReg = new RegExp("^(?=.{3,})");
        const numReg = new RegExp("^(?=.*[0-9])");

        if (displayName === "" || lenReg.test(displayName) === false){
                Toast.show({type:"error", text2:""});
        } else if(email === "" || reg.test(email) === false) {
            Toast.show({type:"error", text2:""});
        } else if(nationality === "" || lenReg.test(nationality) === false) {
            Toast.show({type:"error", text2:""});
        } else if(dateOfBirth === "" || lenReg.test(dateOfBirth) === false) {
            Toast.show({type:"error", text2:"Please enter a valid"});
        } else if(name === "" || lenReg.test(name) === false) {
            Toast.show({type:"error", text2:"Please enter valid Name"});
        } else if(phoneNumber === "" || numReg.test(phoneNumber) === false) {
            Toast.show({type:"error", text2:"Please enter a valid phone number"});
        } else {
            updateDetails()
        }
    
    }

    const updateDetails = () => {

    }

  return (
    <>
     <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{flex:1, height:"100%"}}
      >
    <ScrollView
    scrollEnabled={true}
    showsVerticalScrollIndicator={false} 
    style={{ backgroundColor: "#F4FAFF", height:"100%", flexDirection:"column",}}
   >
    <View style={{marginVertical:"1%", width:"95%"}}>
        <Text style={{marginHorizontal:"4%" ,fontSize:30, fontWeight:"600", color:"rgb(0,0,0)"}}>Profile Details</Text>
        <Text style={{marginHorizontal:"4%", color:"rgb(0,0,0)"}}>Welcome to Discover Limpopo</Text>
        <View style={{justifyContent:"center", alignContent:"center"}}>
        <Text style={{alignSelf:"flex-start", fontSize:14, fontFamily:"inter", fontWeight:"600", color:'#000000', marginVertical:"2%", marginHorizontal:"9%"}}>Display Name</Text>  
               <View style={{backgroundColor:"lightgrey", alignSelf:"center", width:"90%", borderRadius: 30, height:50, flexDirection:"row"}}>
               <TextInput placeholder='Display Name' style={{alignSelf:"flex-start", width:"80%", marginHorizontal:"5%",}} 
               onChangeText={(name) => setDisplayName(name)}
               value={displayName}
               textContentType="name"
               />              
               </View>
               <Text style={{alignSelf:"flex-start", fontSize:14, fontFamily:"inter", fontWeight:"600", color:'#000000', marginVertical:"2%", marginHorizontal:"9%"}}>Name</Text>  
               <View style={{backgroundColor:"lightgrey", alignSelf:"center", width:"90%", borderRadius: 30, height:50, flexDirection:"row"}}>
               <TextInput placeholder='Name' style={{alignSelf:"flex-start", width:"80%", marginHorizontal:"5%",}} 
               onChangeText={(name) => SetName(name)}
               value={name}
               textContentType="name"
               />              
               </View>
               <Text style={{alignSelf:"flex-start", fontSize:14, fontFamily:"inter", fontWeight:"600", color:'#000000', marginVertical:"2%", marginHorizontal:"9%"}}>Date of Birth</Text>  
               <View style={{backgroundColor:"lightgrey", alignSelf:"center", width:"90%", borderRadius: 30, height:50, flexDirection:"row"}}>
               <TextInput placeholder='Date of Birth' style={{alignSelf:"flex-start", width:"80%", marginHorizontal:"5%",}} 
               onChangeText={(dateOfBirth) => setDateOfBirth(dateOfBirth)}
               value={dateOfBirth}
               textContentType="date"
               />              
               </View>
               <Text style={{alignSelf:"flex-start", fontSize:14, fontFamily:"inter", fontWeight:"600", color:'#000000', marginVertical:"2%", marginHorizontal:"9%"}}>Email Address</Text>  
               <View style={{backgroundColor:"lightgrey", alignSelf:"center", width:"90%", borderRadius: 30, height:50, flexDirection:"row"}}>
               <TextInput placeholder='Email' style={{alignSelf:"flex-start", width:"80%", marginHorizontal:"5%",}} 
               onChangeText={(email) => SetEmail(email)}
               value={email}
               textContentType="email"
               />              
               </View>
               <Text style={{alignSelf:"flex-start", fontSize:14, fontFamily:"inter", fontWeight:"600", color:'#000000', marginVertical:"2%", marginHorizontal:"9%"}}>Phone Number</Text>  
               <View style={{backgroundColor:"lightgrey", alignSelf:"center", width:"90%", borderRadius: 30, height:50, flexDirection:"row"}}>
               <TextInput placeholder='Phone Number' style={{alignSelf:"flex-start", width:"80%", marginHorizontal:"5%",}} 
               onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
               value={phoneNumber}
               textContentType="numeric"
               keyboardType='numeric'
               />              
               </View>
               <Text style={{alignSelf:"flex-start", fontSize:14, fontFamily:"inter", fontWeight:"600", color:'#000000', marginVertical:"2%", marginHorizontal:"9%"}}>Nationality</Text>  
               <View style={{backgroundColor:"lightgrey", alignSelf:"center", width:"90%", borderRadius: 30, height:50, flexDirection:"row"}}>
               <TextInput placeholder='Nationality' style={{alignSelf:"flex-start", width:"80%", marginHorizontal:"5%",}} 
               onChangeText={(nationality) => setNationality(nationality)}
               value={nationality}
               textContentType="nationality"
               />              
               </View>
               <TouchableOpacity
                activeOpacity={0.9} 
                onPress={() => {validate()}}
                    style={{alignSelf: "center", backgroundColor:"rgb(239, 172, 50)", width:"90%", height:50, opacity:3 ,justifyContent:"center", marginVertical:"2%", borderRadius:30,}}>
                        <Text style={{alignSelf:"center", color:"#FFFFFF", fontWeight:"bold", fontStyle:"inter", fontSize:14}}>DONE</Text>
                </TouchableOpacity>
               <TouchableOpacity
              activeOpacity={0.9} 
                  onPress={() => { return navigation.navigate('Account')}}>
            <Text style={{alignSelf:"center", fontSize:14, fontFamily:"inter", fontWeight:"700", color:'rgb(239, 172, 50)', marginVertical:"-1%"}}>I'LL DO IT LATER</Text>                
           </TouchableOpacity>
        </View>
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
    </> 
  )
}