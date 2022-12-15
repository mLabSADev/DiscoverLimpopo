import React, { useState, useEffect } from 'react';
import { Box, Text } from 'native-base';
import { ScrollView, TouchableOpacity, StyleSheet, Modal, Linking } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import moment from 'moment';
import CalendarPicker from 'react-native-calendar-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { DropDown1, DropDown2, DropDown3 } from '../../Components/Dropdowns';
import Accomodations from '../../services/accomodation';
import Toast from 'react-native-toast-message';
import { useAuth } from '../../context/auth.context';
import BookingService from '../../services/booking';
import { InAppBrowser } from 'react-native-inappbrowser-reborn';


const CUSTOM_LOCALE = {
    monthNames: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ],
    dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    today: 'Today',
    // year: `${moment(new Date()).format("YYYY").toString()}`, // letter behind year number -> 2020{year}
}

const data = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '7', value: '7' },
    { label: '8', value: '8' },
];
const disabledDays = ['2022-12-21', '2022-12-12', '2022-12-22', '2022-12-23', '2022-12-24'];


const BookingProcess = ({ navigation, route }) => {

    const { user } = useAuth();

    const [accomodation, setAccomodation] = useState(route.params.accomodation);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date().getTime() + 24 * 60 * 60 * 1000);
    const [people, SetPeople] = useState(0);
    const [noOfRoom, setNoOfRoom] = useState(1);
    const [rooms, setRoom] = useState([]);
    const [value, setValue] = useState(null);
    const [roomValue, setRoomValue] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);
    const [bookingId, setBookingId] = useState("");
    
    const defaultFrom = {
        year: 2019,
        month: 3,
        day: 12,
      };
      const defaultTo = {
        year: 2019,
        month: 3,
        day: 15,
      };
    
      
    
      const [selectedDayRange, setSelectedDayRange] = useState({
        from: defaultFrom,
        to: defaultTo,
      });
    
      const handleDisabledSelect = (disabledDay) => {
        console.log('Tried including a disabled day', disabledDay);
      };

    // const getDeepLink = (path) => {
    //     const scheme = 'https://us-central1-discover-limpopo.cloudfunctions.net'
    //     const prefix = Platform.OS === 'android' ? `${scheme}://` : `${scheme}://`
    //     return prefix + path
    // }




    const bookRoom = async () => {

        const numOfDays = moment(startDate).format("D").toString()
        const numOfDays2 = moment(endDate).format("D").toString()
        const totalNumOfDays = numOfDays2 - numOfDays;
        const totalAmount = totalNumOfDays * roomValue.price * noOfRoom;


        if (roomValue.length <= 0) {
            Toast.show({ type: "error", text2: "Please select your desired room" })
        } else if (people === 0) {
            Toast.show({ type: "error", text2: "Please select the number of guest(s)" })
        } else if (moment(startDate).format(DD).toString() === moment(endDate).format(DD).toString()) {
            Toast.show({ type: "error", text2: "Please select the correct date" })
      } else {
            console.log({ totalAmount })

            BookingService.bookRoom(
                accomodation.accomodationId,
                accomodation.name,
                moment(startDate).format("YYYY-MM-DD").toString(),
                moment(endDate).format("YYYY-MM-DD").toString(),
                people,
                totalNumOfDays,
                noOfRoom,
                roomValue.id,
                roomValue.name,
                roomValue.price,
                false,
                totalAmount,
                user,
                (booking) => {
                    setBookingId(booking);
                    console.log({ booking })
                    const url = `https://us-central1-discover-limpopo.cloudfunctions.net/payDemo?itemName=${accomodation.name}&description=${roomValue.name - roomValue.id}&amount=${totalAmount}&referenceId=${booking}&firstName=${user.userName}&email=${user.email}&callbackUrl=https://us-central1-discover-limpopo.cloudfunctions.net/payment`
                    const payfast = InAppBrowser.open(url).then((results) => {
                        if (results.type === "cancel") {
                            navigation.navigate("Home");
                        }
                    }).catch((error) => { console.log(error) })
                    console.log({ payfast })
                }
            ).then(() => {
                // Toast.show({type:"success", text2:"Your booking has been reserved"})
                // navigation.goBack()
                navigation.navigate("Home");
            })
        }

    }
    // const handleDayPress = (day) => {
    //     setMarkedDates({
    //         [day.dateString]: {
    //             startingDay: true, color: 'green'
    //         },
    //         [moment(day.dateString).add(1, 'days').format('YYYY-MM-DD')]: {
    //             color: 'green'
    //         },
    //         [moment(day.dateString).add(2, 'days').format('YYYY-MM-DD')]: {
    //             color: 'green'
    //         },
    //         [moment(day.dateString).add(3, 'days').format('YYYY-MM-DD')]: {
    //             endingDay: true, color: 'green'
    //         }
    //     })
    // }

    useEffect(() => {
        Accomodations.getRooms(route.params.accomodation.accomodationId, (room) => {
            setRoom(room);
            // console.log(room)
        })
    }, [])


    return (
        <>

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
                    <View style={{ flex: .5 }}></View>
                    <ActivityIndicator size={54} color={'rgb(239, 172, 50)'} />
                </Modal>)}

            <Box style={{ flex: .1 }}></Box>
            <Box style={{ width: "100%", height: "100%", borderTopRightRadius: 30, borderTopLeftRadius: 30, backgroundColor: "#FFFFFF", alignContent: "center", elevation: 5 }}>
                <Box style={{ width: "90%", height: 40, marginVertical: 5, flexDirection: "row", alignSelf: "center", alignContent: "center", alignItems: "center" }}>
                    <Text fontFamily="Plus Jakarta Sans" fontWeight={'bold'} fontSize={20} color="rgb(0,0,0)" style={{ marginVertical: "2%", width: 200 }}>Check In Details</Text>
                    <Box style={{ width: "50%" }}>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => navigation.goBack()}
                            style={{
                                width: 35, height: 35, borderRadius: 40,
                                alignSelf: "flex-end", backgroundColor: "#F4FAFF",
                                alignItems: "center", alignContent: "center",
                                marginHorizontal: 15, elevation: 5, shadowOpacity: 1
                            }}>
                            <Feather name='x' size={24} style={{ alignSelf: "center", color: "grey", alignContent: "center", marginVertical: "15%" }} />
                        </TouchableOpacity>
                    </Box>
                    {/* <PayFastWebView title={'Pay Now'} data={paymentData} />                */}
                </Box>
                <Box style={{ alignSelf: "center", width: "95%", height: 340, backgroundColor: "#F4FAFF", borderRadius: 20 }}>
                <CalendarPicker
                    startFromMonday={true}
                    onDateChange={(date,type) => {
                        try {
                            if (type === "START_DATE") {
                                setStartDate(date);
                            } else if (type === "END_DATE" && date !== null) {
                                setEndDate(date);
                            } else if (type === "END_DATE" && date === null) {
                                setEndDate(new Date().getTime() + 24 * 60 * 60 * 1000)
                            }
                        } catch (error) {
                            
                        } finally {

                            // logic to
                          if (type === "END_DATE" && date !== null) { 
                            const start = moment(startDate).format("dd").toString();   
                            const end = moment(date).format("dd").toString();
                            // for (let i = start,  ) {
                                    //check whether the date selected is not valid 
                                    //if valid procced to check out
                                    //if not valid alert the user about invalid dates selected. 
                            // }
                          }
                        }
                        
                         
                        console.log({date, type})
                    }}
                    disabledDates={disabledDays}
                    selectedDayColor="rgb(239, 172, 50)"
                    todayBackgroundColor="rgb(239, 172, 50)"
                    allowRangeSelection={true}
                    disabledBeforeToday={true}
                    enableDateChange={true}
                    
                    allowBackwardRangeSelect={true}
                    style={{ selectedBetweenDayBackgroundTextColor: "rgb(239, 172, 50)", selectedDayBackgroundColor:"rgb(239, 172, 50)" }}
                    />
                </Box>
                <Box style={{ height: 10 }}></Box>
                <Box style={{ flexDirection: "row", width: "90%", alignSelf: "center", }}>
                    <DropDown1 value={people} setDropdown1={(value) => SetPeople(value)} />
                    <DropDown2 value={rooms} setDropdown2={(value) => setRoomValue(value)} roomValue={roomValue} />
                </Box>
                <Box style={{ height: 30 }}></Box>
                <Box style={{ height: 40, width: "90%", flexDirection: "row", }}>
                    <DropDown3 value={noOfRoom} setDropdown3={(value) => setNoOfRoom(value)} />
                </Box>

                <Box style={{ height: 10 }}></Box>
                <Box style={{ flexDirection: "column", width: "90%", alignSelf: "center" }}>
                    <Text fontFamily="Plus Jakarta Sans" fontWeight={'bold'} fontSize={20} color="rgb(0,0,0)" >Date</Text>
                    <Box style={{ flexDirection: 'row', width: "100%", justifyContent: "space-between" }}>
                        <Box style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text fontFamily="Plus Jakarta Sans" fontWeight={'normal'} fontSize={14} color="rgb(0,0,0)" >{moment(startDate).format('DD MMM').toString()}</Text>
                            <AntDesign name='arrowright' size={14} style={{ fontWeight: "500", marginHorizontal: "2%" }} />
                            <Text fontFamily="Plus Jakarta Sans" fontWeight={'normal'} fontSize={14} color="rgb(0,0,0)">{moment(endDate).format('DD MMM').toString()}</Text>
                        </Box>
                        <Box style={{ alignSelf: "flex-end", alignContent: "flex-end", alignItems: "flex-end", marginHorizontal: "4%" }}>
                            <Text fontFamily="Plus Jakarta Sans" fontWeight={'bold'} fontSize={20} color="rgb(0,0,0)" >{roomValue.price ? `R${roomValue.price * noOfRoom}.00 pp/pn` : ""}</Text>
                        </Box>
                    </Box>
                </Box>

                <Box style={{ height: 5 }}></Box>
                <TouchableOpacity
                    activeOpacity={0.9}
                    // onPress={bookRoom}
                    style={{ alignSelf: "center", backgroundColor: "rgb(239, 172, 50)", width: "90%", height: 45, opacity: 3, justifyContent: "center", borderRadius: 30, }}>
                    <Text style={{ alignSelf: "center", color: "#FFFFFF", fontWeight: "bold", fontFamily: "Plus Jakarta Sans", fontSize: 14 }}>CONTINUE TO PAY</Text>
                </TouchableOpacity>
            </Box>
        </>
    )
}

export default BookingProcess;

