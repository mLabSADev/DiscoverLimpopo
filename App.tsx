/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import  * as React from 'react';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, } from '@react-navigation/drawer';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, ImageBackground, TouchableOpacity, Image, View, Animated} from 'react-native';
import Toast, { BaseToast, BaseToastProps, ErrorToast } from 'react-native-toast-message';
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions} from 'react-native/Libraries/NewAppScreen';
//Screen
import Onboarding   from './src/pages/Onboarding/Onboarding';
import Onboarding2 from './src/pages/Onboarding/Onboarding2';
import Onboarding3 from './src/pages/Onboarding/Onboarding3';
import Signin from './src/pages/SignIn/Signin';
import Signup from './src/pages/SignUp/Signup';
import HOME from './src/pages/Home/Home';
import MAGAZINES from './src/pages/Magazines/Magazines';
import MAGAZINESDETAILS from './src/pages/Magazines/MagazineDetails';
import ACCOMODATION from './src/pages/Accomodation/Accomodation';
import ACCOMODATIONDETAILS from './src/pages/Accomodation/AccomodationDetails';
import BOOKING from './src/pages/Booking/Bookings';
import BOOKINGDETAILS from './src/pages/Booking/BookingDetails';
import RESTAURANTS from './src/pages/Restaurants/Restaurants';
import RESTAURANTDETAILS from './src/pages/Restaurants/RestaurantDetails';
import ProfileDetails from './src/pages/Account/EditProfileDetails';
import SPECIALPACKAGE from './src/pages/Specials/SpecialPackages';
import SPECIALPACKAGEDETAILS from './src/pages/Specials/SpecialPackageDetails';
import ACCOUNT from './src/pages/Account/Profile';

import Icon from 'react-native-vector-icons/Foundation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


//firebase
import auth from '@react-native-firebase/auth';
import CustomSidebarMenu from './src/pages/Components/navigation/CustomSidebarMenu';
import Profile from './src/pages/Account/Profile';
import AccomodationDetails from './src/pages/Accomodation/AccomodationDetails';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App () {

  const [user, setUser] = React.useState({});

  const Account = () => {
    return(
    <Stack.Navigator screenOptions={({navigation, route}) => ({
      headerShown:false
    })}>
      <Stack.Screen name='Account' component={Profile}/>
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
      <Stack.Screen name='RestauranntDetails' component={RESTAURANTDETAILS}/>
      <Stack.Screen name='Magazine' component={MAGAZINES}/>
      <Stack.Screen name='MagazineDetails' component={MAGAZINESDETAILS}/>
    </Stack.Navigator>
      )
  }

  const Booking = () => {
    <Stack.Navigator screenOptions={({navigation, route}) => ({
      headerShown:false
    })}>
      <Stack.Screen name='Booking' component={BOOKING}/>
      <Stack.Screen name='BookingDetails' component={BOOKINGDETAILS}/>
    </Stack.Navigator>
  }

  const Accomodation = () => {
    <Stack.Navigator screenOptions={({navigation, route}) => ({
      headerShown:false
    })}>
      <Stack.Screen name='Accomodation' component={ACCOMODATION} screenOptions={({navigation, route}) => ({
      headerShown:false
    })}/>
      <Stack.Screen name='AccomodationDetails' component={ACCOMODATIONDETAILS}/>
    </Stack.Navigator>
  }

  const Special = () => {
    <Stack.Navigator screenOptions={({navigation, route}) => ({
      headerShown:false
    })}>
      <Stack.Screen name='SpecialPackages' component={SPECIALPACKAGE}/>
      <Stack.Screen name='SpecialPackagesDetails' component={SPECIALPACKAGEDETAILS}/>
    </Stack.Navigator>
  }

  const toastConfig = {
    success: (props: JSX.IntrinsicAttributes & BaseToastProps) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: 'green' }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{fontSize: 17, fontWeight: '400'}}
        text2Style={{fontSize: 13, color: 'green'}}
      />
    ),
    error: (props: JSX.IntrinsicAttributes & BaseToastProps) => (
      <ErrorToast
        {...props}
        text1Style={{
          fontSize: 17,
        }}
        text2Style={{fontSize: 13, color: 'red'}}
      />
    )
  };


  React.useEffect(() => {
    const fetch = () => { auth().onAuthStateChanged((userCredential) => {
            const user = userCredential;
            if(user) {
            setUser(user);
            } else {
              setUser({});
            }
        });
    }; 
    () => fetch();
  }, [])
  
  return (
    <>
    <NavigationContainer >
      <Drawer.Navigator initialRouteName="Singup" 
      
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
        height: 155,
        alignSelf: 'center',
      }
       }}
       
       drawerContent={(props) => <CustomSidebarMenu {...props} />}
      >
        { user ? (<>
          <Drawer.Screen name='HOME' component={Home} options={({navigation, route}) => ({
        headerShown:false,
        drawerIcon(props: {color: string, size: number, focused: boolean}) {
            return(<View>
                <Icon name="home" size={20} color={props.focused ? "#FFFFFF" : "rgb(0,0,0)"} />
            </View>)
        },
        drawerLabel(props: {color: string, size: number, focused: boolean}) {
          return(
            <>
            <Text style={{color:props.focused ? "#FFFFFF" : "rgb(0,0,0)", marginHorizontal:"-15%", fontSize:16, fontWeight:"bold"}}>HOME</Text>
          </>
          )
        }         
       })}/>



<Drawer.Screen name='ACCOMODATION' component={Accomodation} options={({navigation, route}) => ({
            headerShown:false,
            drawerIcon(props: {color: string, size: number, focused: boolean}) {
              return(<View>
                  <FontAwesome5 name="hotel" size={18} color={props.focused ? "#FFFFFF" : "rgb(0,0,0)"} />
              </View>)
          },
          drawerLabel(props: {color: string, size: number, focused: boolean}) {
            return(
              <>
              <Text style={{color:props.focused ? "#FFFFFF" : "rgb(0,0,0)", marginHorizontal:"-15%", fontSize:16, fontWeight:"bold"}}>ACCOMODATION</Text>
            </>
            )
          } 
           })}/>



<Drawer.Screen name='BOOKING HISTORY' component={Booking} options={({navigation, route}) => ({
            headerShown:false,
            drawerIcon(props: {color: string, size: number, focused: boolean}) {
              return(<View>
                  <Entypo name="back-in-time" size={20} color={props.focused ? "#FFFFFF" : "rgb(0,0,0)"} />
              </View>)
          },
          drawerLabel(props: {color: string, size: number, focused: boolean}) {
            return(
              <>
              <Text style={{color:props.focused ? "#FFFFFF" : "rgb(0,0,0)", marginHorizontal:"-15%", fontSize:16, fontWeight:"bold"}}>BOOKING HISTORY</Text>
            </>
            )
          } 
            
           })}/>


        <Drawer.Screen name='SPECIAL PACKAGES' component={Special} options={({navigation, route}) => ({
            headerShown:false,
            drawerIcon(props: {color: string, size: number, focused: boolean}) {
              return(<View>
                  <MaterialIcons name="folder-special" size={20} color={props.focused ? "#FFFFFF" : "rgb(0,0,0)"} />
              </View>)
          },
          drawerLabel(props: {color: string, size: number, focused: boolean}) {
            return(
              <>
              <Text style={{color:props.focused ? "#FFFFFF" : "rgb(0,0,0)", marginHorizontal:"-15%", fontSize:16, fontWeight:"bold"}}>SPECIAL PACKAGES</Text>
            </>
            )
          } 
           })}/>


            <Drawer.Screen name='ACCOUNT' component={Account} options={({navigation, route}) => ({
            headerShown:false,
            drawerIcon(props: {color: string, size: number, focused: boolean}) {
              return(<View>
                  <FontAwesome5 name="user-alt" size={20} color={props.focused ? "#FFFFFF" : "rgb(0,0,0)"} />
              </View>)
          },
          drawerLabel(props: {color: string, size: number, focused: boolean}) {
            return(
              <>
              <Text style={{color:props.focused ? "#FFFFFF" : "rgb(0,0,0)", marginHorizontal:"-15%", fontSize:16, fontWeight:"bold"}}>ACCOUNT</Text>
            </>
            )
          } 
          })}
          />

        </>) : (<>
       <Drawer.Screen name='Onboarding' component={Onboarding} options={({navigation, route}) => ({
        headerShown:false,
       })}/>
       <Drawer.Screen name='Onboarding2' component={Onboarding2} options={({navigation, route}) => ({
        headerShown:false,
       })}/>
       <Drawer.Screen name='Onboarding3' component={Onboarding3} options={({navigation, route}) => ({
        headerShown:false,
       })}/>
       <Drawer.Screen name='Signin' component={Signin} options={({navigation, route}) => ({
        headerShown:false,
       })}/>
       <Drawer.Screen name='Signup' component={Signup} options={({navigation, route}) => ({
        headerShown: false
       })} />
       </>
        )}
      </Drawer.Navigator>
    </NavigationContainer>
    <Toast config={toastConfig} />
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
