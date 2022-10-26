import React from "react";
import { Image, View, Text, StyleSheet, TouchnableOpacity, Button, Alert, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import logo from '../assets/logo.png';
import ButtonGradient from "../components/ButtonLogin";
import LoginFullComponent from "../components/LoginFullComponent";

const HomeScreen = () => {

    const Navigation = useNavigation();

    return (
        <View style={StyleSheet.container}>
            <Image source={logo} style={{ width:430, height: 450}}/>
           
            <Text style={{ fontSize: 30,textAlign: "center",marginTop: "20%",}}>WELCOME</Text> 
            <Text style= {{fontSize: 15, textAlign: "center", marginTop:15,}}>Sign In to your account</Text>

            

            <ButtonGradient/>
            <Button
                    title="Press me"
                    onPress={() => Navigation.navigate('Login')}/>   
        </View>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
export default HomeScreen;
