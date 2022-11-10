import { Box, Text, Image } from 'native-base';
import React, { useState } from 'react';
import { TouchableOpacity, Modal, StyleSheet, ActivityIndicator, ImageBackground, } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useAuth } from '../../context/auth.context';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import Toast  from 'react-native-toast-message';


const Profile = ({navigation, route}) =>  {

  const { user } = useAuth();
  const [modalVisible, setModalVisible] = useState(false);
  const [loader, setLoader] = useState(false);
  const [image, setImage] = useState(`${user.imageUrl}`);

 
  const uploadImage = async () => {
    const options = {
      mediaType: 'photo',
      includeBase64: true,
      includeExtra: true,
      presentationStyle:"overFullScreen",
    };
  
    const gallery = launchImageLibrary(options, (response) => {
  
         if (response.didCancel) {
          console.log(response.errorMessage);
          console.log('User cancelled image picker');
        } else if (response.errorMessage) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
          alert(response.customButton);
        } else {
          // const uri = response.assets.map(({uri}) => uri).toString();
          const uri = response.assets.map(({uri}) => uri).toString();
          // console.log('tis is the one you need response', uri)
            setImage(uri);
        }});
}


const uploadImageToStorage = () => {
         const imageName = image.substring(image.lastIndexOf('/'));
         const uploadUri = Platform.OS === 'ios' ? image.replace('file://', '') : image;

      try {
        setLoader(true);
        storage().ref(imageName).putFile(uploadUri)
        .then((snapshot) => {
          //You can check the image is now uploaded in the storage bucket
          // console.log(`${imageName} has been successfully uploaded.`);
          storage().ref('/' + imageName).getDownloadURL().then((imageURL) => {
            // console.log(`${imageURL} has been retrieved.`);
          firestore().collection('users').doc(user.uid).update({
            imageUrl: imageURL
          }). then(() => {
            setLoader(false);
          }).catch((error) => {
            console.log(error, 'Could not upload the image, check what happened');
          })
            // setImage(imageURL);
          }).catch((e) => console.log('retrieving image error => ', e));
           
        })
        .catch((e) => console.log('uploading image error => ', e));
      setLoader(false);
      
      }
      catch(e) {
        console.error(e);
        setLoader(false);
      }
      setModalVisible(!modalVisible);
      Toast.show({type:"success", text2:"Image uploaded!"})
}

  return (
    <>
       <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
          style={styles.centeredBox}
        >
          <Box style={styles.modalBox}>
            <TouchableOpacity
            onPress={() => uploadImage()}
            activeOpacity={0.9} style={{width:"50%", height:"30%", borderRadius:300, borderColor:"rgb(239, 172, 50)", borderWidth:1}}>
            <Image alt='update-profile' source={{uri: image}} style={styles.image} />
              { loader ? <ActivityIndicator color={'rgb(239, 172, 50)'}  size={24} style={{marginVertical:"-50%", alignSelf:"center"}}/> :
            <MaterialIcons name="edit" color={'rgb(239, 172, 50)'} size={24} style={{marginVertical:"-50%", alignSelf:"center"}} />
              }
            </TouchableOpacity>
              <TouchableOpacity
              activeOpacity={0.9} 
                  onPress={() => uploadImageToStorage()}
                  style={{alignSelf: "center",borderWidth:1, borderColor:"rgb(239, 172, 50)", width:"50%", height:50, opacity:3 ,justifyContent:"center", borderRadius:30, marginVertical:"5%"}}>
                      <Text style={{alignSelf:"center", color:"rgb(239, 172, 50)", fontWeight:"bold", fontStyle:"inter", fontSize:14}}>UPDATE IMAGE</Text>
              </TouchableOpacity>
              <TouchableOpacity
              activeOpacity={0.9} 
                  onPress={() => { setModalVisible(!modalVisible)}}>
            <Text style={{alignSelf:"center", fontSize:14, fontFamily:"inter", fontWeight:"700", color:'rgb(239, 172, 50)', marginVertical:"2%"}}>CANCEL</Text>                
           </TouchableOpacity>
          </Box>
      </Modal>   
      

        <Box style={{flex:1, backgroundColor:"#2B2B2B", borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
        <Box style={{width:"95%", backgroundColor:'rgba(239, 172, 50, 0.05)', borderRadius:30, flexDirection:"row", marginVertical:"3%", height:50,marginHorizontal:"2%", justifyContent:"space-between", alignContent:"center", alignItems:"center"}}>
            <TouchableOpacity activeOpacity={2} onPress={() => navigation.openDrawer()}>
            <Feather name='menu' size={32} style={{alignSelf:"flex-start", color:"rgb(239, 172, 50)", marginHorizontal:"10%"}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Account')}>
            <Image alt='profile1' source={{uri: user.imageUrl}} style={{width:38, height:38, alignSelf:"flex-end", borderRadius:38, marginHorizontal:"10%"}}/>
            </TouchableOpacity>        
        </Box>
         <Text fontSize={34} color="#FFFFFF" fontWeight="bold" fontFamily="Plus Jakarta Sans" style={{marginHorizontal:"5%", marginVertical:"-1%", width:"80%"}}>Profile Details</Text>
        </Box>
        <Box style={{flex:3, flexDirection:"column"}}>
            <Box style={{flexDirection:"row", width:"90%", marginVertical:"5%", marginHorizontal:"4%"}}>
              <TouchableOpacity activeOpacity={0.9}
              onPress={() => setModalVisible(!modalVisible)}>
              <Image alt='profile' source={{uri: user.imageUrl}} 
              style={{borderRadius:90, height:90, width:90}}/>
              </TouchableOpacity>
              <Box style={{marginHorizontal:"3%", marginVertical:"7%"}}>
                <Text style={{fontSize:14, color:"grey", fontWeight:"bold",}}>Display Name</Text>
                <Text style={{fontSize:18, color:"rgb(0,0,0)", fontWeight:"500", marginVertical:"1%"}}>{user.userName}</Text>
              </Box>
            </Box>
            <Box style={{marginHorizontal:"4%", marginVertical:"-3%"}}>
                <Text style={{fontSize:14, color:"grey", fontWeight:"bold",}}>Name</Text>
                <Text style={{fontSize:18, color:"rgb(0,0,0)", fontWeight:"500", marginVertical:"1%"}}>{user.name}</Text>
              </Box>
              <Box style={{marginHorizontal:"4%", marginVertical:"3%"}}>
                <Text style={{fontSize:14, color:"grey", fontWeight:"bold",}}>Email Address</Text>
                <Text style={{fontSize:18, color:"rgb(0,0,0)", fontWeight:"500", marginVertical:"1%"}}>{user.email}</Text>
              </Box>
              <Box style={{marginHorizontal:"4%", marginVertical:"2%"}}>
                <Text style={{fontSize:14, color:"grey", fontWeight:"bold",}}>Phone Number</Text>
                <Text style={{fontSize:18, color:"rgb(0,0,0)", fontWeight:"500", marginVertical:"1%"}}>{user.phoneNumber}</Text>
              </Box>
              <Box style={{marginHorizontal:"4%", marginVertical:"0%"}}>
                <Text style={{fontSize:14, color:"grey", fontWeight:"bold",}}>Date of Birth</Text>
                <Text style={{fontSize:18, color:"rgb(0,0,0)", fontWeight:"500", marginVertical:"1%"}}>{user.dateOfBirth}</Text>
              </Box>
              <Box style={{marginHorizontal:"4%", marginVertical:"0%"}}>
                <Text style={{fontSize:14, color:"grey", fontWeight:"bold",}}>Nationality</Text>
                <Text style={{fontSize:18, color:"rgb(0,0,0)", fontWeight:"500", marginVertical:"1%"}}>{user.nationality}</Text>
              </Box>
        </Box>
        <Box style={{flex:1}}></Box>
        <Box style={{ width:"100%"}}>
          <TouchableOpacity 
          onPress={() => navigation.navigate('Profile Details', {user: user})}
          activeOpacity={1}
           style={{borderColor:"rgb(239, 172, 50)", borderWidth:1, width:"90%", height:40, alignSelf:"center", marginVertical:"5%", borderRadius:30, alignItems:"center", justifyContent:"center"}}>
            <Text style={{fontSize:14, color:"rgb(239, 172, 50)", fontWeight:"500"}}>
              EDIT PROFILE
            </Text>
          </TouchableOpacity>
        </Box>
        </>
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


export default Profile;