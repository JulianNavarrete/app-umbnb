import React from "react";
//importar barra inferior
import { createBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//Screens
import HomeScreen from "./Screens/HomeScreen";
import Menu from './Screens/Menu';
import Login from './Screens/Login';


//logo casita
//import { Ionicons } from '@expo/vector-icons';
import MaterialComunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//logo menu
//import { Ionicons } from '@expo/vector-icons'; 
//import { MaterialCommunityIcons } from '@expo/vector-icons';





const HomeStacNavigator = createNativeStackNavigator();
function MyStack(){
    return(
        <HomeStacNavigator.Navigator
            initialRouteName="HomeScreen"
        >
            <HomeStacNavigator.Screen
                name="HomeScreen"
                component={HomeScreen}
                />
            <HomeStacNavigator.Screen
                name="Login"
                component={Login}
                options={{
                    headerBackTitleVisible: false,
                }}
                />
            </HomeStacNavigator.Navigator>     
    )
}

const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
        //pantallas nuevas
    <Tab.Navigator 
        initialRouteName="Home"
        screenOptions= {{
            tabBarActiveTintColor: 'purple',
        }}
    >
    <Tab.Screen 
      name="Home" 
      component= {MyStack} 
      options={{
        tabBarLabel: 'Feed',
        tabBarIcon:({ color, size}) => (
            <MaterialComunityIcons name="home" color={color} size={size}/>
        ),
        headerShown: false,
      }}/>
    <Tab.Screen 
      name="Menu" 
      component= {Menu} 
      options={{
        tabBarLabel: 'Menu',
        tabBarIcon:({ color, size}) => (
            <MaterialCommunityIcons name="menu" color={color} size={24} />
            
        ),
      }}/>
  </Tab.Navigator>
//las que faltan van dentro de MENU
    );
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <MyTab/>
        </NavigationContainer>
    );
}