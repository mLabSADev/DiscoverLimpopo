/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
 import React , {useState, useEffect} from 'react';
 import { NativeBaseProvider, Box, Text } from "native-base";
 
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
   Animated
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 //Screen
 import Onboarding   from '../../pages/Onboarding/Onboarding';
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
 import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
 
 
 //firebase
 import auth from '@react-native-firebase/auth';
 import CustomSidebarMenu from '../navigation/CustomSidebarMenu';
 import Profile from '../../pages/Account/Profile';
 import AccomodationDetails from '../../pages/Accomodation/AccomodationDetails';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useAuth } from '../../context/auth.context';
 
 
 
 const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
 
const navigation = () => {

    const { user, isInitializing } = useAuth();


   const Account = () => {
     return(
     <Stack.Navigator screenOptions={({navigation, route}) => ({
       headerShown:false
     })}>
       <Stack.Screen name='Account' component={Profile} />
       <Stack.Screen name='Profile Details' component={ProfileDetails}/>
     </Stack.Navigator>
     )  
 }
 
   const Home = () => {
       return(
     <Stack.Navigator screenOptions={({navigation, route}) => ({
       headerShown:false
     })}>
       <Stack.Screen name='Home' component={HOME} />
       <Stack.Screen name='Accomodation' component={ACCOMODATION}/>
       <Stack.Screen name='AccomodationDetails' component={AccomodationDetails}/>
       <Stack.Screen name='Restaurants' component={RESTAURANTS} />
       <Stack.Screen name='RestaurantDetails' component={RESTAURANTDETAILS}/>
       <Stack.Screen name='Magazine' component={MAGAZINES}/>
       <Stack.Screen name='MagazineDetails' component={MAGAZINESDETAILS}/>
       {/* <Stack.Screen name='SpecialPackages' component={SPECIALPACKAGE}/>
       <Stack.Screen name='SpecialPackagesDetails' component={SPECIALPACKAGEDETAILS}/> */}
     </Stack.Navigator>
       )
   }
 
   const Booking = () => {
     return(
     <Stack.Navigator screenOptions={({navigation, route}) => ({
       headerShown:false
     })}>
       <Stack.Screen name='Booking' component={BOOKING}/>
       <Stack.Screen name='BookingDetails' component={BOOKINGDETAILS}/>
     </Stack.Navigator>
     )
   }
 
   const Accomodation = () => {
     return(
     <Stack.Navigator screenOptions={({navigation, route}) => ({
       headerShown:false
     })}>
       <Stack.Screen name='Accomodation' component={ACCOMODATION} />
       <Stack.Screen name='AccomodationDetails' component={ACCOMODATIONDETAILS} />
     </Stack.Navigator>
     )
   }

   const UserStack = () => {
    return(
        <Drawer.Navigator initialRouteName="Home" 
       
        defaultScreenOptions={{
         drawerActiveTintColor: "#FFFFFF",
         drawerInactiveTintColor: "#000000",
          drawerItemStyle: {marginVertical: 5, borderRadius:30 },
          drawerInactiveBackgroundColor:'rgba(239, 172, 50, 0.05)',
          drawerActiveBackgroundColor: 'rgb(239, 172, 50)',
          
        }}
        screenOptions={{
       drawerActiveTintColor: "#FFFFFF",
       drawerInactiveTintColor: "#000000",
       overlayColor:"transparent",
       drawerInactiveBackgroundColor:'rgba(239, 172, 50, 0.05)',
       drawerActiveBackgroundColor: 'rgb(239, 172, 50)',
         headerBackgroundContainerStyle:{
         width: "100%",
         height: 125,
         alignSelf: 'center',
       }
       
        }}
        
        drawerContent={(props) => <CustomSidebarMenu {...props}/>}
       >
<Drawer.Screen name='HOME' component={Home} options={({navigation, route}) => ({
      headerShown:false,
      drawerIcon(props: {color: string, size: number, focused: boolean}) {
          return(<Box>
              <Icon name="home" size={18} color={props.focused ? "#FFFFFF" : "rgb(0,0,0)"} />
          </Box>)
      },
      drawerLabel(props: {color: string, size: number, focused: boolean}) {
        return(
          <>
          <Text fontSize={14} fontWeight="700" color={props.focused ? "#FFFFFF" : "rgb(0,0,0)"} fontFamily="Plus Jakarta Sans" style={{ marginHorizontal:"-15%"}}>HOME</Text>
        </>
        )
      }         
     })}/>
<Drawer.Screen name='ACCOMODATION' component={Accomodation} options={({navigation, route}) => ({
          headerShown:false,
          drawerIcon(props: {color: string, size: number, focused: boolean}) {
            return(<Box>
                <FontAwesome5 name="hotel" size={18} color={props.focused ? "#FFFFFF" : "rgb(0,0,0)"} />
            </Box>)
        },
        drawerLabel(props: {color: string, size: number, focused: boolean}) {
          return(
            <>
            <Text fontSize={14} fontWeight="700" color={props.focused ? "#FFFFFF" : "rgb(0,0,0)"} fontFamily="Plus Jakarta Sans" style={{marginHorizontal:"-15%"}}>ACCOMODATION</Text>
          </>
          )
        } 
         })}/>
<Drawer.Screen name='BOOKING HISTORY' component={Booking} options={({navigation, route}) => ({
          headerShown:false,
          drawerIcon(props: {color: string, size: number, focused: boolean}) {
            return(<Box>
                <Entypo name="back-in-time" size={18} color={props.focused ? "#FFFFFF" : "rgb(0,0,0)"} />
            </Box>)
        },
        drawerLabel(props: {color: string, size: number, focused: boolean}) {
          return(
            <>
            <Text fontSize={14} fontWeight="700" color={props.focused ? "#FFFFFF" : "rgb(0,0,0)"} fontFamily="Plus Jakarta Sans" style={{ marginHorizontal:"-15%"}}>BOOKING HISTORY</Text>
          </>
          )
        } 
          
         })}/>
      <Drawer.Screen name='SPECIAL PACKAGES' component={Special} options={({navigation, route}) => ({
          headerShown:false,
          drawerIcon(props: {color: string, size: number, focused: boolean}) {
            return(<Box>
                <MaterialIcons name="folder-special" size={18} color={props.focused ? "#FFFFFF" : "rgb(0,0,0)"} />
            </Box>)
        },
        drawerLabel(props: {color: string, size: number, focused: boolean}) {
          return(
            <>
            <Text fontSize={14} fontWeight="700" color={props.focused ? "#FFFFFF" : "rgb(0,0,0)"} fontFamily="Plus Jakarta Sans"  style={{ marginHorizontal:"-15%", }}>SPECIAL PACKAGES</Text>
          </>
          )
        } 
         })}/>
          <Drawer.Screen name='ACCOUNT' component={Account} options={({navigation, route}) => ({
          headerShown:false,
          drawerIcon(props: {color: string, size: number, focused: boolean}) {
            return(<Box>
                <FontAwesome5 name="user-alt" size={18} color={props.focused ? "#FFFFFF" : "rgb(0,0,0)"} />
            </Box>)
        },
        drawerLabel(props: {color: string, size: number, focused: boolean}) {
          return(
            <>
            <Text fontSize={14} fontWeight="700" color={props.focused ? "#FFFFFF" : "rgb(0,0,0)"} fontFamily="Plus Jakarta Sans"  style={{ marginHorizontal:"-15%", }}>ACCOUNT</Text>
          </>
          )
        } 
        })}
        />
</Drawer.Navigator>
    )
   }

   const AuthStack = () => {
    return(
        <Stack.Navigator  screenOptions={(props: {navigation:any, route:any}) => ({
            headerShown:false
          })} >
        <Stack.Screen name='Onboarding' component={Onboarding} />
        <Stack.Screen name='Onboarding3' component={Onboarding3} />
        <Stack.Screen name='Signin' component={Signin} />
        <Stack.Screen name='Signup' component={Signup}  />
        <Stack.Screen name='Onboarding2' component={Onboarding2} />
       </Stack.Navigator>
    )
   }
 
   const Special = () => {
     return(
     <Stack.Navigator screenOptions={(props: {navigation:any, route:any}) => ({
       headerShown:false
     })} >
       <Stack.Screen name='SpecialPackages' component={SPECIALPACKAGE} user={user}/>
       <Stack.Screen name='SpecialPackagesDetails' component={SPECIALPACKAGEDETAILS} user={user}/>
     </Stack.Navigator>
     )
   }
 
 
   const InitStack = () => {
    return (
      <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name="Init" component={Onboarding3} />
      </Stack.Navigator>
    )
  }
   
   return (
     <>
     <NavigationContainer >
     {isInitializing ? <InitStack /> : (user ? <UserStack/> : <AuthStack/>)}
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