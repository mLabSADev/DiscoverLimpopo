import React, { useState, useEffect } from 'react';
import { Box, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import moment from 'moment';
import Calendar from "react-native-calendar-range-picker";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { DropDown1, DropDown2 } from '../../Components/Dropdowns';
import Accomodations from '../../services/accomodation';

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


const BookingProcess = ({ navigation, route }) => {


    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [people, SetPeople] = useState(0);
    const [rooms, setRoom] = useState([]);
    


    useEffect(() => {
        Accomodations.getRooms(route.params.accomodationId, (room) => {
            setRoom(room);
          })
    },[])


    return (
        <>
            <Box style={{ flex: .1 }}></Box>
            <Box style={{ width: "100%", height: "100%", borderTopRightRadius: 30, borderTopLeftRadius: 30, backgroundColor: "#FFFFFF", alignContent: "center", elevation: 5 }}>
                <Box style={{ width: "90%", height: 50, marginVertical: 5, flexDirection: "row", alignSelf: "center", alignContent: "center", alignItems: "center" }}>
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

                <Box style={{ height: 15 }}></Box>
                <Box style={{ alignSelf: "center", width: "90%", height: 320, backgroundColor: "#F4FAFF", borderRadius: 20 }}>
                    <Calendar
                        pastYearRange={1}
                        futureYearRange={3}
                        locale={CUSTOM_LOCALE}
                        initialNumToRender={7}
                        disabledBeforeToday={true}
                        isMonthFirst={true}

                        style={{ selectedBetweenDayBackgroundTextColor: "rgb(239, 172, 50)", selectedDayBackgroundColor:"rgb(239, 172, 50)" }}
                        startDate={startDate}
                        endDate={endDate}
                        // singleSelectMode
                        onChange={({ startDate, endDate }) => {
                            setStartDate(startDate);
                            setEndDate(endDate);
                            console.log({ startDate, endDate })
                        }
                        }
                    />
                </Box>
                <Box style={{ height: 20 }}></Box>
                <Box style={{ flexDirection: "column", width: "90%", alignSelf: "center" }}>
                    <Text fontFamily="Plus Jakarta Sans" fontWeight={'bold'} fontSize={20} color="rgb(0,0,0)" >Date</Text>
                    <Box style={{ height: 10 }}></Box>
                    <Box style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text fontFamily="Plus Jakarta Sans" fontWeight={'normal'} fontSize={14} color="rgb(0,0,0)" >{moment(startDate).format('DD MMM').toString()}</Text>
                        <AntDesign name='arrowright' size={14} style={{ fontWeight: "500", marginHorizontal: "2%" }} />
                        <Text fontFamily="Plus Jakarta Sans" fontWeight={'normal'} fontSize={14} color="rgb(0,0,0)">{moment(endDate).format('DD MMM').toString()}</Text>
                    </Box>
                </Box>
                <Box style={{ height: 20 }}></Box>
                <Box style={{flexDirection:"row", width: "90%", alignSelf: "center", }}>
                        <DropDown1 value={people} setDropdown1={(value) => SetPeople(value)}/>
                        <DropDown2 value={rooms} setDropdown2={(value) => setRoom(value)}/>
                </Box>
                <Box style={{ height: 20 }}></Box>
                <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation.navigate('', {})}
              style={{ alignSelf: "center", backgroundColor: "rgb(239, 172, 50)", width: "90%", height: 50, opacity: 3, justifyContent: "center", borderRadius: 30, }}>
              <Text style={{ alignSelf: "center", color: "#FFFFFF", fontWeight: "bold", fontFamily: "Plus Jakarta Sans", fontSize: 14 }}>CONTINUE TO PAY</Text>
            </TouchableOpacity>
            </Box>
        </>
    )
}

export default BookingProcess;