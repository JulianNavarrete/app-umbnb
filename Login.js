import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subTitle}>Sing In to your account</Text>
      <TextInput 
        placeholder="user@mail.com"
        style={styles.textInput}
      />
      <TextInput 
        placeholder="Password"
        style={styles.textInput}
      />
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
});
