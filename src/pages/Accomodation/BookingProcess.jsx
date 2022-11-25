import React from 'react';
import { Box, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import moment from 'moment';

const BookingProcess = ({ navigation, route }) => {
    return (
        <>
        <Box style={{flex:.1}}></Box>
            <Box style={{width:"100%", height:"100%", borderTopRightRadius: 30, borderTopLeftRadius:30, backgroundColor:"#FFFFFF", alignContent:"center", elevation:5}}>
                <Box style={{ width: "90%", height: 50, marginVertical: 5, flexDirection: "row", alignSelf:"center", alignContent:"center", alignItems:"center" }}>
                        <Text fontFamily="Plus Jakarta Sans" fontWeight={'bold'} style={{ fontSize:20, color: "rgb(0,0,0)", marginVertical: "2%", width: 200 }} sty>Check In Details</Text>
                       <Box style={{width: "50%"}}>
                        <TouchableOpacity 
                        activeOpacity={0.9}
                        onPress={() => navigation.goBack()}
                        style={{ width: 35, height: 35, borderRadius: 40, 
                        alignSelf: "flex-end", backgroundColor: "#F4FAFF", 
                        alignItems: "center", alignContent: "center", 
                        marginHorizontal:15, elevation:5, shadowOpacity:1}}>
                            <Feather name='x' size={24} style={{ alignSelf: "center", color: "grey", alignContent:"center", marginVertical:"15%" }}/>
                        </TouchableOpacity>
                        </Box>
                    {/* <PayFastWebView title={'Pay Now'} data={paymentData} />                */}
                </Box>

                <Box style={{height:15}}></Box>
                <Box style={{alignSelf:"center"}}>
                          
                            
                </Box>
            </Box>
        </>
    )
}

export default BookingProcess;