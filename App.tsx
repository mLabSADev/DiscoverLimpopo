/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, {} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//Screen
import Onboarding   from './src/pages/Onboarding/Onboarding';
import Onboarding2 from './src/pages/Onboarding/Onboarding2';
import Onboarding3 from './src/pages/Onboarding/Onboarding3';
import Signin from './src/pages/SignIn/Signin';
import Signup from './src/pages/SignUp/Signup';
import Home from './src/pages/Home/Home';


const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

export default function App () {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
       <Stack.Screen name='Onboarding' component={Onboarding} options={({navigation, route}) => ({
        headerShown:false,
       })}/>
       <Stack.Screen name='Onboarding2' component={Onboarding2} options={({navigation, route}) => ({
        headerShown:false,
       })}/>
       <Stack.Screen name='Onboarding3' component={Onboarding3} options={({navigation, route}) => ({
        headerShown:false,
       })}/>
       <Stack.Screen name='Signin' component={Signin} options={({navigation, route}) => ({
        headerShown:false,
       })}/>
       <Stack.Screen name='Signup' component={Signup} options={({navigation, route}) => ({
        headerShown: false
       })} />
       <Stack.Screen name='Home' component={Home} options={({navigation, route}) => ({
        headerShown:false
       })}/>
      </Stack.Navigator>
    </NavigationContainer>
    
    
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
