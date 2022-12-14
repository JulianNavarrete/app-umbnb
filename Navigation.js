import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//Screens
import HomeScreen from "./Screens/HomeScreen";
import Menu  from "./Screens/Menu";
import LoginScreen from "./Screens/LoginScreen";
import Init from "./Screens/Init";

import { MaterialCommunityIcons } from '@expo/vector-icons';


const HomeStackNavigator = createNativeStackNavigator();
function MyStack() {
            
    return(
        <HomeStackNavigator.Navigator
            initialRouteName="HomeScreen"
        >
            <HomeStackNavigator.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <HomeStackNavigator.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    headerShown: false,
                }}
            />
            <HomeStackNavigator.Screen
                name="Init"
                component={Init}
                options={{
                    headerShown: false,
                }}
            />
        </HomeStackNavigator.Navigator>
    )
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
    return(
        <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6" 
        inactiveColor="#3e2465"
         barStyle={{ backgroundColor: '#FF3CBD' }}
        screenOptions={{
            tabBarActiveTintColor: 'black',
            
        }}
        >
            <Tab.Screen 
                name="Home" 
                component={MyStack}
                options={{
                    tabBarLabel: 'Feed',
                    tabBarIcon: ({ 
                        color, 
                        size
                    }) => (
                        <MaterialCommunityIcons name="home" size={24} color="black" />
                    ),
                    headerShown: false,
                }}
            />
<Tab.Screen 
                name="Menu" 
                component={Menu}
                options={{
                    tabBarLabel: 'Menu',
                    tabBarIcon: ({ 
                        color, 
                        size
                    }) => (
                        <MaterialCommunityIcons name="menu" size={24} color="black" />
                    ),
                    headerShown: false,
                }}
            />
          
        </Tab.Navigator>
    );
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}