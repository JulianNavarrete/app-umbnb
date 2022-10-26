import React from "react";
import { View, Text, StyleSheet, TpuchnableOpacity, Button, Alert, ScrollView  } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import ButtonCreateHouse from "../components/ButtonCreateHouse";
import ButtonSearchHouse from "../components/ButtonSearchHouse ";

const LoginScreen = () => {
    const Navigation = useNavigation();

    return (
        <View>
            <Text
                style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "20%",
                }}
                >Login!!!</Text>
                <ButtonCreateHouse/>
                <ButtonSearchHouse/>
                <Button
                    title="Press me"
                    onPress={() => Navigation.navigate('Init')}/> 
        </View>
    );
    }

export default LoginScreen;