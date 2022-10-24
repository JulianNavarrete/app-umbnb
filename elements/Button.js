import React from "react"
import {Button, View, Text, TouchableOpacity, Image } from "react-native"

export function BlackButton(props){
    const {onPress, text} = props
    return(
        <TouchableOpacity
            style = {{
                ...styles.button,
                backgroundColor: '#0a0a0a'        
            }}
            onPress = {onPress}
        >
            <Text
                style = {{
                    ...styles.buttonText,
                    color: '#f1f1f1',
                }}
            >
                {Text}
            </Text>
            <Image source={require("./assets/buttonBuscar.png")}/>
        </TouchableOpacity>
    )
}
export function WhiteButton(props){
    const {onPress, text} = props
    return(
        <TouchableOpacity
            style = {{
                ...styles.button,
                backgroundColor: '#f1f1f1'       
            }}
            onPress = {onPress}
        >
            <Text
                style = {{
                    ...styles.buttonText,
                    color: '#0a0a0a', 
                }}
            >
                {Text}
            </Text>
            <Image source={require("./assets/buttonCrear.png")}/>
        </TouchableOpacity>
    )
}
export function RedButton(props){
    const {onPress, text} = props
    return(
        <TouchableOpacity
            style = {{
                ...styles.button,
                backgroundColor: '#ff0000'        
            }}
            onPress = {onPress}
        >
            <Text
                style = {{
                    ...styles.buttonText,
                    color: '#f1f1f1',
                    fontWeight: 'bold'
                }}
            >
                {Text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    button,
        alignSelf: 'center',
        borderRadius: 10,
        marginVertical: 10,
        paddingVertical: 15,
        width:'80%'
    },
    buttonText, {
    textAling: 'center',
    },
)