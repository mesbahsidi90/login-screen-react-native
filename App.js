import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import BouttonGradient from './Boutton';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Hello</Text>
      <Text style={styles.subTitle}>Sign in to your account</Text>
      <TextInput
        placeholder='Enter Your Email'
        style={styles.textInput}
      />
      <TextInput
        placeholder='Passwrd'
        style={styles.textInput}
      />
      <BouttonGradient/>
      <Text style={styles.forgotPassword}>forgot your Password!</Text>
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
  tinyLogo:{
    width: 50,
  },
  titulo: {
    fontSize:80,
    fontWeight:'bold',
    color: '#34434D'
  },
  subTitle:{
    fontSize:20,
    color:'gray'
  },
  textInput: {
    borderWidth:1,
    borderColor:'transparent',
    width:"80%",
    height: 50,
    padding:9,
    paddingStart: 20,
    marginTop:20,
    borderRadius:20,
    backgroundColor:'#fff'
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  forgotPassword: {
    fontSize:14,
    color:'gray',
    marginTop:20
  }
});
