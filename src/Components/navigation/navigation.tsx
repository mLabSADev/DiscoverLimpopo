/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, { useState, useEffect } from 'react';
import { NativeBaseProvider, Box, Text, Image } from "native-base";

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  Animated,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

//Screen
import Onboarding from '../../pages/Onboarding/Onboarding';
import Onboarding2 from '../../pages/Onboarding/Onboarding2';
import Onboarding3 from '../../pages/Onboarding/Onboarding3';
import Signin from '../../pages/SignIn/Signin';
import Signup from '../../pages/SignUp/Signup';

import HOME from '../../pages/Home/Home';
import MAGAZINES from '../../pages/Magazines/Magazines';
import MAGAZINESDETAILS from '../../pages/Magazines/MagazineDetails';
import ACCOMODATION from '../../pages/Accomodation/Accomodation';
import ACCOMODATIONDETAILS from '../../pages/Accomodation/AccomodationDetails';
import BOOKING from '../../pages/Booking/Bookings';
import BOOKINGDETAILS from '../../pages/Booking/BookingDetails';
import RESTAURANTS from '../../pages/Restaurants/Restaurants';
import RESTAURANTDETAILS from '../../pages/Restaurants/RestaurantDetails';
import ProfileDetails from '../../pages/Account/EditProfileDetails';
import SPECIALPACKAGE from '../../pages/Specials/SpecialPackages';
import SPECIALPACKAGEDETAILS from '../../pages/Specials/SpecialPackageDetails';
import ACCOUNT from '../../pages/Account/Profile';

import Icon from 'react-native-vector-icons/Foundation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

//firebase
import auth from '@react-native-firebase/auth';
import CustomSidebarMenu from '../navigation/CustomSidebarMenu';
import Profile from '../../pages/Account/Profile';
import AccomodationDetails from '../../pages/Accomodation/AccomodationDetails';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useAuth } from '../../context/auth.context';
import Loader from '../loader';
import BookingProcess from '../../pages/Accomodation/BookingProcess';
import Feather from 'react-native-vector-icons/Feather';


const image = 'https://media.istockphoto.com/id/1364105164/photo/hologram-human-head-deep-learning-and-artificial-intelligence-abstract-background.jpg?b=1&s=170667a&w=0&k=20&c=i9-oulHCR0LCxqzqUW2Q7bKt3RrdbCZU0OXqXV2gw-o=';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const navigation = () => {

  const { user, isInitializing } = useAuth();


  const Account = () => {
    return (
      <Stack.Navigator screenOptions={({ navigation, route }) => ({
        headerShown: false
      })}>
        <Stack.Screen name='Account' component={Profile} />
        <Stack.Screen name='Profile Details' component={ProfileDetails} />
      </Stack.Navigator>
    )
  }

  const Home = () => {
    return (
      <Stack.Navigator screenOptions={({ navigation, route }) => ({
        headerShown: false
      })}>
        <Stack.Screen name='Home' component={HOME} options={({ navigation, route }) => ({
          headerShown: true,
          header(props) {
            return (
              <>
                <Box style={{ backgroundColor: "#F4FAFF", }}>
                  <ImageBackground style={{ width: "100%", height: 125 }} source={require("../../assets/images/advert.jpg")} blurRadius={3}>
                    <Box style={{ marginVertical: "2%", flexDirection: "column", marginHorizontal: "3%", height: "90%" }}>
                      <Box style={{ borderWidth: 1, borderColor: "rgb(239, 172, 50)", borderRadius: 30, width: 110, height: 30, justifyContent: "center" }}>
                        <Text style={{ fontFamily: "Plus Jakarta Sans", color: "#FFFFFF", alignSelf: "center", }}>advertisement</Text>
                      </Box>
                      <Box style={{ width: "100%", flexDirection: "row", justifyContent: "center", height: "55%" }}>
                        <Text fontFamily="Plus Jakarta Sans" width="80%" fontSize={24} fontWeight="bold" color="#FFFFFF" style={{ marginVertical: "-1%" }}>PEERMONT GIN & NOMALI GIN LAUNCH</Text>
                        <Text style={{ fontFamily: "Plus Jakarta Sans", color: "rgb(239, 172, 50)", width: "20%", alignSelf: "center", fontWeight: "bold" }}>VIEW</Text>
                      </Box>
                      <Text style={{ fontFamily: "Plus Jakarta Sans", color: "#FFFFFF", marginVertical: ".5%" }}>DISCOVER LIMPOPO</Text>
                    </Box>
                  </ImageBackground>
                </Box>

                <Box style={{ width: "95%", backgroundColor: 'rgba(239, 172, 50, 0.05)', borderRadius: 30, flexDirection: "row", marginVertical: "3%", height: 50, marginHorizontal: "2%", justifyContent: "space-between", alignContent: "center", alignItems: "center", }}>
                  <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Feather name='menu' size={32} style={{ alignSelf: "flex-start", color: "rgb(239, 172, 50)", marginHorizontal: "10%" }} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('Account')}>
                    <Image source={{ uri: user?.imageUrl ? user?.imageUrl : image }} alt={'profile'} style={{ width: 38, height: 38, alignSelf: "flex-end", borderRadius: 38, marginHorizontal: "10%" }} />
                  </TouchableOpacity>
                </Box>
              </>
            )
          },
        })} />
        <Stack.Screen name='Accomodation' component={ACCOMODATION} />
        <Stack.Screen name='AccomodationDetails' component={AccomodationDetails}
          options={({ navigation, route }) => ({
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
            headerLeft(props) {
              return (
                <Box style={{ marginVertical: "10%" }}>
                  <TouchableOpacity activeOpacity={2} onPress={() => navigation.goBack()} style={{ backgroundColor: "rgb(239, 172, 50)", borderRadius: 30, height: 50, width: 50, alignSelf: "center", justifyContent: "center" }}>
                    <MaterialIcons name='keyboard-arrow-left' size={32} style={{ alignSelf: "center", alignContent: "center", color: "#FFFFFF", marginHorizontal: "10%" }} />
                  </TouchableOpacity>
                </Box>
              )
            },
            headerRight(props) {
              return (
                <Box style={{ alignSelf: "flex-end", marginHorizontal: "-10%", marginVertical: "0%" }}>
                  <TouchableOpacity onPress={() => navigation.navigate('Account')}>
                    <Image alt='profile' source={{ uri: user?.imageUrl ? user?.imageUrl : image }} style={{ width: 38, height: 38, alignSelf: "flex-end", borderRadius: 38, marginHorizontal: "10%" }} />
                  </TouchableOpacity>
                </Box>
              )
            },
          })}
        />
        <Stack.Screen name='Restaurants' component={RESTAURANTS} />
        <Stack.Screen name='RestaurantDetails' component={RESTAURANTDETAILS}
          options={({ navigation, route }) => ({
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
            headerLeft(props) {
              return (
                <Box style={{ marginVertical: "10%" }}>
                  <TouchableOpacity activeOpacity={2} onPress={() => navigation.goBack()} style={{ backgroundColor: "rgb(239, 172, 50)", borderRadius: 30, height: 50, width: 50, alignSelf: "center", justifyContent: "center" }}>
                    <MaterialIcons name='keyboard-arrow-left' size={32} style={{ alignSelf: "center", alignContent: "center", color: "#FFFFFF", marginHorizontal: "10%" }} />
                  </TouchableOpacity>
                </Box>
              )
            },
            headerRight(props) {
              return (
                <Box style={{ alignSelf: "flex-end", marginHorizontal: "-10%", marginVertical: "0%" }}>
                  <TouchableOpacity onPress={() => navigation.navigate('Account')}>
                    <Image alt='profile' source={{ uri: user?.imageUrl ? user?.imageUrl : image }} style={{ width: 38, height: 38, alignSelf: "flex-end", borderRadius: 38, marginHorizontal: "10%" }} />
                  </TouchableOpacity>
                </Box>
              )
            },
          })}
        />
        <Stack.Screen name='Magazine' component={MAGAZINES} />
        <Stack.Screen name='MagazineDetails' component={MAGAZINESDETAILS} 
         options={({ navigation, route }) => ({
          headerShown: true,
          headerTitle: "",
          headerTransparent: true,
          headerLeft(props) {
            return (
              <Box style={{ marginVertical: "10%" }}>
                <TouchableOpacity activeOpacity={2} onPress={() => navigation.goBack()} style={{ backgroundColor: "rgb(239, 172, 50)", borderRadius: 30, height: 50, width: 50, alignSelf: "center", justifyContent: "center" }}>
                  <MaterialIcons name='keyboard-arrow-left' size={32} style={{ alignSelf: "center", alignContent: "center", color: "#FFFFFF", marginHorizontal: "10%" }} />
                </TouchableOpacity>
              </Box>
            )
          },
          headerRight(props) {
            return (
              <Box style={{ alignSelf: "flex-end", marginHorizontal: "-10%", marginVertical: "0%" }}>
                <TouchableOpacity onPress={() => navigation.navigate('Account')}>
                  <Image alt='profile' source={{ uri: user?.imageUrl ? user?.imageUrl : image }} style={{ width: 38, height: 38, alignSelf: "flex-end", borderRadius: 38, marginHorizontal: "10%" }} />
                </TouchableOpacity>
              </Box>
            )
          },
        })}
      />
        <Stack.Screen name='Account' component={Profile} />
        <Stack.Screen name='Profile Details' component={ProfileDetails} />
        <Stack.Screen name='BookingProcess' component={BookingProcess} />
      </Stack.Navigator>
    )
  }

  const Booking = () => {
    return (
      <Stack.Navigator screenOptions={({ navigation, route }) => ({
        headerShown: false
      })}>
        <Stack.Screen name='Booking' component={BOOKING} />
        <Stack.Screen name='BookingDetails' component={BOOKINGDETAILS} />
        <Stack.Screen name='Account' component={Profile} />
        <Stack.Screen name='Profile Details' component={ProfileDetails} />
      </Stack.Navigator>
    )
  }

  const Accomodation = () => {
    return (
      <Stack.Navigator screenOptions={({ navigation, route }) => ({
        headerShown: false
      })}>
        <Stack.Screen name='Accomodation' component={ACCOMODATION} />
        <Stack.Screen name='AccomodationDetails' component={ACCOMODATIONDETAILS} />
        <Stack.Screen name='Account' component={Profile} />
        <Stack.Screen name='Profile Details' component={ProfileDetails} />
        <Stack.Screen name='BookingProcess' component={BookingProcess} />
      </Stack.Navigator>
    )
  }

  const UserStack = () => {
    return (
      <Drawer.Navigator initialRouteName="Home"

        defaultScreenOptions={{
          drawerActiveTintColor: "#FFFFFF",
          drawerInactiveTintColor: "#000000",
          drawerItemStyle: { marginVertical: 5, borderRadius: 30 },
          drawerInactiveBackgroundColor: 'rgba(239, 172, 50, 0.05)',
          drawerActiveBackgroundColor: 'rgb(239, 172, 50)',

        }}
        screenOptions={{
          drawerActiveTintColor: "#FFFFFF",
          drawerInactiveTintColor: "#000000",
          overlayColor: "transparent",
          drawerInactiveBackgroundColor: 'rgba(239, 172, 50, 0.05)',
          drawerActiveBackgroundColor: 'rgb(239, 172, 50)',
          headerBackgroundContainerStyle: {
            width: "100%",
            height: 125,
            alignSelf: 'center',
          }

        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}
      >
        <Drawer.Screen name='HOME' component={Home} options={({ navigation, route }) => ({
          headerShown: false,
          drawerIcon(props: { color: string, size: number, focused: boolean }) {
            return (<Box>
              <Icon name="home" size={18} color={props.focused ? "#FFFFFF" : "rgb(0,0,0)"} />
            </Box>)
          },
          drawerLabel(props: { color: string, size: number, focused: boolean }) {
            return (
              <>
                <Text fontSize={14} fontWeight="700" color={props.focused ? "#FFFFFF" : "rgb(0,0,0)"} fontFamily="Plus Jakarta Sans" style={{ marginHorizontal: "-12%" }}>HOME</Text>
              </>
            )
          }
        })} />
        <Drawer.Screen name='ACCOMODATION' component={Accomodation} options={({ navigation, route }) => ({
          headerShown: false,
          drawerIcon(props: { color: string, size: number, focused: boolean }) {
            return (<Box>
              <MaterialIcons name="business" size={18} color={props.focused ? "#FFFFFF" : "rgb(0,0,0)"} />
            </Box>)
          },
          drawerLabel(props: { color: string, size: number, focused: boolean }) {
            return (
              <>
                <Text fontSize={14} fontWeight="700" color={props.focused ? "#FFFFFF" : "rgb(0,0,0)"} fontFamily="Plus Jakarta Sans" style={{ marginHorizontal: "-15%" }}>ACCOMODATION</Text>
              </>
            )
          }
        })} />
        <Drawer.Screen name='BOOKING HISTORY' component={Booking} options={({ navigation, route }) => ({
          headerShown: false,
          drawerIcon(props: { color: string, size: number, focused: boolean }) {
            return (<Box>
              <Entypo name="back-in-time" size={18} color={props.focused ? "#FFFFFF" : "rgb(0,0,0)"} />
            </Box>)
          },
          drawerLabel(props: { color: string, size: number, focused: boolean }) {
            return (
              <>
                <Text fontSize={14} fontWeight="700" color={props.focused ? "#FFFFFF" : "rgb(0,0,0)"} fontFamily="Plus Jakarta Sans" style={{ marginHorizontal: "-15%" }}>BOOKING HISTORY</Text>
              </>
            )
          }

        })} />
        <Drawer.Screen name='SPECIAL PACKAGES' component={Special} options={({ navigation, route }) => ({
          headerShown: false,
          drawerIcon(props: { color: string, size: number, focused: boolean }) {
            return (<Box>
              <MaterialCommunityIcons name="auto-fix" size={18} color={props.focused ? "#FFFFFF" : "rgb(0,0,0)"} />
            </Box>)
          },
          drawerLabel(props: { color: string, size: number, focused: boolean }) {
            return (
              <>
                <Text fontSize={14} fontWeight="700" color={props.focused ? "#FFFFFF" : "rgb(0,0,0)"} fontFamily="Plus Jakarta Sans" style={{ marginHorizontal: "-15%", }}>SPECIAL PACKAGES</Text>
              </>
            )
          }
        })} />
        <Drawer.Screen name='ACCOUNT' component={Account} options={({ navigation, route }) => ({
          headerShown: false,
          drawerIcon(props: { color: string, size: number, focused: boolean }) {
            return (<Box>
              <FontAwesome5 name="user-alt" size={18} color={props.focused ? "#FFFFFF" : "rgb(0,0,0)"} />
            </Box>)
          },
          drawerLabel(props: { color: string, size: number, focused: boolean }) {
            return (
              <>
                <Text fontSize={14} fontWeight="700" color={props.focused ? "#FFFFFF" : "rgb(0,0,0)"} fontFamily="Plus Jakarta Sans" style={{ marginHorizontal: "-15%", }}>ACCOUNT</Text>
              </>
            )
          }
        })}
        />
      </Drawer.Navigator>
    )
  }

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={(props: { navigation: any, route: any }) => ({
        headerShown: false
      })} >
        <Stack.Screen name='Onboarding' component={Onboarding} />
        <Stack.Screen name='Onboarding3' component={Onboarding3} />
        <Stack.Screen name='Signin' component={Signin} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='Onboarding2' component={Onboarding2} />
      </Stack.Navigator>
    )
  }

  const Special = () => {
    return (
      <Stack.Navigator screenOptions={(props: { navigation: any, route: any }) => ({
        headerShown: false
      })} >
        <Stack.Screen name='SpecialPackages' component={SPECIALPACKAGE} user={user} />
        <Stack.Screen name='SpecialPackagesDetails' component={SPECIALPACKAGEDETAILS} user={user} />
        <Stack.Screen name='Account' component={Profile} />
        <Stack.Screen name='Profile Details' component={ProfileDetails} />
      </Stack.Navigator>
    )
  }

  const LoaderComponent = () => {
    return (
      <View>
        <Loader isLoading={true} />
      </View>
    )
  }

  const InitStack = () => {
    return (
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Init" component={LoaderComponent} />
      </Stack.Navigator>
    )
  }

  return (
    <>
      <NavigationContainer >
        {isInitializing ? <InitStack /> : (user ? <UserStack /> : <AuthStack />)}
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});


export default navigation;