import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import {
  ScrollView,
  // Button,
  Text, View
} from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import styles from './HomeScreenStyles';
import { Login } from '../components/Login/Login';


export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export const Home = () => {
    // const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <ScrollView >
    <View>
      <Text
        style={styles.header}
      >
        It s a home screen
      </Text>
      {/* <Button title="Go to About" onPress={() => {
        navigation.navigate('About');
      }} /> */}
      <Login />

      </View>
      </ScrollView>
  );
};