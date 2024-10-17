/* eslint-disable */
{/* <script src="http://localhost:8097"></script>; */}
{
  /* <script src="http://192.168.1.29:8097"></script> */
}
import React, {
  useEffect,
  // useEffect,
  useState,
} from 'react';
import {
  // Button,
  SafeAreaView,
  // ScrollView,
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
import {HomeScreenNavigationProp} from '../../screens/HomeScreen';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
import styles from './LoginStyles';
import Input from '../Input/Input';
import CustomButton from '../CustomButton/CustomButton';
import { useSignInWithGoogle } from '../../auth/firebase';

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

  const [showPass, setShowPass] = useState(true);
  // Use custom hook to sign in
  const signInWithGoogle = useSignInWithGoogle();

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

  return (
    <SafeAreaView style={backgroundStyle}>
      <Section title="Please login2">

        <Input />

        <View
          style={{
            width: 180,
            display: 'flex',
            flexDirection: 'row',
            marginTop: 30,
          }}>
          <Input text="Type your password" isPassword={showPass} />
          <TouchableOpacity
            onPress={() => setShowPass(prevState => !prevState)}
            style={{
              backgroundColor: '#7b96bc',
              padding: '2%',
              borderRadius: 5,
              width: 75,
              height: 40,
              marginLeft: 5,
              display: 'flex',
              justifyContent: 'center'
            }}
            activeOpacity={0.7}
          >
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
              }}>
              See pass
            </Text>
            </TouchableOpacity>
            </View>
        <CustomButton name='Login with crids' />
        <Text
          style={{
            marginTop: 20,
          }}>
          Login with Google
        </Text>
        <View>
          <CustomButton name='Sign In with Google' onPress={signInWithGoogle} />
        </View>
        <Text
          style={{
            marginTop: 20,
          }}>
          Login with Facebok
        </Text>
        <CustomButton name='Login with Facebook' />
        <Text
          style={{
            marginTop: 20,
          }}>
          Don't have acc? Create it
        </Text>
        <CustomButton name='Create your acc' />
      </Section>
    </SafeAreaView>
  );
};
