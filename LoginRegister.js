import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//Screens
import Init from "./Screens/Init";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import Menu from "./Screens/Menu";

import { MaterialCommunityIcons } from '@expo/vector-icons';

const LoginStack = createNativeStackNavigator();
function MyStack(){

        <LoginStack.Navigator
            initialRouteName="HomeScreen"
        >
        <LoginStack.Screen
            name="HomeScreen"
            component={HomeScreen}
        />
        <LoginStack.Screen
            name="Login"
            component={LoginScreen}
        />
        </LoginStack.Navigator>
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
    return(
        <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
            tabBarActiveTintColor: 'purple',
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
                        <MaterialCommunityIcons name="align-vertical-distribute" size={24} color="black" />
                    ),
                    headerShown: false,
                }}
            />
           
        </Tab.Navigator>
    );
}
export default function Comienzo(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
}