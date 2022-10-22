import React, {useState} from 'react'
import {Button, View, StyleSheet, TextInput, ScrollView, } from 'react-native'

import firebase from '../database/firebase'
const AddNewProperties= (props) => {
    const initalState = {
        //nombre
        name:"",
        //ciudad
        town: "",
        //direccion
        address: "",
        //huespedes
        guests: "",
        //dormitorios
        bedrooms: "",
        //camas
        beds: "",
        //baños
        bathrooms: "",

    };
    const [state, setState] = useState(initalState);

    const handleChangeText = (value, name) => {
        setState({...state, [name]: value});
    };
    //guardado asincronico
    const saveNewProperties = async () => {
        if (state.name === "") {
            alert("please provide a name");
        }else {
         //crear un objeto en firebase
         try{
            await firebase.db.collection("properties").add({
                name: state.name,
                town: state.town,
                address: state.address,
                guests: state.guests,
                bedrooms: state.bedrooms,
                beds: state.beds,
                bathrooms: state.bathrooms,
            });
            //navegacion hacia la siguiente vista
            props.navigation.navigate("PropertyView");
         }   catch(error) {
            console.log(error)
         }
        }
    };

    return(
        <ScrollView style={style.container}>
            {/* Name Imput*/}
            <View style={StyleSheet.inputGroup}>
                <TextInput
                    placeholder="Name"
                    onChangeText={(value) => handleChangeText(value, "name")}
                    value={state.name}
                    />
            </View>
            {/* Town Imput*/}
            <View style={StyleSheet.inputGroup}>
                <TextInput
                    placeholder="Town"
                    onChangeText={(value) => handleChangeText(value, "town")}
                    value={state.town}
                    />
            </View>
            {/* Address Imput*/}
            <View style={StyleSheet.inputGroup}>
                <TextInput
                    placeholder="Address"
                    onChangeText={(value) => handleChangeText(value, "address")}
                    value={state.address}
                    />
            </View>
             {/* Guests Imput*/}
             <View style={StyleSheet.inputGroup}>
                <TextInput
                    placeholder="Guests"
                    onChangeText={(value) => handleChangeText(value, "guests")}
                    value={state.guests}
                    />
            </View>
             {/* Bedrooms Imput*/}
             <View style={StyleSheet.inputGroup}>
                <TextInput
                    placeholder="Bedrooms"
                    onChangeText={(value) => handleChangeText(value, "bedrooms")}
                    value={state.bedrooms}
                    />
            </View>
             {/* Beds Imput*/}
             <View style={StyleSheet.inputGroup}>
                <TextInput
                    placeholder="Beds"
                    onChangeText={(value) => handleChangeText(value, "beds")}
                    value={state.beds}
                    />
            </View>
             {/*  Bathrooms Imput*/}
             <View style={StyleSheet.inputGroup}>
                <TextInput
                    placeholder=" Bathrooms"
                    onChangeText={(value) => handleChangeText(value, " bathrooms")}
                    value={state.bathrooms}
                    />
            </View>

            <View style={styles.button}>
        <Button title="Save" onPress={() => saveNewProperties()} />
      </View>
        </ScrollView>
    );
};

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 35,
        },
        inputGroup:{
            flex: 1,
            padding: 0,
            marginBottom: 15,
            borderBottomWidth: 1,
            borderBottomColor: "#cccccc",
        },
        loader: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",
          },
    });
    

export default CreateProperties