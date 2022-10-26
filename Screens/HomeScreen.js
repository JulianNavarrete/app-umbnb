import React from "react";
import { Image, View, Text, StyleSheet, TouchnableOpacity, Button, Alert, ScrollView,SafeAreaView } from "react-native";
import {Header, LearnMoreLink, colors, DebugInstructions, ReloadInstructions} from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import logo from '../assets/logo.png';
import ButtonGradient from "../components/ButtonLogin";
import LoginFullComponent from "../components/LoginFullComponent";
import { TextInput } from "react-native-paper";

const HomeScreen = () => {

    const Navigation = useNavigation();

    return (
        <ScrollView style={StyleSheet.container}>
            <Image source={logo} style={{ marginTop:"15%", marginLeft:"35%",width:130, height: 150}}/>
           
            <Text style={{ fontSize: 30,textAlign: "center",marginTop: "10%",}}>WELCOME</Text> 
            <Text style={{ fontSize: 30,textAlign: "center",marginTop: "5%",}}>UM-bnb</Text> 
            <Text style= {{fontSize: 15, textAlign: "center", marginTop:"5%",}}>Sign In to your account</Text>
            <TextInput
                placeholder="example@email.com"
                style={styles.TextInput}
                />
            <TextInput
                placeholder="password"
                style={styles.TextInput}
                secureTextEntry={true}
            />
            <Text style= {styles.forgotPassword}>Forgot your password?</Text>
            <Text style= {styles.forgotPassword}>Don't have an account?</Text>
            <ButtonGradient/>
            <StatusBar style="auto"/>
            <Button
                    title="Press me"
                    onPress={() => Navigation.navigate('Login')}/>   
        </ScrollView>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextInput:{
        padding: 10,
        paddingStart:30,
        width: '80%',
        height: 50,
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: '#fff',
        marginLeft:"10%",
    },
    forgotPassword:{
        fontSize: 14,
        color: 'gray',
        marginTop: 20,
        marginLeft:"35%"
    },

});
export default HomeScreen;
