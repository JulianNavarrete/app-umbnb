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
//logo menu
//import { Ionicons } from '@expo/vector-icons'; 


import { Tab } from "react-native-elements";

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
                name="Stack"
                component={StackScreen}
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
      name="Login" 
      component= {MyStack} 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon:({ color, size}) => (
            <Ionicons name="home" size={24} color="black" />
        ),
        headerShown: false,
      }}/>
    <Tab.Screen 
      name="Menu" 
      component= {Menu} 
      options={{
        tabBarLabel: 'Menu',
        tabBarIcon:({ color, size}) => (
            <Ionicons name="menu" size={24} color="black" />
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