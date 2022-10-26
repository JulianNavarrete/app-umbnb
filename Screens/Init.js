import React from "react";
import { View, Text, StyleSheet, TpuchnableOpacity,Button,Alert } from "react-native";

const Init = () => {

    return (
        
        <View>
            <Text
                style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "20%",
                }}
                >hola denuevo</Text>
                <Button
                title="Press me"
                onPress={() => Alert.alert('Simple Button pressed')}/> 
        </View>
    );
    }

export default Init;