import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types';
import {
  ScrollView,
  // Text,
  View
} from 'react-native';
// import styles from './HomeScreenStyles';
import {Login} from '../components/Login/Login';

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export const Home = () => {
  return (
    <ScrollView>
      <View>
        {/* <Text style={styles.header}>It s a home screen</Text> */}
        <Login />
      </View>
    </ScrollView>
  );
};
