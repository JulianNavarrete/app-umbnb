import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import ButtonGradient from './components/Button';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.umBnb}>UM-bnb</Text>
      <Text style={styles.subTitle}>Sign In to your account</Text>
      <TextInput 
        placeholder="user@mail.com"
        style={styles.textInput}
        autoCapitalize='none'
        autoCompleteType='email'
        autoCorrect={false}
      />
      <TextInput 
        placeholder="Password"
        style={styles.textInput}
        secureTextEntry={true}
        autoCorrect={false}
      />
      <ButtonGradient/>
      <Text style={styles.forgotPassword}>Forgot your password?</Text>
      <Text style={styles.forgotPassword}>Don't have an account?</Text>
      <StatusBar style="auto" />
    </View>
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
    marginBottom: 15,
    color: 'grey'
  }
});
