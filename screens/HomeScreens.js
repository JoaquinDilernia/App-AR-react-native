import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Logo from '../assets/AR1.png';
import { useNavigation } from '@react-navigation/native';



const HomeScreens = () => {
    const navigation = useNavigation();


  return (
    <View style={style.container}>
        <Image source={Logo} style={{ width: 305, height: 159 }} />
        <Text style={style.titulo}>Bienvenido a la App</Text>
        <TouchableOpacity 
        style={{backgroundColor: 'black', padding: 10, borderRadius: 5, marginTop: 10}}
        onPress={() => navigation.navigate('Details')}
        >
            <Text style={{color: 'white'}}>Ir a Detalles</Text>
        </TouchableOpacity>

    </View>
  )
}

export default HomeScreens

const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titulo: {
      fontSize: 20,
      color: '#000',
      fontWeight: 'bold',
    },
  
  
  });