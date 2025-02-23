import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { Home } from '../screens/HomeScreen';
import { Elem } from '../components/Elem/Elem';
import NewsItem from '../components/NewsItem/NewsItem';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
   return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={Elem} />
        <Stack.Screen name="NewsItem" component={NewsItem} />
      </Stack.Navigator>
      </NavigationContainer>
  );
}
