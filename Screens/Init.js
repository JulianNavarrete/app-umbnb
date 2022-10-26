import React from "react";
import { View, Text, StyleSheet, TouchnableOpacity,Button,Alert,ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

const Init = () => {

    return (
        
        <ScrollView>
            
            <Text
                style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "20%",
                }}
                >Ingrese los datos de la propiedad que desea crear</Text>
                <Button
                title="Create"
                onPress={() => Alert.alert('Simple Button pressed')}/> 
        </ScrollView>
    );
    }

export default Init;