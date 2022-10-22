
import { View, Text, StyleSheet, TextInput, ScrollView, Button, ActivityIndicator, Alert } from 'react-native'
import { useEffect, useState } from 'react'
import firebase from '../database/firebase'
import PropertyView from './PropertyView'

const PropertyDetails = (props) => {
    const initialState = {
        id:"",
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
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(true);
    const handleTextChange = (value, prop) =>{
        setState({...state, [prop]: value });
    };
    const GetPropertyById = async (id) => {
        //obtener el documento del ID
        const dbRef = firebase.db.collection("state").doc(id);
        const doc = await dbRef.get();
        const state = doc.data();
        setState({ ...state, id:doc.id,});
        setLoading(false);
    };
    const deleteState = async () =>{
        setLoading(true)
        const dbRef=firebase.db
            .collection("state")
            .doc(props.route.params.StateId);
        await dbRef.delete();
        setLoading(false)
        props.navigation.navigate("PropertyView");    
    };

    const openConfirmationAlert = () => {
        Alert.alert(
            "Removing the User",
            "Are you sure?",
            [
                {text: "Yes", onPress: () => deleteState()},
                {text: "No", onPress: () => console.log("canceled")},
            ],
            {
                cancelable: true,
            }    
        );
    };

    const updateProperty = async () =>{
        const stateRef = firebase.db.collection("state").doc(state.id);
        await stateRef.set({
            name: state.name,
        //ciudad
        town: state.town,
        //direccion
        address: state.address,
        //huespedes
        guests: state.guests,
        //dormitorios
        bedrooms: state.bedrooms,
        //camas
        beds: state.beds,
        //baños
        bathrooms: state.bathrooms,

        });
        setState(initialState);
        props.navigation.navigate("PropertyView");
    };
    useEffect(() => {
        GetPropertyById(props.route.params.StateId);
    },[]);

    
    if (loading) {
        return(
            <View style={styles.loader}>
                <ActivityIndicator size="large" color="#9E9E9E" />
            </View>
        );
    }

    return(
        <ScrollView style={style.container}>
        {/* Name Imput*/}
        <View>
            <TextInput
                placeholder="Name"
                autoComplete="statename"
                style={StyleSheet.inputGroup}
                value={satate.name}
                onChangeText={(value) => handleChangeText(value, "name")}
                />
        </View>
        {/* Town Imput*/}
        <View >
            <TextInput
                placeholder="Town"
                autoComplete="stateTown"
                style={StyleSheet.inputGroup}
                value={satate.town}
                onChangeText={(value) => handleChangeText(value, "town")}
                />
        </View>
        {/* Address Imput*/}
        <View>
            <TextInput
                placeholder="Address"
                autoComplete="stateAddress"
                style={StyleSheet.inputGroup}
                value={satate.address}
                onChangeText={(value) => handleChangeText(value, "address")}
                />
        </View>
         {/* Guests Imput*/}
         <View>
            <TextInput
                placeholder="Guests"
                autoComplete="stateGuets"
                style={StyleSheet.inputGroup}
                value={satate.guests}
                onChangeText={(value) => handleChangeText(value, "guests")}
                />
        </View>
         {/* Bedrooms Imput*/}
         <View >
            <TextInput
                placeholder="Bedrooms"
                autoComplete="stateBedrooms"
                style={StyleSheet.inputGroup}
                value={satate.bedrooms}
                onChangeText={(value) => handleChangeText(value, "bedrooms")}
                />
        </View>
         {/* Beds Imput*/}
         <View>
            <TextInput
                placeholder="Beds"
                autoComplete="stateBeds"
                style={StyleSheet.inputGroup}
                value={satate.beds}
                onChangeText={(value) => handleChangeText(value, "beds")}
                />
        </View>
         {/*  Bathrooms Imput*/}
         <View >
            <TextInput
                placeholder=" Bathrooms"
                autoComplete="stateBathrooms"
                style={StyleSheet.inputGroup}
                value={bathrooms}
                onChangeText={(value) => handleChangeText(value, " bathrooms")}
                
                />
        </View>

        <View>
    <Button 
    title="Update Property" 
    onPress={() => updateProperty()} 
    color="#19AC52"
    />
  </View>
  <View>
    <Button 
    title="Delete Property" 
    onPress={() => saveNewProperties()} 
    color="#E37399"
    />
  </View>
    </ScrollView>

    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 35,
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
    inputGroup: {
      flex: 1,
      padding: 0,
      marginBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: "#cccccc",
    },
    btn: {
      marginBottom: 7,
    },
  });
  export default PropertyDetails;