import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//icons
import { MaterialCommunityIcons } from '@expo/vector-icons';


//screens
import HomeScreens from './screens/HomeScreens';
import SettingScreen from './screens/SettingScreen';
import StackScreens from './screens/StackScreens';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,

    }}
    >
      <Stack.Screen name="Home" component={HomeScreens} />
      <Stack.Screen name="Details" component={StackScreens} />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#fff',
      }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'black',
          borderTopWidth: 0,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.05,
          shadowRadius: 10,
        },
        headerShown: false,

      }}
    >
      <Tab.Screen
        name="Home" component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false,

        }}
      />

      <Tab.Screen
        name="Descuentos" component={SettingScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="sale" color={color} size={size} />
          ),
          headerShown: false,

        }}
      />

      <Tab.Screen
        name="Mis Compras" component={SettingScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
          headerShown: false,

        }}
      />

      <Tab.Screen
        name="Cuenta" component={SettingScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          tabBarBadge: 3,
          headerShown: false,
        }}
      />

    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
