
import React, {useState, useEffect} from 'react'
import { Button, StyleSheet, ScrollView } from "react-native";
//listar y avatar para listar
import { ListItem, Avatar } from "react-native-elements";


import firebase from "../database/firebase";


const PropertyView = (props) => {
    const [state, setState]= useState([]);

    useEffect(() => {
        firebase.db.collection("state").onSnapshot((QuerySnapshot) => {
            const state = [];
            QuerySnapshot.docs.forEach((doc) => {
                const {name, town, address, guests, bedrooms, beds, bathrooms } = doc.data();
                state.push({
                    id: doc.id,
                    name,
                    address,
                    guests,
                    bedrooms,
                    beds,
                    bathrooms,
                });
                
            });
            setState(state);
        });
    },[]);

    return(
        <ScrollView>
            //navegacion
            <Button
                onPress={() => props.navigation.navigate("CreateProperties")}
                title="Create Propeties"
                />
                {state.map((state)=>{
                    return(
                        <ListItem
                            key={state.id}
                            bottomDivider
                            onPress={()=>{
                                props.navigation.navigate("PropertyDetails", {
                                    StateId: state.id
                                });
                            }}
                            >
                            // chevrom para icono al principio
                            <ListItem.Chevrom />
                            <Avatar
                                source={{
                                    //direccion de el avatar-foto
                                    //uri:

                                }}
                                rounded //avatar circular
                                />
                        <ListItem.Content>

                        </ListItem.Content>
                        </ListItem>
                    );
                })}
        </ScrollView>

    );
};

export default PropertyView;