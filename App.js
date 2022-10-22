import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert, SafeAreaView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator()

import Login from './Screens/Login';
import Menu from './Screens/Menu';
import CreateProperties from './Screens/CreateProperties';
import PropertyView from './Screens/PropertyView';
import PropertyDetails from './Screens/PropertyDetails';

function MyStack(){
  return(
    //pantallas nuevas
    <Stack.Navigator>
      <Stack.Screen 
        name="Login" 
        component= {Login} 
        options={{title: 'Login' }}/>
      <Stack.Screen 
        name="Menu" 
        component= {Menu} 
        options={{title: 'Menu'}}/>
      <Stack.Screen 
        name="CreateProperties" 
        component= {CreateProperties} 
        options={{title:'New Property' }}/>
      <Stack.Screen 
        name="PropertyView" 
        component= {PropertyView} 
        options={{title:'Property View' }}/>
      <Stack.Screen 
        name="PropertyDetails" 
        component= {PropertyDetails} 
        options={{title: 'Property Details' }}/>
    </Stack.Navigator>

  )
}
export default function App() {
  
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );  

};