import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View,TextInput, Button, ScrollView } from "react-native";



export default function LoginFullComponent ()
{
return(
    <ScrollView>
        //vista
        <View style={StyleSheet.container}>
         <Text style={styles.umBnm}>UM-BNB</Text>
         <Text style={styles.subTitle}> Sing In to your account</Text>
        //formulario
        <TextInput
            placeholder="user@mail.com"
            onChangeText={(value) => handleChangeText('email', value)}
            style={styles.textInput}
            autoCapitalize='none'
            autoCompleteType='email'
            autoCorrect='flase'
            />
        <TextInput
            placeholder="Password"
            onChangeText={(value) => handleChangeText('Password', value)}
            style={styles.textInput}
            secureTextEntry={true}
        />
        <Text style={styles.forgotPassword}> Forgot your Password?</Text>
        <Button title="Log in" onPress={("SingUp")}/>
        <Text style={styles.forgotPassword}>Don't have an account?</Text>
        <StatusBar style="auto"/>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f1f1f1',
      alignItems: 'center',
      justifyContent: 'center',
    },
    umBnb:{
      fontSize: 50,
      marginBottom: 100,
      //paddingBottom: 60,
      paddingTop: 0
    },
    title:{
      fontSize: 80,
      color: '#000',
    },
    subTitle:{
      fontSize: 20,
      color: 'grey',
      fontWeight: 'bold',
    },
    textInput:{
      padding: 10,
      paddingStart: 25,
      width: '80%',
      padding: 10,
      height: 50,
      marginTop: 20,
      borderRadius: 30,
      backgroundColor: '#fff',
    },
    forgotPassword:{
      fontSize: 14,
      marginTop: 20,
      color: 'grey'
    }
  }
  );
