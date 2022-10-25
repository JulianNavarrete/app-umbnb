import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
<<<<<<< HEAD
//import { BlackButton, WhiteButton, RedButton } from '../elements/Button';
=======
import { BlackButton, WhiteButton, RedButton } from '../elements/Button';
>>>>>>> 258411a40f491f42c6cf44f38ae272d225b0fb55



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
