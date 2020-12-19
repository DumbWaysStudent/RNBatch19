import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'native-base';

import Login from './src/screens/Login';
import Setting from './src/screens/Setting';
import Home from './src/screens/Home';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator tabBarOptions={{
      activeTintColor: "black",
      inactiveTintColor: "grey"
    }}>
      <Tab.Screen name="HomeScreen" component={Home} options={{
        tabBarLabel: "Home",
        tabBarIcon: () => <Icon name='home' />,
      }} />
      <Tab.Screen name="SettingScreen" component={Setting} options={{
        tabBarLabel: "Setting",
        tabBarIcon: () => <Icon name='settings' />
      }} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const startUp = async () => {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    setIsReady(true)
  }

  useEffect(() => {
    startUp();
  }, [])

  if (!isReady) {
    return <AppLoading />
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Login} name="LoginScreen" options={{
          title: "Login"
        }} />
        <Stack.Screen component={HomeTabs} name="HomeTabs" options={{
          headerShown: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}