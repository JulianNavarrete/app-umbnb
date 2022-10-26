import React from "react";
import { View, Text, StyleSheet, TouchnableOpacity } from "react-native";

const HomeScreen = () => {

    return (
        <View>
            <Text
                style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "20%",
                }}
                >HomeScreen</Text>
                <TouchnableOpacity
                    style={{
                        backgroundColor: "purple",
                        padding: 10,
                        marginTop: "20%",
                        width: "50%",
                        alignSelf: "center",
                        borderRadius: 10,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 15,
                            textAlign: "center",
                            color: "white",
                        }}
                    > Go to Login Screen</Text>    
                    </TouchnableOpacity>    
        </View>
    );
    }


export default HomeScreen;
