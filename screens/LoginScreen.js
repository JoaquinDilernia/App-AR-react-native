import React from 'react'
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../assets/AR1.png';



export default function LoginScreen ({promptAsync})  {
    return (
  
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Image source={Logo} style={{ width: 305, height: 159 }} />
            <Text style={{ fontSize: 20, color: '#000', fontWeight: 'bold', }}>Sing In With {" "}</Text>
            <TouchableOpacity
                style={{ backgroundColor: 'black', padding: 10, borderRadius: 5, marginTop: 10 }}
                onPress={() => promptAsync()}
            >
                <Text style={{ color: 'white' }}>Google</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}


