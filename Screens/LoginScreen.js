import React from "react";
import { View, Text, StyleSheet, TpuchnableOpacity, Button, Alert, ScrollView  } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import ButtonCreateHouse from "../components/ButtonCreateHouse";
import ButtonSearchHouse from "../components/ButtonSearchHouse ";

const LoginScreen = () => {
    const Navigation = useNavigation();

    return (
        <ScrollView>
            <Text
                style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "20%",
                }}
                >OPTIONS</Text>
                <ButtonCreateHouse/>
                <Button
                    title="Press me"
                    onPress={() => Navigation.navigate('Init')}/> 
                <ButtonSearchHouse/>
                <Button
                    title="Press me"
                    onPress={() => Navigation.navigate('Menu')}/> 
        </ScrollView>
    );
    }

export default LoginScreen;