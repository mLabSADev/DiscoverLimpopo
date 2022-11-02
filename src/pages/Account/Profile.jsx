import React, { useState } from 'react';
import {View, Text, TouchableOpacity, Image, Modal, StyleSheet, ActivityIndicator, ImageBackground, } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Profile({navigation}) {

  const [modalVisible, setModalVisible] = useState(false);

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
          style={styles.centeredView}
        >
          <View style={styles.modalView}>
            <TouchableOpacity activeOpacity={0.5} style={{width:"50%", height:"30%", borderRadius:300, borderColor:"rgb(239, 172, 50)", borderWidth:1}}>
                    <ImageBackground source={require('../../assets/images/John-Doe.jpg')} style={styles.image} >

                    <MaterialIcons name="edit" color={'rgb(239, 172, 50)'} size={24} />
                    </ImageBackground>
                    </TouchableOpacity>
              <TouchableOpacity
              activeOpacity={0.9} 
                  onPress={() => {}}
                  style={{alignSelf: "center",borderWidth:1, borderColor:"rgb(239, 172, 50)", width:"50%", height:50, opacity:3 ,justifyContent:"center", borderRadius:30, marginVertical:"5%"}}>
                      <Text style={{alignSelf:"center", color:"rgb(239, 172, 50)", fontWeight:"bold", fontStyle:"inter", fontSize:14}}>UPDATE IMAGE</Text>
              </TouchableOpacity>
              <TouchableOpacity
              activeOpacity={0.9} 
                  onPress={() => { setModalVisible(!modalVisible)}}>
            <Text style={{alignSelf:"center", fontSize:14, fontFamily:"inter", fontWeight:"700", color:'rgb(239, 172, 50)', marginVertical:"2%"}}>CANCEL</Text>                
           </TouchableOpacity>
          </View>
      </Modal>   
      

        <View style={{flex:1, backgroundColor:"#2B2B2B", borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
        <View style={{width:"95%", backgroundColor:'rgba(239, 172, 50, 0.05)', borderRadius:30, flexDirection:"row", marginVertical:"3%", height:50,marginHorizontal:"2%", justifyContent:"space-between", alignContent:"center", alignItems:"center"}}>
            <TouchableOpacity activeOpacity={2} onPress={() => navigation.openDrawer('', {isScreen: true})}>
            <Feather name='menu' size={32} style={{alignSelf:"flex-start", color:"rgb(239, 172, 50)", marginHorizontal:"10%"}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Account')}>
            <Image source={require('../../assets/images/John-Doe.jpg')} style={{width:38, height:38, alignSelf:"flex-end", borderRadius:38, marginHorizontal:"10%"}}/>
            </TouchableOpacity>        
        </View>
         <Text style={{fontSize:34, color:"#FFFFFF", fontWeight:"bold", marginHorizontal:"5%", marginVertical:"-1%", width:"80%"}}>Profile Details</Text>
        </View>
        <View style={{flex:3, flexDirection:"column"}}>
            <View style={{flexDirection:"row", width:"90%", marginVertical:"5%", marginHorizontal:"4%"}}>
              <TouchableOpacity activeOpacity={0.9}
              onPress={() => setModalVisible(!modalVisible)}>
              <Image source={require("../../assets/images/John-Doe.jpg")} 
              style={{borderRadius:90, height:90, width:90}}/>
              </TouchableOpacity>
              <View style={{marginHorizontal:"3%", marginVertical:"7%"}}>
                <Text style={{fontSize:14, color:"grey", fontWeight:"bold",}}>Display Name</Text>
                <Text style={{fontSize:18, color:"rgb(0,0,0)", fontWeight:"500", marginVertical:"1%"}}>Gift Doe</Text>
              </View>
            </View>
            <View style={{marginHorizontal:"4%", marginVertical:"-3%"}}>
                <Text style={{fontSize:14, color:"grey", fontWeight:"bold",}}>Name</Text>
                <Text style={{fontSize:18, color:"rgb(0,0,0)", fontWeight:"500", marginVertical:"1%"}}>Gift</Text>
              </View>
              <View style={{marginHorizontal:"4%", marginVertical:"3%"}}>
                <Text style={{fontSize:14, color:"grey", fontWeight:"bold",}}>Email Address</Text>
                <Text style={{fontSize:18, color:"rgb(0,0,0)", fontWeight:"500", marginVertical:"1%"}}>giftDoe@gmail.com</Text>
              </View>
              <View style={{marginHorizontal:"4%", marginVertical:"2%"}}>
                <Text style={{fontSize:14, color:"grey", fontWeight:"bold",}}>Phone Number</Text>
                <Text style={{fontSize:18, color:"rgb(0,0,0)", fontWeight:"500", marginVertical:"1%"}}>0321456987</Text>
              </View>
              <View style={{marginHorizontal:"4%", marginVertical:"0%"}}>
                <Text style={{fontSize:14, color:"grey", fontWeight:"bold",}}>Date of Birth</Text>
                <Text style={{fontSize:18, color:"rgb(0,0,0)", fontWeight:"500", marginVertical:"1%"}}>27 Jul, 2022</Text>
              </View>
              <View style={{marginHorizontal:"4%", marginVertical:"0%"}}>
                <Text style={{fontSize:14, color:"grey", fontWeight:"bold",}}>Nationality</Text>
                <Text style={{fontSize:18, color:"rgb(0,0,0)", fontWeight:"500", marginVertical:"1%"}}>South African</Text>
              </View>
        </View>
        <View style={{flex:1}}></View>
        <View style={{ width:"100%"}}>
          <TouchableOpacity 
          onPress={() => navigation.navigate('Profile Details')}
          activeOpacity={1}
           style={{borderColor:"rgb(239, 172, 50)", borderWidth:1, width:"90%", height:40, alignSelf:"center", marginVertical:"5%", borderRadius:30, alignItems:"center", justifyContent:"center"}}>
            <Text style={{fontSize:14, color:"rgb(239, 172, 50)", fontWeight:"500"}}>
              EDIT PROFILE
            </Text>
          </TouchableOpacity>
        </View>
        </>
  )
}


const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    width:"100%",
    height:"100%",
  },
  modalView: {
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