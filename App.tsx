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
import { NativeBaseProvider, Box, extendTheme } from "native-base";

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Animated
} from 'react-native';
import Toast, { BaseToast, BaseToastProps, ErrorToast } from 'react-native-toast-message';
import AntDesign from 'react-native-vector-icons/AntDesign';



import Navigation from './src/Components/navigation/navigation';
import { AuthProvider } from './src/context/auth.context';
import { LoadingProvider } from './src/context/loading.context';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export const colorTheme = {
  primary: {
    900: "#EFAC32",
    800: "#2B2B2B",
    700: "#598392",
    600: "#FE4A49",
    500: "#F4FAFF",
    // 400: "#b3bef6",
    // 300: "#29A785",
    // 200: "#5F5F5F",
     100: "#rgb(0, 0, 0)",
     50: "#FFFFFF",
  },
};

const theme = extendTheme({ colors: colorTheme, });

const toastConfig = {
  success: (props: JSX.IntrinsicAttributes & BaseToastProps) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: 'green' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{fontSize: 17, fontWeight: '400', fontFamily:"Plus Jakarta Sans"}}
      text2Style={{fontSize: 13, color: 'green',fontFamily:"Plus Jakarta Sans"}}
    />
  ),
  error: (props: JSX.IntrinsicAttributes & BaseToastProps) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 17,
      }}
      text2Style={{fontSize: 13, color: 'red', fontFamily:"Plus Jakarta Sans"}}
    />
  ),
  star: (props: JSX.IntrinsicAttributes & BaseToastProps) => (
    <BaseToast
      {...props}
      text1Style={{
        fontSize: 17,
      }}
      
      text2Style={{fontSize: 14, color: 'rgb(239, 172, 50)', fontFamily:"Plus Jakarta Sans"}}
    />


  )
};



export default function App () {
  return (
    <>
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={colorTheme.primary[50]} translucent={false}/>
      <NativeBaseProvider theme={theme}>
          <LoadingProvider>
                <AuthProvider>
                    <Navigation />
                </AuthProvider>
          </LoadingProvider>
      </NativeBaseProvider>
    </SafeAreaView>
    <Toast config={toastConfig}/>
    </>
  );
};

