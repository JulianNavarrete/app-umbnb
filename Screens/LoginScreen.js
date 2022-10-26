import React from "react";
import { View, Text, StyleSheet, TpuchnableOpacity, Button, Alert, ScrollView  } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

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
                <Button
                    title="Press me"
                    onPress={() => Alert.alert('Button')}/> 
        </View>
    );
    }

export default LoginScreen;