import React from "react";
import { Image, View, Text, StyleSheet, TouchnableOpacity, Button, Alert, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import logo from '../assets/logo.png';

const HomeScreen = () => {

    const Navigation = useNavigation();

    return (
        <View style={StyleSheet.container}>
            <Image source={logo} style={{justifyContent: 'center', alignItems: 'Center' width:300, height: 400}}/>
           
            <Text style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "20%",
                }}
                >Hola Julian</Text>  
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
