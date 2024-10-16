/* eslint-disable */
<script src="http://localhost:8097"></script>
{/* <script src="http://192.168.1.29:8097"></script> */}
import React, {
  useEffect,
  // useEffect,
  useState,
} from 'react';
import {
  // Button,
  SafeAreaView,
  ScrollView,
  // ScrollView,
  // StatusBar,
  // StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Section} from '../Section/Section';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import Loader from '../Loader/Loader';
import {useNavigation} from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../../screens/HomeScreen';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
import styles from './LoginStyles';
import Input from '../Input/Input';

GoogleSignin.configure({
  webClientId:
    '139387485373-gge9nt41v8dulo7k78vqmrl5f9d0mv1d.apps.googleusercontent.com',
  offlineAccess: true,
  forceCodeForRefreshToken: true,
});

export const Login = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const navigation = useNavigation<HomeScreenNavigationProp>();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // console.log(userInfo, 'it is a user info');
      
      // const { idToken } = userInfo;
      const { idToken } = await GoogleSignin.getTokens();
      const googleCridentials = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCridentials);
      navigation.navigate('About');
      // console.log('User in response', user);
    } catch (error) {
      console.error('Error during Google Sign-In:', error);
    }

    // auth().setPersistence(auth.Auth.Persistence.LOCAL);
  };

  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth().onAuthStateChanged(authUser => {
      if (authUser) {
        setUser(authUser);
        setLoading(false);
        navigation.navigate('About');
      } else {
        navigation.navigate('Home');
        setLoading(false);
      }
    });

    setLoading(false);
  }, []);

  if (loading) {
    return <Loader />;
  }

  // if (user === null) {
  //   navigation.navigate('Home');
  // }

  // if (user) {
  //   navigation.navigate('About');
  // }
  return (
    // <ScrollView >
    <SafeAreaView style={backgroundStyle}>
      <Section title="Please login2">
        <Input />
        <Input />
        <TouchableOpacity
          style={{
              backgroundColor: '#7b96bc',
              padding: '2%',
              borderRadius: 5,
              marginTop: 20,
              width: 180
            }}
        >
          <Text
            style={{
                color: 'white',
                textAlign: 'center',
              }}
          >
            Login with crids
          </Text>
        </TouchableOpacity>
        <Text style={{
          marginTop: 20,
        }}>Hello, this is a test login page</Text>
        <View>
          <Text>Google Sign-In with Firebase</Text>
          <TouchableOpacity
            onPress={signInWithGoogle}
            style={{
              backgroundColor: '#7b96bc',
              padding: '2%',
              borderRadius: 5,
              marginTop: 20,
              width: 180
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
              }}>
              Sign In with Google
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
          marginTop: 20,
        }}
        >
          Login with Facebok
        </Text>
        <TouchableOpacity
          style={{
              backgroundColor: '#7b96bc',
              padding: '2%',
              borderRadius: 5,
              marginTop: 20,
              width: 180
            }}
        >
          <Text
            style={{
                color: 'white',
                textAlign: 'center',
              }}
          >
            Login with Facebook
          </Text>
        </TouchableOpacity>
      </Section>
      </SafeAreaView>
      // </ScrollView>
  );
};
