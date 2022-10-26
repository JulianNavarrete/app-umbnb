import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ButtonCreateHouse () {

    
    
    return (
        <TouchableOpacity style={styles.container}>
            <LinearGradient
                // Button Linear Gradient
                colors={['#FFB677', '#FF3CBD']}
                start={{x: 1, y:0}}
                end={{x: 0, y: 1}}
                style={styles.button}
                onPress={() => Navigation.navigate('Login')}
                
                >
                <Text style={styles.text}>Create House</Text>
            </LinearGradient>
            
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        //flex: 1,
        width: '60%',
        alignItems: '50%',
        marginTop: 40,
        marginBottom: 20,
        marginLeft: '25%'
    },
    text:{
        fontSize: 50,
        color: 'white'
      },
    button:{
        width: '80%',
        height: 200,
        borderRadius: 30,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }
})