import React, { useState } from 'react'
import { ScrollView, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Toast  from 'react-native-toast-message';
import DatePicker from 'react-native-date-picker';
import CountryPicker from "@volkenomakers/react-native-country-picker";
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Box } from 'native-base';
import moment from 'moment';
import firestore from '@react-native-firebase/firestore';
import ProfileUpdate from '../../services/profileUpdate';
import auth from '@react-native-firebase/auth';

const EditProfileDetails = ({navigation, route}) => {

    const {user} = route.params;
    const [displayName, setDisplayName] = useState(`${route.params.user.userName}`);
    const [name, SetName] = useState(`${route.params.user.name}`);
    const [email, SetEmail] = useState(`${route.params.user.email}`);
    const [nationality, setNationality] = useState(`${route.params.user.nationality}`);
    const [phoneNumber, setPhoneNumber] = useState(`${route.params.user.phoneNumber}`);
    const [dateOfBirth, setDateOfBirth] = useState(`${route.params.user.dateOfBirth}`);

    const [open, setOpen] = useState(false)

    const validate = () => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        const lenReg = new RegExp("^(?=.{3,})");
        const numLength = new RegExp("^(?=.{5,})");
        const numReg = new RegExp("^(?=.*[0-9])");

        if (displayName === "" || lenReg.test(displayName) === false){
                Toast.show({type:"error", text2:""});
        } else if(email === "" || reg.test(email) === false) {
            Toast.show({type:"error", text2:""});
        } else if(nationality === "" || lenReg.test(nationality) === false) {
            Toast.show({type:"error", text2:""});
        } else if(dateOfBirth === "" || lenReg.test(dateOfBirth) === false) {
            Toast.show({type:"error", text2:"Please enter a valid"});
        } else if(lenReg.test(name) === false) {
            Toast.show({type:"error", text2:"Please enter valid Name"});
        } else if(phoneNumber === "" || numLength.test(phoneNumber) === false) {
            Toast.show({type:"error", text2:"Please enter a valid phone number"});
        } else {
            updateDetails();
        }
    
    }

    const updateDetails = () => {
        console.log(user, 'this is the user')
        const userInfor = {
            name: name,
            email: email,
            uid: user.uid,
            userName: displayName,
            nationality: nationality,
            phoneNumber:phoneNumber,
            dateOfBirth:dateOfBirth,
        }
        ProfileUpdate.profileUpdate(userInfor, user.uid).then(() => {
            navigation.navigate('Account');
        })          
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
    <Box style={{marginVertical:"1%", width:"95%"}}>
        <Text style={{fontFamily:"Plus Jakarta Sans", marginHorizontal:"4%" ,fontSize:30, fontWeight:"600", color:"rgb(0,0,0)"}}>Profile Details</Text>
        <Text style={{fontFamily:"Plus Jakarta Sans", marginHorizontal:"4%", color:"rgb(0,0,0)"}}>Welcome to Discover Limpopo</Text>
        <Box style={{justifyContent:"center", alignContent:"center"}}>
        <Text style={{alignSelf:"flex-start", fontSize:14, fontFamily:"Plus Jakarta Sans", fontWeight:"600", color:'#000000', marginVertical:"2%", marginHorizontal:"9%"}}>Display Name</Text>  
               <Box style={{backgroundColor:"lightgrey", alignSelf:"center", width:"90%", borderRadius: 30, height:50, flexDirection:"row"}}>
               <TextInput placeholder='Display Name' style={{alignSelf:"flex-start", width:"80%", marginHorizontal:"5%",}} 
               onChangeText={(name) => setDisplayName(name)}
               value={displayName}
               textContentType="name"
               />              
               </Box>
               <Text style={{alignSelf:"flex-start", fontSize:14, fontFamily:"Plus Jakarta Sans", fontWeight:"600", color:'#000000', marginVertical:"2%", marginHorizontal:"9%"}}>Name</Text>  
               <Box style={{backgroundColor:"lightgrey", alignSelf:"center", width:"90%", borderRadius: 30, height:50, flexDirection:"row"}}>
               <TextInput placeholder='Name' style={{alignSelf:"flex-start", width:"80%", marginHorizontal:"5%",}} 
               onChangeText={(name) => SetName(name)}
               value={name}
               textContentType="name"
               />              
               </Box>
               <Text style={{alignSelf:"flex-start", fontSize:14, fontFamily:"Plus Jakarta Sans", fontWeight:"600", color:'#000000', marginVertical:"2%", marginHorizontal:"9%"}}>Date of Birth</Text>  
               <Box justifyContent={"center"} justifyItems={"center"} style={{backgroundColor:"lightgrey", alignSelf:"center", width:"90%", borderRadius: 30, height:50, flexDirection:"row", justifyContent:"center"}}>
                <Box  width="80%" marginLeft={10} marginTop={4}>
               <DatePicker
               modal
               mode='date'
               open={open}
               date={new Date()}
               onConfirm={(date) => {
                setOpen(false)
                if (date !== new Date()){
                 const currentDate = moment(date).format('DD MMMM, YYYY').toString();
                    setDateOfBirth(currentDate);
                } 
              }}
              onCancel={() => {
                setOpen(false)
              }}
               placeholder='Date of Birth' 
               onChangeText={(dateOfBirth) => setDateOfBirth(dateOfBirth)}
               value={dateOfBirth}
               textContentType="date"
               />
               <Text style={{fontFamily:"Plus Jakarta Sans", alignSelf:"flex-start", marginHorizontal:"5%",}} >{dateOfBirth}</Text>
               </Box>
               <Box width={"20%"} marginLeft={10} marginTop={4}>
                <Fontisto name='date'
                onPress={() => setOpen(!open)}
                 style={{alignSelf:"flex-end", width:80, marginHorizontal:"5%",}} 
                 color={dateOfBirth === moment(new Date()).format('DD MMMM, YYYY').toString() ? 'rgb(0,0,0)' : 'rgb(239, 172, 50)'} size={18}/>       
                 </Box>      
               </Box>
               <Text style={{alignSelf:"flex-start", fontSize:14, fontFamily:"Plus Jakarta Sans", fontWeight:"600", color:'#000000', marginVertical:"2%", marginHorizontal:"9%"}}>Email Address</Text>  
               <Box style={{backgroundColor:"lightgrey", alignSelf:"center", width:"90%", borderRadius: 30, height:50, flexDirection:"row"}}>
               <TextInput placeholder='Email' style={{alignSelf:"flex-start", width:"80%", marginHorizontal:"5%",}} 
               onChangeText={(email) => SetEmail(email)}
               value={email}
               textContentType="email"
               />              
               </Box>
               <Text style={{alignSelf:"flex-start", fontSize:14, fontFamily:"Plus Jakarta Sans", fontWeight:"600", color:'#000000', marginVertical:"2%", marginHorizontal:"9%"}}>Phone Number</Text>  
               <Box style={{backgroundColor:"lightgrey", alignSelf:"center", width:"90%", borderRadius: 30, height:50, flexDirection:"row"}}>
               <TextInput placeholder='Phone Number' style={{alignSelf:"flex-start", width:"80%", marginHorizontal:"5%",}} 
               onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
               value={phoneNumber}
               textContentType="numeric"
               keyboardType='numeric'
               />              
               </Box>
               <Text style={{alignSelf:"flex-start", fontSize:14, fontFamily:"Plus Jakarta Sans", fontWeight:"600", color:'#000000', marginVertical:"2%", marginHorizontal:"9%"}}>Nationality</Text>  
               <Box style={{backgroundColor:"lightgrey", alignSelf:"center", width:"90%", borderRadius: 30, height:50, justifyContent:"center"}}>
               <CountryPicker
                         favoriteCountries={["ZA"]}
               textInputStyle={{backgroundColor:"transparent"}}
               textInputContainerStyle={{borderRadius:30,alignSelf:"center", width:"90%", height:50, backgroundColor:"transparent"}}
                    onSelect={(country) => {
                        console.log("name", country.name);
                        console.log("calling codes", country.callingCode);
                        console.log("country code", country.countryCode);
                        console.log("currencies", country.currency);
                        setNationality(country.name);
                    }}
                    
        />  
               {/* <TextInput placeholder='Nationality' style={{alignSelf:"flex-start", width:"80%", marginHorizontal:"5%",}} 
               onChangeText={(nationality) => setNationality(nationality)}
               value={nationality}
               textContentType="nationality"
               />               */}
               </Box>
               <TouchableOpacity
                activeOpacity={0.9} 
                onPress={() => {validate()}}
                    style={{alignSelf: "center", backgroundColor:"rgb(239, 172, 50)", width:"90%", height:50, opacity:3 ,justifyContent:"center", marginVertical:"2%", borderRadius:30,}}>
                        <Text  style={{fontFamily:"Plus Jakarta Sans", alignSelf:"center", color:"#FFFFFF", fontWeight:"bold", fontSize:14}}>DONE</Text>
                </TouchableOpacity>
               <TouchableOpacity
              activeOpacity={0.9} 
                  onPress={() => { return navigation.navigate('Account')}}>
            <Text style={{alignSelf:"center", fontSize:14, fontFamily:"Plus Jakarta Sans", fontWeight:"700", color:'rgb(239, 172, 50)', marginVertical:"-1%"}}>I'LL DO IT LATER</Text>                
           </TouchableOpacity>
        </Box>
    </Box>
    </ScrollView>
    </KeyboardAvoidingView>
    </> 
  )
}


export default EditProfileDetails;


const styles = StyleSheet.create({
    container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF",
	},
	titleText: {
		color: "#000",
		fontSize: 25,
		marginBottom: 25,
		fontWeight: "bold",
	},
	pickerTitleStyle: {
		justifyContent: "center",
		flexDirection: "row",
		alignSelf: "center",
		fontWeight: "bold",
	},
	pickerStyle: {
		height: 54,
		width: 150,
		marginVertical: 10,
		borderColor: "#303030",
		alignItems: "center",
		marginHorizontal: 10,
		padding: 10,
		backgroundColor: "white",
		borderRadius: 5,
		borderWidth: 2,
		fontSize: 16,
		color: "#000",
	},
	selectedCountryTextStyle: {
		paddingLeft: 5,
		color: "#000",
		textAlign: "right",
	},

	countryNameTextStyle: {
		paddingLeft: 10,
		color: "#000",
		textAlign: "right",
	},

	searchBarStyle: {
		flex: 1,
	},
})