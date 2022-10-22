import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { BlackButton, WhiteButton, RedButton } from '../assets/Buttons';



function Menu () { 
    return(
        <SafeAreaView style ={{ backgroundColor: '#ccc', flex: 1 }} >
            <BlackButton onPress={() => alert('Boton negro')} text="Crear" />
            <WhiteButton onPress={() => alert('Boton blanco')} text="Listar" />
            <RedButton onPress={() => alert('Boton rojo')} text="Cerrar Sesion" />
        </SafeAreaView>

    );
};

export default Menu;
